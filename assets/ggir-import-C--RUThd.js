import { h as e } from "./ggir-results-types-kmrkPkJO.js";
import { Br as t, Dr as n, Er as a, Fr as i, G as r, J as s, Kn as o, L as l, Lr as c, O as u, Qn as d, S as p, Sn as f, T as m, Tr as h, Un as g, W as y, X as w, Y as _, Yn as v, Zn as b, _n as S, _r as k, ar as I, b as A, cr as x, d as T, dr as N, f as M, fr as $, ft as R, gn as z, gr as D, h as E, hr as C, ht as O, jr as P, k as F, kr as j, l as B, lr as L, lt as G, mt as U, n as H, o as Z, ot as q, p as V, pr as W, pt as J, q as K, r as Y, rr as X, s as Q, st as ee, tt as te, ur as ne, vt as ae, xn as ie, xt as re, yt as se, z as oe } from "./background-jobs-CcuPzVgs.js";
import { $n as le, A as ce, At as ue, B as de, Bn as pe, Bt as fe, C as me, Cn as he, Ct as ge, D as ye, Dr as we, Dt as _e, E as ve, Er as be, Et as Se, Fn as ke, G as Ie, H as Ae, Hr as xe, Ht as Te, In as Ne, J as Me, Jn as $e, Jr as Re, Kr as ze, L as De, Ln as Ee, Lr as Ce, Lt as Oe, M as Pe, Mn as Fe, Mt as je, N as Be, Nr as Le, Nt as Ge, O as Ue, Or as He, Ot as Ze, P as qe, Pn as Ve, Pr as We, Pt as Je, Q as Ke, Qn as Ye, Qr as Xe, Rt as Qe, S as et, Sn as tt, Sr as nt, St as at, Tn as it, Tt as rt, U as st, Ut as ot, V as lt, Vn as ct, W as ut, Wt as dt, X as pt, Xn as ft, Y as mt, Yr as ht, Yt as gt, _ as yt, _t as wt, a as _t, ai as vt, an as bt, ar as St, b as kt, bn as It, bt as At, c as xt, cn as Tt, d as Nt, dt as Mt, ei as $t, en as Rt, et as zt, f as Dt, fr as Et, ft as Ct, g as Ot, gn as Pt, gr as Ft, gt as jt, hr as Bt, ht as Lt, i as Gt, ii as Ut, in as Ht, ir as Zt, it as qt, j as Vt, jt as Wt, k as Jt, kn as Kt, kr as Yt, kt as Xt, l as Qt, lt as en, mr as tn, n as nn, nr as an, nt as rn, o as sn, on, or as ln, ot as cn, p as un, pn as dn, pr as pn, q as fn, qt as mn, r as hn, ri as gn, rn as yn, rr as wn, rt as _n, s as vn, sr as bn, t as Sn, ti as kn, tn as In, tt as An, u as xn, ut as Tn, v as Nn, vt as Mn, w as $n, wn as Rn, wt as zn, x as Dn, xn as En, xt as Cn, y as On, yn as Pn, yt as Fn, z as jn } from "./db-DYi2WhVr.js";
import { D as Bn, E as Ln, S as Gn, T as Un, _ as Hn, b as Zn, c as qn, g as Vn, h as Wn, l as Jn, n as Kn, r as Yn, s as Xn, v as Qn, w as ea, x as ta } from "./ggir-results-import-BEI6i5ZF.js";
import { i as na, t as aa } from "./wal-BJApdd34.js";
import { C as ia, D as ra, S as sa, T as oa, a as la, b as ca, d as ua, f as da, g as pa, h as fa, i as ma, l as ha, n as ga, o as ya, p as wa, s as _a, t as va, v as ba, w as Sa, x as ka, y as Ia } from "./local-nonwear-unified-BC4_6anX.js";
import { _ as Aa, a as xa, c as Ta, d as Na, f as Ma, g as $a, h as Ra, i as za, l as Da, n as Ea, o as Ca, p as Oa, r as Pa, s as Fa, t as ja, v as Ba } from "./epoch-utils-CMvElnpF.js";
import { $ as La, A as Ga, B as Ua, C as Ha, D as Za, E as qa, G as Va, H as Wa, J as Ja, K as Ka, M as Ya, N as Xa, O as Qa, P as ei, S as ti, T as ni, U as ai, V as ii, W as ri, X as si, Y as oi, Z as li, _ as ci, b as ui, et as di, g as pi, h as fi, j as mi, k as hi, nt as gi, p as yi, q as wi, tt as _i, v as vi, x as bi, z as Si } from "./local-export-worker-DttoYNAI.js";
import { S as ki, b as Ii, d as Ai, i as xi, m as Ti, n as Ni, o as Mi, r as $i, s as Ri, w as zi, x as Di, y as Ei } from "./ingest-C9l38edL.js";
import { t as Ci } from "./valid-day-criteria-CIrFowri.js";
const Oi = "Review Data Settings > CSV Settings before opening this file.";
function Pi(e) {
	return `Column-mapped CSV mapping could not be applied: ${e.map((e) => e.message).join(" ")} ${Oi}`;
}
function Fi(e, t, n) {
	const a = Object.values(t);
	if (!a.includes(e)) throw new Error(`${n} must be one of ${a.join(", ")} (bundle reported "${e}")`);
	return e;
}
function ji(e) {
	return Fi(e, N, "temporalBasis");
}
const Bi = {
	full_calibrated_signal: "https://w3id.org/sleep-scoring-ontology/method/actours/full-pipeline-file/1",
	epoch_series_part3to5: "https://w3id.org/sleep-scoring-ontology/method/actours/ggir-epoch-parts-3-to-5/1"
}, Li = "actours.compute.file.v1", Gi = Number.MAX_SAFE_INTEGER;
function Ui(e) {
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
		if (Number.isInteger(e) && Math.abs(e) > Gi) throw new TypeError("method parameter integers must be exactly representable in IEEE-754 binary64");
		return e;
	}
	if (Array.isArray(e)) return e.map(Ui);
	if ("object" == typeof e) {
		const t = {};
		for (const [n, a] of Object.entries(e)) null != a && (t[n] = Ui(a));
		return t;
	}
	throw new TypeError("unsupported method parameter type: " + typeof e);
}
const Hi = /* @__PURE__ */ new Set([
	"id",
	"fileId",
	"createdAt",
	"updatedAt"
]);
async function Zi(e) {
	const t = [...e].sort((e, t) => e.analysisDate.localeCompare(t.analysisDate)).map((e) => St(Ui(function(e) {
		const t = {};
		for (const [n, a] of Object.entries(e)) Hi.has(n) || void 0 !== a && (t[n] = a);
		return t;
	}(e))));
	return oe(`[${t.join(",")}]`);
}
const qi = {
	accelerator: "cpu_only",
	concurrency: {
		mode: "serial",
		max_threads: null
	},
	vectorization: "baseline"
};
async function Vi(e, t = V(), n) {
	const a = t, i = await async function(e) {
		if (!/^[0-9a-f]{64}$/.test(e.sourceContentSha256)) throw new Error("sourceContentSha256 must be 64 lowercase hex characters");
		if (!Number.isInteger(e.sourceSizeBytes) || e.sourceSizeBytes < 1) throw new Error("sourceSizeBytes must be a positive integer");
		if (!/^[0-9a-f]{64}$/.test(e.runtimeBuild.artifactSha256)) throw new Error("runtimeBuild.artifactSha256 must be 64 lowercase hex characters");
		const t = e.dailyRows.length, n = 0 === t ? [] : [`daily_summary_stream:sha256:${await Zi(e.dailyRows)}`], a = qi, i = Bi[e.computePath], r = await async function(e) {
			if (!e.methodSpecificationId.trim()) throw new Error("methodSpecificationId must be nonblank");
			const t = (n = e.params, St(Ui(n)));
			var n;
			return {
				parameter_set_hash: await oe(t),
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
		}), s = e.runtimeBuild, o = s.sourceRevision ?? `${s.crateVersion}+${[...s.compiledFeatures].sort().join("+")}`, l = {
			execution_id: (c = e.fileId, u = e.computePath, `local:file-${String(c)}:actours-${u.replace(/_/g, "-")}-v1`),
			method_specification_id: i,
			method_implementation_id: `actours:${s.target}:${o}:artifact-sha256-${s.artifactSha256}:${e.computePath}`,
			parameter_set_hash: r.parameter_set_hash,
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
			source_revision: s.sourceRevision,
			semantic_profile: e.semanticProfile,
			profile_proof_status: e.profileProofStatus,
			temporal_basis: e.temporalBasis,
			compute_path: e.computePath,
			target: "wasm",
			calibration_disposition: e.calibration?.disposition ?? "skipped_disabled",
			daily_output_disposition: 0 === t ? "no_complete_daily_interval" : "complete_daily_outputs",
			diary_disposition: e.diaryDisposition,
			timestamp_grid: e.timestampGrid,
			parameter_set: r,
			execution_request: a,
			method_execution: l,
			output_row_count: t,
			runtime_build: s,
			source_digest_scope: e.sourceDigestScope
		};
	}(e), r = await async function(e) {
		return oe(St({
			execution_id: e.method_execution.execution_id,
			source_content_sha256: e.source_content_sha256,
			source_digest_scope: e.source_digest_scope,
			method_specification_id: e.method_execution.method_specification_id,
			method_implementation_id: e.method_execution.method_implementation_id,
			parameter_set_hash: e.parameter_set.parameter_set_hash,
			output_entity_ids: e.method_execution.output_entity_ids ?? [],
			output_row_count: e.output_row_count
		}));
	}(i), s = {
		attestationId: r,
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
	return T(a, [a.localExecutions], async () => {
		const e = await a.localExecutions.where("attestationId").equals(r).first();
		if (void 0 !== e?.id) {
			const t = {
				...s,
				id: e.id,
				createdAt: e.createdAt
			};
			return await a.localExecutions.put(t), t;
		}
		const t = await a.localExecutions.add(s);
		return {
			...s,
			id: t
		};
	}, n);
}
async function Wi(e, t = s()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
async function Ji(e, t = Ci, n) {
	const a = await H(n).validWearDays(Float64Array.from(e), t);
	return Array.from(a, (e) => 0 !== e);
}
async function Ki(e, t = Ci, n) {
	return H(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
}
function Yi() {
	return [
		"Could not identify file format.",
		"Use Data Settings > CSV Import for mapped vendor, GGIR, MIMS, or generic activity CSV exports.",
		"Native local ingest supports ActiGraph CSV/GT3X, GENEActiv raw CSV/.bin, GGIR meta RData, NHANES PAX80 archives, and recognized generic CSV mappings.",
		"Condor ActLumus/ActTrust TXT files require the server parser today."
	].join(" ");
}
function Xi(e, t) {
	qt(e) && c().storage.reportFull(t, "Browser storage quota was exceeded while saving local results.");
}
function Qi(e) {
	return "the local model runtime or its input contract rejected the operation";
}
function er(e) {
	return `LSTM ONNX sleep/wake scoring could not be computed for this raw file${e ? ` because ${e}` : ""}. Count-based scoring is intact.`;
}
function tr(e) {
	if (!e || 0 === e.length) return "";
	let t = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY, a = 0;
	for (const i of e) t = Math.min(t, i), n = Math.max(n, i), a += i;
	return ` (sleep probability min=${t.toFixed(3)}, mean=${(a / e.length).toFixed(3)}, max=${n.toFixed(3)})`;
}
function nr(e, t) {
	if (!e || 0 === e.length) return null;
	let n = 0;
	for (const a of e) n += a ? 1 : 0;
	return 0 === n ? `LSTM ONNX sleep/wake scoring produced an all-wake result${tr(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : n === e.length ? `LSTM ONNX sleep/wake scoring produced an all-sleep result${tr(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : null;
}
function ar(e, t) {
	const n = [
		...Xt(e, or, t),
		...ue(e, or),
		...je(e, or, t)
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
function ir(e, t) {
	const n = rr(e, t), a = Boolean(e.datetime_column), i = Boolean(e.date_column && e.time_column);
	return a || i || n.push({
		key: "timestamp",
		message: "Map Date/time, or map both Date and Time."
	}), e.mims_unit_column || n.push({
		key: "mims_unit_column",
		message: "Map a MIMS unit column."
	}), n;
}
function rr(e, t) {
	return [
		...Xt(e, or, t),
		...ue(e, or),
		...je(e, or, t)
	];
}
const sr = [30, 60], or = [
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
], lr = [
	["axis_x", "axisX"],
	["axis_y", "axisY"],
	["axis_z", "axisZ"],
	["vector_magnitude", "vectorMagnitude"],
	["choi_axis", "choiAxis"]
];
async function cr(e, t, n) {
	const a = lr.filter(([, e]) => (t[e]?.length ?? 0) > 0), { series: i } = await e.aggregateEpochSeries({
		target_seconds: se,
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
	}), r = (e) => Float64Array.from(i.channels.find((t) => t.name === e)?.counts ?? []), s = {
		timestamps: Float64Array.from(i.timestamps_ms, (e) => e / 1e3),
		axisY: r("axis_y"),
		vectorMagnitude: r("vector_magnitude")
	};
	for (const [o, l] of a) "axisY" !== l && "vectorMagnitude" !== l && (s[l] = r(o));
	return s;
}
async function ur(e, t, n, a) {
	const i = n.flatMap((e) => t[e] ? [[e, t[e]]] : []), r = await Promise.all(i.map(([, t]) => cr(e, t, a)));
	return Object.fromEntries(i.map(([e], t) => [e, r[t]]));
}
async function dr(e, t, n, a) {
	return 0 === t.length ? new Uint8Array(a.length) : e.projectLabelsOntoGrid(t, n, se, a);
}
async function pr(e, t, n) {
	return Array.from(await e.roundCountStorage(Float64Array.from(t), n));
}
async function fr(e, t) {
	const { dates: n, day: a } = await e.utcDayIndex(Float64Array.from(t)), i = new Map(n.map((e) => [e, []]));
	return a.forEach((e, t) => {
		const a = n[e];
		void 0 !== a && i.get(a)?.push(t);
	}), i;
}
function mr(e, t, n) {
	return t.map((t) => e[t] ?? n);
}
function hr(e) {
	const t = new Float64Array(e.reduce((e, t) => e + t.length, 0));
	let n = 0;
	for (const a of e) t.set(a, n), n += a.length;
	return t;
}
function gr(e, t, n) {
	return Float64Array.from(t, (t) => e[t] ?? n);
}
async function yr(e, t, n, a) {
	return Float64Array.from(await e.uniformTimestamps(t, 1e3 * n, a), (e) => e / 1e3);
}
async function wr(e, t, n, a) {
	if (!Number.isFinite(t) || 0 === n.length || !Number.isFinite(a) || a <= 0) return /* @__PURE__ */ new Map();
	const i = await fr(e, await yr(e, t, a, n.length));
	return new Map(Array.from(i, ([e, t]) => [e, Uint8Array.from(mr(n, t, 0))]));
}
async function _r(e, t, n, a, i = {}) {
	const r = /* @__PURE__ */ new Map();
	if (0 === t.length) return r;
	if (n.length !== t.length || a.length !== t.length) return console.warn("[local-processing] The 5 s GGIR timestamp grid does not match its ENMO/anglez series; skipping the GGIR day split rather than fabricating zeros."), r;
	const s = void 0 !== i.sib && i.sib.length === t.length;
	for (const [y, w] of [["anglex", i.anglex], ["angley", i.angley]]) if (w?.length && w.length !== t.length) throw new Error(`The GGIR ${y} series has ${String(w.length)} epochs where the 5 s grid has ${String(t.length)}.`);
	const o = Boolean(i.anglex?.length), l = Boolean(i.angley?.length), c = void 0 !== i.nonwear && i.nonwear.length === t.length, u = void 0 !== i.invalid && i.invalid.length === t.length, d = void 0 !== i.mimsUnit && i.mimsUnit.length === t.length, p = void 0 !== i.mimsUnitX && i.mimsUnitX.length === t.length, f = void 0 !== i.mimsUnitY && i.mimsUnitY.length === t.length, m = void 0 !== i.mimsUnitZ && i.mimsUnitZ.length === t.length, h = (e, t) => t.map((t) => (e[t] ?? 0) > 0 ? 1 : 0), g = Float64Array.from(t, (e) => e / 1e3);
	for (const [y, w] of await fr(e, g)) r.set(y, {
		timestamps: mr(g, w, 0),
		enmo: mr(n, w, 0),
		anglez: mr(a, w, 0),
		...o ? { anglex: mr(i.anglex, w, 0) } : {},
		...l ? { angley: mr(i.angley, w, 0) } : {},
		...s ? { sib: mr(i.sib, w, 0) } : {},
		...c ? { nonwear: h(i.nonwear, w) } : {},
		...u ? { invalid: h(i.invalid, w) } : {},
		...d ? { mimsUnit: mr(i.mimsUnit, w, NaN) } : {},
		...p ? { mimsUnitX: mr(i.mimsUnitX, w, NaN) } : {},
		...f ? { mimsUnitY: mr(i.mimsUnitY, w, NaN) } : {},
		...m ? { mimsUnitZ: mr(i.mimsUnitZ, w, NaN) } : {}
	});
	return r;
}
async function vr(e, t, n, a, i, r) {
	const s = /* @__PURE__ */ new Map();
	if (0 === t.length || !Number.isFinite(n)) return s;
	for (const [o, l] of Object.entries(a)) s.set(o, await e.foldUniformOntoGrid(n / 1e3, 30, t, Float64Array.from(l.timestamps), i, r));
	return s;
}
async function br(e, t, n, a, i) {
	const r = await vr(e, Float64Array.from(t), n, a, i, "majority_ties_sleep");
	return new Map(Array.from(r, ([e, t]) => [e, Uint8Array.from(t)]));
}
async function Sr(e, t, n, a, i) {
	const r = await vr(e, Float64Array.from(t), n, a, i, "mean");
	return new Map(Array.from(r, ([e, t]) => [e, Float32Array.from(t)]));
}
async function kr(e, t, n) {
	const a = /* @__PURE__ */ new Map();
	if (!t || 0 === t.length || null === n || !Number.isFinite(n)) return a;
	const i = await yr(e, n, 30, t.length);
	for (const [r, s] of await fr(e, i)) a.set(r, {
		timestamps: mr(i, s, 0),
		scores: s.map((e) => t[e] ? 1 : 0)
	});
	return a;
}
async function Ir(e, t, n, a, i) {
	const r = await e.foldOntoGrid(Float64Array.from(t), Float64Array.from(n), Float64Array.from(a), 1e3 * i, "finite_mean");
	return Array.from(r);
}
async function Ar(e, t, n, a, i, r, s, o, l, c, u, d) {
	return async function(e, t, n, a, i, r, s, o, l, c, u, d) {
		const p = {}, f = null != i, m = null != r && r.length > 0, h = null != s && s.length > 0, g = null != o && o.length > 0, y = null != l?.unit && l.unit.length === t.length, w = null != l?.unitX && l.unitX.length === t.length, _ = null != l?.unitY && l.unitY.length === t.length, v = null != l?.unitZ && l.unitZ.length === t.length, b = null != u && u.length === t.length, S = null != c && c.length === t.length, k = null != d && d.length === t.length;
		for (const [I, A] of await fr(e, t)) p[I] = {
			timestamps: gr(t, A, 0),
			axisY: gr(n, A, 0),
			vectorMagnitude: gr(a, A, 0),
			...h ? { axisX: gr(s, A, 0) } : {},
			...g ? { axisZ: gr(o, A, 0) } : {},
			...f ? { choiAxis: gr(i, A, 0) } : {},
			...m ? { temperature: gr(r, A, NaN) } : {},
			...y ? { mimsUnit: gr(l?.unit ?? [], A, NaN) } : {},
			...w ? { mimsUnitX: gr(l?.unitX ?? [], A, NaN) } : {},
			..._ ? { mimsUnitY: gr(l?.unitY ?? [], A, NaN) } : {},
			...v ? { mimsUnitZ: gr(l?.unitZ ?? [], A, NaN) } : {},
			...b ? { zeroCrossingX: gr(u, A, NaN) } : {},
			...S ? { zeroCrossingY: gr(c, A, NaN) } : {},
			...k ? { zeroCrossingZ: gr(d, A, NaN) } : {}
		};
		return p;
	}(e, t, await pr(e, n, 0), await pr(e, a, 2), void 0 !== s ? await pr(e, s, 0) : void 0, o, await pr(e, i, 0), await pr(e, r, 0), l, c, u, d);
}
function xr(e, t) {
	return 30 !== t && (g(e)?.hasRawAccel ?? !1);
}
async function Tr(e) {
	if (e.timestampsMs) {
		const t = 1e3 / e.sampleRate, n = e.timestampsMs[0] !== e.firstTsMs, a = e.timestampsMs.some((n, a) => Math.abs(n - e.firstTsMs - a * t) > .5 * t);
		if (n || a) return console.warn("[local-processing] Native 30-second counts were skipped because raw preparation changed the sample timeline."), null;
	}
	const t = e.cancelOperation ?? (() => {
		_(e.wasmApi);
	}), n = await Z(e.wasmApi, (t) => t.neishabouriCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: A,
		label: `neishabouriCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}), a = await Z(e.wasmApi, (t) => t.zeroCrossingCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: A,
		label: `zeroCrossingCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}).catch((t) => (m(t, e.signal, `zeroCrossingCounts 30s (${e.label})`), console.warn("[local-processing] The optional 30-second zero-crossing pass failed."), null));
	return {
		timestampsSec: await yr(e.wasmApi, e.firstTsMs, 30, n.y.length),
		neishabouri: n,
		zeroCrossing: a
	};
}
async function Nr(e, t, n) {
	const a = n.zeroCrossing, i = await Ar(e, n.timestampsSec, n.neishabouri.y, n.neishabouri.vm, n.neishabouri.x, n.neishabouri.z, void 0, void 0, void 0, a ? await pr(e, a.zcy, 0) : void 0, a ? await pr(e, a.zcx, 0) : void 0, a ? await pr(e, a.zcz, 0) : void 0);
	for (const [r, s] of Object.entries(i)) {
		const e = t[r];
		e && (e.counts30s = {
			timestamps: s.timestamps,
			axisY: s.axisY,
			vectorMagnitude: s.vectorMagnitude,
			...s.axisX ? { axisX: s.axisX } : {},
			...s.axisZ ? { axisZ: s.axisZ } : {},
			...s.zeroCrossingX ? { zeroCrossingX: s.zeroCrossingX } : {},
			...s.zeroCrossingY ? { zeroCrossingY: s.zeroCrossingY } : {},
			...s.zeroCrossingZ ? { zeroCrossingZ: s.zeroCrossingZ } : {}
		});
	}
}
const Mr = "Recording crossed a timezone boundary (a 1 h jump in the device clock). Recording times are kept as the device's wall-clock time; no timezone or daylight-saving shift is applied, so local-time metrics around the jump may be off.";
async function $r(e, t) {
	return await e.detectHourClockJumpMs(Float64Array.from(t)) ? Mr : null;
}
async function Rr(e, t, n = 60) {
	(await e.irregularInternalDays(Float64Array.from(t), n)).forEach(() => {
		console.warn("[local-processing] A possible DST transition or partial internal day was detected; review the in-app import warning.");
	});
}
async function zr(e, t, n) {
	const a = [...e], i = n && n.storedEpochSeconds < se ? n : void 0, r = i ? await Promise.all(a.map(([, e]) => async function(e, t, n) {
		const { series: a } = await e.aggregateEpochSeries({
			target_seconds: se,
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
	}(i.core, e.timestamps, i.storedEpochSeconds))) : a.map(([, e]) => e.timestamps), s = [];
	let o = Number.POSITIVE_INFINITY, l = Number.NEGATIVE_INFINITY;
	for (const [c, [u]] of a.entries()) {
		const e = r[c];
		i && 0 === e.length || (s.push(u), 0 !== e.length && (o = Math.min(o, e[0] ?? o), l = Math.max(l, e[e.length - 1] ?? l)));
	}
	return s.sort(), Number.isFinite(o) && Number.isFinite(l) ? Oe(s, o, l, void 0, t) : s;
}
function Dr(e) {
	return /[",\r\n]/.test(e) ? `"${e.replace(/"/g, "\"\"")}"` : e;
}
function Er(e, t) {
	if (!t) return null;
	const n = Wt(t), a = e.findIndex((e) => Wt(e) === n);
	return a >= 0 ? a : null;
}
function Cr(e) {
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
function Or(e, t) {
	if (e.length !== t.length) return console.warn("[local-processing] Event-marker column dropped: mapped row count differs from the parsed epoch count."), /* @__PURE__ */ new Float64Array(0);
	const n = [];
	for (let a = 0; a < e.length; a += 1) {
		const i = t[a];
		1 === e[a] && null != i && Number.isFinite(i) && n.push(i / 1e3);
	}
	return Float64Array.from(n.sort((e, t) => e - t));
}
function Pr(e, t, n) {
	const a = new Uint8Array(e.length);
	let i = 0;
	for (const r of Array.from(t)) {
		for (; i + 1 < e.length && (e[i + 1] ?? 1 / 0) <= r;) i += 1;
		const t = e[i];
		null != t && r >= t && r < t + n && (a[i] = 1);
	}
	return a;
}
function Fr(e, t) {
	const n = Date.parse(`${t}T00:00:00Z`) / 1e3, a = [];
	for (const i of Array.from(e)) i >= n && i < n + 86400 && a.push(i);
	return Float64Array.from(a);
}
async function jr(e, t, n, a) {
	p(a, "standardizing mapped CSV");
	const i = x(await e.text());
	p(a, "standardizing mapped CSV");
	const r = I(i);
	if (r.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
	const s = r.records, o = s[t]?.text;
	if (!o) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
	const l = b(o), c = X(o, l), u = ar(n, c);
	if (u.length > 0) throw new Error(Pi(u));
	const d = Er(c, n.datetime_column), f = Er(c, n.date_column), m = Er(c, n.time_column), h = Er(c, n.activity_column), g = Er(c, n.axis_x_column), y = Er(c, n.axis_z_column), w = Er(c, n.vector_magnitude_column), _ = [
		{
			header: "ENMO",
			idx: Er(c, n.enmo_column)
		},
		{
			header: "AngleZ",
			idx: Er(c, n.anglez_column)
		},
		{
			header: "GGIR_SIB",
			idx: Er(c, n.ggir_sib_column)
		},
		{
			header: "GGIR_NONWEAR",
			idx: Er(c, n.ggir_nonwear_column)
		},
		{
			header: "MIMS_UNIT",
			idx: Er(c, n.mims_unit_column)
		},
		{
			header: "MIMS_UNIT_X",
			idx: Er(c, n.mims_unit_x_column)
		},
		{
			header: "MIMS_UNIT_Y",
			idx: Er(c, n.mims_unit_y_column)
		},
		{
			header: "MIMS_UNIT_Z",
			idx: Er(c, n.mims_unit_z_column)
		}
	].filter((e) => null !== e.idx), v = Er(c, n.event_marker_column), S = null === v ? null : [];
	if (null === h) throw new Error("Column-mapped CSV mapping requires an activity/counts column before import.");
	if (null === d && (null === f || null === m)) throw new Error("Column-mapped CSV mapping requires Date/time, or both Date and Time, before import.");
	const k = null !== d ? ["Datetime", "Axis1"] : [
		"Date",
		"Time",
		"Axis1"
	];
	null !== g && k.push("Axis2"), null !== y && k.push("Axis3"), null !== w && k.push("Vector Magnitude"), k.push(..._.map((e) => e.header));
	const A = [k.join(",")];
	for (let b = t + 1; b < s.length; b += 1) {
		(b - t - 1) % 1e3 == 0 && (await Q(), p(a, "standardizing mapped CSV"));
		const e = s[b];
		if (!e.text.trim()) continue;
		const n = X(e.text, l), i = null !== d ? [n[d] ?? "", n[h] ?? ""] : [
			null === f ? "" : n[f] ?? "",
			null === m ? "" : n[m] ?? "",
			n[h] ?? ""
		];
		null !== g && i.push(n[g] ?? ""), null !== y && i.push(n[y] ?? ""), null !== w && i.push(n[w] ?? "");
		for (const t of _) i.push(n[t.idx] ?? "");
		S && null !== v && S.push(Cr(n[v])), A.push(i.map(Dr).join(","));
	}
	const T = new Blob([`${A.join("\n")}\n`], { type: "text/csv" });
	return {
		name: e.name,
		lastModified: e.lastModified,
		size: T.size,
		arrayBuffer: () => T.arrayBuffer(),
		text: () => T.text(),
		slice: (e, t) => T.slice(e, t),
		...S ? { eventMarkerRows: Uint8Array.from(S) } : {}
	};
}
function Br(e, t, n, a) {
	if (null !== t) return e[t] ?? "";
	const i = null === n ? "" : e[n] ?? "", r = null === a ? "" : e[a] ?? "";
	return `${i.trim()} ${r.trim()}`;
}
function Lr(e, t) {
	if (null === t) return NaN;
	const n = e[t]?.trim() ?? "";
	if (!n) return NaN;
	const a = Number(n);
	return Number.isFinite(a) ? a : NaN;
}
function Gr(e, t) {
	return e.length === t && e.some((e) => Number.isFinite(e)) ? e : void 0;
}
const Ur = {
	ggirHasptVariant: P.ggir_haspt_variant,
	ggirHasibVariantsEnabled: P.ggir_hasib_variants_enabled,
	ggirHasibVariants: [...P.ggir_hasib_variants],
	ggirHasibCountSource: P.ggir_hasib_count_source,
	ggirHasibCountEpochSeconds: P.ggir_hasib_count_epoch_seconds
}, Hr = new Set(n), Zr = new Set(a), qr = new Set(h);
function Vr(e) {
	const t = e ?? {}, n = t.ggir_haspt_variant, a = t.ggir_hasib_variants_enabled, i = t.ggir_hasib_variants, r = t.ggir_hasib_count_source, s = t.ggir_hasib_count_epoch_seconds, o = Array.isArray(i) ? Array.from(new Set(i.filter((e) => "string" == typeof e && Zr.has(e)))) : [...Ur.ggirHasibVariants];
	return {
		ggirHasptVariant: "string" == typeof n && Hr.has(n) ? n : Ur.ggirHasptVariant,
		ggirHasibVariantsEnabled: "boolean" == typeof a ? a : Ur.ggirHasibVariantsEnabled,
		ggirHasibVariants: o,
		ggirHasibCountSource: "string" == typeof r && qr.has(r) ? r : Ur.ggirHasibCountSource,
		ggirHasibCountEpochSeconds: "number" == typeof s && Number.isInteger(s) && s >= 1 ? s : Ur.ggirHasibCountEpochSeconds
	};
}
function Wr(e) {
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
function Jr(e) {
	return !bt(e);
}
const Kr = /* @__PURE__ */ new WeakMap();
async function Yr(e, t) {
	const n = await $i(e, t);
	return {
		data: n,
		nights: await qa(n?.actiwareIntervals, H())
	};
}
function Xr(e, t, n) {
	if (!n) return Yr(e, t);
	let a = Kr.get(n);
	return a || Kr.set(n, a = Yr(e, t)), a;
}
const Qr = {
	windowForNight: async (e) => Jr(e.file) ? async function({ fileId: e, date: t, db: n, batch: a }) {
		return ni((await Xr(e, n, a)).nights, t);
	}(e) : null,
	tables: (e) => [e.actiwareFileData],
	stampInput: async (e, t) => ({ rest: (await t.actiwareFileData.get(e))?.actiwareIntervals }),
	fingerprint: (e) => ({ actiwareRestWindow: e })
}, es = "actiware";
function ts(e) {
	return [...en(e)].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort();
}
async function ns(e, t, n) {
	try {
		const a = await t.actiwareFileData.get(e);
		if (!a?.actiwareSleepWake) return;
		const i = (await t.actiwareStatisticsInputs.get(e))?.input, r = (await t.files.get(e))?.seriesRevision ?? 0, s = ts(await t.markers.where("fileId").equals(e).toArray());
		let o = null;
		try {
			o = await yi(await qa(a.actiwareIntervals, H(n)), i, s, (e) => H(n).actiwareIntervalStatistics(e));
		} catch (wd) {
			n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), Bt("error", "Actiware statistics recalculation failed", {
				...tn(wd),
				file_id: e
			});
		}
		await M(t, [
			t.actiwareFileData,
			t.actiwareStatisticsInputs,
			t.files,
			t.markers
		], async () => {
			const n = await t.actiwareFileData.get(e), l = (await t.actiwareStatisticsInputs.get(e))?.input;
			if (!n || ((await t.files.get(e))?.seriesRevision ?? 0) !== r) return;
			if (JSON.stringify(l) !== JSON.stringify(i) || JSON.stringify(n.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
			const c = ts(await t.markers.where("fileId").equals(e).toArray());
			JSON.stringify(c) === JSON.stringify(s) && (await (null === o ? xi(t, e) : Ri(t, e, o, !1)), await sn(t, [e]));
		}, n);
	} catch (wd) {
		n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), Bt("error", "Actiware statistics recalculation failed", {
			...tn(wd),
			file_id: e
		});
		try {
			await M(t, [t.actiwareFileData, t.files], async () => {
				await xi(t, e), await sn(t, [e]);
			}, n);
		} catch {
			throw wd instanceof Error ? wd : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
		}
	}
}
async function as(e, t, n, { analysisParadigm: a, signal: r, read: s }) {
	const o = s ? s.file : await et(e, n);
	if (Jr(o)) {
		if (In(o, a) === Xe.rest_intervals) return ns(e, n, r);
		try {
			const a = await n.actiwareFileData.get(e);
			if (!a?.actiwareSleepWake) return;
			const s = (await n.actiwareStatisticsInputs.get(e))?.input, o = (await n.files.get(e))?.seriesRevision ?? 0, l = await n.markers.where("fileId").equals(e).toArray(), c = !0 === a.actiwareStatisticsNeedsRecompute, u = (e, t) => JSON.stringify(e.filter((e) => e.date === t).map((e) => [
				e.id,
				e.contentHash,
				e.lastModifiedAt,
				e.sleepMarkers
			])), d = (e) => JSON.stringify(e.map((e) => [
				e.markerType,
				e.onsetTimestamp,
				e.offsetTimestamp
			])), p = en(l.filter((e) => c || t.has(e.date))), f = c ? new Map([...[...p].map(([e, t]) => [e, t.sleepMarkers]), ...t]) : t, m = new Map([...f].flatMap(([e, t]) => {
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
				}, m, (e) => H(r).actiwareIntervalStatistics(e), H(r));
			} catch (wd) {
				r?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), Bt("error", "Actiware statistics recalculation failed", {
					...tn(wd),
					file_id: e
				});
			}
			await M(n, [
				n.actiwareFileData,
				n.actiwareStatisticsInputs,
				n.files,
				n.markers
			], async () => {
				const t = await n.actiwareFileData.get(e), l = (await n.actiwareStatisticsInputs.get(e))?.input;
				if (!t || ((await n.files.get(e))?.seriesRevision ?? 0) !== o) return;
				if (JSON.stringify(l) !== JSON.stringify(s) || JSON.stringify(t.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
				const d = await n.markers.where("fileId").equals(e).toArray(), p = new Map([...m].filter(([e]) => u(d, e) === h.get(e)));
				if (0 === p.size) return;
				if (null === g) return await xi(n, e), void await sn(n, [e]);
				const y = ci(t, g), w = y.length > 0 ? await i.waitFor(ii(y, H(r))) : void 0, _ = vi(t, g), v = _.length > 0 ? await i.waitFor(qa(_, H(r))) : void 0, b = fi(t, g, p.keys(), {
					rowDateOf: w,
					rowNights: v
				});
				await Ri(n, e, b, !0 === t.actiwareStatisticsNeedsRecompute && !(c && p.size === f.size)), await sn(n, [e]);
			}, r);
		} catch (wd) {
			r?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), Bt("error", "Actiware statistics recalculation failed", {
				...tn(wd),
				file_id: e
			});
			try {
				await M(n, [n.actiwareFileData, n.files], async () => {
					await xi(n, e), await sn(n, [e]);
				}, r);
			} catch {
				throw wd instanceof Error ? wd : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
			}
		}
	}
}
const is = "An earlier audit record is still being written. The rest interval was not changed; try again.";
async function rs(e, t, n, a) {
	return (await ss(e, n, a, (n, { core: a }) => ti(n, e.date, t, a))).sleepMarkers;
}
async function ss({ fileId: e, date: t, actor: n }, a, i, r) {
	const s = await a.actiwareFileData.get(e), o = (await a.actiwareStatisticsInputs.get(e))?.input, l = s?.actiwareSleepWake;
	if (!l || !o) throw new bi("This recording has no Actiware analysis settings, so its rest intervals cannot be edited.");
	const c = H(i), u = s?.actiwareIntervals ?? [], d = await qa(u, c), p = await r(d, {
		epochs: o.epochs,
		params: l.params,
		grid: {
			startTimestamp: l.startTimestamp,
			epochSeconds: l.epochSeconds
		},
		core: c
	}), f = [...p.intervals], m = ts(await a.markers.where("fileId").equals(e).toArray()), h = Qa(u, f), g = hi(h);
	if (0 === g.length) return {
		sleepMarkers: mi(d, t, m.includes(t)),
		removed: 0,
		history: null
	};
	const y = await yi(p, o, m, (e) => c.actiwareIntervalStatistics(e)).catch(Ai), w = wn.captureWorkspaceBinding(a, {
		username: n.username,
		studyId: n.studyId
	});
	if (!await wn.settleWritesForDb(a, w)) throw new bi(is);
	let _ = !1;
	return await M(a, [
		a.actiwareFileData,
		a.markers,
		a.files,
		a.placementResults,
		a.projectMeta,
		a.auditLog
	], async () => {
		const n = await a.actiwareFileData.get(e);
		if (JSON.stringify(n?.actiwareIntervals ?? []) !== JSON.stringify(u)) throw new bi("That rest interval changed since it was shown; reload the night.");
		_ = null === y || JSON.stringify(ts(await a.markers.where("fileId").equals(e).toArray())) !== JSON.stringify(m);
		const r = Za(n?.actiwareRemovedRests ?? [], h, f);
		await Mi(a, e, {
			intervals: f,
			removedRests: r
		}, _ ? null : y ?? []), await a.placementResults.delete(e), await Ee([e], a, i), await sn(a, [e]), await g.reduce(async (n, a) => {
			if (await n, !await wn.recordFileEventDurably({
				fileId: e,
				analysisDate: t,
				action: v.ACTIWARE_REST_EDITED,
				payload: { ...a }
			}, w)) throw new bi(is);
		}, Promise.resolve());
	}, i), _ && await ns(e, a, i), {
		sleepMarkers: mi(p, t, m.includes(t)),
		removed: h.take.filter((e) => "rest" === e.kind).length,
		history: {
			undo: (e, t = a, n) => rs(e, ei(h), t, n),
			redo: (e, t = a, n) => rs(e, h, t, n)
		}
	};
}
const os = {
	nightRecord: {
		sleepPeriodsToSave: async ({ fileId: e, date: t, isInvalidNight: n }, a, i) => Ya(a, await qa((await $i(e, i))?.actiwareIntervals, H()), t, n),
		writeEdit: function(e, t, n = V(), a) {
			return ss(e, n, a, (n, a) => Ha(n, e.date, t, a));
		}
	},
	sourceAnalysis: {
		id: es,
		stores: ["actiwareFileData", "actiwareStatisticsInputs"],
		persistIngest: Ni,
		afterRestore: async function({ notCarried: e, db: t }) {
			return (await Promise.all(e.map(async (e) => void 0 === e ? void 0 : t.actiwareFileData.get(e)))).flatMap((e) => e?.actiwareSleepWake ? [] : ["Actiware Sleep/Wake: not in this older backup and could not be rebuilt from it"]);
		},
		covers: Jr,
		followSavedNights: async function({ fileId: e, file: t, nights: n, sleepMarkersChanged: a, analysisParadigm: i, db: r, signal: s, openBatch: o }) {
			const l = a ? void 0 : await r.actiwareFileData.get(e);
			if (a || l?.actiwareStatisticsNeedsRecompute || l?.actiwareSleepWake && !l.actiwareStatistics?.length) {
				const a = o();
				if (a) {
					let e = a.savedNights.get(es);
					e || a.savedNights.set(es, e = /* @__PURE__ */ new Map());
					for (const [t, a] of n) e.set(t, a);
				} else await as(e, n, r, {
					analysisParadigm: i,
					signal: s,
					read: { file: t }
				}).catch((e) => {
					if (!s?.aborted) throw e;
				});
			}
		},
		followDeferredNights: async function({ fileId: e, nights: t, analysisParadigm: n, db: a, signal: i }) {
			try {
				await as(e, t, a, {
					analysisParadigm: n,
					signal: i
				});
			} catch (wd) {
				Bt("error", "Actiware statistics recalculation failed", {
					...tn(wd),
					file_id: e
				});
			}
		},
		proposeNight: async function({ fileId: e, date: t, file: n, options: a, sleepPeriodDetectionConfig: i, db: r, batch: s }) {
			if (a.algorithm !== L.ACTIWARE_SLEEP_WAKE) return null;
			const o = Jr(n) ? await Xr(e, r, s) : null, l = o?.data, c = o ? Xa(o.nights, t) : null, u = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(11, 19), d = l?.actiwareRestProposal?.notes?.[t], p = null !== o && Ga(o.nights, t).some((e) => "scorer" === e.origin), f = d && !p ? [`Rest proposal (SCREENS Autoscore): ${d}`] : [], { source_a: m, source_b: h, fusion_policy: g, apply_nonwear_gate: y } = Yt(Rt({
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
					marker_type: W.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: (c.additionalSleeps ?? []).map((e, t) => ({
					onset_timestamp: e.startTimestamp,
					offset_timestamp: e.endTimestamp,
					marker_type: W.NAP,
					marker_index: t + 2
				})),
				decisions: [],
				sleep_period_detection_config: w,
				notes: [`Actiware sleep interval ${u(c.sleep.startTimestamp)}–${u(c.sleep.endTimestamp)} inside rest interval ${u(c.rest.startTimestamp)}–${u(c.rest.endTimestamp)}, as Actiware sets it.`, ...f]
			};
		},
		hasScorerSettings: async (e, t) => null != (await $i(e, t))?.actiwareSleepWake,
		afterDiaryChange: {
			label: "Propose rest intervals from the new diary",
			run: async function(e, t, n) {
				try {
					await async function(e, t, n) {
						const a = await t.studySettings.where("key").equals("study").first(), i = a?.extraSettings ?? {}, r = Pt(i.actiware_rest_proposal);
						if (r.rest_autoscore !== ht.screens) return !1;
						const s = await t.files.get(e);
						if (null == s?.id || !dn(s)) return !1;
						const { reanalyzeActiwareFile: o } = await import("./reanalysis-DMOfJQJJ.js");
						return (await o({
							...s,
							id: s.id
						}, {
							paradigm: Tt(i.analysis_paradigm),
							overrides: on(i.actiware_analysis),
							proposal: r,
							hasib: Wr(Vr(i))?.hasibVariants,
							db: t,
							expectedStudyContentHash: a?.contentHash ?? null,
							services: n
						})).changed;
					}(e, t, n);
				} catch (wd) {
					throw Bt("error", "Rest proposal after the diary write failed", {
						...tn(wd),
						file_id: e
					}), new Error("The rest intervals were not proposed again from the new diary; they still follow the previous diary. Save the study settings to propose them again.", { cause: wd });
				}
			}
		},
		reanalyze: async (e, t, { db: n, expectedStudyContentHash: a, signal: r, services: s }) => {
			if (!dn(e)) return { changed: !1 };
			const { reanalyzeActiwareFile: o, ACTIWARE_NOT_RECONCILED: l } = await i.waitFor(import("./reanalysis-DMOfJQJJ.js")), c = await o(e, {
				paradigm: Tt(t.analysis_paradigm),
				overrides: on(t.actiware_analysis),
				proposal: Pt(t.actiware_rest_proposal),
				hasib: Wr(Vr(t))?.hasibVariants,
				db: n,
				...void 0 !== a ? { expectedStudyContentHash: a } : {},
				...r ? { signal: r } : {},
				services: s
			});
			return c.unavailable ? {
				...c,
				notReconciled: l
			} : c;
		}
	},
	restWindow: Qr
}, ls = {
	id: "ggir_saved_folder",
	covers: () => !0,
	stores: [],
	persistIngest: () => Promise.resolve(),
	afterRestore: () => Promise.resolve([]),
	followSavedNights: ({ fileId: e, username: t, db: n, signal: a }) => (ui(e, t, n, a), Promise.resolve())
}, cs = {
	windowForNight: async (e) => function(e) {
		const t = e?.sleepMarkers.find((e) => e.markerType === W.MAIN_SLEEP) ?? e?.sleepMarkers[0];
		return null != t?.onsetTimestamp && null != t.offsetTimestamp ? {
			startTimestamp: t.onsetTimestamp,
			endTimestamp: t.offsetTimestamp
		} : null;
	}(await e.autoScoreMarker(L.VAN_HEES_2015)),
	tables: (e) => [e.markers],
	stampInput: async (e, t) => ({ hdcza: (await t.markers.where("fileId").equals(e).toArray()).filter((e) => "auto_score" === e.username && e.algorithm === L.VAN_HEES_2015).map((e) => ({
		date: e.date,
		windows: e.sleepMarkers.map((e) => [
			e.markerType,
			e.onsetTimestamp,
			e.offsetTimestamp
		])
	})) }),
	fingerprint: (e) => ({ hdczaWindow: e ? [e.startTimestamp, e.endTimestamp] : null })
}, us = { sleepPeriodsToSave: (e, t) => Promise.resolve(t) }, ds = {
	[Xe.sleep_periods]: us,
	[Xe.rest_intervals]: os.nightRecord
}, ps = [os.sourceAnalysis, ls], fs = {
	hdcza: cs,
	actiware_rest_interval: os.restWindow
}, ms = Object.assign({
	"../assets/models/lstm_sleep_wake.onnx": "/sleep-scoring-wasm/assets/lstm_sleep_wake-CMNVV_Rk.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba-DjoYpGzg.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa--Jn4_6Dd.onnx",
	"../assets/models/student_lstm_h64_g128_from_lstm_ba.onnx": "/sleep-scoring-wasm/assets/student_lstm_h64_g128_from_lstm_ba-BZ4I7SAE.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_ba.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_ba-CK3CNFjI.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_kappa.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_kappa-Cb_N5vbO.onnx",
	"../assets/models/teacher_lstm_h128_g256_ba.onnx": "/sleep-scoring-wasm/assets/teacher_lstm_h128_g256_ba-CbSChb-h.onnx"
}), hs = ms["../assets/models/lstm_sleep_wake.onnx"] ?? null, gs = "lstm_sleep_wake_regular_best_20260626", ys = "bcaf0f2b3f35638a324fd0058ce4cbab03d8f6574cec33a7a07e3e4e0139a908", ws = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_URL, _s = "configured-url", vs = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_VERSION ?? gs, bs = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SHA256 ?? (!ws && hs ? ys : ""), Ss = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SIZE_LABEL ?? "7.4 MB model file", ks = [
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
		version: gs,
		sha256: ys,
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
var Is = class extends Error {
	constructor(e) {
		super(e), this.name = "LstmModelUnavailableError";
	}
};
function As() {
	const e = ks.flatMap((e) => {
		const t = ms[e.assetKey];
		return t ? [{
			...e,
			url: t,
			source: "bundled"
		}] : [];
	}), t = ws ? {
		id: _s,
		label: "Configured URL",
		description: "ONNX model configured by VITE_LSTM_SLEEP_WAKE_ONNX_URL.",
		url: ws,
		version: vs,
		sha256: bs || null,
		sizeLabel: Ss,
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
function xs(e = As()) {
	return ws && ws.length > 0 ? _s : e.find((e) => e.recommended)?.id ?? e[0]?.id ?? null;
}
function Ts(e) {
	const t = As(), n = e ?? xs(t);
	return (t.find((e) => e.id === n) ?? t.find((e) => e.id === xs(t))) || {
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
function Ns(e) {
	if (!Number.isFinite(e)) throw new Is("LSTM threshold must be a finite number between 0 and 1.");
	return Math.min(1, Math.max(0, e));
}
function Ms(e) {
	const t = Number.parseFloat({
		BASE_URL: "/sleep-scoring-wasm/",
		DEV: !1,
		MODE: "production",
		PROD: !0,
		SSR: !1,
		VITE_BASE_PATH: "/sleep-scoring-wasm/",
		VITE_FORCE_LOCAL_MODE: "true"
	}.VITE_LSTM_SLEEP_WAKE_THRESHOLD ?? "NaN");
	return Number.isFinite(t) ? Ns(t) : e.defaultThreshold;
}
function $s(e) {
	return null != e ? Ts(e) : ws && ws.length > 0 ? Ts(_s) : Ts();
}
async function Rs(e) {
	(function() {
		if (!("caches" in globalThis)) throw new Is("Browser Cache Storage is unavailable, so the LSTM ONNX model cannot be cached.");
	})();
	const t = $s(e), n = function(e) {
		const { url: t } = $s(e);
		if (!t) throw new Is("LSTM ONNX model is not configured. Add frontend/src/assets/models/lstm_sleep_wake.onnx or set VITE_LSTM_SLEEP_WAKE_ONNX_URL.");
		return t;
	}(t.id), a = await (await caches.open(function(e) {
		return `sleep-scoring-lstm-onnx-${e.version}`;
	}(t))).match(n);
	if (!a) throw new Is("LSTM ONNX model has not been downloaded yet.");
	return new Uint8Array(await a.arrayBuffer());
}
function zs(e) {
	const t = As(), n = e && "object" == typeof e ? e : null, a = "string" == typeof n?.modelId ? n.modelId : null, i = a && t.some((e) => e.id === a) ? a : xs(t);
	if (!i) return {
		modelId: null,
		threshold: null
	};
	const r = Ts(i), s = n?.threshold;
	return {
		modelId: i,
		threshold: "number" == typeof s && Number.isFinite(s) ? Ns(s) : Ms(r)
	};
}
function Ds(e) {
	return zs({
		modelId: e,
		threshold: null
	}).threshold ?? .5;
}
function Es(e, t) {
	if (0 === e.length) return [];
	const n = [0];
	for (let a = 1; a < e.length; a++) Math.abs(e[a] - e[a - 1] - t) > .001 && n.push(a);
	return n.map((t, a) => ({
		start: t,
		end: n[a + 1] ?? e.length
	}));
}
async function Cs(e, t, n, a = la, i = () => {
	_(e);
}) {
	const r = /* @__PURE__ */ new Map(), s = Math.min(t.x.length, t.y.length, t.z.length);
	if (0 === s || t.sampleRate <= 0) return r;
	const o = a.filter((e) => !ba(e)?.needsModel);
	if (0 === o.length) return r;
	const l = new Float64Array(3 * s);
	for (let u = 0; u < s; u++) l[3 * u] = t.x[u], l[3 * u + 1] = t.y[u], l[3 * u + 2] = t.z[u];
	p(n, `before detectNonwearUnifiedBatch(${o.join(",")})`);
	const c = await Z(e, (e) => e.detectNonwearUnifiedBatch(o, {
		raw: l,
		sampleRate: t.sampleRate,
		epochSeconds: t.epochSeconds
	}), {
		ms: A,
		label: `detectNonwearUnifiedBatch(${o.join(",")})`,
		signal: n,
		cancel: i
	}).catch((e) => (m(e, n, `detectNonwearUnifiedBatch(${o.join(",")})`), console.warn("[local-processing] A raw-signal nonwear batch failed."), null));
	if (c) for (const [u, d] of Object.entries(c)) r.set(u, d);
	return r;
}
async function Os(e, t, n, a, i, r = ga, s = () => {
	_(e);
}) {
	const o = {}, l = r.filter((e) => !ba(e)?.needsModel);
	if (0 === l.length) return o;
	const c = n.map((e) => t[e]).filter((e) => void 0 !== e), u = hr(c.map((e) => e.timestamps)), d = hr(c.map((e) => e.axisY)), f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
	for (const { start: y, end: w } of Es(u, a)) {
		const t = d.slice(y, w);
		if (0 === t.length) continue;
		p(i, "before count nonwear continuous run");
		const n = await Z(e, (e) => e.detectNonwearUnifiedBatch(l, {
			counts: t,
			epochSeconds: a
		}), {
			ms: A,
			label: "count nonwear continuous run",
			signal: i,
			cancel: s
		}).catch((e) => (m(e, i, "count nonwear continuous run"), console.warn("[local-processing] A count-based nonwear batch failed for one contiguous run."), null));
		for (const [i, r] of Object.entries(n ?? {})) {
			if (!r.available || !r.nonwear?.length) {
				f.has(i) || f.set(i, r);
				continue;
			}
			const t = await ka(r, {
				baseTsSec: u[y],
				epochTimestampsSec: u.slice(y, w),
				epochLenSec: a
			}, e), n = f.get(i)?.nonwear ?? new Uint8Array(u.length);
			n.set(t, y), f.set(i, {
				...r,
				nonwear: n,
				elementSeconds: a
			}), h.set(i, (h.get(i) ?? 0) + t.length);
		}
	}
	let g = 0;
	for (const p of n) {
		const e = t[p]?.timestamps.length ?? 0;
		0 !== e && (o[p] = new Map([...f].map(([t, n]) => {
			const a = h.get(t) === u.length;
			return [t, {
				...n,
				available: a,
				nonwear: a ? n.nonwear.slice(g, g + e) : null
			}];
		})), g += e);
	}
	return o;
}
function Ps(e) {
	return null == e ? {} : { [L.OAKLEY_1997]: { oakleyThreshold: e } };
}
async function Fs(e, t, n, a, i, r, s, o = () => {
	_(e);
}, l = {}, c = Ii) {
	if (0 === c.length) return;
	const u = a.flatMap((e) => n[e] ?? []), d = hr(u.map((e) => e.timestamps)), f = hr(u.map((e) => e.axisY)), h = {}, g = /* @__PURE__ */ new Map();
	for (const { start: _, end: v } of Es(d, i)) {
		const t = f.slice(_, v);
		if (!t || 0 === t.length) continue;
		const n = /* @__PURE__ */ new Map();
		for (const u of c) {
			const a = zi(u, i);
			if ("gate_needs_30s_epoch" === a.kind) {
				n.set(u, a.response);
				continue;
			}
			p(r, `before scoreEpochs(${u} continuous)`);
			const c = await Z(e, (e) => e.scoreEpochs(ki({
				algorithm: u,
				counts: t,
				epochSeconds: i,
				...s ? { postprocessing: s } : {},
				...l[u] ? { config: l[u] } : {}
			})), {
				ms: A,
				label: `scoreEpochs(${u} continuous)`,
				signal: r,
				cancel: o
			}).catch((e) => (m(e, r, `scoreEpochs(${u} continuous)`), console.warn("[local-processing] A descriptor-driven sleep/wake scorer failed for one contiguous run."), null));
			c && n.set(u, c);
		}
		const a = Di(n, t.length);
		for (const [e, i] of Object.entries(a)) {
			const t = h[e] ?? new Uint8Array(d.length);
			t.set(i, _), h[e] = t, g.set(e, (g.get(e) ?? 0) + i.length);
		}
	}
	const y = Object.entries(h).filter(([e]) => g.get(e) === d.length);
	let w = 0;
	for (const p of a) {
		const e = n[p], a = t[p];
		if (!e) continue;
		const i = w + e.timestamps.length;
		a && (a.unifiedSleepWake = Object.fromEntries(y.map(([e, t]) => [e, t.slice(w, i)]))), w = i;
	}
}
function js(e, t) {
	return {
		vector_magnitude: e.vectorMagnitude,
		axis_y: e.axisY,
		axis_x: e.axisX,
		axis_z: e.axisZ
	}[t];
}
async function Bs(e, t, n, a, i, r, s) {
	if (!e || !t || 0 === e.timestamps.byteLength) return;
	if ("counts_axis_y" !== ba(t)?.requiredSignal) return;
	if (ia(e, t, n)) return;
	const o = new Float64Array(e.timestamps), l = i ?? H(r), c = await Ke(o, { day: e }, l), u = ze(xe(t) ?? [], c), d = u !== c, p = async (e, t) => {
		const n = {
			timestamps: new Float64Array(e.timestamps),
			axisY: new Float64Array(t),
			vectorMagnitude: new Float64Array(t)
		};
		return d ? cr(l, n, c) : n;
	}, f = (e, t) => d ? dr(l, e, t, o) : t;
	let m;
	try {
		const i = [...(await Dt(e.fileId, a, s)).values()];
		if (va.includes(t)) {
			const t = i.filter((e) => e.timestamps.byteLength > 0 && js(e, n)).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), a = t.findIndex((t) => t.date === e.date);
			if (a < 0) return;
			const s = [];
			for (const e of t) s.push(await p(e, js(e, n)));
			let o = a, c = a;
			const h = (e, t) => e.length > 0 && t.length > 0 && Math.abs(t[0] - e[e.length - 1] - u) < .001;
			for (; o > 0 && h(s[o - 1].timestamps, s[o].timestamps);) o--;
			for (; c + 1 < s.length && h(s[c].timestamps, s[c + 1].timestamps);) c++;
			const g = s.slice(o, c + 1), y = g.slice(0, a - o).reduce((e, t) => e + t.timestamps.length, 0), w = s[a], _ = new Float64Array(g.reduce((e, t) => e + t.axisY.length, 0));
			let v = 0;
			for (const e of g) _.set(e.axisY, v), v += e.axisY.length;
			r?.throwIfAborted();
			const b = _.length > 0 ? await l.detectNonwear(_, u) : /* @__PURE__ */ new Uint8Array(0);
			r?.throwIfAborted();
			const S = _.length > 0 ? await l.detectNonwearChoi2011(_, u) : /* @__PURE__ */ new Uint8Array(0), k = (e) => f(w.timestamps, e.slice(y, y + w.timestamps.length));
			if (!d && 0 === _.byteLength) return;
			m = {
				nonwearResults: (await k(b)).buffer,
				nonwearResultsChoi2011: (await k(S)).buffer,
				nonwearChoiAxis: n
			};
		} else {
			r?.throwIfAborted();
			const n = i.filter((e) => e.timestamps.byteLength > 0 && e.axisY.byteLength > 0).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), a = {};
			for (const e of n) a[e.date] = await p(e, e.axisY);
			const s = (await Os(l, a, n.map((e) => e.date), u, r, [t]))[e.date]?.get(t);
			if (!s?.available || !s.nonwear) return;
			const d = await _a(/* @__PURE__ */ new Map([[t, {
				...s,
				nonwear: await f(a[e.date].timestamps, s.nonwear),
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
		r?.throwIfAborted(), console.warn("[local-processing] A missing nonwear mask could not be computed from stored counts.");
		return;
	}
	r?.throwIfAborted(), await De(e.fileId, e.date, m, a, r), r?.throwIfAborted(), Object.assign(e, m);
}
async function Ls(e, t, n, a, i, r = () => {
	_(e);
}) {
	const s = hr(n.map((e) => t[e].timestamps)), o = hr(n.map((e) => t[e].axisY)), l = hr(n.map((e) => t[e].choiAxis ?? t[e].vectorMagnitude)), c = Es(s, a), u = await Z(e, (e) => e.scoreAllDays(c.map(({ start: e, end: t }) => ({
		activityF64: o.slice(e, t),
		vmF64: l.slice(e, t),
		epochSeconds: a
	}))), {
		ms: A,
		label: "scoreAllDays continuous counts",
		signal: i,
		cancel: r
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
		const n = await Z(e, (e) => e.detectNonwearChoi2011(l.slice(h.start, h.end), a), {
			ms: A,
			label: "detectNonwearChoi2011 continuous counts",
			signal: i,
			cancel: r
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
function Gs(e, t) {
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
async function Us(e, t) {
	return await Qe((t) => t.recordingFacts(e), new Je(t)) ?? {};
}
async function Hs(e) {
	return ke((await ye(e))?.extraSettings);
}
async function Zs(e, t, n, a) {
	n?.throwIfAborted();
	const i = await y(e, 65536, a);
	n?.throwIfAborted();
	const r = new TextDecoder("utf-8", { fatal: !1 }).decode(i);
	for (const s of [/measurement frequency\s*[,:\t]\s*(\d+)/i, /sample rate(?:\s*hz)?\s*[,:\t]\s*(\d+)/i]) {
		const e = s.exec(r);
		if (e && e[1]) {
			const t = Number.parseInt(e[1], 10);
			if (Number.isFinite(t) && t > 0) return t;
		}
	}
	return F[t];
}
async function qs(e, t, n, a) {
	t?.throwIfAborted();
	const i = Ti(e) ? O(Ei("aw5")) : U(e.name);
	if ("none" === i) return {};
	const r = Math.max(65536, 2048);
	let s;
	try {
		s = await y(e, r, a);
	} catch {
		return {};
	}
	if (t?.throwIfAborted(), "gt3x_info_entry" === i) {
		const e = function(e) {
			const t = new DataView(e.buffer, e.byteOffset, e.byteLength);
			let n = 0;
			for (; n + 30 <= e.byteLength;) {
				if (67324752 !== t.getUint32(n, !0)) return null;
				const a = t.getUint16(n + 8, !0), i = t.getUint32(n + 18, !0), r = t.getUint16(n + 26, !0), s = n + 30 + r + t.getUint16(n + 28, !0);
				if (s > e.byteLength) return null;
				const o = s + i;
				if (new TextDecoder().decode(e.subarray(n + 30, n + 30 + r)).toLowerCase().endsWith("info.txt")) return 0 !== a || o > e.byteLength ? null : new TextDecoder("utf-8", { fatal: !1 }).decode(e.subarray(s, o));
				if (0 === i) return null;
				n = o;
			}
			return null;
		}(s);
		return null === e ? {} : await Us(e, n);
	}
	return await Us(new TextDecoder("utf-8", { fatal: !1 }).decode(s), n);
}
function Vs(e) {
	return `stored_nonwear_mask:${e}`;
}
Object.freeze([]);
const Ws = {
	temperature_epoch_stream: (e) => null != e.temperature && fa(new Float64Array(e.temperature)),
	sleep_wake_epoch_stream: (e) => null != e.algorithmResults?.[L.ACTIWARE_SLEEP_WAKE],
	device_wear_state_evidence_stream: (e) => !0 === e.actiwareOffWristChannel
};
function Js(e) {
	const t = [];
	for (const [n, a] of Object.entries(Ws)) for (const i of e) if (a(i)) {
		t.push(n);
		break;
	}
	for (const n of la) e.some((e) => null != ia(e, n, "")) && t.push(Vs(n));
	return t;
}
async function Ks(e, n, a) {
	const i = [];
	for (const t of n) {
		const n = gi(e, t);
		n && i.push(n.wire);
	}
	if (0 === i.length) return [];
	const { request: r, transfer: s } = _i(i);
	return (await a.computeCircadian(t(r, s))).day_summaries.filter((e) => e.has_signal).map((e) => e.analysis_date);
}
function Ys(e) {
	return e instanceof Error ? e : /* @__PURE__ */ new Error("Local ingest lease renewal failed.");
}
const Xs = Math.max(1e3, Math.floor(Sn / 4));
async function Qs(e) {
	void 0 !== e.heartbeatId && (clearInterval(e.heartbeatId), delete e.heartbeatId), await e.heartbeatPending, delete e.heartbeatPending;
}
async function eo(e, t, n) {
	const a = c().scoring(), i = {
		...e.recording,
		...t.recording
	}, r = e.placement ?? {
		bodySite: a.sensorLocation,
		laterality: a.participantLaterality
	}, s = await _t({
		...t,
		...t.ggirPart2Config ? { ggirNonwearDetector: await Fe(t.ggirPart2Config.csvText, n ?? H(e.signal)) } : {},
		...e.ingestProvenance ? { ingestProvenance: e.ingestProvenance } : {},
		recording: Gs(i, r)
	}, e.attemptId, e.db);
	return "started" === s.kind && (e.guard = s.guard, function(e) {
		void 0 === e.heartbeatId && (e.heartbeatId = setInterval(() => function(e) {
			const t = e.guard;
			t && void 0 === e.heartbeatError && (e.heartbeatPending = (e.heartbeatPending ?? Promise.resolve()).then(() => Ae(t, e.db)).catch((t) => {
				e.heartbeatError = t;
			}));
		}(e), Xs));
	}(e)), s;
}
async function to(e) {
	if (await e.heartbeatPending, void 0 !== e.heartbeatError) throw Ys(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new hn();
	return await Ae(t, e.db), t;
}
async function no(e) {
	if (await Qs(e), void 0 !== e.heartbeatError) throw Ys(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new hn();
	await async function(e, t = V()) {
		try {
			return await async function(e, t = V(), n) {
				const a = t;
				for (;;) {
					n?.throwIfAborted();
					const [t, i] = await Promise.all([a.files.get(e), a.sensorNonwear.where("fileId").equals(e).count()]), r = (e, t) => JSON.stringify([
						e?.id,
						e?.seriesRevision ?? 0,
						e?.exportInputRevision ?? 0,
						e?.sourceContentHash,
						e?.sourceType,
						e?.sourceProfileId,
						t
					]), s = r(t, i), o = Js([...(await Dt(e, a)).values()]), l = t ? Ka(t.sourceType, t.sourceProfileId) : null;
					if (l && z[l].capabilityFromSensorRows && !o.includes("device_wear_state_evidence_stream") && i > 0 && o.push("device_wear_state_evidence_stream"), void 0 === t?.id) return o;
					if (await M(a, [
						a.files,
						a.sensorNonwear,
						a.projectMeta
					], async () => {
						const t = await a.files.get(e);
						return r(t, await a.sensorNonwear.where("fileId").equals(e).count()) === s && (t && (i = t.resolvedCapabilities, l = o, void 0 === i || i.length !== l.length || !l.every((e) => i.includes(e)) || 4 !== t.resolvedCapabilitiesRevision) && await T(a, [a.files], () => a.files.update(e, {
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
	}(t.fileId, e.db), e.finalizedFileId = await xt(t, e.db, e.signal), delete e.guard;
}
async function ao(e, t) {
	try {
		await Qs(e);
		const t = e.guard, n = !!t && await st(t, e.db);
		t && delete e.guard, n ? (console.warn("[local-processing] Rolled back an incomplete local ingest."), e.rollbackOutcome = "rolled_back") : e.rollbackOutcome ??= "nothing_to_roll_back";
	} catch {
		console.error("[local-processing] Incomplete local ingest rollback also failed."), e.rollbackOutcome = "failed";
	}
}
function io(e, t) {
	return "object" == typeof e && null !== e && void 0 !== t.rollbackOutcome && (e.__localIngestRollbackOutcome = t.rollbackOutcome), e;
}
async function ro(e, t, n, a, i) {
	try {
		const r = await Ks(e, t, a);
		await qe(e, t.map((e) => e.date), r, n, i);
	} catch {
		i?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}
}
function so(e, t, n, a) {
	return a <= 0 ? 0 : .9 * (e - 1 + (t - e + 1) * n / 3) / a;
}
function oo({ scope: e, fileId: t, sourceContentHash: n, label: a, signalDates: i, onChunk: r }) {
	const s = [];
	let o = 0;
	const l = {
		saved: 0,
		activityFailed: !1,
		historyFailed: !1
	}, c = async () => {
		const c = s.splice(0);
		if (0 === c.length) return;
		const u = o - c.length + 1, d = o;
		r?.(u, d, 0), await to(e), r?.(u, d, 1);
		try {
			const t = c.map((e) => e.facts);
			await Ie(c.map((e) => e.day), e.db, t.every((e) => void 0 !== e) ? t : void 0, e.signal);
		} catch (m) {
			throw console.warn("[local-processing] Activity-day persistence failed."), Xi(m, `saveActivityDay (${a})`), l.activityFailed = !0, m;
		}
		l.saved += c.length;
		const p = c.map((e) => e.day.date);
		try {
			await qe(t, p, p.filter((e) => i.has(e)), e.db, e.signal);
		} catch {
			console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
		}
		r?.(u, d, 2);
		const f = c.flatMap((e) => e.history.map((t) => ({
			...t,
			date: e.day.date
		})));
		await async function(e, t, n, a, i = V(), r) {
			const s = i, o = Zt(), l = a.map((a) => {
				const i = {
					fileId: e,
					date: a.date ?? t,
					appVersion: o,
					results: a.results,
					...void 0 !== n ? { sourceContentHash: n } : {}
				};
				if (null === ot(a)) throw new Error(`Refused an algorithm run for ${String(a.algoKey ?? a.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
				return void 0 !== a.cubeConfig ? {
					...i,
					cubeConfig: a.cubeConfig
				} : {
					...i,
					algoKey: a.algoKey
				};
			});
			try {
				return await lt(l, s, r), !0;
			} catch {
				r?.throwIfAborted(), console.error("[local-processing] Algorithm history batch write failed; retrying records individually.");
			}
			let c = !1;
			for (const u of l) try {
				await de(u, s, r);
			} catch {
				r?.throwIfAborted(), c = !0, console.error("[local-processing] An algorithm history write failed; latest scoring remains available.");
				try {
					await co({
						op: "algorithm_run_put",
						fileId: e,
						payload: {
							kind: "history_write_failed",
							...ot(u),
							date: u.date,
							error: "history_write_failed"
						}
					}, s, r);
				} catch {}
			}
			return !c;
		}(t, c[0].day.date, n, f, e.db, e.signal) || (l.historyFailed = !0), r?.(u, d, 3), await Q();
	};
	return {
		state: l,
		flush: c,
		add: async (e, t, n) => {
			s.push({
				day: e,
				history: t,
				facts: n
			}), o += 1, s.length >= 8 && await c();
		}
	};
}
async function lo(e, t = V(), n) {
	const a = t;
	try {
		const t = await e.identity(), r = await mt(e.fileId, a);
		await Vi({
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
			profileProofStatus: (i = t.profileProofStatus, Fi(i, ne, "profileProofStatus")),
			temporalBasis: ji(t.temporalBasis),
			calibration: e.calibration,
			diaryDisposition: r.length > 0 ? "present" : "absent",
			timestampGrid: e.timestampGrid ?? "epoch_5s_floor_seconds",
			dailyRows: e.rows,
			appVersion: Zt(),
			startedAt: e.startedAt,
			finishedAt: e.finishedAt ?? (/* @__PURE__ */ new Date()).toISOString()
		}, a, n);
	} catch {
		n?.throwIfAborted(), console.error("[local-processing] Execution attestation write failed; day summaries remain stored.");
	}
	var i;
}
async function co(e, t = V(), n) {
	const a = t, { appendWal: i, withWalTx: r } = await import("./wal-BJApdd34.js").then((e) => e.r);
	await r([], async () => {
		await i(e);
	}, a, n);
}
function uo(e, t) {
	return Gn(void 0 === t ? void 0 : { recording: t }, e?.sensorLocation ?? P.sensor_location);
}
function po(e) {
	return function(e) {
		return sr.includes(e);
	}(e) ? e : 60;
}
function fo(e) {
	const t = zs(e?.lstmSelection);
	return {
		selection: t,
		descriptor: $s(t.modelId),
		scoreOptions: {
			modelId: t.modelId,
			...null != t.threshold ? { threshold: t.threshold } : {}
		}
	};
}
function mo(e) {
	const t = fo(e);
	return { extras: {
		lstmFeatureContract: "spectral_30s_mean_centered_v3_probabilities",
		lstmModelId: t.descriptor.id,
		lstmModelVersion: t.descriptor.version,
		lstmThreshold: String(t.selection.threshold ?? t.descriptor.defaultThreshold),
		ggirCountScorerContract: "zcy_ws3_count_epoch_v4"
	} };
}
function ho(e, t) {
	return "number" == typeof e && "number" == typeof t && e !== t;
}
let go = 0;
const yo = /* @__PURE__ */ new Set();
function wo(e, t, n) {
	if (n) {
		const e = He(n);
		if (!be(e)) return we(e);
	}
	return t ?? C.SMART;
}
function _o(e, t) {
	e.invalidateQueries({ queryKey: t }).catch((e) => {
		Bt("warn", "Query invalidation failed", {
			...tn(e),
			query_key: t.map(String).join(":")
		});
	});
}
const vo = {
	[D.RULE_1_INCLUDE_ACTIVITY]: "Included mid-sleep wake activity (continuous sleep follows)",
	[D.RULE_2_SMALL_PERIODS]: "Evaluated a small sleep period near onset",
	[D.RULE_3_EXTEND_BEFORE_DIARY]: "Extended onset backward through sleep preceding the diary marker",
	[D.RULE_4_NAP_VARIATION]: "Marked a long continuous block as a nap",
	[D.RULE_5_CHOI_SPIKE]: "Tolerated Choi-only nonwear (activity spike present in period)",
	[D.RULE_6_EQUIDISTANT]: "Chose between multiple candidate boundaries",
	[D.RULE_7_CROSS_DAY_NONWEAR]: "Applied cross-day diary nonwear pattern",
	[D.RULE_8_ONSET_BEFORE_INBED]: "Clamped onset to diary in-bed time (onset reported before in-bed)",
	[D.RULE_9_NAP_REGULARITY]: "Placed nap from this child's cross-day nap regularity (no diary nap logged)",
	[D.RULE_10_REGULARITY_OVERRIDE]: "Re-centered the sleep window on this child's cross-day sleep regularity",
	[D.RULE_11_RELIABILITY_FALLBACK]: "Diary unreliable for this night — anchored to accelerometry instead"
};
function bo(e) {
	const t = e.replace(/^rule_\d+_/, "").replace(/_/g, " ").trim();
	return 0 === t.length ? e : t.charAt(0).toUpperCase() + t.slice(1);
}
function So(e) {
	return it(e, s);
}
async function ko(e, t, n) {
	const a = n ? await n.wearSiteHasptRouting(e, t ?? void 0) : await Ne("wearSiteHasptRouting", `${e}:${t ?? ""}`, () => s().wearSiteHasptRouting(e, t ?? void 0));
	return {
		sensorLocation: a.sensorLocation,
		variant: a.variant,
		requiresLongitudinalAxis: a.requiresLongitudinalAxis,
		routedByWearSite: null == t
	};
}
function Io(e) {
	const t = Object.values(e).filter((e) => "number" == typeof e);
	return Object.entries(e).filter(([e, n]) => -1 === t.indexOf(+e)).map(([e, t]) => t);
}
function Ao(e, t = "|") {
	return e.map((e) => Vo(e)).join(t);
}
function xo(e, t) {
	return "bigint" == typeof t ? t.toString() : t;
}
Object.fromEntries(Object.values(D).map((e) => [e, vo[e] ?? bo(e)]));
var To = class {
	constructor(e) {
		this._getter = e, this._value = void 0;
	}
	get value() {
		const e = this._getter;
		return void 0 !== e && (this._value = e(), this._getter = void 0), this._value;
	}
};
function No(e) {
	return new To(e);
}
function Mo(e) {
	const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function $o(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function Ro(e) {
	const t = Object.getOwnPropertyDescriptor(e, "shape");
	return t?.get ? t.get.raw : t?.value;
}
function zo(e) {
	return Ro(e._zod.def) ?? e._zod.def.shape;
}
function Do(e, t, n) {
	Object.defineProperty(e, t, {
		get() {
			const e = n();
			return $o(this, t, e), e;
		},
		enumerable: !0,
		configurable: !0
	});
}
function Eo(e, t, n) {
	t in e ? $o(e, t, n) : e[t] = n;
}
function Co(e, t, n, a) {
	const i = zo(t);
	for (const r of n) {
		const n = Object.getOwnPropertyDescriptor(i, r);
		n.enumerable && (n.get ? Do(e, r, () => {
			const e = t._zod.def.shape[r];
			return a ? a(e, r) : e;
		}) : Eo(e, r, a ? a(n.value, r) : n.value));
	}
}
function Oo(...e) {
	const t = {};
	for (const n of e) {
		const e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Po(e) {
	return JSON.stringify(e);
}
const Fo = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function jo(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
const Bo = No(() => {
	if (Al.jitless) return !1;
	if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return new Function(""), !0;
	} catch (e) {
		return !1;
	}
});
function Lo(e) {
	if (!1 === jo(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	if ("function" != typeof t) return !0;
	const n = t.prototype;
	return !1 !== jo(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function Go(e) {
	return Lo(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const Uo = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
function Ho(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Zo(e, t, n) {
	const a = new e._zod.constr(t ?? e._zod.def);
	return t && !n?.parent || (a._zod.parent = e), a;
}
function qo(e) {
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
function Vo(e) {
	return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`;
}
const Wo = (() => ({
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}))(), Jo = {
	int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
	uint64: [BigInt(0), BigInt("18446744073709551615")]
};
function Ko(e, t) {
	const n = zo(e), a = [];
	for (const i of Reflect.ownKeys(t)) {
		if (!Object.getOwnPropertyDescriptor(n, i)?.enumerable) throw new Error(`Unrecognized key: "${String(i)}"`);
		t[i] && a.push(i);
	}
	return a;
}
function Yo(e, t) {
	const n = {};
	return Co(n, e, Reflect.ownKeys(zo(e))), function(e, t) {
		for (const n of Reflect.ownKeys(t)) {
			const a = Object.getOwnPropertyDescriptor(t, n);
			a.enumerable && (a.get ? Do(e, n, () => t[n]) : Eo(e, n, a.value));
		}
	}(n, t), n;
}
function Xo(e, t, n, a = "partial") {
	const i = t._zod.def.checks;
	if (i && i.length > 0) throw new Error(`.${a}() cannot be used on object schemas containing refinements`);
	const r = n ? new Set(Ko(t, n)) : void 0, s = {};
	return Co(s, t, Reflect.ownKeys(zo(t)), e && ((t, n) => r && !r.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), Zo(t, Oo(t._zod.def, {
		shape: s,
		checks: []
	}));
}
function Qo(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!0 !== e.issues[n]?.continue) return !0;
	return !1;
}
function el(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!1 === e.issues[n]?.continue) return !0;
	return !1;
}
function tl(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function nl(e) {
	return "string" == typeof e ? e : e?.message;
}
function al(e) {
	const t = [];
	for (const n of e ?? []) {
		const e = n._zod.def;
		if (!/_(length|size)$|_equals$/.test(e.check)) break;
		const a = e.maximum ?? e.length ?? e.size;
		a >= 0 && t.push([a, n]);
	}
	return t;
}
function il(e, t, n) {
	var a;
	for (let i = t; i < e.length; i++) (a = e[i]).schema ?? (a.schema = n);
}
function rl(e, t, n) {
	var a;
	const i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (a = e).schema ?? (a.schema = e.inst) : e.schema = e.inst);
	const r = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0, s = e.message ? e.message : nl(e.inst?._zod.def?.error?.(e)) ?? nl(r?.(e)) ?? nl(t?.error?.(e)) ?? nl(n.customError?.(e)) ?? nl(n.localeError?.(e)) ?? "Invalid input", o = {};
	for (const l of Object.keys(e)) "inst" !== l && "schema" !== l && "continue" !== l && "input" !== l && "__proto__" !== l && (o[l] = e[l]);
	return o.path ?? (o.path = []), o.message = s, t?.reportInput && (o.input = e.input), o;
}
const sl = /[\uD800-\uDBFF]/;
function ol(e) {
	const t = e.length;
	if (!sl.test(e)) return t;
	let n = t;
	for (let a = 0; a < t - 1; a++) 55296 == (64512 & e.charCodeAt(a)) && 56320 == (64512 & e.charCodeAt(a + 1)) && (n--, a++);
	return n;
}
function ll(e) {
	return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function cl(...e) {
	const [t, n, a] = e;
	return "string" == typeof t ? {
		message: t,
		code: "custom",
		input: n,
		inst: a
	} : { ...t };
}
function ul(e, t, n, a = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: a,
		value: n
	}), n;
}
function dl(e, t, n) {
	return ul(e, t, n, !1);
}
function pl(e, t) {
	for (const n in e) {
		const a = e[n];
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !0,
			get() {
				return ul(this, n, a(this));
			},
			set(e) {
				ul(this, n, e);
			}
		});
	}
	return t;
}
function fl(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return null == this ? n : ul(this, t, n.bind(this));
		},
		set(e) {
			ul(this, t, e);
		}
	});
}
let ml, hl = !1;
const gl = {
	configurable: !0,
	get() {
		hl = !0;
	}
};
function yl(e, t, n) {
	const a = Object.getPrototypeOf(e._zod);
	t in a && ml !== e._zod ? ml = void 0 : (ml = e._zod, Object.defineProperty(a, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, gl);
			const e = hl;
			hl = !1;
			try {
				const a = n(this);
				return hl ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: a
				}), hl = hl || e, a;
			} catch (a) {
				throw delete this[t], hl = hl || e, a;
			}
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				value: e
			});
		}
	}));
}
function wl(e) {
	const t = () => e;
	return t["~constantCatch"] = !0, t;
}
var _l;
const vl = {
	value: void 0,
	enumerable: !1
};
let bl = "captureStackTrace" in Error ? Error : null;
function Sl(e, t, n, a) {
	function i(e) {
		this.def = e, this.constr = u, this.traits = /* @__PURE__ */ new Set();
	}
	i.prototype = {};
	const r = n, s = r && /* @__PURE__ */ new WeakSet();
	function o(n, a) {
		if (n._zod) {
			if (n._zod.traits.has(e)) return;
		} else {
			vl.value = new i(a);
			try {
				Object.defineProperty(n, "_zod", vl);
			} finally {
				vl.value = void 0;
			}
		}
		if (n._zod.traits.add(e), t(n, a), s) {
			const e = Object.getPrototypeOf(n), t = n._zod.constr.prototype;
			let a = e;
			for (; a && a !== t;) a = Object.getPrototypeOf(a);
			const i = a ?? e;
			s.has(i) || (s.add(i), function(e, t) {
				for (const n in t) {
					const a = Object.getOwnPropertyDescriptor(t, n);
					a.get ? Object.defineProperty(e, n, {
						...a,
						enumerable: !1
					}) : fl(e, n, a.value);
				}
			}(i, r));
		}
		const o = u.prototype;
		for (const e in o) Object.prototype.hasOwnProperty.call(o, e) && (e in n || (n[e] = o[e].bind(n)));
	}
	const l = a?.Parent ?? Object;
	class c extends l {}
	function u(e) {
		const t = a?.Parent ? function(e) {
			const t = bl;
			if (t) {
				const n = t.stackTraceLimit;
				if ("number" == typeof n) {
					try {
						t.stackTraceLimit = 0;
					} catch {
						return bl = null, new e();
					}
					try {
						return new e();
					} finally {
						t.stackTraceLimit = n;
					}
				}
			}
			return new e();
		}(c) : this;
		o(t, e);
		const n = t._zod.deferred;
		if (n) {
			for (const e of n) e();
			t._zod.deferred = void 0;
		}
		const i = globalThis.__zod_globalConfig?.postProcessor;
		return i && i(t), t;
	}
	return Object.defineProperty(c, "name", { value: e }), Object.defineProperty(u, "init", { value: o }), Object.defineProperty(u, Symbol.hasInstance, { value: (t) => !!(a?.Parent && t instanceof a.Parent) || t?._zod?.traits?.has(e) }), Object.defineProperty(u, "name", { value: e }), u;
}
var kl = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, Il = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(_l = globalThis).__zod_globalConfig ?? (_l.__zod_globalConfig = {});
const Al = globalThis.__zod_globalConfig;
function xl(e) {
	return e && Object.assign(Al, e), Al;
}
const Tl = {
	get: function() {
		const e = this._zod;
		return e.message ?? (e.message = JSON.stringify(e.def, xo, 2)), e.message;
	},
	set: function(e) {
		this._zod.message = e;
	},
	enumerable: !0,
	configurable: !0
}, Nl = {
	value: void 0,
	enumerable: !1
}, Ml = new WeakSet([Object.prototype, Error.prototype]), $l = (e, t) => {
	e.name = "$ZodError", Nl.value = t, Object.defineProperty(e, "issues", Nl), Nl.value = void 0, Object.defineProperty(e, "message", Tl);
	const n = Object.getPrototypeOf(e);
	Ml.has(n) || (Ml.add(n), Object.defineProperty(n, "toString", {
		configurable: !0,
		enumerable: !1,
		get() {
			const e = () => this.message;
			return Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	}));
}, Rl = Sl("$ZodError", $l);
function zl(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || ("__proto__" === t ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function Dl(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
Sl("$ZodError", $l, void 0, { Parent: Error });
const El = (e) => {
	const t = (n, a, i, r) => {
		const s = i ? {
			...i,
			async: !1
		} : { async: !1 }, o = n._zod.run({
			value: a,
			issues: []
		}, s);
		if (o instanceof Promise) throw new kl();
		if (o.issues.length) {
			const n = new ((r?.Err) ?? e)(o.issues.map((e) => rl(e, s, xl())));
			throw Fo(n, r?.callee ?? t), n;
		}
		return o.value;
	};
	return t;
}, Cl = (e) => {
	const t = async (n, a, i, r) => {
		const s = i ? {
			...i,
			async: !0
		} : { async: !0 };
		let o = n._zod.run({
			value: a,
			issues: []
		}, s);
		if (o instanceof Promise && (o = await o), o.issues.length) {
			const n = new ((r?.Err) ?? e)(o.issues.map((e) => rl(e, s, xl())));
			throw Fo(n, r?.callee ?? t), n;
		}
		return o.value;
	};
	return t;
}, Ol = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		async: !1
	} : { async: !1 }, r = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (r instanceof Promise) throw new kl();
	return r.issues.length ? Pl(e, r.issues, i) : {
		success: !0,
		data: r.value
	};
};
function Pl(e, t, n) {
	let a;
	return {
		success: !1,
		get error() {
			return a || (a = new e(t.map((e) => rl(e, n, xl()))), t = void 0, n = void 0), a;
		},
		set error(e) {
			a = e, t = void 0, n = void 0;
		}
	};
}
const Fl = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		async: !0
	} : { async: !0 };
	let r = t._zod.run({
		value: n,
		issues: []
	}, i);
	return r instanceof Promise && (r = await r), r.issues.length ? Pl(e, r.issues, i) : {
		success: !0,
		data: r.value
	};
}, jl = Symbol.for("zod.compile.invalid"), Bl = Symbol.for("zod.compile.fallback"), Ll = (e) => {
	const t = El(e), n = (e, a, i, r) => {
		const s = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return t(e, a, s, Dl(n, r));
	};
	return n;
}, Gl = (e) => {
	const t = El(e), n = (e, a, i, r) => t(e, a, i, Dl(n, r));
	return n;
}, Ul = (e) => {
	const t = Cl(e), n = async (e, a, i, r) => {
		const s = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return await t(e, a, s, Dl(n, r));
	};
	return n;
}, Hl = (e) => {
	const t = Cl(e), n = async (e, a, i, r) => await t(e, a, i, Dl(n, r));
	return n;
}, Zl = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return Ol(e)(t, n, i);
}, ql = (e) => (t, n, a) => Ol(e)(t, n, a), Vl = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return Fl(e)(t, n, i);
}, Wl = (e) => async (t, n, a) => Fl(e)(t, n, a), Jl = /^[cC][0-9a-z]{6,}$/, Kl = /^[0-9a-z]+$/, Yl = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Xl = /^[0-9a-vA-V]{20}$/, Ql = /^[A-Za-z0-9]{27}$/, ec = /^[a-zA-Z0-9_-]{21}$/, tc = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, nc = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ac = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ic = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, rc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, sc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, oc = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, lc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, cc = /^https?$/, uc = /^\+[1-9]\d{6,14}$/, dc = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function pc(e) {
	return new RegExp(`^${e}$`);
}
const fc = pc(dc);
function mc(e) {
	const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return "number" == typeof e.precision ? -1 === e.precision ? `${t}` : 0 === e.precision ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
const hc = /^[\s\S]{0,}$/, gc = /^-?\d+$/, yc = /^-?\d+(?:\.\d+)?$/, wc = /^(?:true|false)$/i, _c = /^[^A-Z]*$/, vc = /^[^a-z]*$/, bc = Sl("$ZodCheck", (e, t) => {
	var n;
	e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Sc = (e) => {
	const t = e.value;
	return !(null == t || void 0 === t.length);
}, kc = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, Ic = Sl("$ZodCheckLessThan", (e, t) => {
	bc.init(e, t);
	const n = kc[typeof t.value];
	e._zod.check = (a) => {
		(t.inclusive ? a.value <= t.value : a.value < t.value) || a.issues.push({
			origin: kc[typeof a.value] ?? n,
			code: "too_big",
			maximum: "object" == typeof t.value ? t.value.getTime() : t.value,
			input: a.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Ac = Sl("$ZodCheckGreaterThan", (e, t) => {
	bc.init(e, t);
	const n = kc[typeof t.value];
	e._zod.check = (a) => {
		(t.inclusive ? a.value >= t.value : a.value > t.value) || a.issues.push({
			origin: kc[typeof a.value] ?? n,
			code: "too_small",
			minimum: "object" == typeof t.value ? t.value.getTime() : t.value,
			input: a.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), xc = Sl("$ZodCheckMultipleOf", (e, t) => {
	bc.init(e, t), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
		("bigint" == typeof n.value ? t.value === BigInt(0) || n.value % t.value !== BigInt(0) : 0 !== function(e, t) {
			const n = e / t, a = Math.round(n), i = 4 * Number.EPSILON * Math.max(Math.abs(n), 1);
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
}), Tc = Sl("$ZodCheckNumberFormat", (e, t) => {
	bc.init(e, t), t.format = t.format || "float64";
	const n = t.format?.includes("int"), a = n ? "int" : "number", [i, r] = Wo[t.format];
	e._zod.check = (s) => {
		const o = s.value;
		if (n) {
			if (!Number.isInteger(o)) return void s.issues.push({
				expected: a,
				format: t.format,
				code: "invalid_type",
				continue: !1,
				input: o,
				inst: e
			});
			if (!Number.isSafeInteger(o)) return void (o > 0 ? s.issues.push({
				input: o,
				code: "too_big",
				maximum: Number.MAX_SAFE_INTEGER,
				note: "Integers must be within the safe integer range.",
				inst: e,
				origin: a,
				inclusive: !0,
				continue: !t.abort
			}) : s.issues.push({
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
		o < i && s.issues.push({
			origin: "number",
			input: o,
			code: "too_small",
			minimum: i,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), o > r && s.issues.push({
			origin: "number",
			input: o,
			code: "too_big",
			maximum: r,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), Nc = Sl("$ZodCheckMaxLength", (e, t) => {
	var n;
	bc.init(e, t), (n = e._zod.def).when ?? (n.when = Sc), e._zod.check = (n) => {
		const a = n.value, i = a.length;
		if (("string" == typeof a && i > t.maximum ? ol(a) : i) <= t.maximum) return;
		const r = ll(a);
		n.issues.push({
			origin: r,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: a,
			inst: e,
			continue: !t.abort
		});
	};
}), Mc = Sl("$ZodCheckMinLength", (e, t) => {
	var n;
	bc.init(e, t), (n = e._zod.def).when ?? (n.when = Sc), e._zod.check = (n) => {
		const a = n.value, i = a.length;
		if (("string" == typeof a && i >= t.minimum && i < 2 * t.minimum ? ol(a) : i) >= t.minimum) return;
		const r = ll(a);
		n.issues.push({
			origin: r,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: a,
			inst: e,
			continue: !t.abort
		});
	};
}), $c = Sl("$ZodCheckLengthEquals", (e, t) => {
	var n;
	bc.init(e, t), (n = e._zod.def).when ?? (n.when = Sc), e._zod.check = (n) => {
		const a = n.value, i = a.length, r = "string" == typeof a && i >= t.length && i <= 2 * t.length ? ol(a) : i;
		if (r === t.length) return;
		const s = ll(a), o = r > t.length;
		n.issues.push({
			origin: s,
			...o ? {
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
}), Rc = Sl("$ZodCheckStringFormat", (e, t) => {
	var n, a;
	bc.init(e, t), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
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
}), zc = Sl("$ZodCheckRegex", (e, t) => {
	Rc.init(e, t), e._zod.check = (n) => {
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
}), Dc = Sl("$ZodCheckLowerCase", (e, t) => {
	t.pattern ?? (t.pattern = _c), Rc.init(e, t);
}), Ec = Sl("$ZodCheckUpperCase", (e, t) => {
	t.pattern ?? (t.pattern = vc), Rc.init(e, t);
}), Cc = Sl("$ZodCheckIncludes", (e, t) => {
	bc.init(e, t);
	const n = Ho(t.includes);
	t.pattern = new RegExp("number" == typeof t.position ? `^.{${t.position},}${n}` : n), e._zod.check = (n) => {
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
}), Oc = Sl("$ZodCheckStartsWith", (e, t) => {
	bc.init(e, t);
	const n = new RegExp(`^${Ho(t.prefix)}.*`);
	t.pattern ?? (t.pattern = n), e._zod.check = (n) => {
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
}), Pc = Sl("$ZodCheckEndsWith", (e, t) => {
	bc.init(e, t);
	const n = new RegExp(`.*${Ho(t.suffix)}$`);
	t.pattern ?? (t.pattern = n), e._zod.check = (n) => {
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
}), Fc = Sl("$ZodCheckOverwrite", (e, t) => {
	bc.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
});
var jc = class {
	constructor(e = [], t = {}) {
		this.content = [], this.indent = 0, this.args = e, this.closed = t;
	}
	indented(e) {
		this.indent += 1;
		try {
			e(this);
		} finally {
			this.indent -= 1;
		}
	}
	write(e) {
		if ("function" == typeof e) return e(this, { execution: "sync" }), void e(this, { execution: "async" });
		const t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), a = t.map((e) => e.slice(n)).map((e) => " ".repeat(2 * this.indent) + e);
		for (const i of a) this.content.push(i);
	}
	compile() {
		const e = Function, t = this?.content ?? [""];
		return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${t.join("\n")}\n};`)(...Object.values(this.closed));
	}
};
const Bc = {
	major: 4,
	minor: 6,
	patch: 7
}, Lc = Sl("$ZodType", (e, t) => {
	var n;
	e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Bc;
	const a = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...a ?? []] : a?.length ? [...a] : [];
	for (const r of i) for (const t of r._zod.onattach) t(e);
	if (0 === i.length) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		const t = (t, n, a) => {
			if (t.memo) return t;
			let i, r = Qo(t);
			for (const s of n) {
				if (s._zod.def.when) {
					if (el(t)) continue;
					if (!s._zod.def.when(t)) continue;
				} else if (r) continue;
				const n = t.issues.length, o = s._zod.check(t);
				if (o instanceof Promise && !1 === a?.async) throw new kl();
				if (i || o instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await o, t.issues.length !== n && (il(t.issues, n, e), r || (r = Qo(t, n)));
				});
				else {
					if (t.issues.length === n) continue;
					il(t.issues, n, e), r || (r = Qo(t, n));
				}
			}
			return i ? i.then(() => t) : t;
		}, n = (n, a, r) => {
			if (Qo(n)) return n.aborted = !0, n;
			const s = t(a, i, r);
			if (s instanceof Promise) {
				if (!1 === r.async) throw new kl();
				return s.then((t) => e._zod.parse(t, r));
			}
			return e._zod.parse(s, r);
		};
		e._zod.run = (a, r) => {
			if (r.skipChecks) return e._zod.parse(a, r);
			if ("backward" === r.direction) {
				const t = e._zod.parse({
					value: a.value,
					issues: []
				}, {
					...r,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, a, r)) : n(t, a, r);
			}
			const s = e._zod.parse(a, r);
			if (s instanceof Promise) {
				if (!1 === r.async) throw new kl();
				return s.then((e) => t(e, i, r));
			}
			return t(s, i, r);
		};
	}
}, {
	get "~standard"() {
		return dl(this, "~standard", Uc(this));
	},
	set "~standard"(e) {
		ul(this, "~standard", e);
	}
}), Gc = (e, t) => e.issues.length ? { issues: e.issues.map((e) => rl(e, t, xl())) } : { value: e.value };
function Uc(e) {
	return {
		validate: (t) => {
			const n = { async: !1 };
			try {
				const a = e._zod.run({
					value: t,
					issues: []
				}, n);
				if (!(a instanceof Promise)) return Gc(a, n);
			} catch (a) {}
			return async function(e, t) {
				const n = { async: !0 };
				return Gc(await e._zod.run({
					value: t,
					issues: []
				}, n), n);
			}(e, t);
		},
		vendor: "zod",
		version: 1
	};
}
const Hc = Sl("$ZodString", (e, t) => {
	Lc.init(e, t), e._zod.pattern = t.pattern ?? hc, e._zod.parse = (n, a) => {
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
}), Zc = Sl("$ZodStringFormat", (e, t) => {
	Rc.init(e, t), Hc.init(e, t);
}), qc = Sl("$ZodGUID", (e, t) => {
	t.pattern ?? (t.pattern = nc), Zc.init(e, t);
}), Vc = Sl("$ZodUUID", (e, t) => {
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
		t.pattern ?? (t.pattern = ac(e));
	} else t.pattern ?? (t.pattern = ac());
	Zc.init(e, t);
}), Wc = Sl("$ZodEmail", (e, t) => {
	t.pattern ?? (t.pattern = ic), Zc.init(e, t);
});
function Jc(e) {
	try {
		return "undefined" != typeof URL && "function" == typeof URL.canParse ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
const Kc = /[\t\n\r]/g;
function Yc(e) {
	return e.replace(Kc, "");
}
const Xc = Sl("$ZodURL", (e, t) => {
	Zc.init(e, t), e._zod.check = (n) => {
		try {
			const a = n.value.trim(), i = function(e, t) {
				return "normalize" in t || "hostname" in t || "protocol" in t ? function(e, t) {
					if (!t.normalize && t.protocol?.source === cc.source && !/^https?:\/\//i.test(e)) return 1;
					try {
						if ("undefined" != typeof URL) {
							const t = URL;
							if ("function" == typeof t.parse) return t.parse(e) ?? 2;
						}
						return new URL(e);
					} catch {
						return 2;
					}
				}(e, t) : Jc(e) || 2;
			}(a, t);
			1 === i ? n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid URL format",
				input: n.value,
				inst: e,
				continue: !t.abort
			}) : 2 === i ? n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			}) : !0 === i ? n.value = Yc(a) : (t.hostname && !function(e, t) {
				return t.lastIndex = 0, t.test(e.hostname);
			}(i, t.hostname) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), t.protocol && !function(e, t) {
				return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
			}(i, t.protocol) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), n.value = t.normalize ? i.href : Yc(a));
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
}), Qc = Sl("$ZodEmoji", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp("^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", "u")), Zc.init(e, t);
}), eu = Sl("$ZodNanoID", (e, t) => {
	if (void 0 !== t.length && (!Number.isInteger(t.length) || t.length < 1)) throw new Error(`Invalid nanoid length: ${t.length}`);
	var n;
	t.pattern ?? (t.pattern = void 0 === t.length ? ec : (n = t.length, new RegExp(`^[a-zA-Z0-9_-]{${n}}$`))), Zc.init(e, t);
}), tu = Sl("$ZodCUID", (e, t) => {
	t.pattern ?? (t.pattern = Jl), Zc.init(e, t);
}), nu = Sl("$ZodCUID2", (e, t) => {
	t.pattern ?? (t.pattern = Kl), Zc.init(e, t);
}), au = Sl("$ZodULID", (e, t) => {
	t.pattern ?? (t.pattern = Yl), Zc.init(e, t);
}), iu = Sl("$ZodXID", (e, t) => {
	t.pattern ?? (t.pattern = Xl), Zc.init(e, t);
}), ru = Sl("$ZodKSUID", (e, t) => {
	t.pattern ?? (t.pattern = Ql), Zc.init(e, t);
}), su = Sl("$ZodISODateTime", (e, t) => {
	t.pattern ?? (t.pattern = function(e) {
		const t = ["Z"];
		e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const n = `${mc({
			precision: e.precision,
			seconds: !0
		})}(?:${t.join("|")})`, a = e.local ? `${n}|${mc({ precision: e.precision })}` : n;
		return new RegExp(`^${dc}T(?:${a})$`);
	}(t)), Zc.init(e, t);
}), ou = Sl("$ZodISODate", (e, t) => {
	t.pattern ?? (t.pattern = fc), Zc.init(e, t);
}), lu = Sl("$ZodISOTime", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp(`^${mc(t)}$`)), Zc.init(e, t);
}), cu = Sl("$ZodISODuration", (e, t) => {
	t.pattern ?? (t.pattern = tc), Zc.init(e, t);
}), uu = Sl("$ZodIPv4", (e, t) => {
	t.pattern ?? (t.pattern = rc), Zc.init(e, t);
}), du = /^[0-9a-fA-F:.]+$/;
function pu(e) {
	return !!du.test(e) && Jc(`http://[${e}]`);
}
const fu = Sl("$ZodIPv6", (e, t) => {
	t.pattern ?? (t.pattern = sc), Zc.init(e, t), e._zod.check = (n) => {
		pu(n.value) || n.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), mu = Sl("$ZodCIDRv4", (e, t) => {
	t.pattern ?? (t.pattern = oc), Zc.init(e, t);
}), hu = Sl("$ZodCIDRv6", (e, t) => {
	t.pattern ?? (t.pattern = lc), Zc.init(e, t), e._zod.check = (n) => {
		(function(e) {
			const t = e.split("/");
			if (2 !== t.length) return !1;
			const [n, a] = t;
			if (!a) return !1;
			const i = Number(a);
			return `${i}` === a && !(i < 0 || i > 128) && pu(n);
		})(n.value) || n.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function gu(e) {
	if ("" === e) return !0;
	if (/\s/.test(e)) return !1;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
const yu = /^[0-9a-zA-Z+/]*={0,2}$/, wu = Sl("$ZodBase64", (e, t) => {
	t.pattern ?? (t.pattern = yu), Zc.init(e, t), e._zod.check = (n) => {
		gu(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), _u = /^[A-Za-z0-9_-]*$/, vu = Sl("$ZodBase64URL", (e, t) => {
	t.pattern ?? (t.pattern = _u), Zc.init(e, t), e._zod.check = (n) => {
		(function(e) {
			if (!_u.test(e)) return !1;
			const t = e.replace(/[-_]/g, (e) => "-" === e ? "+" : "/");
			return gu(t.padEnd(4 * Math.ceil(t.length / 4), "="));
		})(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), bu = Sl("$ZodE164", (e, t) => {
	t.pattern ?? (t.pattern = uc), Zc.init(e, t);
}), Su = Sl("$ZodJWT", (e, t) => {
	Zc.init(e, t), e._zod.check = (n) => {
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
}), ku = Sl("$ZodNumber", (e, t) => {
	Lc.init(e, t), e._zod.pattern = yc, e._zod.parse = (n, a) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch (s) {}
		const i = n.value;
		if ("number" == typeof i && !Number.isNaN(i) && Number.isFinite(i)) return n;
		const r = "number" == typeof i ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...r ? { received: r } : {}
		}), n;
	};
}), Iu = Sl("$ZodNumberFormat", (e, t) => {
	Tc.init(e, t), ku.init(e, t);
}), Au = Sl("$ZodBoolean", (e, t) => {
	Lc.init(e, t), e._zod.pattern = wc, e._zod.parse = (n, a) => {
		if (t.coerce) try {
			n.value = Boolean(n.value);
		} catch (r) {}
		const i = n.value;
		return "boolean" == typeof i || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
	};
}), xu = Sl("$ZodUnknown", (e, t) => {
	Lc.init(e, t), e._zod.parse = (e) => e;
}), Tu = Sl("$ZodNever", (e, t) => {
	Lc.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
}), Nu = (e) => Array.isArray(e) ? e.length : -1;
function Mu(e, t, n) {
	e.issues.length && t.issues.push(...tl(n, e.issues)), t.value[n] = e.value;
}
const $u = Sl("$ZodArray", (e, t) => {
	Lc.init(e, t);
	const n = Al.memoizer;
	n?.attach(e), e._zod.parse = (a, i) => {
		const r = a.value;
		if (!Array.isArray(r)) return a.issues.push({
			expected: "array",
			code: "invalid_type",
			input: r,
			inst: e
		}), a;
		a.value = n ? n.alloc(e, a, Array(r.length), i) : Array(r.length);
		const s = [], o = i?.abortEarly;
		for (let e = 0; e < r.length; e++) {
			const n = r[e], l = t.element._zod.run({
				value: n,
				issues: []
			}, i);
			if (l instanceof Promise) s.push(l.then((t) => Mu(t, a, e)));
			else if (Mu(l, a, e), o && 0 !== l.issues.length && Qo(l)) break;
		}
		return s.length ? Promise.all(s).then(() => a) : a;
	}, function(e, t) {
		const n = al(e._zod.def.checks);
		if (!n.length) return;
		const a = Math.min(...n.map((e) => e[0])), i = e._zod.parse;
		e._zod.parse = (n, r) => {
			const s = t(n.value);
			if (s > a && !r?.skipChecks && "backward" !== r?.direction) {
				for (const [t, a] of al(e._zod.def.checks)) if (s > t && a._zod.def.when(n)) {
					const t = n.issues.length;
					return a._zod.check(n), n.issues[t].continue = !1, il(n.issues, t, e), n;
				}
			}
			return i(n, r);
		};
	}(e, Nu);
});
function Ru(e, t, n, a, i, r) {
	const s = n in a, o = "optional" === r;
	if (s || !o || "optional" !== i) {
		if (e.issues.length) {
			if (void 0 !== i && o && !s) return;
			t.issues.push(...tl(n, e.issues));
		}
		s || void 0 !== i ? void 0 === e.value ? (s || "defaulted" === i && !o) && (t.value[n] = void 0) : t.value[n] = e.value : e.issues.length || t.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [n]
		});
	}
}
const zu = [];
function Du(e) {
	const t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), a = n.length ? n : zu, i = a.length ? [...t, ...a] : t;
	for (const o of i) if (!e.shape?.[o]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${String(o)}": expected a Zod schema`);
	const r = (s = e.shape, Object.keys(s).filter((e) => void 0 !== s[e]._zod.optin && "optional" === s[e]._zod.optout));
	var s;
	return {
		...e,
		allKeys: i,
		symbolKeys: a,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(r)
	};
}
function Eu(e, t, n, a, i, r, s) {
	const o = [], l = i.keySet, c = i.catchall._zod, u = c.def.type, d = c.optin, p = c.optout;
	let f = 0;
	for (const m in t) {
		if (s && n.issues.length !== f) {
			if (Qo(n, f)) break;
			f = n.issues.length;
		}
		if (l.has(m)) continue;
		if ("__proto__" === m) {
			"never" === u && o.push(m);
			continue;
		}
		if ("never" === u) {
			o.push(m);
			continue;
		}
		const i = c.run({
			value: t[m],
			issues: []
		}, a);
		i instanceof Promise ? e.push(i.then((e) => Ru(e, n, m, t, d, p))) : Ru(i, n, m, t, d, p);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: r,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
const Cu = Sl("$ZodObject", (e, t) => {
	Lc.init(e, t);
	const n = Object.getOwnPropertyDescriptor(t, "shape"), a = n?.get ? n.get.raw : t.shape ?? {};
	if (a) {
		const e = () => {
			const n = { ...a };
			return Object.defineProperty(t, "shape", { value: n }), e.raw = n, n;
		};
		e.raw = a, Object.defineProperty(t, "shape", { get: e });
	}
	const i = No(() => Du(t));
	yl(e, "propValues", (e) => {
		const t = e.def.shape, n = {};
		for (const a in t) {
			const e = t[a]._zod;
			if (e.values) {
				Object.prototype.hasOwnProperty.call(n, a) || $o(n, a, /* @__PURE__ */ new Set());
				for (const t of e.values) n[a].add(t);
				void 0 !== e.optin && n[a].add(void 0);
			}
		}
		return n;
	});
	const r = jo, s = t.catchall;
	let o;
	const l = Al.memoizer;
	l?.attach(e), e._zod.parse = (t, n) => {
		o ?? (o = i.value);
		const a = t.value;
		if (!r(a)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: a,
			inst: e
		}), t;
		t.value = l ? l.alloc(e, t, {}, n) : {};
		const c = [], u = o.shape, d = n?.abortEarly;
		let p = t.issues.length;
		for (const e of o.allKeys) {
			if (d && t.issues.length !== p) {
				if (Qo(t, p)) break;
				p = t.issues.length;
			}
			if ("__proto__" === e) continue;
			const i = u[e], r = i._zod.optin, s = i._zod.optout, o = i._zod.run({
				value: a[e],
				issues: []
			}, n);
			o instanceof Promise ? c.push(o.then((n) => Ru(n, t, e, a, r, s))) : Ru(o, t, e, a, r, s);
		}
		return s ? Eu(c, a, t, n, i.value, e, !0 === d) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), Ou = Sl("$ZodObjectJIT", (e, t) => {
	Cu.init(e, t);
	const n = e._zod.parse, a = No(() => Du(t)), i = Al.memoizer;
	let r;
	const s = jo, o = !Al.jitless, l = o && Bo.value, c = t.catchall;
	let u;
	e._zod.parse = (d, p) => {
		u ?? (u = a.value);
		const f = d.value;
		return s(f) ? o && l && !1 === p?.async && !0 !== p.jitless ? (r || (r = ((t) => {
			const n = a.value, r = n.symbolKeys, s = new jc(["payload", "ctx"], {
				shape: t,
				inst: e,
				memo: i,
				syms: r
			}), o = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, l = (e, t) => `\n          let ${e}_ab = false;\n          for (let i = 0; i < ${e}.issues.length; i++) {\n            const iss = ${e}.issues[i];\n            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];\n            payload.issues.push(iss);\n            if (iss.continue !== true) ${e}_ab = true;\n          }\n          if (${e}_ab && ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }`;
			s.write("const input = payload.value;");
			const c = Object.create(null);
			let u = 0;
			for (const e of n.allKeys) c[e] = "key_" + u++;
			s.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
			for (const e of n.allKeys) {
				if ("__proto__" === e) continue;
				const n = c[e], a = "symbol" == typeof e ? `syms[${r.indexOf(e)}]` : Po(e), i = `${a} in input`, u = t[e], d = u?._zod?.optin, p = void 0 !== d, f = "optional" === u?._zod?.optout;
				if (s.write(`const ${n} = ${o(a)};`), p && f) {
					const e = "optional" === d ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
					s.write(`\n        const ${n}_present = ${i};\n        if (!${n}.issues.length || ${n}_present) {\n          if (${n}.issues.length) {${l(n, a)}\n          }\n\n          if (${e}) {\n            newResult[${a}] = ${n}.value;\n          }\n        }\n\n      `);
				} else p ? (s.write(`\n        if (${n}.issues.length) {${l(n, a)}\n        }\n      `), "defaulted" === d ? s.write(`newResult[${a}] = ${n}.value;`) : s.write(`\n        if (${n}.value !== undefined || ${i}) {\n          newResult[${a}] = ${n}.value;\n        }\n      `)) : s.write(`\n        const ${n}_present = ${i};\n        if (${n}.issues.length) {${l(n, a)}\n        }\n        if (!${n}_present && !${n}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${a}]\n          });\n          if (ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }\n        }\n\n        if (${n}_present) {\n          newResult[${a}] = ${n}.value;\n        }\n\n      `);
			}
			return s.write("payload.value = newResult;"), s.write("return payload;"), s.compile();
		})(t.shape)), d = r(d, p), c ? Eu([], f, d, p, u, e, !0 === p?.abortEarly) : d) : n(d, p) : (d.issues.push({
			expected: "object",
			code: "invalid_type",
			input: f,
			inst: e
		}), d);
	};
});
function Pu(e, t, n, a) {
	for (const r of e) if (0 === r.issues.length) return t.value = r.value, t;
	const i = e.filter((e) => !Qo(e));
	return 1 === i.length ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => rl(e, a, xl())))
	}), t);
}
const Fu = Sl("$ZodUnion", (e, t) => {
	Lc.init(e, t), yl(e, "optin", (e) => e.def.options.some((e) => "defaulted" === e._zod.optin) ? "defaulted" : e.def.options.some((e) => void 0 !== e._zod.optin) ? "optional" : void 0), yl(e, "optout", (e) => e.def.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0), yl(e, "values", (e) => {
		if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
	}), yl(e, "pattern", (e) => {
		if (e.def.options.every((e) => e._zod.pattern)) {
			const t = e.def.options.map((e) => e._zod.pattern);
			return new RegExp(`^(${t.map((e) => Mo(e.source)).join("|")})$`);
		}
	});
	const n = 1 === t.options.length ? t.options[0]._zod.run : null;
	e._zod.parse = (a, i) => {
		if (n) return n(a, i);
		let r = !1;
		const s = [];
		for (const e of t.options) {
			const t = e._zod.run({
				value: a.value,
				issues: []
			}, i);
			if (t instanceof Promise) s.push(t), r = !0;
			else {
				if (0 === t.issues.length) return t;
				s.push(t);
			}
		}
		return r ? Promise.all(s).then((t) => Pu(t, a, e, i)) : Pu(s, a, e, i);
	};
}), ju = Sl("$ZodIntersection", (e, t) => {
	Lc.init(e, t), e._zod.parse = (e, n) => {
		const a = e.value, i = t.left._zod.run({
			value: a,
			issues: []
		}, n), r = t.right._zod.run({
			value: a,
			issues: []
		}, n);
		return i instanceof Promise || r instanceof Promise ? Promise.all([i, r]).then(([t, n]) => Lu(e, t, n)) : Lu(e, i, r);
	};
});
function Bu(e, t) {
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (e instanceof Date && t instanceof Date && +e === +t) return {
		valid: !0,
		data: e
	};
	if (Lo(e) && Lo(t)) {
		const n = Object.keys(t), a = Object.keys(e).filter((e) => -1 !== n.indexOf(e)), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (const r of a) {
			if ("__proto__" === r) continue;
			const n = Bu(e[r], t[r]);
			if (!n.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...n.mergeErrorPath]
			};
			i[r] = n.data;
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
			const i = Bu(e[a], t[a]);
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
function Lu(e, t, n) {
	const a = /* @__PURE__ */ new Map();
	let i;
	const r = /* @__PURE__ */ new Map(), s = (e, t) => {
		let n;
		if ("unrecognized_keys" !== e.code || e.path?.length) {
			if ("invalid_key" !== e.code || "record" !== e.origin || 1 !== e.path?.length) return !1;
			{
				const t = String(e.path[0]);
				r.has(t) || r.set(t, e), n = [t];
			}
		} else i ?? (i = e), n = e.keys;
		for (const i of n) a.has(i) || a.set(i, {}), a.get(i)[t] = !0;
		return !0;
	};
	for (const c of t.issues) s(c, "l") || e.issues.push(c);
	for (const c of n.issues) s(c, "r") || e.issues.push(c);
	const o = [...a].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (o.length) {
		const t = i ? o.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (const n of o) !t.includes(n) && r.has(n) && e.issues.push(r.get(n));
	}
	const l = Bu(t.value, n.value);
	if (!l.valid) {
		if (Qo(e)) return e;
		throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
	}
	return e.value = l.data, e;
}
const Gu = Sl("$ZodRecord", (e, t) => {
	Lc.init(e, t);
	const n = Al.memoizer;
	n?.attach(e), e._zod.parse = (a, i) => {
		const r = a.value;
		if (!Lo(r)) return a.issues.push({
			expected: "record",
			code: "invalid_type",
			input: r,
			inst: e
		}), a;
		const s = [], o = t.keyType._zod.values;
		if (o && !t.partial) {
			a.value = n ? n.alloc(e, a, {}, i) : {};
			const l = /* @__PURE__ */ new Set();
			for (const n of o) if ("string" == typeof n || "number" == typeof n || "symbol" == typeof n) {
				if (l.add("number" == typeof n ? n.toString() : n), "__proto__" === n) continue;
				const o = t.keyType._zod.run({
					value: n,
					issues: []
				}, i);
				if (o instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (o.issues.length) {
					a.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: o.issues.map((e) => rl(e, i, xl())),
						input: n,
						path: [n],
						inst: e
					});
					continue;
				}
				const c = o.value;
				if ("__proto__" === c) continue;
				const u = t.valueType._zod.run({
					value: r[n],
					issues: []
				}, i);
				u instanceof Promise ? s.push(u.then((e) => {
					e.issues.length && a.issues.push(...tl(n, e.issues)), a.value[c] = e.value;
				})) : (u.issues.length && a.issues.push(...tl(n, u.issues)), a.value[c] = u.value);
			}
			let c;
			for (const e in r) if (!l.has(e)) if ("loose" === t.mode) {
				if ("__proto__" === e) continue;
				a.value[e] = r[e];
			} else c = c ?? [], c.push(e);
			c && c.length > 0 && a.issues.push({
				code: "unrecognized_keys",
				input: r,
				inst: e,
				keys: c,
				continue: !0
			});
		} else {
			let l;
			a.value = n ? n.alloc(e, a, {}, i) : {};
			for (const n of Reflect.ownKeys(r)) {
				if ("__proto__" === n) continue;
				if (!Object.prototype.propertyIsEnumerable.call(r, n)) continue;
				let c = t.keyType._zod.run({
					value: n,
					issues: []
				}, i);
				if (c instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if ("string" == typeof n && yc.test(n) && c.issues.length) {
					const e = t.keyType._zod.run({
						value: Number(n),
						issues: []
					}, i);
					if (e instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
					0 === e.issues.length && (c = e);
				}
				if (c.issues.length) {
					"loose" === t.mode ? a.value[n] = r[n] : o ? (l = l ?? [], l.push(n)) : a.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: c.issues.map((e) => rl(e, i, xl())),
						input: n,
						path: [n],
						inst: e
					});
					continue;
				}
				const u = c.value;
				if ("__proto__" === u) continue;
				const d = t.valueType._zod.run({
					value: r[n],
					issues: []
				}, i);
				d instanceof Promise ? s.push(d.then((e) => {
					e.issues.length && a.issues.push(...tl(n, e.issues)), a.value[u] = e.value;
				})) : (d.issues.length && a.issues.push(...tl(n, d.issues)), a.value[u] = d.value);
			}
			l && l.length > 0 && a.issues.push({
				code: "unrecognized_keys",
				input: r,
				inst: e,
				keys: l,
				continue: !0
			});
		}
		return s.length ? Promise.all(s).then(() => a) : a;
	};
}), Uu = Sl("$ZodEnum", (e, t) => {
	Lc.init(e, t);
	const n = Io(t.entries), a = new Set(n);
	e._zod.values = a, yl(e, "pattern", (e) => {
		const t = Io(e.def.entries).filter((e) => Uo.has(typeof e));
		return new RegExp(t.length ? `^(${t.map((e) => Ho(e.toString())).join("|")})$` : "^[^\\s\\S]$");
	}), e._zod.parse = (t, i) => {
		const r = t.value;
		return a.has(r) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: r,
			inst: e
		}), t;
	};
}), Hu = Sl("$ZodTransform", (e, t) => {
	Lc.init(e, t), e._zod.optin = "optional", Al.memoizer?.guard(e), e._zod.parse = (n, a) => {
		if ("backward" === a.direction) throw new Il(e.constructor.name);
		const i = t.transform(n.value, n);
		if (a.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new kl();
		return n.value = i, n;
	};
});
function Zu(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
const qu = Sl("$ZodOptional", (e, t) => {
	Lc.init(e, t), yl(e, "optin", (e) => "defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional"), e._zod.optout = "optional", yl(e, "values", (e) => {
		const t = e.def.innerType._zod.values;
		return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
	}), yl(e, "pattern", (e) => {
		const t = e.def.innerType._zod.pattern;
		return t ? new RegExp(`^(${Mo(t.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (void 0 === e.value) {
			if ("defaulted" !== t.innerType._zod.optin) return e;
			const a = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return a instanceof Promise ? a.then((t) => Zu(e, t)) : Zu(e, a);
		}
		return t.innerType._zod.run(e, n);
	};
}), Vu = Sl("$ZodExactOptional", (e, t) => {
	qu.init(e, t), yl(e, "values", (e) => e.def.innerType._zod.values), yl(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), Wu = Sl("$ZodNullable", (e, t) => {
	Lc.init(e, t), yl(e, "optin", (e) => e.def.innerType._zod.optin), yl(e, "optout", (e) => e.def.innerType._zod.optout), yl(e, "pattern", (e) => {
		const t = e.def.innerType._zod.pattern;
		return t ? new RegExp(`^(${Mo(t.source)}|null)$`) : void 0;
	}), yl(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => null === e.value ? e : t.innerType._zod.run(e, n);
}), Ju = Sl("$ZodDefault", (e, t) => {
	Lc.init(e, t), e._zod.optin = "defaulted", yl(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		if (void 0 === e.value) return e.value = t.defaultValue, e;
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then((e) => Ku(e, t)) : Ku(a, t);
	};
});
function Ku(e, t) {
	return void 0 === e.value && (e.value = t.defaultValue), e;
}
const Yu = Sl("$ZodPrefault", (e, t) => {
	Lc.init(e, t), e._zod.optin = "defaulted", yl(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => ("backward" === n.direction || void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), Xu = Sl("$ZodNonOptional", (e, t) => {
	Lc.init(e, t), yl(e, "values", (e) => {
		const t = e.def.innerType._zod.values;
		return t ? new Set([...t].filter((e) => void 0 !== e)) : void 0;
	}), e._zod.parse = (n, a) => {
		const i = t.innerType._zod.run(n, a);
		return i instanceof Promise ? i.then((t) => Qu(t, e)) : Qu(i, e);
	};
});
function Qu(e, t) {
	return e.issues.length || void 0 !== e.value || e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function ed(e, t, n, a) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => rl(e, a, xl())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
const td = Sl("$ZodCatch", (e, t) => {
	Lc.init(e, t), yl(e, "optin", (e) => "defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional"), yl(e, "optout", (e) => e.def.innerType._zod.optout), yl(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const a = t.innerType._zod.run({
			value: e.value,
			issues: []
		}, n);
		return a instanceof Promise ? a.then((a) => ed(e, a, t, n)) : ed(e, a, t, n);
	};
}), nd = Sl("$ZodPipe", (e, t) => {
	Lc.init(e, t), yl(e, "values", (e) => e.def.in._zod.values), yl(e, "optin", (e) => e.def.in._zod.optin), yl(e, "optout", (e) => e.def.out._zod.optout), yl(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) {
			const a = t.out._zod.run(e, n);
			return a instanceof Promise ? a.then((e) => ad(e, t.in, n)) : ad(a, t.in, n);
		}
		const a = t.in._zod.run(e, n);
		return a instanceof Promise ? a.then((e) => ad(e, t.out, n)) : ad(a, t.out, n);
	};
});
function ad(e, t, n) {
	return e.issues.some((e) => "unrecognized_keys" !== e.code) ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
const id = Sl("$ZodReadonly", (e, t) => {
	Lc.init(e, t), yl(e, "propValues", (e) => e.def.innerType._zod.propValues), yl(e, "values", (e) => e.def.innerType._zod.values), yl(e, "optin", (e) => e.def.innerType?._zod?.optin), yl(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then(rd) : rd(a);
	};
});
function rd(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
const sd = Sl("$ZodCustom", (e, t) => {
	bc.init(e, t), Lc.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		const a = n.value, i = t.fn(a);
		if (i instanceof Promise) return i.then((t) => od(t, n, a, e));
		od(i, n, a, e);
	};
});
function od(e, t, n, a) {
	if (!e) {
		const e = {
			code: "custom",
			input: n,
			inst: a,
			path: [...a._zod.def.path ?? []],
			continue: !a._zod.def.abort
		};
		a._zod.def.params && (e.params = a._zod.def.params), t.issues.push(cl(e));
	}
}
var ld = class extends Error {
	constructor() {
		super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
	}
};
const cd = "~memo", ud = [];
function dd(e) {
	return null !== e && "object" == typeof e;
}
function pd(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
const fd = /* @__PURE__ */ new WeakMap();
function md(e, t, n) {
	const a = fd.get(e);
	if (void 0 !== a) return a ? 2 : 0;
	if (t.has(e)) return 2;
	t.add(e);
	let i = 0;
	const r = (e) => {
		if (2 !== i && e?._zod) {
			const a = md(e, t, n);
			a > i && (i = a);
		}
	}, s = (e) => {
		e > i && (i = e);
	}, o = e._zod.def;
	switch (o.type) {
		case "object": {
			const e = Ro(o);
			s(e ? ((e) => {
				let a = 0;
				for (const i of Reflect.ownKeys(e)) {
					const r = Object.getOwnPropertyDescriptor(e, i);
					if (!r.enumerable) continue;
					const s = r.get ? 1 : r.value?._zod ? md(r.value, t, n) : 0;
					s > a && (a = s);
				}
				return a;
			})(e) : 1), r(o.catchall);
			break;
		}
		case "array":
			r(o.element);
			break;
		case "tuple":
			for (const e of o.items) r(e);
			r(o.rest);
			break;
		case "record":
		case "map":
			r(o.keyType), r(o.valueType);
			break;
		case "set":
			r(o.valueType);
			break;
		case "union":
			for (const e of o.options) r(e);
			break;
		case "intersection":
			r(o.left), r(o.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			r(o.innerType);
			break;
		case "pipe":
			r(o.in), r(o.out);
			break;
		case "function":
			r(o.input), r(o.output);
			break;
		case "lazy": {
			const a = o._cachedInner ?? (n ? e._zod.innerType : void 0);
			s(a ? md(a, t, !1) : 1);
			break;
		}
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (const e in o) {
			const t = Object.getOwnPropertyDescriptor(o, e);
			if (!t || t.get) continue;
			const n = t.value;
			if (n && "object" == typeof n) {
				if (n._zod) r(n);
				else if (Array.isArray(n)) for (const e of n) r(e);
			}
		}
	}
	return t.delete(e), function(e, t) {
		return 1 !== t && fd.set(e, 2 === t), t;
	}(e, i);
}
let hd;
const gd = [], yd = {
	alloc(e, t, n) {
		const a = hd;
		if (!a) return n;
		hd = void 0;
		const i = {
			value: n,
			issues: null
		};
		return a.set(t.value, i), gd.push(i), n;
	},
	guard(e) {
		var t;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			const t = e._zod.parse, n = (e, n) => {
				if ("backward" !== n.direction && function(e, t) {
					const n = e[cd]?.backEdges;
					return void 0 !== n && dd(t) && n.has(t);
				}(n, e.value)) throw new ld();
				return t(e, n);
			};
			e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
		});
	},
	attach(e) {
		var t;
		let n, a, i, r = !1;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			const t = e._zod.parse, s = (o, l) => {
				if (void 0 === n) {
					const a = md(e, /* @__PURE__ */ new Set(), !1);
					if (0 === a) return e._zod.parse = t, e._zod.run === s && (e._zod.run = t), t(o, l);
					2 === a || r ? n = !0 : r = !0;
				}
				const c = o.value;
				if (!dd(c)) return t(o, l);
				let u, d = l[cd];
				d || (d = {
					buckets: /* @__PURE__ */ new WeakMap(),
					backEdges: void 0
				}, l[cd] = d), a === l ? u = i : (u = function(e, t) {
					let n = e.buckets.get(t);
					return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
				}(d, e), a = l, i = u);
				const p = u.get(c);
				if (p) return o.value = p.value, p.issues ? p.issues.length && o.issues.push(...pd(p.issues)) : (o.memo = !0, d.backEdges ?? (d.backEdges = /* @__PURE__ */ new WeakSet()), d.backEdges.add(p.value)), o;
				hd = u;
				const f = gd.length, m = t(o, l);
				hd = void 0;
				const h = gd.length > f ? gd.pop() : void 0;
				return m instanceof Promise ? m.then((e) => (h && (h.issues = e.issues.length ? pd(e.issues) : ud), e)) : (h && (h.issues = m.issues.length ? pd(m.issues) : ud), m);
			};
			e._zod.parse = s, e._zod.run === t && (e._zod.run = s);
		});
	}
}, wd = () => {
	const e = {
		string: {
			unit: "characters",
			verb: "to have"
		},
		file: {
			unit: "bytes",
			verb: "to have"
		},
		array: {
			unit: "items",
			verb: "to have"
		},
		set: {
			unit: "items",
			verb: "to have"
		},
		map: {
			unit: "entries",
			verb: "to have"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	const n = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		mac: "MAC address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		currency_code: "currency code",
		credit_card: "credit card number",
		iban: "IBAN",
		jwt: "JWT",
		template_literal: "input"
	}, a = { nan: "NaN" };
	function i(e, t) {
		return "number" !== e || "number" != typeof t || Number.isFinite(t) ? a[e] ?? e : String(t);
	}
	return (e) => {
		switch (e.code) {
			case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(function(e) {
				const t = typeof e;
				switch (t) {
					case "number": return Number.isNaN(e) ? "nan" : "number";
					case "object": {
						if (null === e) return "null";
						if (Array.isArray(e)) return "array";
						const t = e;
						if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
					}
				}
				return t;
			}(e.input), e.input)}`;
			case "invalid_value": return 1 === e.values.length ? `Invalid input: expected ${Vo(e.values[0])}` : `Invalid option: expected one of ${Ao(e.values, "|")}`;
			case "too_big": {
				const n = e.exact ? "exactly " : e.inclusive ? "<=" : "<", a = t(e.origin);
				return a ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${a.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				const n = e.exact ? "exactly " : e.inclusive ? ">=" : ">", a = t(e.origin);
				return a ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${a.unit}` : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				const t = e;
				return "starts_with" === t.format ? `Invalid string: must start with "${t.prefix}"` : "ends_with" === t.format ? `Invalid string: must end with "${t.suffix}"` : "includes" === t.format ? `Invalid string: must include "${t.includes}"` : "regex" === t.format ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Invalid number: must be a multiple of ${e.divisor}`;
			case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${Ao(e.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${e.origin}`;
			case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : !1 === e.inclusive ? "Invalid input: more than one option matched" : "Invalid input";
			case "invalid_element": return `Invalid value in ${e.origin}`;
			default: return "Invalid input";
		}
	};
};
var _d;
(_d = globalThis).__zod_globalRegistry ?? (_d.__zod_globalRegistry = new class {
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
const vd = globalThis.__zod_globalRegistry;
function bd(e) {
	return e.checks && (e.checks = [...e.checks]), e;
}
function Sd(e, t) {
	return new Ic({
		check: "less_than",
		...qo(t),
		value: e,
		inclusive: !1
	});
}
function kd(e, t) {
	return new Ic({
		check: "less_than",
		...qo(t),
		value: e,
		inclusive: !0
	});
}
function Id(e, t) {
	return new Ac({
		check: "greater_than",
		...qo(t),
		value: e,
		inclusive: !1
	});
}
function Ad(e, t) {
	return new Ac({
		check: "greater_than",
		...qo(t),
		value: e,
		inclusive: !0
	});
}
function xd(e, t) {
	return new xc({
		check: "multiple_of",
		...qo(t),
		value: e
	});
}
function Td(e, t) {
	return new Nc({
		check: "max_length",
		...qo(t),
		maximum: e
	});
}
function Nd(e, t) {
	return new Mc({
		check: "min_length",
		...qo(t),
		minimum: e
	});
}
function Md(e, t) {
	return new $c({
		check: "length_equals",
		...qo(t),
		length: e
	});
}
function $d(e) {
	return new Fc({
		check: "overwrite",
		tx: e
	});
}
function Rd(e, t) {
	const n = new bc({
		check: "custom",
		...qo(t)
	});
	return n._zod.check = e, n;
}
function zd(e, ...t) {
	for (const n of t) for (const t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && $o(e, t, n[t]);
	return e;
}
function Dd(e) {
	let t = e?.target ?? "draft-2020-12";
	return "draft-4" === t && (t = "draft-04"), "draft-7" === t && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? vd,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: e?.external ?? void 0
	};
}
function Ed(e, t, n, a, i) {
	const r = "function" == typeof t.unrepresentable ? t.unrepresentable({
		zodSchema: e,
		path: a.path,
		message: i
	}) : t.unrepresentable;
	if ("any" === r) return !1;
	if (void 0 === r || "throw" === r) throw new Error(i);
	return Object.assign(n, r), !0;
}
function Cd(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var a;
	const i = e._zod.def, r = t.seen.get(e);
	if (r) return r.count++, n.schemaPath.includes(e) && (r.cycle = n.path), r.schema;
	const s = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, s), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
	const o = e._zod.toJSONSchema?.();
	if (o) s.schema = o;
	else {
		const a = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, s.schema, a);
		else {
			const n = s.schema, r = t.processors[i.type];
			if (!r) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			r(e, t, n, a);
		}
		const r = e._zod.parent;
		r && (s.ref || (s.ref = r), Cd(r, t, a), t.seen.get(r).isParent = !0);
	}
	const l = t.metadataRegistry.get(e);
	return l && zd(s.schema, l), "input" === t.io && Zd(e) && (delete s.schema.examples, delete s.schema.default), "input" === t.io && "_prefault" in s.schema && ((a = s.schema).default ?? (a.default = s.schema._prefault)), delete s.schema._prefault, t.seen.get(e).schema;
}
function Od(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Pd(e, t) {
	const n = e.seen.get(t);
	if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
	if (e.external && e.sharedDefsExtractedFor === e.external) return;
	const a = /* @__PURE__ */ new Map();
	for (const r of e.seen.entries()) {
		const t = e.metadataRegistry.get(r[0])?.id;
		if (t) {
			const e = a.get(t);
			if (e && e !== r[0]) throw new Error(`Duplicate schema id "${t}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			a.set(t, r[0]);
		}
	}
	const i = (t) => {
		if (t[1].schema.$ref) return;
		const a = t[1], { ref: i, defId: r } = ((t) => {
			const a = "draft-2020-12" === e.target ? "$defs" : "definitions";
			if (e.external) {
				const n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
				if (n) return { ref: i(n) };
				const r = t[1].defId ?? t[1].schema.id ?? "schema" + e.counter++;
				return t[1].defId = r, {
					defId: r,
					ref: `${i("__shared")}#/${a}/${Od(r)}`
				};
			}
			const i = `#/${a}/`;
			if (t[1] === n && !t[1].schema.id) return { ref: "#" };
			const r = t[1].schema.id ?? "__schema" + e.counter++;
			return {
				defId: r,
				ref: i + Od(r)
			};
		})(t);
		a.def = { ...a.schema }, r && (a.defId = r);
		const s = a.schema;
		for (const e in s) delete s[e];
		s.$ref = i;
	};
	if ("throw" === e.cycles) for (const r of e.seen.entries()) {
		const e = r[1];
		if (e.cycle) throw new Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>\n\nSet the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (const r of e.seen.entries()) {
		const n = r[1];
		if (t !== r[0]) {
			if (e.external) {
				const n = e.external.registry.get(r[0])?.id;
				if (t !== r[0] && n) {
					i(r);
					continue;
				}
			}
			(e.metadataRegistry.get(r[0])?.id || n.cycle || n.count > 1 && "ref" === e.reused) && i(r);
		} else i(r);
	}
	e.external && (e.sharedDefsExtractedFor = e.external);
}
function Fd(e) {
	const t = e.anyOf;
	if (!Array.isArray(t) || 0 === t.length || void 0 !== e.type) return;
	const n = [];
	for (const a of t) {
		if (!a || "object" != typeof a) return;
		Fd(a);
		const e = Object.keys(a);
		if (1 !== e.length || "type" !== e[0]) return;
		const t = a.type;
		for (const a of Array.isArray(t) ? t : [t]) {
			if ("string" != typeof a) return;
			n.includes(a) || n.push(a);
		}
	}
	delete e.anyOf, e.type = 1 === n.length ? n[0] : n;
}
const jd = /* @__PURE__ */ new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]), Bd = ["oneOf", "anyOf"];
function Ld(e) {
	const t = e.additionalProperties;
	return void 0 === t || !1 === t || "object" != typeof t || null === t ? null : Object.keys(t).length ? t : null;
}
function Gd(e) {
	const t = [];
	for (const r of e) {
		if ("object" != typeof r || "object" !== r.type) return null;
		for (const e in r) if (!jd.has(e)) return null;
		t.push(r);
	}
	const n = {}, a = /* @__PURE__ */ new Set();
	for (const r of t) {
		for (const e in r.properties) {
			if (Object.prototype.hasOwnProperty.call(n, e)) continue;
			const a = [];
			for (const n of t) {
				const t = n.properties?.[e] ?? Ld(n);
				null != t && (a.some((e) => JSON.stringify(e) === JSON.stringify(t)) || a.push(t));
			}
			$o(n, e, 1 === a.length ? a[0] : Gd(a) ?? { allOf: a });
		}
		for (const e of r.required ?? []) a.add(e);
	}
	const i = {
		type: "object",
		properties: n
	};
	if (a.size && (i.required = [...a]), t.every((e) => !1 === e.additionalProperties)) i.additionalProperties = !1;
	else {
		const e = [];
		for (const n of t) {
			const t = Ld(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		1 === e.length ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function Ud(e) {
	const t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (const i of jd) if (i in e) return;
	const n = t.filter((e) => Bd.some((t) => Array.isArray(e[t])));
	let a = null;
	if (n.length) {
		const e = n[0], i = Bd.find((t) => Array.isArray(e[t]));
		if (1 !== Object.keys(e).length) return;
		const r = t.filter((t) => t !== e), s = e[i].map((e) => Gd([...r, e]));
		if (s.some((e) => !e)) return;
		a = { [i]: s };
	} else a = Gd(t);
	a && (delete e.allOf, zd(e, a));
}
function Hd(e, t) {
	const n = e.seen.get(t);
	if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const a = (t) => {
		const n = e.seen.get(t);
		if (null === n.ref) return;
		const i = n.def ?? n.schema, r = { ...i }, s = n.ref;
		if (n.ref = null, s) {
			a(s);
			const n = e.seen.get(s), o = n.schema;
			if (!o.$ref || "draft-07" !== e.target && "draft-04" !== e.target && "openapi-3.0" !== e.target ? zd(i, o) : (i.allOf = i.allOf ?? [], i.allOf.push(o)), zd(i, r), t._zod.parent === s) for (const e in i) "$ref" !== e && "allOf" !== e && (e in r || delete i[e]);
			if (o.$ref && n.def) for (const e in i) "$ref" !== e && "allOf" !== e && e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		const o = t._zod.parent;
		if (o && o !== s) {
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
	if (!e.external || e.sharedEmitDoneFor !== e.external) {
		for (const t of [...e.seen.entries()].reverse()) a(t[0]);
		if ("openapi-3.0" !== e.target) for (const t of e.seen.entries()) Fd(t[1].def ?? t[1].schema);
		for (const t of e.deferred) t();
		if (e.intersections.length) {
			const t = /* @__PURE__ */ new Map();
			for (const n of e.seen.values()) for (const e of [n.schema, n.def]) {
				const n = e?.allOf;
				if (!Array.isArray(n)) continue;
				const a = t.get(n);
				a ? a.push(e) : t.set(n, [e]);
			}
			for (const n of e.intersections) for (const e of t.get(n) ?? []) Ud(e);
		}
	}
	const i = {};
	if ("draft-2020-12" === e.target ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === e.target ? i.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === e.target ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		const n = e.external.registry.get(t)?.id;
		if (!n) throw new Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	zd(i, n.defId ? n.schema : n.def ?? n.schema);
	const r = e.metadataRegistry.get(t)?.id;
	void 0 !== r && i.id === r && delete i.id;
	const s = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (const l of e.seen.entries()) {
		const e = l[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, $o(s, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(s).length > 0 && ("draft-2020-12" === e.target ? i.$defs = s : i.definitions = s);
	try {
		const n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: qd(t, "input", e.processors),
					output: qd(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch (o) {
		throw new Error("Error converting schema to JSON.");
	}
}
function Zd(e, t) {
	const n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	const a = e._zod.def;
	if ("transform" === a.type) return !0;
	if ("array" === a.type) return Zd(a.element, n);
	if ("set" === a.type) return Zd(a.valueType, n);
	if ("lazy" === a.type) return Zd(a.getter(), n);
	if ("promise" === a.type || "optional" === a.type || "nonoptional" === a.type || "nullable" === a.type || "readonly" === a.type || "default" === a.type || "prefault" === a.type || "catch" === a.type) return Zd(a.innerType, n);
	if ("intersection" === a.type) return Zd(a.left, n) || Zd(a.right, n);
	if ("record" === a.type || "map" === a.type) return Zd(a.keyType, n) || Zd(a.valueType, n);
	if ("pipe" === a.type) return !!e._zod.traits.has("$ZodCodec") || Zd(a.in, n) || Zd(a.out, n);
	if ("object" === a.type) {
		for (const e in a.shape) if (Zd(a.shape[e], n)) return !0;
		return !1;
	}
	if ("union" === a.type) {
		for (const e of a.options) if (Zd(e, n)) return !0;
		return !1;
	}
	if ("tuple" === a.type) {
		for (const e of a.items) if (Zd(e, n)) return !0;
		return !(!a.rest || !Zd(a.rest, n));
	}
	return !1;
}
const qd = (e, t, n = {}) => (a) => {
	const { libraryOptions: i, target: r } = a ?? {}, s = Dd({
		...i ?? {},
		target: r,
		io: t,
		processors: n
	});
	return Cd(e, s), Pd(s, e), Hd(s, e);
}, Vd = (e, t, n) => {
	(void 0 === e[t] || n > e[t]) && (e[t] = n);
}, Wd = (e, t, n) => {
	(void 0 === e[t] || n < e[t]) && (e[t] = n);
}, Jd = (e, t) => {
	Vd(e, "minimum", t), Wd(e, "maximum", t);
}, Kd = (e, t) => {
	e.multipleOf ?? (e.multipleOf = []), e.multipleOf.includes(t) || e.multipleOf.push(t);
}, Yd = (e, t) => {
	e.patterns ?? (e.patterns = /* @__PURE__ */ new Set()), e.patterns.add(t);
}, Xd = (e, t) => {
	e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
}, Qd = (e, t) => {
	e.format = t, t.includes("int") && (e.isInt = !0);
}, ep = (e, t) => Vd(e, "minimum", t.minimum), tp = (e, t) => Wd(e, "maximum", t.maximum), np = (e) => (t, n) => {
	Qd(t, n.format);
	const [a, i] = e[n.format];
	Vd(t, "minimum", a), Wd(t, "maximum", i);
}, ap = {
	greater_than: (e, t) => Vd(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
	less_than: (e, t) => Wd(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
	multiple_of: (e, t) => Kd(e, t.value),
	number_format: np(Wo),
	bigint_format: np(Jo),
	min_length: ep,
	max_length: tp,
	length_equals: (e, t) => Jd(e, t.length),
	min_size: ep,
	max_size: tp,
	size_equals: (e, t) => Jd(e, t.size),
	string_format: (e, t) => {
		Qd(e, t.format), t.pattern && Yd(e, t.pattern), "base64" !== t.format && "base64url" !== t.format || (e.contentEncoding = t.format), (t.local || -1 === t.precision) && (e.laxFormat = !0);
	},
	mime_type: (e, t) => Xd(e, t.mime)
};
function ip(e) {
	const t = {}, n = e._zod.def, a = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
	for (const r of a) ap[r._zod.def.check]?.(t, r._zod.def);
	const i = e._zod.bag;
	void 0 !== i.minimum && Vd(t, "minimum", i.minimum), void 0 !== i.exclusiveMinimum && Vd(t, "exclusiveMinimum", i.exclusiveMinimum), void 0 !== i.maximum && Wd(t, "maximum", i.maximum), void 0 !== i.exclusiveMaximum && Wd(t, "exclusiveMaximum", i.exclusiveMaximum), void 0 !== i.multipleOf && Kd(t, i.multipleOf), void 0 !== i.format && (t.format ?? (t.format = i.format), i.format.includes("int") && (t.isInt = !0)), i.mime && Xd(t, i.mime);
	for (const r of i.patterns ?? []) Yd(t, r);
	return t;
}
const rp = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, sp = /* @__PURE__ */ new Map([[yu, /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/], [_u, /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/]]), op = (e) => sp.get(e) ?? e;
function lp(e) {
	const t = e._zod.def;
	return "pipe" === t.type && t.in._zod.traits.has("$ZodTransform") ? lp(t.out) : "catch" === t.type ? lp(t.innerType) : e._zod.optin;
}
function cp(e, t, n) {
	if (t.$ref) {
		if (n.has(t)) return t;
		n.add(t);
		const a = e.get(t)?.def;
		if (!a) return t;
		const i = cp(e, a, n);
		return i === a ? t : i;
	}
	for (const m of ["anyOf", "oneOf"]) {
		const a = t[m];
		if (!Array.isArray(a)) continue;
		const i = a.map((t) => cp(e, t, n));
		i.some((e, t) => e !== a[t]) && (t = {
			...t,
			[m]: i
		});
	}
	const a = Array.isArray(t.type) ? t.type : [t.type], i = !a.includes("string") && a.some((e) => "number" === e || "integer" === e), r = t.enum ?? (void 0 !== t.const ? [t.const] : void 0);
	if (!i && !r?.some((e) => "number" == typeof e)) return t;
	const { minimum: s, maximum: o, exclusiveMinimum: l, exclusiveMaximum: c, multipleOf: u, format: d, id: p, ...f } = t;
	return f.enum ? f.enum = f.enum.map((e) => "number" == typeof e ? String(e) : e) : "number" == typeof f.const && (f.const = String(f.const)), i ? (f.type = "string", r || (f.pattern = (a.includes("number") ? yc : gc).source), f) : f;
}
const up = /* @__PURE__ */ new WeakMap(), dp = Symbol();
function pp(e, t, n, a, i) {
	let r = !1;
	const s = JSON.stringify(e, (e, t) => "bigint" != typeof t ? t : (r = !0, null));
	return r ? (Ed(t, n, a, i, "BigInt defaults cannot be represented in JSON Schema"), dp) : JSON.parse(s);
}
const fp = (e, t, n, a) => {
	const i = e._zod.def;
	Cd(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
}, mp = new WeakSet([Object.prototype, Error.prototype]);
function hp(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			const e = n(this);
			return Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	});
}
const gp = (e, t) => {
	Rl.init(e, t), e.name = "ZodError";
	const n = Object.getPrototypeOf(e);
	mp.has(n) || (mp.add(n), hp(n, "format", (e) => (t) => function(e, t = (e) => e.message) {
		const n = { _errors: [] }, a = (e, i = []) => {
			for (const r of e.issues) if ("invalid_union" === r.code && r.errors.length) r.errors.map((e) => a({ issues: e }, [...i, ...r.path]));
			else if ("invalid_key" === r.code) a({ issues: r.issues }, [...i, ...r.path]);
			else if ("invalid_element" === r.code) a({ issues: r.issues }, [...i, ...r.path]);
			else {
				const e = [...i, ...r.path];
				if (0 === e.length) n._errors.push(t(r));
				else {
					let a = n, i = 0;
					for (; i < e.length;) {
						const n = e[i], s = i === e.length - 1;
						if ("_errors" === n) {
							s && a._errors.push(t(r)), i++;
							continue;
						}
						Object.prototype.hasOwnProperty.call(a, n) || Object.defineProperty(a, n, {
							value: { _errors: [] },
							enumerable: !0,
							writable: !0,
							configurable: !0
						});
						const o = a[n];
						s && o._errors.push(t(r)), a = o, i++;
					}
				}
			}
		};
		return a(e), n;
	}(e, t)), hp(n, "flatten", (e) => (t) => function(e, t = (e) => e.message) {
		const n = {}, a = [];
		for (const i of e.issues) i.path.length > 0 ? zl(n, i.path[0], () => []).push(t(i)) : a.push(t(i));
		return {
			formErrors: a,
			fieldErrors: n
		};
	}(e, t)), hp(n, "addIssue", (e) => (t) => {
		e.issues.push(t), e.message = JSON.stringify(e.issues, xo, 2);
	}), hp(n, "addIssues", (e) => (t) => {
		e.issues.push(...t), e.message = JSON.stringify(e.issues, xo, 2);
	}), Object.defineProperty(n, "isEmpty", {
		configurable: !0,
		enumerable: !1,
		get() {
			return 0 === this.issues.length;
		}
	}));
}, yp = Sl("ZodError", gp, void 0, { Parent: Error }), wp = El(yp), _p = Cl(yp), vp = Ol(yp), bp = Fl(yp), Sp = Ll(yp), kp = Gl(yp), Ip = Ul(yp), Ap = Hl(yp), xp = Zl(yp), Tp = ql(yp), Np = Vl(yp), Mp = Wl(yp);
function $p() {
	Al.memoizer || xl({ memoizer: yd });
}
const Rp = Sl("ZodType", (e, t) => (Al.localeError || xl({ localeError: wd() }), Lc.init(e, t), e.def = t, e.type = t.type, e), {
	check(...e) {
		const t = this.def;
		return this.clone(Oo(t, { checks: [...t.checks ?? [], ...e.map((e) => "function" == typeof e ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return Zo(this, e, t);
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
				return new jf({
					type: "custom",
					check: "custom",
					fn: t,
					...qo(n)
				});
			}(0, e, t);
		}(e, t));
	},
	superRefine(e, t) {
		return this.check(function(e, t) {
			return function(e, t) {
				const n = Rd((t) => (t.addIssue = (e) => {
					if ("string" == typeof e) t.issues.push(cl(e, t.value, n._zod.def));
					else {
						const a = e;
						a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), "input" in a || (a.input = t.value), a.inst ?? (a.inst = n), a.continue ?? (a.continue = !n._zod.def.abort), t.issues.push(cl(a));
					}
				}, e(t.value, t)), t);
				return n;
			}(e, t);
		}(e, t));
	},
	overwrite(e) {
		return this.check($d(e));
	},
	optional() {
		return Nf(this);
	},
	exactOptional() {
		return new Mf({
			type: "optional",
			innerType: this
		});
	},
	nullable() {
		return Rf(this);
	},
	nullish() {
		return Nf(Rf(this));
	},
	nonoptional(e) {
		return function(e, t) {
			return new Ef({
				type: "nonoptional",
				innerType: e,
				...qo(t)
			});
		}(this, e);
	},
	array() {
		return gf(this);
	},
	or(e) {
		return vf([this, e]);
	},
	and(e) {
		return new bf({
			type: "intersection",
			left: this,
			right: e
		});
	},
	transform(e) {
		return Pf(this, new xf({
			type: "transform",
			transform: e
		}));
	},
	default(e) {
		return t = e, new zf({
			type: "default",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Go(t);
			}
		});
		var t;
	},
	prefault(e) {
		return t = e, new Df({
			type: "prefault",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Go(t);
			}
		});
		var t;
	},
	catch(e) {
		return new Cf({
			type: "catch",
			innerType: this,
			catchValue: "function" == typeof (t = e) ? t : wl(t)
		});
		var t;
	},
	pipe(e) {
		return Pf(this, e);
	},
	readonly() {
		return new Ff({
			type: "readonly",
			innerType: this
		});
	},
	describe(e) {
		const t = this.clone();
		return vd.add(t, { description: e }), t;
	},
	meta(...e) {
		if (0 === e.length) return vd.get(this);
		const t = this.clone();
		return vd.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e, ...t) {
		return 0 === t.length ? e(this) : e(this, ...t);
	},
	get "~standard"() {
		return dl(this, "~standard", {
			...Uc(this),
			jsonSchema: {
				input: qd(this, "input"),
				output: qd(this, "output")
			}
		});
	},
	set "~standard"(e) {
		ul(this, "~standard", e);
	},
	parse: function e(t, n) {
		return wp(this, t, n, { callee: e });
	},
	parseAsync: async function e(t, n) {
		return await _p(this, t, n, { callee: e });
	},
	safeParse(e, t) {
		return vp(this, e, t);
	},
	async safeParseAsync(e, t) {
		return bp(this, e, t);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(e) {
		ul(this, "spa", e);
	},
	validate(e, t) {
		return ((e, t, n) => {
			const a = e._zod.bag.validator;
			if (void 0 !== a) {
				if (a(t) !== jl) return !0;
				if (!0 === a.definite && void 0 === n) return !1;
			}
			return function(e, t, n) {
				const a = n ? {
					...n,
					async: !1,
					abortEarly: !0
				} : {
					async: !1,
					abortEarly: !0
				}, i = e._zod.bag.fallbackRun;
				let r;
				if (i ? (a[Bl] = !0, r = i({
					value: t,
					issues: []
				}, a)) : r = e._zod.run({
					value: t,
					issues: []
				}, a), r instanceof Promise) throw new kl();
				return 0 === r.issues.length;
			}(e, t, n);
		})(this, e, t);
	},
	validateAsync(e, t) {
		return (async (e, t, n) => {
			const a = n ? {
				...n,
				async: !0,
				abortEarly: !0
			} : {
				async: !0,
				abortEarly: !0
			};
			let i = e._zod.run({
				value: t,
				issues: []
			}, a);
			return i instanceof Promise && (i = await i), 0 === i.issues.length;
		})(this, e, t);
	},
	encode: function e(t, n) {
		return Sp(this, t, n, { callee: e });
	},
	decode: function e(t, n) {
		return kp(this, t, n, { callee: e });
	},
	encodeAsync: async function e(t, n) {
		return await Ip(this, t, n, { callee: e });
	},
	decodeAsync: async function e(t, n) {
		return await Ap(this, t, n, { callee: e });
	},
	safeEncode(e, t) {
		return xp(this, e, t);
	},
	safeDecode(e, t) {
		return Tp(this, e, t);
	},
	async safeEncodeAsync(e, t) {
		return Np(this, e, t);
	},
	async safeDecodeAsync(e, t) {
		return Mp(this, e, t);
	},
	toJSONSchema(e) {
		return ((e, t = {}) => (n) => {
			const a = Dd({
				...n,
				processors: t
			});
			return Cd(e, a), Pd(a, e), Hd(a, e);
		})(this, {})(e);
	},
	get description() {
		return vd.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), zp = Sl("_ZodString", (e, t) => {
	Hc.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = n;
		a.type = "string";
		const { minimum: i, maximum: r, format: s, patterns: o, contentEncoding: l, laxFormat: c } = ip(e);
		if ("number" == typeof i && (a.minLength = i), "number" == typeof r && (a.maxLength = r), s && (a.format = rp[s] ?? s, "" === a.format && delete a.format, ("time" === s || c) && delete a.format), l && (a.contentEncoding = l), o && o.size > 0) {
			const e = [...o].map(op);
			1 === e.length ? a.pattern = e[0].source : e.length > 1 && (a.allOf = [...e.map((e) => ({
				..."draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	})(e, t, n);
}, pl({
	format: (e) => ip(e).format ?? null,
	minLength: (e) => ip(e).minimum ?? null,
	maxLength: (e) => ip(e).maximum ?? null
}, {
	regex(...e) {
		return this.check(function(e, t) {
			return new zc({
				check: "string_format",
				format: "regex",
				...qo(t),
				pattern: e
			});
		}(...e));
	},
	includes(...e) {
		return this.check(function(e, t) {
			return new Cc({
				check: "string_format",
				format: "includes",
				...qo(t),
				includes: e
			});
		}(...e));
	},
	startsWith(...e) {
		return this.check(function(e, t) {
			return new Oc({
				check: "string_format",
				format: "starts_with",
				...qo(t),
				prefix: e
			});
		}(...e));
	},
	endsWith(...e) {
		return this.check(function(e, t) {
			return new Pc({
				check: "string_format",
				format: "ends_with",
				...qo(t),
				suffix: e
			});
		}(...e));
	},
	min(...e) {
		return this.check(Nd(...e));
	},
	max(...e) {
		return this.check(Td(...e));
	},
	length(...e) {
		return this.check(Md(...e));
	},
	nonempty(...e) {
		return this.check(Nd(1, ...e));
	},
	lowercase(e) {
		return this.check(function(e) {
			return new Dc({
				check: "string_format",
				format: "lowercase",
				...qo(e)
			});
		}(e));
	},
	uppercase(e) {
		return this.check(function(e) {
			return new Ec({
				check: "string_format",
				format: "uppercase",
				...qo(e)
			});
		}(e));
	},
	trim() {
		return this.check($d((e) => e.trim()));
	},
	normalize(...e) {
		return this.check(function(e) {
			return $d((t) => t.normalize(e));
		}(...e));
	},
	toLowerCase() {
		return this.check($d((e) => e.toLowerCase()));
	},
	toUpperCase() {
		return this.check($d((e) => e.toUpperCase()));
	},
	slugify() {
		return this.check($d((e) => function(e) {
			return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
		}(e)));
	}
})), Dp = Sl("ZodString", (e, t) => {
	Hc.init(e, t), zp.init(e, t);
}, {
	email(e) {
		return this.check(function(e, t) {
			return new Bp({
				type: "string",
				format: "email",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	url(e) {
		return this.check(function(e, t) {
			return new Up({
				type: "string",
				format: "url",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	jwt(e) {
		return this.check(function(e, t) {
			return new rf({
				type: "string",
				format: "jwt",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	emoji(e) {
		return this.check(function(e, t) {
			return new Hp({
				type: "string",
				format: "emoji",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	guid(e) {
		return this.check(function(e, t) {
			return new Lp({
				type: "string",
				format: "guid",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	uuid(e) {
		return this.check(function(e, t) {
			return new Gp({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	uuidv4(e) {
		return this.check(function(e, t) {
			return new Gp({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: !1,
				version: "v4",
				...qo(t)
			});
		}(0, e));
	},
	uuidv6(e) {
		return this.check(function(e, t) {
			return new Gp({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: !1,
				version: "v6",
				...qo(t)
			});
		}(0, e));
	},
	uuidv7(e) {
		return this.check(function(e, t) {
			return new Gp({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: !1,
				version: "v7",
				...qo(t)
			});
		}(0, e));
	},
	nanoid(e) {
		return this.check(function(e, t) {
			return new Zp({
				type: "string",
				format: "nanoid",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	cuid(e) {
		return this.check(function(e, t) {
			return new qp({
				type: "string",
				format: "cuid",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	cuid2(e) {
		return this.check(function(e, t) {
			return new Vp({
				type: "string",
				format: "cuid2",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	ulid(e) {
		return this.check(function(e, t) {
			return new Wp({
				type: "string",
				format: "ulid",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	base64(e) {
		return this.check(function(e, t) {
			return new tf({
				type: "string",
				format: "base64",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	base64url(e) {
		return this.check(function(e, t) {
			return new nf({
				type: "string",
				format: "base64url",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	xid(e) {
		return this.check(function(e, t) {
			return new Jp({
				type: "string",
				format: "xid",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	ksuid(e) {
		return this.check(function(e, t) {
			return new Kp({
				type: "string",
				format: "ksuid",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	ipv4(e) {
		return this.check(function(e, t) {
			return new Yp({
				type: "string",
				format: "ipv4",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	ipv6(e) {
		return this.check(function(e, t) {
			return new Xp({
				type: "string",
				format: "ipv6",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	cidrv4(e) {
		return this.check(function(e, t) {
			return new Qp({
				type: "string",
				format: "cidrv4",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	cidrv6(e) {
		return this.check(function(e, t) {
			return new ef({
				type: "string",
				format: "cidrv6",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	e164(e) {
		return this.check(function(e, t) {
			return new af({
				type: "string",
				format: "e164",
				check: "string_format",
				abort: !1,
				...qo(t)
			});
		}(0, e));
	},
	datetime(e) {
		return this.check(function(e, t) {
			return new Op({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: !1,
				local: !1,
				precision: null,
				...qo(t)
			});
		}(0, e));
	},
	date(e) {
		return this.check(function(e, t) {
			return new Pp({
				type: "string",
				format: "date",
				check: "string_format",
				...qo(t)
			});
		}(0, e));
	},
	time(e) {
		return this.check(function(e, t) {
			return new Fp({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...qo(t)
			});
		}(0, e));
	},
	duration(e) {
		return this.check(function(e, t) {
			return new jp({
				type: "string",
				format: "duration",
				check: "string_format",
				...qo(t)
			});
		}(0, e));
	}
});
function Ep(e) {
	return function(e, t) {
		return new Dp(bd({
			type: "string",
			...qo(t)
		}));
	}(0, e);
}
const Cp = Sl("ZodStringFormat", (e, t) => {
	Zc.init(e, t), zp.init(e, t);
}), Op = Sl("ZodISODateTime", (e, t) => {
	su.init(e, t), Cp.init(e, t);
}), Pp = Sl("ZodISODate", (e, t) => {
	ou.init(e, t), Cp.init(e, t);
}), Fp = Sl("ZodISOTime", (e, t) => {
	lu.init(e, t), Cp.init(e, t);
}), jp = Sl("ZodISODuration", (e, t) => {
	cu.init(e, t), Cp.init(e, t);
}), Bp = Sl("ZodEmail", (e, t) => {
	Wc.init(e, t), Cp.init(e, t);
}), Lp = Sl("ZodGUID", (e, t) => {
	qc.init(e, t), Cp.init(e, t);
}), Gp = Sl("ZodUUID", (e, t) => {
	Vc.init(e, t), Cp.init(e, t);
}), Up = Sl("ZodURL", (e, t) => {
	Xc.init(e, t), Cp.init(e, t);
}), Hp = Sl("ZodEmoji", (e, t) => {
	Qc.init(e, t), Cp.init(e, t);
}), Zp = Sl("ZodNanoID", (e, t) => {
	eu.init(e, t), Cp.init(e, t);
}), qp = Sl("ZodCUID", (e, t) => {
	tu.init(e, t), Cp.init(e, t);
}), Vp = Sl("ZodCUID2", (e, t) => {
	nu.init(e, t), Cp.init(e, t);
}), Wp = Sl("ZodULID", (e, t) => {
	au.init(e, t), Cp.init(e, t);
}), Jp = Sl("ZodXID", (e, t) => {
	iu.init(e, t), Cp.init(e, t);
}), Kp = Sl("ZodKSUID", (e, t) => {
	ru.init(e, t), Cp.init(e, t);
}), Yp = Sl("ZodIPv4", (e, t) => {
	uu.init(e, t), Cp.init(e, t);
}), Xp = Sl("ZodIPv6", (e, t) => {
	fu.init(e, t), Cp.init(e, t);
}), Qp = Sl("ZodCIDRv4", (e, t) => {
	mu.init(e, t), Cp.init(e, t);
}), ef = Sl("ZodCIDRv6", (e, t) => {
	hu.init(e, t), Cp.init(e, t);
}), tf = Sl("ZodBase64", (e, t) => {
	wu.init(e, t), Cp.init(e, t);
}), nf = Sl("ZodBase64URL", (e, t) => {
	vu.init(e, t), Cp.init(e, t);
}), af = Sl("ZodE164", (e, t) => {
	bu.init(e, t), Cp.init(e, t);
}), rf = Sl("ZodJWT", (e, t) => {
	Su.init(e, t), Cp.init(e, t);
}), sf = Sl("ZodNumber", (e, t) => {
	ku.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, { minimum: r, maximum: s, multipleOf: o, exclusiveMaximum: l, exclusiveMinimum: c, isInt: u } = ip(e);
		i.type = u ? "integer" : "number";
		const d = "number" == typeof c && c >= (r ?? Number.NEGATIVE_INFINITY), p = "number" == typeof l && l <= (s ?? Number.POSITIVE_INFINITY), f = "draft-04" === t.target || "openapi-3.0" === t.target;
		if (d ? f ? (i.minimum = c, i.exclusiveMinimum = !0) : i.exclusiveMinimum = c : "number" == typeof r && (i.minimum = r), p ? f ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : "number" == typeof s && (i.maximum = s), o) {
			const n = /* @__PURE__ */ new Set();
			for (const l of o) Number.isFinite(l) && 0 !== l ? n.add(Math.abs(l)) : Ed(e, t, i, a, `A multipleOf divisor of ${l} cannot be represented in JSON Schema`);
			const [r, ...s] = n;
			void 0 !== r && (i.multipleOf = r), s.length && (i.allOf = [...i.allOf ?? [], ...s.map((e) => ({ multipleOf: e }))]);
		}
	})(e, t, n, a), e.isFinite = !0;
}, pl({
	minValue: (e) => {
		const { minimum: t, exclusiveMinimum: n } = ip(e);
		return Math.max(t ?? Number.NEGATIVE_INFINITY, n ?? Number.NEGATIVE_INFINITY);
	},
	maxValue: (e) => {
		const { maximum: t, exclusiveMaximum: n } = ip(e);
		return Math.min(t ?? Number.POSITIVE_INFINITY, n ?? Number.POSITIVE_INFINITY);
	},
	isInt: (e) => {
		const { isInt: t, multipleOf: n } = ip(e);
		return !!t || !!n?.some(Number.isSafeInteger);
	},
	format: (e) => ip(e).format ?? null
}, {
	gt(e, t) {
		return this.check(Id(e, t));
	},
	gte(e, t) {
		return this.check(Ad(e, t));
	},
	min(e, t) {
		return this.check(Ad(e, t));
	},
	lt(e, t) {
		return this.check(Sd(e, t));
	},
	lte(e, t) {
		return this.check(kd(e, t));
	},
	max(e, t) {
		return this.check(kd(e, t));
	},
	int(e) {
		return this.check(cf(e));
	},
	safe(e) {
		return this.check(cf(e));
	},
	positive(e) {
		return this.check(Id(0, e));
	},
	nonnegative(e) {
		return this.check(Ad(0, e));
	},
	negative(e) {
		return this.check(Sd(0, e));
	},
	nonpositive(e) {
		return this.check(kd(0, e));
	},
	multipleOf(e, t) {
		return this.check(xd(e, t));
	},
	step(e, t) {
		return this.check(xd(e, t));
	},
	finite() {
		return this;
	}
}));
function of(e) {
	return function(e, t) {
		return new sf(bd({
			type: "number",
			checks: [],
			...qo(t)
		}));
	}(0, e);
}
const lf = Sl("ZodNumberFormat", (e, t) => {
	Iu.init(e, t), sf.init(e, t);
});
function cf(e) {
	return function(e, t) {
		return new lf({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...qo(t)
		});
	}(0, e);
}
const uf = Sl("ZodBoolean", (e, t) => {
	Au.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.type = "boolean";
	})(0, 0, t);
});
function df(e) {
	return function(e, t) {
		return new uf({
			type: "boolean",
			...qo(t)
		});
	}(0, e);
}
const pf = Sl("ZodUnknown", (e, t) => {
	xu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (e, t, n) => {};
});
function ff() {
	return new pf({ type: "unknown" });
}
const mf = Sl("ZodNever", (e, t) => {
	Tu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.not = {};
	})(0, 0, t);
});
const hf = Sl("ZodArray", (e, t) => {
	$p(), $u.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, r = e._zod.def, { minimum: s, maximum: o } = ip(e);
		"number" == typeof s && (i.minItems = s), "number" == typeof o && (i.maxItems = o), i.type = "array", i.items = Cd(r.element, t, {
			...a,
			path: [...a.path, "items"]
		});
	})(e, t, n, a), e.element = t.element;
}, {
	min(e, t) {
		return this.check(Nd(e, t));
	},
	nonempty(e) {
		return this.check(Nd(1, e));
	},
	max(e, t) {
		return this.check(Td(e, t));
	},
	length(e, t) {
		return this.check(Md(e, t));
	},
	unwrap() {
		return this.element;
	}
});
function gf(e, t) {
	return function(e, t, n) {
		return new hf({
			type: "array",
			element: t,
			...qo(n)
		});
	}(0, e, t);
}
const yf = Sl("ZodObject", (e, t) => {
	$p(), Ou.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, r = e._zod.def, s = r.shape;
		if (Object.getOwnPropertySymbols(s).length && Ed(e, t, i, a, "Symbol keys cannot be represented in JSON Schema")) return;
		i.type = "object", i.properties = {};
		for (const l in s) $o(i.properties, l, Cd(s[l], t, {
			...a,
			path: [
				...a.path,
				"properties",
				l
			]
		}));
		const o = [];
		for (const l of Object.keys(s)) {
			const e = r.shape[l];
			("input" === t.io ? void 0 === lp(e) : void 0 === e._zod.optout) && o.push(l);
		}
		o.length > 0 && (i.required = o), "never" === r.catchall?._zod.def.type ? i.additionalProperties = !1 : r.catchall ? r.catchall && (i.additionalProperties = Cd(r.catchall, t, {
			...a,
			path: [...a.path, "additionalProperties"]
		})) : "output" === t.io && (i.additionalProperties = !1);
	})(e, t, n, a), function(e, t, n, a) {
		const i = function(e, t) {
			const n = Object.getPrototypeOf(e);
			return t in n ? void 0 : n;
		}(e, t);
		i && Object.defineProperty(i, t, {
			configurable: !0,
			get() {
				const e = {
					configurable: !0,
					writable: !0,
					enumerable: a,
					value: void 0
				};
				return Object.defineProperty(this, t, e), e.value = n(this), Object.defineProperty(this, t, e), e.value;
			},
			set(e) {
				Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					enumerable: a,
					value: e
				});
			}
		});
	}(e, "shape", (e) => e._zod.def.shape, !1);
}, {
	keyof() {
		return Af(Object.keys(this._zod.def.shape));
	},
	catchall(e) {
		return this.clone(Oo(this._zod.def, { catchall: e }));
	},
	passthrough() {
		return this.clone(Oo(this._zod.def, { catchall: ff() }));
	},
	loose() {
		return this.clone(Oo(this._zod.def, { catchall: ff() }));
	},
	strict() {
		return this.clone(Oo(this._zod.def, { catchall: function(e, t) {
			return new mf({
				type: "never",
				...qo(t)
			});
		}(0, e) }));
		var e;
	},
	strip() {
		return this.clone(Oo(this._zod.def, { catchall: void 0 }));
	},
	extend(e) {
		return function(e, t) {
			if (!Lo(t)) throw new Error("Invalid input to extend: expected a plain object");
			const n = e._zod.def.checks;
			if (n && n.length > 0) {
				const n = zo(e);
				for (const e of Reflect.ownKeys(t)) if (void 0 !== Object.getOwnPropertyDescriptor(n, e)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
			}
			return Zo(e, Oo(e._zod.def, { shape: Yo(e, t) }));
		}(this, e);
	},
	safeExtend(e) {
		return function(e, t) {
			if (!Lo(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
			return Zo(e, Oo(e._zod.def, { shape: Yo(e, t) }));
		}(this, e);
	},
	merge(e) {
		return function(e, t) {
			if (!t?._zod?.def) throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
			if (e._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
			const n = {};
			return Co(n, e, Reflect.ownKeys(zo(e))), Co(n, t, Reflect.ownKeys(zo(t))), Zo(e, Oo(e._zod.def, {
				shape: n,
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
			const i = {};
			return Co(i, e, Ko(e, t)), Zo(e, Oo(n, {
				shape: i,
				checks: []
			}));
		}(this, e);
	},
	omit(e) {
		return function(e, t) {
			const n = e._zod.def, a = n.checks;
			if (a && a.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
			const i = new Set(Ko(e, t)), r = {};
			return Co(r, e, Reflect.ownKeys(zo(e)).filter((e) => !i.has(e))), Zo(e, Oo(n, {
				shape: r,
				checks: []
			}));
		}(this, e);
	},
	partial(...e) {
		return Xo(Tf, this, e[0]);
	},
	exactPartial(...e) {
		return Xo(Mf, this, e[0], "exactPartial");
	},
	required(...e) {
		return function(e, t, n) {
			const a = n ? new Set(Ko(t, n)) : void 0, i = {};
			return Co(i, t, Reflect.ownKeys(zo(t)), (t, n) => a && !a.has(n) ? t : new e({
				type: "nonoptional",
				innerType: t
			})), Zo(t, Oo(t._zod.def, { shape: i }));
		}(Ef, this, e[0]);
	}
});
function wf(e, t) {
	const n = {
		type: "object",
		shape: e ?? {},
		...qo(t)
	};
	return new yf(n);
}
const _f = Sl("ZodUnion", (e, t) => {
	Fu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, r = !1 === i.inclusive, s = i.options.map((e, n) => Cd(e, t, {
			...a,
			path: [
				...a.path,
				r ? "oneOf" : "anyOf",
				n
			]
		}));
		r ? n.oneOf = s : n.anyOf = s;
	})(e, t, n, a), e.options = t.options;
});
function vf(e, t) {
	return new _f({
		type: "union",
		options: e,
		...qo(t)
	});
}
const bf = Sl("ZodIntersection", (e, t) => {
	ju.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, r = Cd(i.left, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				0
			]
		}), s = Cd(i.right, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				1
			]
		}), o = (e) => "allOf" in e && 1 === Object.keys(e).length, l = [...o(r) ? r.allOf : [r], ...o(s) ? s.allOf : [s]];
		n.allOf = l, t.intersections.push(l);
	})(e, t, n, a);
}), Sf = Sl("ZodRecord", (e, t) => {
	$p(), Gu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, r = e._zod.def;
		i.type = "object";
		const s = r.keyType, o = ip(s).patterns;
		if ("loose" === r.mode && o && o.size > 0) {
			const e = Cd(r.valueType, t, {
				...a,
				path: [
					...a.path,
					"patternProperties",
					"*"
				]
			});
			i.patternProperties = {};
			for (const t of o) $o(i.patternProperties, op(t).source, e);
		} else {
			if ("draft-07" === t.target || "draft-2020-12" === t.target) {
				i.propertyNames = Cd(r.keyType, t, {
					...a,
					path: [...a.path, "propertyNames"]
				});
				let n = up.get(t);
				n || (n = [], up.set(t, n), t.deferred.push(() => function(e) {
					const t = /* @__PURE__ */ new Map();
					for (const a of e.seen.values()) a.def && !t.has(a.schema) && t.set(a.schema, a);
					const n = /* @__PURE__ */ new Map();
					for (const a of up.get(e) ?? []) {
						const i = e.seen.get(a), r = (i?.def ?? i?.schema)?.propertyNames;
						if (!r || !0 === r || n.has(r)) continue;
						const s = cp(t, r, /* @__PURE__ */ new Set());
						s !== r && n.set(r, s);
					}
					if (n.size) for (const a of e.seen.values()) for (const e of [a.schema, a.def]) {
						const t = e && n.get(e.propertyNames);
						t && (e.propertyNames = t);
					}
				}(t))), n.push(e);
			}
			i.additionalProperties = Cd(r.valueType, t, {
				...a,
				path: [...a.path, "additionalProperties"]
			});
		}
		const l = s._zod.values, c = "input" === t.io && void 0 !== lp(r.valueType);
		if (l && !r.partial && !c) {
			const e = [...l].filter((e) => "string" == typeof e || "number" == typeof e);
			e.length > 0 && (i.required = e.map(String));
		}
	})(e, t, n, a), e.keyType = t.keyType, e.valueType = t.valueType;
});
function kf(e, t, n) {
	return t && t._zod ? new Sf({
		type: "record",
		keyType: e,
		valueType: t,
		...qo(n)
	}) : new Sf({
		type: "record",
		keyType: Ep(),
		valueType: e,
		...qo(t)
	});
}
const If = Sl("ZodEnum", (e, t) => {
	Uu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = Io(e._zod.def.entries);
		0 !== a.length ? (a.every((e) => "number" == typeof e) && (n.type = "number"), a.every((e) => "string" == typeof e) && (n.type = "string"), n.enum = a) : n.not = {};
	})(e, 0, n), e.enum = t.entries, e.options = [...e._zod.values];
	const n = new Set(Object.keys(t.entries));
	e.extract = (e, a) => {
		const i = {};
		for (const r of e) {
			if (!n.has(r)) throw new Error(`Key ${r} not found in enum`);
			i[r] = t.entries[r];
		}
		return new If({
			...t,
			checks: [],
			...qo(a),
			entries: i
		});
	}, e.exclude = (e, a) => {
		const i = { ...t.entries };
		for (const t of e) {
			if (!n.has(t)) throw new Error(`Key ${t} not found in enum`);
			delete i[t];
		}
		return new If({
			...t,
			checks: [],
			...qo(a),
			entries: i
		});
	};
});
function Af(e, t) {
	const n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new If({
		type: "enum",
		entries: n,
		...qo(t)
	});
}
const xf = Sl("ZodTransform", (e, t) => {
	$p(), Hu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		Ed(e, t, n, a, "Transforms cannot be represented in JSON Schema");
	})(e, t, n, a), e._zod.parse = (n, a) => {
		if ("backward" === a.direction) throw new Il(e.constructor.name);
		n.addIssue = (a) => {
			if ("string" == typeof a) n.issues.push(cl(a, n.value, t));
			else {
				const t = a;
				t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), "input" in t || (t.input = n.value), t.inst ?? (t.inst = e), n.issues.push(cl(t));
			}
		};
		const i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
}), Tf = Sl("ZodOptional", (e, t) => {
	qu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => fp(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
});
function Nf(e) {
	return new Tf({
		type: "optional",
		innerType: e
	});
}
const Mf = Sl("ZodExactOptional", (e, t) => {
	Vu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => fp(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), $f = Sl("ZodNullable", (e, t) => {
	Wu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, r = Cd(i.innerType, t, a), s = t.seen.get(e);
		"openapi-3.0" === t.target ? (s.ref = i.innerType, n.nullable = !0) : n.anyOf = [r, { type: "null" }];
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
});
function Rf(e) {
	return new $f({
		type: "nullable",
		innerType: e
	});
}
const zf = Sl("ZodDefault", (e, t) => {
	Ju.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Cd(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
		const r = pp(i.defaultValue, e, t, n, a);
		r !== dp && (n.default = r);
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
}), Df = Sl("ZodPrefault", (e, t) => {
	Yu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		if (Cd(i.innerType, t, a), t.seen.get(e).ref = i.innerType, "input" !== t.io) return;
		const r = pp(i.defaultValue, e, t, n, a);
		r !== dp && (n._prefault = r);
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
}), Ef = Sl("ZodNonOptional", (e, t) => {
	Xu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Cd(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
	})(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), Cf = Sl("ZodCatch", (e, t) => {
	td.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		let r;
		Cd(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
		try {
			r = i.catchValue(void 0);
		} catch {
			Ed(e, t, n, a, "Dynamic catch values are not supported in JSON Schema");
			return;
		}
		n.default = r;
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
}), Of = Sl("ZodPipe", (e, t) => {
	nd.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, r = i.in._zod.traits.has("$ZodTransform"), s = "input" === t.io ? r ? i.out : i.in : i.out;
		Cd(s, t, a), t.seen.get(e).ref = s;
	})(e, t, 0, a), e.in = t.in, e.out = t.out;
});
function Pf(e, t) {
	return new Of({
		type: "pipe",
		in: e,
		out: t
	});
}
const Ff = Sl("ZodReadonly", (e, t) => {
	id.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Cd(i.innerType, t, a), t.seen.get(e).ref = i.innerType, n.readOnly = !0;
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
}), jf = Sl("ZodCustom", (e, t) => {
	sd.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		Ed(e, t, n, a, "Custom types cannot be represented in JSON Schema");
	})(e, t, n, a);
}), Bf = Af((Lf = W, Object.values(Lf)));
var Lf;
wf({
	password: Ep(),
	username: Ep().max(100, "Username must be 100 characters or fewer")
});
const Gf = wf({
	onset_timestamp: of().nullable().optional(),
	offset_timestamp: of().nullable().optional(),
	marker_index: of().int().default(1),
	marker_type: Bf.default(W.MAIN_SLEEP)
}), Uf = wf({
	start_timestamp: of().nullable().optional(),
	end_timestamp: of().nullable().optional(),
	marker_index: of().int().default(1)
}), Hf = (wf({
	sleep_markers: gf(Gf).optional().default([]),
	nonwear_markers: gf(Uf).optional().default([]),
	explicit_no_nonwear: df().optional().default(!1),
	is_invalid_night: df().optional().default(!1),
	needs_consensus: df().optional().default(!1),
	notes: Ep().nullable().optional(),
	sleep_period_detection_config: kf(Ep(), ff()).nullable().optional()
}), wf({
	timestamps: gf(of()).optional().default([]),
	axis_x: gf(of()).optional().default([]),
	axis_y: gf(of()).optional().default([]),
	axis_z: gf(of()).optional().default([]),
	vector_magnitude: gf(of()).optional().default([]),
	temperature: gf(of()).optional().default([]),
	lux: gf(of()).optional().default([]),
	melanopic_lux: gf(of()).optional().default([]),
	ggir_timestamps: gf(of()).optional().default([]),
	ggir_enmo: gf(of()).optional().default([]),
	ggir_anglez: gf(of()).optional().default([]),
	ggir_sib: gf(of()).optional().default([]),
	timestamps_30s: gf(of()).optional().default([]),
	axis_x_30s: gf(of()).optional().default([]),
	axis_y_30s: gf(of()).optional().default([]),
	axis_z_30s: gf(of()).optional().default([]),
	vector_magnitude_30s: gf(of()).optional().default([])
})), Zf = wf({
	resolution_id: Ep(),
	epoch_length_seconds: of().int().positive(),
	category: Ep(),
	source_type: Ep().nullable().optional(),
	derived_from_resolution_id: Ep().nullable().optional(),
	aggregation_method: Ep().nullable().optional(),
	data: Hf,
	algorithm_results: gf(of()).nullable().optional(),
	nonwear_results: gf(of()).nullable().optional()
}), qf = (wf({
	data: Hf.optional(),
	epoch_resolutions: gf(Zf).optional().default([]),
	timestamps: gf(of()).optional(),
	axis_x: gf(of()).optional(),
	axis_y: gf(of()).optional(),
	axis_z: gf(of()).optional(),
	vector_magnitude: gf(of()).optional(),
	temperature: gf(of()).optional(),
	algorithm_results: gf(of()).nullable().optional(),
	nonwear_results: gf(of()).nullable().optional(),
	nonwear_results_choi_2011: gf(of()).nullable().optional(),
	event_markers: gf(vf([of(), df()])).optional().default([]),
	event_marker_timestamps: gf(of()).optional().default([]),
	view_start: of().nullable().optional(),
	view_end: of().nullable().optional(),
	sensor_nonwear_periods: gf(wf({
		start_timestamp: of(),
		end_timestamp: of()
	})).optional().default([]),
	device_nonwear_source: Af(S).nullable().optional(),
	algorithmic_nonwear_masks: kf(Ep(), gf(of())).optional()
}), ie.diary_tolerance_minutes, ie.nap_min_consecutive_epochs, ie.epoch_length_seconds, () => i.waitFor(import("./cube-variants-D65NqXAk.js"))), Vf = {
	warmVariantsForDay: async (...e) => (await qf()).scoreCountBasedHasibVariantsForDay(...e),
	withRecordingWakeThreshold: async (...e) => (await qf()).withRecordingWakeThreshold(...e)
};
function Wf(e, t, n) {
	return null != e[n] && e.covers(t);
}
function Jf(e, t, n) {
	return e.find((e) => Wf(e, t, n));
}
const Kf = [
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
function Yf(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function Xf(e) {
	return JSON.stringify(e);
}
function Qf(e) {
	const t = Yf(e.config), n = Yf(t?.signals) ?? t;
	return {
		...n ? { config: n } : {},
		days: e.days
	};
}
function em(e) {
	return JSON.stringify(Qf(e));
}
function tm(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function nm(e) {
	const t = tm(e), n = t?.analysis_date, a = tm(t?.intrinsic), i = a?.state;
	if (!t || "string" != typeof n || 0 === n.length || !a || "string" != typeof i || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(i)) return null;
	const r = a.score, s = a.verdict, o = a.infinite_reason, l = {}, c = [], u = t.per_guider;
	if (Array.isArray(u)) for (const h of u) {
		const e = tm(h);
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
	const d = tm(a.features), p = d && Array.isArray(d.feature_values) ? d : null, f = tm(a.legacy_complexity_features) ?? (null === p ? d : null) ?? {}, m = t.computed_at;
	return {
		difficulty: "number" == typeof r && Number.isFinite(r) ? r : null,
		state: i,
		verdict: "string" == typeof s ? s : null,
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
const am = /^[0-9a-f]{64}$/;
var im = class extends Error {
	constructor(e = !1) {
		super(e ? "Stored complexity evidence failed integrity verification." : "Complexity evidence failed integrity verification."), this.name = "ComplexityEvidenceIntegrityError";
	}
}, rm = class extends Error {
	constructor() {
		super("Complexity evidence diverged for an existing generation."), this.name = "ComplexityEvidenceDivergenceError";
	}
}, sm = class extends Error {
	constructor() {
		super("Complexity evidence is older than the retained generation window."), this.name = "ComplexityEvidenceRetentionError";
	}
};
function om(e = !1) {
	throw new im(e);
}
function lm(e) {
	"string" == typeof e && am.test(e) || om();
}
function cm(e) {
	"string" == typeof e && 0 !== e.length && Number.isFinite(Date.parse(e)) || om();
}
function um(e) {
	if (null === e) return "null";
	switch (typeof e) {
		case "string":
		case "boolean": return JSON.stringify(e);
		case "number": return Number.isFinite(e) || om(), JSON.stringify(Object.is(e, -0) ? 0 : e);
		case "object": {
			if (Array.isArray(e)) {
				const t = [];
				for (let n = 0; n < e.length; n += 1) n in e || om(), t.push(um(e[n]));
				return `[${t.join(",")}]`;
			}
			const t = Object.getPrototypeOf(e);
			t !== Object.prototype && null !== t && om(), Object.getOwnPropertySymbols(e).length > 0 && om();
			const n = e, a = [];
			for (const e of Object.keys(n).sort()) {
				const t = Object.getOwnPropertyDescriptor(n, e);
				t && "value" in t && t.enumerable || om(), a.push(`${JSON.stringify(e)}:${um(t.value)}`);
			}
			return `{${a.join(",")}}`;
		}
		default: return om();
	}
}
function dm(e) {
	const t = um(e), n = JSON.parse(t);
	return (null == n || "object" != typeof n || Array.isArray(n)) && om(), n;
}
async function pm(e) {
	return oe(um(e));
}
function fm(e) {
	const t = e;
	for (const a of [
		"contractVersion",
		"crateVersion",
		"target",
		"semanticProfile",
		"profileProofStatus",
		"temporalBasis"
	]) "string" == typeof t[a] && "" !== t[a] || om();
	null === t.sourceRevision || "string" == typeof t.sourceRevision && "" !== t.sourceRevision || om(), lm(t.artifactSha256);
	const n = t.compiledFeatures;
	Array.isArray(n) && n.every((e) => "string" == typeof e && e.length > 0) || om(), um(e);
}
async function mm(e, t) {
	"string" != typeof e && om(), void 0 !== t && lm(t);
	let n = 0;
	for (; n < e.length && /\s/.test(e[n]);) n += 1;
	let a = e.length - 1;
	for (; a >= n && /\s/.test(e[a]);) a -= 1;
	"{" === e[n] && "}" === e[a] || om();
	const i = await oe(e);
	return void 0 !== t && t !== i && om(), i;
}
function hm(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != typeof t || null === e || null === t) return !1;
	if (Array.isArray(e) || Array.isArray(t)) return !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((e, n) => hm(e, t[n]));
	if ("object" != typeof e || "object" != typeof t) return !1;
	const n = Object.keys(e).sort(), a = Object.keys(t).sort();
	if (n.length !== a.length || n.some((e, t) => e !== a[t])) return !1;
	const i = e, r = t;
	return n.every((e) => hm(i[e], r[e]));
}
function gm(e) {
	try {
		const t = JSON.parse(e);
		return (null === t || "object" != typeof t || Array.isArray(t)) && om(), t;
	} catch {
		return om();
	}
}
function ym(e, t) {
	const n = Object.keys(e).sort(), a = [...t].sort();
	return n.length === a.length && n.every((e, t) => e === a[t]);
}
function wm(e) {
	return "number" == typeof e && Number.isFinite(e);
}
function _m(e) {
	return null === e || "string" == typeof e && e.length > 0;
}
function vm(e) {
	return Array.isArray(e) && e.every(wm);
}
function bm(e) {
	return Array.isArray(e) && e.every((e) => Number.isInteger(e) && (0 === e || 1 === e));
}
function Sm(e, t) {
	return 0 === e.length || e.length === t;
}
function km(e) {
	Array.isArray(e) || om();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && om();
		const e = t, n = e.start_ts, a = e.end_ts;
		ym(e, ["start_ts", "end_ts"]) && wm(n) && wm(a) && !(a < n) || om();
	}
}
function Im(e, t) {
	Array.isArray(e) && e.length === t || om();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && om();
		const e = n;
		ym(e, ["onset_time", "offset_time"]) && "string" == typeof e.onset_time && 0 !== e.onset_time.length && _m(e.offset_time) || om();
	}
}
function Am(e) {
	Array.isArray(e) || om();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && om();
		const e = t;
		ym(e, ["start_time", "end_time"]) && "string" == typeof e.start_time && 0 !== e.start_time.length && "string" == typeof e.end_time && 0 !== e.end_time.length || om();
	}
}
function xm(e) {
	Array.isArray(e) || om();
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && om();
		const e = n, a = e.guider, i = e.detector, r = e.onset_ts, s = e.offset_ts;
		(!ym(e, [
			"guider",
			"detector",
			"onset_ts",
			"offset_ts"
		]) || "string" != typeof a || 0 === a.length || t.has(a) || !_m(i) || null !== r && !wm(r) || null !== s && !wm(s) || null === r && null === s) && om(), t.set(a, {
			detector: i,
			onset: r,
			offset: s
		});
	}
	return t;
}
function Tm(e) {
	if (null === e) return null;
	Array.isArray(e) && 2 === e.length || om();
	const t = e[0], n = e[1];
	return (!wm(t) || !wm(n) || n <= t) && om(), [t, n];
}
function Nm(e, t) {
	const n = gm(e), a = void 0 === n.config ? ["days"] : ["config", "days"], i = n.days;
	ym(n, a) && Array.isArray(i) || om(), void 0 === n.config || null !== n.config && "object" == typeof n.config && !Array.isArray(n.config) || om();
	const r = /* @__PURE__ */ new Set();
	for (const o of i) {
		(null === o || "object" != typeof o || Array.isArray(o)) && om();
		const e = o;
		ym(e, Kf) || om();
		const t = e.analysis_date, n = e.epoch_length_seconds, a = e.timestamps, i = e.activity_counts, s = e.sleep_scores, l = e.choi_nonwear, c = e.diary_nap_count, u = e.anglez, d = e.light, p = e.temperature, f = e.heart_rate, m = e.detach_nonwear, h = e.is_weekend, g = e.calibration_error, y = e.imputed_fraction;
		!("string" != typeof t || 0 === t.length || r.has(t) || "number" != typeof n || !Number.isInteger(n) || n <= 0) && vm(a) && 0 !== a.length && vm(i) && i.length === a.length && bm(s) && s.length === a.length && bm(l) && Sm(l, a.length) && Number.isInteger(c) && !(c < 0) && _m(e.diary_onset_time) && _m(e.diary_wake_time) && _m(e.diary_in_bed_time) && _m(e.diary_out_bed_time) && (null === h || "boolean" == typeof h) && vm(u) && Sm(u, a.length) && vm(d) && Sm(d, a.length) && vm(p) && Sm(p, a.length) && vm(f) && Sm(f, a.length) && bm(m) && Sm(m, a.length) && (null === g || wm(g)) && (null === y || !(!wm(y) || y < 0 || y > 1)) || om(), km(e.sensor_nonwear), Im(e.diary_naps, c), Am(e.diary_nonwear);
		const w = xm(e.guider_targets), _ = Tm(e.hdcza_window), v = w.get(C.HDCZA);
		(null === _ && void 0 !== v || null !== _ && (void 0 === v || null !== v.detector || v.onset !== _[0] || v.offset !== _[1])) && om(), r.add(t);
	}
	const s = n;
	return hm(gm(t), Qf(s)) || om(), {
		difficulty: s,
		dates: r
	};
}
function Mm(e, t, n, a) {
	ym(t, ["config", "days"]) || om(), hm(t.config, e.difficulty.config ?? null) || om();
	const i = t.days;
	Array.isArray(i) && i.length === e.difficulty.days.length || om();
	for (let o = 0; o < i.length; o += 1) {
		const t = i[o], n = e.difficulty.days[o];
		(null === t || "object" != typeof t || Array.isArray(t) || null === n || "object" != typeof n || Array.isArray(n)) && om();
		const a = t, r = n;
		ym(a, [
			"analysis_date",
			"epoch_length_seconds",
			"timestamps"
		]) && a.analysis_date === r.analysis_date && a.epoch_length_seconds === r.epoch_length_seconds && hm(a.timestamps, r.timestamps) || om();
	}
	const r = Object.keys(n);
	(r.length !== e.dates.size || r.some((t) => !e.dates.has(t))) && om();
	const s = new Map(e.difficulty.days.map((e) => [e.analysis_date, e]));
	for (const [o, l] of Object.entries(n)) {
		(null === l || "object" != typeof l || Array.isArray(l)) && om();
		const e = l, t = nm(e.canonicalResult);
		null !== t && t.canonicalResult.analysis_date === o && hm(e, t) || om();
	}
	if (null !== a) {
		const t = Object.keys(a);
		(t.length !== e.dates.size || t.some((t) => !e.dates.has(t))) && om();
		for (const [e, n] of Object.entries(a)) {
			(null === n || "object" != typeof n || Array.isArray(n)) && om();
			const t = n, a = s.get(e);
			t.analysis_date === e && Number.isInteger(t.epoch_length_seconds) && t.epoch_length_seconds === a?.epoch_length_seconds || om();
		}
	}
}
async function $m(e) {
	return pm(function(e) {
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
async function Rm(e) {
	try {
		fm(e.runtimeIdentity), null !== e.sourceContentHash && lm(e.sourceContentHash);
		const t = dm(e.runtimeIdentity), n = await mm(e.difficultyRequestWireJson, e.difficultyRequestSha256), a = await mm(e.signalsRequestWireJson, e.signalsRequestSha256);
		Nm(e.difficultyRequestWireJson, e.signalsRequestWireJson);
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
			generationKey: await $m(i)
		};
	} catch (wd) {
		if (wd instanceof im) throw wd;
		return om();
	}
}
async function zm(e) {
	return pm(function(e) {
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
function Dm(e, t) {
	void 0 !== t && (null !== t && lm(t), e !== t && om());
}
async function Em(e) {
	(!Number.isInteger(e.fileId) || e.fileId <= 0) && om(), void 0 !== e.id && (!Number.isInteger(e.id) || e.id <= 0) && om();
	for (const o of [
		e.generationKey,
		e.difficultyRequestSha256,
		e.signalsRequestSha256,
		e.projectionSha256,
		e.difficultyResultSha256,
		e.recordSha256
	]) lm(o);
	null !== e.signalsResultSha256 && lm(e.signalsResultSha256), null !== e.sourceContentHash && lm(e.sourceContentHash), "sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || om(), fm(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || om(), await mm(e.difficultyRequestWireJson, e.difficultyRequestSha256), await mm(e.signalsRequestWireJson, e.signalsRequestSha256);
	const t = Nm(e.difficultyRequestWireJson, e.signalsRequestWireJson);
	cm(e.createdAt), cm(e.updatedAt), Date.parse(e.updatedAt) < Date.parse(e.createdAt) && om(), null === e.signalsByDate != (null === e.signalsResultSha256) && om();
	const n = dm(e.projectionInput), a = dm(e.difficultyByDate), i = null === e.signalsByDate ? null : dm(e.signalsByDate);
	Mm(t, n, a, i);
	const r = {
		evidenceContractId: e.evidenceContractId,
		difficultyMethodId: e.difficultyMethodId,
		signalsMethodId: e.signalsMethodId,
		requestContractId: e.requestContractId,
		sourceContentHash: e.sourceContentHash,
		runtimeIdentity: dm(e.runtimeIdentity),
		difficultyRequestWireJson: e.difficultyRequestWireJson,
		signalsRequestWireJson: e.signalsRequestWireJson,
		difficultyRequestSha256: e.difficultyRequestSha256,
		signalsRequestSha256: e.signalsRequestSha256
	};
	await $m(r) !== e.generationKey && om(), await pm(n) !== e.projectionSha256 && om(), await pm(a) !== e.difficultyResultSha256 && om(), null !== i && await pm(i) !== e.signalsResultSha256 && om();
	const s = {
		...void 0 !== e.id ? { id: e.id } : {},
		fileId: e.fileId,
		generationKey: e.generationKey,
		...r,
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
	return await zm(s) !== e.recordSha256 && om(), s;
}
async function Cm(e) {
	try {
		return await Em(e);
	} catch {
		throw new im(!0);
	}
}
function Om(e, t, n = !1) {
	if (!t) throw new im(n);
	if (null !== e.sourceContentHash && t.sourceContentHash !== e.sourceContentHash) throw new im(n);
}
async function Pm(e, t, n) {
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
async function Fm(e, t, n = V()) {
	const [a, i] = await n.transaction("r", [n.files, n.complexityEvidence], async () => Promise.all([n.complexityEvidence.where("[fileId+generationKey]").equals([e, t]).first(), n.files.get(e)]));
	if (!a) return;
	const r = await Cm(a);
	return Om(r, i, !0), r;
}
function jm(e, t, n, a) {
	return null === a ? null : {
		...a,
		binding: a?.binding ?? wn.captureWorkspaceBinding(e, t, n)
	};
}
async function Bm(e, t = s()) {
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
function Lm(e) {
	const t = c().scoring(), n = [ri(Ht(t, e).nonwearDetectorsCounts, t.showChoiNonwear), ri(yn(t.nonwearDetectorsGgir, e), t.showChoiNonwear)];
	return n.filter((e, t) => n.findIndex((t) => Ja(t) === Ja(e)) === t);
}
function Gm(e, t) {
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
function Um(e, t) {
	return [.../* @__PURE__ */ new Set([...e.availableDates, ...t])].sort();
}
function Hm(e, t) {
	return e ? {
		detectors: [...e.detectors],
		any: Uint8Array.from(e.mask).buffer,
		weight: e.weight ? Float64Array.from(e.weight).buffer : null,
		grid: e.grid === t.timestamps ? "counts" : "ggir"
	} : null;
}
async function Zm(e, { file: t, sets: n, capsense: a, db: i, signal: r }) {
	const s = n.filter((t) => !(Ja(t) in (e.displayNonwear ?? {})));
	if (0 === s.length) return;
	const o = H(r), l = await Ma(e, dt, "navigation facts", Sa(), o);
	if (!l) return;
	An(l.timestamps, rn(e, t));
	const c = Ka(t.sourceType, t.sourceProfileId), u = {};
	for (const [m, h] of Object.entries(l.nonwearMasksByDetector)) 0 === h.length || wi(m) || (u[m] = h);
	const d = {
		algorithmicNonwearMasks: u,
		timestamps: l.timestamps,
		ggirTimestamps: l.ggirTimestamps,
		sensorNonwearPeriods: "detach_mask" === Va(c) && l.detachNonwear ? Gm(l.detachNonwear, l.timestamps) : a,
		deviceNonwearSource: c
	}, p = { ...e.displayNonwear }, f = await Promise.all(s.map((e) => (r?.throwIfAborted(), si(d, e, o))));
	for (const [m, h] of s.entries()) p[Ja(h)] = Hm(f[m], d);
	await fn(e.fileId, e.date, p, {
		seriesRevision: t.seriesRevision ?? 0,
		nonwearBandGeneration: t.nonwearBandGeneration ?? 0
	}, i, r);
}
const qm = /* @__PURE__ */ new WeakMap();
function Vm(e, t, n) {
	let a = qm.get(t);
	a || qm.set(t, a = /* @__PURE__ */ new Map());
	const i = a.get(e);
	if (i) return w(i, n);
	const r = async function(e, t, n) {
		n?.throwIfAborted();
		const a = await et(e, t);
		if (!a || "incomplete" === a.ingestState) return;
		const i = await yt(e, t);
		let r = a.navigationFacts;
		(function(e, t) {
			const n = e?.navigationFacts;
			if (!e || 1 !== n?.version) return !1;
			const a = Um(e, t);
			return n.dates.length === a.length && n.dates.every((e, t) => e === a[t]);
		})(a, i) || (r = await async function(e, t, n, a) {
			const i = H(a), r = {}, s = async (e) => {
				a?.throwIfAborted();
				const t = await i.nextDate(e);
				void 0 !== t && (r[e] = t);
			};
			await Promise.all(t.map(s)), await Promise.all(Object.values(r).filter((e) => !(e in r)).map(s));
			const o = {}, l = {};
			await Promise.all(e.availableDates.map(async (e) => {
				a?.throwIfAborted();
				const [t, n] = await Promise.all([i.analysisWindowBounds(e), i.analysisWindowBounds(e, 48)]);
				t && (o[e] = [t[0], t[1]]), n && (l[e] = [n[0], n[1]]);
			}));
			const c = await ai(n), u = await Wa(e, c, a), d = [...new Set([u.zone, u.reason ? c : null].filter((e) => Boolean(e)))], p = {};
			return await Qe((t) => {
				for (const n of d) {
					const a = {};
					for (const i of e.availableDates) {
						const e = t.dstTransitionOnNight(n, i);
						e && (a[i] = e);
					}
					p[n] = a;
				}
			}, new Je(i)), {
				version: 1,
				dates: [...t],
				next: r,
				window: o,
				view48: l,
				dst: p,
				dstZone: {
					...u,
					studyZone: c
				}
			};
		}(a, Um(a, i), t, n), n?.throwIfAborted(), await t.files.update(e, { navigationFacts: r }));
		const s = Lm(a), o = s.map(Ja), l = a.seriesRevision ?? 0;
		if (r?.bands?.seriesRevision === l && o.every((e) => r.bands.keys.includes(e))) return;
		const c = "sensor_rows" === Va(Ka(a.sourceType, a.sourceProfileId)) ? (await Jt(e, t)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : [];
		for (const u of i) {
			n?.throwIfAborted();
			const i = await Nt(e, u, t);
			i && await Zm(i, {
				file: a,
				sets: s,
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
	return a.set(e, r), r;
}
function Wm(e, t) {
	for (const n of e) {
		const e = n.epochResolutions?.find((e) => e.category === t && !e.derivedFromResolutionId);
		if (e) return e.epochLengthSeconds;
	}
	return null;
}
function Jm(e, t) {
	const n = "counts" === t ? e.timestamps : e.ggirTimestamps;
	return n ? Math.floor(n.byteLength / Float64Array.BYTES_PER_ELEMENT) : 0;
}
function Km(e) {
	return "number" != typeof e ? String(e) : (/* @__PURE__ */ new Date(1e3 * e)).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: !1,
		timeZone: "UTC"
	});
}
function Ym(e) {
	if ("object" != typeof e || null === e) return String(e).slice(0, 60);
	const t = e;
	return "onsetTimestamp" in t && "offsetTimestamp" in t ? `${Km(t.onsetTimestamp)}–${Km(t.offsetTimestamp)}` : "startTimestamp" in t && "endTimestamp" in t ? `${Km(t.startTimestamp)}–${Km(t.endTimestamp)}` : JSON.stringify(t).slice(0, 60);
}
function Xm(e, t = "(unset)") {
	if (void 0 === e) return t;
	if (null === e) return t;
	const n = "string" == typeof e ? e : JSON.stringify(e);
	return n.length > 48 ? `${n.slice(0, 45)}…` : n;
}
function Qm(e) {
	const t = e.rowCount, n = e.dayCount, a = [`${Xm(e.subject, "export")} (${Xm(e.format, "?")})`, Xm(e.filename, "")].filter((e) => "" !== e), i = ["number" == typeof t ? `${t} rows` : null, "number" == typeof n ? `${n} day${1 === n ? "" : "s"}` : null].filter((e) => null !== e);
	return i.length > 0 ? `${a.join(" · ")} — ${i.join(", ")}` : a.join(" · ");
}
function eh(e, t, n, a) {
	const i = n?.exportId;
	return "export_started" === t && "string" == typeof i && a.has(i) ? "" === e ? "outcome unknown" : `${e} · outcome unknown` : e;
}
function th(e, t) {
	const n = o({
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
			return "onsetTimestamp" in a ? `${e} #${t}${n}: ${Km(a.onsetTimestamp)}–${Km(a.offsetTimestamp)}` : "startTimestamp" in a ? `${e} #${t}: ${Km(a.startTimestamp)}–${Km(a.endTimestamp)}` : `${e} #${t}${n}`;
		}
		case "sleep_period_split": return `sleep #${a.periodIndex ?? "?"} split at ${Km(a.at)}`;
		case "sleep_period_merged": return `sleep #${a.periodIndex ?? "?"} merged ${a.direction ?? "?"}`;
		case "marker_adjusted": {
			const e = a.updates ?? {}, t = a.category ?? "?", n = a.periodIndex ?? "?", i = [];
			return void 0 !== e.onsetTimestamp && i.push(`onset → ${Km(e.onsetTimestamp)}`), void 0 !== e.offsetTimestamp && i.push(`offset → ${Km(e.offsetTimestamp)}`), void 0 !== e.startTimestamp && i.push(`start → ${Km(e.startTimestamp)}`), void 0 !== e.endTimestamp && i.push(`end → ${Km(e.endTimestamp)}`), void 0 !== e.markerType && i.push(`type → ${e.markerType}`), `${t} #${n}: ${i.join(", ")}`;
		}
		case "marker_moved": {
			const e = a.before, t = a.after;
			if (!e || !t) return "drag completed";
			const n = Array.isArray(e.sleepMarkers) ? e.sleepMarkers : [], i = Array.isArray(t.sleepMarkers) ? t.sleepMarkers : [];
			for (let a = 0; a < Math.max(n.length, i.length); a++) {
				const e = n[a], t = i[a];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `sleep #${a}: ${Ym(e)} ⇒ ${Ym(t)}`;
			}
			const r = Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : [], s = Array.isArray(t.nonwearMarkers) ? t.nonwearMarkers : [];
			for (let a = 0; a < Math.max(r.length, s.length); a++) {
				const e = r[a], t = s[a];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `nonwear #${a}: ${Ym(e)} ⇒ ${Ym(t)}`;
			}
			return "drag completed (no visible change)";
		}
		case "marker_deleted": {
			const e = a.category ?? "?", t = a.periodIndex ?? "?", n = a.before;
			return n ? `${e} #${t}: was ${Ym(n)}` : `${e} #${t}`;
		}
		case "actiware_rest_edited": {
			const e = "string" == typeof a.edit ? a.edit : "?";
			return "add" === e ? `rest added: ${Ym(a.to)}` : "remove" === e ? `rest removed: was ${Ym(a.from)}` : `rest ${"move" === e ? "moved" : e}: ${Ym(a.from)} ⇒ ${Ym(a.to)}`;
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
			const e = Xm(a.intent, "mutation"), t = Xm(a.guard, "?"), n = a.disposition, i = "refused_by_store" === n ? "refused" : "applied_with_violation" === n ? "applied anyway" : Xm(n, "");
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
				const e = Xm(a.before, ""), t = Xm(a.after, "");
				return "" === e ? `"${t}"` : `"${e}" → "${t}"`;
			}
			return a.text ? `"${String(a.text).slice(0, 60)}"` : a.notes ? `"${String(a.notes).slice(0, 60)}"` : `${a.length ?? "?"} chars`;
		case "settings_changed": return `${Xm(a.scope, "?")} · ${Xm(a.key, "?")}: ${Xm(a.before)} → ${Xm(a.after)}`;
		case "settings_reset": {
			const e = a.changed, t = Xm(a.scope, "settings");
			if (!Array.isArray(e)) return `${t} reset to defaults`;
			if (0 === e.length) return `${t}: already at defaults`;
			const n = e.slice(0, 4).map((e) => Xm(e, "?")).join(", "), i = e.length > 4 ? ", …" : "";
			return `${t}: ${String(e.length)} reset to default (${n}${i})`;
		}
		case "app_version_changed": return `${Xm(a.before, "(first run)")} → ${Xm(a.after, "?")}`;
		case "system_migration": return `${Xm(a.subject, "schema")}: ${Xm(a.before, "?")} → ${Xm(a.after, "?")}`;
		case "data_exported": return Qm(a);
		case "export_started": return `Started: ${Qm(a)}`;
		case "export_cancelled": return `${Xm(a.filename, "export")} — ${Xm(a.reason, "cancelled")}`;
		case "preset_changed": {
			const e = Xm(a.family, "preset"), t = Xm(a.change, "changed"), n = Xm(a.preset, "?"), i = a.before;
			return null == i ? `${e}: ${t} ${n}` : `${e}: ${t} ${n} (was ${Xm(i)})`;
		}
		case "markers_synced": {
			const e = a.conflicts, t = a.errorCount;
			let n = `Pushed ${a.pushed ?? 0}, pulled ${a.pulled ?? 0}`;
			return "number" == typeof e && e > 0 && (n += `, ${e} conflict${1 === e ? "" : "s"}`), "number" == typeof t && t > 0 && (n += `, ${t} error${1 === t ? "" : "s"}`), n;
		}
		case "system_recalculation": return `Recalculated ${Xm(a.subject, "derived data")}`;
		case "diary_staged": return `Staged ${a.staged ?? 0}, replaced ${a.replaced ?? 0}, skipped ${a.skipped ?? 0}`;
		case "diary_decision_recorded": return `Decided ${Xm(a.ruleKind, "a rule")} → ${Xm(a.outcome, "(no outcome)")} (${Xm(a.scope, "unscoped")}, ${a.nights ?? 0} nights)`;
		case "diary_decision_state_saved": return `Saved decision state "${Xm(a.restorePoint, "untitled")}" (${a.decisions ?? 0} decisions)`;
		case "diary_session_saved": {
			const e = Xm(a.status, "saved"), t = Xm(a.step, "an unknown step"), n = Xm(a.sourceSha256Prefix, "an unnamed source");
			return "removed" === e ? `Removed the saved diary session for ${n}` : `Diary session ${n} saved as ${e} on ${t}`;
		}
		case "diary_decision_state_restored": return `Restored decision state "${Xm(a.restorePoint, "untitled")}" (${a.reflagged ?? 0} reflagged, ${a.unflagged ?? 0} unflagged, ${a.nights ?? 0} nights)`;
		case "diary_decisions_reset": return `Reset ${a.decisions ?? 0} diary decisions across ${a.nights ?? 0} nights`;
		case "diary_attached": {
			const e = a.entryCount, t = a.matchBasis, n = ["number" == typeof e ? `${e} night${1 === e ? "" : "s"}` : null, "string" == typeof t && "" !== t ? `matched by ${t}` : null].filter((e) => null !== e).join(", ");
			return "" === n ? "Attached diary" : `Attached diary (${n})`;
		}
		case "diary_discarded": {
			const e = a.analysisDate;
			return null == e ? `Discarded ${Xm(a.sourceKey, "diary")}` : `Discarded ${Xm(a.sourceKey, "diary")} for ${Xm(e, "?")}`;
		}
		case "diary_workspace_cleared": {
			const e = (e, t) => {
				const n = Number(a[e] ?? 0);
				return `${String(n)} ${t}${1 === n ? "" : "s"}`;
			};
			return `Cleared workspace diary (${e("staged", "staged night")}, ${e("occurrences", "response")})`;
		}
		case "diary_repaired": {
			const e = a.fields, t = Array.isArray(e) ? e.map((e) => Xm(e, "?")).join(", ") : "";
			return "" === t ? `Repaired ${a.applied ?? 0} field${1 === a.applied ? "" : "s"}` : `Repaired ${a.applied ?? 0}: ${t}`;
		}
		case "diary_changed": {
			const e = a.fields, t = Xm(a.change, "changed"), n = Array.isArray(e) ? e.map((e) => Xm(e, "?")).join(", ") : "";
			return "" === n ? `Diary ${t}` : `Diary ${t}: ${n}`;
		}
		case "workspace_deleted": {
			const e = a.auditRowsDestroyed;
			return `${Xm(a.displayName, "workspace")} deleted — ${a.auditRowsTotal ?? 0} audit rows, ${a.auditRowsReplicated ?? 0} replicated, ${e ?? 0} destroyed`;
		}
		case "audit_chain_reanchored": return `Restored ${a.restoredRows ?? 0} rows (restore ${String(a.restoreId ?? "?").slice(0, 8)})`;
		case "workspace_recovered": return `Recovered from backup ${Xm(a.backupSha256, "?").slice(0, 8)} — ${Xm(a.applied, "0")} changes put back, ${Xm(a.skipped, "0")} skipped, ${Xm(a.recordingsToReimport, "0")} recordings to import again`;
		case "access_changed": return `${Xm(a.subject, "access")} · ${Xm(a.scope, "?")}: ${Xm(a.before)} → ${Xm(a.after)}`;
		case "assignment_changed": {
			const e = a.fileCount, t = a.fileIds, n = "number" == typeof e ? e : Array.isArray(t) ? t.length : 0;
			return `${Xm(a.change, "changed")} ${Xm(a.subject, "assignment")} · ${Xm(a.scope, "?")} (${n} file${1 === n ? "" : "s"})`;
		}
	}
	return Object.entries(a).slice(0, 5).map(([e, t]) => "number" == typeof t && e.toLowerCase().includes("timestamp") ? `${e}: ${Km(t)}` : "string" == typeof t && t.length > 50 ? `${e}: "${t.slice(0, 47)}..."` : Array.isArray(t) ? `${e}: [${t.length} items]` : "object" == typeof t && null !== t ? `${e}: {…}` : `${e}: ${JSON.stringify(t)}`).join(", ");
}
function nh(e) {
	return JSON.stringify(e.map((e) => ({
		start_timestamp: e.startTimestamp,
		end_timestamp: e.endTimestamp,
		marker_index: e.markerIndex
	})));
}
function ah(e, t) {
	const n = (i = t, "mims_metrics" === (a = e ?? "generic") ? ir(i, r) : "ggir_part5_daysummary" === a ? function(e, t) {
		const n = rr(e, t);
		return e.date_column || e.datetime_column || n.push({
			key: "date_column",
			message: "Map a date/day column for the daily summary table."
		}), n;
	}(i, r) : ar(i, r));
	var a, i, r;
	if (0 !== n.length) throw new Error(function(e) {
		return `Column-mapped CSV settings are incomplete: ${e.map((e) => e.message).join(" ")} ${Oi}`;
	}(n));
}
function ih(e) {
	const t = /* @__PURE__ */ new Map();
	for (const a of e) "auto_score" !== a.username || a.algorithm !== L.VAN_HEES_2015 || a.isInvalidNight || t.set(a.date, Ct(t.get(a.date), a));
	const n = /* @__PURE__ */ new Map();
	for (const [a, i] of t) {
		const e = i.sleepMarkers.filter((e) => e.markerType === W.MAIN_SLEEP);
		if (1 !== e.length) continue;
		const t = e[0], r = t?.onsetTimestamp, s = t?.offsetTimestamp;
		"number" == typeof r && Number.isFinite(r) && "number" == typeof s && Number.isFinite(s) && s > r && n.set(a, [r, s]);
	}
	return n;
}
async function rh(e, t) {
	const n = t.dailyGgirSummaries;
	if (!n) return /* @__PURE__ */ new Map();
	const a = await n.where("fileId").equals(e).toArray();
	return new Map(a.map((e) => [e.analysisDate, e]));
}
function sh(e) {
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
function oh(e, t, n, a) {
	const i = t?.days.find((e) => e.analysis_date === n), r = e?.[n];
	if (!i || !r || !a) return [];
	const s = i.timestamps, o = i.epoch_length_seconds;
	if (0 === s.length || !Number.isFinite(o) || o <= 0) return [];
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
		const e = r[c];
		Array.isArray(e) && e.forEach((e, t) => {
			if (null == e || "object" != typeof e || Array.isArray(e)) return;
			const n = e, i = n.run_start_epoch, r = n.run_end_epoch;
			if (!Number.isInteger(i) || !Number.isInteger(r) || i < 0 || r < i || r >= s.length) return;
			const c = s[i], p = s[r];
			if (null == c || null == p || !Number.isFinite(c) || !Number.isFinite(p)) return;
			const f = p + o;
			if (f <= c) return;
			const m = "string" == typeof n.generation_execution_id ? n.generation_execution_id : null, h = `${u}:${String(i)}:${String(r)}:${String(t)}`;
			l.push({
				id: h,
				kind: u,
				start_timestamp: c,
				end_timestamp: f,
				source_start_epoch: i,
				source_end_epoch: r,
				source_index: t,
				label: `${d} ${String(t + 1)}`,
				evidence_id: `${m ?? a}#${h}`,
				projection_revision: a
			});
		});
	}
	return l;
}
const lh = "wasm-parallel";
function ch(e) {
	const t = e.compiledFeatures;
	return {
		...e,
		compiledFeatures: t.includes(lh) ? t.filter((e) => e !== lh) : [...t, lh]
	};
}
function uh(e, t) {
	const n = e.compiledFeatures.filter((e) => e !== lh), a = t.compiledFeatures.filter((e) => e !== lh);
	return e.contractVersion === t.contractVersion && e.crateVersion === t.crateVersion && e.sourceRevision === t.sourceRevision && e.target === t.target && e.semanticProfile === t.semanticProfile && e.profileProofStatus === t.profileProofStatus && e.temporalBasis === t.temporalBasis && e.artifactSha256 === t.artifactSha256 && n.length === a.length && n.every((e, t) => e === a[t]);
}
async function dh(e, t, n, a, i = /* @__PURE__ */ new Map()) {
	const r = [];
	for (const l of [t, await xa(t, void 0, a)]) {
		const s = e.get(l);
		if (!s) continue;
		let o = i.get(l);
		o || i.set(l, o = Ma(s, n, `listDatesStatus ${l}`, Sa(), a));
		const c = await o;
		if (!c) return null;
		r.push({
			unpacked: c,
			epochs: await Ua(c.timestamps, t, a),
			ggir: await Ua(c.ggirTimestamps, t, a)
		});
	}
	for (const l of i.keys()) l < t && i.delete(l);
	const s = (e, t) => {
		const n = [];
		for (const a of r) {
			const { startIndex: i, endIndex: r } = a[t];
			if (r <= i) continue;
			const s = e(a.unpacked), o = "epochs" === t ? a.unpacked.timestamps.length : a.unpacked.ggirTimestamps.length;
			if (null == s || s.length !== o) return null;
			for (let e = i; e < r; e += 1) n.push(s[e]);
		}
		return n;
	}, o = s((e) => e.timestamps, "epochs") ?? [];
	return 0 === o.length ? null : {
		timestamps: o,
		axisY: s((e) => e.axisY, "epochs"),
		sleepScores: s((e) => e.sleepScores, "epochs"),
		nonwearResults: s((e) => e.nonwearResults, "epochs"),
		temperature: s((e) => e.temperature, "epochs"),
		detachNonwear: s((e) => e.detachNonwear, "epochs"),
		ggirTimestamps: s((e) => e.ggirTimestamps, "ggir") ?? [],
		ggirAnglez: s((e) => e.ggirAnglez, "ggir") ?? []
	};
}
function ph(e, t) {
	const n = new Set(t.map((e) => e.analysis_date)), a = Object.keys(e);
	return n.size === t.length && a.length === n.size && a.every((e) => n.has(e));
}
function fh(e) {
	const t = [...e.entries()].sort(([e], [t]) => e.localeCompare(t));
	let n = null, a = null;
	for (const [, s] of t) try {
		const e = Te(s).timestamps;
		if (0 === e.length) continue;
		const t = e[0];
		if (null != t && Number.isFinite(t)) {
			n = t;
			break;
		}
	} catch {}
	for (let s = t.length - 1; s >= 0; s -= 1) {
		const e = t[s]?.[1];
		if (e) try {
			const t = Te(e).timestamps;
			if (0 === t.length) continue;
			const n = t[t.length - 1];
			if (null != n && Number.isFinite(n)) {
				a = n;
				break;
			}
		} catch {}
	}
	if (null == n || null == a || a < n) return null;
	const i = 1e3 * n, r = 1e3 * a;
	return Number.isFinite(i) && Number.isFinite(r) ? {
		start: i,
		end: r
	} : null;
}
async function mh(e, t, n, a, i, r, s) {
	const o = [], l = [];
	for (const c of new Set(t)) {
		let t = null;
		for (const o of e) if (o && 0 !== Te(o).timestamps.length && (await Bs(o, c, n, i, void 0, r, s), t = sa(c, ya(o, n), a), null !== t)) break;
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
function hh({ available: e, dropped: t }) {
	return 0 === e.length && t.length > 0 ? t.map((e) => e.reason).join("; ") : null;
}
function gh(e) {
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
function yh(e) {
	return 1 === e.length && pa(e[0]);
}
function wh(e, t, n) {
	const a = e?.byDate[t];
	return a ? "refused" === a.kind ? a.reason : null : function(e) {
		const t = e?.sleepPeriodDetectionConfig?.[Jh];
		return "string" == typeof t ? t : null;
	}(n);
}
async function _h(e, t) {
	if (!("placementResults" in e)) return;
	const n = await e.placementResults.get(t);
	return 2 === n?.policy ? n : void 0;
}
function vh(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let a = 0; a < t; a += 1) {
		const t = e[a];
		if (null == t || !Number.isFinite(t)) return [];
		n[a] = t;
	}
	return n;
}
function bh(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let a = 0; a < t; a += 1) {
		const t = e[a];
		if (0 !== t && 1 !== t) return [];
		n[a] = t;
	}
	return n;
}
function Sh(e, t, n) {
	if (t.length !== e.length || n.length !== e.length) return [];
	const a = new Array(e.length);
	for (let i = 0; i < e.length; i += 1) {
		const r = t[i], s = e[i], o = n[i];
		if (null == r || null == s || r !== s || null == o || !Number.isFinite(o)) return [];
		a[i] = o;
	}
	return a;
}
function kh(e, t, n, a, i, r) {
	const s = [], o = null == t ? null : r.resolveInstant(t, e, gn.evening_onset, i), l = null == n ? null : r.resolveInstant(n, e, gn.morning_offset, i);
	return null == o && null == l || s.push({
		guider: C.DIARY,
		detector: null,
		onset_ts: o,
		offset_ts: l
	}), null != a && s.push({
		guider: C.HDCZA,
		detector: null,
		onset_ts: a[0],
		offset_ts: a[1]
	}), s;
}
function Ih(e) {
	return `complexity-evidence:${e.generationKey}`;
}
function Ah(e) {
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
function xh(e) {
	return e.projectionInput;
}
function Th(e) {
	return e.difficultyByDate;
}
function Nh(e) {
	return e.signalsByDate;
}
function Mh(e, t, n, a) {
	return {
		has_markers: G(e),
		has_nonwear: ee(e),
		is_invalid_night: e?.isInvalidNight ?? !1,
		needs_consensus: e?.needsConsensus ?? !1,
		auto_flagged: t,
		has_auto_score: (n?.sleepMarkers?.length ?? 0) > 0 || !0 === n?.isInvalidNight,
		auto_score_unavailable_reason: a
	};
}
async function $h(e, t, n, a) {
	const [i, r] = await Promise.all([a.markers.where("[fileId+date+username]").between([
		e,
		t,
		""
	], [
		e,
		t,
		"￿"
	], !0, !0).toArray(), _h(a, e)]), s = /* @__PURE__ */ new Map();
	for (const c of i) s.set(c.username, Ct(s.get(c.username), c));
	const o = s.size >= 2 && (await Bm([{
		usersForDate: s,
		kind: "sleep"
	}, {
		usersForDate: s,
		kind: "nonwear"
	}])).some((e) => e.disagree), l = s.get(Re);
	return Mh(s.get(n), o, l, wh(r, t, l));
}
function Rh(e) {
	return JSON.stringify((e ?? []).map((e) => [e.startTimestamp ?? null, e.endTimestamp ?? null]));
}
function zh(e) {
	const t = e ? null : c().scoring(), n = e?.nightStartHour ?? t?.nightStartHour ?? j.night_start_hour, a = e?.nightEndHour ?? t?.nightEndHour ?? j.night_end_hour, i = parseInt(n.split(":")[0] ?? "21", 10), r = parseInt(a.split(":")[0] ?? "9", 10);
	return {
		nightStartHour: Number.isNaN(i) ? 21 : i,
		nightEndHour: Number.isNaN(r) ? 9 : r
	};
}
const Dh = /* @__PURE__ */ new Set(), Eh = /* @__PURE__ */ new WeakMap();
function Ch(e, t, n, a) {
	const i = Eh.get(e) ?? /* @__PURE__ */ new Map();
	Eh.set(e, i);
	const r = i.get(t);
	if (r) {
		let s;
		return {
			run: r.run.catch((o) => {
				if (!r.signal?.aborted || n?.aborted) throw o;
				return i.get(t) === r && i.delete(t), s = Ch(e, t, n, a), s.run;
			}),
			release: () => s?.release()
		};
	}
	const s = {
		run: a(),
		signal: n
	};
	return i.set(t, s), {
		run: s.run,
		release: () => {
			i.get(t) === s && i.delete(t);
		}
	};
}
function Oh(e, t, n, a) {
	return Y({
		kind: B.NIGHT_DIFFICULTY,
		key: `${B.NIGHT_DIFFICULTY}:${String(e)}`,
		label: "Update night difficulty",
		workspaceId: t.name,
		signal: a,
		rerun: !0,
		run: async (a) => {
			const i = new Gh();
			try {
				if (a.signal.throwIfAborted(), a.progress(0, 2), V() !== t) return;
				const r = await et(e, t);
				if (!r || "incomplete" === r.ingestState) return;
				await Vm(e, t, a.signal), a.signal.throwIfAborted(), a.progress(1, 2);
				const s = r.nightDifficulty, o = n ?? (s ? {
					nightStartHour: `${String(s.nightStartHour).padStart(2, "0")}:00`,
					nightEndHour: `${String(s.nightEndHour).padStart(2, "0")}:00`
				} : void 0);
				await i.computeDatesStatus(e, r.availableDates, c().scoring().username || "anonymous", o, a.signal), a.progress(2, 2);
			} finally {
				i.dispose();
			}
		}
	}).catch((e) => {
		e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] Stored night difficulty could not be refreshed.", e);
	});
}
ct((e, t, n) => {
	Oh(e, t, void 0, n);
});
const Ph = /* @__PURE__ */ new WeakMap();
function Fh(e, t, n, a, i) {
	i?.throwIfAborted();
	let r = Ph.get(e);
	return r || (r = /* @__PURE__ */ new Map(), Ph.set(e, r)), r.set(t, {
		inputs: n,
		byDate: a
	}), a;
}
const jh = /* @__PURE__ */ new WeakMap();
function Bh(e, t) {
	let n = jh.get(e);
	n || jh.set(e, n = /* @__PURE__ */ new Map());
	const a = gt(t);
	let i = n.get(a);
	return i || n.set(a, i = mn(e.values(), t)), i;
}
function Lh(e) {
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
var Gh = class n {
	sourceKey = "local";
	nightRecordData = ds;
	sourceAnalyses;
	services;
	disposed = !1;
	operationProcessingOptions;
	constructor(e, { sourceAnalyses: t = ps, services: n = Vf } = {}) {
		this.operationProcessingOptions = e, this.sourceAnalyses = t, this.services = n;
	}
	fileBatches = /* @__PURE__ */ new Map();
	beginFileBatch(e, t = V(), n) {
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
		let r = !1;
		return { end: async () => {
			r || (r = !0, i.depth -= 1, i.depth > 0 || (this.fileBatches.get(e) === i && this.fileBatches.delete(e), 0 === i.savedNights.size || i.signal?.aborted || await this.sourceAnalyses.reduce(async (t, n) => {
				await t;
				const a = i.savedNights.get(n.id);
				a && await n.followDeferredNights?.({
					fileId: e,
					nights: a,
					analysisParadigm: c().scoring().analysisParadigm,
					db: i.db,
					signal: i.signal
				});
			}, Promise.resolve())));
		} };
	}
	reanalyze(e, t, n) {
		return Jf(this.sourceAnalyses, e, "reanalyze")?.reanalyze(e, t, {
			...n,
			services: this.services
		}) ?? null;
	}
	fileBatch(e, t) {
		const n = this.fileBatches.get(e);
		return n?.db === t ? n : null;
	}
	placementDiaries(e, t, n = this.fileBatch(e, t)) {
		return n?.days ? n.diaries ??= mt(e, t) : mt(e, t);
	}
	async placementDiary(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? (await this.placementDiaries(e, n, a)).find((e) => e.analysisDate === t) ?? null : pt(e, t, n);
	}
	async placementMarker(e, t, n, a, i = this.fileBatch(e, a)) {
		if (!i?.days) return $e(e, t, Re, n, void 0, a);
		const r = await (i.markers ??= a.markers.where("fileId").equals(e).toArray()), s = ft(r, {
			date: t,
			username: Re
		}, n);
		return s ? Ye(s) : void 0;
	}
	async placementDay(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? a.days.get(t) : Nt(e, t, n, a?.activityDayMemo);
	}
	async scorerVerdict(e, t, n, a, i = this.fileBatch(t, e)) {
		return i?.days ? Bh(i.days, n) : i?.activityDayMemo ? Bh(await Dt(t, e, i.activityDayMemo), n) : (await $n(t, e, a))(n);
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
		const r = this.complexitySnapshotByFile.get(e);
		if (r?.token === n) return r;
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
		const n = V(), a = await Dt(e, n, this.fileBatch(e, n)?.activityDayMemo), i = Bh(a, t), r = [];
		for (const [s, o] of [...a].sort(([e], [t]) => e.localeCompare(t))) {
			const e = await Ma(o, i, `loadFileDaySeries ${s}`, Sa());
			e && r.push(e);
		}
		return r;
	}
	async loadActivityData(e, t, n) {
		const a = V();
		let i, r = await et(e, a), s = null;
		if (We(r)) {
			const { ensureSavedGgirNonwear: t } = await import("./ggir-import-C--RUThd.js");
			try {
				s = await t(e, a, void 0, !1);
			} catch {
				i = "Saved GGIR nonwear recovery failed; recovered nonwear is unavailable.";
			}
			r = await et(e, a);
		}
		const o = r?.navigationFacts;
		o?.window[t] || Vm(e, a);
		const l = await Ca(e, t, a, void 0, o);
		if (!l) throw new Error(`No activity data found for fileId=${e} date=${t}. File may not be processed yet.`);
		const c = await this.scorerVerdict(a, e, n?.algorithm, { file: r }), u = await Ma(l, c, `loadActivityData ${t}`, Sa());
		if (!u) throw new Error(`Activity data for fileId=${e} date=${t} is corrupt; please reprocess.`);
		const d = await xa(t, o), p = 48 === n?.viewHours ? [d, await xa(d, o)] : [d], f = await Promise.all(p.map((t) => Nt(e, t, a, this.fileBatch(e, a)?.activityDayMemo))), m = [l];
		for (const k of f) {
			if (!k) break;
			m.push(k);
			const e = await Ma(k, c, "loadActivityData next-day", Sa());
			if (!e) throw new Error("Next-day activity data is corrupt; please reprocess.");
			const t = u.timestamps.length, n = e.timestamps.length;
			ja(u.timestamps, e.timestamps), ja(u.axisY, e.axisY), ja(u.vectorMagnitude, e.vectorMagnitude), (u.axisX.length > 0 || e.axisX.length > 0) && (u.axisX.length < t && (u.axisX = new Array(t).fill(0)), ja(u.axisX, e.axisX.length > 0 ? e.axisX : new Array(n).fill(0))), (u.axisZ.length > 0 || e.axisZ.length > 0) && (u.axisZ.length < t && (u.axisZ = new Array(t).fill(0)), ja(u.axisZ, e.axisZ.length > 0 ? e.axisZ : new Array(n).fill(0))), (u.temperature.length > 0 || e.temperature.length > 0) && (u.temperature.length < t && (u.temperature = new Array(t).fill(NaN)), ja(u.temperature, e.temperature.length > 0 ? e.temperature : new Array(n).fill(NaN))), (u.eventMarkers.length > 0 || e.eventMarkers.length > 0) && (u.eventMarkers.length < t && (u.eventMarkers = new Array(t).fill(0)), ja(u.eventMarkers, e.eventMarkers.length > 0 ? e.eventMarkers : new Array(n).fill(0))), ja(u.eventMarkerTimestamps, e.eventMarkerTimestamps), (u.lux.length > 0 || e.lux.length > 0) && (u.lux.length < t && (u.lux = new Array(t).fill(NaN)), ja(u.lux, e.lux.length > 0 ? e.lux : new Array(n).fill(NaN))), (u.sleepScores.length > 0 || e.sleepScores.length > 0) && (u.sleepScores.length < t && (u.sleepScores = new Array(t).fill(0)), ja(u.sleepScores, e.sleepScores.length > 0 ? e.sleepScores : new Array(n).fill(0))), (u.sleepScoreGaps.length > 0 || e.sleepScoreGaps.length > 0) && (u.sleepScoreGaps.length < t && (u.sleepScoreGaps = new Array(t).fill(0)), ja(u.sleepScoreGaps, e.sleepScoreGaps.length > 0 ? e.sleepScoreGaps : new Array(n).fill(0))), (u.lstmTimestamps30s.length > 0 || e.lstmTimestamps30s.length > 0) && (u.lstmTimestamps30s = $a(u.lstmTimestamps30s, e.lstmTimestamps30s), u.lstmSleepWake30s = Aa(u.lstmSleepWake30s, e.lstmSleepWake30s)), Pa(u, e, t, n), (u.ggirTimestamps.length > 0 || e.ggirTimestamps.length > 0) && (u.ggirSib = za(u.ggirTimestamps, u.ggirSib, e.ggirTimestamps, e.ggirSib), u.ggirTimestamps = $a(u.ggirTimestamps, e.ggirTimestamps), u.ggirEnmo = $a(u.ggirEnmo, e.ggirEnmo), u.ggirAnglez = $a(u.ggirAnglez, e.ggirAnglez));
		}
		u.ggirSib = Na(u.ggirTimestamps, u.ggirSib);
		const { start: h, end: g } = await Si(t, 48 === n?.viewHours ? 48 : void 0, o), y = Ka(r?.sourceType, r?.sourceProfileId);
		let w = [];
		pa(y) ? w = (await ce(e, h, g, a)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : "detach_mask" === Va(y) && u.detachNonwear && (w = Gm(u.detachNonwear, u.timestamps));
		const _ = {};
		for (const [k, I] of Object.entries(u.nonwearMasksByDetector)) 0 !== I.length && (wi(k) || (_[k] = I));
		const v = m.flatMap((e) => e.ggirTimestamps?.byteLength ? [e.ggirInvalid] : []);
		if (v.length > 0 && v.every((e) => void 0 !== e)) {
			const e = v.flatMap((e) => Array.from(new Uint8Array(e)));
			e.length === u.ggirTimestamps.length && (_[kn.ggir_part2_invalid] = e);
		}
		An(u.timestamps, Wm(m, "count_sleep_wake")), An(u.ggirTimestamps, Wm(m, "ggir_sleep_period"));
		const b = function(e, t, n, a) {
			const i = {}, r = e.filter((e) => Jm(e, "counts") > 0 || Jm(e, "ggir") > 0);
			for (const s of Lm(a)) {
				const e = Ja(s);
				if (!r.every((t) => t.displayNonwear && e in t.displayNonwear)) continue;
				const a = r.map((t) => t.displayNonwear[e] ?? null), o = a.filter((e) => null !== e), l = o[0]?.grid;
				if (!l) {
					i[e] = null;
					continue;
				}
				if (o.some((e) => e.grid !== l)) continue;
				const c = o.some((e) => null !== e.weight), u = [], d = [];
				if (r.forEach((e, t) => {
					const n = a[t], i = n ? new Uint8Array(n.any) : new Uint8Array(Jm(e, l));
					for (const a of i) u.push(a);
					if (c) for (const a of n?.weight ? new Float64Array(n.weight) : i) d.push(a);
				}), u.length !== ("counts" === l ? t : n)) continue;
				const p = new Set(o.flatMap((e) => e.detectors));
				i[e] = {
					detectors: s.filter((e) => p.has(e)),
					mask: u,
					weight: c ? d : null,
					grid: l
				};
			}
			return i;
		}(m, u.timestamps.length, u.ggirTimestamps.length, r ?? null);
		Object.keys(b).length < Lm(r ?? null).length && Vm(e, a);
		const S = await Ea(u, m, c, r);
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
			...u.ggirTimestamps.length > 0 && 0 === u.ggirSib.length ? { ggirSibMissingReason: Fa(r, l) } : {},
			algorithmResults: u.sleepScores.length > 0 ? u.sleepScores : null,
			...u.sleepScoreGaps.length > 0 ? { algorithmResultGaps: u.sleepScoreGaps } : {},
			...n?.algorithm && !Ta(n.algorithm) && 0 === u.sleepScores.length && u.timestamps.length > 0 ? { scorerMissingReason: "stale" === c.status ? c.reason : Oa(n.algorithm, {
				sourceProfileId: r?.sourceProfileId,
				scorerSettingsStored: await Jf(this.sourceAnalyses, r, "hasScorerSettings")?.hasScorerSettings(e, a)
			}) } : {},
			lstmTimestamps30s: u.lstmTimestamps30s,
			lstmSleepWake30s: u.lstmSleepWake30s,
			nonwearResults: u.nonwearResults,
			nonwearResultsChoi2011: u.nonwearResultsChoi2011,
			vanHeesNonwear: u.vanHeesNonwear,
			algorithmicNonwearMasks: _,
			nonwearBands: b,
			...s ? { nonwearSourceLabels: { [kn.ggir_saved]: s } } : {},
			...i ? { savedNonwearMissingReason: i } : {},
			epochResolutions: S,
			viewStart: h,
			viewEnd: g,
			sensorNonwearPeriods: w,
			deviceNonwearSource: y
		};
	}
	async loadMarkers(e, t, n, a, i, r) {
		const s = r ?? V(), o = await $e(e, t, n, a, i, s);
		return o ? Lh(o) : null;
	}
	async saveMarkers(e, t, n, a, i, r, s, o, l) {
		const u = o ?? V(), d = c().scoring(), p = jm(u, {
			username: n,
			studyId: d.selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, l), f = s?.signal ?? this.fileBatch(e, u)?.signal;
		let m, h = null, g = null, y = !1, w = s?.sleepPeriodDetection ?? d.sleepPeriodDetection;
		const _ = await Ln({
			fileId: e,
			date: t,
			username: n,
			algorithm: i ?? null,
			detectionRule: r ?? null,
			signal: f
		}, u, async (o) => {
			const l = "function" == typeof a ? await a(o ? Lh(o) : null) : {
				data: a,
				settings: s
			};
			if (!l) return null;
			h = l.data;
			const c = l.settings ?? s, p = m = await et(e, u);
			h = {
				...h,
				sleepMarkers: await this.nightRecordData[In(p, d.analysisParadigm)].sleepPeriodsToSave({
					fileId: e,
					date: t,
					isInvalidNight: h.isInvalidNight ?? o?.isInvalidNight ?? !1
				}, h.sleepMarkers, u)
			}, w = Rt({
				algorithm: i ?? "",
				sleepPeriodDetection: c?.sleepPeriodDetection ?? d.sleepPeriodDetection
			});
			const _ = w ? Yt(w) : null, v = void 0 === c?.periodGuider ? Ht(d, p) : null, b = c?.periodGuider ?? v?.periodGuider, S = c?.periodGuider ?? (_ && !0 !== v?.placementFromSource ? we(He(_)) : v?.periodGuider), k = i ? Ut(i) : null, I = k ? vt(k) : null, A = await $e(e, t, n, i ?? null, r ?? null, u);
			y = !A || A.algorithm !== (i ?? null) || A.detectionRule !== (r ?? null) || JSON.stringify(A.sleepMarkers) !== JSON.stringify(h.sleepMarkers) || void 0 !== h.isInvalidNight && h.isInvalidNight !== A.isInvalidNight, g = void 0 !== h.nonwearMarkers && "auto_score" !== n ? Rh(A?.nonwearMarkers) : null;
			let x = h.sleepPeriodDetectionConfig ?? null;
			if (null === x) {
				const n = await pt(e, t, u);
				x = he({
					algorithm: i ?? null,
					periodGuider: wo(0, b, w),
					sleepPeriodDetection: w,
					diaryOnsetTime: jt(n),
					diaryWakeTime: Mn(n)
				});
			}
			return {
				kind: "save",
				input: {
					signal: f,
					fileId: e,
					date: t,
					username: n,
					sleepMarkers: h.sleepMarkers,
					...void 0 !== h.nonwearMarkers ? { nonwearMarkers: h.nonwearMarkers } : {},
					...void 0 !== h.isInvalidNight ? { isInvalidNight: h.isInvalidNight } : {},
					...void 0 !== h.isInvalidNightImplicit ? { isInvalidNightImplicit: h.isInvalidNightImplicit } : {},
					...void 0 !== h.explicitNoNonwear ? { explicitNoNonwear: h.explicitNoNonwear } : {},
					notes: h.notes,
					...void 0 !== h.needsConsensus ? { needsConsensus: h.needsConsensus } : {},
					algorithm: i ?? null,
					detectionRule: r ?? null,
					periodGuider: S ?? null,
					sleepPeriodDetectionConfig: x,
					algorithmVersion: I,
					...void 0 !== c?.expected ? { expected: c.expected } : {},
					...void 0 !== c?.guardHashOnly ? { guardHashOnly: c.guardHashOnly } : {}
				}
			};
		}, null === p ? null : {
			...p,
			sleepPeriodDetection: p.sleepPeriodDetection ?? w
		});
		if (!_?.record || !h) return null;
		const v = h, b = Lh(_.record), S = {
			fileId: e,
			file: m,
			nights: /* @__PURE__ */ new Map([[t, v.sleepMarkers]]),
			sleepMarkersChanged: y,
			username: n,
			analysisParadigm: c().scoring().analysisParadigm,
			db: u,
			signal: f,
			openBatch: () => this.fileBatch(e, u)
		};
		if (await this.sourceAnalyses.reduce(async (e, t, n) => !!(await e || n > 0 && f?.aborted) || (Wf(t, m, "followSavedNights") && await t.followSavedNights(S), !1), Promise.resolve(!1))) return b;
		null !== g && g !== Rh(v.nonwearMarkers) && Oh(e, u, void 0, f), y && $e(e, t, n, i ?? null, r ?? null, u).then(async (t) => {
			if (!t) return;
			const { storeNightPeriodMetrics: n } = await import("./local-export-worker-DttoYNAI.js").then((e) => e.R);
			return n(t, await this.scorerVerdict(u, e, t.algorithm), u, f);
		}).catch(() => {
			console.warn("[local-analysis] period metrics could not be stored with the saved night");
		});
		try {
			if (V() !== u) return b;
		} catch {
			return b;
		}
		const k = bn();
		if (!k.capabilities.tauri) return b;
		try {
			const [a, s] = await Promise.all([et(e, u), $e(e, t, n, i ?? null, r ?? null, u)]);
			if (!a?.fileHash || !s?.contentHash) return b;
			await k.workspace.saveMarkers({
				fileHash: a.fileHash,
				date: t,
				username: n,
				sleepMarkers: (I = v.sleepMarkers, JSON.stringify(I.map((e) => ({
					onset_timestamp: e.onsetTimestamp,
					offset_timestamp: e.offsetTimestamp,
					marker_index: e.markerIndex,
					marker_type: e.markerType
				})))),
				nonwearMarkers: nh(s.nonwearMarkers),
				isInvalidNight: s.isInvalidNight,
				notes: v.notes,
				contentHash: s.contentHash
			});
		} catch {
			console.warn("[platform] native marker mirror failed for the active local selection");
		}
		var I;
		return b;
	}
	async listFiles() {
		const e = V();
		return (await ve(e)).map((e) => {
			const t = e.id ?? 0, n = R(e);
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
				views: J(t, n, /* @__PURE__ */ new Set(), e.epochLengthSeconds),
				count_epoch_seconds: e.epochLengthSeconds
			};
		});
	}
	async listDates(e) {
		const t = V();
		return (await et(e, t))?.availableDates ?? yt(e, t);
	}
	async getDiaryEntry(e, t) {
		const n = V(), a = await pt(e, t, n);
		return a ? rt(a, await ge(e, n)) : null;
	}
	async listDiaryEntries(e) {
		const t = V(), n = await mt(e, t);
		if (0 === n.length) return n;
		const a = await ge(e, t);
		return null === a ? n : Se(n, a);
	}
	async loadPlacementFileContext(e, t, n, a, i, r, s, o, l, c, u, d = this.fileBatch(e, r)) {
		if (!d) return this.readPlacementFileContext(e, t, a, i, r, s, o, l, c, u, null);
		const p = JSON.stringify([
			n ?? null,
			s,
			o,
			l,
			i,
			c
		]);
		let f = d.placementContexts.get(p);
		f || (f = this.readPlacementFileContext(e, null, a, i, r, s, o, l, c, u, d), d.placementContexts.set(p, f), f.catch(() => {
			d.placementContexts.delete(p);
		}));
		const { contextDays: m, deviceOffNonwear: h } = await f;
		return {
			contextDays: m.filter((e) => e.analysisDate !== t),
			deviceOffNonwear: h
		};
	}
	async readPlacementFileContext(e, t, n, a, i, r, s, o, l, c, u) {
		const d = H(c), [p, f, m, h] = await Promise.all([
			u?.days ? [...u.days.keys()].sort() : yt(e, i),
			this.placementDiaries(e, i, u),
			yh(r) ? kt(e, i) : Nn(e, i),
			i.files.get(e)
		]), g = await Se(f, a, d), y = new Map(g.map((e) => [e.analysisDate, e])), w = [], _ = p.filter((e) => e !== t), v = await Promise.all(_.map((t) => this.placementDay(e, t, i, u)));
		for (const [b, S] of _.entries()) {
			const e = v[b];
			if (!e) continue;
			for (const n of r) await Bs(e, n, l, i, d, c, u?.activityDayMemo);
			const t = await Ma(e, n, `autoScore context ${S}`, l, d);
			if (!t || 0 === t.timestamps.length || 0 === t.sleepScores.length) continue;
			const a = y.get(S), p = t.timestamps[0] ?? 0, f = t.timestamps[t.timestamps.length - 1] ?? p, g = await zt(t.timestamps, _n({
				day: e,
				file: h
			}), d), _ = gh(wa(await da(r, t.nonwearMasksByDetector, {
				offPeriods: s,
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
				diaryBedTime: Lt(a),
				diaryOnsetTime: jt(a),
				diaryWakeTime: Mn(a),
				diaryNaps: a ? At(a) : null,
				diaryNonwear: a ? Cn(a) : null
			});
		}
		return {
			contextDays: w,
			deviceOffNonwear: m
		};
	}
	async autoScore(e, t, n, a) {
		const i = a ?? V();
		if (this.fileBatch(e, i)) return this.autoScoreNight(e, t, n, So, i);
		const r = {}, s = await Dt(e, i, r), o = {
			db: i,
			signal: n.signal,
			depth: 0,
			savedNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map(),
			activityDayMemo: r,
			span: Promise.resolve(fh(s))
		};
		return this.autoScoreNight(e, t, n, So, i, void 0, void 0, void 0, o);
	}
	async autoScoreFile(e, t, n = !0, a = V(), i) {
		if (E(a.name)) return /* @__PURE__ */ new Map();
		const r = await this.filePlacementState(e, t, a);
		if (!r) return /* @__PURE__ */ new Map();
		const { file: s, inputs: o, cached: l } = r, c = Le(s);
		return c ? new Map(s.availableDates.map((e) => [e, {
			kind: "refused",
			reason: c
		}])) : l ? Fh(a, e, o, l, t.signal) : n ? Y({
			kind: B.AUTO_SCORE,
			key: `${B.AUTO_SCORE}:${String(e)}:${o}`,
			label: "Compute marker placement",
			workspaceId: a.name,
			signal: t.signal,
			run: async (n) => {
				const l = i?.inputs === o ? i.byDate : await this.computeFilePlacement(r, t, a, n);
				return await this.storeFilePlacement(e, o, l, a, {
					...t,
					signal: n.signal
				}) ? (n.progress(s.availableDates.length, s.availableDates.length), Fh(a, e, o, l, n.signal)) : /* @__PURE__ */ new Map();
			}
		}) : /* @__PURE__ */ new Map();
	}
	async filePlacementState(e, t, n) {
		const a = await et(e, n), r = Ph.get(n)?.get(e), [s, o, l] = await Promise.all([
			mt(e, n),
			n.markerProvenance.get(e),
			r ? void 0 : _h(n, e)
		]);
		if (!a) return null;
		const u = await i.waitFor(async function(e, t, n, a) {
			const i = c().scoring(), r = t.ruleset ?? i.placementRuleset, s = /* @__PURE__ */ new Set([L.VAN_HEES_2015, ...t.algorithm && Ta(t.algorithm) ? [t.algorithm] : []]), o = (e) => "auto_score" === e.username && s.has(e.algorithm ?? ""), l = (a?.rows ?? []).filter((e) => o(e) || r !== k.LEGACY && e.nonwearDecided).map((e) => [e.id, o(e) ? e.lastModifiedAt : e.nonwearSpans ?? e.lastModifiedAt]), { signal: u, choiAxis: d, hasptVariant: p, studySettingsRevision: f, ...m } = t;
			return oe(JSON.stringify({
				v: 2,
				options: m,
				ruleset: r,
				nonwearDetectors: t.nonwearDetectors ?? oa(Ia(t.algorithm)),
				choiAxis: t.choiAxis ?? i.choiAxis,
				hasptVariant: t.hasptVariant ?? i.ggirHasptVariant,
				seriesRevision: e.seriesRevision ?? 0,
				dates: e.availableDates,
				diaries: n,
				rows: l
			}));
		}(a, t, s, o));
		if (r?.inputs === u) return {
			fileId: e,
			file: a,
			diaries: s,
			inputs: u,
			cached: r.byDate
		};
		const d = r ? await _h(n, e) : l;
		return {
			fileId: e,
			file: a,
			diaries: s,
			inputs: u,
			cached: d?.inputs === u ? new Map(Object.entries(d.byDate)) : null
		};
	}
	async storeFilePlacement(e, t, n, a, i) {
		if (i.signal?.throwIfAborted(), E(a.name)) return !1;
		const r = await M(a, [
			a.files,
			a.diaryEntries,
			a.markerProvenance,
			a.placementResults,
			a.studySettings
		], async () => {
			if (void 0 !== i.studySettingsRevision && ((await ye(a))?.contentHash ?? null) !== i.studySettingsRevision) return !1;
			const r = await this.filePlacementState(e, i, a);
			return !E(a.name) && r?.inputs === t && (await a.placementResults.put({
				fileId: e,
				policy: 2,
				inputs: t,
				byDate: Object.fromEntries(n)
			}), !0);
		}, i.signal);
		return r && V() === a && pe(e, a), r;
	}
	async storeFilesPlacement(e, t, a, i, r) {
		const s = [], o = await Promise.allSettled(e.map(({ fileId: e, options: n }) => this.filePlacementState(e, n, t))), l = {
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: u()
		}, c = o.flatMap((e) => "fulfilled" === e.status && e.value ? [e.value.file] : []), d = c.flatMap((e) => "ggir_part1" === ae(e.sourceType)?.importWorkerBudget ? [{ size: e.sourceSizeBytes ?? 0 }] : []), p = d.length > 0 && d.length === c.length ? li(d, l) : {
			...l,
			maxExtraWorkers: Number.POSITIVE_INFINITY
		}, f = await di(e.map(({ fileId: e, options: i }, l) => ({
			name: `placement:${String(e)}`,
			cost: 1,
			run: async (c, u) => {
				try {
					const s = new n(), u = o[l];
					if ("rejected" === u.status) throw u.reason;
					const d = u.value;
					if (!d || d.cached) return null;
					const p = await s.computeFilePlacement(d, i, t, a, c, r);
					return {
						fileId: e,
						inputs: d.inputs,
						byDate: p
					};
				} catch {
					return a.signal.throwIfAborted(), u.primary || u.cancel(), s.push(e), null;
				}
			}
		})), {
			createWorker: K,
			extraWorkers: La(p),
			cancelOperation: () => {},
			...i,
			signal: a.signal
		});
		for (const [n, u] of f.entries()) {
			try {
				u && await this.storeFilePlacement(u.fileId, u.inputs, u.byDate, t, e[n].options) && Fh(t, u.fileId, u.inputs, u.byDate, a.signal);
			} catch {
				a.signal.throwIfAborted(), s.push(e[n].fileId);
			}
			a.progress(n + 1, f.length);
		}
		if (s.length > 0) {
			const e = `Marker placement failed for recording ID(s) ${s.sort((e, t) => e - t).map(String).join(", ")}.`;
			throw a.progress(f.length, f.length, e), new Error(e);
		}
	}
	async storedAutoScore(e, t, n) {
		return (await this.autoScoreFile(e, n, !1)).get(t) ?? {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
	}
	async computeFilePlacement(e, t, n, a, i, r) {
		const o = e.fileId, l = e.file.availableDates, c = {
			...t,
			signal: a.signal
		};
		return Me(async (u) => {
			const d = await Dt(o, n, u), p = r ?? (await Hs(n)).csvText, f = void 0 !== i && Ta(t.algorithm), m = [];
			let h, g = l.length;
			const y = new Promise((e) => {
				h = e;
			}).then(async () => {
				if (0 !== m.length) try {
					a.signal.throwIfAborted();
					const e = m.map((e) => e.opts), n = f && i ? await i.placeStoredGgirNights([...d.values()], mn([...d.values()], t.algorithm), m.map((e) => ({
						options: e.opts,
						...e.anchor
					}))) : await function(e, t = s()) {
						return Rn(e, t);
					}(e, i ?? H(a.signal));
					a.signal.throwIfAborted();
					for (const [t, a] of m.entries()) a.resolve(n[t]);
				} catch (wd) {
					for (const t of m) t.reject(wd);
				}
			}), w = this.beginFileBatch(o, n, a.signal), _ = this.fileBatch(o, n), v = {
				activityDayMemo: _.activityDayMemo,
				days: _.days,
				span: _.span,
				file: _.file,
				diaries: _.diaries,
				markers: _.markers
			};
			_.activityDayMemo = u, _.days = d, _.span = Promise.resolve(fh(d)), _.file = Promise.resolve(e.file), _.diaries = Promise.resolve(e.diaries);
			try {
				0 === l.length && h();
				const e = await Promise.all(l.map(async (e) => {
					let t = !1;
					const a = () => {
						t || (t = !0, g -= 1, 0 === g && h());
					};
					try {
						return [e, await this.autoScoreNight(o, e, c, (e) => new Promise((t, n) => {
							m.push({
								opts: e,
								resolve: t,
								reject: n
							}), a();
						}), n, p, i, f ? (e, t, n) => new Promise((i, r) => {
							m.push({
								opts: e,
								anchor: {
									day: t,
									nextDay: n
								},
								resolve: i,
								reject: r
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
	async autoScoreNight(e, t, n, a, i = V(), r, s, o, l) {
		const u = s ?? H(n.signal);
		n.signal?.throwIfAborted();
		const d = l ?? this.fileBatch(e, i), p = await (d ? d.file ??= et(e, i) : et(e, i)), m = Le(p);
		if (m) return {
			kind: "refused",
			reason: m
		};
		const h = n.ruleset ?? c().scoring().placementRuleset, g = Ia(n.algorithm), y = n.nonwearDetectors ?? oa(g), w = n.choiAxis ?? c().scoring().choiAxis, _ = n.sleepPeriodDetection ? Yt(n.sleepPeriodDetection) : void 0;
		let v = ra(_, {
			path: g,
			selected: y
		}) ?? null;
		const b = await Ca(e, t, i, (t) => this.placementDay(e, t, i, d), void 0, u);
		if (!b) return {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
		if ("vendor_analysis" === f.find((e) => e.id === n.algorithm)?.execution) {
			const a = {
				fileId: e,
				date: t,
				file: p,
				options: n,
				sleepPeriodDetectionConfig: v,
				db: i,
				batch: d
			}, r = await this.sourceAnalyses.reduce(async (e, t) => await e ?? t.proposeNight?.(a) ?? null, Promise.resolve(null));
			if (r) return r;
		}
		const S = await this.placementDay(e, await xa(t, void 0, u), i, d), I = Ka(p?.sourceType, p?.sourceProfileId), A = await mh([b, S], y, w, I, i, n.signal, d?.activityDayMemo), x = await this.scorerVerdict(i, e, n.algorithm, { file: p }, d), T = Ta(n.algorithm), N = T && o ? { kind: "angle-deferred" } : await Da({
			day: b,
			nextDay: S,
			verdict: x,
			angle: T,
			requireScores: !0,
			missingScoresReason: n.algorithm === L.LSTM_SLEEP_WAKE ? "No LSTM sleep/wake results are stored for this file. Re-import or reprocess the raw file so the app can compute spectral features and run the ONNX model." : "No algorithm results available",
			choiAxis: w,
			laterDays: async () => [...(d?.days ?? await Dt(e, i, d?.activityDayMemo)).values()].filter((e) => e.date > t).sort((e, t) => e.date.localeCompare(t.date)),
			core: u
		});
		if ("refused" === N.kind) return N;
		const M = T ? null : hh(A);
		if (null !== M) return {
			kind: "refused",
			reason: M
		};
		v = ra(_, {
			path: g,
			selected: y,
			available: A.available,
			dropped: A.dropped
		}) ?? null;
		const $ = ua(A.dropped, g), R = (e) => "refused" === e.kind || null === v && 0 === $.length ? e : {
			...e,
			notes: [...$, ...e.notes],
			sleep_period_detection_config: {
				...e.sleep_period_detection_config ?? {},
				...v ?? {}
			}
		};
		if ("angle" === N.kind || "angle-legacy" === N.kind || "angle-deferred" === N.kind) {
			const s = await this.placementMarker(e, t, n.algorithm ?? null, i, d) ?? await this.placementMarker(e, t, L.VAN_HEES_2015, i, d), l = s?.sleepMarkers[0], f = null != l?.onsetTimestamp && null != l.offsetTimestamp ? {
				startTimestamp: l.onsetTimestamp,
				endTimestamp: l.offsetTimestamp
			} : null, m = () => l && null != l.onsetTimestamp && null != l.offsetTimestamp ? {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: l.onsetTimestamp,
					offset_timestamp: l.offsetTimestamp,
					marker_type: W.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: [],
				notes: ["HDCZA fallback: no 5s SIB stream available for structured sleep-period fusion", `HDCZA window: ${cn(l.onsetTimestamp)} – ${cn(l.offsetTimestamp)}`],
				decisions: [],
				sleep_period_detection_config: s?.sleepPeriodDetectionConfig ?? v
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
					const e = await Ba(N, t, u);
					if ("refused" === e.kind) return e;
					l = e.series;
				}
				const [g, y] = await Promise.all([this.placementDiary(e, t, i, d), d ? d.span ??= ge(e, i, p?.seriesRevision ?? 0) : ge(e, i, p?.seriesRevision ?? 0)]), w = g ? await rt(g, y, u) : null, _ = (await ko(n.sensorLocation ?? "wrist", n.hasptVariant ?? c().scoring().ggirHasptVariant, u)).variant, v = function(e) {
					const t = e?.sleepPeriodDetectionConfig?.haspt_variant;
					return Object.values($t).includes(t) ? t : null;
				}(s), I = null == s ? null : null == v ? `HASPT variant not recorded at import; assumed ${_} from the study setting. Reprocess the file to record it.` : v !== _ ? `HASPT variant at import was ${v}; the study setting now gives ${_}. Placed with ${v}; reprocess the file to apply ${_}.` : null, A = h === k.GGIR_PART4, x = A ? await at(await this.placementDiaries(e, i, d), void 0, u) : null, T = x?.wakeIsOutBed ? null : Fn(w, x?.outBedIsWake ? "diary_out_of_bed_time" : "diary_wake_time"), M = x?.outBedIsWake ? null : Fn(w, x?.wakeIsOutBed ? "diary_wake_time" : "diary_out_of_bed_time"), $ = {
					...l,
					choiNonwear: null,
					ggirHasptAlgo: v ?? _,
					ggirConfigCsv: r ?? (await Hs(i)).csvText,
					...x?.hasBedlog ? { ggirDiaryHasBedlog: !0 } : {},
					...x?.hasSleeplog ? { ggirDiaryHasSleeplog: !0 } : {},
					diaryBedTime: A ? Fn(w, "diary_in_bed_time") : Lt(w),
					diaryOutBedTime: A ? M : wt(w),
					diaryOnsetTime: A ? Fn(w, "diary_onset_time") : jt(w),
					diaryWakeTime: A ? T : Mn(w),
					diaryNaps: w ? At(w) : null,
					analysisDate: t,
					onsetMinConsecutiveSleep: 1,
					offsetMinConsecutiveMinutes: 1,
					algorithm: n.algorithm,
					periodGuider: wo(n.algorithm, n.periodGuider, n.sleepPeriodDetection),
					...void 0 !== n.sleepPeriodDetection ? { sleepPeriodDetection: n.sleepPeriodDetection } : {},
					...n.scorerPostprocessing ? { scorerPostprocessing: n.scorerPostprocessing } : {},
					ruleset: h,
					epochLengthSeconds: 5,
					guiderWindows: f ? { hdcza: f } : {}
				}, z = "angle-deferred" === N.kind ? await o($, b, S) : await a($);
				return "angle-legacy" === z ? m() : R(I && "refused" !== z.kind ? {
					...z,
					notes: [I, ...z.notes]
				} : z);
			}
			return m();
		}
		const [z, D] = await Promise.all([this.placementDiary(e, t, i, d), d ? d.span ??= ge(e, i, p?.seriesRevision ?? 0) : ge(e, i, p?.seriesRevision ?? 0)]), E = z ? await rt(z, D, u) : null, { unpacked: C } = N, { timestamps: O, axisY: P, sleepScores: F, eventMarkerTimestamps: j } = C, B = Ce(n.detectionRule), G = wo(n.algorithm, n.periodGuider, n.sleepPeriodDetection), U = await Kt(fs, {
			fileId: e,
			file: p,
			date: t,
			db: i,
			batch: d,
			autoScoreMarker: (n) => this.placementMarker(e, t, n, i, d)
		}), Z = await zt(O, _n({
			day: b,
			file: p
		}), u), q = A.available.some(pa) ? await (d ? d.sensor ??= Jt(e, i) : Jt(e, i)) : [], J = gh(wa(await da(A.available, C.nonwearMasksByDetector, {
			offPeriods: q,
			source: I
		}, {
			timestampsSec: O,
			epochLenSec: Z
		}, u))), K = h !== k.LEGACY ? await this.loadPlacementFileContext(e, t, n.algorithm, x, D, i, A.available, q, I, w, n.signal, d) : null, { startIndex: Y, endIndex: X } = await Ua(O, t, u);
		if (Y === X) return {
			kind: "refused",
			reason: "No activity data found for this date"
		};
		const Q = O.slice(Y, X), ee = P.slice(Y, X), te = F.slice(Y, X), ne = J.choiNonwear ? J.choiNonwear.slice(Y, X) : null, ae = J.nonwearWeight ? J.nonwearWeight.slice(Y, X) : null, ie = J.nonwearMemberFlags ? J.nonwearMemberFlags.slice(Y, X) : null, re = Q[0] ?? 0, se = Q[Q.length - 1] ?? re;
		return R(await a({
			timestamps: Q,
			activityCounts: ee,
			sleepScores: te,
			choiNonwear: ne,
			...ae ? { nonwearWeight: ae } : {},
			...ie ? { nonwearMemberFlags: ie } : {},
			diaryBedTime: Lt(E),
			diaryOnsetTime: jt(E),
			diaryWakeTime: Mn(E),
			diaryNaps: E ? At(E) : null,
			diaryNonwear: E ? Cn(E) : null,
			analysisDate: t,
			onsetMinConsecutiveSleep: B.onsetN,
			offsetMinConsecutiveMinutes: B.offsetN,
			algorithm: n.algorithm,
			periodGuider: G,
			...void 0 !== n.sleepPeriodDetection ? { sleepPeriodDetection: n.sleepPeriodDetection } : {},
			...n.scorerPostprocessing ? { scorerPostprocessing: n.scorerPostprocessing } : {},
			ruleset: h,
			nonwearDetectors: J.nonwearDetectors,
			epochLengthSeconds: Z,
			guiderWindows: U,
			eventMarkerTimestamps: j.filter((e) => e >= re && e <= se + 60),
			nightStartHour: It(n.nightStartHour),
			nightEndHour: It(n.nightEndHour),
			...K ? {
				sensorNonwear: K.deviceOffNonwear.filter((e) => e.startTimestamp <= se && e.endTimestamp >= re),
				contextDays: K.contextDays
			} : {}
		}));
	}
	async autoNonwear(e, n, a) {
		if (void 0 === a.threshold) throw new Error("Local auto-nonwear requires a resolved nonwear threshold.");
		const i = V(), r = await Ca(e, n, i, (t) => Nt(e, t, i, this.fileBatch(e, i)?.activityDayMemo));
		if (!r) return {
			kind: "refused",
			reason: "No activity data"
		};
		const [o, l, u, d] = await Promise.all([
			Nt(e, await xa(n), i, this.fileBatch(e, i)?.activityDayMemo),
			pt(e, n, i),
			Jt(e, i),
			et(e, i)
		]), p = c().scoring(), f = Ht(p, d), m = a.nonwearDetectors ?? ("ggir" === Ia(f.algorithm) ? p.nonwearDetectorsGgir : f.nonwearDetectorsCounts), h = Ka(d?.sourceType, d?.sourceProfileId), g = await mh([r, o], m, Sa(), h, i, void 0, this.fileBatch(e, i)?.activityDayMemo), y = hh(g);
		if (null !== y) return {
			kind: "refused",
			reason: y
		};
		const w = await Da({
			day: r,
			nextDay: o,
			verdict: dt,
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
			offPeriods: u.filter((e) => e.startTimestamp <= k && e.endTimestamp >= S),
			source: h
		}, {
			timestampsSec: v,
			epochLenSec: await Ke(v, {
				day: r,
				file: d
			})
		})), A = gh(I), x = yh(g.available), T = l ? Cn(l) : [], N = a.existingSleepMarkers, M = await async function(e) {
			if (0 === e.timestamps.length || 0 === e.activityCounts.length) return tt("No activity data");
			const n = {
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
				epoch_length_seconds: e.epochLengthSeconds ?? re,
				threshold: e.threshold ?? 0,
				min_duration_minutes: e.minDurationMinutes ?? 10,
				zero_activity_ratio: .65,
				diary_min_duration_minutes: e.diaryMinDurationMinutes ?? 1,
				...En(e.nonwearDetectors, e.nonwearWeight, {
					alwaysNameSingle: !0,
					memberFlags: e.nonwearMemberFlags
				})
			}, a = [
				JSON.stringify(n),
				e.timestamps instanceof Float64Array ? e.timestamps : Float64Array.from(e.timestamps),
				e.activityCounts instanceof Float64Array ? e.activityCounts : Float64Array.from(e.activityCounts),
				e.choiNonwear instanceof Uint8Array ? e.choiNonwear : Uint8Array.from(e.choiNonwear ?? [])
			], i = a.slice(1).filter((t) => ArrayBuffer.isView(t) && t !== e.timestamps && t !== e.activityCounts && t !== e.choiNonwear), r = await s().placeNonwearMarkers(t(a, i.map((e) => e.buffer)));
			return r ? {
				kind: "placed",
				nonwear_markers: r.nonwear_markers,
				notes: r.notes
			} : tt("Nonwear placement is unavailable in this build — reload while online to update the local engine.");
		}({
			timestamps: v,
			activityCounts: b,
			diaryNonwear: T,
			choiNonwear: x ? null : A.choiNonwear,
			nonwearDetectors: A.nonwearDetectors,
			...A.nonwearWeight ? { nonwearWeight: A.nonwearWeight } : {},
			...A.nonwearMemberFlags ? { nonwearMemberFlags: A.nonwearMemberFlags } : {},
			sensorNonwearPeriods: x ? u.filter((e) => e.startTimestamp <= k && e.endTimestamp >= S).sort((e, t) => e.startTimestamp - t.startTimestamp).map((e) => [e.startTimestamp, e.endTimestamp]) : [],
			existingSleepMarkers: N,
			analysisDate: n,
			threshold: a.threshold
		});
		return "refused" === M.kind ? M : {
			kind: "placed",
			nonwear_markers: M.nonwear_markers.map((e) => ca(e, I?.available.length ?? 0)),
			notes: [...ua(g.dropped, Ia(f.algorithm)), ...M.notes]
		};
	}
	async listFileScoringCounts(e, t, n) {
		return this.fileScoringCountsIn(V(), e, t, n);
	}
	async fileScoringCountsIn(e, t, n, a) {
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const { nightStartHour: i, nightEndHour: r } = zh(a), [s, o] = await Promise.all([e.files.bulkGet([...t]), Ue(t, e)]);
		return Promise.all(t.map(async (t, a) => {
			const l = s[a], c = l?.availableDates ?? await yt(t, e), u = /* @__PURE__ */ new Map();
			for (const e of o[a]?.rows ?? []) e.username === n && u.set(e.date, Ct(u.get(e.date), e));
			const d = l?.nightDifficulty, p = d?.nightStartHour === i && d.nightEndHour === r;
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
		const i = V(), r = (await et(e, i))?.nightDifficulty, { nightStartHour: o, nightEndHour: l } = zh(a);
		if (r?.nightStartHour !== o || r.nightEndHour !== l || !t.every((e) => e in r.byDate)) return null;
		void 0 === r.notRankableReason && s().getComputeIdentity().then(({ sourceRevision: t }) => {
			r.sourceRevision !== String(t) && Oh(e, i, a);
		}, () => {});
		const [c, u] = await Promise.all([me(e, i), _h(i, e)]), d = Tn(c, n), p = Tn(c, Re), f = Mt(c), m = t.filter((e) => (f.get(e)?.size ?? 0) >= 2), h = await Bm(m.flatMap((e) => [{
			usersForDate: f.get(e),
			kind: "sleep"
		}, {
			usersForDate: f.get(e),
			kind: "nonwear"
		}])), g = new Set(m.filter((e, t) => h[2 * t].disagree || h[2 * t + 1].disagree));
		return t.map((e) => ({
			date: e,
			...Mh(d.get(e), g.has(e), p.get(e), wh(u, e, p.get(e))),
			complexity_pre: r.byDate[e] ?? null,
			complexity_post: null
		}));
	}
	async computeDatesStatus(e, t, n, a, i) {
		let r;
		const s = new Promise((e) => {
			r = e;
		}), o = this.datesStatusGeneration(e, t, n, a, r, i);
		return o.catch(() => {}), i ? o : Promise.race([s, o]);
	}
	async datesStatusGeneration(e, t, n, a, r, s) {
		s?.throwIfAborted();
		const o = H(s);
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const l = V(), c = ++this.nextComplexityGenerationToken;
		let u, d;
		const p = new Promise((e, t) => {
			u = e, d = t;
		});
		p.catch(() => {}), this.latestComplexityTokenByFile.set(e, c), this.complexitySnapshotByFile.delete(e), this.complexitySignalGenerationByFile.delete(e), this.complexityFailureByFile.delete(e), this.complexityGenerationByFile.set(e, {
			token: c,
			promise: p
		});
		try {
			const d = async () => {
				const t = await me(e, l), [a, i, r, s, o] = await Promise.all([
					Dt(e),
					mt(e),
					kt(e, l, t),
					rh(e, l),
					et(e)
				]);
				return [
					Tn(t, n),
					Tn(t, Re),
					a,
					i,
					r,
					Mt(t),
					ih(t),
					s,
					o
				];
			}, [p, f, m, h, g, y, w, _, b] = "function" == typeof l.transaction ? await l.transaction("r", [
				l.markers,
				l.activityDays,
				l.diaryEntries,
				l.sensorNonwear,
				l.dailyGgirSummaries,
				l.files
			], async () => {
				if (V() !== l) throw new Error("The local workspace changed before difficulty inputs could be read.");
				const e = await d();
				if (V() !== l) throw new Error("The local workspace changed while difficulty inputs were being read.");
				return e;
			}) : await d(), S = fh(m), k = new Map((await Se(h, S, o)).map((e) => [e.analysisDate, e])), { nightStartHour: I, nightEndHour: A } = zh(a), x = t.filter((e) => (y.get(e)?.size ?? 0) >= 2), T = await Bm(x.flatMap((e) => [{
				usersForDate: y.get(e),
				kind: "sleep"
			}, {
				usersForDate: y.get(e),
				kind: "nonwear"
			}]), o), N = new Set(x.filter((e, t) => T[2 * t].disagree || T[2 * t + 1].disagree)), $ = await _h(l, e), R = (e) => t.map((t) => ({
				date: t,
				...Mh(p.get(t), N.has(t), f.get(t), wh($, t, f.get(t))),
				complexity_pre: e(t),
				complexity_post: null
			})), z = b?.nightDifficulty;
			z?.nightStartHour === I && z.nightEndHour === A && t.every((e) => e in z.byDate) && (s?.throwIfAborted(), r(R((e) => z.byDate[e] ?? null)));
			const D = [], E = [...t], C = await Wi(E, o), O = new Map(E.map((e, t) => [e, C[t] ?? !1])), P = mn(m.values()), F = /* @__PURE__ */ new Map();
			for (const n of t) {
				s?.throwIfAborted();
				const t = await dh(m, n, P, o, F);
				if (!t) continue;
				const { timestamps: a, axisY: i, sleepScores: r, nonwearResults: l, temperature: c, detachNonwear: u, ggirTimestamps: d, ggirAnglez: p } = t, f = vh(a, a.length), h = vh(i, f.length), y = bh(r, f.length);
				if (0 === f.length || 0 === h.length || 0 === y.length) continue;
				const v = k.get(n), S = w.get(n) ?? null, I = await Qe((t) => {
					const a = zn(jt(v), t), i = zn(Mn(v), t);
					return {
						naps: v ? At(v).map(([e, n]) => ({
							onset_time: zn(e, t),
							offset_time: zn(n, t)
						})).filter((e) => null != e.onset_time) : [],
						nonwear: v ? Cn(v).map(([e, n]) => [zn(e, t), zn(n, t)]).filter((e) => null != e[0] && null != e[1]).map(([e, t]) => ({
							start_time: e,
							end_time: t
						})) : [],
						onset: a,
						wake: i,
						inBed: zn(Lt(v), t),
						outBed: zn(wt(v), t),
						guiderTargets: kh(n, a, i, S, _e(e), t)
					};
				}, new Je(o)), A = I.naps, x = I.nonwear, T = f[0] ?? 0, N = f[f.length - 1] ?? T, M = I.onset, $ = I.wake, R = _.get(n)?.calibration?.errorEnd;
				D.push({
					analysis_date: n,
					epoch_length_seconds: await zt(f, _n({
						day: m.get(n),
						file: b
					}), o),
					timestamps: f,
					activity_counts: h,
					sleep_scores: y,
					choi_nonwear: bh(l, f.length),
					sensor_nonwear: g.filter((e) => e.startTimestamp <= N && e.endTimestamp >= T).map((e) => ({
						start_ts: e.startTimestamp,
						end_ts: e.endTimestamp
					})),
					diary_onset_time: M,
					diary_wake_time: $,
					diary_nap_count: A.length,
					diary_naps: A,
					diary_nonwear: x,
					diary_in_bed_time: I.inBed,
					diary_out_bed_time: I.outBed,
					is_weekend: O.get(n) ?? null,
					guider_targets: I.guiderTargets,
					anglez: Sh(f, d, p),
					light: [],
					temperature: vh(c, f.length),
					heart_rate: [],
					detach_nonwear: bh(u, f.length),
					calibration_error: "number" == typeof R && Number.isFinite(R) ? R : null,
					imputed_fraction: null,
					hdcza_window: S
				});
			}
			let j, B;
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
					}, r = o, u = await r.getComputeIdentity(), d = await Rm({
						runtimeIdentity: u,
						difficultyRequestWireJson: Xf(n),
						signalsRequestWireJson: em(n),
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
						for (const [i, r] of n.days.entries()) t[i + 1] = t[i] + r[e].length;
						const a = new ("sleep_scores" === e || "choi_nonwear" === e || "detach_nonwear" === e ? Uint8Array : Float64Array)(t[n.days.length]);
						for (const [i, r] of n.days.entries()) a.set(r[e], t[i]);
						return [a, t];
					}), m = [JSON.stringify({
						config: n.config,
						days: n.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !p.includes(e))))
					}), ...f], h = await Fm(e, d.generationKey, l) ?? await Fm(e, (await Rm({
						runtimeIdentity: ch(u),
						difficultyRequestWireJson: d.difficultyRequestWireJson,
						difficultyRequestSha256: d.difficultyRequestSha256,
						signalsRequestWireJson: d.signalsRequestWireJson,
						signalsRequestSha256: d.signalsRequestSha256,
						sourceContentHash: d.sourceContentHash
					})).generationKey, l);
					if (h) j = {
						token: c,
						evidenceDb: l,
						coveredDates: [...new Set(t)].sort(),
						signalRequest: null == h.signalsByDate ? m : null,
						projectionInput: xh(h),
						difficultyByDate: Th(h),
						signalsByDate: Nh(h),
						computeIdentity: h.runtimeIdentity,
						projectionRevision: Ih(h),
						evidence: Ah(h)
					};
					else {
						s?.throwIfAborted();
						const p = Ch(l, d.generationKey, s, () => o.computeFileDifficulty(m));
						B = p.release;
						const f = await p.run;
						if (s?.throwIfAborted(), !uh(u, await r.getComputeIdentity())) throw new Error("The local scoring runtime changed while difficulty was being computed. Re-run the calculation.");
						if (ph(f.byDate, n.days)) {
							const n = await async function(e) {
								try {
									(!Number.isInteger(e.fileId) || e.fileId <= 0) && om();
									const t = await async function(e) {
										"sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || om(), null !== e.sourceContentHash && lm(e.sourceContentHash), fm(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || om(), lm(e.difficultyRequestSha256), lm(e.signalsRequestSha256), await mm(e.difficultyRequestWireJson, e.difficultyRequestSha256), await mm(e.signalsRequestWireJson, e.signalsRequestSha256);
										const t = Nm(e.difficultyRequestWireJson, e.signalsRequestWireJson);
										lm(e.generationKey);
										const { generationKey: n, ...a } = e;
										return await $m(a) !== e.generationKey && om(), t;
									}(e.identity), n = dm(e.projectionInput), a = dm(e.difficultyByDate), i = null == e.signalsByDate ? null : dm(e.signalsByDate);
									Mm(t, n, a, i);
									const r = await pm(n), s = await pm(a), o = null === i ? null : await pm(i);
									Dm(r, e.expectedHashes?.projectionSha256), Dm(s, e.expectedHashes?.difficultyResultSha256), Dm(o, e.expectedHashes?.signalsResultSha256);
									const l = (/* @__PURE__ */ new Date()).toISOString(), c = e.createdAt ?? l, u = e.updatedAt ?? c;
									cm(c), cm(u), Date.parse(u) < Date.parse(c) && om();
									const d = {
										fileId: e.fileId,
										generationKey: e.identity.generationKey,
										evidenceContractId: e.identity.evidenceContractId,
										difficultyMethodId: e.identity.difficultyMethodId,
										signalsMethodId: e.identity.signalsMethodId,
										requestContractId: e.identity.requestContractId,
										sourceContentHash: e.identity.sourceContentHash,
										runtimeIdentity: dm(e.identity.runtimeIdentity),
										difficultyRequestWireJson: e.identity.difficultyRequestWireJson,
										signalsRequestWireJson: e.identity.signalsRequestWireJson,
										difficultyRequestSha256: e.identity.difficultyRequestSha256,
										signalsRequestSha256: e.identity.signalsRequestSha256,
										projectionSha256: r,
										difficultyResultSha256: s,
										signalsResultSha256: o,
										projectionInput: n,
										difficultyByDate: a,
										signalsByDate: i,
										createdAt: c,
										updatedAt: u
									}, p = await zm(d);
									return Dm(p, e.expectedHashes?.recordSha256), {
										...d,
										recordSha256: p
									};
								} catch (wd) {
									if (wd instanceof im) throw wd;
									return om();
								}
							}({
								fileId: e,
								identity: d,
								projectionInput: a,
								difficultyByDate: f.byDate,
								signalsByDate: null
							});
							if (this.disposed || null == this.latestComplexityTokenByFile.get(e)) throw new Error("The local workspace changed before difficulty evidence could be saved.");
							if (this.latestComplexityTokenByFile.get(e) !== c) throw new Error("A newer local difficulty generation superseded this computation.");
							s?.throwIfAborted();
							const r = await async function(e, t = V(), n = "fresh", a) {
								"fresh" !== n && "restore" !== n && om();
								const r = await i.waitFor(Cm(e));
								return na([t.files, t.complexityEvidence], async () => {
									const e = await t.files.get(r.fileId);
									Om(r, e);
									const a = await t.complexityEvidence.where("[fileId+generationKey]").equals([r.fileId, r.generationKey]).first();
									if (a) {
										const e = await i.waitFor(Cm(a));
										if (o = r, (s = e).generationKey !== o.generationKey || s.projectionSha256 !== o.projectionSha256 || s.difficultyResultSha256 !== o.difficultyResultSha256 || s.difficultyRequestSha256 !== o.difficultyRequestSha256 || s.signalsRequestSha256 !== o.signalsRequestSha256 || s.sourceContentHash !== o.sourceContentHash) throw new rm();
										if (null !== e.signalsResultSha256 && null !== r.signalsResultSha256 && e.signalsResultSha256 !== r.signalsResultSha256) throw new rm();
										if (null === e.signalsByDate && null !== r.signalsByDate) {
											const n = new Date(Math.max(Date.now(), Date.parse(e.createdAt))).toISOString(), a = {
												...e,
												signalsByDate: r.signalsByDate,
												signalsResultSha256: r.signalsResultSha256,
												updatedAt: n
											}, s = await i.waitFor(zm(a)), o = {
												...a,
												recordSha256: s
											};
											return await t.complexityEvidence.put(o), await Pm(o, "signals_enriched", 0), {
												record: o,
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
									var s, o;
									await async function(e, t, n) {
										const a = await e.complexityEvidence.where("fileId").equals(t.fileId).toArray();
										if (a.length > 5) throw new im(!0);
										if (a.length < 5) return;
										if ("fresh" === n) return;
										a.sort((e, t) => {
											const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
											return 0 !== n ? n : (t.id ?? 0) - (e.id ?? 0);
										});
										const i = a[a.length - 1];
										if (i && Date.parse(t.createdAt) < Date.parse(i.createdAt)) throw new sm();
									}(t, r, n);
									const l = { ...r };
									delete l.id;
									const c = await t.complexityEvidence.add(l), u = {
										...l,
										id: c
									}, d = await async function(e, t, n) {
										const a = e.complexityEvidence, i = await a.where("fileId").equals(t).toArray();
										i.sort((e, t) => {
											if ("restore" === n) {
												const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
												if (0 !== n) return n;
											}
											return (t.id ?? 0) - (e.id ?? 0);
										});
										const r = i.slice(5).map((e) => e.id).filter((e) => void 0 !== e);
										return r.length > 0 && await a.bulkDelete(r), r.length;
									}(t, u.fileId, n);
									return await Pm(u, "inserted", d), {
										record: u,
										disposition: "inserted",
										evicted: d
									};
								}, t, a);
							}(n, l, "fresh", s);
							"inserted" === r.disposition && await async function(e, t, n) {
								try {
									await wn.recordWorkspaceDurably(v.SYSTEM_RECALCULATION, {
										subject: "night_complexity_generation",
										generationKey: e.generationKey,
										difficultyResultSha256: e.difficultyResultSha256,
										dateCount: Object.keys(e.difficultyByDate).length
									}, t, n) || console.warn("[local-data-source] Complexity evidence was saved, but its audit event is still pending.");
								} catch {
									console.warn("[local-data-source] Complexity evidence was saved, but its audit event could not be recorded.");
								}
							}(r.record, l, s), j = {
								token: c,
								evidenceDb: l,
								coveredDates: [...new Set(t)].sort(),
								signalRequest: null == r.record.signalsByDate ? m : null,
								projectionInput: xh(r.record),
								difficultyByDate: Th(r.record),
								signalsByDate: Nh(r.record),
								computeIdentity: r.record.runtimeIdentity,
								projectionRevision: Ih(r.record),
								evidence: Ah(r.record)
							};
						} else console.warn("[local-data-source] Night difficulty is unavailable from the current local scoring runtime."), j = {
							token: c,
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
					token: c,
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
			} catch (wd) {
				s?.throwIfAborted();
				const n = this.latestComplexityTokenByFile.get(e);
				if (this.disposed || null == n || n === c) throw wd;
				j = await this.awaitNewerComplexitySnapshot(e, c);
			} finally {
				B?.();
			}
			s?.throwIfAborted(), u(j), this.latestComplexityTokenByFile.get(e) === c && (s?.throwIfAborted(), this.publishComplexitySnapshot(e, j, s), this.complexityFailureByFile.delete(e));
			let L = j;
			if (this.latestComplexityTokenByFile.get(e) !== c) {
				const t = this.complexityGenerationByFile.get(e);
				if (t && t.token !== c) L = await t.promise;
				else {
					const t = this.complexityFailureByFile.get(e);
					if (void 0 !== t && t.token === this.latestComplexityTokenByFile.get(e)) throw t.error;
					const n = this.complexitySnapshotByFile.get(e);
					if (!n) throw new Error("A newer local difficulty generation replaced this result.");
					L = n;
				}
			}
			const G = L.difficultyByDate;
			if (L === j && (0 === D.length || null !== j.computeIdentity)) {
				const n = [...m.values()].map(Te), a = 0 === D.length && n.some((e) => e.ggir) && n.every((e) => e.ggir || 0 === e.timestamps.length), i = {
					nightStartHour: I,
					nightEndHour: A,
					byDate: Object.fromEntries(t.map((e) => [e, G[e]?.difficulty ?? null])),
					sourceRevision: String((j.computeIdentity ?? await o.getComputeIdentity()).sourceRevision),
					...a ? { notRankableReason: "GGIR nights are not ranked by difficulty: the difficulty core reads 60 s activity counts and sleep scores, and a GGIR folder holds 5 s ENMO, anglez and SIB only." } : {}
				};
				if (JSON.stringify(b?.nightDifficulty) !== JSON.stringify(i)) try {
					s?.throwIfAborted(), await M(l, [l.files], () => l.files.update(e, { nightDifficulty: i }), s);
					for (const t of Dh) t(e, l);
					s?.throwIfAborted();
				} catch {
					s?.throwIfAborted(), console.warn("[local-data-source] Stored night difficulty could not be written.");
				}
			}
			return R((e) => G[e]?.difficulty ?? null);
		} catch (wd) {
			throw this.latestComplexityTokenByFile.get(e) === c && this.complexityFailureByFile.set(e, {
				token: c,
				error: /* @__PURE__ */ new Error("The newest local difficulty generation failed.")
			}), d(wd), wd;
		} finally {
			this.complexityGenerationByFile.get(e)?.token === c && this.complexityGenerationByFile.delete(e);
		}
	}
	async loadAdjacentMarkers(e, t, n) {
		const a = (await et(e))?.availableDates?.slice().sort() ?? [], i = a.indexOf(t);
		if (i < 0) return null;
		const r = i > 0 ? a[i - 1] ?? null : null, s = i < a.length - 1 ? a[i + 1] ?? null : null, [o, l] = await Promise.all([r ? $e(e, r, n) : null, s ? $e(e, s, n) : null]), c = (e) => (e?.sleepMarkers ?? []).map((e) => ({
			onset_timestamp: e.onsetTimestamp,
			offset_timestamp: e.offsetTimestamp,
			marker_index: e.markerIndex
		}));
		return {
			previous_day_markers: c(o),
			next_day_markers: c(l),
			previous_date: r,
			next_date: s
		};
	}
	async auditRecordsForView(e, t) {
		const n = V(), a = await Ot(e, t, void 0, n);
		if (0 === e) return a;
		const i = await Vt(e, t, n);
		return [...a, ...i].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
	}
	static isRecordInView(e, t, n) {
		return e.fileId === t && e.analysisDate === n || 0 !== t && Pe(e, t, n);
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
		})), r = [...new Set(a.map((e) => e.username))], s = new Set(a.map((e) => e.sessionId)).size;
		let o = null, l = null;
		for (const c of a) {
			const e = c.clientTimestamp;
			(null === o || e < o) && (o = e), (null === l || e > l) && (l = e);
		}
		return {
			summary: {
				total_events: a.length,
				users: r,
				sessions: s,
				first_event: o,
				last_event: l
			},
			entries: i
		};
	}
	async exportAuditLogCsv(t, n, a) {
		const i = await this.auditRecordsForView(t, n), r = (a ? i.filter((e) => e.username === a) : i).filter((e) => "number" == typeof e.id), s = e("audit_log_csv", "local"), o = await le(r), l = function(e) {
			const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
			for (const a of e) {
				const e = a.payload?.exportId;
				"string" == typeof e && ("export_started" === a.action ? t.add(e) : "data_exported" !== a.action && "export_cancelled" !== a.action || n.add(e));
			}
			for (const a of n) t.delete(a);
			return t;
		}(r), c = [s.join(",")];
		for (const [e, u] of r.entries()) {
			const t = u.payload ?? null, n = o[e];
			c.push([
				d(String(u.id)),
				d((/* @__PURE__ */ new Date(1e3 * u.clientTimestamp)).toISOString()),
				d(u.action),
				d(eh(null === t ? "" : th(t, u.action), u.action, t, l)),
				d(u.username),
				d(String(u.fileId)),
				d(u.analysisDate ?? ""),
				d(null == u.studyId ? "" : String(u.studyId)),
				d(u.sessionId),
				d(String(u.sequence)),
				d(u.eventHash ?? ""),
				d(u.previousHash ?? ""),
				d(null === t ? "" : JSON.stringify(t)),
				d(n?.basis ?? "unanchored"),
				d(void 0 === n ? "" : an(n.state)),
				d(void 0 === n || "unanchored" === n.basis ? "" : JSON.stringify(n.state))
			].join(","));
		}
		return new Blob([`${c.join("\n")}\n`], { type: "text/csv;charset=utf-8" });
	}
	async verifyAuditChain(e, t) {
		const a = await un();
		return {
			...await ln(a),
			total_rows: a.length,
			rows_for_view: a.filter((a) => n.isRecordInView(a, e, t)).length
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
		const a = t.signalRequest, r = t.computeIdentity, o = t.evidence, l = t.evidenceDb, c = this.complexitySignalGenerationByFile.get(e);
		if (c?.token === t.token) return await c.promise;
		const u = (async () => {
			const n = () => this.complexitySnapshotByFile.get(e) ?? null, c = () => {
				const a = n();
				if (!a || a.token !== t.token) return a;
				const i = {
					...a,
					signalRequest: null
				};
				return this.publishComplexitySnapshot(e, i), i;
			};
			try {
				const u = s(), d = await u.getComputeIdentity();
				if (!uh(r, d)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), c();
				const p = await u.computeFileSignals(a), f = await u.getComputeIdentity();
				if (!uh(r, f)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), c();
				if (!ph(p.byDate, JSON.parse(a[0]).days)) throw new Error("The local scoring runtime returned incomplete night-signal evidence.");
				if (this.disposed) throw new Error("The local workspace changed before night-signal evidence could be saved.");
				const m = n();
				if (!m) return null;
				if (m.token !== t.token) return m;
				if (m.signalsByDate) return m;
				const h = await async function(e, t = V(), n) {
					(!Number.isInteger(e.fileId) || e.fileId <= 0) && om(), lm(e.generationKey);
					const a = dm(e.signalsByDate), r = await pm(a);
					return Dm(r, e.signalsResultSha256), na([t.files, t.complexityEvidence], async () => {
						const n = await t.complexityEvidence.where("[fileId+generationKey]").equals([e.fileId, e.generationKey]).first();
						if (!n) throw new im();
						const s = await i.waitFor(Cm(n));
						if (Om(s, await t.files.get(s.fileId)), null !== s.signalsResultSha256) {
							if (s.signalsResultSha256 !== r) throw new rm();
							return {
								record: s,
								disposition: "deduplicated",
								evicted: 0
							};
						}
						const o = new Date(Math.max(Date.now(), Date.parse(s.createdAt))).toISOString(), l = {
							...s,
							signalsByDate: a,
							signalsResultSha256: r,
							updatedAt: o
						}, c = await i.waitFor(zm(l)), u = await i.waitFor(Em({
							...l,
							recordSha256: c
						}));
						return await t.complexityEvidence.put(u), await Pm(u, "signals_enriched", 0), {
							record: u,
							disposition: "signals_enriched",
							evicted: 0
						};
					}, t, n);
				}({
					fileId: e,
					generationKey: o.generationKey,
					signalsByDate: p.byDate
				}, l), g = n();
				if (!g) return null;
				if (g.token !== t.token) return g;
				if (g.signalsByDate) return g;
				const y = {
					...g,
					signalRequest: null,
					projectionInput: xh(h.record),
					difficultyByDate: Th(h.record),
					signalsByDate: Nh(h.record),
					computeIdentity: h.record.runtimeIdentity,
					projectionRevision: Ih(h.record),
					evidence: Ah(h.record)
				};
				return this.publishComplexitySnapshot(e, y), y;
			} catch {
				return console.warn("[local-data-source] Full night-signal detail is temporarily unavailable; showing the retained difficulty result."), n();
			}
		})();
		this.complexitySignalGenerationByFile.set(e, {
			token: t.token,
			promise: u
		});
		try {
			return await u;
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
				const a = await et(e), i = a?.availableDates?.includes(t) ? [...new Set(a.availableDates)].sort() : [t];
				await this.computeDatesStatus(e, i, n);
				continue;
			}
			const r = await this.attachSignalsToCurrentComplexitySnapshot(e, a), s = this.complexityGenerationByFile.get(e);
			if (s) {
				await s.promise;
				continue;
			}
			const o = this.complexitySnapshotByFile.get(e) ?? null;
			if (r && o && o.token === r.token) {
				if (o.token === a.token) {
					a = o;
					break;
				}
				a = o;
			}
		}
		a && !a.coveredDates.includes(t) && (a = null), a || console.warn("[local-data-source] Difficulty detail could not converge on a stable local generation.");
		const i = a?.difficultyByDate[t], r = a?.projectionInput ?? null, s = a?.signalsByDate ?? null, o = a?.computeIdentity ?? null;
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
			signals: s?.[t] ?? null,
			explanation: null,
			calculation_provenance: r ? {
				method_export: "computeNightDifficulty",
				request_contract: "FileDifficultyRequest",
				config: r.config,
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
			plot_intervals: oh(s ?? void 0, r ?? void 0, t, a?.projectionRevision ?? void 0)
		};
	}
	onMarkersChanged(e, t, n, a, i, r, s, o = null, l = null, c) {
		const u = [
			"markers",
			e,
			t,
			n || "anonymous",
			this.sourceKey,
			o,
			l,
			r,
			s
		], d = a.getQueryData(u);
		a.setQueryData(u, () => i);
		const p = void 0 !== d && "auto_score" !== n && JSON.stringify(d?.nonwearMarkers ?? []) === JSON.stringify(i?.nonwearMarkers ?? []);
		(function(e, t, n, a = {}) {
			!1 !== a.datesStatus && _o(e, ["dates-status", t]), _o(e, ["local-dates-status", t]), !1 !== a.fileQuality && _o(e, ["file-quality"]), _o(e, ["analysis-summary"]), _o(e, ["adjacent-markers"]), _o(e, [
				"audit-log",
				t,
				n
			]), _o(e, ["actogram-markers", t]), _o(e, [
				"night-stored-variant",
				t,
				n
			]), _o(e, ["local-export-file-stats"]), _o(e, ["local-export-circadian-coverage"]), function() {
				go += 1;
				for (const e of yo) e();
			}();
		})(a, e, t, {
			datesStatus: !p,
			fileQuality: !1
		});
		const f = c ?? V();
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
	async unscoreNight(e, t, n, a, i, r, s, o) {
		const l = s ?? V(), u = jm(l, {
			username: n || "anonymous",
			studyId: c().scoring().selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, o);
		return await Un({
			fileId: e,
			date: t,
			username: n || "anonymous",
			algorithm: a,
			detectionRule: i,
			expected: r,
			signal: this.fileBatch(e, l)?.signal
		}, l, u), null;
	}
	refreshFileScoringCounts(e, t, n) {
		const { fileId: a, username: i, workspaceScope: r, studyId: s } = t, o = [
			"file-quality",
			this.sourceKey,
			r,
			i || "anonymous",
			s
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
			_o(e, o);
		});
	}
	async patchDateStatus(e, t, n) {
		const { fileId: a, date: i, username: r, workspaceScope: s } = t;
		for (const o of e.getQueryCache().findAll({ queryKey: ["dates-status", a] })) {
			const t = o.queryKey, l = o.state.data;
			if (t[2] === this.sourceKey && (t[3] !== s || t[4] !== (r || "anonymous"))) continue;
			if (o.state.isInvalidated) continue;
			if (!o.isActive()) {
				_o(e, t);
				continue;
			}
			const c = t[4], u = o.state.dataUpdatedAt;
			try {
				if (!l || t[2] !== this.sourceKey || "string" != typeof c) throw new Error("not a local status list");
				const r = await $h(a, i, c, n);
				if (o.state.dataUpdatedAt !== u) continue;
				e.setQueryData(t, (e) => e?.map((e) => e.date === i ? {
					...e,
					...r
				} : e));
			} catch {
				_o(e, t);
			}
		}
	}
	async ingestFile(e, t, n) {
		const { processLocalFile: a } = await import("./local-processing-CrDhUlzG.js"), i = c().scoring(), r = this.operationProcessingOptions, s = r?.devicePreset ?? i.devicePreset, o = r?.skipRows ?? i.skipRows, l = r?.choiAxis ?? i.choiAxis, u = r?.columnMapping ?? i.columnMapping, d = r?.countEpochSeconds ?? (30 === i.epochLengthSeconds ? 30 : 60);
		e.name.toLowerCase().endsWith(".csv") && s && "actigraph" !== s && "geneactiv" !== s && ah(s, u);
		const p = V(), f = await a(e, s ?? "actigraph", o ?? 10, t, l ?? "vector_magnitude", u, n, {
			...r ? {} : Wr(i),
			countEpochSeconds: d,
			sleepPeriodDetectionConfig: Yt(i.sleepPeriodDetection),
			...this.operationProcessingOptions
		});
		return f.alreadyImported || (Oh(f.fileId, p, void 0, n), function(e, t, n) {
			Y({
				kind: B.PHYSICAL_ACTIVITY,
				key: `${B.PHYSICAL_ACTIVITY}:${String(e)}`,
				label: "Store activity answers",
				workspaceId: t.name,
				signal: n,
				rerun: !0,
				run: (n) => Me(async (a) => {
					const [{ computeLocalPhysicalActivityAnalysis: i, physicalActivityStoreAnalysisOptions: r }, { createPhysicalActivityWorkspaceRepository: s, loadPhysicalActivityWorkspaceDays: o }] = await Promise.all([import("./local-physical-activity-analysis-BZA-Y8j9.js"), import("./physical-activity-workspace-days-CUNqyyCl.js")]);
					if (n.signal.throwIfAborted(), n.progress(0, 2), V() !== t) return;
					const l = r(c().scoring());
					await i({
						...l,
						dbOverride: t,
						activityDayMemo: a,
						onlyFileIds: [e],
						signal: n.signal
					}), n.signal.throwIfAborted(), n.progress(1, 2), await o({
						username: l.username,
						maskPolicy: l.maskPolicy,
						repository: s(t, a),
						onlyFileIds: [e],
						signal: n.signal
					}), n.progress(2, 2);
				})
			}).catch((e) => {
				e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] A file's physical-activity answers could not be stored; the Activity tab computes them.", e);
			});
		}(f.fileId, p, n)), f;
	}
	async loadDailyGgirSummary(e, t) {
		return (t ? await On(e, t) : await Be(e)).map(sh);
	}
};
const Uh = [
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
], Hh = Uh.filter((e) => "observed" !== e && "technically_unusable" !== e && "corrupt" !== e), Zh = [
	"insufficient_still_windows",
	"required_calibration_evidence_unavailable",
	"calibration_evidence_unusable"
];
function qh(e, t, n, a) {
	const i = (/* @__PURE__ */ new Date()).toISOString(), r = function(e, t) {
		if (!e) return null;
		const n = function(e) {
			const t = [], { resolution_id: n, factory_parameters_availability: a, factory_parameters_artifact: i, auto_calibration_availability: r, auto_calibration_execution: s, selected_source: o, fallback_source: l, fallback_reason: c, fallback_policy_execution: u, refusal: d } = e;
			/\S/.test(n) || t.push("resolution_id must be non-blank"), Uh.includes(a) || t.push(`factory_parameters_availability '${a}' is not an ObservationAvailability`), Uh.includes(r) || t.push(`auto_calibration_availability '${r}' is not an ObservationAvailability`);
			const p = [
				o,
				l,
				d
			].filter((e) => void 0 !== e).length;
			if (1 !== p && t.push(`exactly one of selected_source/fallback_source/refusal is required, found ${String(p)}`), "observed" === a && void 0 === i && t.push("observed factory_parameters requires factory_parameters_artifact"), "observed" !== a && void 0 !== i && t.push("non-observed factory_parameters must not carry factory_parameters_artifact"), "observed" === r && void 0 === s && t.push("observed auto_calibration requires auto_calibration_execution"), "observed" !== r && void 0 !== s && t.push("non-observed auto_calibration must not carry auto_calibration_execution"), "factory_parameters" === o && "observed" !== a && t.push("selected_source=factory_parameters requires observed factory evidence"), "auto_calibration" === o && "observed" !== r && t.push("selected_source=auto_calibration requires observed auto-calibration evidence"), void 0 === l || void 0 !== c && void 0 !== u || t.push("fallback_source requires fallback_reason and fallback_policy_execution"), void 0 !== l || void 0 === c && void 0 === u || t.push("fallback provenance is only allowed alongside fallback_source"), d) {
				Zh.includes(d.code) || t.push(`refusal.code '${d.code}' is not a CalibrationRefusalCode`), "insufficient_still_windows" === d.code && ("auto_calibration" !== d.blocked_source && t.push("insufficient_still_windows must block auto_calibration"), "technically_unusable" !== d.availability && t.push("insufficient_still_windows must use availability technically_unusable")), "required_calibration_evidence_unavailable" !== d.code || Hh.includes(d.availability) || t.push(`required_calibration_evidence_unavailable cannot use availability '${d.availability}'`), "calibration_evidence_unusable" === d.code && "technically_unusable" !== d.availability && "corrupt" !== d.availability && t.push(`calibration_evidence_unusable cannot use availability '${d.availability}'`);
				const e = "factory_parameters" === d.blocked_source ? a : r, n = "factory_parameters" === d.blocked_source ? r : a;
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
	}(n, t), s = (e, t = 0) => "number" == typeof e && Number.isFinite(e) ? e : t;
	return e.map((e) => ({
		fileId: t,
		analysisDate: e.calendarDate,
		...a ? { ggirConfigSha256: a.sha256 } : {},
		...e.lmWindows ? { lmWindows: e.lmWindows } : {},
		totalSleepTimeMinutes: s(e.tstMinutes),
		wasoMinutes: s(e.wasoMinutes),
		sleepEfficiency: 100 * s(e.sleepEfficiency),
		mvpaMinutes: s(e.mvpaMinutes),
		moderateMinutes: Number.isFinite(e.moderateMinutes) ? e.moderateMinutes : null,
		vigorousMinutes: Number.isFinite(e.vigorousMinutes) ? e.vigorousMinutes : null,
		lpaMinutes: s(e.lightMinutes),
		sedentaryMinutes: s(e.sedentaryMinutes),
		l5MidpointHour: s(e.l5MidpointHour),
		m5MidpointHour: s(e.m5MidpointHour),
		intensityGradient: Number.isFinite(e.igGradient) ? e.igGradient : null,
		nonwearMinutes: 60 * s(e.nonwearHours),
		validHours: s(e.validHours),
		cleaningCode: e.cleaningCode ?? null,
		fragmentationTpIn2Ac: Number.isFinite(e.fragTpIn2ac) ? e.fragTpIn2ac : null,
		fragmentationTpAc2In: Number.isFinite(e.fragTpAc2in) ? e.fragTpAc2in : null,
		fragmentCount: Number.isFinite(e.nFragments) ? e.nFragments : null,
		includeDayCriterionHours: e.includeDayCriterionHours,
		meetsIncludeDayCriterion: e.meetsIncludeDayCriterion,
		calibration: r,
		createdAt: i,
		updatedAt: i
	}));
}
const Vh = "Re-import this file to compute GGIR's invalid mask.", Wh = "Hip HDCZA needs the longitudinal angle (anglex or angley), which this recording lacks on GGIR's grid; no night was placed.", Jh = "nonwear_detector_unavailable";
function Kh(e) {
	return e.isInvalidNight || e.sleepMarkers.some((e) => function(e, t = !1) {
		return "auto" !== e.source || function(e, t = !1) {
			if (!0 === e.edited || t) return !0;
			const n = e.placement;
			return ho(e.onsetTimestamp, n?.onset_timestamp) || ho(e.offsetTimestamp, n?.offset_timestamp);
		}(e, t);
	}(e));
}
async function Yh(e, t, n, a) {
	return e.nightIntervalOverlap(t, n, Float64Array.from(a, ([e]) => e), Float64Array.from(a, ([, e]) => e), Float64Array.from(a, ([, , e]) => void 0 !== e && void 0 === e.unavailable ? e.weight : 0));
}
function Xh(e, t) {
	const n = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
	for (const [i, [, , r]] of t.entries()) if (r && e[i] > 0) {
		for (const e of r.detectors) n.add(e);
		for (const e of r.dropped ?? []) a.has(e.detector) || a.set(e.detector, e);
	}
	for (const i of n) a.delete(i);
	return {
		available: [...n],
		dropped: [...a.values()]
	};
}
async function Qh(e, t, n, a) {
	const i = a.map(async ([, , a]) => {
		if (!a?.memberFlags || !a.timestamps) return [];
		const { memberFlags: i } = a, r = await e.epochsOverlapping(Float64Array.from(a.timestamps).subarray(0, i.length), 60, t, n);
		return r ? e.nonwearContributors([...i], Pn(a.detectors), r[0], r[1]) : [];
	});
	return Pn([...new Set((await Promise.all(i)).flat())]);
}
async function eg(e, t, n, a, i, r, s) {
	const o = ya(t, n), l = Object.fromEntries(Object.entries(o).map(([e, t]) => [e, new Uint8Array(t)])), c = await Ke(e, { day: t }, s), u = await da(i, l, {
		offPeriods: a,
		source: r
	}, {
		timestampsSec: e,
		epochLenSec: c
	}, s);
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
		const r = e.available.length > 1 ? {
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
				...r
			}
		], ...i.starts.map((t, n) => [
			t,
			i.ends[n],
			{
				detectors: e.available,
				weight: i.weights[n]
			}
		])];
	}(u, e, c, s);
}
async function tg(e, t, n = [], a = [], i = {}, r = null, o = s()) {
	const l = [], c = n.map(([e, t]) => ({
		startTimestamp: e,
		endTimestamp: t
	}));
	for (const [s, u] of Object.entries(e)) {
		const e = t[s]?.timestamps;
		e && 0 !== e.length && l.push(...await eg(e, {
			nonwearResults: u.nonwear.buffer,
			nonwearResultsChoi2011: u.nonwearChoi2011?.buffer ?? null,
			detachNonwear: u.detachNonwear?.buffer ?? null,
			...i[s]
		}, "", c, a, r, o));
	}
	return l;
}
async function ng(e, t, n, a = Ge, i) {
	return Qe((i) => {
		if (!e) return [];
		const r = [];
		for (const { start: s, end: o } of fe(e)) {
			if (!s || !o) continue;
			const e = i.resolveSpan(s, o, t, gn.daytime, a);
			e && r.push({
				markerType: W.NAP,
				markerIndex: n + r.length + 1,
				onsetTimestamp: e[0],
				offsetTimestamp: e[1]
			});
		}
		return r;
	}, new Je(i));
}
function ag(e) {
	const t = e instanceof Error ? e.message : "";
	return t.startsWith("runGgirPart3:") ? t : t.includes("timed out") ? `it timed out after ${String(A / 6e4)} minutes` : t.includes("is not a function") ? "this build's actours WASM has no runGgirPart3 export" : "the actours WASM runtime failed (out of memory or a Rust panic)";
}
async function ig(e, t, n, a = [], i = /* @__PURE__ */ new Map(), r, o, l, u = "wrist", d = V(), f, h, g, y, w, v) {
	const b = d, S = o?.ggirConfig ?? await Hs(b), k = t.length;
	if (0 === k) return null;
	const I = i.values().next().value;
	I && Ze(e, I.importMappingProvenance);
	const x = h ?? s(), T = g ?? (() => _(x)), N = await ko(u, r?.variant, x), M = N.variant, $ = N.sensorLocation, R = {
		...l ?? {},
		haspt_variant: M,
		hdcza_proposal_revision: 6,
		ggir_config_sha256: S.sha256
	}, z = o?.angley5s, D = o?.anglex5s, E = z && z.length === k ? z : void 0, C = D && D.length === k ? D : void 0, O = o?.invalid5s?.length === k ? o.invalid5s : void 0, P = void 0 !== w && void 0 !== O;
	if (void 0 === O) return Vh;
	const F = "hip" === $ && !E && !C;
	if (F && (console.warn("[local-processing] Hip HDCZA was skipped because no aligned longitudinal axis was available."), !P)) return Wh;
	let j = !1;
	const B = o?.dstRuns ?? [], G = O, U = o?.activity5s?.length === k ? o.activity5s : void 0;
	p(f, "before local HASPT placement");
	const H = await Z(x, (e) => e.runGgirPart3({
		anglez: t,
		ggirConfigCsv: S.csvText,
		hasibCounts: Ve(S.csvText, o?.zeroCrossings5s),
		...C ? { anglex: C } : {},
		...E ? { angley: E } : {},
		...U ? { enmo: U } : {},
		invalid: G,
		startTsEpochSec: n,
		hasptAlgo: M,
		...void 0 !== r?.config ? { hasptConfig: r.config } : {},
		..."hip" !== $ || C && E ? {} : { longitudinalAxis: E ? 2 : 1 },
		...o?.timezone ? { timezone: o.timezone } : {}
	}), {
		ms: A,
		label: `local ${M} placement`,
		signal: f,
		cancel: T
	}).then((e) => ({
		result: e,
		failure: null
	}), (e) => (m(e, f, `local ${M} placement`), console.warn("[local-processing] GGIR Part 3 failed for this recording."), {
		result: null,
		failure: ag(e)
	}));
	if (H.result && P && w(H.result.part3Sib5s), F) return Wh;
	if (!H.result) return `GGIR Part 3 (${M}) failed: ${H.failure}`;
	const q = H.result.part3SptNights, J = await x.ggirIndicesToWallClockMs(Uint32Array.from(q.flatMap((e) => [e.onsetIdx, e.wakeIdx])), 1e3 * n, [...B], o?.wallClockMs ? Float64Array.from(o.wallClockMs) : void 0), K = q.map((e, t) => ({
		onsetTimestamp: J[2 * t] / 1e3,
		offsetTimestamp: J[2 * t + 1] / 1e3,
		analysisDate: e.analysisDate
	}));
	for (const { onsetTimestamp: s, offsetTimestamp: _, analysisDate: A } of K) {
		p(f, "before local HASPT marker placement");
		const t = await $e(e, A, Re, L.VAN_HEES_2015, null, b);
		if (t && Kh(t)) continue;
		const n = await Yh(x, s, _, a), r = Xh(n.seconds, a), o = 0 === r.available.length && 0 === r.dropped.length ? R : {
			...R,
			nonwear_detectors_available: r.available,
			nonwear_detectors_dropped: r.dropped.map(({ detector: e, reason: t }) => ({
				detector: e,
				reason: t
			}))
		}, d = ua(r.dropped, "ggir"), h = (e) => [e, ...d].join("; "), g = n.weightedFraction, w = g > 0 && r.available.length > 1 ? await Qh(x, s, _, a) : null, S = await ng(i.get(A) ?? null, A, 1, _e(e), x), k = ta(null, u), I = [{
			markerType: W.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: s,
			offsetTimestamp: _
		}, ...S].map((e) => ({
			...e,
			source: "auto",
			settingsHash: k
		}));
		p(f, "before local HASPT marker persistence"), await c().nights.writeHeadless({
			signal: f,
			fileId: e,
			date: A,
			expected: ea(t),
			username: "auto_score",
			sleepMarkers: I,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: h(`${M} SPT: ${cn(s)} → ${cn(_)}` + (S.length > 0 ? `; ${S.length} diary nap(s)` : "") + (g > 0 ? `; selected-detector nonwear overlap ${Math.round(100 * g)}%` : "") + (w ? ` from ${ha(w, r.available.length)}` : "")),
			algorithm: L.VAN_HEES_2015,
			sleepPeriodDetectionConfig: o
		}, b, {
			...y ? { binding: y } : {},
			events: () => y ? [{
				action: "auto_score_applied",
				payload: Bn({
					algorithm: L.VAN_HEES_2015,
					sleepPeriodDetection: l ?? null,
					sleepCount: 1,
					napCount: S.length,
					markers: I
				})
			}] : []
		}).then(() => !0, (e) => (m(e, f, "local HASPT marker persistence"), console.warn("[local-processing] HDCZA marker persistence failed."), j = !0, !1)) && v?.(A);
	}
	return j ? "one or more auto-marker writes failed" : null;
}
const rg = /* @__PURE__ */ new Set([
	2,
	5,
	6
]);
function sg(e) {
	return !1 !== e.imputeTimegaps && (null == e.dataFormat || rg.has(e.dataFormat)) && (null == e.configtz || e.configtz === e.desiredtz);
}
function og(e) {
	return `GGIR zone ${e} from the GT3X info.txt TimeZone: the app's assumption, since GGIR takes desiredtz and configtz from its own settings`;
}
async function lg(e, t, n, a, i) {
	const r = a.anglez.length;
	return (await e.ggirDstPlaceholderCuts(t, [...n], i)).map(({ start: e, count: t, beforeTimestampSec: n }) => {
		const i = (n) => n && n.length === r ? Array.from(n.subarray(e, e + t)) : void 0, s = i(a.anglex), o = i(a.angley), l = i(a.enmo), c = i(a.zcx), u = i(a.zcy), d = i(a.zcz);
		return {
			beforeTimestampSec: n,
			anglez: i(a.anglez) ?? [],
			...s ? { anglex: s } : {},
			...o ? { angley: o } : {},
			...l ? { enmo: l } : {},
			...c ? { zcx: c } : {},
			...u ? { zcy: u } : {},
			...d ? { zcz: d } : {}
		};
	});
}
var cg = class extends Error {
	name = "GgirImportRefusal";
	category;
	constructor(e) {
		super(nt(e)), this.category = e;
	}
};
function ug(e, t) {
	const n = Et(e);
	if (n && (n.notRead && n.notRead.length > 0 && t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR output",
		warning: n.notRead.map((e) => `not read: ${e.path}: ${e.reason}.`).join(" ")
	}), n.refusedNotRead)) throw new cg("ggir-not-read");
}
function dg(e, t) {
	const { username: n, selectedStudyId: a } = c().scoring();
	return wn.captureWorkspaceBinding(e, {
		signal: t,
		username: n,
		studyId: a
	});
}
const pg = /* @__PURE__ */ new WeakMap();
async function fg(e, t, n, a) {
	const i = e.timestampsMs.length;
	if (0 === i || e.enmo5s.length !== i || e.anglez5s.length !== i) throw new Error("GGIR meta RData did not contain aligned metashort timestamp, ENMO, and anglez columns.");
	const r = {
		desiredtz: e.desiredtz ?? void 0,
		dataFormat: e.inspection?.dformc ?? void 0,
		...a ? pn(await n.ggirConfigValues(a)) : {}
	}, { runs: s, storedMs: o, steps: l } = await n.wallClockDstPlaceholders(e.timestampsMs, 1e3 * e.epochSeconds, sg(r)), c = o.filter((e) => !Number.isNaN(e)), u = (e.timestampsMs[0] ?? 0) / 1e3, d = t?.sources.ms2 ? t.nonwear : e.nonwearShort, p = {
		...d.length === i ? { nonwear: d } : {},
		...e.invalidShort.length === e.timestampsMs.length ? { invalid: e.invalidShort } : {}
	}, f = t ? t.sources.ms3 ? t.sib : void 0 : e.part3Sib5s?.length === i ? e.part3Sib5s : void 0, m = await _r(n, o, e.enmo5s, e.anglez5s, {
		anglex: e.anglex5s ?? void 0,
		angley: e.angley5s ?? void 0,
		...p,
		...t?.sources.ms2 ? { invalid: t.invalid } : {},
		...f ? { sib: f } : {}
	});
	if (t && (Yn(t.sleepWindows), t.sources.ms3 && t.sib.length !== i || t.sources.ms2 && (t.invalid.length !== i || t.nonwear.length > 0 && t.nonwear.length !== i))) throw new Error("GGIR Parts 2–3 do not cover the same 5 s epochs as Part 1.");
	return {
		n: i,
		startSec: u,
		dstRuns: s,
		storedMs: o,
		clockSteps: l,
		wallClockMs: c,
		timegaps: r,
		ggirSib: f,
		ggirByDate: m
	};
}
const mg = /* @__PURE__ */ new WeakMap();
var hg = class extends Error {};
const gg = /* @__PURE__ */ new WeakMap();
async function yg(e, t, n, a = !0) {
	let i = gg.get(t);
	if (i || (i = /* @__PURE__ */ new Map(), gg.set(t, i)), i.has(e)) {
		const t = i.get(e);
		if (!(t instanceof hg)) return t;
		if (!a) throw t;
	}
	let r = mg.get(t);
	r || (r = /* @__PURE__ */ new Map(), mg.set(t, r));
	const s = r.get(e);
	if (s) return s;
	const o = (async () => {
		const a = await et(e, t);
		if (!We(a)) return null;
		if (0 === (await yt(e, t)).length) return null;
		const i = await t.ggirResultsBundles.get(e);
		if (!i) return null;
		const r = H(n);
		if (a?.ggirSavedNonwearSettled) return oi(i.configCsv, r);
		const s = [...(await Dt(e, t)).values()].filter((e) => e.ggirTimestamps?.byteLength && e.unifiedNonwearMasks?.[kn.ggir_saved]?.byteLength !== e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), o = s.filter((e) => e.vanHeesNonwear?.byteLength === e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), l = s.filter((e) => !o.includes(e)), c = l.length ? await te(t, e) : null, u = c?.ms2 ? await r.reviewGgirResults({
			part1: new Uint8Array(c.part1),
			configCsv: c.configCsv,
			ms2: new Uint8Array(c.ms2),
			edits: [],
			crossCheck: !1
		}) : null, d = c && u?.nonwear.length ? (await fg(await r.readGgirMeta(new Uint8Array(c.part1), null, !0), u, r, c.configCsv)).ggirByDate : null, p = [...o.map((e) => ({
			date: e.date,
			unifiedNonwearMasks: {
				...e.unifiedNonwearMasks,
				[kn.ggir_saved]: e.vanHeesNonwear
			},
			vanHeesNonwear: null
		})), ...d ? l.map((e) => {
			const t = d.get(e.date), n = new Float64Array(e.ggirTimestamps);
			if (!t?.nonwear || t.timestamps.length !== n.length || !n.every((e, n) => e === t.timestamps[n])) throw new hg("Saved GGIR nonwear does not match the stored epoch grid.");
			return {
				date: e.date,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					[kn.ggir_saved]: new Uint8Array(t.nonwear).buffer
				},
				vanHeesNonwear: null
			};
		}) : []];
		return await M(t, [
			t.projectMeta,
			t.activityDays,
			t.physicalActivityFileSummaries,
			t.files
		], async () => {
			await Promise.all(p.map(({ date: a, ...i }) => De(e, a, i, t, n))), await t.files.update(e, { ggirSavedNonwearSettled: !0 });
		}, n), p.length, oi(i.configCsv, r);
	})().then((t) => (i.set(e, t), t)).catch((t) => {
		throw !n?.aborted && t instanceof hg && i.set(e, t), console.warn("[local-processing] Could not fill saved GGIR nonwear from retained ms2."), t;
	}).finally(() => {
		r.delete(e);
	});
	return r.set(e, o), o;
}
async function wg(e, t, n, a, i) {
	const r = Et(e)?.configCsv, { n: s, startSec: o, dstRuns: l, storedMs: c, clockSteps: u, wallClockMs: d, timegaps: f, ggirSib: m, ggirByDate: h } = await fg(t, n, a, await r?.text()), g = [...h.keys()].sort(), y = n ? await async function(e, t) {
		const n = await Promise.all(e.map(async (e) => t.has(e) || t.has(await ((e) => a.nextDate(e))(e) ?? "")));
		return e.filter((e, t) => n[t]);
	}(qn(n), h) : [], w = y.length > 0 ? y : await zr(h, a);
	if (0 === g.length) throw new Error("GGIR meta RData did not contain any dated 5 s epochs.");
	const _ = g.flatMap((e) => {
		const t = h.get(e);
		if (!t) return [];
		p(i, `saveActivityDay ${e}`);
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
			...t.nonwear ? n ? { unifiedNonwearMasks: { [kn.ggir_saved]: new Uint8Array(t.nonwear).buffer } } : { vanHeesNonwear: new Uint8Array(t.nonwear).buffer } : {},
			...t.invalid ? { ggirInvalid: new Uint8Array(t.invalid).buffer } : {},
			algorithmResults: {},
			nonwearResults: null
		}];
	});
	return {
		n: s,
		startSec: o,
		dstRuns: l,
		storedMs: c,
		clockSteps: u,
		wallClockMs: d,
		timegaps: f,
		rdataConfig: r,
		availableDates: g,
		nightDates: w,
		ggirSib: m,
		dayRecords: _,
		facts: await Promise.all(_.map((e) => Gt(e, a))),
		signalDates: await Ks(0, _, a).catch((e) => (i?.throwIfAborted(), Bt("warn", "GGIR circadian coverage store failed", tn(e)), null)),
		placeholders: l.length > 0 ? await lg(a, 1e3 * o, l, {
			anglez: t.anglez5s,
			enmo: t.enmo5s
		}, d) : void 0,
		summaries: n ? await Zn(n, 0, i, a) : [],
		markers: n ? await Wn(n, u, a) : void 0
	};
}
async function _g(e, t, n, a) {
	const i = a ?? await l(e, void 0, n), r = await Qt(i.fullHash, t) ?? await xn(i.prefixHash, t, i.fullHash);
	return r?.id ? r : void 0;
}
const vg = [
	["ms2", "stockMs2"],
	["ms3", "stockMs3"],
	["ms4", "stockMs4"],
	["ms5", "stockMs5"]
];
async function bg(e, t, n) {
	const a = Et(t);
	if (!a) return null;
	const [i, ...r] = await Promise.all([a.configCsv.text(), ...vg.map(([e]) => a[e]?.arrayBuffer())]), s = await a.qwindowCsv?.text();
	return n.transaction("rw", [
		n.files,
		n.ggirResultsBundles,
		n.ggirResultsBlobs,
		n.ggirCorrectedValues
	], async () => {
		const [t, o] = await Promise.all([n.ggirResultsBlobs.get(e), n.ggirResultsBundles.get(e)]);
		return t && o ? o.configCsv === i && vg.every(([e, n], a) => ((e, t) => {
			if (void 0 === e || void 0 === t) return e === t;
			const n = new Uint8Array(e), a = new Uint8Array(t);
			return n.length === a.length && n.every((e, t) => e === a[t]);
		})(t[n] ?? t[e], r[a])) ? !a.resultsCsv || t.resultsCsv ? null : (await n.ggirResultsBundles.update(e, {
			resultsCsv: a.resultsCsv,
			...void 0 !== s && void 0 === t.qwindowCsv ? { qwindowCsv: s } : {}
		}), await n.ggirCorrectedValues.delete(e), await sn(n, [e]), "added") : "different_run" : null;
	});
}
const Sg = {
	none: "File already imported",
	added: "File already imported; GGIR's results files added",
	different_run: "File already imported; this folder holds a different GGIR run of it, so the stored one was kept"
};
async function kg(e, n, a, i, r, o, c) {
	const u = pg.get(e);
	pg.delete(e);
	const d = r?.db ?? V(), f = i?.ggirConfig ?? await Hs(d), h = o ?? s(), g = r ?? {
		db: d,
		attemptId: q(),
		auditBinding: dg(d, a),
		signal: a,
		recording: await qs(e, a, h)
	};
	p(a, "processGgirMetaRDataFile"), ug(e, n);
	const y = c ?? (() => {
		_(h);
	});
	n?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR meta RData..."
	});
	const { prefixHash: w, fullHash: v } = u?.value?.hashes ?? await l(e, (e) => {
		n?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, a), b = await _g(e, d, a, {
		prefixHash: w,
		fullHash: v
	});
	if (b?.id) {
		const t = await bg(b.id, e, d);
		n?.({
			phase: "complete",
			percent: 100,
			message: Sg[t ?? "none"]
		});
		const a = b.availableDates;
		return await vn(e.name, d), {
			alreadyImported: !0,
			...t ? { ggirResultsFiles: t } : {},
			fileId: b.id,
			availableDates: a,
			sourceType: b.sourceType ?? $.GGIR_5S_UPLOAD
		};
	}
	const S = await Dn(e.name, d);
	if (S && "incomplete" !== S.ingestState) throw new cg(Ft);
	if (n?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing GGIR metashort and metalong..."
	}), p(a, "before reading GGIR RData"), u && "error" in u) throw u.error;
	const k = Et(e), I = u?.value?.input ?? (k ? await Vn(k) : null), x = u?.value || !I ? void 0 : await Z(h, (e) => e.prepareGgirRecording(I), {
		ms: A,
		label: "prepareGgirRecording",
		signal: a,
		cancel: y
	}), T = x && I ? (N = I, null === (R = x.cleanedNightsCsv) ? N : {
		...N,
		cleanedNightsCsv: R
	}) : I;
	var N, R;
	const z = u?.value || T ? void 0 : await e.arrayBuffer();
	p(a, "after reading GGIR RData");
	const D = u?.value?.meta ?? x?.meta ?? await Z(h, (e) => e.readGgirMeta(t(new Uint8Array(z), [z]), f.csvText, !1), {
		ms: 3e5,
		label: "readGgirMeta",
		signal: a,
		cancel: y
	}), E = function(e, t) {
		return t && !t.sources.ms4 && e?.notRead?.some((e) => /(?:^|\/)meta\/ms4\.out\//u.test(e.path)) ? {
			...t,
			importNotices: [...t.importNotices, Kn]
		} : t;
	}(k, u?.value?.review ?? x?.review ?? null), C = u?.value?.computed ?? await wg(e, D, E, h, a), { n: O, startSec: P, dstRuns: F, storedMs: j, clockSteps: B, wallClockMs: L, timegaps: G, rdataConfig: U, availableDates: H, nightDates: W, ggirSib: J } = C;
	n?.({
		phase: "storing",
		percent: 55,
		message: "Saving GGIR 5 s epochs..."
	});
	const K = await eo(g, {
		filename: e.name,
		devicePreset: "ggir_5s_meta",
		epochLengthSeconds: D.epochSeconds,
		availableDates: W,
		fileHash: w,
		sourceContentHash: v,
		sourceSizeBytes: e.size,
		source: "local",
		eventMarkerInstants: [],
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: $.GGIR_5S_UPLOAD,
		...P > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * P)).toISOString() } } : {},
		sourceProfileId: "actoglance.source.ggir_rdata.v1",
		...D.desiredtz ? { ggirTimezone: D.desiredtz } : {},
		...F.length + B.length > 0 ? { ggirClockBasis: (Y = G, X = null != U, sg(Y) ? `GGIR's imputed fall-back hour left out (${X ? "config.csv: imputeTimegaps TRUE, configtz = desiredtz" : "no config.csv, so GGIR's defaults are assumed"})` : `GGIR's repeated fall-back hour kept as recorded data (${!1 === Y.imputeTimegaps ? "imputeTimegaps = FALSE" : null == Y.dataFormat || rg.has(Y.dataFormat) ? `configtz ${Y.configtz ?? ""} differs from desiredtz ${Y.desiredtz ?? ""}` : `GGIR does not gap-impute data format ${String(Y.dataFormat)}`})`) } : {},
		...B.length > 0 ? { ggirClockSteps: B } : {},
		...F.length > 0 ? { ggirDstPlaceholders: C.placeholders } : {}
	}, h);
	var Y, X;
	if ("already_complete" === K.kind) {
		const t = K.record.id;
		if (null == t) throw new Error("Completed local import identity is invalid.");
		const n = await bg(t, e, d);
		return await vn(e.name, d), {
			alreadyImported: !0,
			...n ? { ggirResultsFiles: n } : {},
			fileId: t,
			availableDates: K.record.availableDates,
			sourceType: K.record.sourceType ?? $.GGIR_5S_UPLOAD
		};
	}
	const Q = K.guard.fileId;
	let ee = null, te = !1;
	const ne = !E && !J, ae = await k?.qwindowCsv?.text();
	if (E && T) try {
		const t = T.configCsv ? await Fe(T.configCsv, h) : void 0;
		if (await to(g), await jn(C.summaries.map((e) => ({
			...e,
			fileId: Q
		})), d, a), await M(d, [d.files, d.ggirResultsBundles], async () => {
			await d.ggirResultsBundles.put(Jn(Q, k?.recordingFile ?? e.name, T, E, {
				part2Reports: k?.part2Reports,
				personReports: k?.personReports,
				qwindowCsv: ae,
				resultsCsv: k?.resultsCsv
			})), await d.files.update(Q, {
				ggirBundleRevision: crypto.randomUUID(),
				ggirSavedNonwearSettled: !0,
				...t ? { ggirNonwearDetector: t } : {}
			});
		}, a), !await Qn(Q, E, uo(i, g.recording), d, !0, B, a, C.markers)) throw new Error("GGIR results markers could not be saved.");
	} catch (me) {
		throw await ao(g), me;
	}
	const ie = D.invalidShort.length === O ? D.invalidShort : null, re = E ? null : await Z(h, (e) => e.runGgirFromEpoch({
		source: "ggir_part1_rdata",
		invalidMask: ie ? "ggir_part2" : "none"
	}, D.anglez5s, D.enmo5s, P, ie ?? new Uint8Array(O), D.desiredtz ?? void 0, f.csvText).catch((e) => (m(e, a, "runGgirFromEpoch (GGIR RData)"), Bt("warn", "GGIR epoch analysis failed", tn(e)), te = !0, null)), {
		ms: A,
		label: "runGgirFromEpoch (GGIR RData)",
		signal: a,
		cancel: y
	});
	if (re?.days?.length) {
		const e = qh(re.days, Q, void 0, f);
		await to(g), await jn(e, d, a).catch((e) => {
			Bt("warn", "GGIR daily summary store failed", tn(e)), te = !0;
		});
	}
	const se = function(e, t) {
		const n = [];
		if (!t || t.length !== e.length) return n;
		let a = null;
		for (let i = 0; i < e.length; i++) {
			const r = e[i] ?? 0, s = 0 !== (t[i] ?? 0);
			if (s && null === a && (a = r), (!s || i === e.length - 1) && null !== a) {
				const t = s && i === e.length - 1 ? r + 5e3 : r;
				n.push([a / 1e3, t / 1e3]), a = null;
			}
		}
		return n;
	}(B.length > 0 ? j : D.timestampsMs, D.nonwearShort), oe = new Map((E ? [] : await mt(Q, d)).map((e) => [e.analysisDate, e])), le = D.anglez5sImputed?.length === O ? D.anglez5sImputed : D.anglez5s, ce = D.enmo5sImputed?.length === O ? D.enmo5sImputed : D.enmo5s;
	ee = E ? ee : await ig(Q, le, P, se, oe, i?.hasptVariant, {
		activity5s: ce,
		...ie ? { invalid5s: ie } : {},
		dstRuns: F,
		wallClockMs: L,
		...D.desiredtz ? { timezone: D.desiredtz } : {}
	}, ra(i?.sleepPeriodDetectionConfig, ma), uo(i, g.recording), d, a, h, y, g.auditBinding);
	const ue = C.dayRecords.map((e) => ({
		...e,
		fileId: Q
	}));
	let de = !1;
	await to(g);
	const pe = (await Ie(ue, d, C.facts, a).catch((e) => (Bt("warn", "GGIR activity day store failed", tn(e)), Xi(e, "saveActivityDay (GGIR RData)"), de = !0, []))).length;
	if (!de && C.signalDates && await qe(Q, H, C.signalDates, d, a).catch((e) => {
		a?.throwIfAborted(), Bt("warn", "GGIR circadian coverage store failed", tn(e));
	}), de || pe !== H.length || 0 === pe) throw await ao(g), /* @__PURE__ */ new Error("Could not save any GGIR RData epochs — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	p(a, "before completing GGIR RData ingest"), await no(g);
	const fe = [
		...E?.configWarnings ?? [],
		...E?.importNotices ?? [],
		E?.sources.ms4 && Xn(E),
		k && !k.resultsCsv && "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.",
		de && "One or more days of GGIR RData epochs could not be saved.",
		ee && (E ? "GGIR results markers could not be saved." : "Sleep window detection (HDCZA) could not place auto-markers."),
		te && (E ? "GGIR source summaries could not be saved." : "GGIR daily summaries could not be computed or saved for this GGIR RData file."),
		ne && "GGIR HASIB sleep/wake flags could not be computed."
	].filter(Boolean).join(" ");
	return n?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete",
		...fe ? { warning: fe } : {}
	}), {
		fileId: Q,
		availableDates: W,
		sourceType: $.GGIR_5S_UPLOAD,
		...E ? { ggir: {
			...(await import("./ggir-results-import-BEI6i5ZF.js").then((e) => e.f)).ggirImportCounts(E, Hn(k?.part2Reports, E, k?.recordingFile ?? e.name)),
			bodySite: (await et(Q, d))?.recording?.bodySite
		} } : {}
	};
}
async function Ig(e, t, n, a, i, r, o) {
	const c = r?.db ?? V(), u = o ?? H(i), d = r ?? {
		db: c,
		attemptId: q(),
		auditBinding: dg(c, i),
		signal: i,
		recording: await qs(e, i, u)
	};
	p(i, "processMappedMimsCsvFile"), a?.({
		phase: "reading",
		percent: 0,
		message: "Reading mapped MIMS CSV..."
	});
	const { prefixHash: f, fullHash: m } = await l(e, (e) => {
		a?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, i), h = await _g(e, c, i, {
		prefixHash: f,
		fullHash: m
	});
	if (h?.id) {
		a?.({
			phase: "complete",
			percent: 100,
			message: "File already imported"
		});
		const e = h.availableDates;
		return {
			alreadyImported: !0,
			fileId: h.id,
			availableDates: e,
			sourceType: h.sourceType ?? $.EPOCHS_60S
		};
	}
	const g = await Dn(e.name, c);
	if (g && "incomplete" !== g.ingestState) throw new nn();
	a?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing mapped MIMS columns..."
	}), p(i, "before reading mapped MIMS CSV");
	const y = await async function(e, t, n, a) {
		const i = x(await e.text()), r = I(i);
		if (r.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
		const o = r.records, l = o[t]?.text;
		if (!l) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
		const c = b(l), u = X(l, c), d = ir(n, u);
		if (d.length > 0) throw new Error(Pi(d));
		const p = Er(u, n.datetime_column), f = Er(u, n.date_column), m = Er(u, n.time_column), h = Er(u, n.mims_unit_column), g = Er(u, n.mims_unit_x_column), y = Er(u, n.mims_unit_y_column), w = Er(u, n.mims_unit_z_column), _ = [], v = [], S = [], k = [], A = [], T = [];
		for (let s = t + 2; s <= o.length; s++) {
			const e = o[s - 1];
			if (!e?.text.trim()) continue;
			const t = X(e.text, c);
			T.push({
				sourceRow: e.sourceRow,
				row: t,
				label: Br(t, p, f, m)
			});
		}
		const N = await (a ?? s()).sourceLabelsWallClockMs(T.map(({ label: e }) => e)), M = T.findIndex((e, t) => !Number.isFinite(N[t] ?? NaN));
		if (M >= 0) throw new Error(`Could not parse timestamp on row ${String(T[M].sourceRow)} of the mapped MIMS CSV.`);
		for (const [s, { row: b }] of T.entries()) _.push(N[s]), v.push(Lr(b, h)), S.push(Lr(b, g)), k.push(Lr(b, y)), A.push(Lr(b, w));
		if (0 === _.length) throw new Error("The mapped MIMS CSV did not contain any data rows.");
		return {
			timestampsMs: new Float64Array(_),
			mimsUnit: null === h ? /* @__PURE__ */ new Float64Array() : new Float64Array(v),
			mimsUnitX: null === g ? /* @__PURE__ */ new Float64Array() : new Float64Array(S),
			mimsUnitY: null === y ? /* @__PURE__ */ new Float64Array() : new Float64Array(k),
			mimsUnitZ: null === w ? /* @__PURE__ */ new Float64Array() : new Float64Array(A)
		};
	}(e, t, n, u);
	p(i, "after reading mapped MIMS CSV");
	const w = $.EPOCHS_60S, _ = await async function(e, t) {
		const n = /* @__PURE__ */ new Map(), a = t.timestampsMs.length, i = Gr(t.mimsUnit, a), r = Gr(t.mimsUnitX, a), s = Gr(t.mimsUnitY, a), o = Gr(t.mimsUnitZ, a), l = Float64Array.from(t.timestampsMs, (e) => e / 1e3);
		for (const [c, u] of await fr(e, l)) n.set(c, {
			timestamps: mr(l, u, 0),
			...i ? { mimsUnit: mr(i, u, NaN) } : {},
			...r ? { mimsUnitX: mr(r, u, NaN) } : {},
			...s ? { mimsUnitY: mr(s, u, NaN) } : {},
			...o ? { mimsUnitZ: mr(o, u, NaN) } : {}
		});
		return n;
	}(u, y), v = [..._.keys()].sort(), S = await zr(_, u);
	a?.({
		phase: "storing",
		percent: 55,
		message: "Saving mapped MIMS epochs..."
	});
	const k = await eo(d, {
		filename: e.name,
		devicePreset: "mims_metrics",
		epochLengthSeconds: 60,
		availableDates: S,
		fileHash: f,
		sourceContentHash: m,
		sourceSizeBytes: e.size,
		source: "local",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: w,
		...(y.timestampsMs[0] ?? 0) > 0 ? { recording: { effectiveTime: new Date(y.timestampsMs[0] ?? 0).toISOString() } } : {}
	}, u);
	if ("already_complete" === k.kind) {
		const e = k.record.id;
		if (null == e) throw new Error("Completed local import identity is invalid.");
		return {
			alreadyImported: !0,
			fileId: e,
			availableDates: k.record.availableDates,
			sourceType: k.record.sourceType ?? w
		};
	}
	const A = k.guard.fileId;
	let T = !1, N = 0;
	for (const s of v) {
		const e = _.get(s);
		if (!e) continue;
		p(i, `saveActivityDay ${s}`);
		const t = /* @__PURE__ */ new Float64Array();
		await to(d);
		const n = {
			fileId: A,
			date: s,
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
		await ut(n, c, i).then(() => !0).catch((e) => (Bt("warn", "MIMS activity day store failed", tn(e)), Xi(e, "saveActivityDay (mapped MIMS CSV)"), T = !0, !1)) && (N += 1, await ro(A, [n], c, u, i));
	}
	if (T || N !== v.length || 0 === N) throw await ao(d), /* @__PURE__ */ new Error("Could not save any mapped MIMS data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return p(i, "before completing mapped MIMS ingest"), await no(d), a?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete"
	}), {
		fileId: A,
		availableDates: S,
		sourceType: w
	};
}
function Ag(e) {
	const t = e.trim();
	if (!/^\d{4}-\d{2}-\d{2}/.test(t)) return null;
	const n = t.includes("	") ? "	" : ",";
	return t.split(n).length;
}
async function xg(e, t, n) {
	const a = Math.min(e.size, 16777216);
	let i = Math.min(16384, a);
	for (;;) {
		p(t, "before reading GeneActiv CSV header");
		const s = await r(e, i, n);
		p(t, "after reading GeneActiv CSV header");
		const o = i >= a, l = s.split("\n"), c = o && i >= e.size ? l : l.slice(0, -1);
		for (const e of c) {
			const t = Ag(e);
			if (null !== t) return t >= 12;
		}
		if (o) return !1;
		i = Math.min(2 * i, a);
	}
}
export { wr as $, $s as A, br as B, Gs as C, Cs as D, Ps as E, Fr as F, Ar as G, Nr as H, Or as I, xr as J, hr as K, Pr as L, zs as M, fs as N, Ls as O, ps as P, kr as Q, jr as R, Hs as S, Fs as T, Tr as U, Sr as V, Ir as W, pr as X, zr as Y, _r as Z, ao as _, qh as a, Xi as at, qs as b, po as c, Yi as ct, to as d, Wi as dt, yg as ensureSavedGgirNonwear, Rr as et, lo as f, no as g, so as h, tg as i, xg as isGeneactivEpochCsv, Qi as it, Rs as j, Ds as k, fo as l, Ki as lt, oo as m, og as n, ur as nt, ig as o, nr as ot, eo as p, kg as processGgirMetaRDataFile, Ig as processMappedMimsCsvFile, $r as q, Vh as r, ug as refuseUnimportableGgirRecording, dr as rt, mo as s, er as st, lg as t, cr as tt, uo as u, Ji as ut, io as v, Os as w, Zs as x, Ks as y, Mr as z };
