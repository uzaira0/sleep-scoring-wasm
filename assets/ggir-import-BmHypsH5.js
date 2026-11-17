import { p as e } from "./ggir-results-types-e7JA7N7O.js";
import { An as t, B as n, Bn as a, Bt as i, Cn as s, Cr as r, E as o, En as l, Ft as c, Hn as u, Ir as d, It as p, L as f, M as m, Mr as h, N as g, Nr as y, O as w, On as _, Or as v, P as b, Pr as S, R as k, Rn as I, Sn as A, Sr as x, T as N, Tn as T, Tr as M, Vt as z, Wn as R, Yn as E, Zn as $, ar as C, cn as D, cr as P, d as F, dn as O, er as j, f as B, gn as G, gr as L, h as U, j as H, jr as Z, kn as q, l as V, lr as W, n as J, nr as K, o as Y, p as X, r as Q, s as ee, un as te, vn as ne, vr as ae, wn as ie, x as se, xn as re, zn as oe } from "./background-jobs-DfX4HEEW.js";
import { $ as le, $n as ce, $r as ue, A as de, At as pe, B as fe, Bt as me, C as he, Cr as ge, Ct as ye, D as we, Dt as _e, E as ve, En as be, Et as Se, Ft as ke, Gn as Ie, H as Ae, I as xe, J as Ne, K as Te, Kt as Me, Ln as ze, Lr as Re, Lt as Ee, M as $e, Mn as Ce, Mr as De, N as Pe, Nn as Fe, O as Oe, Or as je, Ot as Be, Pn as Ge, Pt as Le, Qr as Ue, Qt as He, R as Ze, Rn as qe, S as Ve, Sn as We, Sr as Je, St as Ke, T as Ye, Tt as Xe, U as Qe, Ur as et, V as tt, Vr as nt, Vt as at, W as it, Wr as st, Wt as rt, Xn as ot, Xr as lt, Y as ct, Yn as ut, Yr as dt, Z as pt, Zt as ft, _ as mt, _n as ht, _r as gt, _t as yt, a as wt, an as _t, b as vt, bn as bt, bt as St, c as kt, cr as It, ct as At, d as xt, dr as Nt, ei as Tt, en as Mt, er as zt, et as Rt, f as Et, ft as $t, g as Ct, gn as Dt, gt as Pt, ht as Ft, i as Ot, ir as jt, it as Bt, j as Gt, jn as Lt, jt as Ut, k as Ht, kn as Zt, kr as qt, kt as Vt, l as Wt, lr as Jt, lt as Kt, mt as Yt, n as Xt, nn as Qt, nr as en, nt as tn, o as nn, ot as an, p as sn, pn as rn, pt as on, q as ln, qn as cn, qr as un, r as dn, rn as pn, rr as fn, rt as mn, s as hn, sr as gn, st as yn, t as wn, tn as _n, tr as vn, tt as bn, u as Sn, un as kn, ur as In, v as An, vn as xn, vt as Nn, w as Tn, wr as Mn, wt as zn, x as Rn, xn as En, xr as $n, xt as Cn, y as Dn, yn as Pn, yt as Fn, z as On, zt as jn } from "./db-89zTZpB7.js";
import { C as Bn, S as Gn, T as Ln, a as Un, b as Hn, g as Zn, h as qn, m as Vn, n as Wn, o as Jn, p as Kn, s as Yn, t as Xn, v as Qn, w as ea, y as ta } from "./ggir-results-import-CdpuBDos.js";
import { i as na, t as aa } from "./wal-D_Sx3Exe.js";
import { C as ia, D as sa, S as ra, T as oa, a as la, b as ca, d as ua, f as da, g as pa, h as fa, i as ma, l as ha, n as ga, o as ya, p as wa, s as _a, t as va, v as ba, w as Sa, x as ka, y as Ia } from "./local-nonwear-unified-D2LSPpG8.js";
import { _ as Aa, a as xa, c as Na, d as Ta, f as Ma, g as za, h as Ra, i as Ea, l as $a, n as Ca, o as Da, p as Pa, r as Fa, s as Oa, t as ja, v as Ba } from "./epoch-utils-ChGMQfjw.js";
import { A as Ga, B as La, C as Ua, D as Ha, E as Za, G as qa, H as Va, J as Wa, K as Ja, M as Ka, N as Ya, O as Xa, P as Qa, Q as ei, S as ti, T as ni, U as ai, V as ii, W as si, X as ri, Y as oi, Z as li, _ as ci, b as ui, g as di, h as pi, j as fi, k as mi, p as hi, q as gi, v as yi, x as wi, z as _i } from "./local-export-shard-worker-CCG86mok.js";
import { S as vi, b as bi, d as Si, i as ki, m as Ii, n as Ai, o as xi, r as Ni, s as Ti, w as Mi, x as zi, y as Ri } from "./ingest-CX1LMUIc.js";
import { t as Ei } from "./valid-day-criteria-BmeRWsjw.js";
const $i = "Review Data Settings > CSV Settings before opening this file.";
function Ci(e) {
	return `Column-mapped CSV mapping could not be applied: ${e.map((e) => e.message).join(" ")} ${$i}`;
}
function Di({ cores: e, deviceMemoryGib: t, maxExtraWorkers: n = 3, workerMemoryGib: a = 1, minDeviceMemoryGib: i = 8 }) {
	return !Number.isFinite(t) || (t ?? 0) < i || !Number.isFinite(e) || (e ?? 0) <= 2 ? 0 : Math.max(0, Math.min(n, Math.floor(e) - 2, Math.floor(t / 2 / a) - 1));
}
function Pi(e, t) {
	return t.primary && e instanceof Error && e.message.includes("timed out during");
}
let Fi = 0;
async function Oi(e, { primary: t, getPrimary: n, extraWorkers: a, memoryBudgetGib: i, signal: s, cancelOperation: r = () => {}, createWorker: o }) {
	if (s?.aborted) throw new DOMException("Aborted: raw passes", "AbortError");
	if (0 === e.length) return [];
	if (e.some((e) => {
		const t = Function.prototype.toString.call(e.run);
		return !t.includes("[native code]") && /^(?:async\s*)?(?:function(?:\s+\w+)?\s*|[\w$]+\s*)?\(\s*\)/u.test(t);
	})) throw new Error("A raw pass must receive its pool worker");
	if (0 === a && !t && !n && !o) throw new Error("A single-worker pass must borrow or inject its worker");
	const l = o ?? Z, c = e.map((e, t) => ({
		pass: e,
		index: t
	})), u = new Array(e.length), d = /* @__PURE__ */ new Map(), p = {
		stopped: !1,
		done: !1
	}, f = (e, t) => {
		const n = d.get(e);
		void 0 !== n && (d.delete(e), Fi = Math.max(0, Fi - n), !t && e.release ? e.release() : e.terminate());
	};
	let m;
	const g = new Promise((e, t) => {
		m = () => {
			p.stopped = !0, t(new DOMException("Aborted: raw passes", "AbortError"));
		}, s?.addEventListener("abort", m, { once: !0 }), s?.aborted && m();
	}), y = async (e, a, i, s) => {
		let o, c, m = i, g = !1;
		const y = 0 === e && (void 0 !== t || void 0 !== n), w = new Proxy({}, { get: (e, a) => {
			if (p.done) throw new Error("Raw pass pool finished");
			if (p.stopped) throw new DOMException("Aborted: raw passes", "AbortError");
			if (!c && !o) if (y) c = t ?? n();
			else if (Fi + m <= 1 + 4 * Number.EPSILON) {
				Fi += m;
				try {
					o = l({ singleThread: !0 });
				} catch (i) {
					throw Fi = Math.max(0, Fi - m), i;
				}
				d.set(o, m);
			} else c = t ?? n?.() ?? h();
			return Reflect.get(c ?? o.api, a);
		} }), _ = {
			cancel: () => {
				c ? r() : (g = !0, o && f(o, !0));
			},
			get primary() {
				return void 0 !== c || Boolean(y);
			}
		};
		let v = !1;
		try {
			for (let e = a(); e; e = a()) {
				if (p.stopped) return;
				g && (o = void 0, g = !1);
				const t = o ? s?.(e) : void 0;
				o && void 0 !== t && (f(o, !0), o = void 0, m = t);
				const { pass: n, index: a } = e;
				u[a] = await n.run(w, _);
			}
		} catch (b) {
			throw v = !0, p.stopped = !0, b;
		} finally {
			o && f(o, v || p.stopped);
		}
	}, w = Math.min(e.length, a + 1);
	let _;
	if (void 0 === i) {
		const e = Array.from({ length: w }, () => ({
			cost: 0,
			passes: []
		}));
		a > 0 && c.sort((e, t) => t.pass.cost - e.pass.cost);
		for (const t of c) {
			const n = e.reduce((e, t) => t.cost < e.cost ? t : e);
			n.passes.push(t), n.cost += t.pass.cost;
		}
		_ = Promise.all(e.map((e, t) => y(t, () => e.passes.shift(), 1 / (a + 1))));
	} else {
		const e = (e) => e?.pass.memoryGib ?? 0;
		c.sort((t, n) => e(n) - e(t) || n.pass.cost - t.pass.cost);
		let t = 0, n = 0, a = 0;
		_ = new Promise((s, r) => {
			let o = 0;
			const l = () => {
				for (; n < w && t < c.length && (0 === n || a + e(c[t]) <= i);) {
					let d = e(c[t]);
					a += d, o += 1;
					const p = (t) => {
						const n = e(t);
						if (!(2 * n > d)) return a -= d - n, d = n, queueMicrotask(l), Math.min(1, n / i);
					};
					y(n++, u, Math.min(1, d / i), p).then(() => {
						0 === --o && s();
					}, r);
				}
			}, u = () => {
				const e = c[t++];
				return e && l(), e;
			};
			l();
		});
	}
	try {
		await Promise.race([g, _]);
	} catch (v) {
		p.stopped = !0;
		try {
			r();
		} catch {}
		throw v;
	} finally {
		p.done = !0, m && s?.removeEventListener("abort", m);
		for (const e of [...d.keys()]) f(e, !0);
	}
	return u;
}
function ji(e, t, n) {
	const a = Object.values(t);
	if (!a.includes(e)) throw new Error(`${n} must be one of ${a.join(", ")} (bundle reported "${e}")`);
	return e;
}
function Bi(e) {
	return ji(e, ie, "temporalBasis");
}
const Gi = {
	full_calibrated_signal: "https://w3id.org/sleep-scoring-ontology/method/actours/full-pipeline-file/1",
	epoch_series_part3to5: "https://w3id.org/sleep-scoring-ontology/method/actours/ggir-epoch-parts-3-to-5/1"
}, Li = "actours.compute.file.v1", Ui = Number.MAX_SAFE_INTEGER;
function Hi(e) {
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
		if (Number.isInteger(e) && Math.abs(e) > Ui) throw new TypeError("method parameter integers must be exactly representable in IEEE-754 binary64");
		return e;
	}
	if (Array.isArray(e)) return e.map(Hi);
	if ("object" == typeof e) {
		const t = {};
		for (const [n, a] of Object.entries(e)) null != a && (t[n] = Hi(a));
		return t;
	}
	throw new TypeError("unsupported method parameter type: " + typeof e);
}
const Zi = /* @__PURE__ */ new Set([
	"id",
	"fileId",
	"createdAt",
	"updatedAt"
]);
async function qi(e) {
	const t = [...e].sort((e, t) => e.analysisDate.localeCompare(t.analysisDate)).map((e) => en(Hi(function(e) {
		const t = {};
		for (const [n, a] of Object.entries(e)) Zi.has(n) || void 0 !== a && (t[n] = a);
		return t;
	}(e))));
	return ae(`[${t.join(",")}]`);
}
const Vi = {
	accelerator: "cpu_only",
	concurrency: {
		mode: "serial",
		max_threads: null
	},
	vectorization: "baseline"
};
async function Wi(e, t = X(), n) {
	const a = t, i = await async function(e) {
		if (!/^[0-9a-f]{64}$/.test(e.sourceContentSha256)) throw new Error("sourceContentSha256 must be 64 lowercase hex characters");
		if (!Number.isInteger(e.sourceSizeBytes) || e.sourceSizeBytes < 1) throw new Error("sourceSizeBytes must be a positive integer");
		if (!/^[0-9a-f]{64}$/.test(e.runtimeBuild.artifactSha256)) throw new Error("runtimeBuild.artifactSha256 must be 64 lowercase hex characters");
		const t = e.dailyRows.length, n = 0 === t ? [] : [`daily_summary_stream:sha256:${await qi(e.dailyRows)}`], a = Vi, i = Gi[e.computePath], s = await async function(e) {
			if (!e.methodSpecificationId.trim()) throw new Error("methodSpecificationId must be nonblank");
			const t = (n = e.params, en(Hi(n)));
			var n;
			return {
				parameter_set_hash: await ae(t),
				method_specification_id: e.methodSpecificationId,
				canonicalization_version: "rfc8785_jcs_v1",
				canonical_parameters_json: t,
				parameter_schema_reference: e.parameterSchemaReference ?? null
			};
		}({
			methodSpecificationId: i,
			params: {
				file_compute_contract: Li,
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
			file_compute_contract_version: Li,
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
		return ae(en({
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
	return F(a, [a.localExecutions], async () => {
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
async function Ji(e, t = h()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
async function Ki(e, t = Ei, n) {
	const a = await J(n).validWearDays(Float64Array.from(e), t);
	return Array.from(a, (e) => 0 !== e);
}
async function Yi(e, t = Ei, n) {
	return J(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
}
function Xi() {
	return [
		"Could not identify file format.",
		"Use Data Settings > CSV Import for mapped vendor, GGIR, MIMS, or generic activity CSV exports.",
		"Native local ingest supports ActiGraph CSV/GT3X, GENEActiv raw CSV/.bin, GGIR meta RData, NHANES PAX80 archives, and recognized generic CSV mappings.",
		"Condor ActLumus/ActTrust TXT files require the server parser today."
	].join(" ");
}
function Qi(e, t) {
	mn(e) && E().storage.reportFull(t, "Browser storage quota was exceeded while saving local results.");
}
function es(e) {
	return "the local model runtime or its input contract rejected the operation";
}
function ts(e) {
	return `LSTM ONNX sleep/wake scoring could not be computed for this raw file${e ? ` because ${e}` : ""}. Count-based scoring is intact.`;
}
function ns(e) {
	if (!e || 0 === e.length) return "";
	let t = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY, a = 0;
	for (const i of e) t = Math.min(t, i), n = Math.max(n, i), a += i;
	return ` (sleep probability min=${t.toFixed(3)}, mean=${(a / e.length).toFixed(3)}, max=${n.toFixed(3)})`;
}
function as(e, t) {
	if (!e || 0 === e.length) return null;
	let n = 0;
	for (const a of e) n += a ? 1 : 0;
	return 0 === n ? `LSTM ONNX sleep/wake scoring produced an all-wake result${ns(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : n === e.length ? `LSTM ONNX sleep/wake scoring produced an all-sleep result${ns(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : null;
}
function is(e, t) {
	const n = [
		...Se(e, ls, t),
		..._e(e, ls),
		...Vt(e, ls, t)
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
function ss(e, t) {
	const n = rs(e, t), a = Boolean(e.datetime_column), i = Boolean(e.date_column && e.time_column);
	return a || i || n.push({
		key: "timestamp",
		message: "Map Date/time, or map both Date and Time."
	}), e.mims_unit_column || n.push({
		key: "mims_unit_column",
		message: "Map a MIMS unit column."
	}), n;
}
function rs(e, t) {
	return [
		...Se(e, ls, t),
		..._e(e, ls),
		...Vt(e, ls, t)
	];
}
const os = [30, 60], ls = [
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
], cs = [
	["axis_x", "axisX"],
	["axis_y", "axisY"],
	["axis_z", "axisZ"],
	["vector_magnitude", "vectorMagnitude"],
	["choi_axis", "choiAxis"]
];
async function us(e, t, n) {
	const a = cs.filter(([, e]) => (t[e]?.length ?? 0) > 0), { series: i } = await e.aggregateEpochSeries({
		target_seconds: k,
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
async function ds(e, t, n, a) {
	const i = n.flatMap((e) => t[e] ? [[e, t[e]]] : []), s = await Promise.all(i.map(([, t]) => us(e, t, a)));
	return Object.fromEntries(i.map(([e], t) => [e, s[t]]));
}
async function ps(e, t, n, a) {
	return 0 === t.length ? new Uint8Array(a.length) : e.projectLabelsOntoGrid(t, n, k, a);
}
async function fs(e, t, n) {
	return Array.from(await e.roundCountStorage(Float64Array.from(t), n));
}
async function ms(e, t) {
	const { dates: n, day: a } = await e.utcDayIndex(Float64Array.from(t)), i = new Map(n.map((e) => [e, []]));
	return a.forEach((e, t) => {
		const a = n[e];
		void 0 !== a && i.get(a)?.push(t);
	}), i;
}
function hs(e, t, n) {
	return t.map((t) => e[t] ?? n);
}
function gs(e) {
	const t = new Float64Array(e.reduce((e, t) => e + t.length, 0));
	let n = 0;
	for (const a of e) t.set(a, n), n += a.length;
	return t;
}
function ys(e, t, n) {
	return Float64Array.from(t, (t) => e[t] ?? n);
}
async function ws(e, t, n, a) {
	return Float64Array.from(await e.uniformTimestamps(t, 1e3 * n, a), (e) => e / 1e3);
}
async function _s(e, t, n, a) {
	if (!Number.isFinite(t) || 0 === n.length || !Number.isFinite(a) || a <= 0) return /* @__PURE__ */ new Map();
	const i = await ms(e, await ws(e, t, a, n.length));
	return new Map(Array.from(i, ([e, t]) => [e, Uint8Array.from(hs(n, t, 0))]));
}
async function vs(e, t, n, a, i = {}) {
	const s = /* @__PURE__ */ new Map();
	if (0 === t.length) return s;
	if (n.length !== t.length || a.length !== t.length) return console.warn("[local-processing] The 5 s GGIR timestamp grid does not match its ENMO/anglez series; skipping the GGIR day split rather than fabricating zeros."), s;
	const r = void 0 !== i.sib && i.sib.length === t.length;
	for (const [y, w] of [["anglex", i.anglex], ["angley", i.angley]]) if (w?.length && w.length !== t.length) throw new Error(`The GGIR ${y} series has ${String(w.length)} epochs where the 5 s grid has ${String(t.length)}.`);
	const o = Boolean(i.anglex?.length), l = Boolean(i.angley?.length), c = void 0 !== i.nonwear && i.nonwear.length === t.length, u = void 0 !== i.invalid && i.invalid.length === t.length, d = void 0 !== i.mimsUnit && i.mimsUnit.length === t.length, p = void 0 !== i.mimsUnitX && i.mimsUnitX.length === t.length, f = void 0 !== i.mimsUnitY && i.mimsUnitY.length === t.length, m = void 0 !== i.mimsUnitZ && i.mimsUnitZ.length === t.length, h = (e, t) => t.map((t) => (e[t] ?? 0) > 0 ? 1 : 0), g = Float64Array.from(t, (e) => e / 1e3);
	for (const [y, w] of await ms(e, g)) s.set(y, {
		timestamps: hs(g, w, 0),
		enmo: hs(n, w, 0),
		anglez: hs(a, w, 0),
		...o ? { anglex: hs(i.anglex, w, 0) } : {},
		...l ? { angley: hs(i.angley, w, 0) } : {},
		...r ? { sib: hs(i.sib, w, 0) } : {},
		...c ? { nonwear: h(i.nonwear, w) } : {},
		...u ? { invalid: h(i.invalid, w) } : {},
		...d ? { mimsUnit: hs(i.mimsUnit, w, NaN) } : {},
		...p ? { mimsUnitX: hs(i.mimsUnitX, w, NaN) } : {},
		...f ? { mimsUnitY: hs(i.mimsUnitY, w, NaN) } : {},
		...m ? { mimsUnitZ: hs(i.mimsUnitZ, w, NaN) } : {}
	});
	return s;
}
async function bs(e, t, n, a, i, s) {
	const r = /* @__PURE__ */ new Map();
	if (0 === t.length || !Number.isFinite(n)) return r;
	for (const [o, l] of Object.entries(a)) r.set(o, await e.foldUniformOntoGrid(n / 1e3, 30, t, Float64Array.from(l.timestamps), i, s));
	return r;
}
async function Ss(e, t, n, a, i) {
	const s = await bs(e, Float64Array.from(t), n, a, i, "majority_ties_sleep");
	return new Map(Array.from(s, ([e, t]) => [e, Uint8Array.from(t)]));
}
async function ks(e, t, n, a, i) {
	const s = await bs(e, Float64Array.from(t), n, a, i, "mean");
	return new Map(Array.from(s, ([e, t]) => [e, Float32Array.from(t)]));
}
async function Is(e, t, n) {
	const a = /* @__PURE__ */ new Map();
	if (!t || 0 === t.length || null === n || !Number.isFinite(n)) return a;
	const i = await ws(e, n, 30, t.length);
	for (const [s, r] of await ms(e, i)) a.set(s, {
		timestamps: hs(i, r, 0),
		scores: r.map((e) => t[e] ? 1 : 0)
	});
	return a;
}
async function As(e, t, n, a, i) {
	const s = await e.foldOntoGrid(Float64Array.from(t), Float64Array.from(n), Float64Array.from(a), 1e3 * i, "finite_mean");
	return Array.from(s);
}
async function xs(e, t, n, a, i, s, r, o, l, c, u, d) {
	return async function(e, t, n, a, i, s, r, o, l, c, u, d) {
		const p = {}, f = null != i, m = null != s && s.length > 0, h = null != r && r.length > 0, g = null != o && o.length > 0, y = null != l?.unit && l.unit.length === t.length, w = null != l?.unitX && l.unitX.length === t.length, _ = null != l?.unitY && l.unitY.length === t.length, v = null != l?.unitZ && l.unitZ.length === t.length, b = null != u && u.length === t.length, S = null != c && c.length === t.length, k = null != d && d.length === t.length;
		for (const [I, A] of await ms(e, t)) p[I] = {
			timestamps: ys(t, A, 0),
			axisY: ys(n, A, 0),
			vectorMagnitude: ys(a, A, 0),
			...h ? { axisX: ys(r, A, 0) } : {},
			...g ? { axisZ: ys(o, A, 0) } : {},
			...f ? { choiAxis: ys(i, A, 0) } : {},
			...m ? { temperature: ys(s, A, NaN) } : {},
			...y ? { mimsUnit: ys(l?.unit ?? [], A, NaN) } : {},
			...w ? { mimsUnitX: ys(l?.unitX ?? [], A, NaN) } : {},
			..._ ? { mimsUnitY: ys(l?.unitY ?? [], A, NaN) } : {},
			...v ? { mimsUnitZ: ys(l?.unitZ ?? [], A, NaN) } : {},
			...b ? { zeroCrossingX: ys(u, A, NaN) } : {},
			...S ? { zeroCrossingY: ys(c, A, NaN) } : {},
			...k ? { zeroCrossingZ: ys(d, A, NaN) } : {}
		};
		return p;
	}(e, t, await fs(e, n, 0), await fs(e, a, 2), void 0 !== r ? await fs(e, r, 0) : void 0, o, await fs(e, i, 0), await fs(e, s, 0), l, c, u, d);
}
function Ns(e, t) {
	return 30 !== t && (D(e)?.hasRawAccel ?? !1);
}
async function Ts(e) {
	if (e.timestampsMs) {
		const t = 1e3 / e.sampleRate, n = e.timestampsMs[0] !== e.firstTsMs, a = e.timestampsMs.some((n, a) => Math.abs(n - e.firstTsMs - a * t) > .5 * t);
		if (n || a) return console.warn("[local-processing] Native 30-second counts were skipped because raw preparation changed the sample timeline."), null;
	}
	const t = e.cancelOperation ?? (() => {
		y(e.wasmApi);
	}), n = await Y(e.wasmApi, (t) => t.neishabouriCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: j,
		label: `neishabouriCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}), a = await Y(e.wasmApi, (t) => t.zeroCrossingCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: j,
		label: `zeroCrossingCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}).catch((t) => (C(t, e.signal, `zeroCrossingCounts 30s (${e.label})`), console.warn("[local-processing] The optional 30-second zero-crossing pass failed."), null));
	return {
		timestampsSec: await ws(e.wasmApi, e.firstTsMs, 30, n.y.length),
		neishabouri: n,
		zeroCrossing: a
	};
}
async function Ms(e, t, n) {
	const a = n.zeroCrossing, i = await xs(e, n.timestampsSec, n.neishabouri.y, n.neishabouri.vm, n.neishabouri.x, n.neishabouri.z, void 0, void 0, void 0, a ? await fs(e, a.zcy, 0) : void 0, a ? await fs(e, a.zcx, 0) : void 0, a ? await fs(e, a.zcz, 0) : void 0);
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
const zs = "Recording crossed a timezone boundary (a 1 h jump in the device clock). Recording times are kept as the device's wall-clock time; no timezone or daylight-saving shift is applied, so local-time metrics around the jump may be off.";
async function Rs(e, t) {
	return await e.detectHourClockJumpMs(Float64Array.from(t)) ? zs : null;
}
async function Es(e, t, n = 60) {
	(await e.irregularInternalDays(Float64Array.from(t), n)).forEach(() => {
		console.warn("[local-processing] A possible DST transition or partial internal day was detected; review the in-app import warning.");
	});
}
async function $s(e, t, n) {
	const a = [...e], i = n && n.storedEpochSeconds < k ? n : void 0, s = i ? await Promise.all(a.map(([, e]) => async function(e, t, n) {
		const { series: a } = await e.aggregateEpochSeries({
			target_seconds: k,
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
	return r.sort(), Number.isFinite(o) && Number.isFinite(l) ? Le(r, o, l, void 0, t) : r;
}
function Cs(e) {
	return /[",\r\n]/.test(e) ? `"${e.replace(/"/g, "\"\"")}"` : e;
}
function Ds(e, t) {
	if (!t) return null;
	const n = Be(t), a = e.findIndex((e) => Be(e) === n);
	return a >= 0 ? a : null;
}
function Ps(e) {
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
function Fs(e, t) {
	if (e.length !== t.length) return console.warn("[local-processing] Event-marker column dropped: mapped row count differs from the parsed epoch count."), /* @__PURE__ */ new Float64Array(0);
	const n = [];
	for (let a = 0; a < e.length; a += 1) {
		const i = t[a];
		1 === e[a] && null != i && Number.isFinite(i) && n.push(i / 1e3);
	}
	return Float64Array.from(n.sort((e, t) => e - t));
}
function Os(e, t, n) {
	const a = new Uint8Array(e.length);
	let i = 0;
	for (const s of Array.from(t)) {
		for (; i + 1 < e.length && (e[i + 1] ?? 1 / 0) <= s;) i += 1;
		const t = e[i];
		null != t && s >= t && s < t + n && (a[i] = 1);
	}
	return a;
}
function js(e, t) {
	const n = Date.parse(`${t}T00:00:00Z`) / 1e3, a = [];
	for (const i of Array.from(e)) i >= n && i < n + 86400 && a.push(i);
	return Float64Array.from(a);
}
async function Bs(e, t, n, a) {
	K(a, "standardizing mapped CSV");
	const i = re(await e.text());
	K(a, "standardizing mapped CSV");
	const s = ne(i);
	if (s.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
	const r = s.records, o = r[t]?.text;
	if (!o) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
	const l = te(o), c = G(o, l), u = is(n, c);
	if (u.length > 0) throw new Error(Ci(u));
	const d = Ds(c, n.datetime_column), p = Ds(c, n.date_column), f = Ds(c, n.time_column), m = Ds(c, n.activity_column), h = Ds(c, n.axis_x_column), g = Ds(c, n.axis_z_column), y = Ds(c, n.vector_magnitude_column), w = [
		{
			header: "ENMO",
			idx: Ds(c, n.enmo_column)
		},
		{
			header: "AngleZ",
			idx: Ds(c, n.anglez_column)
		},
		{
			header: "GGIR_SIB",
			idx: Ds(c, n.ggir_sib_column)
		},
		{
			header: "GGIR_NONWEAR",
			idx: Ds(c, n.ggir_nonwear_column)
		},
		{
			header: "MIMS_UNIT",
			idx: Ds(c, n.mims_unit_column)
		},
		{
			header: "MIMS_UNIT_X",
			idx: Ds(c, n.mims_unit_x_column)
		},
		{
			header: "MIMS_UNIT_Y",
			idx: Ds(c, n.mims_unit_y_column)
		},
		{
			header: "MIMS_UNIT_Z",
			idx: Ds(c, n.mims_unit_z_column)
		}
	].filter((e) => null !== e.idx), _ = Ds(c, n.event_marker_column), v = null === _ ? null : [];
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
		(I - t - 1) % 1e3 == 0 && (await ee(), K(a, "standardizing mapped CSV"));
		const e = r[I];
		if (!e.text.trim()) continue;
		const n = G(e.text, l), i = null !== d ? [n[d] ?? "", n[m] ?? ""] : [
			null === p ? "" : n[p] ?? "",
			null === f ? "" : n[f] ?? "",
			n[m] ?? ""
		];
		null !== h && i.push(n[h] ?? ""), null !== g && i.push(n[g] ?? ""), null !== y && i.push(n[y] ?? "");
		for (const t of w) i.push(n[t.idx] ?? "");
		v && null !== _ && v.push(Ps(n[_])), S.push(i.map(Cs).join(","));
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
function Gs(e, t, n, a) {
	if (null !== t) return e[t] ?? "";
	const i = null === n ? "" : e[n] ?? "", s = null === a ? "" : e[a] ?? "";
	return `${i.trim()} ${s.trim()}`;
}
function Ls(e, t) {
	if (null === t) return NaN;
	const n = e[t]?.trim() ?? "";
	if (!n) return NaN;
	const a = Number(n);
	return Number.isFinite(a) ? a : NaN;
}
function Us(e, t) {
	return e.length === t && e.some((e) => Number.isFinite(e)) ? e : void 0;
}
const Hs = {
	ggirHasptVariant: R.ggir_haspt_variant,
	ggirHasibVariantsEnabled: R.ggir_hasib_variants_enabled,
	ggirHasibVariants: [...R.ggir_hasib_variants],
	ggirHasibCountSource: R.ggir_hasib_count_source,
	ggirHasibCountEpochSeconds: R.ggir_hasib_count_epoch_seconds
}, Zs = new Set(a), qs = new Set(oe), Vs = new Set(I);
function Ws(e) {
	const t = e ?? {}, n = t.ggir_haspt_variant, a = t.ggir_hasib_variants_enabled, i = t.ggir_hasib_variants, s = t.ggir_hasib_count_source, r = t.ggir_hasib_count_epoch_seconds, o = Array.isArray(i) ? Array.from(new Set(i.filter((e) => "string" == typeof e && qs.has(e)))) : [...Hs.ggirHasibVariants];
	return {
		ggirHasptVariant: "string" == typeof n && Zs.has(n) ? n : Hs.ggirHasptVariant,
		ggirHasibVariantsEnabled: "boolean" == typeof a ? a : Hs.ggirHasibVariantsEnabled,
		ggirHasibVariants: o,
		ggirHasibCountSource: "string" == typeof s && Vs.has(s) ? s : Hs.ggirHasibCountSource,
		ggirHasibCountEpochSeconds: "number" == typeof r && Number.isInteger(r) && r >= 1 ? r : Hs.ggirHasibCountEpochSeconds
	};
}
function Js(e) {
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
function Ks(e) {
	return !Qt(e);
}
const Ys = /* @__PURE__ */ new WeakMap();
async function Xs(e, t) {
	const n = await Ni(e, t);
	return {
		data: n,
		nights: await Za(n?.actiwareIntervals, J())
	};
}
function Qs(e, t, n) {
	if (!n) return Xs(e, t);
	let a = Ys.get(n);
	return a || Ys.set(n, a = Xs(e, t)), a;
}
const er = {
	windowForNight: async (e) => Ks(e.file) ? async function({ fileId: e, date: t, db: n, batch: a }) {
		return ni((await Qs(e, n, a)).nights, t);
	}(e) : null,
	tables: (e) => [e.actiwareFileData],
	stampInput: async (e, t) => ({ rest: (await t.actiwareFileData.get(e))?.actiwareIntervals }),
	fingerprint: (e) => ({ actiwareRestWindow: e })
}, tr = "actiware";
function nr(e) {
	return [...an(e)].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort();
}
async function ar(e, t, n) {
	try {
		const i = await t.actiwareFileData.get(e);
		if (!i?.actiwareSleepWake) return;
		const s = (await t.actiwareStatisticsInputs.get(e))?.input, r = (await t.files.get(e))?.seriesRevision ?? 0, o = nr(await t.markers.where("fileId").equals(e).toArray());
		let l = null;
		try {
			l = await hi(await Za(i.actiwareIntervals, J(n)), s, o, (e) => J(n).actiwareIntervalStatistics(e));
		} catch (a) {
			n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), In("error", "Actiware statistics recalculation failed", {
				...Jt(a),
				file_id: e
			});
		}
		await B(t, [
			t.actiwareFileData,
			t.actiwareStatisticsInputs,
			t.files,
			t.markers
		], async () => {
			const n = await t.actiwareFileData.get(e), a = (await t.actiwareStatisticsInputs.get(e))?.input;
			if (!n || ((await t.files.get(e))?.seriesRevision ?? 0) !== r) return;
			if (JSON.stringify(a) !== JSON.stringify(s) || JSON.stringify(n.actiwareIntervals) !== JSON.stringify(i.actiwareIntervals)) return;
			const c = nr(await t.markers.where("fileId").equals(e).toArray());
			JSON.stringify(c) === JSON.stringify(o) && (await (null === l ? ki(t, e) : Ti(t, e, l, !1)), await nn(t, [e]));
		}, n);
	} catch (a) {
		n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), In("error", "Actiware statistics recalculation failed", {
			...Jt(a),
			file_id: e
		});
		try {
			await B(t, [t.actiwareFileData, t.files], async () => {
				await ki(t, e), await nn(t, [e]);
			}, n);
		} catch {
			throw a instanceof Error ? a : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
		}
	}
}
async function ir(e, t, n, { analysisParadigm: a, signal: i, read: s }) {
	const r = s ? s.file : await Ve(e, n);
	if (Ks(r)) {
		if (He(r, a) === un.rest_intervals) return ar(e, n, i);
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
			])), p = an(l.filter((e) => c || t.has(e.date))), f = c ? new Map([...[...p].map(([e, t]) => [e, t.sleepMarkers]), ...t]) : t, m = new Map([...f].flatMap(([e, t]) => {
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
				g = await di({
					file: a,
					statisticsInput: s
				}, m, (e) => J(i).actiwareIntervalStatistics(e), J(i));
			} catch (o) {
				i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), In("error", "Actiware statistics recalculation failed", {
					...Jt(o),
					file_id: e
				});
			}
			await B(n, [
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
				if (null === g) return await ki(n, e), void await nn(n, [e]);
				const p = ci(t, g), y = p.length > 0 ? await $.waitFor(ii(p, J(i))) : void 0, w = yi(t, g), _ = w.length > 0 ? await $.waitFor(Za(w, J(i))) : void 0, v = pi(t, g, d.keys(), {
					rowDateOf: y,
					rowNights: _
				});
				await Ti(n, e, v, !0 === t.actiwareStatisticsNeedsRecompute && !(c && d.size === f.size)), await nn(n, [e]);
			}, i);
		} catch (o) {
			i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), In("error", "Actiware statistics recalculation failed", {
				...Jt(o),
				file_id: e
			});
			try {
				await B(n, [n.actiwareFileData, n.files], async () => {
					await ki(n, e), await nn(n, [e]);
				}, i);
			} catch {
				throw o instanceof Error ? o : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
			}
		}
	}
}
const sr = "An earlier audit record is still being written. The rest interval was not changed; try again.";
async function rr(e, t, n, a) {
	return (await or(e, n, a, (n, { core: a }) => ti(n, e.date, t, a))).sleepMarkers;
}
async function or({ fileId: e, date: t, actor: n }, a, i, s) {
	const r = await a.actiwareFileData.get(e), o = (await a.actiwareStatisticsInputs.get(e))?.input, l = r?.actiwareSleepWake;
	if (!l || !o) throw new wi("This recording has no Actiware analysis settings, so its rest intervals cannot be edited.");
	const c = J(i), u = r?.actiwareIntervals ?? [], d = await Za(u, c), p = await s(d, {
		epochs: o.epochs,
		params: l.params,
		grid: {
			startTimestamp: l.startTimestamp,
			epochSeconds: l.epochSeconds
		},
		core: c
	}), f = [...p.intervals], m = nr(await a.markers.where("fileId").equals(e).toArray()), h = Xa(u, f), g = mi(h);
	if (0 === g.length) return {
		sleepMarkers: fi(d, t, m.includes(t)),
		removed: 0,
		history: null
	};
	const y = await hi(p, o, m, (e) => c.actiwareIntervalStatistics(e)).catch(Si), w = zt.captureWorkspaceBinding(a, {
		username: n.username,
		studyId: n.studyId
	});
	if (!await zt.settleWritesForDb(a, w)) throw new wi(sr);
	let _ = !1;
	return await B(a, [
		a.actiwareFileData,
		a.markers,
		a.files,
		a.placementResults,
		a.projectMeta,
		a.auditLog
	], async () => {
		const n = await a.actiwareFileData.get(e);
		if (JSON.stringify(n?.actiwareIntervals ?? []) !== JSON.stringify(u)) throw new wi("That rest interval changed since it was shown; reload the night.");
		_ = null === y || JSON.stringify(nr(await a.markers.where("fileId").equals(e).toArray())) !== JSON.stringify(m);
		const s = Ha(n?.actiwareRemovedRests ?? [], h, f);
		await xi(a, e, {
			intervals: f,
			removedRests: s
		}, _ ? null : y ?? []), await a.placementResults.delete(e), await Ge([e], a, i), await nn(a, [e]), await g.reduce(async (n, a) => {
			if (await n, !await zt.recordFileEventDurably({
				fileId: e,
				analysisDate: t,
				action: v.ACTIWARE_REST_EDITED,
				payload: { ...a }
			}, w)) throw new wi(sr);
		}, Promise.resolve());
	}, i), _ && await ar(e, a, i), {
		sleepMarkers: fi(p, t, m.includes(t)),
		removed: h.take.filter((e) => "rest" === e.kind).length,
		history: {
			undo: (e, t = a, n) => rr(e, Qa(h), t, n),
			redo: (e, t = a, n) => rr(e, h, t, n)
		}
	};
}
const lr = {
	nightRecord: {
		sleepPeriodsToSave: async ({ fileId: e, date: t, isInvalidNight: n }, a, i) => Ka(a, await Za((await Ni(e, i))?.actiwareIntervals, J()), t, n),
		writeEdit: function(e, t, n = X(), a) {
			return or(e, n, a, (n, a) => Ua(n, e.date, t, a));
		}
	},
	sourceAnalysis: {
		id: tr,
		stores: ["actiwareFileData", "actiwareStatisticsInputs"],
		persistIngest: Ai,
		afterRestore: async function({ notCarried: e, db: t }) {
			return (await Promise.all(e.map(async (e) => void 0 === e ? void 0 : t.actiwareFileData.get(e)))).flatMap((e) => e?.actiwareSleepWake ? [] : ["Actiware Sleep/Wake: not in this older backup and could not be rebuilt from it"]);
		},
		covers: Ks,
		followSavedNights: async function({ fileId: e, file: t, nights: n, sleepMarkersChanged: a, analysisParadigm: i, db: s, signal: r, openBatch: o }) {
			const l = a ? void 0 : await s.actiwareFileData.get(e);
			if (a || l?.actiwareStatisticsNeedsRecompute || l?.actiwareSleepWake && !l.actiwareStatistics?.length) {
				const a = o();
				if (a) {
					let e = a.savedNights.get(tr);
					e || a.savedNights.set(tr, e = /* @__PURE__ */ new Map());
					for (const [t, a] of n) e.set(t, a);
				} else await ir(e, n, s, {
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
				await ir(e, t, a, {
					analysisParadigm: n,
					signal: i
				});
			} catch (s) {
				In("error", "Actiware statistics recalculation failed", {
					...Jt(s),
					file_id: e
				});
			}
		},
		proposeNight: async function({ fileId: e, date: t, file: n, options: a, sleepPeriodDetectionConfig: i, db: s, batch: r }) {
			if (a.algorithm !== A.ACTIWARE_SLEEP_WAKE) return null;
			const o = Ks(n) ? await Qs(e, s, r) : null, c = o?.data, u = o ? Ya(o.nights, t) : null, d = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(11, 19), p = c?.actiwareRestProposal?.notes?.[t], f = null !== o && Ga(o.nights, t).some((e) => "scorer" === e.origin), m = p && !f ? [`Rest proposal (SCREENS Autoscore): ${p}`] : [], { source_a: h, source_b: g, fusion_policy: y, apply_nonwear_gate: w } = Mn(ft({
				algorithm: a.algorithm,
				periodGuider: a.periodGuider,
				sleepPeriodDetection: a.sleepPeriodDetection
			})), _ = {
				...i,
				source_a: h,
				source_b: g,
				fusion_policy: y,
				apply_nonwear_gate: w
			};
			if (!u?.sleep) {
				const e = c?.actiwareIntervalsRefusal, t = (c?.actiwareIntervals ?? []).filter((e) => "rest" === e.kind && "scorer" !== e.origin), n = null !== u && t.some((e) => e.startTimestamp === u.rest.startTimestamp && e.endTimestamp === u.rest.endTimestamp);
				return {
					kind: "placed",
					sleep_markers: [],
					nap_markers: [],
					decisions: [],
					sleep_period_detection_config: _,
					notes: [u ? e && n ? `The Actiware sleep interval inside this night's rest interval (${d(u.rest.startTimestamp)}–${d(u.rest.endTimestamp)}) could not be set: ${e}.` : `Actiware sets no sleep interval inside this night's rest interval (${d(u.rest.startTimestamp)}–${d(u.rest.endTimestamp)}).` : e && 0 === t.length ? `Actiware rest intervals could not be set for this recording: ${e}.` : "Actiware sets no rest interval for this night.", ...m]
				};
			}
			return {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: u.sleep.startTimestamp,
					offset_timestamp: u.sleep.endTimestamp,
					marker_type: l.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: (u.additionalSleeps ?? []).map((e, t) => ({
					onset_timestamp: e.startTimestamp,
					offset_timestamp: e.endTimestamp,
					marker_type: l.NAP,
					marker_index: t + 2
				})),
				decisions: [],
				sleep_period_detection_config: _,
				notes: [`Actiware sleep interval ${d(u.sleep.startTimestamp)}–${d(u.sleep.endTimestamp)} inside rest interval ${d(u.rest.startTimestamp)}–${d(u.rest.endTimestamp)}, as Actiware sets it.`, ...m]
			};
		},
		hasScorerSettings: async (e, t) => null != (await Ni(e, t))?.actiwareSleepWake,
		afterDiaryChange: {
			label: "Propose rest intervals from the new diary",
			run: async function(e, t, n) {
				try {
					await async function(e, t, n) {
						const a = await t.studySettings.where("key").equals("study").first(), i = a?.extraSettings ?? {}, s = rn(i.actiware_rest_proposal);
						if (s.rest_autoscore !== st.screens) return !1;
						const r = await t.files.get(e);
						if (null == r?.id || !kn(r)) return !1;
						const { reanalyzeActiwareFile: o } = await import("./reanalysis-B_mCR7eZ.js");
						return (await o({
							...r,
							id: r.id
						}, {
							paradigm: _t(i.analysis_paradigm),
							overrides: pn(i.actiware_analysis),
							proposal: s,
							hasib: Js(Ws(i))?.hasibVariants,
							db: t,
							expectedStudyContentHash: a?.contentHash ?? null,
							services: n
						})).changed;
					}(e, t, n);
				} catch (a) {
					throw In("error", "Rest proposal after the diary write failed", {
						...Jt(a),
						file_id: e
					}), new Error("The rest intervals were not proposed again from the new diary; they still follow the previous diary. Save the study settings to propose them again.", { cause: a });
				}
			}
		},
		reanalyze: async (e, t, { db: n, expectedStudyContentHash: a, signal: i, services: s }) => {
			if (!kn(e)) return { changed: !1 };
			const { reanalyzeActiwareFile: r, ACTIWARE_NOT_RECONCILED: o } = await $.waitFor(import("./reanalysis-B_mCR7eZ.js")), l = await r(e, {
				paradigm: _t(t.analysis_paradigm),
				overrides: pn(t.actiware_analysis),
				proposal: rn(t.actiware_rest_proposal),
				hasib: Js(Ws(t))?.hasibVariants,
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
	},
	restWindow: er
}, cr = {
	id: "ggir_saved_folder",
	covers: () => !0,
	stores: [],
	persistIngest: () => Promise.resolve(),
	afterRestore: () => Promise.resolve([]),
	followSavedNights: ({ fileId: e, username: t, db: n, signal: a }) => (ui(e, t, n, a), Promise.resolve())
}, ur = {
	windowForNight: async (e) => function(e) {
		const t = e?.sleepMarkers.find((e) => e.markerType === l.MAIN_SLEEP) ?? e?.sleepMarkers[0];
		return null != t?.onsetTimestamp && null != t.offsetTimestamp ? {
			startTimestamp: t.onsetTimestamp,
			endTimestamp: t.offsetTimestamp
		} : null;
	}(await e.autoScoreMarker(A.VAN_HEES_2015)),
	tables: (e) => [e.markers],
	stampInput: async (e, t) => ({ hdcza: (await t.markers.where("fileId").equals(e).toArray()).filter((e) => "auto_score" === e.username && e.algorithm === A.VAN_HEES_2015).map((e) => ({
		date: e.date,
		windows: e.sleepMarkers.map((e) => [
			e.markerType,
			e.onsetTimestamp,
			e.offsetTimestamp
		])
	})) }),
	fingerprint: (e) => ({ hdczaWindow: e ? [e.startTimestamp, e.endTimestamp] : null })
}, dr = { sleepPeriodsToSave: (e, t) => Promise.resolve(t) }, pr = {
	[un.sleep_periods]: dr,
	[un.rest_intervals]: lr.nightRecord
}, fr = [lr.sourceAnalysis, cr], mr = {
	hdcza: ur,
	actiware_rest_interval: lr.restWindow
}, hr = Object.assign({
	"../assets/models/lstm_sleep_wake.onnx": "/sleep-scoring-wasm/assets/lstm_sleep_wake-CMNVV_Rk.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba-DjoYpGzg.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa--Jn4_6Dd.onnx",
	"../assets/models/student_lstm_h64_g128_from_lstm_ba.onnx": "/sleep-scoring-wasm/assets/student_lstm_h64_g128_from_lstm_ba-BZ4I7SAE.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_ba.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_ba-CK3CNFjI.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_kappa.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_kappa-Cb_N5vbO.onnx",
	"../assets/models/teacher_lstm_h128_g256_ba.onnx": "/sleep-scoring-wasm/assets/teacher_lstm_h128_g256_ba-CbSChb-h.onnx"
}), gr = hr["../assets/models/lstm_sleep_wake.onnx"] ?? null, yr = "lstm_sleep_wake_regular_best_20260626", wr = "bcaf0f2b3f35638a324fd0058ce4cbab03d8f6574cec33a7a07e3e4e0139a908", _r = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_URL, vr = "configured-url", br = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_VERSION ?? yr, Sr = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SHA256 ?? (!_r && gr ? wr : ""), kr = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SIZE_LABEL ?? "7.4 MB model file", Ir = [
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
		version: yr,
		sha256: wr,
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
var Ar = class extends Error {
	constructor(e) {
		super(e), this.name = "LstmModelUnavailableError";
	}
};
function xr() {
	const e = Ir.flatMap((e) => {
		const t = hr[e.assetKey];
		return t ? [{
			...e,
			url: t,
			source: "bundled"
		}] : [];
	}), t = _r ? {
		id: vr,
		label: "Configured URL",
		description: "ONNX model configured by VITE_LSTM_SLEEP_WAKE_ONNX_URL.",
		url: _r,
		version: br,
		sha256: Sr || null,
		sizeLabel: kr,
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
function Nr(e = xr()) {
	return _r && _r.length > 0 ? vr : e.find((e) => e.recommended)?.id ?? e[0]?.id ?? null;
}
function Tr(e) {
	const t = xr(), n = e ?? Nr(t);
	return (t.find((e) => e.id === n) ?? t.find((e) => e.id === Nr(t))) || {
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
function Mr(e) {
	if (!Number.isFinite(e)) throw new Ar("LSTM threshold must be a finite number between 0 and 1.");
	return Math.min(1, Math.max(0, e));
}
function zr(e) {
	const t = Number.parseFloat({
		BASE_URL: "/sleep-scoring-wasm/",
		DEV: !1,
		MODE: "production",
		PROD: !0,
		SSR: !1,
		VITE_BASE_PATH: "/sleep-scoring-wasm/",
		VITE_FORCE_LOCAL_MODE: "true"
	}.VITE_LSTM_SLEEP_WAKE_THRESHOLD ?? "NaN");
	return Number.isFinite(t) ? Mr(t) : e.defaultThreshold;
}
function Rr(e) {
	return null != e ? Tr(e) : _r && _r.length > 0 ? Tr(vr) : Tr();
}
async function Er(e) {
	(function() {
		if (!("caches" in globalThis)) throw new Ar("Browser Cache Storage is unavailable, so the LSTM ONNX model cannot be cached.");
	})();
	const t = Rr(e), n = function(e) {
		const { url: t } = Rr(e);
		if (!t) throw new Ar("LSTM ONNX model is not configured. Add frontend/src/assets/models/lstm_sleep_wake.onnx or set VITE_LSTM_SLEEP_WAKE_ONNX_URL.");
		return t;
	}(t.id), a = await (await caches.open(function(e) {
		return `sleep-scoring-lstm-onnx-${e.version}`;
	}(t))).match(n);
	if (!a) throw new Ar("LSTM ONNX model has not been downloaded yet.");
	return new Uint8Array(await a.arrayBuffer());
}
function $r(e) {
	const t = xr(), n = e && "object" == typeof e ? e : null, a = "string" == typeof n?.modelId ? n.modelId : null, i = a && t.some((e) => e.id === a) ? a : Nr(t);
	if (!i) return {
		modelId: null,
		threshold: null
	};
	const s = Tr(i), r = n?.threshold;
	return {
		modelId: i,
		threshold: "number" == typeof r && Number.isFinite(r) ? Mr(r) : zr(s)
	};
}
function Cr(e) {
	return $r({
		modelId: e,
		threshold: null
	}).threshold ?? .5;
}
function Dr(e, t) {
	if (0 === e.length) return [];
	const n = [0];
	for (let a = 1; a < e.length; a++) Math.abs(e[a] - e[a - 1] - t) > .001 && n.push(a);
	return n.map((t, a) => ({
		start: t,
		end: n[a + 1] ?? e.length
	}));
}
async function Pr(e, t, n, a = la, i = () => {
	y(e);
}) {
	const s = /* @__PURE__ */ new Map(), r = Math.min(t.x.length, t.y.length, t.z.length);
	if (0 === r || t.sampleRate <= 0) return s;
	const o = a.filter((e) => !ba(e)?.needsModel);
	if (0 === o.length) return s;
	const l = new Float64Array(3 * r);
	for (let u = 0; u < r; u++) l[3 * u] = t.x[u], l[3 * u + 1] = t.y[u], l[3 * u + 2] = t.z[u];
	K(n, `before detectNonwearUnifiedBatch(${o.join(",")})`);
	const c = await Y(e, (e) => e.detectNonwearUnifiedBatch(o, {
		raw: l,
		sampleRate: t.sampleRate,
		epochSeconds: t.epochSeconds
	}), {
		ms: j,
		label: `detectNonwearUnifiedBatch(${o.join(",")})`,
		signal: n,
		cancel: i
	}).catch((e) => (C(e, n, `detectNonwearUnifiedBatch(${o.join(",")})`), console.warn("[local-processing] A raw-signal nonwear batch failed."), null));
	if (c) for (const [u, d] of Object.entries(c)) s.set(u, d);
	return s;
}
async function Fr(e, t, n, a, i, s = ga, r = () => {
	y(e);
}) {
	const o = {}, l = s.filter((e) => !ba(e)?.needsModel);
	if (0 === l.length) return o;
	const c = n.map((e) => t[e]).filter((e) => void 0 !== e), u = gs(c.map((e) => e.timestamps)), d = gs(c.map((e) => e.axisY)), p = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
	for (const { start: h, end: g } of Dr(u, a)) {
		const t = d.slice(h, g);
		if (0 === t.length) continue;
		K(i, "before count nonwear continuous run");
		const n = await Y(e, (e) => e.detectNonwearUnifiedBatch(l, {
			counts: t,
			epochSeconds: a
		}), {
			ms: j,
			label: "count nonwear continuous run",
			signal: i,
			cancel: r
		}).catch((e) => (C(e, i, "count nonwear continuous run"), console.warn("[local-processing] A count-based nonwear batch failed for one contiguous run."), null));
		for (const [i, s] of Object.entries(n ?? {})) {
			if (!s.available || !s.nonwear?.length) {
				p.has(i) || p.set(i, s);
				continue;
			}
			const t = await ka(s, {
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
function Or(e) {
	return null == e ? {} : { [A.OAKLEY_1997]: { oakleyThreshold: e } };
}
async function jr(e, t, n, a, i, s, r, o = () => {
	y(e);
}, l = {}, c = bi) {
	if (0 === c.length) return;
	const u = a.flatMap((e) => n[e] ?? []), d = gs(u.map((e) => e.timestamps)), p = gs(u.map((e) => e.axisY)), f = {}, m = /* @__PURE__ */ new Map();
	for (const { start: y, end: w } of Dr(d, i)) {
		const t = p.slice(y, w);
		if (!t || 0 === t.length) continue;
		const n = /* @__PURE__ */ new Map();
		for (const u of c) {
			const a = Mi(u, i);
			if ("gate_needs_30s_epoch" === a.kind) {
				n.set(u, a.response);
				continue;
			}
			K(s, `before scoreEpochs(${u} continuous)`);
			const c = await Y(e, (e) => e.scoreEpochs(vi({
				algorithm: u,
				counts: t,
				epochSeconds: i,
				...r ? { postprocessing: r } : {},
				...l[u] ? { config: l[u] } : {}
			})), {
				ms: j,
				label: `scoreEpochs(${u} continuous)`,
				signal: s,
				cancel: o
			}).catch((e) => (C(e, s, `scoreEpochs(${u} continuous)`), console.warn("[local-processing] A descriptor-driven sleep/wake scorer failed for one contiguous run."), null));
			c && n.set(u, c);
		}
		const a = zi(n, t.length);
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
function Br(e, t) {
	return {
		vector_magnitude: e.vectorMagnitude,
		axis_y: e.axisY,
		axis_x: e.axisX,
		axis_z: e.axisZ
	}[t];
}
async function Gr(e, t, n, a, i, s, r) {
	if (!e || !t || 0 === e.timestamps.byteLength) return;
	if ("counts_axis_y" !== ba(t)?.requiredSignal) return;
	if (ia(e, t, n)) return;
	const o = new Float64Array(e.timestamps), l = i ?? J(s), c = await pt(o, { day: e }, l), u = nt(Re(t) ?? [], c), d = u !== c, p = async (e, t) => {
		const n = {
			timestamps: new Float64Array(e.timestamps),
			axisY: new Float64Array(t),
			vectorMagnitude: new Float64Array(t)
		};
		return d ? us(l, n, c) : n;
	}, f = (e, t) => d ? ps(l, e, t, o) : t;
	let m;
	try {
		const i = [...(await Et(e.fileId, a, r)).values()];
		if (va.includes(t)) {
			const t = i.filter((e) => e.timestamps.byteLength > 0 && Br(e, n)).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), a = t.findIndex((t) => t.date === e.date);
			if (a < 0) return;
			const r = [];
			for (const e of t) r.push(await p(e, Br(e, n)));
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
			const r = (await Fr(l, a, n.map((e) => e.date), u, s, [t]))[e.date]?.get(t);
			if (!r?.available || !r.nonwear) return;
			const d = await _a(/* @__PURE__ */ new Map([[t, {
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
	s?.throwIfAborted(), await xe(e.fileId, e.date, m, a, s), s?.throwIfAborted(), Object.assign(e, m);
}
async function Lr(e, t, n, a, i, s = () => {
	y(e);
}) {
	const r = gs(n.map((e) => t[e].timestamps)), o = gs(n.map((e) => t[e].axisY)), l = gs(n.map((e) => t[e].choiAxis ?? t[e].vectorMagnitude)), c = Dr(r, a), u = await Y(e, (e) => e.scoreAllDays(c.map(({ start: e, end: t }) => ({
		activityF64: o.slice(e, t),
		vmF64: l.slice(e, t),
		epochSeconds: a
	}))), {
		ms: j,
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
		const n = await Y(e, (e) => e.detectNonwearChoi2011(l.slice(h.start, h.end), a), {
			ms: j,
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
function Ur(e, t) {
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
async function Hr(e, t) {
	return await ke((t) => t.recordingFacts(e), new Ut(t)) ?? {};
}
async function Zr(e) {
	return Ce((await ve(e))?.extraSettings);
}
async function qr(e, t, n, a) {
	n?.throwIfAborted();
	const i = await x(e, 65536, a);
	n?.throwIfAborted();
	const s = new TextDecoder("utf-8", { fatal: !1 }).decode(i);
	for (const r of [/measurement frequency\s*[,:\t]\s*(\d+)/i, /sample rate(?:\s*hz)?\s*[,:\t]\s*(\d+)/i]) {
		const e = r.exec(s);
		if (e && e[1]) {
			const t = Number.parseInt(e[1], 10);
			if (Number.isFinite(t) && t > 0) return t;
		}
	}
	return W[t];
}
async function Vr(e, t, n, a) {
	t?.throwIfAborted();
	const i = Ii(e) ? b(Ri("aw5")) : g(e.name);
	if ("none" === i) return {};
	const s = Math.max(65536, 2048);
	let r;
	try {
		r = await x(e, s, a);
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
		return null === e ? {} : await Hr(e, n);
	}
	return await Hr(new TextDecoder("utf-8", { fatal: !1 }).decode(r), n);
}
function Wr(e) {
	return `stored_nonwear_mask:${e}`;
}
Object.freeze([]);
const Jr = {
	temperature_epoch_stream: (e) => null != e.temperature && fa(new Float64Array(e.temperature)),
	sleep_wake_epoch_stream: (e) => null != e.algorithmResults?.[A.ACTIWARE_SLEEP_WAKE],
	device_wear_state_evidence_stream: (e) => !0 === e.actiwareOffWristChannel
};
function Kr(e) {
	const t = [];
	for (const [n, a] of Object.entries(Jr)) for (const i of e) if (a(i)) {
		t.push(n);
		break;
	}
	for (const n of la) e.some((e) => null != ia(e, n, "")) && t.push(Wr(n));
	return t;
}
async function Yr(e, t, n) {
	const a = [];
	for (const r of t) {
		const t = ei(e, r);
		t && a.push(t.wire);
	}
	if (0 === a.length) return [];
	const { request: i, transfer: s } = li(a);
	return (await n.computeCircadian(d(i, s))).day_summaries.filter((e) => e.has_signal).map((e) => e.analysis_date);
}
function Xr(e) {
	return e instanceof Error ? e : /* @__PURE__ */ new Error("Local ingest lease renewal failed.");
}
const Qr = Math.max(1e3, Math.floor(wn / 4));
async function eo(e) {
	void 0 !== e.heartbeatId && (clearInterval(e.heartbeatId), delete e.heartbeatId), await e.heartbeatPending, delete e.heartbeatPending;
}
async function to(e, t, n) {
	const a = E().scoring(), i = {
		...e.recording,
		...t.recording
	}, s = e.placement ?? {
		bodySite: a.sensorLocation,
		laterality: a.participantLaterality
	}, r = await wt({
		...t,
		...t.ggirPart2Config ? { ggirNonwearDetector: await Zt(t.ggirPart2Config.csvText, n ?? J(e.signal)) } : {},
		...e.ingestProvenance ? { ingestProvenance: e.ingestProvenance } : {},
		recording: Ur(i, s)
	}, e.attemptId, e.db);
	return "started" === r.kind && (e.guard = r.guard, function(e) {
		void 0 === e.heartbeatId && (e.heartbeatId = setInterval(() => function(e) {
			const t = e.guard;
			t && void 0 === e.heartbeatError && (e.heartbeatPending = (e.heartbeatPending ?? Promise.resolve()).then(() => tt(t, e.db)).catch((t) => {
				e.heartbeatError = t;
			}));
		}(e), Qr));
	}(e)), r;
}
async function no(e) {
	if (await e.heartbeatPending, void 0 !== e.heartbeatError) throw Xr(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new dn();
	return await tt(t, e.db), t;
}
async function ao(e) {
	if (await eo(e), void 0 !== e.heartbeatError) throw Xr(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new dn();
	await async function(e, t = X()) {
		try {
			return await async function(e, t = X(), n) {
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
					]), r = s(t, i), o = Kr([...(await Et(e, a)).values()]), l = t ? Ja(t.sourceType, t.sourceProfileId) : null;
					if (l && c[l].capabilityFromSensorRows && !o.includes("device_wear_state_evidence_stream") && i > 0 && o.push("device_wear_state_evidence_stream"), void 0 === t?.id) return o;
					if (await B(a, [
						a.files,
						a.sensorNonwear,
						a.projectMeta
					], async () => {
						const t = await a.files.get(e);
						return s(t, await a.sensorNonwear.where("fileId").equals(e).count()) === r && (t && (i = t.resolvedCapabilities, l = o, void 0 === i || i.length !== l.length || !l.every((e) => i.includes(e)) || 4 !== t.resolvedCapabilitiesRevision) && await F(a, [a.files], () => a.files.update(e, {
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
	}(t.fileId, e.db), e.finalizedFileId = await kt(t, e.db, e.signal), delete e.guard;
}
async function io(e, t) {
	try {
		await eo(e);
		const t = e.guard, n = !!t && await Ae(t, e.db);
		t && delete e.guard, n ? (console.warn("[local-processing] Rolled back an incomplete local ingest."), e.rollbackOutcome = "rolled_back") : e.rollbackOutcome ??= "nothing_to_roll_back";
	} catch {
		console.error("[local-processing] Incomplete local ingest rollback also failed."), e.rollbackOutcome = "failed";
	}
}
function so(e, t) {
	return "object" == typeof e && null !== e && void 0 !== t.rollbackOutcome && (e.__localIngestRollbackOutcome = t.rollbackOutcome), e;
}
async function ro(e, t, n, a, i) {
	try {
		const s = await Yr(e, t, a);
		await Pe(e, t.map((e) => e.date), s, n, i);
	} catch {
		i?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}
}
function oo(e, t, n, a) {
	return a <= 0 ? 0 : .9 * (e - 1 + (t - e + 1) * n / 3) / a;
}
function lo({ scope: e, fileId: t, sourceContentHash: n, label: a, signalDates: i, onChunk: s }) {
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
		s?.(u, d, 0), await no(e), s?.(u, d, 1);
		try {
			const t = c.map((e) => e.facts);
			await it(c.map((e) => e.day), e.db, t.every((e) => void 0 !== e) ? t : void 0, e.signal);
		} catch (m) {
			throw console.warn("[local-processing] Activity-day persistence failed."), Qi(m, `saveActivityDay (${a})`), l.activityFailed = !0, m;
		}
		l.saved += c.length;
		const p = c.map((e) => e.day.date);
		try {
			await Pe(t, p, p.filter((e) => i.has(e)), e.db, e.signal);
		} catch {
			console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
		}
		s?.(u, d, 2);
		const f = c.flatMap((e) => e.history.map((t) => ({
			...t,
			date: e.day.date
		})));
		await async function(e, t, n, a, i = X(), s) {
			const r = i, o = vn(), l = a.map((a) => {
				const i = {
					fileId: e,
					date: a.date ?? t,
					appVersion: o,
					results: a.results,
					...void 0 !== n ? { sourceContentHash: n } : {}
				};
				if (null === me(a)) throw new Error(`Refused an algorithm run for ${String(a.algoKey ?? a.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
				return void 0 !== a.cubeConfig ? {
					...i,
					cubeConfig: a.cubeConfig
				} : {
					...i,
					algoKey: a.algoKey
				};
			});
			try {
				return await fe(l, r, s), !0;
			} catch {
				s?.throwIfAborted(), console.error("[local-processing] Algorithm history batch write failed; retrying records individually.");
			}
			let c = !1;
			for (const u of l) try {
				await On(u, r, s);
			} catch {
				s?.throwIfAborted(), c = !0, console.error("[local-processing] An algorithm history write failed; latest scoring remains available.");
				try {
					await uo({
						op: "algorithm_run_put",
						fileId: e,
						payload: {
							kind: "history_write_failed",
							...me(u),
							date: u.date,
							error: "history_write_failed"
						}
					}, r, s);
				} catch {}
			}
			return !c;
		}(t, c[0].day.date, n, f, e.db, e.signal) || (l.historyFailed = !0), s?.(u, d, 3), await ee();
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
async function co(e, t = X(), n) {
	const a = t;
	try {
		const t = await e.identity(), r = await Ne(e.fileId, a);
		await Wi({
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
			profileProofStatus: (i = t.profileProofStatus, ji(i, s, "profileProofStatus")),
			temporalBasis: Bi(t.temporalBasis),
			calibration: e.calibration,
			diaryDisposition: r.length > 0 ? "present" : "absent",
			timestampGrid: e.timestampGrid ?? "epoch_5s_floor_seconds",
			dailyRows: e.rows,
			appVersion: vn(),
			startedAt: e.startedAt,
			finishedAt: e.finishedAt ?? (/* @__PURE__ */ new Date()).toISOString()
		}, a, n);
	} catch {
		n?.throwIfAborted(), console.error("[local-processing] Execution attestation write failed; day summaries remain stored.");
	}
	var i;
}
async function uo(e, t = X(), n) {
	const a = t, { appendWal: i, withWalTx: s } = await import("./wal-D_Sx3Exe.js").then((e) => e.r);
	await s([], async () => {
		await i(e);
	}, a, n);
}
function po(e, t) {
	return Hn(void 0 === t ? void 0 : { recording: t }, e?.sensorLocation ?? R.sensor_location);
}
function fo(e) {
	return function(e) {
		return os.includes(e);
	}(e) ? e : 60;
}
function mo(e) {
	const t = $r(e?.lstmSelection);
	return {
		selection: t,
		descriptor: Rr(t.modelId),
		scoreOptions: {
			modelId: t.modelId,
			...null != t.threshold ? { threshold: t.threshold } : {}
		}
	};
}
function ho(e) {
	const t = mo(e);
	return { extras: {
		lstmFeatureContract: "spectral_30s_mean_centered_v3_probabilities",
		lstmModelId: t.descriptor.id,
		lstmModelVersion: t.descriptor.version,
		lstmThreshold: String(t.selection.threshold ?? t.descriptor.defaultThreshold),
		ggirCountScorerContract: "zcy_ws3_count_epoch_v4"
	} };
}
function go(e, t) {
	return "number" == typeof e && "number" == typeof t && e !== t;
}
let yo = 0;
const wo = /* @__PURE__ */ new Set();
function _o(e, t, n) {
	if (n) {
		const e = ge(n);
		if (!$n(e)) return Je(e);
	}
	return t ?? _.SMART;
}
function vo(e, t) {
	e.invalidateQueries({ queryKey: t }).catch((e) => {
		In("warn", "Query invalidation failed", {
			...Jt(e),
			query_key: t.map(String).join(":")
		});
	});
}
const bo = {
	[q.RULE_1_INCLUDE_ACTIVITY]: "Included mid-sleep wake activity (continuous sleep follows)",
	[q.RULE_2_SMALL_PERIODS]: "Evaluated a small sleep period near onset",
	[q.RULE_3_EXTEND_BEFORE_DIARY]: "Extended onset backward through sleep preceding the diary marker",
	[q.RULE_4_NAP_VARIATION]: "Marked a long continuous block as a nap",
	[q.RULE_5_CHOI_SPIKE]: "Tolerated Choi-only nonwear (activity spike present in period)",
	[q.RULE_6_EQUIDISTANT]: "Chose between multiple candidate boundaries",
	[q.RULE_7_CROSS_DAY_NONWEAR]: "Applied cross-day diary nonwear pattern",
	[q.RULE_8_ONSET_BEFORE_INBED]: "Clamped onset to diary in-bed time (onset reported before in-bed)",
	[q.RULE_9_NAP_REGULARITY]: "Placed nap from this child's cross-day nap regularity (no diary nap logged)",
	[q.RULE_10_REGULARITY_OVERRIDE]: "Re-centered the sleep window on this child's cross-day sleep regularity",
	[q.RULE_11_RELIABILITY_FALLBACK]: "Diary unreliable for this night — anchored to accelerometry instead"
};
function So(e) {
	const t = e.replace(/^rule_\d+_/, "").replace(/_/g, " ").trim();
	return 0 === t.length ? e : t.charAt(0).toUpperCase() + t.slice(1);
}
function ko(e) {
	return We(e, h);
}
async function Io(e, t, n) {
	const a = n ? await n.wearSiteHasptRouting(e, t ?? void 0) : await Fe("wearSiteHasptRouting", `${e}:${t ?? ""}`, () => h().wearSiteHasptRouting(e, t ?? void 0));
	return {
		sensorLocation: a.sensorLocation,
		variant: a.variant,
		requiresLongitudinalAxis: a.requiresLongitudinalAxis,
		routedByWearSite: null == t
	};
}
var Ao;
function xo(e, t, n) {
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
Object.fromEntries(Object.values(q).map((e) => [e, bo[e] ?? So(e)]));
var No = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, To = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(Ao = globalThis).__zod_globalConfig ?? (Ao.__zod_globalConfig = {});
const Mo = globalThis.__zod_globalConfig;
function zo(e) {
	return e && Object.assign(Mo, e), Mo;
}
function Ro(e) {
	const t = Object.values(e).filter((e) => "number" == typeof e);
	return Object.entries(e).filter(([e, n]) => -1 === t.indexOf(+e)).map(([e, t]) => t);
}
function Eo(e, t) {
	return "bigint" == typeof t ? t.toString() : t;
}
function $o(e) {
	return { get value() {
		{
			const t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function Co(e) {
	return null == e;
}
function Do(e) {
	const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
const Po = Symbol("evaluating");
function Fo(e, t, n) {
	let a;
	Object.defineProperty(e, t, {
		get() {
			if (a !== Po) return void 0 === a && (a = Po, a = n()), a;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function Oo(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function jo(...e) {
	const t = {};
	for (const n of e) {
		const e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Bo(e) {
	return JSON.stringify(e);
}
const Go = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Lo(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
const Uo = $o(() => {
	if (Mo.jitless) return !1;
	if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return new Function(""), !0;
	} catch (e) {
		return !1;
	}
});
function Ho(e) {
	if (!1 === Lo(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	if ("function" != typeof t) return !0;
	const n = t.prototype;
	return !1 !== Lo(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function Zo(e) {
	return Ho(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const qo = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
function Vo(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Wo(e, t, n) {
	const a = new e._zod.constr(t ?? e._zod.def);
	return t && !n?.parent || (a._zod.parent = e), a;
}
function Jo(e) {
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
const Ko = {
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Yo(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!0 !== e.issues[n]?.continue) return !0;
	return !1;
}
function Xo(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!1 === e.issues[n]?.continue) return !0;
	return !1;
}
function Qo(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function el(e) {
	return "string" == typeof e ? e : e?.message;
}
function tl(e, t, n) {
	const a = e.message ? e.message : el(e.inst?._zod.def?.error?.(e)) ?? el(t?.error?.(e)) ?? el(n.customError?.(e)) ?? el(n.localeError?.(e)) ?? "Invalid input", { inst: i, continue: s, input: r, ...o } = e;
	return o.path ?? (o.path = []), o.message = a, t?.reportInput && (o.input = r), o;
}
function nl(e) {
	return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function al(...e) {
	const [t, n, a] = e;
	return "string" == typeof t ? {
		message: t,
		code: "custom",
		input: n,
		inst: a
	} : { ...t };
}
const il = (e, t) => {
	e.name = "$ZodError", Object.defineProperty(e, "_zod", {
		value: e._zod,
		enumerable: !1
	}), Object.defineProperty(e, "issues", {
		value: t,
		enumerable: !1
	}), e.message = JSON.stringify(t, Eo, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, sl = xo("$ZodError", il), rl = xo("$ZodError", il, { Parent: Error }), ol = (e) => (t, n, a, i) => {
	const s = a ? {
		...a,
		async: !1
	} : { async: !1 }, r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise) throw new No();
	if (r.issues.length) {
		const t = new ((i?.Err) ?? e)(r.issues.map((e) => tl(e, s, zo())));
		throw Go(t, i?.callee), t;
	}
	return r.value;
}, ll = (e) => async (t, n, a, i) => {
	const s = a ? {
		...a,
		async: !0
	} : { async: !0 };
	let r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise && (r = await r), r.issues.length) {
		const t = new ((i?.Err) ?? e)(r.issues.map((e) => tl(e, s, zo())));
		throw Go(t, i?.callee), t;
	}
	return r.value;
}, cl = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		async: !1
	} : { async: !1 }, s = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (s instanceof Promise) throw new No();
	return s.issues.length ? {
		success: !1,
		error: new (e ?? sl)(s.issues.map((e) => tl(e, i, zo())))
	} : {
		success: !0,
		data: s.value
	};
}, ul = cl(rl), dl = (e) => async (t, n, a) => {
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
		error: new e(s.issues.map((e) => tl(e, i, zo())))
	} : {
		success: !0,
		data: s.value
	};
}, pl = dl(rl), fl = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return ol(e)(t, n, i);
}, ml = (e) => (t, n, a) => ol(e)(t, n, a), hl = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return ll(e)(t, n, i);
}, gl = (e) => async (t, n, a) => ll(e)(t, n, a), yl = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return cl(e)(t, n, i);
}, wl = (e) => (t, n, a) => cl(e)(t, n, a), _l = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return dl(e)(t, n, i);
}, vl = (e) => async (t, n, a) => dl(e)(t, n, a), bl = /^[cC][0-9a-z]{6,}$/, Sl = /^[0-9a-z]+$/, kl = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Il = /^[0-9a-vA-V]{20}$/, Al = /^[A-Za-z0-9]{27}$/, xl = /^[a-zA-Z0-9_-]{21}$/, Nl = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Tl = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ml = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, zl = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Rl = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, El = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, $l = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Cl = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Dl = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Pl = /^[A-Za-z0-9_-]*$/, Fl = /^https?$/, Ol = /^\+[1-9]\d{6,14}$/, jl = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Bl = new RegExp(`^${jl}$`);
function Gl(e) {
	const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return "number" == typeof e.precision ? -1 === e.precision ? `${t}` : 0 === e.precision ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
const Ll = /^-?\d+$/, Ul = /^-?\d+(?:\.\d+)?$/, Hl = /^(?:true|false)$/i, Zl = /^[^A-Z]*$/, ql = /^[^a-z]*$/, Vl = xo("$ZodCheck", (e, t) => {
	var n;
	e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Wl = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, Jl = xo("$ZodCheckLessThan", (e, t) => {
	Vl.init(e, t);
	const n = Wl[typeof t.value];
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
}), Kl = xo("$ZodCheckGreaterThan", (e, t) => {
	Vl.init(e, t);
	const n = Wl[typeof t.value];
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
}), Yl = xo("$ZodCheckMultipleOf", (e, t) => {
	Vl.init(e, t), e._zod.onattach.push((e) => {
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
}), Xl = xo("$ZodCheckNumberFormat", (e, t) => {
	Vl.init(e, t), t.format = t.format || "float64";
	const n = t.format?.includes("int"), a = n ? "int" : "number", [i, s] = Ko[t.format];
	e._zod.onattach.push((e) => {
		const a = e._zod.bag;
		a.format = t.format, a.minimum = i, a.maximum = s, n && (a.pattern = Ll);
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
}), Ql = xo("$ZodCheckMaxLength", (e, t) => {
	var n;
	Vl.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !Co(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		const a = n.value;
		if (a.length <= t.maximum) return;
		const i = nl(a);
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
}), ec = xo("$ZodCheckMinLength", (e, t) => {
	var n;
	Vl.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !Co(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		const a = n.value;
		if (a.length >= t.minimum) return;
		const i = nl(a);
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
}), tc = xo("$ZodCheckLengthEquals", (e, t) => {
	var n;
	Vl.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !Co(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		const a = n.value, i = a.length;
		if (i === t.length) return;
		const s = nl(a), r = i > t.length;
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
}), nc = xo("$ZodCheckStringFormat", (e, t) => {
	var n, a;
	Vl.init(e, t), e._zod.onattach.push((e) => {
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
}), ac = xo("$ZodCheckRegex", (e, t) => {
	nc.init(e, t), e._zod.check = (n) => {
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
}), ic = xo("$ZodCheckLowerCase", (e, t) => {
	t.pattern ?? (t.pattern = Zl), nc.init(e, t);
}), sc = xo("$ZodCheckUpperCase", (e, t) => {
	t.pattern ?? (t.pattern = ql), nc.init(e, t);
}), rc = xo("$ZodCheckIncludes", (e, t) => {
	Vl.init(e, t);
	const n = Vo(t.includes), a = new RegExp("number" == typeof t.position ? `^.{${t.position}}${n}` : n);
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
}), oc = xo("$ZodCheckStartsWith", (e, t) => {
	Vl.init(e, t);
	const n = new RegExp(`^${Vo(t.prefix)}.*`);
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
}), lc = xo("$ZodCheckEndsWith", (e, t) => {
	Vl.init(e, t);
	const n = new RegExp(`.*${Vo(t.suffix)}$`);
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
}), cc = xo("$ZodCheckOverwrite", (e, t) => {
	Vl.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
});
var uc = class {
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
const dc = {
	major: 4,
	minor: 4,
	patch: 3
}, pc = xo("$ZodType", (e, t) => {
	var n;
	e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = dc;
	const a = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && a.unshift(e);
	for (const i of a) for (const t of i._zod.onattach) t(e);
	if (0 === a.length) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		const t = (e, t, n) => {
			let a, i = Yo(e);
			for (const s of t) {
				if (s._zod.def.when) {
					if (Xo(e)) continue;
					if (!s._zod.def.when(e)) continue;
				} else if (i) continue;
				const t = e.issues.length, r = s._zod.check(e);
				if (r instanceof Promise && !1 === n?.async) throw new No();
				if (a || r instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
					await r, e.issues.length !== t && (i || (i = Yo(e, t)));
				});
				else {
					if (e.issues.length === t) continue;
					i || (i = Yo(e, t));
				}
			}
			return a ? a.then(() => e) : e;
		}, n = (n, i, s) => {
			if (Yo(n)) return n.aborted = !0, n;
			const r = t(i, a, s);
			if (r instanceof Promise) {
				if (!1 === s.async) throw new No();
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
				if (!1 === s.async) throw new No();
				return r.then((e) => t(e, a, s));
			}
			return t(r, a, s);
		};
	}
	Fo(e, "~standard", () => ({
		validate: (t) => {
			try {
				const n = ul(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch (n) {
				return pl(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), fc = xo("$ZodString", (e, t) => {
	var n;
	pc.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? (n = e._zod.bag, new RegExp(`^${n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*"}$`)), e._zod.parse = (n, a) => {
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
}), mc = xo("$ZodStringFormat", (e, t) => {
	nc.init(e, t), fc.init(e, t);
}), hc = xo("$ZodGUID", (e, t) => {
	t.pattern ?? (t.pattern = Tl), mc.init(e, t);
}), gc = xo("$ZodUUID", (e, t) => {
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
		t.pattern ?? (t.pattern = Ml(e));
	} else t.pattern ?? (t.pattern = Ml());
	mc.init(e, t);
}), yc = xo("$ZodEmail", (e, t) => {
	t.pattern ?? (t.pattern = zl), mc.init(e, t);
}), wc = xo("$ZodURL", (e, t) => {
	mc.init(e, t), e._zod.check = (n) => {
		try {
			const a = n.value.trim();
			if (!t.normalize && t.protocol?.source === Fl.source && !/^https?:\/\//i.test(a)) return void n.issues.push({
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
}), _c = xo("$ZodEmoji", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), mc.init(e, t);
}), vc = xo("$ZodNanoID", (e, t) => {
	t.pattern ?? (t.pattern = xl), mc.init(e, t);
}), bc = xo("$ZodCUID", (e, t) => {
	t.pattern ?? (t.pattern = bl), mc.init(e, t);
}), Sc = xo("$ZodCUID2", (e, t) => {
	t.pattern ?? (t.pattern = Sl), mc.init(e, t);
}), kc = xo("$ZodULID", (e, t) => {
	t.pattern ?? (t.pattern = kl), mc.init(e, t);
}), Ic = xo("$ZodXID", (e, t) => {
	t.pattern ?? (t.pattern = Il), mc.init(e, t);
}), Ac = xo("$ZodKSUID", (e, t) => {
	t.pattern ?? (t.pattern = Al), mc.init(e, t);
}), xc = xo("$ZodISODateTime", (e, t) => {
	t.pattern ?? (t.pattern = function(e) {
		const t = Gl({ precision: e.precision }), n = ["Z"];
		e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const a = `${t}(?:${n.join("|")})`;
		return new RegExp(`^${jl}T(?:${a})$`);
	}(t)), mc.init(e, t);
}), Nc = xo("$ZodISODate", (e, t) => {
	t.pattern ?? (t.pattern = Bl), mc.init(e, t);
}), Tc = xo("$ZodISOTime", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp(`^${Gl(t)}$`)), mc.init(e, t);
}), Mc = xo("$ZodISODuration", (e, t) => {
	t.pattern ?? (t.pattern = Nl), mc.init(e, t);
}), zc = xo("$ZodIPv4", (e, t) => {
	t.pattern ?? (t.pattern = Rl), mc.init(e, t), e._zod.bag.format = "ipv4";
}), Rc = xo("$ZodIPv6", (e, t) => {
	t.pattern ?? (t.pattern = El), mc.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
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
}), Ec = xo("$ZodCIDRv4", (e, t) => {
	t.pattern ?? (t.pattern = $l), mc.init(e, t);
}), $c = xo("$ZodCIDRv6", (e, t) => {
	t.pattern ?? (t.pattern = Cl), mc.init(e, t), e._zod.check = (n) => {
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
function Cc(e) {
	if ("" === e) return !0;
	if (/\s/.test(e)) return !1;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
const Dc = xo("$ZodBase64", (e, t) => {
	t.pattern ?? (t.pattern = Dl), mc.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		Cc(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Pc = xo("$ZodBase64URL", (e, t) => {
	t.pattern ?? (t.pattern = Pl), mc.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		(function(e) {
			if (!Pl.test(e)) return !1;
			const t = e.replace(/[-_]/g, (e) => "-" === e ? "+" : "/");
			return Cc(t.padEnd(4 * Math.ceil(t.length / 4), "="));
		})(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Fc = xo("$ZodE164", (e, t) => {
	t.pattern ?? (t.pattern = Ol), mc.init(e, t);
}), Oc = xo("$ZodJWT", (e, t) => {
	mc.init(e, t), e._zod.check = (n) => {
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
}), jc = xo("$ZodNumber", (e, t) => {
	pc.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Ul, e._zod.parse = (n, a) => {
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
}), Bc = xo("$ZodNumberFormat", (e, t) => {
	Xl.init(e, t), jc.init(e, t);
}), Gc = xo("$ZodBoolean", (e, t) => {
	pc.init(e, t), e._zod.pattern = Hl, e._zod.parse = (n, a) => {
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
}), Lc = xo("$ZodUnknown", (e, t) => {
	pc.init(e, t), e._zod.parse = (e) => e;
}), Uc = xo("$ZodNever", (e, t) => {
	pc.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function Hc(e, t, n) {
	e.issues.length && t.issues.push(...Qo(n, e.issues)), t.value[n] = e.value;
}
const Zc = xo("$ZodArray", (e, t) => {
	pc.init(e, t), e._zod.parse = (n, a) => {
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
			o instanceof Promise ? s.push(o.then((t) => Hc(t, n, e))) : Hc(o, n, e);
		}
		return s.length ? Promise.all(s).then(() => n) : n;
	};
});
function qc(e, t, n, a, i, s) {
	const r = n in a;
	if (e.issues.length) {
		if (i && s && !r) return;
		t.issues.push(...Qo(n, e.issues));
	}
	r || i ? void 0 === e.value ? r && (t.value[n] = void 0) : t.value[n] = e.value : e.issues.length || t.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: void 0,
		path: [n]
	});
}
function Vc(e) {
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
function Wc(e, t, n, a, i, s) {
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
		i instanceof Promise ? e.push(i.then((e) => qc(e, n, p, t, u, d))) : qc(i, n, p, t, u, d);
	}
	return r.length && n.issues.push({
		code: "unrecognized_keys",
		keys: r,
		input: t,
		inst: s
	}), e.length ? Promise.all(e).then(() => n) : n;
}
const Jc = xo("$ZodObject", (e, t) => {
	if (pc.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		const e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			const n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	const n = $o(() => Vc(t));
	Fo(e._zod, "propValues", () => {
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
	const a = Lo, i = t.catchall;
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
			s instanceof Promise ? l.push(s.then((n) => qc(n, t, e, o, a, i))) : qc(s, t, e, o, a, i);
		}
		return i ? Wc(l, o, t, r, n.value, e) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), Kc = xo("$ZodObjectJIT", (e, t) => {
	Jc.init(e, t);
	const n = e._zod.parse, a = $o(() => Vc(t));
	let i;
	const s = Lo, r = !Mo.jitless, o = r && Uo.value, l = t.catchall;
	let c;
	e._zod.parse = (u, d) => {
		c ?? (c = a.value);
		const p = u.value;
		return s(p) ? r && o && !1 === d?.async && !0 !== d.jitless ? (i || (i = ((e) => {
			const t = new uc([
				"shape",
				"payload",
				"ctx"
			]), n = a.value, i = (e) => {
				const t = Bo(e);
				return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
			};
			t.write("const input = payload.value;");
			const s = Object.create(null);
			let r = 0;
			for (const a of n.keys) s[a] = "key_" + r++;
			t.write("const newResult = {};");
			for (const a of n.keys) {
				const n = s[a], r = Bo(a), o = e[a], l = "optional" === o?._zod?.optin, c = "optional" === o?._zod?.optout;
				t.write(`const ${n} = ${i(a)};`), l && c ? t.write(`\n        if (${n}.issues.length) {\n          if (${r} in input) {\n            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [${r}, ...iss.path] : [${r}]\n            })));\n          }\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : l ? t.write(`\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : t.write(`\n        const ${n}_present = ${r} in input;\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        if (!${n}_present && !${n}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${r}]\n          });\n        }\n\n        if (${n}_present) {\n          if (${n}.value === undefined) {\n            newResult[${r}] = undefined;\n          } else {\n            newResult[${r}] = ${n}.value;\n          }\n        }\n\n      `);
			}
			t.write("payload.value = newResult;"), t.write("return payload;");
			const o = t.compile();
			return (t, n) => o(e, t, n);
		})(t.shape)), u = i(u, d), l ? Wc([], p, u, d, c, e) : u) : n(u, d) : (u.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), u);
	};
});
function Yc(e, t, n, a) {
	for (const s of e) if (0 === s.issues.length) return t.value = s.value, t;
	const i = e.filter((e) => !Yo(e));
	return 1 === i.length ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => tl(e, a, zo())))
	}), t);
}
const Xc = xo("$ZodUnion", (e, t) => {
	pc.init(e, t), Fo(e._zod, "optin", () => t.options.some((e) => "optional" === e._zod.optin) ? "optional" : void 0), Fo(e._zod, "optout", () => t.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0), Fo(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), Fo(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			const e = t.options.map((e) => e._zod.pattern);
			return new RegExp(`^(${e.map((e) => Do(e.source)).join("|")})$`);
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
		return s ? Promise.all(r).then((t) => Yc(t, a, e, i)) : Yc(r, a, e, i);
	};
}), Qc = xo("$ZodIntersection", (e, t) => {
	pc.init(e, t), e._zod.parse = (e, n) => {
		const a = e.value, i = t.left._zod.run({
			value: a,
			issues: []
		}, n), s = t.right._zod.run({
			value: a,
			issues: []
		}, n);
		return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([t, n]) => tu(e, t, n)) : tu(e, i, s);
	};
});
function eu(e, t) {
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (e instanceof Date && t instanceof Date && +e === +t) return {
		valid: !0,
		data: e
	};
	if (Ho(e) && Ho(t)) {
		const n = Object.keys(t), a = Object.keys(e).filter((e) => -1 !== n.indexOf(e)), i = {
			...e,
			...t
		};
		for (const s of a) {
			const n = eu(e[s], t[s]);
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
			const i = eu(e[a], t[a]);
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
function tu(e, t, n) {
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
	}), Yo(e)) return e;
	const r = eu(t.value, n.value);
	if (!r.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
	return e.value = r.data, e;
}
const nu = xo("$ZodRecord", (e, t) => {
	pc.init(e, t), e._zod.parse = (n, a) => {
		const i = n.value;
		if (!Ho(i)) return n.issues.push({
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
						issues: r.issues.map((e) => tl(e, a, zo())),
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
					e.issues.length && n.issues.push(...Qo(c, e.issues)), n.value[l] = e.value;
				})) : (u.issues.length && n.issues.push(...Qo(c, u.issues)), n.value[l] = u.value);
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
				if ("string" == typeof r && Ul.test(r) && o.issues.length) {
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
						issues: o.issues.map((e) => tl(e, a, zo())),
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
					e.issues.length && n.issues.push(...Qo(r, e.issues)), n.value[o.value] = e.value;
				})) : (l.issues.length && n.issues.push(...Qo(r, l.issues)), n.value[o.value] = l.value);
			}
		}
		return s.length ? Promise.all(s).then(() => n) : n;
	};
}), au = xo("$ZodEnum", (e, t) => {
	pc.init(e, t);
	const n = Ro(t.entries), a = new Set(n);
	e._zod.values = a, e._zod.pattern = new RegExp(`^(${n.filter((e) => qo.has(typeof e)).map((e) => "string" == typeof e ? Vo(e) : e.toString()).join("|")})$`), e._zod.parse = (t, i) => {
		const s = t.value;
		return a.has(s) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: s,
			inst: e
		}), t;
	};
}), iu = xo("$ZodTransform", (e, t) => {
	pc.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, a) => {
		if ("backward" === a.direction) throw new To(e.constructor.name);
		const i = t.transform(n.value, n);
		if (a.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n.fallback = !0, n));
		if (i instanceof Promise) throw new No();
		return n.value = i, n.fallback = !0, n;
	};
});
function su(e, t) {
	return void 0 === t && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e;
}
const ru = xo("$ZodOptional", (e, t) => {
	pc.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Fo(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), Fo(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${Do(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if ("optional" === t.innerType._zod.optin) {
			const a = e.value, i = t.innerType._zod.run(e, n);
			return i instanceof Promise ? i.then((e) => su(e, a)) : su(i, a);
		}
		return void 0 === e.value ? e : t.innerType._zod.run(e, n);
	};
}), ou = xo("$ZodExactOptional", (e, t) => {
	ru.init(e, t), Fo(e._zod, "values", () => t.innerType._zod.values), Fo(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), lu = xo("$ZodNullable", (e, t) => {
	pc.init(e, t), Fo(e._zod, "optin", () => t.innerType._zod.optin), Fo(e._zod, "optout", () => t.innerType._zod.optout), Fo(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${Do(e.source)}|null)$`) : void 0;
	}), Fo(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => null === e.value ? e : t.innerType._zod.run(e, n);
}), cu = xo("$ZodDefault", (e, t) => {
	pc.init(e, t), e._zod.optin = "optional", Fo(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		if (void 0 === e.value) return e.value = t.defaultValue, e;
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then((e) => uu(e, t)) : uu(a, t);
	};
});
function uu(e, t) {
	return void 0 === e.value && (e.value = t.defaultValue), e;
}
const du = xo("$ZodPrefault", (e, t) => {
	pc.init(e, t), e._zod.optin = "optional", Fo(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => ("backward" === n.direction || void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), pu = xo("$ZodNonOptional", (e, t) => {
	pc.init(e, t), Fo(e._zod, "values", () => {
		const e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
	}), e._zod.parse = (n, a) => {
		const i = t.innerType._zod.run(n, a);
		return i instanceof Promise ? i.then((t) => fu(t, e)) : fu(i, e);
	};
});
function fu(e, t) {
	return e.issues.length || void 0 !== e.value || e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
const mu = xo("$ZodCatch", (e, t) => {
	pc.init(e, t), e._zod.optin = "optional", Fo(e._zod, "optout", () => t.innerType._zod.optout), Fo(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then((a) => (e.value = a.value, a.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: a.issues.map((e) => tl(e, n, zo())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e)) : (e.value = a.value, a.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: a.issues.map((e) => tl(e, n, zo())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e);
	};
}), hu = xo("$ZodPipe", (e, t) => {
	pc.init(e, t), Fo(e._zod, "values", () => t.in._zod.values), Fo(e._zod, "optin", () => t.in._zod.optin), Fo(e._zod, "optout", () => t.out._zod.optout), Fo(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) {
			const a = t.out._zod.run(e, n);
			return a instanceof Promise ? a.then((e) => gu(e, t.in, n)) : gu(a, t.in, n);
		}
		const a = t.in._zod.run(e, n);
		return a instanceof Promise ? a.then((e) => gu(e, t.out, n)) : gu(a, t.out, n);
	};
});
function gu(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues,
		fallback: e.fallback
	}, n);
}
const yu = xo("$ZodReadonly", (e, t) => {
	pc.init(e, t), Fo(e._zod, "propValues", () => t.innerType._zod.propValues), Fo(e._zod, "values", () => t.innerType._zod.values), Fo(e._zod, "optin", () => t.innerType?._zod?.optin), Fo(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then(wu) : wu(a);
	};
});
function wu(e) {
	return e.value = Object.freeze(e.value), e;
}
const _u = xo("$ZodCustom", (e, t) => {
	Vl.init(e, t), pc.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		const a = n.value, i = t.fn(a);
		if (i instanceof Promise) return i.then((t) => vu(t, n, a, e));
		vu(i, n, a, e);
	};
});
function vu(e, t, n, a) {
	if (!e) {
		const e = {
			code: "custom",
			input: n,
			inst: a,
			path: [...a._zod.def.path ?? []],
			continue: !a._zod.def.abort
		};
		a._zod.def.params && (e.params = a._zod.def.params), t.issues.push(al(e));
	}
}
var bu;
(bu = globalThis).__zod_globalRegistry ?? (bu.__zod_globalRegistry = new class {
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
const Su = globalThis.__zod_globalRegistry;
function ku(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...Jo(t)
	});
}
function Iu(e, t) {
	return new Jl({
		check: "less_than",
		...Jo(t),
		value: e,
		inclusive: !1
	});
}
function Au(e, t) {
	return new Jl({
		check: "less_than",
		...Jo(t),
		value: e,
		inclusive: !0
	});
}
function xu(e, t) {
	return new Kl({
		check: "greater_than",
		...Jo(t),
		value: e,
		inclusive: !1
	});
}
function Nu(e, t) {
	return new Kl({
		check: "greater_than",
		...Jo(t),
		value: e,
		inclusive: !0
	});
}
function Tu(e, t) {
	return new Yl({
		check: "multiple_of",
		...Jo(t),
		value: e
	});
}
function Mu(e, t) {
	return new Ql({
		check: "max_length",
		...Jo(t),
		maximum: e
	});
}
function zu(e, t) {
	return new ec({
		check: "min_length",
		...Jo(t),
		minimum: e
	});
}
function Ru(e, t) {
	return new tc({
		check: "length_equals",
		...Jo(t),
		length: e
	});
}
function Eu(e) {
	return new cc({
		check: "overwrite",
		tx: e
	});
}
function $u(e, t) {
	const n = new Vl({
		check: "custom",
		...Jo(t)
	});
	return n._zod.check = e, n;
}
function Cu(e) {
	let t = e?.target ?? "draft-2020-12";
	return "draft-4" === t && (t = "draft-04"), "draft-7" === t && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? Su,
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
function Du(e, t, n = {
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
		s && (r.ref || (r.ref = s), Du(s, t, a), t.seen.get(s).isParent = !0);
	}
	const l = t.metadataRegistry.get(e);
	return l && Object.assign(r.schema, l), "input" === t.io && Ou(e) && (delete r.schema.examples, delete r.schema.default), "input" === t.io && "_prefault" in r.schema && ((a = r.schema).default ?? (a.default = r.schema._prefault)), delete r.schema._prefault, t.seen.get(e).schema;
}
function Pu(e, t) {
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
function Fu(e, t) {
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
					input: ju(t, "input", e.processors),
					output: ju(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch (o) {
		throw new Error("Error converting schema to JSON.");
	}
}
function Ou(e, t) {
	const n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	const a = e._zod.def;
	if ("transform" === a.type) return !0;
	if ("array" === a.type) return Ou(a.element, n);
	if ("set" === a.type) return Ou(a.valueType, n);
	if ("lazy" === a.type) return Ou(a.getter(), n);
	if ("promise" === a.type || "optional" === a.type || "nonoptional" === a.type || "nullable" === a.type || "readonly" === a.type || "default" === a.type || "prefault" === a.type) return Ou(a.innerType, n);
	if ("intersection" === a.type) return Ou(a.left, n) || Ou(a.right, n);
	if ("record" === a.type || "map" === a.type) return Ou(a.keyType, n) || Ou(a.valueType, n);
	if ("pipe" === a.type) return !!e._zod.traits.has("$ZodCodec") || Ou(a.in, n) || Ou(a.out, n);
	if ("object" === a.type) {
		for (const e in a.shape) if (Ou(a.shape[e], n)) return !0;
		return !1;
	}
	if ("union" === a.type) {
		for (const e of a.options) if (Ou(e, n)) return !0;
		return !1;
	}
	if ("tuple" === a.type) {
		for (const e of a.items) if (Ou(e, n)) return !0;
		return !(!a.rest || !Ou(a.rest, n));
	}
	return !1;
}
const ju = (e, t, n = {}) => (a) => {
	const { libraryOptions: i, target: s } = a ?? {}, r = Cu({
		...i ?? {},
		target: s,
		io: t,
		processors: n
	});
	return Du(e, r), Pu(r, e), Fu(r, e);
}, Bu = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, Gu = (e, t, n, a) => {
	const i = e._zod.def;
	Du(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
}, Lu = xo("ZodISODateTime", (e, t) => {
	xc.init(e, t), pd.init(e, t);
});
const Uu = xo("ZodISODate", (e, t) => {
	Nc.init(e, t), pd.init(e, t);
});
const Hu = xo("ZodISOTime", (e, t) => {
	Tc.init(e, t), pd.init(e, t);
});
const Zu = xo("ZodISODuration", (e, t) => {
	Mc.init(e, t), pd.init(e, t);
});
const qu = (e, t) => {
	sl.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
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
			e.issues.push(t), e.message = JSON.stringify(e.issues, Eo, 2);
		} },
		addIssues: { value: (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, Eo, 2);
		} },
		isEmpty: { get: () => 0 === e.issues.length }
	});
}, Vu = xo("ZodError", qu, { Parent: Error }), Wu = ol(Vu), Ju = ll(Vu), Ku = cl(Vu), Yu = dl(Vu), Xu = fl(Vu), Qu = ml(Vu), ed = hl(Vu), td = gl(Vu), nd = yl(Vu), ad = wl(Vu), id = _l(Vu), sd = vl(Vu), rd = /* @__PURE__ */ new WeakMap();
function od(e, t, n) {
	const a = Object.getPrototypeOf(e);
	let i = rd.get(a);
	if (i || (i = /* @__PURE__ */ new Set(), rd.set(a, i)), !i.has(t)) {
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
const ld = xo("ZodType", (e, t) => (pc.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: ju(e, "input"),
	output: ju(e, "output")
} }), e.toJSONSchema = ((e, t = {}) => (n) => {
	const a = Cu({
		...n,
		processors: t
	});
	return Du(e, a), Pu(a, e), Fu(a, e);
})(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (t, n) => Wu(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => Ku(e, t, n), e.parseAsync = async (t, n) => Ju(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => Yu(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => Xu(e, t, n), e.decode = (t, n) => Qu(e, t, n), e.encodeAsync = async (t, n) => ed(e, t, n), e.decodeAsync = async (t, n) => td(e, t, n), e.safeEncode = (t, n) => nd(e, t, n), e.safeDecode = (t, n) => ad(e, t, n), e.safeEncodeAsync = async (t, n) => id(e, t, n), e.safeDecodeAsync = async (t, n) => sd(e, t, n), od(e, "ZodType", {
	check(...e) {
		const t = this.def;
		return this.clone(jo(t, { checks: [...t.checks ?? [], ...e.map((e) => "function" == typeof e ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return Wo(this, e, t);
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
				return new dp({
					type: "custom",
					check: "custom",
					fn: t,
					...Jo(n)
				});
			}(0, e, t);
		}(e, t));
	},
	superRefine(e, t) {
		return this.check(function(e, t) {
			return function(e, t) {
				const n = $u((t) => (t.addIssue = (e) => {
					if ("string" == typeof e) t.issues.push(al(e, t.value, n._zod.def));
					else {
						const a = e;
						a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = t.value), a.inst ?? (a.inst = n), a.continue ?? (a.continue = !n._zod.def.abort), t.issues.push(al(a));
					}
				}, e(t.value, t)), t);
				return n;
			}(e, t);
		}(e, t));
	},
	overwrite(e) {
		return this.check(Eu(e));
	},
	optional() {
		return ep(this);
	},
	exactOptional() {
		return new tp({
			type: "optional",
			innerType: this
		});
	},
	nullable() {
		return ap(this);
	},
	nullish() {
		return ep(ap(this));
	},
	nonoptional(e) {
		return function(e, t) {
			return new rp({
				type: "nonoptional",
				innerType: e,
				...Jo(t)
			});
		}(this, e);
	},
	array() {
		return Ld(this);
	},
	or(e) {
		return qd([this, e]);
	},
	and(e) {
		return new Vd({
			type: "intersection",
			left: this,
			right: e
		});
	},
	transform(e) {
		return cp(this, new Xd({
			type: "transform",
			transform: e
		}));
	},
	default(e) {
		return t = e, new ip({
			type: "default",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Zo(t);
			}
		});
		var t;
	},
	prefault(e) {
		return t = e, new sp({
			type: "prefault",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Zo(t);
			}
		});
		var t;
	},
	catch(e) {
		return new op({
			type: "catch",
			innerType: this,
			catchValue: "function" == typeof (t = e) ? t : () => t
		});
		var t;
	},
	pipe(e) {
		return cp(this, e);
	},
	readonly() {
		return new up({
			type: "readonly",
			innerType: this
		});
	},
	describe(e) {
		const t = this.clone();
		return Su.add(t, { description: e }), t;
	},
	meta(...e) {
		if (0 === e.length) return Su.get(this);
		const t = this.clone();
		return Su.add(t, e[0]), t;
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
	get: () => Su.get(e)?.description,
	configurable: !0
}), e)), cd = xo("_ZodString", (e, t) => {
	fc.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = n;
		a.type = "string";
		const { minimum: i, maximum: s, format: r, patterns: o, contentEncoding: l } = e._zod.bag;
		if ("number" == typeof i && (a.minLength = i), "number" == typeof s && (a.maxLength = s), r && (a.format = Bu[r] ?? r, "" === a.format && delete a.format, "time" === r && delete a.format), l && (a.contentEncoding = l), o && o.size > 0) {
			const e = [...o];
			1 === e.length ? a.pattern = e[0].source : e.length > 1 && (a.allOf = [...e.map((e) => ({
				..."draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	})(e, t, n);
	const n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, od(e, "_ZodString", {
		regex(...e) {
			return this.check(function(e, t) {
				return new ac({
					check: "string_format",
					format: "regex",
					...Jo(t),
					pattern: e
				});
			}(...e));
		},
		includes(...e) {
			return this.check(function(e, t) {
				return new rc({
					check: "string_format",
					format: "includes",
					...Jo(t),
					includes: e
				});
			}(...e));
		},
		startsWith(...e) {
			return this.check(function(e, t) {
				return new oc({
					check: "string_format",
					format: "starts_with",
					...Jo(t),
					prefix: e
				});
			}(...e));
		},
		endsWith(...e) {
			return this.check(function(e, t) {
				return new lc({
					check: "string_format",
					format: "ends_with",
					...Jo(t),
					suffix: e
				});
			}(...e));
		},
		min(...e) {
			return this.check(zu(...e));
		},
		max(...e) {
			return this.check(Mu(...e));
		},
		length(...e) {
			return this.check(Ru(...e));
		},
		nonempty(...e) {
			return this.check(zu(1, ...e));
		},
		lowercase(e) {
			return this.check(function(e) {
				return new ic({
					check: "string_format",
					format: "lowercase",
					...Jo(e)
				});
			}(e));
		},
		uppercase(e) {
			return this.check(function(e) {
				return new sc({
					check: "string_format",
					format: "uppercase",
					...Jo(e)
				});
			}(e));
		},
		trim() {
			return this.check(Eu((e) => e.trim()));
		},
		normalize(...e) {
			return this.check(function(e) {
				return Eu((t) => t.normalize(e));
			}(...e));
		},
		toLowerCase() {
			return this.check(Eu((e) => e.toLowerCase()));
		},
		toUpperCase() {
			return this.check(Eu((e) => e.toUpperCase()));
		},
		slugify() {
			return this.check(Eu((e) => function(e) {
				return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
			}(e)));
		}
	});
}), ud = xo("ZodString", (e, t) => {
	fc.init(e, t), cd.init(e, t), e.email = (t) => e.check(function(e, t) {
		return new fd({
			type: "string",
			format: "email",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.url = (t) => e.check(function(e, t) {
		return new gd({
			type: "string",
			format: "url",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.jwt = (t) => e.check(function(e, t) {
		return new Rd({
			type: "string",
			format: "jwt",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.emoji = (t) => e.check(function(e, t) {
		return new yd({
			type: "string",
			format: "emoji",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.guid = (t) => e.check(ku(md, t)), e.uuid = (t) => e.check(function(e, t) {
		return new hd({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.uuidv4 = (t) => e.check(function(e, t) {
		return new hd({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v4",
			...Jo(t)
		});
	}(0, t)), e.uuidv6 = (t) => e.check(function(e, t) {
		return new hd({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v6",
			...Jo(t)
		});
	}(0, t)), e.uuidv7 = (t) => e.check(function(e, t) {
		return new hd({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v7",
			...Jo(t)
		});
	}(0, t)), e.nanoid = (t) => e.check(function(e, t) {
		return new wd({
			type: "string",
			format: "nanoid",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.guid = (t) => e.check(ku(md, t)), e.cuid = (t) => e.check(function(e, t) {
		return new _d({
			type: "string",
			format: "cuid",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.cuid2 = (t) => e.check(function(e, t) {
		return new vd({
			type: "string",
			format: "cuid2",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.ulid = (t) => e.check(function(e, t) {
		return new bd({
			type: "string",
			format: "ulid",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.base64 = (t) => e.check(function(e, t) {
		return new Td({
			type: "string",
			format: "base64",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.base64url = (t) => e.check(function(e, t) {
		return new Md({
			type: "string",
			format: "base64url",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.xid = (t) => e.check(function(e, t) {
		return new Sd({
			type: "string",
			format: "xid",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.ksuid = (t) => e.check(function(e, t) {
		return new kd({
			type: "string",
			format: "ksuid",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.ipv4 = (t) => e.check(function(e, t) {
		return new Id({
			type: "string",
			format: "ipv4",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.ipv6 = (t) => e.check(function(e, t) {
		return new Ad({
			type: "string",
			format: "ipv6",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.cidrv4 = (t) => e.check(function(e, t) {
		return new xd({
			type: "string",
			format: "cidrv4",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.cidrv6 = (t) => e.check(function(e, t) {
		return new Nd({
			type: "string",
			format: "cidrv6",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.e164 = (t) => e.check(function(e, t) {
		return new zd({
			type: "string",
			format: "e164",
			check: "string_format",
			abort: !1,
			...Jo(t)
		});
	}(0, t)), e.datetime = (t) => e.check(function(e) {
		return function(e, t) {
			return new Lu({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: !1,
				local: !1,
				precision: null,
				...Jo(t)
			});
		}(0, e);
	}(t)), e.date = (t) => e.check(function(e) {
		return function(e, t) {
			return new Uu({
				type: "string",
				format: "date",
				check: "string_format",
				...Jo(t)
			});
		}(0, e);
	}(t)), e.time = (t) => e.check(function(e) {
		return function(e, t) {
			return new Hu({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...Jo(t)
			});
		}(0, e);
	}(t)), e.duration = (t) => e.check(function(e) {
		return function(e, t) {
			return new Zu({
				type: "string",
				format: "duration",
				check: "string_format",
				...Jo(t)
			});
		}(0, e);
	}(t));
});
function dd(e) {
	return function(e, t) {
		return new ud({
			type: "string",
			...Jo(t)
		});
	}(0, e);
}
const pd = xo("ZodStringFormat", (e, t) => {
	mc.init(e, t), cd.init(e, t);
}), fd = xo("ZodEmail", (e, t) => {
	yc.init(e, t), pd.init(e, t);
}), md = xo("ZodGUID", (e, t) => {
	hc.init(e, t), pd.init(e, t);
}), hd = xo("ZodUUID", (e, t) => {
	gc.init(e, t), pd.init(e, t);
}), gd = xo("ZodURL", (e, t) => {
	wc.init(e, t), pd.init(e, t);
}), yd = xo("ZodEmoji", (e, t) => {
	_c.init(e, t), pd.init(e, t);
}), wd = xo("ZodNanoID", (e, t) => {
	vc.init(e, t), pd.init(e, t);
}), _d = xo("ZodCUID", (e, t) => {
	bc.init(e, t), pd.init(e, t);
}), vd = xo("ZodCUID2", (e, t) => {
	Sc.init(e, t), pd.init(e, t);
}), bd = xo("ZodULID", (e, t) => {
	kc.init(e, t), pd.init(e, t);
}), Sd = xo("ZodXID", (e, t) => {
	Ic.init(e, t), pd.init(e, t);
}), kd = xo("ZodKSUID", (e, t) => {
	Ac.init(e, t), pd.init(e, t);
}), Id = xo("ZodIPv4", (e, t) => {
	zc.init(e, t), pd.init(e, t);
}), Ad = xo("ZodIPv6", (e, t) => {
	Rc.init(e, t), pd.init(e, t);
}), xd = xo("ZodCIDRv4", (e, t) => {
	Ec.init(e, t), pd.init(e, t);
}), Nd = xo("ZodCIDRv6", (e, t) => {
	$c.init(e, t), pd.init(e, t);
}), Td = xo("ZodBase64", (e, t) => {
	Dc.init(e, t), pd.init(e, t);
}), Md = xo("ZodBase64URL", (e, t) => {
	Pc.init(e, t), pd.init(e, t);
}), zd = xo("ZodE164", (e, t) => {
	Fc.init(e, t), pd.init(e, t);
}), Rd = xo("ZodJWT", (e, t) => {
	Oc.init(e, t), pd.init(e, t);
}), Ed = xo("ZodNumber", (e, t) => {
	jc.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = n, { minimum: i, maximum: s, format: r, multipleOf: o, exclusiveMaximum: l, exclusiveMinimum: c } = e._zod.bag;
		"string" == typeof r && r.includes("int") ? a.type = "integer" : a.type = "number";
		const u = "number" == typeof c && c >= (i ?? Number.NEGATIVE_INFINITY), d = "number" == typeof l && l <= (s ?? Number.POSITIVE_INFINITY), p = "draft-04" === t.target || "openapi-3.0" === t.target;
		u ? p ? (a.minimum = c, a.exclusiveMinimum = !0) : a.exclusiveMinimum = c : "number" == typeof i && (a.minimum = i), d ? p ? (a.maximum = l, a.exclusiveMaximum = !0) : a.exclusiveMaximum = l : "number" == typeof s && (a.maximum = s), "number" == typeof o && (a.multipleOf = o);
	})(e, t, n), od(e, "ZodNumber", {
		gt(e, t) {
			return this.check(xu(e, t));
		},
		gte(e, t) {
			return this.check(Nu(e, t));
		},
		min(e, t) {
			return this.check(Nu(e, t));
		},
		lt(e, t) {
			return this.check(Iu(e, t));
		},
		lte(e, t) {
			return this.check(Au(e, t));
		},
		max(e, t) {
			return this.check(Au(e, t));
		},
		int(e) {
			return this.check(Dd(e));
		},
		safe(e) {
			return this.check(Dd(e));
		},
		positive(e) {
			return this.check(xu(0, e));
		},
		nonnegative(e) {
			return this.check(Nu(0, e));
		},
		negative(e) {
			return this.check(Iu(0, e));
		},
		nonpositive(e) {
			return this.check(Au(0, e));
		},
		multipleOf(e, t) {
			return this.check(Tu(e, t));
		},
		step(e, t) {
			return this.check(Tu(e, t));
		},
		finite() {
			return this;
		}
	});
	const n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function $d(e) {
	return function(e, t) {
		return new Ed({
			type: "number",
			checks: [],
			...Jo(t)
		});
	}(0, e);
}
const Cd = xo("ZodNumberFormat", (e, t) => {
	Bc.init(e, t), Ed.init(e, t);
});
function Dd(e) {
	return function(e, t) {
		return new Cd({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...Jo(t)
		});
	}(0, e);
}
const Pd = xo("ZodBoolean", (e, t) => {
	Gc.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.type = "boolean";
	})(0, 0, t);
});
function Fd(e) {
	return function(e, t) {
		return new Pd({
			type: "boolean",
			...Jo(t)
		});
	}(0, e);
}
const Od = xo("ZodUnknown", (e, t) => {
	Lc.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (e, t, n) => {};
});
function jd() {
	return new Od({ type: "unknown" });
}
const Bd = xo("ZodNever", (e, t) => {
	Uc.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.not = {};
	})(0, 0, t);
});
const Gd = xo("ZodArray", (e, t) => {
	Zc.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, s = e._zod.def, { minimum: r, maximum: o } = e._zod.bag;
		"number" == typeof r && (i.minItems = r), "number" == typeof o && (i.maxItems = o), i.type = "array", i.items = Du(s.element, t, {
			...a,
			path: [...a.path, "items"]
		});
	})(e, t, n, a), e.element = t.element, od(e, "ZodArray", {
		min(e, t) {
			return this.check(zu(e, t));
		},
		nonempty(e) {
			return this.check(zu(1, e));
		},
		max(e, t) {
			return this.check(Mu(e, t));
		},
		length(e, t) {
			return this.check(Ru(e, t));
		},
		unwrap() {
			return this.element;
		}
	});
});
function Ld(e, t) {
	return function(e, t, n) {
		return new Gd({
			type: "array",
			element: t,
			...Jo(n)
		});
	}(0, e, t);
}
const Ud = xo("ZodObject", (e, t) => {
	Kc.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, s = e._zod.def;
		i.type = "object", i.properties = {};
		const r = s.shape;
		for (const c in r) i.properties[c] = Du(r[c], t, {
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
		l.size > 0 && (i.required = Array.from(l)), "never" === s.catchall?._zod.def.type ? i.additionalProperties = !1 : s.catchall ? s.catchall && (i.additionalProperties = Du(s.catchall, t, {
			...a,
			path: [...a.path, "additionalProperties"]
		})) : "output" === t.io && (i.additionalProperties = !1);
	})(e, t, n, a), Fo(e, "shape", () => t.shape), od(e, "ZodObject", {
		keyof() {
			return Yd(Object.keys(this._zod.def.shape));
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
				catchall: jd()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: jd()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: function(e, t) {
					return new Bd({
						type: "never",
						...Jo(t)
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
				if (!Ho(t)) throw new Error("Invalid input to extend: expected a plain object");
				const n = e._zod.def.checks;
				if (n && n.length > 0) {
					const n = e._zod.def.shape;
					for (const e in t) if (void 0 !== Object.getOwnPropertyDescriptor(n, e)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
				}
				return Wo(e, jo(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return Oo(this, "shape", n), n;
				} }));
			}(this, e);
		},
		safeExtend(e) {
			return function(e, t) {
				if (!Ho(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
				return Wo(e, jo(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return Oo(this, "shape", n), n;
				} }));
			}(this, e);
		},
		merge(e) {
			return function(e, t) {
				if (e._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
				return Wo(e, jo(e._zod.def, {
					get shape() {
						const n = {
							...e._zod.def.shape,
							...t._zod.def.shape
						};
						return Oo(this, "shape", n), n;
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
				return Wo(e, jo(e._zod.def, {
					get shape() {
						const e = {};
						for (const a in t) {
							if (!(a in n.shape)) throw new Error(`Unrecognized key: "${a}"`);
							t[a] && (e[a] = n.shape[a]);
						}
						return Oo(this, "shape", e), e;
					},
					checks: []
				}));
			}(this, e);
		},
		omit(e) {
			return function(e, t) {
				const n = e._zod.def, a = n.checks;
				if (a && a.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
				return Wo(e, jo(e._zod.def, {
					get shape() {
						const a = { ...e._zod.def.shape };
						for (const e in t) {
							if (!(e in n.shape)) throw new Error(`Unrecognized key: "${e}"`);
							t[e] && delete a[e];
						}
						return Oo(this, "shape", a), a;
					},
					checks: []
				}));
			}(this, e);
		},
		partial(...e) {
			return function(e, t, n) {
				const a = t._zod.def.checks;
				if (a && a.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
				return Wo(t, jo(t._zod.def, {
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
						return Oo(this, "shape", i), i;
					},
					checks: []
				}));
			}(Qd, this, e[0]);
		},
		required(...e) {
			return t = rp, n = this, a = e[0], Wo(n, jo(n._zod.def, { get shape() {
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
				return Oo(this, "shape", i), i;
			} }));
			var t, n, a;
		}
	});
});
function Hd(e, t) {
	const n = {
		type: "object",
		shape: e ?? {},
		...Jo(t)
	};
	return new Ud(n);
}
const Zd = xo("ZodUnion", (e, t) => {
	Xc.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = !1 === i.inclusive, r = i.options.map((e, n) => Du(e, t, {
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
function qd(e, t) {
	return new Zd({
		type: "union",
		options: e,
		...Jo(t)
	});
}
const Vd = xo("ZodIntersection", (e, t) => {
	Qc.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = Du(i.left, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				0
			]
		}), r = Du(i.right, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				1
			]
		}), o = (e) => "allOf" in e && 1 === Object.keys(e).length;
		n.allOf = [...o(s) ? s.allOf : [s], ...o(r) ? r.allOf : [r]];
	})(e, t, n, a);
}), Wd = xo("ZodRecord", (e, t) => {
	nu.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, s = e._zod.def;
		i.type = "object";
		const r = s.keyType, o = r._zod.bag?.patterns;
		if ("loose" === s.mode && o && o.size > 0) {
			const e = Du(s.valueType, t, {
				...a,
				path: [
					...a.path,
					"patternProperties",
					"*"
				]
			});
			i.patternProperties = {};
			for (const t of o) i.patternProperties[t.source] = e;
		} else "draft-07" !== t.target && "draft-2020-12" !== t.target || (i.propertyNames = Du(s.keyType, t, {
			...a,
			path: [...a.path, "propertyNames"]
		})), i.additionalProperties = Du(s.valueType, t, {
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
function Jd(e, t, n) {
	return t && t._zod ? new Wd({
		type: "record",
		keyType: e,
		valueType: t,
		...Jo(n)
	}) : new Wd({
		type: "record",
		keyType: dd(),
		valueType: e,
		...Jo(t)
	});
}
const Kd = xo("ZodEnum", (e, t) => {
	au.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = Ro(e._zod.def.entries);
		a.every((e) => "number" == typeof e) && (n.type = "number"), a.every((e) => "string" == typeof e) && (n.type = "string"), n.enum = a;
	})(e, 0, n), e.enum = t.entries, e.options = Object.values(t.entries);
	const n = new Set(Object.keys(t.entries));
	e.extract = (e, a) => {
		const i = {};
		for (const s of e) {
			if (!n.has(s)) throw new Error(`Key ${s} not found in enum`);
			i[s] = t.entries[s];
		}
		return new Kd({
			...t,
			checks: [],
			...Jo(a),
			entries: i
		});
	}, e.exclude = (e, a) => {
		const i = { ...t.entries };
		for (const t of e) {
			if (!n.has(t)) throw new Error(`Key ${t} not found in enum`);
			delete i[t];
		}
		return new Kd({
			...t,
			checks: [],
			...Jo(a),
			entries: i
		});
	};
});
function Yd(e, t) {
	const n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new Kd({
		type: "enum",
		entries: n,
		...Jo(t)
	});
}
const Xd = xo("ZodTransform", (e, t) => {
	iu.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
	})(0, e), e._zod.parse = (n, a) => {
		if ("backward" === a.direction) throw new To(e.constructor.name);
		n.addIssue = (a) => {
			if ("string" == typeof a) n.issues.push(al(a, n.value, t));
			else {
				const t = a;
				t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), t.input ?? (t.input = n.value), t.inst ?? (t.inst = e), n.issues.push(al(t));
			}
		};
		const i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n.fallback = !0, n)) : (n.value = i, n.fallback = !0, n);
	};
}), Qd = xo("ZodOptional", (e, t) => {
	ru.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => Gu(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
});
function ep(e) {
	return new Qd({
		type: "optional",
		innerType: e
	});
}
const tp = xo("ZodExactOptional", (e, t) => {
	ou.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => Gu(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), np = xo("ZodNullable", (e, t) => {
	lu.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = Du(i.innerType, t, a), r = t.seen.get(e);
		"openapi-3.0" === t.target ? (r.ref = i.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
});
function ap(e) {
	return new np({
		type: "nullable",
		innerType: e
	});
}
const ip = xo("ZodDefault", (e, t) => {
	cu.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Du(i.innerType, t, a), t.seen.get(e).ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
}), sp = xo("ZodPrefault", (e, t) => {
	du.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Du(i.innerType, t, a), t.seen.get(e).ref = i.innerType, "input" === t.io && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
}), rp = xo("ZodNonOptional", (e, t) => {
	pu.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Du(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
	})(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), op = xo("ZodCatch", (e, t) => {
	mu.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		let s;
		Du(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
		try {
			s = i.catchValue(void 0);
		} catch {
			throw new Error("Dynamic catch values are not supported in JSON Schema");
		}
		n.default = s;
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
}), lp = xo("ZodPipe", (e, t) => {
	hu.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = i.in._zod.traits.has("$ZodTransform"), r = "input" === t.io ? s ? i.out : i.in : i.out;
		Du(r, t, a), t.seen.get(e).ref = r;
	})(e, t, 0, a), e.in = t.in, e.out = t.out;
});
function cp(e, t) {
	return new lp({
		type: "pipe",
		in: e,
		out: t
	});
}
const up = xo("ZodReadonly", (e, t) => {
	yu.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Du(i.innerType, t, a), t.seen.get(e).ref = i.innerType, n.readOnly = !0;
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
}), dp = xo("ZodCustom", (e, t) => {
	_u.init(e, t), ld.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
	})(0, e);
}), pp = Yd((fp = l, Object.values(fp)));
var fp;
Hd({
	password: dd(),
	username: dd().max(100, "Username must be 100 characters or fewer")
});
const mp = Hd({
	onset_timestamp: $d().nullable().optional(),
	offset_timestamp: $d().nullable().optional(),
	marker_index: $d().int().default(1),
	marker_type: pp.default(l.MAIN_SLEEP)
}), hp = Hd({
	start_timestamp: $d().nullable().optional(),
	end_timestamp: $d().nullable().optional(),
	marker_index: $d().int().default(1)
}), gp = (Hd({
	sleep_markers: Ld(mp).optional().default([]),
	nonwear_markers: Ld(hp).optional().default([]),
	explicit_no_nonwear: Fd().optional().default(!1),
	is_invalid_night: Fd().optional().default(!1),
	needs_consensus: Fd().optional().default(!1),
	notes: dd().nullable().optional(),
	sleep_period_detection_config: Jd(dd(), jd()).nullable().optional()
}), Hd({
	timestamps: Ld($d()).optional().default([]),
	axis_x: Ld($d()).optional().default([]),
	axis_y: Ld($d()).optional().default([]),
	axis_z: Ld($d()).optional().default([]),
	vector_magnitude: Ld($d()).optional().default([]),
	temperature: Ld($d()).optional().default([]),
	lux: Ld($d()).optional().default([]),
	melanopic_lux: Ld($d()).optional().default([]),
	ggir_timestamps: Ld($d()).optional().default([]),
	ggir_enmo: Ld($d()).optional().default([]),
	ggir_anglez: Ld($d()).optional().default([]),
	ggir_sib: Ld($d()).optional().default([]),
	timestamps_30s: Ld($d()).optional().default([]),
	axis_x_30s: Ld($d()).optional().default([]),
	axis_y_30s: Ld($d()).optional().default([]),
	axis_z_30s: Ld($d()).optional().default([]),
	vector_magnitude_30s: Ld($d()).optional().default([])
})), yp = Hd({
	resolution_id: dd(),
	epoch_length_seconds: $d().int().positive(),
	category: dd(),
	source_type: dd().nullable().optional(),
	derived_from_resolution_id: dd().nullable().optional(),
	aggregation_method: dd().nullable().optional(),
	data: gp,
	algorithm_results: Ld($d()).nullable().optional(),
	nonwear_results: Ld($d()).nullable().optional()
}), wp = (Hd({
	data: gp.optional(),
	epoch_resolutions: Ld(yp).optional().default([]),
	timestamps: Ld($d()).optional(),
	axis_x: Ld($d()).optional(),
	axis_y: Ld($d()).optional(),
	axis_z: Ld($d()).optional(),
	vector_magnitude: Ld($d()).optional(),
	temperature: Ld($d()).optional(),
	algorithm_results: Ld($d()).nullable().optional(),
	nonwear_results: Ld($d()).nullable().optional(),
	nonwear_results_choi_2011: Ld($d()).nullable().optional(),
	event_markers: Ld(qd([$d(), Fd()])).optional().default([]),
	event_marker_timestamps: Ld($d()).optional().default([]),
	view_start: $d().nullable().optional(),
	view_end: $d().nullable().optional(),
	sensor_nonwear_periods: Ld(Hd({
		start_timestamp: $d(),
		end_timestamp: $d()
	})).optional().default([]),
	device_nonwear_source: Yd(p).nullable().optional(),
	algorithmic_nonwear_masks: Jd(dd(), Ld($d())).optional()
}), i.diary_tolerance_minutes, i.nap_min_consecutive_epochs, i.epoch_length_seconds, () => $.waitFor(import("./cube-variants-BdY4X0zD.js"))), _p = {
	warmVariantsForDay: async (...e) => (await wp()).scoreCountBasedHasibVariantsForDay(...e),
	withRecordingWakeThreshold: async (...e) => (await wp()).withRecordingWakeThreshold(...e)
};
function vp(e, t, n) {
	return null != e[n] && e.covers(t);
}
function bp(e, t, n) {
	return e.find((e) => vp(e, t, n));
}
const Sp = [
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
function kp(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function Ip(e) {
	return JSON.stringify(e);
}
function Ap(e) {
	const t = kp(e.config), n = kp(t?.signals) ?? t;
	return {
		...n ? { config: n } : {},
		days: e.days
	};
}
function xp(e) {
	return JSON.stringify(Ap(e));
}
function Np(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function Tp(e) {
	const t = Np(e), n = t?.analysis_date, a = Np(t?.intrinsic), i = a?.state;
	if (!t || "string" != typeof n || 0 === n.length || !a || "string" != typeof i || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(i)) return null;
	const s = a.score, r = a.verdict, o = a.infinite_reason, l = {}, c = [], u = t.per_guider;
	if (Array.isArray(u)) for (const h of u) {
		const e = Np(h);
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
	const d = Np(a.features), p = d && Array.isArray(d.feature_values) ? d : null, f = Np(a.legacy_complexity_features) ?? (null === p ? d : null) ?? {}, m = t.computed_at;
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
const Mp = /^[0-9a-f]{64}$/;
var zp = class extends Error {
	constructor(e = !1) {
		super(e ? "Stored complexity evidence failed integrity verification." : "Complexity evidence failed integrity verification."), this.name = "ComplexityEvidenceIntegrityError";
	}
}, Rp = class extends Error {
	constructor() {
		super("Complexity evidence diverged for an existing generation."), this.name = "ComplexityEvidenceDivergenceError";
	}
}, Ep = class extends Error {
	constructor() {
		super("Complexity evidence is older than the retained generation window."), this.name = "ComplexityEvidenceRetentionError";
	}
};
function $p(e = !1) {
	throw new zp(e);
}
function Cp(e) {
	"string" == typeof e && Mp.test(e) || $p();
}
function Dp(e) {
	"string" == typeof e && 0 !== e.length && Number.isFinite(Date.parse(e)) || $p();
}
function Pp(e) {
	if (null === e) return "null";
	switch (typeof e) {
		case "string":
		case "boolean": return JSON.stringify(e);
		case "number": return Number.isFinite(e) || $p(), JSON.stringify(Object.is(e, -0) ? 0 : e);
		case "object": {
			if (Array.isArray(e)) {
				const t = [];
				for (let n = 0; n < e.length; n += 1) n in e || $p(), t.push(Pp(e[n]));
				return `[${t.join(",")}]`;
			}
			const t = Object.getPrototypeOf(e);
			t !== Object.prototype && null !== t && $p(), Object.getOwnPropertySymbols(e).length > 0 && $p();
			const n = e, a = [];
			for (const e of Object.keys(n).sort()) {
				const t = Object.getOwnPropertyDescriptor(n, e);
				t && "value" in t && t.enumerable || $p(), a.push(`${JSON.stringify(e)}:${Pp(t.value)}`);
			}
			return `{${a.join(",")}}`;
		}
		default: return $p();
	}
}
function Fp(e) {
	const t = Pp(e), n = JSON.parse(t);
	return (null == n || "object" != typeof n || Array.isArray(n)) && $p(), n;
}
async function Op(e) {
	return ae(Pp(e));
}
function jp(e) {
	const t = e;
	for (const a of [
		"contractVersion",
		"crateVersion",
		"target",
		"semanticProfile",
		"profileProofStatus",
		"temporalBasis"
	]) "string" == typeof t[a] && "" !== t[a] || $p();
	null === t.sourceRevision || "string" == typeof t.sourceRevision && "" !== t.sourceRevision || $p(), Cp(t.artifactSha256);
	const n = t.compiledFeatures;
	Array.isArray(n) && n.every((e) => "string" == typeof e && e.length > 0) || $p(), Pp(e);
}
async function Bp(e, t) {
	"string" != typeof e && $p(), void 0 !== t && Cp(t);
	let n = 0;
	for (; n < e.length && /\s/.test(e[n]);) n += 1;
	let a = e.length - 1;
	for (; a >= n && /\s/.test(e[a]);) a -= 1;
	"{" === e[n] && "}" === e[a] || $p();
	const i = await ae(e);
	return void 0 !== t && t !== i && $p(), i;
}
function Gp(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != typeof t || null === e || null === t) return !1;
	if (Array.isArray(e) || Array.isArray(t)) return !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((e, n) => Gp(e, t[n]));
	if ("object" != typeof e || "object" != typeof t) return !1;
	const n = Object.keys(e).sort(), a = Object.keys(t).sort();
	if (n.length !== a.length || n.some((e, t) => e !== a[t])) return !1;
	const i = e, s = t;
	return n.every((e) => Gp(i[e], s[e]));
}
function Lp(e) {
	try {
		const t = JSON.parse(e);
		return (null === t || "object" != typeof t || Array.isArray(t)) && $p(), t;
	} catch {
		return $p();
	}
}
function Up(e, t) {
	const n = Object.keys(e).sort(), a = [...t].sort();
	return n.length === a.length && n.every((e, t) => e === a[t]);
}
function Hp(e) {
	return "number" == typeof e && Number.isFinite(e);
}
function Zp(e) {
	return null === e || "string" == typeof e && e.length > 0;
}
function qp(e) {
	return Array.isArray(e) && e.every(Hp);
}
function Vp(e) {
	return Array.isArray(e) && e.every((e) => Number.isInteger(e) && (0 === e || 1 === e));
}
function Wp(e, t) {
	return 0 === e.length || e.length === t;
}
function Jp(e) {
	Array.isArray(e) || $p();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && $p();
		const e = t, n = e.start_ts, a = e.end_ts;
		Up(e, ["start_ts", "end_ts"]) && Hp(n) && Hp(a) && !(a < n) || $p();
	}
}
function Kp(e, t) {
	Array.isArray(e) && e.length === t || $p();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && $p();
		const e = n;
		Up(e, ["onset_time", "offset_time"]) && "string" == typeof e.onset_time && 0 !== e.onset_time.length && Zp(e.offset_time) || $p();
	}
}
function Yp(e) {
	Array.isArray(e) || $p();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && $p();
		const e = t;
		Up(e, ["start_time", "end_time"]) && "string" == typeof e.start_time && 0 !== e.start_time.length && "string" == typeof e.end_time && 0 !== e.end_time.length || $p();
	}
}
function Xp(e) {
	Array.isArray(e) || $p();
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && $p();
		const e = n, a = e.guider, i = e.detector, s = e.onset_ts, r = e.offset_ts;
		(!Up(e, [
			"guider",
			"detector",
			"onset_ts",
			"offset_ts"
		]) || "string" != typeof a || 0 === a.length || t.has(a) || !Zp(i) || null !== s && !Hp(s) || null !== r && !Hp(r) || null === s && null === r) && $p(), t.set(a, {
			detector: i,
			onset: s,
			offset: r
		});
	}
	return t;
}
function Qp(e) {
	if (null === e) return null;
	Array.isArray(e) && 2 === e.length || $p();
	const t = e[0], n = e[1];
	return (!Hp(t) || !Hp(n) || n <= t) && $p(), [t, n];
}
function ef(e, t) {
	const n = Lp(e), a = void 0 === n.config ? ["days"] : ["config", "days"], i = n.days;
	Up(n, a) && Array.isArray(i) || $p(), void 0 === n.config || null !== n.config && "object" == typeof n.config && !Array.isArray(n.config) || $p();
	const s = /* @__PURE__ */ new Set();
	for (const o of i) {
		(null === o || "object" != typeof o || Array.isArray(o)) && $p();
		const e = o;
		Up(e, Sp) || $p();
		const t = e.analysis_date, n = e.epoch_length_seconds, a = e.timestamps, i = e.activity_counts, r = e.sleep_scores, l = e.choi_nonwear, c = e.diary_nap_count, u = e.anglez, d = e.light, p = e.temperature, f = e.heart_rate, m = e.detach_nonwear, h = e.is_weekend, g = e.calibration_error, y = e.imputed_fraction;
		!("string" != typeof t || 0 === t.length || s.has(t) || "number" != typeof n || !Number.isInteger(n) || n <= 0) && qp(a) && 0 !== a.length && qp(i) && i.length === a.length && Vp(r) && r.length === a.length && Vp(l) && Wp(l, a.length) && Number.isInteger(c) && !(c < 0) && Zp(e.diary_onset_time) && Zp(e.diary_wake_time) && Zp(e.diary_in_bed_time) && Zp(e.diary_out_bed_time) && (null === h || "boolean" == typeof h) && qp(u) && Wp(u, a.length) && qp(d) && Wp(d, a.length) && qp(p) && Wp(p, a.length) && qp(f) && Wp(f, a.length) && Vp(m) && Wp(m, a.length) && (null === g || Hp(g)) && (null === y || !(!Hp(y) || y < 0 || y > 1)) || $p(), Jp(e.sensor_nonwear), Kp(e.diary_naps, c), Yp(e.diary_nonwear);
		const w = Xp(e.guider_targets), v = Qp(e.hdcza_window), b = w.get(_.HDCZA);
		(null === v && void 0 !== b || null !== v && (void 0 === b || null !== b.detector || b.onset !== v[0] || b.offset !== v[1])) && $p(), s.add(t);
	}
	const r = n;
	return Gp(Lp(t), Ap(r)) || $p(), {
		difficulty: r,
		dates: s
	};
}
function tf(e, t, n, a) {
	Up(t, ["config", "days"]) || $p(), Gp(t.config, e.difficulty.config ?? null) || $p();
	const i = t.days;
	Array.isArray(i) && i.length === e.difficulty.days.length || $p();
	for (let o = 0; o < i.length; o += 1) {
		const t = i[o], n = e.difficulty.days[o];
		(null === t || "object" != typeof t || Array.isArray(t) || null === n || "object" != typeof n || Array.isArray(n)) && $p();
		const a = t, s = n;
		Up(a, [
			"analysis_date",
			"epoch_length_seconds",
			"timestamps"
		]) && a.analysis_date === s.analysis_date && a.epoch_length_seconds === s.epoch_length_seconds && Gp(a.timestamps, s.timestamps) || $p();
	}
	const s = Object.keys(n);
	(s.length !== e.dates.size || s.some((t) => !e.dates.has(t))) && $p();
	const r = new Map(e.difficulty.days.map((e) => [e.analysis_date, e]));
	for (const [o, l] of Object.entries(n)) {
		(null === l || "object" != typeof l || Array.isArray(l)) && $p();
		const e = l, t = Tp(e.canonicalResult);
		null !== t && t.canonicalResult.analysis_date === o && Gp(e, t) || $p();
	}
	if (null !== a) {
		const t = Object.keys(a);
		(t.length !== e.dates.size || t.some((t) => !e.dates.has(t))) && $p();
		for (const [e, n] of Object.entries(a)) {
			(null === n || "object" != typeof n || Array.isArray(n)) && $p();
			const t = n, a = r.get(e);
			t.analysis_date === e && Number.isInteger(t.epoch_length_seconds) && t.epoch_length_seconds === a?.epoch_length_seconds || $p();
		}
	}
}
async function nf(e) {
	return Op(function(e) {
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
async function af(e) {
	try {
		jp(e.runtimeIdentity), null !== e.sourceContentHash && Cp(e.sourceContentHash);
		const t = Fp(e.runtimeIdentity), n = await Bp(e.difficultyRequestWireJson, e.difficultyRequestSha256), a = await Bp(e.signalsRequestWireJson, e.signalsRequestSha256);
		ef(e.difficultyRequestWireJson, e.signalsRequestWireJson);
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
			generationKey: await nf(i)
		};
	} catch (t) {
		if (t instanceof zp) throw t;
		return $p();
	}
}
async function sf(e) {
	return Op(function(e) {
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
function rf(e, t) {
	void 0 !== t && (null !== t && Cp(t), e !== t && $p());
}
async function of(e) {
	(!Number.isInteger(e.fileId) || e.fileId <= 0) && $p(), void 0 !== e.id && (!Number.isInteger(e.id) || e.id <= 0) && $p();
	for (const o of [
		e.generationKey,
		e.difficultyRequestSha256,
		e.signalsRequestSha256,
		e.projectionSha256,
		e.difficultyResultSha256,
		e.recordSha256
	]) Cp(o);
	null !== e.signalsResultSha256 && Cp(e.signalsResultSha256), null !== e.sourceContentHash && Cp(e.sourceContentHash), "sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || $p(), jp(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || $p(), await Bp(e.difficultyRequestWireJson, e.difficultyRequestSha256), await Bp(e.signalsRequestWireJson, e.signalsRequestSha256);
	const t = ef(e.difficultyRequestWireJson, e.signalsRequestWireJson);
	Dp(e.createdAt), Dp(e.updatedAt), Date.parse(e.updatedAt) < Date.parse(e.createdAt) && $p(), null === e.signalsByDate != (null === e.signalsResultSha256) && $p();
	const n = Fp(e.projectionInput), a = Fp(e.difficultyByDate), i = null === e.signalsByDate ? null : Fp(e.signalsByDate);
	tf(t, n, a, i);
	const s = {
		evidenceContractId: e.evidenceContractId,
		difficultyMethodId: e.difficultyMethodId,
		signalsMethodId: e.signalsMethodId,
		requestContractId: e.requestContractId,
		sourceContentHash: e.sourceContentHash,
		runtimeIdentity: Fp(e.runtimeIdentity),
		difficultyRequestWireJson: e.difficultyRequestWireJson,
		signalsRequestWireJson: e.signalsRequestWireJson,
		difficultyRequestSha256: e.difficultyRequestSha256,
		signalsRequestSha256: e.signalsRequestSha256
	};
	await nf(s) !== e.generationKey && $p(), await Op(n) !== e.projectionSha256 && $p(), await Op(a) !== e.difficultyResultSha256 && $p(), null !== i && await Op(i) !== e.signalsResultSha256 && $p();
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
	return await sf(r) !== e.recordSha256 && $p(), r;
}
async function lf(e) {
	try {
		return await of(e);
	} catch {
		throw new zp(!0);
	}
}
function cf(e, t, n = !1) {
	if (!t) throw new zp(n);
	if (null !== e.sourceContentHash && t.sourceContentHash !== e.sourceContentHash) throw new zp(n);
}
async function uf(e, t, n) {
	await aa({
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
async function df(e, t, n = X()) {
	const [a, i] = await n.transaction("r", [n.files, n.complexityEvidence], async () => Promise.all([n.complexityEvidence.where("[fileId+generationKey]").equals([e, t]).first(), n.files.get(e)]));
	if (!a) return;
	const s = await lf(a);
	return cf(s, i, !0), s;
}
function pf(e, t, n, a) {
	return null === a ? null : {
		...a,
		binding: a?.binding ?? zt.captureWorkspaceBinding(e, t, n)
	};
}
async function ff(e, t = h()) {
	return 0 === e.length ? [] : t.consensusDisagreements(e.map(({ usersForDate: e, kind: t }) => function(e, t) {
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
function mf(e) {
	const t = E().scoring(), n = [si(_n(t, e).nonwearDetectorsCounts, t.showChoiNonwear), si(Mt(t.nonwearDetectorsGgir, e), t.showChoiNonwear)];
	return n.filter((e, t) => n.findIndex((t) => Wa(t) === Wa(e)) === t);
}
function hf(e, t) {
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
function gf(e, t) {
	return [.../* @__PURE__ */ new Set([...e.availableDates, ...t])].sort();
}
function yf(e, t) {
	return e ? {
		detectors: [...e.detectors],
		any: Uint8Array.from(e.mask).buffer,
		weight: e.weight ? Float64Array.from(e.weight).buffer : null,
		grid: e.grid === t.timestamps ? "counts" : "ggir"
	} : null;
}
async function wf(e, { file: t, sets: n, capsense: a, db: i, signal: s }) {
	const r = n.filter((t) => !(Wa(t) in (e.displayNonwear ?? {})));
	if (0 === r.length) return;
	const o = J(s), l = await Ma(e, at, "navigation facts", Sa(), o);
	if (!l) return;
	Rt(l.timestamps, bn(e, t));
	const c = Ja(t.sourceType, t.sourceProfileId), u = {};
	for (const [m, h] of Object.entries(l.nonwearMasksByDetector)) 0 === h.length || gi(m) || (u[m] = h);
	const d = {
		algorithmicNonwearMasks: u,
		timestamps: l.timestamps,
		ggirTimestamps: l.ggirTimestamps,
		sensorNonwearPeriods: "detach_mask" === qa(c) && l.detachNonwear ? hf(l.detachNonwear, l.timestamps) : a,
		deviceNonwearSource: c
	}, p = { ...e.displayNonwear }, f = await Promise.all(r.map((e) => (s?.throwIfAborted(), ri(d, e, o))));
	for (const [m, h] of r.entries()) p[Wa(h)] = yf(f[m], d);
	await Te(e.fileId, e.date, p, {
		seriesRevision: t.seriesRevision ?? 0,
		nonwearBandGeneration: t.nonwearBandGeneration ?? 0
	}, i, s);
}
const _f = /* @__PURE__ */ new WeakMap();
function vf(e, t, n) {
	let a = _f.get(t);
	a || _f.set(t, a = /* @__PURE__ */ new Map());
	const i = a.get(e);
	if (i) return S(i, n);
	const s = async function(e, t, n) {
		n?.throwIfAborted();
		const a = await Ve(e, t);
		if (!a || "incomplete" === a.ingestState) return;
		const i = await mt(e, t);
		let s = a.navigationFacts;
		(function(e, t) {
			const n = e?.navigationFacts;
			if (!e || 1 !== n?.version) return !1;
			const a = gf(e, t);
			return n.dates.length === a.length && n.dates.every((e, t) => e === a[t]);
		})(a, i) || (s = await async function(e, t, n, a) {
			const i = J(a), s = {}, r = async (e) => {
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
			const c = await ai(n), u = await Va(e, c, a), d = [...new Set([u.zone, u.reason ? c : null].filter((e) => Boolean(e)))], p = {};
			return await ke((t) => {
				for (const n of d) {
					const a = {};
					for (const i of e.availableDates) {
						const e = t.dstTransitionOnNight(n, i);
						e && (a[i] = e);
					}
					p[n] = a;
				}
			}, new Ut(i)), {
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
		}(a, gf(a, i), t, n), n?.throwIfAborted(), await t.files.update(e, { navigationFacts: s }));
		const r = mf(a), o = r.map(Wa), l = a.seriesRevision ?? 0;
		if (s?.bands?.seriesRevision === l && o.every((e) => s.bands.keys.includes(e))) return;
		const c = "sensor_rows" === qa(Ja(a.sourceType, a.sourceProfileId)) ? (await Oe(e, t)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : [];
		for (const u of i) {
			n?.throwIfAborted();
			const i = await xt(e, u, t);
			i && await wf(i, {
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
function bf(e, t) {
	for (const n of e) {
		const e = n.epochResolutions?.find((e) => e.category === t && !e.derivedFromResolutionId);
		if (e) return e.epochLengthSeconds;
	}
	return null;
}
function Sf(e, t) {
	const n = "counts" === t ? e.timestamps : e.ggirTimestamps;
	return n ? Math.floor(n.byteLength / Float64Array.BYTES_PER_ELEMENT) : 0;
}
function kf(e) {
	return "number" != typeof e ? String(e) : (/* @__PURE__ */ new Date(1e3 * e)).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: !1,
		timeZone: "UTC"
	});
}
function If(e) {
	if ("object" != typeof e || null === e) return String(e).slice(0, 60);
	const t = e;
	return "onsetTimestamp" in t && "offsetTimestamp" in t ? `${kf(t.onsetTimestamp)}–${kf(t.offsetTimestamp)}` : "startTimestamp" in t && "endTimestamp" in t ? `${kf(t.startTimestamp)}–${kf(t.endTimestamp)}` : JSON.stringify(t).slice(0, 60);
}
function Af(e, t = "(unset)") {
	if (void 0 === e) return t;
	if (null === e) return t;
	const n = "string" == typeof e ? e : JSON.stringify(e);
	return n.length > 48 ? `${n.slice(0, 45)}…` : n;
}
function xf(e) {
	const t = e.rowCount, n = e.dayCount, a = [`${Af(e.subject, "export")} (${Af(e.format, "?")})`, Af(e.filename, "")].filter((e) => "" !== e), i = ["number" == typeof t ? `${t} rows` : null, "number" == typeof n ? `${n} day${1 === n ? "" : "s"}` : null].filter((e) => null !== e);
	return i.length > 0 ? `${a.join(" · ")} — ${i.join(", ")}` : a.join(" · ");
}
function Nf(e, t, n, a) {
	const i = n?.exportId;
	return "export_started" === t && "string" == typeof i && a.has(i) ? "" === e ? "outcome unknown" : `${e} · outcome unknown` : e;
}
function Tf(e, t) {
	const n = M({
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
			return "onsetTimestamp" in a ? `${e} #${t}${n}: ${kf(a.onsetTimestamp)}–${kf(a.offsetTimestamp)}` : "startTimestamp" in a ? `${e} #${t}: ${kf(a.startTimestamp)}–${kf(a.endTimestamp)}` : `${e} #${t}${n}`;
		}
		case "sleep_period_split": return `sleep #${a.periodIndex ?? "?"} split at ${kf(a.at)}`;
		case "sleep_period_merged": return `sleep #${a.periodIndex ?? "?"} merged ${a.direction ?? "?"}`;
		case "marker_adjusted": {
			const e = a.updates ?? {}, t = a.category ?? "?", n = a.periodIndex ?? "?", i = [];
			return void 0 !== e.onsetTimestamp && i.push(`onset → ${kf(e.onsetTimestamp)}`), void 0 !== e.offsetTimestamp && i.push(`offset → ${kf(e.offsetTimestamp)}`), void 0 !== e.startTimestamp && i.push(`start → ${kf(e.startTimestamp)}`), void 0 !== e.endTimestamp && i.push(`end → ${kf(e.endTimestamp)}`), void 0 !== e.markerType && i.push(`type → ${e.markerType}`), `${t} #${n}: ${i.join(", ")}`;
		}
		case "marker_moved": {
			const e = a.before, t = a.after;
			if (!e || !t) return "drag completed";
			const n = Array.isArray(e.sleepMarkers) ? e.sleepMarkers : [], i = Array.isArray(t.sleepMarkers) ? t.sleepMarkers : [];
			for (let a = 0; a < Math.max(n.length, i.length); a++) {
				const e = n[a], t = i[a];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `sleep #${a}: ${If(e)} ⇒ ${If(t)}`;
			}
			const s = Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : [], r = Array.isArray(t.nonwearMarkers) ? t.nonwearMarkers : [];
			for (let a = 0; a < Math.max(s.length, r.length); a++) {
				const e = s[a], t = r[a];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `nonwear #${a}: ${If(e)} ⇒ ${If(t)}`;
			}
			return "drag completed (no visible change)";
		}
		case "marker_deleted": {
			const e = a.category ?? "?", t = a.periodIndex ?? "?", n = a.before;
			return n ? `${e} #${t}: was ${If(n)}` : `${e} #${t}`;
		}
		case "actiware_rest_edited": {
			const e = "string" == typeof a.edit ? a.edit : "?";
			return "add" === e ? `rest added: ${If(a.to)}` : "remove" === e ? `rest removed: was ${If(a.from)}` : `rest ${"move" === e ? "moved" : e}: ${If(a.from)} ⇒ ${If(a.to)}`;
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
			const e = Af(a.intent, "mutation"), t = Af(a.guard, "?"), n = a.disposition, i = "refused_by_store" === n ? "refused" : "applied_with_violation" === n ? "applied anyway" : Af(n, "");
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
				const e = Af(a.before, ""), t = Af(a.after, "");
				return "" === e ? `"${t}"` : `"${e}" → "${t}"`;
			}
			return a.text ? `"${String(a.text).slice(0, 60)}"` : a.notes ? `"${String(a.notes).slice(0, 60)}"` : `${a.length ?? "?"} chars`;
		case "settings_changed": return `${Af(a.scope, "?")} · ${Af(a.key, "?")}: ${Af(a.before)} → ${Af(a.after)}`;
		case "settings_reset": {
			const e = a.changed, t = Af(a.scope, "settings");
			if (!Array.isArray(e)) return `${t} reset to defaults`;
			if (0 === e.length) return `${t}: already at defaults`;
			const n = e.slice(0, 4).map((e) => Af(e, "?")).join(", "), i = e.length > 4 ? ", …" : "";
			return `${t}: ${String(e.length)} reset to default (${n}${i})`;
		}
		case "app_version_changed": return `${Af(a.before, "(first run)")} → ${Af(a.after, "?")}`;
		case "system_migration": return `${Af(a.subject, "schema")}: ${Af(a.before, "?")} → ${Af(a.after, "?")}`;
		case "data_exported": return xf(a);
		case "export_started": return `Started: ${xf(a)}`;
		case "export_cancelled": return `${Af(a.filename, "export")} — ${Af(a.reason, "cancelled")}`;
		case "preset_changed": {
			const e = Af(a.family, "preset"), t = Af(a.change, "changed"), n = Af(a.preset, "?"), i = a.before;
			return null == i ? `${e}: ${t} ${n}` : `${e}: ${t} ${n} (was ${Af(i)})`;
		}
		case "markers_synced": {
			const e = a.conflicts, t = a.errorCount;
			let n = `Pushed ${a.pushed ?? 0}, pulled ${a.pulled ?? 0}`;
			return "number" == typeof e && e > 0 && (n += `, ${e} conflict${1 === e ? "" : "s"}`), "number" == typeof t && t > 0 && (n += `, ${t} error${1 === t ? "" : "s"}`), n;
		}
		case "system_recalculation": return `Recalculated ${Af(a.subject, "derived data")}`;
		case "diary_staged": return `Staged ${a.staged ?? 0}, replaced ${a.replaced ?? 0}, skipped ${a.skipped ?? 0}`;
		case "diary_decision_recorded": return `Decided ${Af(a.ruleKind, "a rule")} → ${Af(a.outcome, "(no outcome)")} (${Af(a.scope, "unscoped")}, ${a.nights ?? 0} nights)`;
		case "diary_decision_state_saved": return `Saved decision state "${Af(a.restorePoint, "untitled")}" (${a.decisions ?? 0} decisions)`;
		case "diary_session_saved": {
			const e = Af(a.status, "saved"), t = Af(a.step, "an unknown step"), n = Af(a.sourceSha256Prefix, "an unnamed source");
			return "removed" === e ? `Removed the saved diary session for ${n}` : `Diary session ${n} saved as ${e} on ${t}`;
		}
		case "diary_decision_state_restored": return `Restored decision state "${Af(a.restorePoint, "untitled")}" (${a.reflagged ?? 0} reflagged, ${a.unflagged ?? 0} unflagged, ${a.nights ?? 0} nights)`;
		case "diary_decisions_reset": return `Reset ${a.decisions ?? 0} diary decisions across ${a.nights ?? 0} nights`;
		case "diary_attached": {
			const e = a.entryCount, t = a.matchBasis, n = ["number" == typeof e ? `${e} night${1 === e ? "" : "s"}` : null, "string" == typeof t && "" !== t ? `matched by ${t}` : null].filter((e) => null !== e).join(", ");
			return "" === n ? "Attached diary" : `Attached diary (${n})`;
		}
		case "diary_discarded": {
			const e = a.analysisDate;
			return null == e ? `Discarded ${Af(a.sourceKey, "diary")}` : `Discarded ${Af(a.sourceKey, "diary")} for ${Af(e, "?")}`;
		}
		case "diary_workspace_cleared": {
			const e = (e, t) => {
				const n = Number(a[e] ?? 0);
				return `${String(n)} ${t}${1 === n ? "" : "s"}`;
			};
			return `Cleared workspace diary (${e("staged", "staged night")}, ${e("occurrences", "response")})`;
		}
		case "diary_repaired": {
			const e = a.fields, t = Array.isArray(e) ? e.map((e) => Af(e, "?")).join(", ") : "";
			return "" === t ? `Repaired ${a.applied ?? 0} field${1 === a.applied ? "" : "s"}` : `Repaired ${a.applied ?? 0}: ${t}`;
		}
		case "diary_changed": {
			const e = a.fields, t = Af(a.change, "changed"), n = Array.isArray(e) ? e.map((e) => Af(e, "?")).join(", ") : "";
			return "" === n ? `Diary ${t}` : `Diary ${t}: ${n}`;
		}
		case "workspace_deleted": {
			const e = a.auditRowsDestroyed;
			return `${Af(a.displayName, "workspace")} deleted — ${a.auditRowsTotal ?? 0} audit rows, ${a.auditRowsReplicated ?? 0} replicated, ${e ?? 0} destroyed`;
		}
		case "audit_chain_reanchored": return `Restored ${a.restoredRows ?? 0} rows (restore ${String(a.restoreId ?? "?").slice(0, 8)})`;
		case "workspace_recovered": return `Recovered from backup ${Af(a.backupSha256, "?").slice(0, 8)} — ${Af(a.applied, "0")} changes put back, ${Af(a.skipped, "0")} skipped, ${Af(a.recordingsToReimport, "0")} recordings to import again`;
		case "access_changed": return `${Af(a.subject, "access")} · ${Af(a.scope, "?")}: ${Af(a.before)} → ${Af(a.after)}`;
		case "assignment_changed": {
			const e = a.fileCount, t = a.fileIds, n = "number" == typeof e ? e : Array.isArray(t) ? t.length : 0;
			return `${Af(a.change, "changed")} ${Af(a.subject, "assignment")} · ${Af(a.scope, "?")} (${n} file${1 === n ? "" : "s"})`;
		}
	}
	return Object.entries(a).slice(0, 5).map(([e, t]) => "number" == typeof t && e.toLowerCase().includes("timestamp") ? `${e}: ${kf(t)}` : "string" == typeof t && t.length > 50 ? `${e}: "${t.slice(0, 47)}..."` : Array.isArray(t) ? `${e}: [${t.length} items]` : "object" == typeof t && null !== t ? `${e}: {…}` : `${e}: ${JSON.stringify(t)}`).join(", ");
}
function Mf(e) {
	return JSON.stringify(e.map((e) => ({
		start_timestamp: e.startTimestamp,
		end_timestamp: e.endTimestamp,
		marker_index: e.markerIndex
	})));
}
function zf(e, t) {
	const n = (i = t, "mims_metrics" === (a = e ?? "generic") ? ss(i, s) : "ggir_part5_daysummary" === a ? function(e, t) {
		const n = rs(e, t);
		return e.date_column || e.datetime_column || n.push({
			key: "date_column",
			message: "Map a date/day column for the daily summary table."
		}), n;
	}(i, s) : is(i, s));
	var a, i, s;
	if (0 !== n.length) throw new Error(function(e) {
		return `Column-mapped CSV settings are incomplete: ${e.map((e) => e.message).join(" ")} ${$i}`;
	}(n));
}
function Rf(e) {
	const t = /* @__PURE__ */ new Map();
	for (const a of e) "auto_score" !== a.username || a.algorithm !== A.VAN_HEES_2015 || a.isInvalidNight || t.set(a.date, Kt(t.get(a.date), a));
	const n = /* @__PURE__ */ new Map();
	for (const [a, i] of t) {
		const e = i.sleepMarkers.filter((e) => e.markerType === l.MAIN_SLEEP);
		if (1 !== e.length) continue;
		const t = e[0], s = t?.onsetTimestamp, r = t?.offsetTimestamp;
		"number" == typeof s && Number.isFinite(s) && "number" == typeof r && Number.isFinite(r) && r > s && n.set(a, [s, r]);
	}
	return n;
}
async function Ef(e, t) {
	const n = t.dailyGgirSummaries;
	if (!n) return /* @__PURE__ */ new Map();
	const a = await n.where("fileId").equals(e).toArray();
	return new Map(a.map((e) => [e.analysisDate, e]));
}
function $f(e) {
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
function Cf(e, t, n, a) {
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
const Df = "wasm-parallel";
function Pf(e) {
	const t = e.compiledFeatures;
	return {
		...e,
		compiledFeatures: t.includes(Df) ? t.filter((e) => e !== Df) : [...t, Df]
	};
}
function Ff(e, t) {
	const n = e.compiledFeatures.filter((e) => e !== Df), a = t.compiledFeatures.filter((e) => e !== Df);
	return e.contractVersion === t.contractVersion && e.crateVersion === t.crateVersion && e.sourceRevision === t.sourceRevision && e.target === t.target && e.semanticProfile === t.semanticProfile && e.profileProofStatus === t.profileProofStatus && e.temporalBasis === t.temporalBasis && e.artifactSha256 === t.artifactSha256 && n.length === a.length && n.every((e, t) => e === a[t]);
}
async function Of(e, t, n, a, i = /* @__PURE__ */ new Map()) {
	const s = [];
	for (const l of [t, await xa(t, void 0, a)]) {
		const r = e.get(l);
		if (!r) continue;
		let o = i.get(l);
		o || i.set(l, o = Ma(r, n, `listDatesStatus ${l}`, Sa(), a));
		const c = await o;
		if (!c) return null;
		s.push({
			unpacked: c,
			epochs: await La(c.timestamps, t, a),
			ggir: await La(c.ggirTimestamps, t, a)
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
function jf(e, t) {
	const n = new Set(t.map((e) => e.analysis_date)), a = Object.keys(e);
	return n.size === t.length && a.length === n.size && a.every((e) => n.has(e));
}
function Bf(e) {
	const t = [...e.entries()].sort(([e], [t]) => e.localeCompare(t));
	let n = null, a = null;
	for (const [, r] of t) try {
		const e = jn(r).timestamps;
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
			const t = jn(e).timestamps;
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
async function Gf(e, t, n, a, i, s, r) {
	const o = [], l = [];
	for (const c of new Set(t)) {
		let t = null;
		for (const o of e) if (o && 0 !== jn(o).timestamps.length && (await Gr(o, c, n, i, void 0, s, r), t = ra(c, ya(o, n), a), null !== t)) break;
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
function Lf({ available: e, dropped: t }) {
	return 0 === e.length && t.length > 0 ? t.map((e) => e.reason).join("; ") : null;
}
function Uf(e) {
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
function Hf(e) {
	return 1 === e.length && pa(e[0]);
}
function Zf(e, t, n) {
	const a = e?.byDate[t];
	return a ? "refused" === a.kind ? a.reason : null : function(e) {
		const t = e?.sleepPeriodDetectionConfig?.[Sm];
		return "string" == typeof t ? t : null;
	}(n);
}
async function qf(e, t) {
	if (!("placementResults" in e)) return;
	const n = await e.placementResults.get(t);
	return 2 === n?.policy ? n : void 0;
}
function Vf(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let a = 0; a < t; a += 1) {
		const t = e[a];
		if (null == t || !Number.isFinite(t)) return [];
		n[a] = t;
	}
	return n;
}
function Wf(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let a = 0; a < t; a += 1) {
		const t = e[a];
		if (0 !== t && 1 !== t) return [];
		n[a] = t;
	}
	return n;
}
function Jf(e, t, n) {
	if (t.length !== e.length || n.length !== e.length) return [];
	const a = new Array(e.length);
	for (let i = 0; i < e.length; i += 1) {
		const s = t[i], r = e[i], o = n[i];
		if (null == s || null == r || s !== r || null == o || !Number.isFinite(o)) return [];
		a[i] = o;
	}
	return a;
}
function Kf(e, t, n, a, i, s) {
	const r = [], o = null == t ? null : s.resolveInstant(t, e, Ue.evening_onset, i), l = null == n ? null : s.resolveInstant(n, e, Ue.morning_offset, i);
	return null == o && null == l || r.push({
		guider: _.DIARY,
		detector: null,
		onset_ts: o,
		offset_ts: l
	}), null != a && r.push({
		guider: _.HDCZA,
		detector: null,
		onset_ts: a[0],
		offset_ts: a[1]
	}), r;
}
function Yf(e) {
	return `complexity-evidence:${e.generationKey}`;
}
function Xf(e) {
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
function Qf(e) {
	return e.projectionInput;
}
function em(e) {
	return e.difficultyByDate;
}
function tm(e) {
	return e.signalsByDate;
}
function nm(e, t, n, a) {
	return {
		has_markers: w(e),
		has_nonwear: o(e),
		is_invalid_night: e?.isInvalidNight ?? !1,
		needs_consensus: e?.needsConsensus ?? !1,
		auto_flagged: t,
		has_auto_score: (n?.sleepMarkers?.length ?? 0) > 0 || !0 === n?.isInvalidNight,
		auto_score_unavailable_reason: a
	};
}
async function am(e, t, n, a) {
	const [i, s] = await Promise.all([a.markers.where("[fileId+date+username]").between([
		e,
		t,
		""
	], [
		e,
		t,
		"￿"
	], !0, !0).toArray(), qf(a, e)]), r = /* @__PURE__ */ new Map();
	for (const c of i) r.set(c.username, Kt(r.get(c.username), c));
	const o = r.size >= 2 && (await ff([{
		usersForDate: r,
		kind: "sleep"
	}, {
		usersForDate: r,
		kind: "nonwear"
	}])).some((e) => e.disagree), l = r.get(et);
	return nm(r.get(n), o, l, Zf(s, t, l));
}
function im(e) {
	return JSON.stringify((e ?? []).map((e) => [e.startTimestamp ?? null, e.endTimestamp ?? null]));
}
function sm(e) {
	const t = e ? null : E().scoring(), n = e?.nightStartHour ?? t?.nightStartHour ?? u.night_start_hour, a = e?.nightEndHour ?? t?.nightEndHour ?? u.night_end_hour, i = parseInt(n.split(":")[0] ?? "21", 10), s = parseInt(a.split(":")[0] ?? "9", 10);
	return {
		nightStartHour: Number.isNaN(i) ? 21 : i,
		nightEndHour: Number.isNaN(s) ? 9 : s
	};
}
const rm = /* @__PURE__ */ new Set(), om = /* @__PURE__ */ new WeakMap();
function lm(e, t, n, a) {
	const i = om.get(e) ?? /* @__PURE__ */ new Map();
	om.set(e, i);
	const s = i.get(t);
	if (s) {
		let r;
		return {
			run: s.run.catch((o) => {
				if (!s.signal?.aborted || n?.aborted) throw o;
				return i.get(t) === s && i.delete(t), r = lm(e, t, n, a), r.run;
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
function cm(e, t, n, a) {
	return Q({
		kind: V.NIGHT_DIFFICULTY,
		key: `${V.NIGHT_DIFFICULTY}:${String(e)}`,
		label: "Update night difficulty",
		workspaceId: t.name,
		signal: a,
		rerun: !0,
		run: async (a) => {
			const i = new hm();
			try {
				if (a.signal.throwIfAborted(), a.progress(0, 2), X() !== t) return;
				const s = await Ve(e, t);
				if (!s || "incomplete" === s.ingestState) return;
				await vf(e, t, a.signal), a.signal.throwIfAborted(), a.progress(1, 2);
				const r = s.nightDifficulty, o = n ?? (r ? {
					nightStartHour: `${String(r.nightStartHour).padStart(2, "0")}:00`,
					nightEndHour: `${String(r.nightEndHour).padStart(2, "0")}:00`
				} : void 0);
				await i.computeDatesStatus(e, s.availableDates, E().scoring().username || "anonymous", o, a.signal), a.progress(2, 2);
			} finally {
				i.dispose();
			}
		}
	}).catch((e) => {
		e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] Stored night difficulty could not be refreshed.", e);
	});
}
qe((e, t, n) => {
	cm(e, t, void 0, n);
});
const um = /* @__PURE__ */ new WeakMap();
function dm(e, t, n, a, i) {
	i?.throwIfAborted();
	let s = um.get(e);
	return s || (s = /* @__PURE__ */ new Map(), um.set(e, s)), s.set(t, {
		inputs: n,
		byDate: a
	}), a;
}
const pm = /* @__PURE__ */ new WeakMap();
function fm(e, t) {
	let n = pm.get(e);
	n || pm.set(e, n = /* @__PURE__ */ new Map());
	const a = Me(t);
	let i = n.get(a);
	return i || n.set(a, i = rt(e.values(), t)), i;
}
function mm(e) {
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
var hm = class a {
	sourceKey = "local";
	nightRecordData = pr;
	sourceAnalyses;
	services;
	disposed = !1;
	operationProcessingOptions;
	constructor(e, { sourceAnalyses: t = fr, services: n = _p } = {}) {
		this.operationProcessingOptions = e, this.sourceAnalyses = t, this.services = n;
	}
	fileBatches = /* @__PURE__ */ new Map();
	beginFileBatch(e, t = X(), n) {
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
					analysisParadigm: E().scoring().analysisParadigm,
					db: i.db,
					signal: i.signal
				});
			}, Promise.resolve())));
		} };
	}
	reanalyze(e, t, n) {
		return bp(this.sourceAnalyses, e, "reanalyze")?.reanalyze(e, t, {
			...n,
			services: this.services
		}) ?? null;
	}
	fileBatch(e, t) {
		const n = this.fileBatches.get(e);
		return n?.db === t ? n : null;
	}
	placementDiaries(e, t, n = this.fileBatch(e, t)) {
		return n?.days ? n.diaries ??= Ne(e, t) : Ne(e, t);
	}
	async placementDiary(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? (await this.placementDiaries(e, n, a)).find((e) => e.analysisDate === t) ?? null : ct(e, t, n);
	}
	async placementMarker(e, t, n, a, i = this.fileBatch(e, a)) {
		if (!i?.days) return Ie(e, t, et, n, void 0, a);
		const s = await (i.markers ??= a.markers.where("fileId").equals(e).toArray()), r = cn(s, {
			date: t,
			username: et
		}, n);
		return r ? ut(r) : void 0;
	}
	async placementDay(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? a.days.get(t) : xt(e, t, n, a?.activityDayMemo);
	}
	async scorerVerdict(e, t, n, a, i = this.fileBatch(t, e)) {
		return i?.days ? fm(i.days, n) : i?.activityDayMemo ? fm(await Et(t, e, i.activityDayMemo), n) : (await Tn(t, e, a))(n);
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
		const n = X(), a = await Et(e, n, this.fileBatch(e, n)?.activityDayMemo), i = fm(a, t), s = [];
		for (const [r, o] of [...a].sort(([e], [t]) => e.localeCompare(t))) {
			const e = await Ma(o, i, `loadFileDaySeries ${r}`, Sa());
			e && s.push(e);
		}
		return s;
	}
	async loadActivityData(e, t, n) {
		const a = X();
		let i, s = await Ve(e, a), r = null;
		if (qt(s)) {
			const { ensureSavedGgirNonwear: t } = await import("./ggir-import-BmHypsH5.js");
			try {
				r = await t(e, a, void 0, !1);
			} catch {
				i = "Saved GGIR nonwear recovery failed; recovered nonwear is unavailable.";
			}
			s = await Ve(e, a);
		}
		const o = s?.navigationFacts;
		o?.window[t] || vf(e, a);
		const l = await Da(e, t, a, void 0, o);
		if (!l) throw new Error(`No activity data found for fileId=${e} date=${t}. File may not be processed yet.`);
		const c = await this.scorerVerdict(a, e, n?.algorithm, { file: s }), u = await Ma(l, c, `loadActivityData ${t}`, Sa());
		if (!u) throw new Error(`Activity data for fileId=${e} date=${t} is corrupt; please reprocess.`);
		const d = await xa(t, o), p = 48 === n?.viewHours ? [d, await xa(d, o)] : [d], f = await Promise.all(p.map((t) => xt(e, t, a, this.fileBatch(e, a)?.activityDayMemo))), m = [l];
		for (const k of f) {
			if (!k) break;
			m.push(k);
			const e = await Ma(k, c, "loadActivityData next-day", Sa());
			if (!e) throw new Error("Next-day activity data is corrupt; please reprocess.");
			const t = u.timestamps.length, n = e.timestamps.length;
			ja(u.timestamps, e.timestamps), ja(u.axisY, e.axisY), ja(u.vectorMagnitude, e.vectorMagnitude), (u.axisX.length > 0 || e.axisX.length > 0) && (u.axisX.length < t && (u.axisX = new Array(t).fill(0)), ja(u.axisX, e.axisX.length > 0 ? e.axisX : new Array(n).fill(0))), (u.axisZ.length > 0 || e.axisZ.length > 0) && (u.axisZ.length < t && (u.axisZ = new Array(t).fill(0)), ja(u.axisZ, e.axisZ.length > 0 ? e.axisZ : new Array(n).fill(0))), (u.temperature.length > 0 || e.temperature.length > 0) && (u.temperature.length < t && (u.temperature = new Array(t).fill(NaN)), ja(u.temperature, e.temperature.length > 0 ? e.temperature : new Array(n).fill(NaN))), (u.eventMarkers.length > 0 || e.eventMarkers.length > 0) && (u.eventMarkers.length < t && (u.eventMarkers = new Array(t).fill(0)), ja(u.eventMarkers, e.eventMarkers.length > 0 ? e.eventMarkers : new Array(n).fill(0))), ja(u.eventMarkerTimestamps, e.eventMarkerTimestamps), (u.lux.length > 0 || e.lux.length > 0) && (u.lux.length < t && (u.lux = new Array(t).fill(NaN)), ja(u.lux, e.lux.length > 0 ? e.lux : new Array(n).fill(NaN))), (u.sleepScores.length > 0 || e.sleepScores.length > 0) && (u.sleepScores.length < t && (u.sleepScores = new Array(t).fill(0)), ja(u.sleepScores, e.sleepScores.length > 0 ? e.sleepScores : new Array(n).fill(0))), (u.sleepScoreGaps.length > 0 || e.sleepScoreGaps.length > 0) && (u.sleepScoreGaps.length < t && (u.sleepScoreGaps = new Array(t).fill(0)), ja(u.sleepScoreGaps, e.sleepScoreGaps.length > 0 ? e.sleepScoreGaps : new Array(n).fill(0))), (u.lstmTimestamps30s.length > 0 || e.lstmTimestamps30s.length > 0) && (u.lstmTimestamps30s = za(u.lstmTimestamps30s, e.lstmTimestamps30s), u.lstmSleepWake30s = Aa(u.lstmSleepWake30s, e.lstmSleepWake30s)), Fa(u, e, t, n), (u.ggirTimestamps.length > 0 || e.ggirTimestamps.length > 0) && (u.ggirSib = Ea(u.ggirTimestamps, u.ggirSib, e.ggirTimestamps, e.ggirSib), u.ggirTimestamps = za(u.ggirTimestamps, e.ggirTimestamps), u.ggirEnmo = za(u.ggirEnmo, e.ggirEnmo), u.ggirAnglez = za(u.ggirAnglez, e.ggirAnglez));
		}
		u.ggirSib = Ta(u.ggirTimestamps, u.ggirSib);
		const { start: h, end: g } = await _i(t, 48 === n?.viewHours ? 48 : void 0, o), y = Ja(s?.sourceType, s?.sourceProfileId);
		let w = [];
		pa(y) ? w = (await Ht(e, h, g, a)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : "detach_mask" === qa(y) && u.detachNonwear && (w = hf(u.detachNonwear, u.timestamps));
		const _ = {};
		for (const [k, I] of Object.entries(u.nonwearMasksByDetector)) 0 !== I.length && (gi(k) || (_[k] = I));
		const v = m.flatMap((e) => e.ggirTimestamps?.byteLength ? [e.ggirInvalid] : []);
		if (v.length > 0 && v.every((e) => void 0 !== e)) {
			const e = v.flatMap((e) => Array.from(new Uint8Array(e)));
			e.length === u.ggirTimestamps.length && (_[lt.ggir_part2_invalid] = e);
		}
		Rt(u.timestamps, bf(m, "count_sleep_wake")), Rt(u.ggirTimestamps, bf(m, "ggir_sleep_period"));
		const b = function(e, t, n, a) {
			const i = {}, s = e.filter((e) => Sf(e, "counts") > 0 || Sf(e, "ggir") > 0);
			for (const r of mf(a)) {
				const e = Wa(r);
				if (!s.every((t) => t.displayNonwear && e in t.displayNonwear)) continue;
				const a = s.map((t) => t.displayNonwear[e] ?? null), o = a.filter((e) => null !== e), l = o[0]?.grid;
				if (!l) {
					i[e] = null;
					continue;
				}
				if (o.some((e) => e.grid !== l)) continue;
				const c = o.some((e) => null !== e.weight), u = [], d = [];
				if (s.forEach((e, t) => {
					const n = a[t], i = n ? new Uint8Array(n.any) : new Uint8Array(Sf(e, l));
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
		Object.keys(b).length < mf(s ?? null).length && vf(e, a);
		const S = await Ca(u, m, c, s);
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
			...u.ggirTimestamps.length > 0 && 0 === u.ggirSib.length ? { ggirSibMissingReason: Oa(s, l) } : {},
			algorithmResults: u.sleepScores.length > 0 ? u.sleepScores : null,
			...u.sleepScoreGaps.length > 0 ? { algorithmResultGaps: u.sleepScoreGaps } : {},
			...n?.algorithm && !Na(n.algorithm) && 0 === u.sleepScores.length && u.timestamps.length > 0 ? { scorerMissingReason: "stale" === c.status ? c.reason : Pa(n.algorithm, {
				sourceProfileId: s?.sourceProfileId,
				scorerSettingsStored: await bp(this.sourceAnalyses, s, "hasScorerSettings")?.hasScorerSettings(e, a)
			}) } : {},
			lstmTimestamps30s: u.lstmTimestamps30s,
			lstmSleepWake30s: u.lstmSleepWake30s,
			nonwearResults: u.nonwearResults,
			nonwearResultsChoi2011: u.nonwearResultsChoi2011,
			vanHeesNonwear: u.vanHeesNonwear,
			algorithmicNonwearMasks: _,
			nonwearBands: b,
			...r ? { nonwearSourceLabels: { [lt.ggir_saved]: r } } : {},
			...i ? { savedNonwearMissingReason: i } : {},
			epochResolutions: S,
			viewStart: h,
			viewEnd: g,
			sensorNonwearPeriods: w,
			deviceNonwearSource: y
		};
	}
	async loadMarkers(e, t, n, a, i, s) {
		const r = s ?? X(), o = await Ie(e, t, n, a, i, r);
		return o ? mm(o) : null;
	}
	async saveMarkers(e, t, n, a, i, s, r, o, l) {
		const c = o ?? X(), u = E().scoring(), d = pf(c, {
			username: n,
			studyId: u.selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, l), p = r?.signal ?? this.fileBatch(e, c)?.signal;
		let f, m = null, h = null, g = !1, y = r?.sleepPeriodDetection ?? u.sleepPeriodDetection;
		const w = await ea({
			fileId: e,
			date: t,
			username: n,
			algorithm: i ?? null,
			detectionRule: s ?? null,
			signal: p
		}, c, async (o) => {
			const l = "function" == typeof a ? await a(o ? mm(o) : null) : {
				data: a,
				settings: r
			};
			if (!l) return null;
			m = l.data;
			const d = l.settings ?? r, w = f = await Ve(e, c);
			m = {
				...m,
				sleepMarkers: await this.nightRecordData[He(w, u.analysisParadigm)].sleepPeriodsToSave({
					fileId: e,
					date: t,
					isInvalidNight: m.isInvalidNight ?? o?.isInvalidNight ?? !1
				}, m.sleepMarkers, c)
			}, y = ft({
				algorithm: i ?? "",
				sleepPeriodDetection: d?.sleepPeriodDetection ?? u.sleepPeriodDetection
			});
			const _ = y ? Mn(y) : null, v = void 0 === d?.periodGuider ? _n(u, w) : null, b = d?.periodGuider ?? v?.periodGuider, S = d?.periodGuider ?? (_ && !0 !== v?.placementFromSource ? Je(ge(_)) : v?.periodGuider), k = i ? ue(i) : null, I = k ? Tt(k) : null, A = await Ie(e, t, n, i ?? null, s ?? null, c);
			g = !A || A.algorithm !== (i ?? null) || A.detectionRule !== (s ?? null) || JSON.stringify(A.sleepMarkers) !== JSON.stringify(m.sleepMarkers) || void 0 !== m.isInvalidNight && m.isInvalidNight !== A.isInvalidNight, h = void 0 !== m.nonwearMarkers && "auto_score" !== n ? im(A?.nonwearMarkers) : null;
			let x = m.sleepPeriodDetectionConfig ?? null;
			if (null === x) {
				const n = await ct(e, t, c);
				x = bt({
					algorithm: i ?? null,
					periodGuider: _o(0, b, y),
					sleepPeriodDetection: y,
					diaryOnsetTime: on(n),
					diaryWakeTime: Ft(n)
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
		const _ = m, v = mm(w.record), b = {
			fileId: e,
			file: f,
			nights: /* @__PURE__ */ new Map([[t, _.sleepMarkers]]),
			sleepMarkersChanged: g,
			username: n,
			analysisParadigm: E().scoring().analysisParadigm,
			db: c,
			signal: p,
			openBatch: () => this.fileBatch(e, c)
		};
		if (await this.sourceAnalyses.reduce(async (e, t, n) => !!(await e || n > 0 && p?.aborted) || (vp(t, f, "followSavedNights") && await t.followSavedNights(b), !1), Promise.resolve(!1))) return v;
		null !== h && h !== im(_.nonwearMarkers) && cm(e, c, void 0, p), g && Ie(e, t, n, i ?? null, s ?? null, c).then(async (t) => {
			if (!t) return;
			const { storeNightPeriodMetrics: n } = await import("./local-export-shard-worker-CCG86mok.js").then((e) => e.R);
			return n(t, await this.scorerVerdict(c, e, t.algorithm), c, p);
		}).catch(() => {
			console.warn("[local-analysis] period metrics could not be stored with the saved night");
		});
		try {
			if (X() !== c) return v;
		} catch {
			return v;
		}
		const S = jt();
		if (!S.capabilities.tauri) return v;
		try {
			const [a, r] = await Promise.all([Ve(e, c), Ie(e, t, n, i ?? null, s ?? null, c)]);
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
				nonwearMarkers: Mf(r.nonwearMarkers),
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
		const e = X();
		return (await Ye(e)).map((e) => {
			const t = e.id ?? 0, n = H(e);
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
				views: m(t, n, /* @__PURE__ */ new Set(), e.epochLengthSeconds),
				count_epoch_seconds: e.epochLengthSeconds
			};
		});
	}
	async listDates(e) {
		const t = X();
		return (await Ve(e, t))?.availableDates ?? mt(e, t);
	}
	async getDiaryEntry(e, t) {
		const n = X(), a = await ct(e, t, n);
		return a ? Ke(a, await St(e, n)) : null;
	}
	async listDiaryEntries(e) {
		const t = X(), n = await Ne(e, t);
		if (0 === n.length) return n;
		const a = await St(e, t);
		return null === a ? n : ye(n, a);
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
		const d = J(c), [p, f, m, h] = await Promise.all([
			u?.days ? [...u.days.keys()].sort() : mt(e, i),
			this.placementDiaries(e, i, u),
			Hf(s) ? vt(e, i) : An(e, i),
			i.files.get(e)
		]), g = await ye(f, a, d), y = new Map(g.map((e) => [e.analysisDate, e])), w = [], _ = p.filter((e) => e !== t), v = await Promise.all(_.map((t) => this.placementDay(e, t, i, u)));
		for (const [b, S] of _.entries()) {
			const e = v[b];
			if (!e) continue;
			for (const n of s) await Gr(e, n, l, i, d, c, u?.activityDayMemo);
			const t = await Ma(e, n, `autoScore context ${S}`, l, d);
			if (!t || 0 === t.timestamps.length || 0 === t.sleepScores.length) continue;
			const a = y.get(S), p = t.timestamps[0] ?? 0, f = t.timestamps[t.timestamps.length - 1] ?? p, g = await le(t.timestamps, tn({
				day: e,
				file: h
			}), d), _ = Uf(wa(await da(s, t.nonwearMasksByDetector, {
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
				diaryBedTime: $t(a),
				diaryOnsetTime: on(a),
				diaryWakeTime: Ft(a),
				diaryNaps: a ? yt(a) : null,
				diaryNonwear: a ? Nn(a) : null
			});
		}
		return {
			contextDays: w,
			deviceOffNonwear: m
		};
	}
	async autoScore(e, t, n, a) {
		const i = a ?? X();
		if (this.fileBatch(e, i)) return this.autoScoreNight(e, t, n, ko, i);
		const s = {}, r = await Et(e, i, s), o = {
			db: i,
			signal: n.signal,
			depth: 0,
			savedNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map(),
			activityDayMemo: s,
			span: Promise.resolve(Bf(r))
		};
		return this.autoScoreNight(e, t, n, ko, i, void 0, void 0, void 0, o);
	}
	async autoScoreFile(e, t, n = !0, a = X(), i) {
		if (U(a.name)) return /* @__PURE__ */ new Map();
		const s = await this.filePlacementState(e, t, a);
		if (!s) return /* @__PURE__ */ new Map();
		const { file: r, inputs: o, cached: l } = s, c = je(r);
		return c ? new Map(r.availableDates.map((e) => [e, {
			kind: "refused",
			reason: c
		}])) : l ? dm(a, e, o, l, t.signal) : n ? Q({
			kind: V.AUTO_SCORE,
			key: `${V.AUTO_SCORE}:${String(e)}:${o}`,
			label: "Compute marker placement",
			workspaceId: a.name,
			signal: t.signal,
			run: async (n) => {
				const l = i?.inputs === o ? i.byDate : await this.computeFilePlacement(s, t, a, n);
				return await this.storeFilePlacement(e, o, l, a, {
					...t,
					signal: n.signal
				}) ? (n.progress(r.availableDates.length, r.availableDates.length), dm(a, e, o, l, n.signal)) : /* @__PURE__ */ new Map();
			}
		}) : /* @__PURE__ */ new Map();
	}
	async filePlacementState(e, n, a) {
		const i = await Ve(e, a), s = um.get(a)?.get(e), [r, o, l] = await Promise.all([
			Ne(e, a),
			a.markerProvenance.get(e),
			s ? void 0 : qf(a, e)
		]);
		if (!i) return null;
		const c = await $.waitFor(async function(e, n, a, i) {
			const s = E().scoring(), r = n.ruleset ?? s.placementRuleset, o = /* @__PURE__ */ new Set([A.VAN_HEES_2015, ...n.algorithm && Na(n.algorithm) ? [n.algorithm] : []]), l = (e) => "auto_score" === e.username && o.has(e.algorithm ?? ""), c = (i?.rows ?? []).filter((e) => l(e) || r !== t.LEGACY && e.nonwearDecided).map((e) => [e.id, l(e) ? e.lastModifiedAt : e.nonwearSpans ?? e.lastModifiedAt]), { signal: u, choiAxis: d, hasptVariant: p, studySettingsRevision: f, ...m } = n;
			return ae(JSON.stringify({
				v: 2,
				options: m,
				ruleset: r,
				nonwearDetectors: n.nonwearDetectors ?? oa(Ia(n.algorithm)),
				choiAxis: n.choiAxis ?? s.choiAxis,
				hasptVariant: n.hasptVariant ?? s.ggirHasptVariant,
				seriesRevision: e.seriesRevision ?? 0,
				dates: e.availableDates,
				diaries: a,
				rows: c
			}));
		}(i, n, r, o));
		if (s?.inputs === c) return {
			fileId: e,
			file: i,
			diaries: r,
			inputs: c,
			cached: s.byDate
		};
		const u = s ? await qf(a, e) : l;
		return {
			fileId: e,
			file: i,
			diaries: r,
			inputs: c,
			cached: u?.inputs === c ? new Map(Object.entries(u.byDate)) : null
		};
	}
	async storeFilePlacement(e, t, n, a, i) {
		if (i.signal?.throwIfAborted(), U(a.name)) return !1;
		const s = await B(a, [
			a.files,
			a.diaryEntries,
			a.markerProvenance,
			a.placementResults,
			a.studySettings
		], async () => {
			if (void 0 !== i.studySettingsRevision && ((await ve(a))?.contentHash ?? null) !== i.studySettingsRevision) return !1;
			const s = await this.filePlacementState(e, i, a);
			return !U(a.name) && s?.inputs === t && (await a.placementResults.put({
				fileId: e,
				policy: 2,
				inputs: t,
				byDate: Object.fromEntries(n)
			}), !0);
		}, i.signal);
		return s && X() === a && ze(e, a), s;
	}
	async storeFilesPlacement(e, t, n, i, s) {
		const r = [], o = await Promise.allSettled(e.map(({ fileId: e, options: n }) => this.filePlacementState(e, n, t))), l = {
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: P()
		}, c = o.flatMap((e) => "fulfilled" === e.status && e.value ? [e.value.file] : []), u = c.flatMap((e) => "ggir_part1" === f(e.sourceType)?.importWorkerBudget ? [{ size: e.sourceSizeBytes ?? 0 }] : []), d = u.length > 0 && u.length === c.length ? function(e, t) {
			return {
				...t,
				maxExtraWorkers: Number.POSITIVE_INFINITY,
				workerMemoryGib: (n = e.reduce((e, t) => Math.max(e, t.size), 0), .25 * Math.max(1, n / 968617))
			};
			var n;
		}(u, l) : {
			...l,
			maxExtraWorkers: Number.POSITIVE_INFINITY
		}, p = await Oi(e.map(({ fileId: e, options: i }, l) => ({
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
			createWorker: Z,
			extraWorkers: Di(d),
			cancelOperation: () => {},
			...i,
			signal: n.signal
		});
		for (const [a, f] of p.entries()) {
			try {
				f && await this.storeFilePlacement(f.fileId, f.inputs, f.byDate, t, e[a].options) && dm(t, f.fileId, f.inputs, f.byDate, n.signal);
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
	async computeFilePlacement(e, t, n, a, i, s) {
		const r = e.fileId, o = e.file.availableDates, l = {
			...t,
			signal: a.signal
		};
		return ln(async (c) => {
			const u = await Et(r, n, c), d = s ?? (await Zr(n)).csvText, p = void 0 !== i && Na(t.algorithm), f = [];
			let m, g = o.length;
			const y = new Promise((e) => {
				m = e;
			}).then(async () => {
				if (0 !== f.length) try {
					a.signal.throwIfAborted();
					const e = f.map((e) => e.opts), n = p && i ? await i.placeStoredGgirNights([...u.values()], rt([...u.values()], t.algorithm), f.map((e) => ({
						options: e.opts,
						...e.anchor
					}))) : await function(e, t = h()) {
						return En(e, t);
					}(e, i ?? J(a.signal));
					a.signal.throwIfAborted();
					for (const [t, a] of f.entries()) a.resolve(n[t]);
				} catch (e) {
					for (const t of f) t.reject(e);
				}
			}), w = this.beginFileBatch(r, n, a.signal), _ = this.fileBatch(r, n), v = {
				activityDayMemo: _.activityDayMemo,
				days: _.days,
				span: _.span,
				file: _.file,
				diaries: _.diaries,
				markers: _.markers
			};
			_.activityDayMemo = c, _.days = u, _.span = Promise.resolve(Bf(u)), _.file = Promise.resolve(e.file), _.diaries = Promise.resolve(e.diaries);
			try {
				0 === o.length && m();
				const e = await Promise.all(o.map(async (e) => {
					let t = !1;
					const a = () => {
						t || (t = !0, g -= 1, 0 === g && m());
					};
					try {
						return [e, await this.autoScoreNight(r, e, l, (e) => new Promise((t, n) => {
							f.push({
								opts: e,
								resolve: t,
								reject: n
							}), a();
						}), n, d, i, p ? (e, t, n) => new Promise((i, s) => {
							f.push({
								opts: e,
								anchor: {
									day: t,
									nextDay: n
								},
								resolve: i,
								reject: s
							}), a();
						}) : void 0)];
					} finally {
						a();
					}
				}));
				await y;
				const t = new Map(e);
				return a.signal.throwIfAborted(), t;
			} finally {
				Object.assign(_, v), await w.end();
			}
		});
	}
	async autoScoreNight(e, n, a, i, s = X(), r, o, c, u) {
		const d = o ?? J(a.signal);
		a.signal?.throwIfAborted();
		const p = u ?? this.fileBatch(e, s), f = await (p ? p.file ??= Ve(e, s) : Ve(e, s)), m = je(f);
		if (m) return {
			kind: "refused",
			reason: m
		};
		const h = a.ruleset ?? E().scoring().placementRuleset, g = Ia(a.algorithm), y = a.nonwearDetectors ?? oa(g), w = a.choiAxis ?? E().scoring().choiAxis, _ = a.sleepPeriodDetection ? Mn(a.sleepPeriodDetection) : void 0;
		let v = sa(_, {
			path: g,
			selected: y
		}) ?? null;
		const b = await Da(e, n, s, (t) => this.placementDay(e, t, s, p), void 0, d);
		if (!b) return {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
		if ("vendor_analysis" === z.find((e) => e.id === a.algorithm)?.execution) {
			const t = {
				fileId: e,
				date: n,
				file: f,
				options: a,
				sleepPeriodDetectionConfig: v,
				db: s,
				batch: p
			}, i = await this.sourceAnalyses.reduce(async (e, n) => await e ?? n.proposeNight?.(t) ?? null, Promise.resolve(null));
			if (i) return i;
		}
		const S = await this.placementDay(e, await xa(n, void 0, d), s, p), k = Ja(f?.sourceType, f?.sourceProfileId), I = await Gf([b, S], y, w, k, s, a.signal, p?.activityDayMemo), x = await this.scorerVerdict(s, e, a.algorithm, { file: f }, p), N = Na(a.algorithm), T = N && c ? { kind: "angle-deferred" } : await $a({
			day: b,
			nextDay: S,
			verdict: x,
			angle: N,
			requireScores: !0,
			missingScoresReason: a.algorithm === A.LSTM_SLEEP_WAKE ? "No LSTM sleep/wake results are stored for this file. Re-import or reprocess the raw file so the app can compute spectral features and run the ONNX model." : "No algorithm results available",
			choiAxis: w,
			laterDays: async () => [...(p?.days ?? await Et(e, s, p?.activityDayMemo)).values()].filter((e) => e.date > n).sort((e, t) => e.date.localeCompare(t.date)),
			core: d
		});
		if ("refused" === T.kind) return T;
		const M = N ? null : Lf(I);
		if (null !== M) return {
			kind: "refused",
			reason: M
		};
		v = sa(_, {
			path: g,
			selected: y,
			available: I.available,
			dropped: I.dropped
		}) ?? null;
		const R = ua(I.dropped, g), $ = (e) => "refused" === e.kind || null === v && 0 === R.length ? e : {
			...e,
			notes: [...R, ...e.notes],
			sleep_period_detection_config: {
				...e.sleep_period_detection_config ?? {},
				...v ?? {}
			}
		};
		if ("angle" === T.kind || "angle-legacy" === T.kind || "angle-deferred" === T.kind) {
			const o = await this.placementMarker(e, n, a.algorithm ?? null, s, p) ?? await this.placementMarker(e, n, A.VAN_HEES_2015, s, p), u = o?.sleepMarkers[0], m = null != u?.onsetTimestamp && null != u.offsetTimestamp ? {
				startTimestamp: u.onsetTimestamp,
				endTimestamp: u.offsetTimestamp
			} : null, g = () => u && null != u.onsetTimestamp && null != u.offsetTimestamp ? {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: u.onsetTimestamp,
					offset_timestamp: u.offsetTimestamp,
					marker_type: l.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: [],
				notes: ["HDCZA fallback: no 5s SIB stream available for structured sleep-period fusion", `HDCZA window: ${Bt(u.onsetTimestamp)} – ${Bt(u.offsetTimestamp)}`],
				decisions: [],
				sleep_period_detection_config: o?.sleepPeriodDetectionConfig ?? v
			} : {
				kind: "refused",
				reason: "No HDCZA sleep window found — re-process the file to regenerate it"
			};
			if ("angle" === T.kind || "angle-deferred" === T.kind) {
				let l = {
					timestamps: /* @__PURE__ */ new Float64Array(),
					activityCounts: /* @__PURE__ */ new Float64Array(),
					sleepScores: /* @__PURE__ */ new Uint8Array()
				};
				if ("angle" === T.kind) {
					const e = await Ba(T, n, d);
					if ("refused" === e.kind) return e;
					l = e.series;
				}
				const [u, y] = await Promise.all([this.placementDiary(e, n, s, p), p ? p.span ??= St(e, s, f?.seriesRevision ?? 0) : St(e, s, f?.seriesRevision ?? 0)]), w = u ? await Ke(u, y, d) : null, _ = (await Io(a.sensorLocation ?? "wrist", a.hasptVariant ?? E().scoring().ggirHasptVariant, d)).variant, v = function(e) {
					const t = e?.sleepPeriodDetectionConfig?.haspt_variant;
					return Object.values(dt).includes(t) ? t : null;
				}(o), k = null == o ? null : null == v ? `HASPT variant not recorded at import; assumed ${_} from the study setting. Reprocess the file to record it.` : v !== _ ? `HASPT variant at import was ${v}; the study setting now gives ${_}. Placed with ${v}; reprocess the file to apply ${_}.` : null, I = h === t.GGIR_PART4, A = I ? await Fn(await this.placementDiaries(e, s, p), void 0, d) : null, x = A?.wakeIsOutBed ? null : Pt(w, A?.outBedIsWake ? "diary_out_of_bed_time" : "diary_wake_time"), N = A?.outBedIsWake ? null : Pt(w, A?.wakeIsOutBed ? "diary_wake_time" : "diary_out_of_bed_time"), M = {
					...l,
					choiNonwear: null,
					ggirHasptAlgo: v ?? _,
					ggirConfigCsv: r ?? (await Zr(s)).csvText,
					...A?.hasBedlog ? { ggirDiaryHasBedlog: !0 } : {},
					...A?.hasSleeplog ? { ggirDiaryHasSleeplog: !0 } : {},
					diaryBedTime: I ? Pt(w, "diary_in_bed_time") : $t(w),
					diaryOutBedTime: I ? N : Yt(w),
					diaryOnsetTime: I ? Pt(w, "diary_onset_time") : on(w),
					diaryWakeTime: I ? x : Ft(w),
					diaryNaps: w ? yt(w) : null,
					analysisDate: n,
					onsetMinConsecutiveSleep: 1,
					offsetMinConsecutiveMinutes: 1,
					algorithm: a.algorithm,
					periodGuider: _o(a.algorithm, a.periodGuider, a.sleepPeriodDetection),
					...void 0 !== a.sleepPeriodDetection ? { sleepPeriodDetection: a.sleepPeriodDetection } : {},
					...a.scorerPostprocessing ? { scorerPostprocessing: a.scorerPostprocessing } : {},
					ruleset: h,
					epochLengthSeconds: 5,
					guiderWindows: m ? { hdcza: m } : {}
				}, z = "angle-deferred" === T.kind ? await c(M, b, S) : await i(M);
				return "angle-legacy" === z ? g() : $(k && "refused" !== z.kind ? {
					...z,
					notes: [k, ...z.notes]
				} : z);
			}
			return g();
		}
		const [C, D] = await Promise.all([this.placementDiary(e, n, s, p), p ? p.span ??= St(e, s, f?.seriesRevision ?? 0) : St(e, s, f?.seriesRevision ?? 0)]), P = C ? await Ke(C, D, d) : null, { unpacked: F } = T, { timestamps: O, axisY: j, sleepScores: B, eventMarkerTimestamps: G } = F, L = De(a.detectionRule), U = _o(a.algorithm, a.periodGuider, a.sleepPeriodDetection), H = await be(mr, {
			fileId: e,
			file: f,
			date: n,
			db: s,
			batch: p,
			autoScoreMarker: (t) => this.placementMarker(e, n, t, s, p)
		}), Z = await le(O, tn({
			day: b,
			file: f
		}), d), q = I.available.some(pa) ? await (p ? p.sensor ??= Oe(e, s) : Oe(e, s)) : [], V = Uf(wa(await da(I.available, F.nonwearMasksByDetector, {
			offPeriods: q,
			source: k
		}, {
			timestampsSec: O,
			epochLenSec: Z
		}, d))), W = h !== t.LEGACY ? await this.loadPlacementFileContext(e, n, a.algorithm, x, D, s, I.available, q, k, w, a.signal, p) : null, { startIndex: K, endIndex: Y } = await La(O, n, d);
		if (K === Y) return {
			kind: "refused",
			reason: "No activity data found for this date"
		};
		const Q = O.slice(K, Y), ee = j.slice(K, Y), te = B.slice(K, Y), ne = V.choiNonwear ? V.choiNonwear.slice(K, Y) : null, ae = V.nonwearWeight ? V.nonwearWeight.slice(K, Y) : null, ie = V.nonwearMemberFlags ? V.nonwearMemberFlags.slice(K, Y) : null, se = Q[0] ?? 0, re = Q[Q.length - 1] ?? se;
		return $(await i({
			timestamps: Q,
			activityCounts: ee,
			sleepScores: te,
			choiNonwear: ne,
			...ae ? { nonwearWeight: ae } : {},
			...ie ? { nonwearMemberFlags: ie } : {},
			diaryBedTime: $t(P),
			diaryOnsetTime: on(P),
			diaryWakeTime: Ft(P),
			diaryNaps: P ? yt(P) : null,
			diaryNonwear: P ? Nn(P) : null,
			analysisDate: n,
			onsetMinConsecutiveSleep: L.onsetN,
			offsetMinConsecutiveMinutes: L.offsetN,
			algorithm: a.algorithm,
			periodGuider: U,
			...void 0 !== a.sleepPeriodDetection ? { sleepPeriodDetection: a.sleepPeriodDetection } : {},
			...a.scorerPostprocessing ? { scorerPostprocessing: a.scorerPostprocessing } : {},
			ruleset: h,
			nonwearDetectors: V.nonwearDetectors,
			epochLengthSeconds: Z,
			guiderWindows: H,
			eventMarkerTimestamps: G.filter((e) => e >= se && e <= re + 60),
			nightStartHour: ht(a.nightStartHour),
			nightEndHour: ht(a.nightEndHour),
			...W ? {
				sensorNonwear: W.deviceOffNonwear.filter((e) => e.startTimestamp <= re && e.endTimestamp >= se),
				contextDays: W.contextDays
			} : {}
		}));
	}
	async autoNonwear(e, t, a) {
		if (void 0 === a.threshold) throw new Error("Local auto-nonwear requires a resolved nonwear threshold.");
		const i = X(), s = await Da(e, t, i, (t) => xt(e, t, i, this.fileBatch(e, i)?.activityDayMemo));
		if (!s) return {
			kind: "refused",
			reason: "No activity data"
		};
		const [r, o, l, c] = await Promise.all([
			xt(e, await xa(t), i, this.fileBatch(e, i)?.activityDayMemo),
			ct(e, t, i),
			Oe(e, i),
			Ve(e, i)
		]), u = E().scoring(), p = _n(u, c), f = a.nonwearDetectors ?? ("ggir" === Ia(p.algorithm) ? u.nonwearDetectorsGgir : p.nonwearDetectorsCounts), m = Ja(c?.sourceType, c?.sourceProfileId), g = await Gf([s, r], f, Sa(), m, i, void 0, this.fileBatch(e, i)?.activityDayMemo), y = Lf(g);
		if (null !== y) return {
			kind: "refused",
			reason: y
		};
		const w = await $a({
			day: s,
			nextDay: r,
			verdict: at,
			angle: !1,
			requireScores: !1,
			missingScoresReason: "",
			choiAxis: Sa(),
			laterDays: () => Promise.resolve([])
		});
		if ("counts" !== w.kind) return {
			kind: "refused",
			reason: "refused" === w.kind ? w.reason : Ra
		};
		const _ = w.unpacked, { timestamps: v, axisY: b } = _, S = v[0] ?? 0, k = v[v.length - 1] ?? S, I = wa(await da(g.available, _.nonwearMasksByDetector, {
			offPeriods: l.filter((e) => e.startTimestamp <= k && e.endTimestamp >= S),
			source: m
		}, {
			timestampsSec: v,
			epochLenSec: await pt(v, {
				day: s,
				file: c
			})
		})), A = Uf(I), x = Hf(g.available), N = o ? Nn(o) : [], T = a.existingSleepMarkers, M = await async function(e) {
			if (0 === e.timestamps.length || 0 === e.activityCounts.length) return Pn("No activity data");
			const t = {
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
				...xn(e.nonwearDetectors, e.nonwearWeight, {
					alwaysNameSingle: !0,
					memberFlags: e.nonwearMemberFlags
				})
			}, a = [
				JSON.stringify(t),
				e.timestamps instanceof Float64Array ? e.timestamps : Float64Array.from(e.timestamps),
				e.activityCounts instanceof Float64Array ? e.activityCounts : Float64Array.from(e.activityCounts),
				e.choiNonwear instanceof Uint8Array ? e.choiNonwear : Uint8Array.from(e.choiNonwear ?? [])
			], i = a.slice(1).filter((t) => ArrayBuffer.isView(t) && t !== e.timestamps && t !== e.activityCounts && t !== e.choiNonwear), s = await h().placeNonwearMarkers(d(a, i.map((e) => e.buffer)));
			return s ? {
				kind: "placed",
				nonwear_markers: s.nonwear_markers,
				notes: s.notes
			} : Pn("Nonwear placement is unavailable in this build — reload while online to update the local engine.");
		}({
			timestamps: v,
			activityCounts: b,
			diaryNonwear: N,
			choiNonwear: x ? null : A.choiNonwear,
			nonwearDetectors: A.nonwearDetectors,
			...A.nonwearWeight ? { nonwearWeight: A.nonwearWeight } : {},
			...A.nonwearMemberFlags ? { nonwearMemberFlags: A.nonwearMemberFlags } : {},
			sensorNonwearPeriods: x ? l.filter((e) => e.startTimestamp <= k && e.endTimestamp >= S).sort((e, t) => e.startTimestamp - t.startTimestamp).map((e) => [e.startTimestamp, e.endTimestamp]) : [],
			existingSleepMarkers: T,
			analysisDate: t,
			threshold: a.threshold
		});
		return "refused" === M.kind ? M : {
			kind: "placed",
			nonwear_markers: M.nonwear_markers.map((e) => ca(e, I?.available.length ?? 0)),
			notes: [...ua(g.dropped, Ia(p.algorithm)), ...M.notes]
		};
	}
	async listFileScoringCounts(e, t, n) {
		return this.fileScoringCountsIn(X(), e, t, n);
	}
	async fileScoringCountsIn(e, t, n, a) {
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const { nightStartHour: i, nightEndHour: s } = sm(a), [r, o] = await Promise.all([e.files.bulkGet([...t]), we(t, e)]);
		return Promise.all(t.map(async (t, a) => {
			const l = r[a], c = l?.availableDates ?? await mt(t, e), u = /* @__PURE__ */ new Map();
			for (const e of o[a]?.rows ?? []) e.username === n && u.set(e.date, Kt(u.get(e.date), e));
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
	async storedDatesStatus(e, t, n, a) {
		const i = X(), s = (await Ve(e, i))?.nightDifficulty, { nightStartHour: r, nightEndHour: o } = sm(a);
		if (s?.nightStartHour !== r || s.nightEndHour !== o || !t.every((e) => e in s.byDate)) return null;
		void 0 === s.notRankableReason && h().getComputeIdentity().then(({ sourceRevision: t }) => {
			s.sourceRevision !== String(t) && cm(e, i, a);
		}, () => {});
		const [l, c] = await Promise.all([he(e, i), qf(i, e)]), u = yn(l, n), d = yn(l, et), p = At(l), f = t.filter((e) => (p.get(e)?.size ?? 0) >= 2), m = await ff(f.flatMap((e) => [{
			usersForDate: p.get(e),
			kind: "sleep"
		}, {
			usersForDate: p.get(e),
			kind: "nonwear"
		}])), g = new Set(f.filter((e, t) => m[2 * t].disagree || m[2 * t + 1].disagree));
		return t.map((e) => ({
			date: e,
			...nm(u.get(e), g.has(e), d.get(e), Zf(c, e, d.get(e))),
			complexity_pre: s.byDate[e] ?? null,
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
		const r = J(s);
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const o = X(), l = ++this.nextComplexityGenerationToken;
		let c, u;
		const d = new Promise((e, t) => {
			c = e, u = t;
		});
		d.catch(() => {}), this.latestComplexityTokenByFile.set(e, l), this.complexitySnapshotByFile.delete(e), this.complexitySignalGenerationByFile.delete(e), this.complexityFailureByFile.delete(e), this.complexityGenerationByFile.set(e, {
			token: l,
			promise: d
		});
		try {
			const u = async () => {
				const t = await he(e, o), [a, i, s, r, l] = await Promise.all([
					Et(e),
					Ne(e),
					vt(e, o, t),
					Ef(e, o),
					Ve(e)
				]);
				return [
					yn(t, n),
					yn(t, et),
					a,
					i,
					s,
					At(t),
					Rf(t),
					r,
					l
				];
			}, [d, f, m, h, g, y, w, _, b] = "function" == typeof o.transaction ? await o.transaction("r", [
				o.markers,
				o.activityDays,
				o.diaryEntries,
				o.sensorNonwear,
				o.dailyGgirSummaries,
				o.files
			], async () => {
				if (X() !== o) throw new Error("The local workspace changed before difficulty inputs could be read.");
				const e = await u();
				if (X() !== o) throw new Error("The local workspace changed while difficulty inputs were being read.");
				return e;
			}) : await u(), S = Bf(m), k = new Map((await ye(h, S, r)).map((e) => [e.analysisDate, e])), { nightStartHour: I, nightEndHour: A } = sm(a), x = t.filter((e) => (y.get(e)?.size ?? 0) >= 2), N = await ff(x.flatMap((e) => [{
				usersForDate: y.get(e),
				kind: "sleep"
			}, {
				usersForDate: y.get(e),
				kind: "nonwear"
			}]), r), T = new Set(x.filter((e, t) => N[2 * t].disagree || N[2 * t + 1].disagree)), M = await qf(o, e), z = (e) => t.map((t) => ({
				date: t,
				...nm(d.get(t), T.has(t), f.get(t), Zf(M, t, f.get(t))),
				complexity_pre: e(t),
				complexity_post: null
			})), R = b?.nightDifficulty;
			R?.nightStartHour === I && R.nightEndHour === A && t.every((e) => e in R.byDate) && (s?.throwIfAborted(), i(z((e) => R.byDate[e] ?? null)));
			const E = [], C = [...t], D = await Ji(C, r), P = new Map(C.map((e, t) => [e, D[t] ?? !1])), F = rt(m.values()), O = /* @__PURE__ */ new Map();
			for (const n of t) {
				s?.throwIfAborted();
				const t = await Of(m, n, F, r, O);
				if (!t) continue;
				const { timestamps: a, axisY: i, sleepScores: o, nonwearResults: l, temperature: c, detachNonwear: u, ggirTimestamps: d, ggirAnglez: p } = t, f = Vf(a, a.length), h = Vf(i, f.length), y = Wf(o, f.length);
				if (0 === f.length || 0 === h.length || 0 === y.length) continue;
				const v = k.get(n), S = w.get(n) ?? null, I = await ke((t) => {
					const a = Cn(on(v), t), i = Cn(Ft(v), t);
					return {
						naps: v ? yt(v).map(([e, n]) => ({
							onset_time: Cn(e, t),
							offset_time: Cn(n, t)
						})).filter((e) => null != e.onset_time) : [],
						nonwear: v ? Nn(v).map(([e, n]) => [Cn(e, t), Cn(n, t)]).filter((e) => null != e[0] && null != e[1]).map(([e, t]) => ({
							start_time: e,
							end_time: t
						})) : [],
						onset: a,
						wake: i,
						inBed: Cn($t(v), t),
						outBed: Cn(Yt(v), t),
						guiderTargets: Kf(n, a, i, S, zn(e), t)
					};
				}, new Ut(r)), A = I.naps, x = I.nonwear, N = f[0] ?? 0, T = f[f.length - 1] ?? N, M = I.onset, z = I.wake, R = _.get(n)?.calibration?.errorEnd;
				E.push({
					analysis_date: n,
					epoch_length_seconds: await le(f, tn({
						day: m.get(n),
						file: b
					}), r),
					timestamps: f,
					activity_counts: h,
					sleep_scores: y,
					choi_nonwear: Wf(l, f.length),
					sensor_nonwear: g.filter((e) => e.startTimestamp <= T && e.endTimestamp >= N).map((e) => ({
						start_ts: e.startTimestamp,
						end_ts: e.endTimestamp
					})),
					diary_onset_time: M,
					diary_wake_time: z,
					diary_nap_count: A.length,
					diary_naps: A,
					diary_nonwear: x,
					diary_in_bed_time: I.inBed,
					diary_out_bed_time: I.outBed,
					is_weekend: P.get(n) ?? null,
					guider_targets: I.guiderTargets,
					anglez: Jf(f, d, p),
					light: [],
					temperature: Vf(c, f.length),
					heart_rate: [],
					detach_nonwear: Wf(u, f.length),
					calibration_error: "number" == typeof R && Number.isFinite(R) ? R : null,
					imputed_fraction: null,
					hdcza_window: S
				});
			}
			let j, G;
			try {
				if (E.length > 0) {
					const n = {
						config: { signals: {
							night_start_hour: I,
							night_end_hour: A
						} },
						days: E
					}, a = {
						config: n.config ?? null,
						days: n.days.map((e) => ({
							analysis_date: e.analysis_date,
							epoch_length_seconds: e.epoch_length_seconds,
							timestamps: e.timestamps
						}))
					}, i = r, c = await i.getComputeIdentity(), u = await af({
						runtimeIdentity: c,
						difficultyRequestWireJson: Ip(n),
						signalsRequestWireJson: xp(n),
						sourceContentHash: b?.sourceContentHash ?? null
					}), d = [
						"timestamps",
						"activity_counts",
						"sleep_scores",
						"choi_nonwear",
						"anglez",
						"light",
						"temperature",
						"heart_rate",
						"detach_nonwear"
					], p = d.flatMap((e) => {
						const t = new Uint32Array(n.days.length + 1);
						for (const [i, s] of n.days.entries()) t[i + 1] = t[i] + s[e].length;
						const a = new ("sleep_scores" === e || "choi_nonwear" === e || "detach_nonwear" === e ? Uint8Array : Float64Array)(t[n.days.length]);
						for (const [i, s] of n.days.entries()) a.set(s[e], t[i]);
						return [a, t];
					}), f = [JSON.stringify({
						config: n.config,
						days: n.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !d.includes(e))))
					}), ...p], m = await df(e, u.generationKey, o) ?? await df(e, (await af({
						runtimeIdentity: Pf(c),
						difficultyRequestWireJson: u.difficultyRequestWireJson,
						difficultyRequestSha256: u.difficultyRequestSha256,
						signalsRequestWireJson: u.signalsRequestWireJson,
						signalsRequestSha256: u.signalsRequestSha256,
						sourceContentHash: u.sourceContentHash
					})).generationKey, o);
					if (m) j = {
						token: l,
						evidenceDb: o,
						coveredDates: [...new Set(t)].sort(),
						signalRequest: null == m.signalsByDate ? f : null,
						projectionInput: Qf(m),
						difficultyByDate: em(m),
						signalsByDate: tm(m),
						computeIdentity: m.runtimeIdentity,
						projectionRevision: Yf(m),
						evidence: Xf(m)
					};
					else {
						s?.throwIfAborted();
						const d = lm(o, u.generationKey, s, () => r.computeFileDifficulty(f));
						G = d.release;
						const p = await d.run;
						if (s?.throwIfAborted(), !Ff(c, await i.getComputeIdentity())) throw new Error("The local scoring runtime changed while difficulty was being computed. Re-run the calculation.");
						if (jf(p.byDate, n.days)) {
							const n = await async function(e) {
								try {
									(!Number.isInteger(e.fileId) || e.fileId <= 0) && $p();
									const t = await async function(e) {
										"sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || $p(), null !== e.sourceContentHash && Cp(e.sourceContentHash), jp(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || $p(), Cp(e.difficultyRequestSha256), Cp(e.signalsRequestSha256), await Bp(e.difficultyRequestWireJson, e.difficultyRequestSha256), await Bp(e.signalsRequestWireJson, e.signalsRequestSha256);
										const t = ef(e.difficultyRequestWireJson, e.signalsRequestWireJson);
										Cp(e.generationKey);
										const { generationKey: n, ...a } = e;
										return await nf(a) !== e.generationKey && $p(), t;
									}(e.identity), n = Fp(e.projectionInput), a = Fp(e.difficultyByDate), i = null == e.signalsByDate ? null : Fp(e.signalsByDate);
									tf(t, n, a, i);
									const s = await Op(n), r = await Op(a), o = null === i ? null : await Op(i);
									rf(s, e.expectedHashes?.projectionSha256), rf(r, e.expectedHashes?.difficultyResultSha256), rf(o, e.expectedHashes?.signalsResultSha256);
									const l = (/* @__PURE__ */ new Date()).toISOString(), c = e.createdAt ?? l, u = e.updatedAt ?? c;
									Dp(c), Dp(u), Date.parse(u) < Date.parse(c) && $p();
									const d = {
										fileId: e.fileId,
										generationKey: e.identity.generationKey,
										evidenceContractId: e.identity.evidenceContractId,
										difficultyMethodId: e.identity.difficultyMethodId,
										signalsMethodId: e.identity.signalsMethodId,
										requestContractId: e.identity.requestContractId,
										sourceContentHash: e.identity.sourceContentHash,
										runtimeIdentity: Fp(e.identity.runtimeIdentity),
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
									}, p = await sf(d);
									return rf(p, e.expectedHashes?.recordSha256), {
										...d,
										recordSha256: p
									};
								} catch (t) {
									if (t instanceof zp) throw t;
									return $p();
								}
							}({
								fileId: e,
								identity: u,
								projectionInput: a,
								difficultyByDate: p.byDate,
								signalsByDate: null
							});
							if (this.disposed || null == this.latestComplexityTokenByFile.get(e)) throw new Error("The local workspace changed before difficulty evidence could be saved.");
							if (this.latestComplexityTokenByFile.get(e) !== l) throw new Error("A newer local difficulty generation superseded this computation.");
							s?.throwIfAborted();
							const i = await async function(e, t = X(), n = "fresh", a) {
								"fresh" !== n && "restore" !== n && $p();
								const i = await $.waitFor(lf(e));
								return na([t.files, t.complexityEvidence], async () => {
									const e = await t.files.get(i.fileId);
									cf(i, e);
									const a = await t.complexityEvidence.where("[fileId+generationKey]").equals([i.fileId, i.generationKey]).first();
									if (a) {
										const e = await $.waitFor(lf(a));
										if (r = i, (s = e).generationKey !== r.generationKey || s.projectionSha256 !== r.projectionSha256 || s.difficultyResultSha256 !== r.difficultyResultSha256 || s.difficultyRequestSha256 !== r.difficultyRequestSha256 || s.signalsRequestSha256 !== r.signalsRequestSha256 || s.sourceContentHash !== r.sourceContentHash) throw new Rp();
										if (null !== e.signalsResultSha256 && null !== i.signalsResultSha256 && e.signalsResultSha256 !== i.signalsResultSha256) throw new Rp();
										if (null === e.signalsByDate && null !== i.signalsByDate) {
											const n = new Date(Math.max(Date.now(), Date.parse(e.createdAt))).toISOString(), a = {
												...e,
												signalsByDate: i.signalsByDate,
												signalsResultSha256: i.signalsResultSha256,
												updatedAt: n
											}, s = await $.waitFor(sf(a)), r = {
												...a,
												recordSha256: s
											};
											return await t.complexityEvidence.put(r), await uf(r, "signals_enriched", 0), {
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
										if (a.length > 5) throw new zp(!0);
										if (a.length < 5) return;
										if ("fresh" === n) return;
										a.sort((e, t) => {
											const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
											return 0 !== n ? n : (t.id ?? 0) - (e.id ?? 0);
										});
										const i = a[a.length - 1];
										if (i && Date.parse(t.createdAt) < Date.parse(i.createdAt)) throw new Ep();
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
									return await uf(c, "inserted", u), {
										record: c,
										disposition: "inserted",
										evicted: u
									};
								}, t, a);
							}(n, o, "fresh", s);
							"inserted" === i.disposition && await async function(e, t, n) {
								try {
									await zt.recordWorkspaceDurably(v.SYSTEM_RECALCULATION, {
										subject: "night_complexity_generation",
										generationKey: e.generationKey,
										difficultyResultSha256: e.difficultyResultSha256,
										dateCount: Object.keys(e.difficultyByDate).length
									}, t, n) || console.warn("[local-data-source] Complexity evidence was saved, but its audit event is still pending.");
								} catch {
									console.warn("[local-data-source] Complexity evidence was saved, but its audit event could not be recorded.");
								}
							}(i.record, o, s), j = {
								token: l,
								evidenceDb: o,
								coveredDates: [...new Set(t)].sort(),
								signalRequest: null == i.record.signalsByDate ? f : null,
								projectionInput: Qf(i.record),
								difficultyByDate: em(i.record),
								signalsByDate: tm(i.record),
								computeIdentity: i.record.runtimeIdentity,
								projectionRevision: Yf(i.record),
								evidence: Xf(i.record)
							};
						} else console.warn("[local-data-source] Night difficulty is unavailable from the current local scoring runtime."), j = {
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
				} else j = {
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
			} catch (p) {
				s?.throwIfAborted();
				const t = this.latestComplexityTokenByFile.get(e);
				if (this.disposed || null == t || t === l) throw p;
				j = await this.awaitNewerComplexitySnapshot(e, l);
			} finally {
				G?.();
			}
			s?.throwIfAborted(), c(j), this.latestComplexityTokenByFile.get(e) === l && (s?.throwIfAborted(), this.publishComplexitySnapshot(e, j, s), this.complexityFailureByFile.delete(e));
			let L = j;
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
			if (L === j && (0 === E.length || null !== j.computeIdentity)) {
				const n = [...m.values()].map(jn), a = 0 === E.length && n.some((e) => e.ggir) && n.every((e) => e.ggir || 0 === e.timestamps.length), i = {
					nightStartHour: I,
					nightEndHour: A,
					byDate: Object.fromEntries(t.map((e) => [e, U[e]?.difficulty ?? null])),
					sourceRevision: String((j.computeIdentity ?? await r.getComputeIdentity()).sourceRevision),
					...a ? { notRankableReason: "GGIR nights are not ranked by difficulty: the difficulty core reads 60 s activity counts and sleep scores, and a GGIR folder holds 5 s ENMO, anglez and SIB only." } : {}
				};
				if (JSON.stringify(b?.nightDifficulty) !== JSON.stringify(i)) try {
					s?.throwIfAborted(), await B(o, [o.files], () => o.files.update(e, { nightDifficulty: i }), s);
					for (const t of rm) t(e, o);
					s?.throwIfAborted();
				} catch {
					s?.throwIfAborted(), console.warn("[local-data-source] Stored night difficulty could not be written.");
				}
			}
			return z((e) => U[e]?.difficulty ?? null);
		} catch (p) {
			throw this.latestComplexityTokenByFile.get(e) === l && this.complexityFailureByFile.set(e, {
				token: l,
				error: /* @__PURE__ */ new Error("The newest local difficulty generation failed.")
			}), u(p), p;
		} finally {
			this.complexityGenerationByFile.get(e)?.token === l && this.complexityGenerationByFile.delete(e);
		}
	}
	async loadAdjacentMarkers(e, t, n) {
		const a = (await Ve(e))?.availableDates?.slice().sort() ?? [], i = a.indexOf(t);
		if (i < 0) return null;
		const s = i > 0 ? a[i - 1] ?? null : null, r = i < a.length - 1 ? a[i + 1] ?? null : null, [o, l] = await Promise.all([s ? Ie(e, s, n) : null, r ? Ie(e, r, n) : null]), c = (e) => (e?.sleepMarkers ?? []).map((e) => ({
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
		const n = X(), a = await Ct(e, t, void 0, n);
		if (0 === e) return a;
		const i = await de(e, t, n);
		return [...a, ...i].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
	}
	static isRecordInView(e, t, n) {
		return e.fileId === t && e.analysisDate === n || 0 !== t && Gt(e, t, n);
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
		const i = await this.auditRecordsForView(t, n), s = (a ? i.filter((e) => e.username === a) : i).filter((e) => "number" == typeof e.id), r = e("audit_log_csv", "local"), o = await ot(s), l = function(e) {
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
				O(String(u.id)),
				O((/* @__PURE__ */ new Date(1e3 * u.clientTimestamp)).toISOString()),
				O(u.action),
				O(Nf(null === t ? "" : Tf(t, u.action), u.action, t, l)),
				O(u.username),
				O(String(u.fileId)),
				O(u.analysisDate ?? ""),
				O(null == u.studyId ? "" : String(u.studyId)),
				O(u.sessionId),
				O(String(u.sequence)),
				O(u.eventHash ?? ""),
				O(u.previousHash ?? ""),
				O(null === t ? "" : JSON.stringify(t)),
				O(n?.basis ?? "unanchored"),
				O(void 0 === n ? "" : ce(n.state)),
				O(void 0 === n || "unanchored" === n.basis ? "" : JSON.stringify(n.state))
			].join(","));
		}
		return new Blob([`${c.join("\n")}\n`], { type: "text/csv;charset=utf-8" });
	}
	async verifyAuditChain(e, t) {
		const n = await sn();
		return {
			...await fn(n),
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
	async attachSignalsToCurrentComplexitySnapshot(e, t) {
		const n = this.complexitySnapshotByFile.get(e) ?? null;
		if (n?.token !== t.token) return n;
		if (t.signalsByDate || !t.signalRequest || !t.computeIdentity || !t.evidence || !t.evidenceDb) return t;
		const a = t.signalRequest, i = t.computeIdentity, s = t.evidence, r = t.evidenceDb, o = this.complexitySignalGenerationByFile.get(e);
		if (o?.token === t.token) return await o.promise;
		const l = (async () => {
			const n = () => this.complexitySnapshotByFile.get(e) ?? null, o = () => {
				const a = n();
				if (!a || a.token !== t.token) return a;
				const i = {
					...a,
					signalRequest: null
				};
				return this.publishComplexitySnapshot(e, i), i;
			};
			try {
				const l = h(), c = await l.getComputeIdentity();
				if (!Ff(i, c)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), o();
				const u = await l.computeFileSignals(a), d = await l.getComputeIdentity();
				if (!Ff(i, d)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), o();
				if (!jf(u.byDate, JSON.parse(a[0]).days)) throw new Error("The local scoring runtime returned incomplete night-signal evidence.");
				if (this.disposed) throw new Error("The local workspace changed before night-signal evidence could be saved.");
				const p = n();
				if (!p) return null;
				if (p.token !== t.token) return p;
				if (p.signalsByDate) return p;
				const f = await async function(e, t = X(), n) {
					(!Number.isInteger(e.fileId) || e.fileId <= 0) && $p(), Cp(e.generationKey);
					const a = Fp(e.signalsByDate), i = await Op(a);
					return rf(i, e.signalsResultSha256), na([t.files, t.complexityEvidence], async () => {
						const n = await t.complexityEvidence.where("[fileId+generationKey]").equals([e.fileId, e.generationKey]).first();
						if (!n) throw new zp();
						const s = await $.waitFor(lf(n));
						if (cf(s, await t.files.get(s.fileId)), null !== s.signalsResultSha256) {
							if (s.signalsResultSha256 !== i) throw new Rp();
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
						}, l = await $.waitFor(sf(o)), c = await $.waitFor(of({
							...o,
							recordSha256: l
						}));
						return await t.complexityEvidence.put(c), await uf(c, "signals_enriched", 0), {
							record: c,
							disposition: "signals_enriched",
							evicted: 0
						};
					}, t, n);
				}({
					fileId: e,
					generationKey: s.generationKey,
					signalsByDate: u.byDate
				}, r), m = n();
				if (!m) return null;
				if (m.token !== t.token) return m;
				if (m.signalsByDate) return m;
				const g = {
					...m,
					signalRequest: null,
					projectionInput: Qf(f.record),
					difficultyByDate: em(f.record),
					signalsByDate: tm(f.record),
					computeIdentity: f.record.runtimeIdentity,
					projectionRevision: Yf(f.record),
					evidence: Xf(f.record)
				};
				return this.publishComplexitySnapshot(e, g), g;
			} catch {
				return console.warn("[local-data-source] Full night-signal detail is temporarily unavailable; showing the retained difficulty result."), n();
			}
		})();
		this.complexitySignalGenerationByFile.set(e, {
			token: t.token,
			promise: l
		});
		try {
			return await l;
		} finally {
			this.complexitySignalGenerationByFile.get(e)?.token === t.token && this.complexitySignalGenerationByFile.delete(e);
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
				const a = await Ve(e), i = a?.availableDates?.includes(t) ? [...new Set(a.availableDates)].sort() : [t];
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
			plot_intervals: Cf(r ?? void 0, s ?? void 0, t, a?.projectionRevision ?? void 0)
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
			!1 !== a.datesStatus && vo(e, ["dates-status", t]), vo(e, ["local-dates-status", t]), !1 !== a.fileQuality && vo(e, ["file-quality"]), vo(e, ["analysis-summary"]), vo(e, ["adjacent-markers"]), vo(e, [
				"audit-log",
				t,
				n
			]), vo(e, ["actogram-markers", t]), vo(e, [
				"night-stored-variant",
				t,
				n
			]), vo(e, ["local-export-file-stats"]), vo(e, ["local-export-circadian-coverage"]), function() {
				yo += 1;
				for (const e of wo) e();
			}();
		})(a, e, t, {
			datesStatus: !p,
			fileQuality: !1
		});
		const f = c ?? X();
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
		const l = r ?? X(), c = pf(l, {
			username: n || "anonymous",
			studyId: E().scoring().selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, o);
		return await Bn({
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
			vo(e, o);
		});
	}
	async patchDateStatus(e, t, n) {
		const { fileId: a, date: i, username: s, workspaceScope: r } = t;
		for (const o of e.getQueryCache().findAll({ queryKey: ["dates-status", a] })) {
			const t = o.queryKey, l = o.state.data;
			if (t[2] === this.sourceKey && (t[3] !== r || t[4] !== (s || "anonymous"))) continue;
			if (o.state.isInvalidated) continue;
			if (!o.isActive()) {
				vo(e, t);
				continue;
			}
			const c = t[4], u = o.state.dataUpdatedAt;
			try {
				if (!l || t[2] !== this.sourceKey || "string" != typeof c) throw new Error("not a local status list");
				const s = await am(a, i, c, n);
				if (o.state.dataUpdatedAt !== u) continue;
				e.setQueryData(t, (e) => e?.map((e) => e.date === i ? {
					...e,
					...s
				} : e));
			} catch {
				vo(e, t);
			}
		}
	}
	async ingestFile(e, t, n) {
		const { processLocalFile: a } = await import("./local-processing-BqEmQbvk.js"), i = E().scoring(), s = this.operationProcessingOptions, r = s?.devicePreset ?? i.devicePreset, o = s?.skipRows ?? i.skipRows, l = s?.choiAxis ?? i.choiAxis, c = s?.columnMapping ?? i.columnMapping, u = s?.countEpochSeconds ?? (30 === i.epochLengthSeconds ? 30 : 60);
		e.name.toLowerCase().endsWith(".csv") && r && "actigraph" !== r && "geneactiv" !== r && zf(r, c);
		const d = X(), p = await a(e, r ?? "actigraph", o ?? 10, t, l ?? "vector_magnitude", c, n, {
			...s ? {} : Js(i),
			countEpochSeconds: u,
			sleepPeriodDetectionConfig: Mn(i.sleepPeriodDetection),
			...this.operationProcessingOptions
		});
		return p.alreadyImported || (cm(p.fileId, d, void 0, n), function(e, t, n) {
			Q({
				kind: V.PHYSICAL_ACTIVITY,
				key: `${V.PHYSICAL_ACTIVITY}:${String(e)}`,
				label: "Store activity answers",
				workspaceId: t.name,
				signal: n,
				rerun: !0,
				run: (n) => ln(async (a) => {
					const [{ computeLocalPhysicalActivityAnalysis: i, physicalActivityStoreAnalysisOptions: s }, { createPhysicalActivityWorkspaceRepository: r, loadPhysicalActivityWorkspaceDays: o }] = await Promise.all([import("./local-physical-activity-analysis-epa7o19p.js"), import("./physical-activity-workspace-days-BGbeS-4o.js")]);
					if (n.signal.throwIfAborted(), n.progress(0, 2), X() !== t) return;
					const l = s(E().scoring());
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
		return (t ? await Dn(e, t) : await $e(e)).map($f);
	}
};
const gm = [
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
], ym = gm.filter((e) => "observed" !== e && "technically_unusable" !== e && "corrupt" !== e), wm = [
	"insufficient_still_windows",
	"required_calibration_evidence_unavailable",
	"calibration_evidence_unusable"
];
function _m(e, t, n, a) {
	const i = (/* @__PURE__ */ new Date()).toISOString(), s = function(e, t) {
		if (!e) return null;
		const n = function(e) {
			const t = [], { resolution_id: n, factory_parameters_availability: a, factory_parameters_artifact: i, auto_calibration_availability: s, auto_calibration_execution: r, selected_source: o, fallback_source: l, fallback_reason: c, fallback_policy_execution: u, refusal: d } = e;
			/\S/.test(n) || t.push("resolution_id must be non-blank"), gm.includes(a) || t.push(`factory_parameters_availability '${a}' is not an ObservationAvailability`), gm.includes(s) || t.push(`auto_calibration_availability '${s}' is not an ObservationAvailability`);
			const p = [
				o,
				l,
				d
			].filter((e) => void 0 !== e).length;
			if (1 !== p && t.push(`exactly one of selected_source/fallback_source/refusal is required, found ${String(p)}`), "observed" === a && void 0 === i && t.push("observed factory_parameters requires factory_parameters_artifact"), "observed" !== a && void 0 !== i && t.push("non-observed factory_parameters must not carry factory_parameters_artifact"), "observed" === s && void 0 === r && t.push("observed auto_calibration requires auto_calibration_execution"), "observed" !== s && void 0 !== r && t.push("non-observed auto_calibration must not carry auto_calibration_execution"), "factory_parameters" === o && "observed" !== a && t.push("selected_source=factory_parameters requires observed factory evidence"), "auto_calibration" === o && "observed" !== s && t.push("selected_source=auto_calibration requires observed auto-calibration evidence"), void 0 === l || void 0 !== c && void 0 !== u || t.push("fallback_source requires fallback_reason and fallback_policy_execution"), void 0 !== l || void 0 === c && void 0 === u || t.push("fallback provenance is only allowed alongside fallback_source"), d) {
				wm.includes(d.code) || t.push(`refusal.code '${d.code}' is not a CalibrationRefusalCode`), "insufficient_still_windows" === d.code && ("auto_calibration" !== d.blocked_source && t.push("insufficient_still_windows must block auto_calibration"), "technically_unusable" !== d.availability && t.push("insufficient_still_windows must use availability technically_unusable")), "required_calibration_evidence_unavailable" !== d.code || ym.includes(d.availability) || t.push(`required_calibration_evidence_unavailable cannot use availability '${d.availability}'`), "calibration_evidence_unusable" === d.code && "technically_unusable" !== d.availability && "corrupt" !== d.availability && t.push(`calibration_evidence_unusable cannot use availability '${d.availability}'`);
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
const vm = "Re-import this file to compute GGIR's invalid mask.", bm = "Hip HDCZA needs the longitudinal angle (anglex or angley), which this recording lacks on GGIR's grid; no night was placed.", Sm = "nonwear_detector_unavailable";
function km(e) {
	return e.isInvalidNight || e.sleepMarkers.some((e) => function(e, t = !1) {
		return "auto" !== e.source || function(e, t = !1) {
			if (!0 === e.edited || t) return !0;
			const n = e.placement;
			return go(e.onsetTimestamp, n?.onset_timestamp) || go(e.offsetTimestamp, n?.offset_timestamp);
		}(e, t);
	}(e));
}
async function Im(e, t, n, a) {
	return e.nightIntervalOverlap(t, n, Float64Array.from(a, ([e]) => e), Float64Array.from(a, ([, e]) => e), Float64Array.from(a, ([, , e]) => void 0 !== e && void 0 === e.unavailable ? e.weight : 0));
}
function Am(e, t) {
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
async function xm(e, t, n, a) {
	const i = a.map(async ([, , a]) => {
		if (!a?.memberFlags || !a.timestamps) return [];
		const { memberFlags: i } = a, s = await e.epochsOverlapping(Float64Array.from(a.timestamps).subarray(0, i.length), 60, t, n);
		return s ? e.nonwearContributors([...i], Dt(a.detectors), s[0], s[1]) : [];
	});
	return Dt([...new Set((await Promise.all(i)).flat())]);
}
async function Nm(e, t, n, a, i, s, r) {
	const o = ya(t, n), l = Object.fromEntries(Object.entries(o).map(([e, t]) => [e, new Uint8Array(t)])), c = await pt(e, { day: t }, r), u = await da(i, l, {
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
async function Tm(e, t, n = [], a = [], i = {}, s = null, r = h()) {
	const o = [], l = n.map(([e, t]) => ({
		startTimestamp: e,
		endTimestamp: t
	}));
	for (const [c, u] of Object.entries(e)) {
		const e = t[c]?.timestamps;
		e && 0 !== e.length && o.push(...await Nm(e, {
			nonwearResults: u.nonwear.buffer,
			nonwearResultsChoi2011: u.nonwearChoi2011?.buffer ?? null,
			detachNonwear: u.detachNonwear?.buffer ?? null,
			...i[c]
		}, "", l, a, s, r));
	}
	return o;
}
async function Mm(e, t, n, a = pe, i) {
	return ke((i) => {
		if (!e) return [];
		const s = [];
		for (const { start: r, end: o } of Ee(e)) {
			if (!r || !o) continue;
			const e = i.resolveSpan(r, o, t, Ue.daytime, a);
			e && s.push({
				markerType: l.NAP,
				markerIndex: n + s.length + 1,
				onsetTimestamp: e[0],
				offsetTimestamp: e[1]
			});
		}
		return s;
	}, new Ut(i));
}
function zm(e) {
	const t = e instanceof Error ? e.message : "";
	return t.startsWith("runGgirPart3:") ? t : t.includes("timed out") ? `it timed out after ${String(j / 6e4)} minutes` : t.includes("is not a function") ? "this build's actours WASM has no runGgirPart3 export" : "the actours WASM runtime failed (out of memory or a Rust panic)";
}
async function Rm(e, t, n, a = [], i = /* @__PURE__ */ new Map(), s, r, o, c = "wrist", u = X(), d, p, f, m, g, w) {
	const _ = u, v = r?.ggirConfig ?? await Zr(_), b = t.length;
	if (0 === b) return null;
	const S = i.values().next().value;
	S && Xe(e, S.importMappingProvenance);
	const k = p ?? h(), I = f ?? (() => y(k)), x = await Io(c, s?.variant, k), N = x.variant, T = x.sensorLocation, M = {
		...o ?? {},
		haspt_variant: N,
		hdcza_proposal_revision: 6,
		ggir_config_sha256: v.sha256
	}, z = r?.angley5s, R = r?.anglex5s, $ = z && z.length === b ? z : void 0, D = R && R.length === b ? R : void 0, P = r?.invalid5s?.length === b ? r.invalid5s : void 0, F = void 0 !== g && void 0 !== P;
	if (void 0 === P) return vm;
	const O = "hip" === T && !$ && !D;
	if (O && (console.warn("[local-processing] Hip HDCZA was skipped because no aligned longitudinal axis was available."), !F)) return bm;
	let B = !1;
	const G = r?.dstRuns ?? [], L = P, U = r?.activity5s?.length === b ? r.activity5s : void 0;
	K(d, "before local HASPT placement");
	const H = await Y(k, (e) => e.runGgirPart3({
		anglez: t,
		ggirConfigCsv: v.csvText,
		hasibCounts: Lt(v.csvText, r?.zeroCrossings5s),
		...D ? { anglex: D } : {},
		...$ ? { angley: $ } : {},
		...U ? { enmo: U } : {},
		invalid: L,
		startTsEpochSec: n,
		hasptAlgo: N,
		...void 0 !== s?.config ? { hasptConfig: s.config } : {},
		..."hip" !== T || D && $ ? {} : { longitudinalAxis: $ ? 2 : 1 },
		...r?.timezone ? { timezone: r.timezone } : {}
	}), {
		ms: j,
		label: `local ${N} placement`,
		signal: d,
		cancel: I
	}).then((e) => ({
		result: e,
		failure: null
	}), (e) => (C(e, d, `local ${N} placement`), console.warn("[local-processing] GGIR Part 3 failed for this recording."), {
		result: null,
		failure: zm(e)
	}));
	if (H.result && F && g(H.result.part3Sib5s), O) return bm;
	if (!H.result) return `GGIR Part 3 (${N}) failed: ${H.failure}`;
	const Z = H.result.part3SptNights, q = await k.ggirIndicesToWallClockMs(Uint32Array.from(Z.flatMap((e) => [e.onsetIdx, e.wakeIdx])), 1e3 * n, [...G], r?.wallClockMs ? Float64Array.from(r.wallClockMs) : void 0), V = Z.map((e, t) => ({
		onsetTimestamp: q[2 * t] / 1e3,
		offsetTimestamp: q[2 * t + 1] / 1e3,
		analysisDate: e.analysisDate
	}));
	for (const { onsetTimestamp: h, offsetTimestamp: y, analysisDate: j } of V) {
		K(d, "before local HASPT marker placement");
		const t = await Ie(e, j, et, A.VAN_HEES_2015, null, _);
		if (t && km(t)) continue;
		const n = await Im(k, h, y, a), s = Am(n.seconds, a), r = 0 === s.available.length && 0 === s.dropped.length ? M : {
			...M,
			nonwear_detectors_available: s.available,
			nonwear_detectors_dropped: s.dropped.map(({ detector: e, reason: t }) => ({
				detector: e,
				reason: t
			}))
		}, u = ua(s.dropped, "ggir"), p = (e) => [e, ...u].join("; "), f = n.weightedFraction, g = f > 0 && s.available.length > 1 ? await xm(k, h, y, a) : null, v = await Mm(i.get(j) ?? null, j, 1, zn(e), k), b = ta(null, c), S = [{
			markerType: l.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: h,
			offsetTimestamp: y
		}, ...v].map((e) => ({
			...e,
			source: "auto",
			settingsHash: b
		}));
		K(d, "before local HASPT marker persistence"), await E().nights.writeHeadless({
			signal: d,
			fileId: e,
			date: j,
			expected: Gn(t),
			username: "auto_score",
			sleepMarkers: S,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p(`${N} SPT: ${Bt(h)} → ${Bt(y)}` + (v.length > 0 ? `; ${v.length} diary nap(s)` : "") + (f > 0 ? `; selected-detector nonwear overlap ${Math.round(100 * f)}%` : "") + (g ? ` from ${ha(g, s.available.length)}` : "")),
			algorithm: A.VAN_HEES_2015,
			sleepPeriodDetectionConfig: r
		}, _, {
			...m ? { binding: m } : {},
			events: () => m ? [{
				action: "auto_score_applied",
				payload: Ln({
					algorithm: A.VAN_HEES_2015,
					sleepPeriodDetection: o ?? null,
					sleepCount: 1,
					napCount: v.length,
					markers: S
				})
			}] : []
		}).then(() => !0, (e) => (C(e, d, "local HASPT marker persistence"), console.warn("[local-processing] HDCZA marker persistence failed."), B = !0, !1)) && w?.(j);
	}
	return B ? "one or more auto-marker writes failed" : null;
}
const Em = /* @__PURE__ */ new Set([
	2,
	5,
	6
]);
function $m(e) {
	return !1 !== e.imputeTimegaps && (null == e.dataFormat || Em.has(e.dataFormat)) && (null == e.configtz || e.configtz === e.desiredtz);
}
function Cm(e) {
	return `GGIR zone ${e} from the GT3X info.txt TimeZone: the app's assumption, since GGIR takes desiredtz and configtz from its own settings`;
}
async function Dm(e, t, n, a, i) {
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
var Pm = class extends Error {
	name = "GgirImportRefusal";
	category;
	constructor(e) {
		super(gt(e)), this.category = e;
	}
};
function Fm(e, t) {
	const n = gn(e);
	if (n && (n.notRead && n.notRead.length > 0 && t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR output",
		warning: n.notRead.map((e) => `not read: ${e.path}: ${e.reason}.`).join(" ")
	}), n.refusedNotRead)) throw new Pm("ggir-not-read");
}
function Om(e, t) {
	const { username: n, selectedStudyId: a } = E().scoring();
	return zt.captureWorkspaceBinding(e, {
		signal: t,
		username: n,
		studyId: a
	});
}
const jm = /* @__PURE__ */ new WeakMap();
async function Bm(e, t, n, a) {
	const i = e.timestampsMs.length;
	if (0 === i || e.enmo5s.length !== i || e.anglez5s.length !== i) throw new Error("GGIR meta RData did not contain aligned metashort timestamp, ENMO, and anglez columns.");
	const s = {
		desiredtz: e.desiredtz ?? void 0,
		dataFormat: e.inspection?.dformc ?? void 0,
		...a ? It(await n.ggirConfigValues(a)) : {}
	}, { runs: r, storedMs: o, steps: l } = await n.wallClockDstPlaceholders(e.timestampsMs, 1e3 * e.epochSeconds, $m(s)), c = o.filter((e) => !Number.isNaN(e)), u = (e.timestampsMs[0] ?? 0) / 1e3, d = t?.sources.ms2 ? t.nonwear : e.nonwearShort, p = {
		...d.length === i ? { nonwear: d } : {},
		...e.invalidShort.length === e.timestampsMs.length ? { invalid: e.invalidShort } : {}
	}, f = t ? t.sources.ms3 ? t.sib : void 0 : e.part3Sib5s?.length === i ? e.part3Sib5s : void 0, m = await vs(n, o, e.enmo5s, e.anglez5s, {
		anglex: e.anglex5s ?? void 0,
		angley: e.angley5s ?? void 0,
		...p,
		...t?.sources.ms2 ? { invalid: t.invalid } : {},
		...f ? { sib: f } : {}
	});
	if (t && (Wn(t.sleepWindows), t.sources.ms3 && t.sib.length !== i || t.sources.ms2 && (t.invalid.length !== i || t.nonwear.length > 0 && t.nonwear.length !== i))) throw new Error("GGIR Parts 2–3 do not cover the same 5 s epochs as Part 1.");
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
const Gm = /* @__PURE__ */ new WeakMap();
var Lm = class extends Error {};
const Um = /* @__PURE__ */ new WeakMap();
async function Hm(e, t, n, a = !0) {
	let i = Um.get(t);
	if (i || (i = /* @__PURE__ */ new Map(), Um.set(t, i)), i.has(e)) {
		const t = i.get(e);
		if (!(t instanceof Lm)) return t;
		if (!a) throw t;
	}
	let s = Gm.get(t);
	s || (s = /* @__PURE__ */ new Map(), Gm.set(t, s));
	const r = s.get(e);
	if (r) return r;
	const o = (async () => {
		const a = await Ve(e, t);
		if (!qt(a)) return null;
		if (0 === (await mt(e, t)).length) return null;
		const i = await t.ggirResultsBundles.get(e);
		if (!i) return null;
		const s = J(n);
		if (a?.ggirSavedNonwearSettled) return oi(i.configCsv, s);
		const r = [...(await Et(e, t)).values()].filter((e) => e.ggirTimestamps?.byteLength && e.unifiedNonwearMasks?.[lt.ggir_saved]?.byteLength !== e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), o = r.filter((e) => e.vanHeesNonwear?.byteLength === e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), l = r.filter((e) => !o.includes(e)), c = l.length ? await se(t, e) : null, u = c?.ms2 ? await s.reviewGgirResults({
			part1: new Uint8Array(c.part1),
			configCsv: c.configCsv,
			ms2: new Uint8Array(c.ms2),
			edits: [],
			crossCheck: !1
		}) : null, d = c && u?.nonwear.length ? (await Bm(await s.readGgirMeta(new Uint8Array(c.part1), null, !0), u, s, c.configCsv)).ggirByDate : null, p = [...o.map((e) => ({
			date: e.date,
			unifiedNonwearMasks: {
				...e.unifiedNonwearMasks,
				[lt.ggir_saved]: e.vanHeesNonwear
			},
			vanHeesNonwear: null
		})), ...d ? l.map((e) => {
			const t = d.get(e.date), n = new Float64Array(e.ggirTimestamps);
			if (!t?.nonwear || t.timestamps.length !== n.length || !n.every((e, n) => e === t.timestamps[n])) throw new Lm("Saved GGIR nonwear does not match the stored epoch grid.");
			return {
				date: e.date,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					[lt.ggir_saved]: new Uint8Array(t.nonwear).buffer
				},
				vanHeesNonwear: null
			};
		}) : []];
		return await B(t, [
			t.projectMeta,
			t.activityDays,
			t.physicalActivityFileSummaries,
			t.files
		], async () => {
			await Promise.all(p.map(({ date: a, ...i }) => xe(e, a, i, t, n))), await t.files.update(e, { ggirSavedNonwearSettled: !0 });
		}, n), p.length, oi(i.configCsv, s);
	})().then((t) => (i.set(e, t), t)).catch((t) => {
		throw !n?.aborted && t instanceof Lm && i.set(e, t), console.warn("[local-processing] Could not fill saved GGIR nonwear from retained ms2."), t;
	}).finally(() => {
		s.delete(e);
	});
	return s.set(e, o), o;
}
async function Zm(e, t, n, a, i) {
	const s = gn(e)?.configCsv, { n: r, startSec: o, dstRuns: l, storedMs: c, clockSteps: u, wallClockMs: d, timegaps: p, ggirSib: f, ggirByDate: m } = await Bm(t, n, a, await s?.text()), h = [...m.keys()].sort(), g = n ? await async function(e, t) {
		const n = await Promise.all(e.map(async (e) => t.has(e) || t.has(await ((e) => a.nextDate(e))(e) ?? "")));
		return e.filter((e, t) => n[t]);
	}(Jn(n), m) : [], y = g.length > 0 ? g : await $s(m, a);
	if (0 === h.length) throw new Error("GGIR meta RData did not contain any dated 5 s epochs.");
	const w = h.flatMap((e) => {
		const t = m.get(e);
		if (!t) return [];
		K(i, `saveActivityDay ${e}`);
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
			...t.nonwear ? n ? { unifiedNonwearMasks: { [lt.ggir_saved]: new Uint8Array(t.nonwear).buffer } } : { vanHeesNonwear: new Uint8Array(t.nonwear).buffer } : {},
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
		facts: await Promise.all(w.map((e) => Ot(e, a))),
		signalDates: await Yr(0, w, a).catch((e) => (i?.throwIfAborted(), In("warn", "GGIR circadian coverage store failed", Jt(e)), null)),
		placeholders: l.length > 0 ? await Dm(a, 1e3 * o, l, {
			anglez: t.anglez5s,
			enmo: t.enmo5s
		}, d) : void 0,
		summaries: n ? await Qn(n, 0, i, a) : [],
		markers: n ? await Kn(n, u, a) : void 0
	};
}
async function qm(e, t, n, a) {
	const i = a ?? await L(e, void 0, n), s = await Wt(i.fullHash, t) ?? await Sn(i.prefixHash, t, i.fullHash);
	return s?.id ? s : void 0;
}
const Vm = [
	["ms2", "stockMs2"],
	["ms3", "stockMs3"],
	["ms4", "stockMs4"],
	["ms5", "stockMs5"]
];
async function Wm(e, t, n) {
	const a = gn(t);
	if (!a) return null;
	const [i, ...s] = await Promise.all([a.configCsv.text(), ...Vm.map(([e]) => a[e]?.arrayBuffer())]), r = await a.qwindowCsv?.text();
	return n.transaction("rw", [
		n.files,
		n.ggirResultsBundles,
		n.ggirResultsBlobs,
		n.ggirCorrectedValues
	], async () => {
		const [t, o] = await Promise.all([n.ggirResultsBlobs.get(e), n.ggirResultsBundles.get(e)]);
		return t && o ? o.configCsv === i && Vm.every(([e, n], a) => ((e, t) => {
			if (void 0 === e || void 0 === t) return e === t;
			const n = new Uint8Array(e), a = new Uint8Array(t);
			return n.length === a.length && n.every((e, t) => e === a[t]);
		})(t[n] ?? t[e], s[a])) ? !a.resultsCsv || t.resultsCsv ? null : (await n.ggirResultsBundles.update(e, {
			resultsCsv: a.resultsCsv,
			...void 0 !== r && void 0 === t.qwindowCsv ? { qwindowCsv: r } : {}
		}), await n.ggirCorrectedValues.delete(e), await nn(n, [e]), "added") : "different_run" : null;
	});
}
const Jm = {
	none: "File already imported",
	added: "File already imported; GGIR's results files added",
	different_run: "File already imported; this folder holds a different GGIR run of it, so the stored one was kept"
};
async function Km(e, t, n, a, i, s, r) {
	const o = jm.get(e);
	jm.delete(e);
	const l = i?.db ?? X(), c = a?.ggirConfig ?? await Zr(l), u = s ?? h(), p = i ?? {
		db: l,
		attemptId: N(),
		auditBinding: Om(l, n),
		signal: n,
		recording: await Vr(e, n, u)
	};
	K(n, "processGgirMetaRDataFile"), Fm(e, t);
	const f = r ?? (() => {
		y(u);
	});
	t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR meta RData..."
	});
	const { prefixHash: m, fullHash: g } = o?.value?.hashes ?? await L(e, (e) => {
		t?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, n), w = await qm(e, l, n, {
		prefixHash: m,
		fullHash: g
	});
	if (w?.id) {
		const n = await Wm(w.id, e, l);
		t?.({
			phase: "complete",
			percent: 100,
			message: Jm[n ?? "none"]
		});
		const a = w.availableDates;
		return await hn(e.name, l), {
			alreadyImported: !0,
			...n ? { ggirResultsFiles: n } : {},
			fileId: w.id,
			availableDates: a,
			sourceType: w.sourceType ?? T.GGIR_5S_UPLOAD
		};
	}
	const _ = await Rn(e.name, l);
	if (_ && "incomplete" !== _.ingestState) throw new Pm(Nt);
	if (t?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing GGIR metashort and metalong..."
	}), K(n, "before reading GGIR RData"), o && "error" in o) throw o.error;
	const v = gn(e), b = o?.value?.input ?? (v ? await Vn(v) : null), S = o?.value || !b ? void 0 : await Y(u, (e) => e.prepareGgirRecording(b), {
		ms: j,
		label: "prepareGgirRecording",
		signal: n,
		cancel: f
	}), k = S && b ? (I = b, null === (A = S.cleanedNightsCsv) ? I : {
		...I,
		cleanedNightsCsv: A
	}) : b;
	var I, A;
	const x = o?.value || k ? void 0 : await e.arrayBuffer();
	K(n, "after reading GGIR RData");
	const M = o?.value?.meta ?? S?.meta ?? await Y(u, (e) => e.readGgirMeta(d(new Uint8Array(x), [x]), c.csvText, !1), {
		ms: 3e5,
		label: "readGgirMeta",
		signal: n,
		cancel: f
	}), z = function(e, t) {
		return t && !t.sources.ms4 && e?.notRead?.some((e) => /(?:^|\/)meta\/ms4\.out\//u.test(e.path)) ? {
			...t,
			importNotices: [...t.importNotices, Xn]
		} : t;
	}(v, o?.value?.review ?? S?.review ?? null), R = o?.value?.computed ?? await Zm(e, M, z, u, n), { n: E, startSec: $, dstRuns: D, storedMs: P, clockSteps: F, wallClockMs: O, timegaps: G, rdataConfig: U, availableDates: H, nightDates: Z, ggirSib: q } = R;
	t?.({
		phase: "storing",
		percent: 55,
		message: "Saving GGIR 5 s epochs..."
	});
	const V = await to(p, {
		filename: e.name,
		devicePreset: "ggir_5s_meta",
		epochLengthSeconds: M.epochSeconds,
		availableDates: Z,
		fileHash: m,
		sourceContentHash: g,
		sourceSizeBytes: e.size,
		source: "local",
		eventMarkerInstants: [],
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: T.GGIR_5S_UPLOAD,
		...$ > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * $)).toISOString() } } : {},
		sourceProfileId: "actoglance.source.ggir_rdata.v1",
		...M.desiredtz ? { ggirTimezone: M.desiredtz } : {},
		...D.length + F.length > 0 ? { ggirClockBasis: (W = G, J = null != U, $m(W) ? `GGIR's imputed fall-back hour left out (${J ? "config.csv: imputeTimegaps TRUE, configtz = desiredtz" : "no config.csv, so GGIR's defaults are assumed"})` : `GGIR's repeated fall-back hour kept as recorded data (${!1 === W.imputeTimegaps ? "imputeTimegaps = FALSE" : null == W.dataFormat || Em.has(W.dataFormat) ? `configtz ${W.configtz ?? ""} differs from desiredtz ${W.desiredtz ?? ""}` : `GGIR does not gap-impute data format ${String(W.dataFormat)}`})`) } : {},
		...F.length > 0 ? { ggirClockSteps: F } : {},
		...D.length > 0 ? { ggirDstPlaceholders: R.placeholders } : {}
	}, u);
	var W, J;
	if ("already_complete" === V.kind) {
		const t = V.record.id;
		if (null == t) throw new Error("Completed local import identity is invalid.");
		const n = await Wm(t, e, l);
		return await hn(e.name, l), {
			alreadyImported: !0,
			...n ? { ggirResultsFiles: n } : {},
			fileId: t,
			availableDates: V.record.availableDates,
			sourceType: V.record.sourceType ?? T.GGIR_5S_UPLOAD
		};
	}
	const Q = V.guard.fileId;
	let ee = null, te = !1;
	const ne = !z && !q, ae = await v?.qwindowCsv?.text();
	if (z && k) try {
		const t = k.configCsv ? await Zt(k.configCsv, u) : void 0;
		if (await no(p), await Ze(R.summaries.map((e) => ({
			...e,
			fileId: Q
		})), l, n), await B(l, [l.files, l.ggirResultsBundles], async () => {
			await l.ggirResultsBundles.put(Yn(Q, v?.recordingFile ?? e.name, k, z, {
				part2Reports: v?.part2Reports,
				personReports: v?.personReports,
				qwindowCsv: ae,
				resultsCsv: v?.resultsCsv
			})), await l.files.update(Q, {
				ggirBundleRevision: crypto.randomUUID(),
				ggirSavedNonwearSettled: !0,
				...t ? { ggirNonwearDetector: t } : {}
			});
		}, n), !await Zn(Q, z, po(a, p.recording), l, !0, F, n, R.markers)) throw new Error("GGIR results markers could not be saved.");
	} catch (me) {
		throw await io(p), me;
	}
	const ie = M.invalidShort.length === E ? M.invalidShort : null, se = z ? null : await Y(u, (e) => e.runGgirFromEpoch({
		source: "ggir_part1_rdata",
		invalidMask: ie ? "ggir_part2" : "none"
	}, M.anglez5s, M.enmo5s, $, ie ?? new Uint8Array(E), M.desiredtz ?? void 0, c.csvText).catch((e) => (C(e, n, "runGgirFromEpoch (GGIR RData)"), In("warn", "GGIR epoch analysis failed", Jt(e)), te = !0, null)), {
		ms: j,
		label: "runGgirFromEpoch (GGIR RData)",
		signal: n,
		cancel: f
	});
	if (se?.days?.length) {
		const e = _m(se.days, Q, void 0, c);
		await no(p), await Ze(e, l, n).catch((e) => {
			In("warn", "GGIR daily summary store failed", Jt(e)), te = !0;
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
	}(F.length > 0 ? P : M.timestampsMs, M.nonwearShort), oe = new Map((z ? [] : await Ne(Q, l)).map((e) => [e.analysisDate, e])), le = M.anglez5sImputed?.length === E ? M.anglez5sImputed : M.anglez5s, ce = M.enmo5sImputed?.length === E ? M.enmo5sImputed : M.enmo5s;
	ee = z ? ee : await Rm(Q, le, $, re, oe, a?.hasptVariant, {
		activity5s: ce,
		...ie ? { invalid5s: ie } : {},
		dstRuns: D,
		wallClockMs: O,
		...M.desiredtz ? { timezone: M.desiredtz } : {}
	}, sa(a?.sleepPeriodDetectionConfig, ma), po(a, p.recording), l, n, u, f, p.auditBinding);
	const ue = R.dayRecords.map((e) => ({
		...e,
		fileId: Q
	}));
	let de = !1;
	await no(p);
	const pe = (await it(ue, l, R.facts, n).catch((e) => (In("warn", "GGIR activity day store failed", Jt(e)), Qi(e, "saveActivityDay (GGIR RData)"), de = !0, []))).length;
	if (!de && R.signalDates && await Pe(Q, H, R.signalDates, l, n).catch((e) => {
		n?.throwIfAborted(), In("warn", "GGIR circadian coverage store failed", Jt(e));
	}), de || pe !== H.length || 0 === pe) throw await io(p), /* @__PURE__ */ new Error("Could not save any GGIR RData epochs — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	K(n, "before completing GGIR RData ingest"), await ao(p);
	const fe = [
		...z?.configWarnings ?? [],
		...z?.importNotices ?? [],
		z?.sources.ms4 && Un(z),
		v && !v.resultsCsv && "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.",
		de && "One or more days of GGIR RData epochs could not be saved.",
		ee && (z ? "GGIR results markers could not be saved." : "Sleep window detection (HDCZA) could not place auto-markers."),
		te && (z ? "GGIR source summaries could not be saved." : "GGIR daily summaries could not be computed or saved for this GGIR RData file."),
		ne && "GGIR HASIB sleep/wake flags could not be computed."
	].filter(Boolean).join(" ");
	return t?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete",
		...fe ? { warning: fe } : {}
	}), {
		fileId: Q,
		availableDates: Z,
		sourceType: T.GGIR_5S_UPLOAD,
		...z ? { ggir: {
			...(await import("./ggir-results-import-CdpuBDos.js").then((e) => e.u)).ggirImportCounts(z, qn(v?.part2Reports, z, v?.recordingFile ?? e.name)),
			bodySite: (await Ve(Q, l))?.recording?.bodySite
		} } : {}
	};
}
async function Ym(e, t, n, a, i, s, r) {
	const o = s?.db ?? X(), l = r ?? J(i), c = s ?? {
		db: o,
		attemptId: N(),
		auditBinding: Om(o, i),
		signal: i,
		recording: await Vr(e, i, l)
	};
	K(i, "processMappedMimsCsvFile"), a?.({
		phase: "reading",
		percent: 0,
		message: "Reading mapped MIMS CSV..."
	});
	const { prefixHash: u, fullHash: d } = await L(e, (e) => {
		a?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, i), p = await qm(e, o, i, {
		prefixHash: u,
		fullHash: d
	});
	if (p?.id) {
		a?.({
			phase: "complete",
			percent: 100,
			message: "File already imported"
		});
		const e = p.availableDates;
		return {
			alreadyImported: !0,
			fileId: p.id,
			availableDates: e,
			sourceType: p.sourceType ?? T.EPOCHS_60S
		};
	}
	const f = await Rn(e.name, o);
	if (f && "incomplete" !== f.ingestState) throw new Xt();
	a?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing mapped MIMS columns..."
	}), K(i, "before reading mapped MIMS CSV");
	const m = await async function(e, t, n, a) {
		const i = re(await e.text()), s = ne(i);
		if (s.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
		const r = s.records, o = r[t]?.text;
		if (!o) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
		const l = te(o), c = G(o, l), u = ss(n, c);
		if (u.length > 0) throw new Error(Ci(u));
		const d = Ds(c, n.datetime_column), p = Ds(c, n.date_column), f = Ds(c, n.time_column), m = Ds(c, n.mims_unit_column), g = Ds(c, n.mims_unit_x_column), y = Ds(c, n.mims_unit_y_column), w = Ds(c, n.mims_unit_z_column), _ = [], v = [], b = [], S = [], k = [], I = [];
		for (let h = t + 2; h <= r.length; h++) {
			const e = r[h - 1];
			if (!e?.text.trim()) continue;
			const t = G(e.text, l);
			I.push({
				sourceRow: e.sourceRow,
				row: t,
				label: Gs(t, d, p, f)
			});
		}
		const A = await (a ?? h()).sourceLabelsWallClockMs(I.map(({ label: e }) => e)), x = I.findIndex((e, t) => !Number.isFinite(A[t] ?? NaN));
		if (x >= 0) throw new Error(`Could not parse timestamp on row ${String(I[x].sourceRow)} of the mapped MIMS CSV.`);
		for (const [h, { row: N }] of I.entries()) _.push(A[h]), v.push(Ls(N, m)), b.push(Ls(N, g)), S.push(Ls(N, y)), k.push(Ls(N, w));
		if (0 === _.length) throw new Error("The mapped MIMS CSV did not contain any data rows.");
		return {
			timestampsMs: new Float64Array(_),
			mimsUnit: null === m ? /* @__PURE__ */ new Float64Array() : new Float64Array(v),
			mimsUnitX: null === g ? /* @__PURE__ */ new Float64Array() : new Float64Array(b),
			mimsUnitY: null === y ? /* @__PURE__ */ new Float64Array() : new Float64Array(S),
			mimsUnitZ: null === w ? /* @__PURE__ */ new Float64Array() : new Float64Array(k)
		};
	}(e, t, n, l);
	K(i, "after reading mapped MIMS CSV");
	const g = T.EPOCHS_60S, y = await async function(e, t) {
		const n = /* @__PURE__ */ new Map(), a = t.timestampsMs.length, i = Us(t.mimsUnit, a), s = Us(t.mimsUnitX, a), r = Us(t.mimsUnitY, a), o = Us(t.mimsUnitZ, a), l = Float64Array.from(t.timestampsMs, (e) => e / 1e3);
		for (const [c, u] of await ms(e, l)) n.set(c, {
			timestamps: hs(l, u, 0),
			...i ? { mimsUnit: hs(i, u, NaN) } : {},
			...s ? { mimsUnitX: hs(s, u, NaN) } : {},
			...r ? { mimsUnitY: hs(r, u, NaN) } : {},
			...o ? { mimsUnitZ: hs(o, u, NaN) } : {}
		});
		return n;
	}(l, m), w = [...y.keys()].sort(), _ = await $s(y, l);
	a?.({
		phase: "storing",
		percent: 55,
		message: "Saving mapped MIMS epochs..."
	});
	const v = await to(c, {
		filename: e.name,
		devicePreset: "mims_metrics",
		epochLengthSeconds: 60,
		availableDates: _,
		fileHash: u,
		sourceContentHash: d,
		sourceSizeBytes: e.size,
		source: "local",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: g,
		...(m.timestampsMs[0] ?? 0) > 0 ? { recording: { effectiveTime: new Date(m.timestampsMs[0] ?? 0).toISOString() } } : {}
	}, l);
	if ("already_complete" === v.kind) {
		const e = v.record.id;
		if (null == e) throw new Error("Completed local import identity is invalid.");
		return {
			alreadyImported: !0,
			fileId: e,
			availableDates: v.record.availableDates,
			sourceType: v.record.sourceType ?? g
		};
	}
	const b = v.guard.fileId;
	let S = !1, k = 0;
	for (const h of w) {
		const e = y.get(h);
		if (!e) continue;
		K(i, `saveActivityDay ${h}`);
		const t = /* @__PURE__ */ new Float64Array();
		await no(c);
		const n = {
			fileId: b,
			date: h,
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
		await Qe(n, o, i).then(() => !0).catch((e) => (In("warn", "MIMS activity day store failed", Jt(e)), Qi(e, "saveActivityDay (mapped MIMS CSV)"), S = !0, !1)) && (k += 1, await ro(b, [n], o, l, i));
	}
	if (S || k !== w.length || 0 === k) throw await io(c), /* @__PURE__ */ new Error("Could not save any mapped MIMS data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return K(i, "before completing mapped MIMS ingest"), await ao(c), a?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete"
	}), {
		fileId: b,
		availableDates: _,
		sourceType: g
	};
}
function Xm(e) {
	const t = e.trim();
	if (!/^\d{4}-\d{2}-\d{2}/.test(t)) return null;
	const n = t.includes("	") ? "	" : ",";
	return t.split(n).length;
}
async function Qm(e, t, n) {
	const a = Math.min(e.size, 16777216);
	let i = Math.min(16384, a);
	for (;;) {
		K(t, "before reading GeneActiv CSV header");
		const s = await r(e, i, n);
		K(t, "after reading GeneActiv CSV header");
		const o = i >= a, l = s.split("\n"), c = o && i >= e.size ? l : l.slice(0, -1);
		for (const e of c) {
			const t = Xm(e);
			if (null !== t) return t >= 12;
		}
		if (o) return !1;
		i = Math.min(2 * i, a);
	}
}
export { _s as $, Rr as A, Ss as B, Ur as C, Pr as D, Or as E, js as F, xs as G, Ms as H, Fs as I, Ns as J, gs as K, Os as L, $r as M, mr as N, Lr as O, fr as P, Is as Q, Bs as R, Zr as S, jr as T, Ts as U, ks as V, As as W, fs as X, $s as Y, vs as Z, io as _, _m as a, Qi as at, Vr as b, fo as c, Xi as ct, no as d, Ji as dt, Hm as ensureSavedGgirNonwear, Es as et, co as f, Pi as ft, ao as g, oo as h, Tm as i, Qm as isGeneactivEpochCsv, es as it, Er as j, Cr as k, mo as l, Yi as lt, lo as m, Oi as mt, Cm as n, ds as nt, Rm as o, as as ot, to as p, Km as processGgirMetaRDataFile, Ym as processMappedMimsCsvFile, Di as pt, Rs as q, vm as r, Fm as refuseUnimportableGgirRecording, ps as rt, ho as s, ts as st, Dm as t, us as tt, po as u, Ki as ut, so as v, Fr as w, qr as x, Yr as y, zs as z };
