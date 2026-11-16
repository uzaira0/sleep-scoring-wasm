import { h as e } from "./ggir-results-types-kmrkPkJO.js";
import { Cr as t, Dr as n, Fr as a, G as i, J as s, L as r, Nr as o, O as l, Rr as c, S as u, Sn as d, T as p, Tr as f, Vn as m, W as h, Wn as g, X as y, Xn as w, Y as _, Yn as v, _n as b, b as S, cr as k, d as I, dr as A, f as x, ft as N, gn as T, h as M, hr as R, ht as z, k as $, kr as C, l as D, lr as E, lt as F, mr as O, mt as P, n as j, o as B, or as G, ot as L, p as U, pr as H, pt as Z, q, qn as V, r as W, rr as J, s as K, sr as Y, st as X, tr as Q, tt as ee, ur as te, vt as ne, wr as ae, xn as ie, xt as se, yt as re, z as oe } from "./background-jobs-BCPfjgGQ.js";
import { $ as le, $n as ce, $r as ue, A as de, An as pe, Ar as fe, At as me, B as he, C as ge, Cn as ye, Cr as we, Ct as _e, D as ve, Dt as be, En as Se, Et as ke, F as Ie, Ft as Ae, G as xe, Gr as Ne, Gt as Te, H as Me, Hr as Re, In as ze, J as $e, Jn as Ce, Jr as De, Jt as Ee, K as Fe, Kn as Oe, Ln as Pe, M as je, Mn as Be, Mt as Ge, N as Le, Nn as Ue, Nr as He, Nt as Ze, O as qe, On as Ve, Ot as We, P as Je, Pt as Ke, Qn as Ye, R as Xe, Rr as Qe, Rt as et, S as tt, Sn as nt, Sr as at, St as it, T as st, Tn as rt, Tr as ot, Tt as lt, U as ct, Ut as ut, V as dt, Vt as pt, W as ft, Wn as mt, Wr as ht, Wt as gt, X as yt, Xr as wt, Xt as _t, Y as vt, Yn as bt, Z as St, Zr as kt, _ as It, _n as At, _t as xt, a as Nt, an as Tt, at as Mt, b as Rt, bn as zt, bt as $t, c as Ct, cr as Dt, d as Et, dr as Ft, dt as Ot, ei as Pt, er as jt, f as Bt, fr as Gt, ft as Lt, gt as Ut, i as Ht, in as Zt, it as qt, j as Vt, jn as Wt, jt as Jt, k as Kt, kr as Yt, kt as Xt, l as Qt, ln as en, lr as tn, m as nn, mn as an, n as sn, nn as rn, nr as on, nt as ln, o as cn, on as un, p as dn, pt as pn, r as fn, rr as mn, rt as hn, s as gn, sn as yn, st as wn, t as _n, ti as vn, tn as bn, tr as Sn, tt as kn, u as In, ur as An, ut as xn, v as Nn, vr as Tn, vt as Mn, w as Rn, wn as zn, wr as $n, wt as Cn, x as Dn, xn as En, xt as Fn, y as On, yt as Pn, zt as jn } from "./db-D_ccV0o1.js";
import { n as Bn, t as Gn } from "./valid-day-criteria-D0FpZTom.js";
import { D as Ln, E as Un, S as Hn, T as Zn, _ as qn, b as Vn, c as Wn, g as Jn, h as Kn, l as Yn, n as Xn, r as Qn, s as ea, v as ta, w as na, x as aa } from "./ggir-results-import-CUHCsMSz.js";
import { i as ia, t as sa } from "./wal-DJUQnA2u.js";
import { C as ra, D as oa, S as la, T as ca, a as ua, b as da, d as pa, f as fa, g as ma, h as ha, i as ga, l as ya, n as wa, o as _a, p as va, s as ba, t as Sa, v as ka, w as Ia, x as Aa, y as xa } from "./local-nonwear-unified-DAJBkB8R.js";
import { _ as Na, a as Ta, c as Ma, d as Ra, f as za, g as $a, h as Ca, i as Da, l as Ea, n as Fa, o as Oa, p as Pa, r as ja, s as Ba, t as Ga, v as La } from "./epoch-utils-pkRaHlkm.js";
import { $ as Ua, A as Ha, B as Za, C as qa, D as Va, E as Wa, G as Ja, H as Ka, J as Ya, K as Xa, M as Qa, N as ei, O as ti, Q as ni, R as ai, S as ii, T as si, U as ri, V as oi, W as li, X as ci, Y as ui, _ as di, b as pi, et as fi, g as mi, h as hi, j as gi, k as yi, p as wi, q as _i, tt as vi, v as bi, x as Si, z as ki } from "./local-export-worker-DRuJMI8r.js";
import { a as Ii, c as Ai, g as xi, h as Ni, m as Ti, p as Mi, v as Ri } from "./epoch-series-import-CSjcBhZB.js";
const zi = "Review Data Settings > CSV Settings before opening this file.";
function $i(e) {
	return `Column-mapped CSV mapping could not be applied: ${e.map((e) => e.message).join(" ")} ${zi}`;
}
function Ci(e, t, n) {
	const a = Object.values(t);
	if (!a.includes(e)) throw new Error(`${n} must be one of ${a.join(", ")} (bundle reported "${e}")`);
	return e;
}
function Di(e) {
	return Ci(e, E, "temporalBasis");
}
const Ei = {
	full_calibrated_signal: "https://w3id.org/sleep-scoring-ontology/method/actours/full-pipeline-file/1",
	epoch_series_part3to5: "https://w3id.org/sleep-scoring-ontology/method/actours/ggir-epoch-parts-3-to-5/1"
}, Fi = "actours.compute.file.v1", Oi = Number.MAX_SAFE_INTEGER;
function Pi(e) {
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
	if (Array.isArray(e)) return e.map(Pi);
	if ("object" == typeof e) {
		const t = {};
		for (const [n, a] of Object.entries(e)) null != a && (t[n] = Pi(a));
		return t;
	}
	throw new TypeError("unsupported method parameter type: " + typeof e);
}
const ji = /* @__PURE__ */ new Set([
	"id",
	"fileId",
	"createdAt",
	"updatedAt"
]);
async function Bi(e) {
	const t = [...e].sort((e, t) => e.analysisDate.localeCompare(t.analysisDate)).map((e) => Sn(Pi(function(e) {
		const t = {};
		for (const [n, a] of Object.entries(e)) ji.has(n) || void 0 !== a && (t[n] = a);
		return t;
	}(e))));
	return oe(`[${t.join(",")}]`);
}
const Gi = {
	accelerator: "cpu_only",
	concurrency: {
		mode: "serial",
		max_threads: null
	},
	vectorization: "baseline"
};
async function Li(e, t = U(), n) {
	const a = t, i = await async function(e) {
		if (!/^[0-9a-f]{64}$/.test(e.sourceContentSha256)) throw new Error("sourceContentSha256 must be 64 lowercase hex characters");
		if (!Number.isInteger(e.sourceSizeBytes) || e.sourceSizeBytes < 1) throw new Error("sourceSizeBytes must be a positive integer");
		if (!/^[0-9a-f]{64}$/.test(e.runtimeBuild.artifactSha256)) throw new Error("runtimeBuild.artifactSha256 must be 64 lowercase hex characters");
		const t = e.dailyRows.length, n = 0 === t ? [] : [`daily_summary_stream:sha256:${await Bi(e.dailyRows)}`], a = Gi, i = Ei[e.computePath], s = await async function(e) {
			if (!e.methodSpecificationId.trim()) throw new Error("methodSpecificationId must be nonblank");
			const t = (n = e.params, Sn(Pi(n)));
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
				file_compute_contract: Fi,
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
			file_compute_contract_version: Fi,
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
		return oe(Sn({
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
	return I(a, [a.localExecutions], async () => {
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
async function Ui(e, t = s()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
async function Hi(e, t = Gn, n) {
	const a = await j(n).validWearDays(Float64Array.from(e), t);
	return Array.from(a, (e) => 0 !== e);
}
async function Zi(e, t = Gn, n) {
	return j(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
}
function qi() {
	return [
		"Could not identify file format.",
		"Use Data Settings > CSV Import for mapped vendor, GGIR, MIMS, or generic activity CSV exports.",
		"Native local ingest supports ActiGraph CSV/GT3X, GENEActiv raw CSV/.bin, GGIR meta RData, NHANES PAX80 archives, and recognized generic CSV mappings.",
		"Condor ActLumus/ActTrust TXT files require the server parser today."
	].join(" ");
}
function Vi(e, t) {
	Mt(e) && a().storage.reportFull(t, "Browser storage quota was exceeded while saving local results.");
}
function Wi(e) {
	return "the local model runtime or its input contract rejected the operation";
}
function Ji(e) {
	return `LSTM ONNX sleep/wake scoring could not be computed for this raw file${e ? ` because ${e}` : ""}. Count-based scoring is intact.`;
}
function Ki(e) {
	if (!e || 0 === e.length) return "";
	let t = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY, a = 0;
	for (const i of e) t = Math.min(t, i), n = Math.max(n, i), a += i;
	return ` (sleep probability min=${t.toFixed(3)}, mean=${(a / e.length).toFixed(3)}, max=${n.toFixed(3)})`;
}
function Yi(e, t) {
	if (!e || 0 === e.length) return null;
	let n = 0;
	for (const a of e) n += a ? 1 : 0;
	return 0 === n ? `LSTM ONNX sleep/wake scoring produced an all-wake result${Ki(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : n === e.length ? `LSTM ONNX sleep/wake scoring produced an all-sleep result${Ki(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : null;
}
function Xi(e, t) {
	const n = [
		...me(e, ns, t),
		...Jt(e, ns),
		...Ze(e, ns, t)
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
function Qi(e, t) {
	const n = es(e, t), a = Boolean(e.datetime_column), i = Boolean(e.date_column && e.time_column);
	return a || i || n.push({
		key: "timestamp",
		message: "Map Date/time, or map both Date and Time."
	}), e.mims_unit_column || n.push({
		key: "mims_unit_column",
		message: "Map a MIMS unit column."
	}), n;
}
function es(e, t) {
	return [
		...me(e, ns, t),
		...Jt(e, ns),
		...Ze(e, ns, t)
	];
}
Bn();
const ts = [30, 60], ns = [
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
], as = [
	["axis_x", "axisX"],
	["axis_y", "axisY"],
	["axis_z", "axisZ"],
	["vector_magnitude", "vectorMagnitude"],
	["choi_axis", "choiAxis"]
];
async function is(e, t, n) {
	const a = as.filter(([, e]) => (t[e]?.length ?? 0) > 0), { series: i } = await e.aggregateEpochSeries({
		target_seconds: re,
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
async function ss(e, t, n, a) {
	const i = n.flatMap((e) => t[e] ? [[e, t[e]]] : []), s = await Promise.all(i.map(([, t]) => is(e, t, a)));
	return Object.fromEntries(i.map(([e], t) => [e, s[t]]));
}
async function rs(e, t, n, a) {
	return 0 === t.length ? new Uint8Array(a.length) : e.projectLabelsOntoGrid(t, n, re, a);
}
async function os(e, t, n) {
	return Array.from(await e.roundCountStorage(Float64Array.from(t), n));
}
async function ls(e, t) {
	const { dates: n, day: a } = await e.utcDayIndex(Float64Array.from(t)), i = new Map(n.map((e) => [e, []]));
	return a.forEach((e, t) => {
		const a = n[e];
		void 0 !== a && i.get(a)?.push(t);
	}), i;
}
function cs(e, t, n) {
	return t.map((t) => e[t] ?? n);
}
function us(e) {
	const t = new Float64Array(e.reduce((e, t) => e + t.length, 0));
	let n = 0;
	for (const a of e) t.set(a, n), n += a.length;
	return t;
}
function ds(e, t, n) {
	return Float64Array.from(t, (t) => e[t] ?? n);
}
async function ps(e, t, n, a) {
	return Float64Array.from(await e.uniformTimestamps(t, 1e3 * n, a), (e) => e / 1e3);
}
async function fs(e, t, n, a) {
	if (!Number.isFinite(t) || 0 === n.length || !Number.isFinite(a) || a <= 0) return /* @__PURE__ */ new Map();
	const i = await ls(e, await ps(e, t, a, n.length));
	return new Map(Array.from(i, ([e, t]) => [e, Uint8Array.from(cs(n, t, 0))]));
}
async function ms(e, t, n, a, i = {}) {
	const s = /* @__PURE__ */ new Map();
	if (0 === t.length) return s;
	if (n.length !== t.length || a.length !== t.length) return console.warn("[local-processing] The 5 s GGIR timestamp grid does not match its ENMO/anglez series; skipping the GGIR day split rather than fabricating zeros."), s;
	const r = void 0 !== i.sib && i.sib.length === t.length, o = void 0 !== i.anglex && i.anglex.length === t.length, l = void 0 !== i.angley && i.angley.length === t.length, c = void 0 !== i.nonwear && i.nonwear.length === t.length, u = void 0 !== i.invalid && i.invalid.length === t.length, d = void 0 !== i.mimsUnit && i.mimsUnit.length === t.length, p = void 0 !== i.mimsUnitX && i.mimsUnitX.length === t.length, f = void 0 !== i.mimsUnitY && i.mimsUnitY.length === t.length, m = void 0 !== i.mimsUnitZ && i.mimsUnitZ.length === t.length, h = (e, t) => t.map((t) => (e[t] ?? 0) > 0 ? 1 : 0), g = Float64Array.from(t, (e) => e / 1e3);
	for (const [y, w] of await ls(e, g)) s.set(y, {
		timestamps: cs(g, w, 0),
		enmo: cs(n, w, 0),
		anglez: cs(a, w, 0),
		...o ? { anglex: cs(i.anglex, w, 0) } : {},
		...l ? { angley: cs(i.angley, w, 0) } : {},
		...r ? { sib: cs(i.sib, w, 0) } : {},
		...c ? { nonwear: h(i.nonwear, w) } : {},
		...u ? { invalid: h(i.invalid, w) } : {},
		...d ? { mimsUnit: cs(i.mimsUnit, w, NaN) } : {},
		...p ? { mimsUnitX: cs(i.mimsUnitX, w, NaN) } : {},
		...f ? { mimsUnitY: cs(i.mimsUnitY, w, NaN) } : {},
		...m ? { mimsUnitZ: cs(i.mimsUnitZ, w, NaN) } : {}
	});
	return s;
}
async function hs(e, t, n, a, i, s) {
	const r = /* @__PURE__ */ new Map();
	if (0 === t.length || !Number.isFinite(n)) return r;
	for (const [o, l] of Object.entries(a)) r.set(o, await e.foldUniformOntoGrid(n / 1e3, 30, t, Float64Array.from(l.timestamps), i, s));
	return r;
}
async function gs(e, t, n, a, i) {
	const s = await hs(e, Float64Array.from(t), n, a, i, "majority_ties_sleep");
	return new Map(Array.from(s, ([e, t]) => [e, Uint8Array.from(t)]));
}
async function ys(e, t, n, a, i) {
	const s = await hs(e, Float64Array.from(t), n, a, i, "mean");
	return new Map(Array.from(s, ([e, t]) => [e, Float32Array.from(t)]));
}
async function ws(e, t, n) {
	const a = /* @__PURE__ */ new Map();
	if (!t || 0 === t.length || null === n || !Number.isFinite(n)) return a;
	const i = await ps(e, n, 30, t.length);
	for (const [s, r] of await ls(e, i)) a.set(s, {
		timestamps: cs(i, r, 0),
		scores: r.map((e) => t[e] ? 1 : 0)
	});
	return a;
}
async function _s(e, t, n, a, i) {
	const s = await e.foldOntoGrid(Float64Array.from(t), Float64Array.from(n), Float64Array.from(a), 1e3 * i, "finite_mean");
	return Array.from(s);
}
async function vs(e, t, n, a, i, s, r, o, l, c, u, d) {
	return async function(e, t, n, a, i, s, r, o, l, c, u, d) {
		const p = {}, f = null != i, m = null != s && s.length > 0, h = null != r && r.length > 0, g = null != o && o.length > 0, y = null != l?.unit && l.unit.length === t.length, w = null != l?.unitX && l.unitX.length === t.length, _ = null != l?.unitY && l.unitY.length === t.length, v = null != l?.unitZ && l.unitZ.length === t.length, b = null != u && u.length === t.length, S = null != c && c.length === t.length, k = null != d && d.length === t.length;
		for (const [I, A] of await ls(e, t)) p[I] = {
			timestamps: ds(t, A, 0),
			axisY: ds(n, A, 0),
			vectorMagnitude: ds(a, A, 0),
			...h ? { axisX: ds(r, A, 0) } : {},
			...g ? { axisZ: ds(o, A, 0) } : {},
			...f ? { choiAxis: ds(i, A, 0) } : {},
			...m ? { temperature: ds(s, A, NaN) } : {},
			...y ? { mimsUnit: ds(l?.unit ?? [], A, NaN) } : {},
			...w ? { mimsUnitX: ds(l?.unitX ?? [], A, NaN) } : {},
			..._ ? { mimsUnitY: ds(l?.unitY ?? [], A, NaN) } : {},
			...v ? { mimsUnitZ: ds(l?.unitZ ?? [], A, NaN) } : {},
			...b ? { zeroCrossingX: ds(u, A, NaN) } : {},
			...S ? { zeroCrossingY: ds(c, A, NaN) } : {},
			...k ? { zeroCrossingZ: ds(d, A, NaN) } : {}
		};
		return p;
	}(e, t, await os(e, n, 0), await os(e, a, 2), void 0 !== r ? await os(e, r, 0) : void 0, o, await os(e, i, 0), await os(e, s, 0), l, c, u, d);
}
function bs(e, t) {
	return 30 !== t && (m(e)?.hasRawAccel ?? !1);
}
async function Ss(e) {
	if (e.timestampsMs) {
		const t = 1e3 / e.sampleRate, n = e.timestampsMs[0] !== e.firstTsMs, a = e.timestampsMs.some((n, a) => Math.abs(n - e.firstTsMs - a * t) > .5 * t);
		if (n || a) return console.warn("[local-processing] Native 30-second counts were skipped because raw preparation changed the sample timeline."), null;
	}
	const t = e.cancelOperation ?? (() => {
		_(e.wasmApi);
	}), n = await B(e.wasmApi, (t) => t.neishabouriCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: S,
		label: `neishabouriCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}), a = await B(e.wasmApi, (t) => t.zeroCrossingCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: S,
		label: `zeroCrossingCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}).catch((t) => (p(t, e.signal, `zeroCrossingCounts 30s (${e.label})`), console.warn("[local-processing] The optional 30-second zero-crossing pass failed."), null));
	return {
		timestampsSec: await ps(e.wasmApi, e.firstTsMs, 30, n.y.length),
		neishabouri: n,
		zeroCrossing: a
	};
}
async function ks(e, t, n) {
	const a = n.zeroCrossing, i = await vs(e, n.timestampsSec, n.neishabouri.y, n.neishabouri.vm, n.neishabouri.x, n.neishabouri.z, void 0, void 0, void 0, a ? await os(e, a.zcy, 0) : void 0, a ? await os(e, a.zcx, 0) : void 0, a ? await os(e, a.zcz, 0) : void 0);
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
const Is = "Recording crossed a timezone boundary (a 1 h jump in the device clock). Recording times are kept as the device's wall-clock time; no timezone or daylight-saving shift is applied, so local-time metrics around the jump may be off.";
async function As(e, t) {
	return await e.detectHourClockJumpMs(Float64Array.from(t)) ? Is : null;
}
async function xs(e, t, n = 60) {
	(await e.irregularInternalDays(Float64Array.from(t), n)).forEach(() => {
		console.warn("[local-processing] A possible DST transition or partial internal day was detected; review the in-app import warning.");
	});
}
async function Ns(e, t, n) {
	const a = [...e], i = n && n.storedEpochSeconds < re ? n : void 0, s = i ? await Promise.all(a.map(([, e]) => async function(e, t, n) {
		const { series: a } = await e.aggregateEpochSeries({
			target_seconds: re,
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
	return r.sort(), Number.isFinite(o) && Number.isFinite(l) ? et(r, o, l, void 0, t) : r;
}
function Ts(e) {
	return /[",\r\n]/.test(e) ? `"${e.replace(/"/g, "\"\"")}"` : e;
}
function Ms(e, t) {
	if (!t) return null;
	const n = Ge(t), a = e.findIndex((e) => Ge(e) === n);
	return a >= 0 ? a : null;
}
function Rs(e) {
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
function zs(e, t) {
	if (e.length !== t.length) return console.warn("[local-processing] Event-marker column dropped: mapped row count differs from the parsed epoch count."), /* @__PURE__ */ new Float64Array(0);
	const n = [];
	for (let a = 0; a < e.length; a += 1) {
		const i = t[a];
		1 === e[a] && null != i && Number.isFinite(i) && n.push(i / 1e3);
	}
	return Float64Array.from(n.sort((e, t) => e - t));
}
function $s(e, t, n) {
	const a = new Uint8Array(e.length);
	let i = 0;
	for (const s of Array.from(t)) {
		for (; i + 1 < e.length && (e[i + 1] ?? 1 / 0) <= s;) i += 1;
		const t = e[i];
		null != t && s >= t && s < t + n && (a[i] = 1);
	}
	return a;
}
function Cs(e, t) {
	const n = Date.parse(`${t}T00:00:00Z`) / 1e3, a = [];
	for (const i of Array.from(e)) i >= n && i < n + 86400 && a.push(i);
	return Float64Array.from(a);
}
async function Ds(e, t, n, a) {
	u(a, "standardizing mapped CSV");
	const i = G(await e.text());
	u(a, "standardizing mapped CSV");
	const s = J(i);
	if (s.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
	const r = s.records, o = r[t]?.text;
	if (!o) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
	const l = v(o), c = Q(o, l), d = Xi(n, c);
	if (d.length > 0) throw new Error($i(d));
	const p = Ms(c, n.datetime_column), f = Ms(c, n.date_column), m = Ms(c, n.time_column), h = Ms(c, n.activity_column), g = Ms(c, n.axis_x_column), y = Ms(c, n.axis_z_column), w = Ms(c, n.vector_magnitude_column), _ = [
		{
			header: "ENMO",
			idx: Ms(c, n.enmo_column)
		},
		{
			header: "AngleZ",
			idx: Ms(c, n.anglez_column)
		},
		{
			header: "GGIR_SIB",
			idx: Ms(c, n.ggir_sib_column)
		},
		{
			header: "GGIR_NONWEAR",
			idx: Ms(c, n.ggir_nonwear_column)
		},
		{
			header: "MIMS_UNIT",
			idx: Ms(c, n.mims_unit_column)
		},
		{
			header: "MIMS_UNIT_X",
			idx: Ms(c, n.mims_unit_x_column)
		},
		{
			header: "MIMS_UNIT_Y",
			idx: Ms(c, n.mims_unit_y_column)
		},
		{
			header: "MIMS_UNIT_Z",
			idx: Ms(c, n.mims_unit_z_column)
		}
	].filter((e) => null !== e.idx), b = Ms(c, n.event_marker_column), S = null === b ? null : [];
	if (null === h) throw new Error("Column-mapped CSV mapping requires an activity/counts column before import.");
	if (null === p && (null === f || null === m)) throw new Error("Column-mapped CSV mapping requires Date/time, or both Date and Time, before import.");
	const k = null !== p ? ["Datetime", "Axis1"] : [
		"Date",
		"Time",
		"Axis1"
	];
	null !== g && k.push("Axis2"), null !== y && k.push("Axis3"), null !== w && k.push("Vector Magnitude"), k.push(..._.map((e) => e.header));
	const I = [k.join(",")];
	for (let v = t + 1; v < r.length; v += 1) {
		(v - t - 1) % 1e3 == 0 && (await K(), u(a, "standardizing mapped CSV"));
		const e = r[v];
		if (!e.text.trim()) continue;
		const n = Q(e.text, l), i = null !== p ? [n[p] ?? "", n[h] ?? ""] : [
			null === f ? "" : n[f] ?? "",
			null === m ? "" : n[m] ?? "",
			n[h] ?? ""
		];
		null !== g && i.push(n[g] ?? ""), null !== y && i.push(n[y] ?? ""), null !== w && i.push(n[w] ?? "");
		for (const t of _) i.push(n[t.idx] ?? "");
		S && null !== b && S.push(Rs(n[b])), I.push(i.map(Ts).join(","));
	}
	const A = new Blob([`${I.join("\n")}\n`], { type: "text/csv" });
	return {
		name: e.name,
		lastModified: e.lastModified,
		size: A.size,
		arrayBuffer: () => A.arrayBuffer(),
		text: () => A.text(),
		slice: (e, t) => A.slice(e, t),
		...S ? { eventMarkerRows: Uint8Array.from(S) } : {}
	};
}
function Es(e, t, n, a) {
	if (null !== t) return e[t] ?? "";
	const i = null === n ? "" : e[n] ?? "", s = null === a ? "" : e[a] ?? "";
	return `${i.trim()} ${s.trim()}`;
}
function Fs(e, t) {
	if (null === t) return NaN;
	const n = e[t]?.trim() ?? "";
	if (!n) return NaN;
	const a = Number(n);
	return Number.isFinite(a) ? a : NaN;
}
function Os(e, t) {
	return e.length === t && e.some((e) => Number.isFinite(e)) ? e : void 0;
}
const Ps = Object.assign({
	"../assets/models/lstm_sleep_wake.onnx": "/sleep-scoring-wasm/assets/lstm_sleep_wake-CMNVV_Rk.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba-DjoYpGzg.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa--Jn4_6Dd.onnx",
	"../assets/models/student_lstm_h64_g128_from_lstm_ba.onnx": "/sleep-scoring-wasm/assets/student_lstm_h64_g128_from_lstm_ba-BZ4I7SAE.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_ba.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_ba-CK3CNFjI.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_kappa.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_kappa-Cb_N5vbO.onnx",
	"../assets/models/teacher_lstm_h128_g256_ba.onnx": "/sleep-scoring-wasm/assets/teacher_lstm_h128_g256_ba-CbSChb-h.onnx"
}), js = Ps["../assets/models/lstm_sleep_wake.onnx"] ?? null, Bs = "lstm_sleep_wake_regular_best_20260626", Gs = "bcaf0f2b3f35638a324fd0058ce4cbab03d8f6574cec33a7a07e3e4e0139a908", Ls = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_URL, Us = "configured-url", Hs = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_VERSION ?? Bs, Zs = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SHA256 ?? (!Ls && js ? Gs : ""), qs = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SIZE_LABEL ?? "7.4 MB model file", Vs = [
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
		version: Bs,
		sha256: Gs,
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
var Ws = class extends Error {
	constructor(e) {
		super(e), this.name = "LstmModelUnavailableError";
	}
};
function Js() {
	const e = Vs.flatMap((e) => {
		const t = Ps[e.assetKey];
		return t ? [{
			...e,
			url: t,
			source: "bundled"
		}] : [];
	}), t = Ls ? {
		id: Us,
		label: "Configured URL",
		description: "ONNX model configured by VITE_LSTM_SLEEP_WAKE_ONNX_URL.",
		url: Ls,
		version: Hs,
		sha256: Zs || null,
		sizeLabel: qs,
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
function Ks(e = Js()) {
	return Ls && Ls.length > 0 ? Us : e.find((e) => e.recommended)?.id ?? e[0]?.id ?? null;
}
function Ys(e) {
	const t = Js(), n = e ?? Ks(t);
	return (t.find((e) => e.id === n) ?? t.find((e) => e.id === Ks(t))) || {
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
function Xs(e) {
	if (!Number.isFinite(e)) throw new Ws("LSTM threshold must be a finite number between 0 and 1.");
	return Math.min(1, Math.max(0, e));
}
function Qs(e) {
	const t = Number.parseFloat({
		BASE_URL: "/sleep-scoring-wasm/",
		DEV: !1,
		MODE: "production",
		PROD: !0,
		SSR: !1,
		VITE_BASE_PATH: "/sleep-scoring-wasm/",
		VITE_FORCE_LOCAL_MODE: "true"
	}.VITE_LSTM_SLEEP_WAKE_THRESHOLD ?? "NaN");
	return Number.isFinite(t) ? Xs(t) : e.defaultThreshold;
}
function er(e) {
	return null != e ? Ys(e) : Ls && Ls.length > 0 ? Ys(Us) : Ys();
}
async function tr(e) {
	(function() {
		if (!("caches" in globalThis)) throw new Ws("Browser Cache Storage is unavailable, so the LSTM ONNX model cannot be cached.");
	})();
	const t = er(e), n = function(e) {
		const { url: t } = er(e);
		if (!t) throw new Ws("LSTM ONNX model is not configured. Add frontend/src/assets/models/lstm_sleep_wake.onnx or set VITE_LSTM_SLEEP_WAKE_ONNX_URL.");
		return t;
	}(t.id), a = await (await caches.open(function(e) {
		return `sleep-scoring-lstm-onnx-${e.version}`;
	}(t))).match(n);
	if (!a) throw new Ws("LSTM ONNX model has not been downloaded yet.");
	return new Uint8Array(await a.arrayBuffer());
}
function nr(e) {
	const t = Js(), n = e && "object" == typeof e ? e : null, a = "string" == typeof n?.modelId ? n.modelId : null, i = a && t.some((e) => e.id === a) ? a : Ks(t);
	if (!i) return {
		modelId: null,
		threshold: null
	};
	const s = Ys(i), r = n?.threshold;
	return {
		modelId: i,
		threshold: "number" == typeof r && Number.isFinite(r) ? Xs(r) : Qs(s)
	};
}
function ar(e) {
	return nr({
		modelId: e,
		threshold: null
	}).threshold ?? .5;
}
const ir = {
	ggirHasptVariant: C.ggir_haspt_variant,
	ggirHasibVariantsEnabled: C.ggir_hasib_variants_enabled,
	ggirHasibVariants: [...C.ggir_hasib_variants],
	ggirHasibCountSource: C.ggir_hasib_count_source,
	ggirHasibCountEpochSeconds: C.ggir_hasib_count_epoch_seconds
}, sr = new Set(f), rr = new Set(ae), or = new Set(t);
function lr(e) {
	const t = e ?? {}, n = t.ggir_haspt_variant, a = t.ggir_hasib_variants_enabled, i = t.ggir_hasib_variants, s = t.ggir_hasib_count_source, r = t.ggir_hasib_count_epoch_seconds, o = Array.isArray(i) ? Array.from(new Set(i.filter((e) => "string" == typeof e && rr.has(e)))) : [...ir.ggirHasibVariants];
	return {
		ggirHasptVariant: "string" == typeof n && sr.has(n) ? n : ir.ggirHasptVariant,
		ggirHasibVariantsEnabled: "boolean" == typeof a ? a : ir.ggirHasibVariantsEnabled,
		ggirHasibVariants: o,
		ggirHasibCountSource: "string" == typeof s && or.has(s) ? s : ir.ggirHasibCountSource,
		ggirHasibCountEpochSeconds: "number" == typeof r && Number.isInteger(r) && r >= 1 ? r : ir.ggirHasibCountEpochSeconds
	};
}
function cr(e) {
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
function ur(e) {
	return !un(e);
}
const dr = /* @__PURE__ */ new WeakMap();
async function pr(e, t) {
	const n = await Bt(e, t);
	return {
		data: n,
		nights: await Wa(n?.actiwareIntervals, j())
	};
}
function fr(e, t, n) {
	if (!n) return pr(e, t);
	let a = dr.get(n);
	return a || dr.set(n, a = pr(e, t)), a;
}
const mr = "actiware";
function hr(e) {
	return [...xn(e)].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort();
}
async function gr(e, t, n) {
	try {
		const i = await t.actiwareFileData.get(e);
		if (!i?.actiwareSleepWake) return;
		const s = (await t.actiwareStatisticsInputs.get(e))?.input, r = (await t.files.get(e))?.seriesRevision ?? 0, o = hr(await t.markers.where("fileId").equals(e).toArray());
		let l = null;
		try {
			l = await wi(await Wa(i.actiwareIntervals, j(n)), s, o, (e) => j(n).actiwareIntervalStatistics(e));
		} catch (a) {
			n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), Ft("error", "Actiware statistics recalculation failed", {
				...An(a),
				file_id: e
			});
		}
		await x(t, [
			t.actiwareFileData,
			t.actiwareStatisticsInputs,
			t.files,
			t.markers
		], async () => {
			const n = await t.actiwareFileData.get(e), a = (await t.actiwareStatisticsInputs.get(e))?.input;
			if (!n || ((await t.files.get(e))?.seriesRevision ?? 0) !== r) return;
			if (JSON.stringify(a) !== JSON.stringify(s) || JSON.stringify(n.actiwareIntervals) !== JSON.stringify(i.actiwareIntervals)) return;
			const c = hr(await t.markers.where("fileId").equals(e).toArray());
			JSON.stringify(c) === JSON.stringify(o) && (await t.actiwareFileData.update(e, null === l ? { actiwareStatisticsNeedsRecompute: !0 } : {
				actiwareStatistics: l,
				actiwareStatisticsNeedsRecompute: !1
			}), await cn(t, [e]));
		}, n);
	} catch (a) {
		n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), Ft("error", "Actiware statistics recalculation failed", {
			...An(a),
			file_id: e
		});
		try {
			await x(t, [t.actiwareFileData, t.files], async () => {
				await t.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), await cn(t, [e]);
			}, n);
		} catch {
			throw a instanceof Error ? a : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
		}
	}
}
async function yr(e, t, n, { analysisParadigm: a, signal: i, read: s }) {
	const r = s ? s.file : await ge(e, n);
	if (ur(r)) {
		if (rn(r, a) === De.rest_intervals) return gr(e, n, i);
		try {
			const a = await n.actiwareFileData.get(e);
			if (!a?.actiwareSleepWake) return;
			const s = (await n.actiwareStatisticsInputs.get(e))?.input, r = (await n.files.get(e))?.seriesRevision ?? 0, c = await n.markers.where("fileId").equals(e).toArray(), u = !0 === a.actiwareStatisticsNeedsRecompute, d = (e, t) => JSON.stringify(e.filter((e) => e.date === t).map((e) => [
				e.id,
				e.contentHash,
				e.lastModifiedAt,
				e.sleepMarkers
			])), p = (e) => JSON.stringify(e.map((e) => [
				e.markerType,
				e.onsetTimestamp,
				e.offsetTimestamp
			])), f = xn(c.filter((e) => u || t.has(e.date))), m = u ? new Map([...[...f].map(([e, t]) => [e, t.sleepMarkers]), ...t]) : t, h = new Map([...m].flatMap(([e, t]) => {
				const n = f.get(e);
				return n && p(n.sleepMarkers) !== p(t) ? [] : [[e, {
					sleepMarkers: [...t],
					isInvalidNight: n?.isInvalidNight ?? !1
				}]];
			}));
			if (0 === h.size) return;
			const g = new Map([...h.keys()].map((e) => [e, d(c, e)]));
			let y = null;
			try {
				y = await mi({
					file: a,
					statisticsInput: s
				}, h, (e) => j(i).actiwareIntervalStatistics(e), j(i));
			} catch (l) {
				i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), Ft("error", "Actiware statistics recalculation failed", {
					...An(l),
					file_id: e
				});
			}
			await x(n, [
				n.actiwareFileData,
				n.actiwareStatisticsInputs,
				n.files,
				n.markers
			], async () => {
				const t = await n.actiwareFileData.get(e), l = (await n.actiwareStatisticsInputs.get(e))?.input;
				if (!t || ((await n.files.get(e))?.seriesRevision ?? 0) !== r) return;
				if (JSON.stringify(l) !== JSON.stringify(s) || JSON.stringify(t.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
				const c = await n.markers.where("fileId").equals(e).toArray(), p = new Map([...h].filter(([e]) => d(c, e) === g.get(e)));
				if (0 === p.size) return;
				if (null === y) return await n.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), void await cn(n, [e]);
				const f = di(t, y), w = f.length > 0 ? await o.waitFor(Za(f, j(i))) : void 0, _ = bi(t, y), v = _.length > 0 ? await o.waitFor(Wa(_, j(i))) : void 0, b = hi(t, y, p.keys(), {
					rowDateOf: w,
					rowNights: v
				});
				await n.actiwareFileData.update(e, {
					actiwareStatistics: b,
					actiwareStatisticsNeedsRecompute: !0 === t.actiwareStatisticsNeedsRecompute && !(u && p.size === m.size)
				}), await cn(n, [e]);
			}, i);
		} catch (l) {
			i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), Ft("error", "Actiware statistics recalculation failed", {
				...An(l),
				file_id: e
			});
			try {
				await x(n, [n.actiwareFileData, n.files], async () => {
					await n.actiwareFileData.update(e, { actiwareStatisticsNeedsRecompute: !0 }), await cn(n, [e]);
				}, i);
			} catch {
				throw l instanceof Error ? l : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
			}
		}
	}
}
const wr = "An earlier audit record is still being written. The rest interval was not changed; try again.";
async function _r(e, t, n, a) {
	return (await vr(e, n, a, (n, { core: a }) => ii(n, e.date, t, a))).sleepMarkers;
}
async function vr({ fileId: e, date: t, actor: n }, a, i, s) {
	const r = await a.actiwareFileData.get(e), o = (await a.actiwareStatisticsInputs.get(e))?.input, l = r?.actiwareSleepWake;
	if (!l || !o) throw new Si("This recording has no Actiware analysis settings, so its rest intervals cannot be edited.");
	const c = j(i), u = r?.actiwareIntervals ?? [], d = await Wa(u, c), p = await s(d, {
		epochs: o.epochs,
		params: l.params,
		grid: {
			startTimestamp: l.startTimestamp,
			epochSeconds: l.epochSeconds
		},
		core: c
	}), f = [...p.intervals], m = hr(await a.markers.where("fileId").equals(e).toArray()), h = Va(u, f), g = ti(h);
	if (0 === g.length) return {
		sleepMarkers: Ha(d, t, m.includes(t)),
		removed: 0,
		history: null
	};
	const y = await wi(p, o, m, (e) => c.actiwareIntervalStatistics(e)).catch(Ii), w = ce.captureWorkspaceBinding(a, {
		username: n.username,
		studyId: n.studyId
	});
	if (!await ce.settleWritesForDb(a, w)) throw new Si(wr);
	let _ = !1;
	return await x(a, [
		a.actiwareFileData,
		a.markers,
		a.files,
		a.placementResults,
		a.projectMeta,
		a.auditLog
	], async () => {
		const n = await a.actiwareFileData.get(e);
		if (JSON.stringify(n?.actiwareIntervals ?? []) !== JSON.stringify(u)) throw new Si("That rest interval changed since it was shown; reload the night.");
		_ = null === y || JSON.stringify(hr(await a.markers.where("fileId").equals(e).toArray())) !== JSON.stringify(m), await a.actiwareFileData.update(e, _ ? {
			actiwareIntervals: f,
			actiwareStatisticsNeedsRecompute: !0
		} : {
			actiwareIntervals: f,
			actiwareStatistics: y ?? [],
			actiwareStatisticsNeedsRecompute: !1
		}), await a.placementResults.delete(e), await Ue([e], a, i), await cn(a, [e]), await g.reduce(async (n, a) => {
			if (await n, !await ce.recordFileEventDurably({
				fileId: e,
				analysisDate: t,
				action: V.ACTIWARE_REST_EDITED,
				payload: { ...a }
			}, w)) throw new Si(wr);
		}, Promise.resolve());
	}, i), _ && await gr(e, a, i), {
		sleepMarkers: Ha(p, t, m.includes(t)),
		removed: h.take.filter((e) => "rest" === e.kind).length,
		history: {
			undo: (e, t = a, n) => _r(e, ei(h), t, n),
			redo: (e, t = a, n) => _r(e, h, t, n)
		}
	};
}
const br = {
	nightRecord: {
		sleepPeriodsToSave: async ({ fileId: e, date: t, isInvalidNight: n }, a, i) => gi(a, await Wa((await Bt(e, i))?.actiwareIntervals, j()), t, n),
		writeEdit: function(e, t, n = U(), a) {
			return vr(e, n, a, (n, a) => qa(n, e.date, t, a));
		}
	},
	sourceAnalysis: {
		id: mr,
		covers: ur,
		followSavedNights: async function({ fileId: e, file: t, nights: n, sleepMarkersChanged: a, analysisParadigm: i, db: s, signal: r, openBatch: o }) {
			const l = a ? void 0 : await s.actiwareFileData.get(e);
			if (a || l?.actiwareStatisticsNeedsRecompute || l?.actiwareSleepWake && !l.actiwareStatistics?.length) {
				const a = o();
				if (a) {
					let e = a.savedNights.get(mr);
					e || a.savedNights.set(mr, e = /* @__PURE__ */ new Map());
					for (const [t, a] of n) e.set(t, a);
				} else await yr(e, n, s, {
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
				await yr(e, t, a, {
					analysisParadigm: n,
					signal: i
				});
			} catch (s) {
				Ft("error", "Actiware statistics recalculation failed", {
					...An(s),
					file_id: e
				});
			}
		},
		proposeNight: async function({ fileId: e, date: t, file: n, options: a, sleepPeriodDetectionConfig: i, db: s, batch: r }) {
			if (a.algorithm !== Y.ACTIWARE_SLEEP_WAKE) return null;
			const o = ur(n) ? await fr(e, s, r) : null, l = o?.data, c = o ? Qa(o.nights, t) : null, u = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(11, 19), d = l?.actiwareRestProposal?.notes?.[t], p = null !== o && yi(o.nights, t).some((e) => "scorer" === e.origin), f = d && !p ? [`Rest proposal (SCREENS Autoscore): ${d}`] : [], { source_a: m, source_b: h, fusion_policy: g, apply_nonwear_gate: y } = ot(bn({
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
					marker_type: A.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: (c.additionalSleeps ?? []).map((e, t) => ({
					onset_timestamp: e.startTimestamp,
					offset_timestamp: e.endTimestamp,
					marker_type: A.NAP,
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
						const a = await t.studySettings.where("key").equals("study").first(), i = a?.extraSettings ?? {}, s = At(i.actiware_rest_proposal);
						if (s.rest_autoscore !== Ne.screens) return !1;
						const r = await t.files.get(e);
						if (null == r?.id || !an(r)) return !1;
						const { reanalyzeActiwareFile: o } = await import("./reanalysis-CK_I97-n.js");
						return (await o({
							...r,
							id: r.id
						}, {
							paradigm: en(i.analysis_paradigm),
							overrides: yn(i.actiware_analysis),
							proposal: s,
							hasib: cr(lr(i))?.hasibVariants,
							db: t,
							expectedStudyContentHash: a?.contentHash ?? null,
							services: n
						})).changed;
					}(e, t, n);
				} catch (a) {
					throw Ft("error", "Rest proposal after the diary write failed", {
						...An(a),
						file_id: e
					}), new Error("The rest intervals were not proposed again from the new diary; they still follow the previous diary. Save the study settings to propose them again.", { cause: a });
				}
			}
		},
		guiderWindow: async function({ fileId: e, date: t, db: n, batch: a }) {
			return si((await fr(e, n, a)).nights, t);
		},
		reanalyze: async (e, t, { db: n, expectedStudyContentHash: a, signal: i, services: s }) => {
			if (!an(e)) return { changed: !1 };
			const { reanalyzeActiwareFile: r, ACTIWARE_NOT_RECONCILED: l } = await o.waitFor(import("./reanalysis-CK_I97-n.js")), c = await r(e, {
				paradigm: en(t.analysis_paradigm),
				overrides: yn(t.actiware_analysis),
				proposal: At(t.actiware_rest_proposal),
				hasib: cr(lr(t))?.hasibVariants,
				db: n,
				...void 0 !== a ? { expectedStudyContentHash: a } : {},
				...i ? { signal: i } : {},
				services: s
			});
			return c.unavailable ? {
				...c,
				notReconciled: l
			} : c;
		}
	}
}, Sr = {
	id: "ggir_saved_folder",
	covers: () => !0,
	followSavedNights: ({ fileId: e, username: t, db: n, signal: a }) => (pi(e, t, n, a), Promise.resolve())
}, kr = { sleepPeriodsToSave: (e, t) => Promise.resolve(t) }, Ir = {
	[De.sleep_periods]: kr,
	[De.rest_intervals]: br.nightRecord
}, Ar = [br.sourceAnalysis, Sr];
function xr(e, t, n) {
	return null != e[n] && e.covers(t);
}
function Nr(e, t, n) {
	return e.find((e) => xr(e, t, n));
}
function Tr(e, t) {
	if (0 === e.length) return [];
	const n = [0];
	for (let a = 1; a < e.length; a++) Math.abs(e[a] - e[a - 1] - t) > .001 && n.push(a);
	return n.map((t, a) => ({
		start: t,
		end: n[a + 1] ?? e.length
	}));
}
async function Mr(e, t, n, a = ua, i = () => {
	_(e);
}) {
	const s = /* @__PURE__ */ new Map(), r = Math.min(t.x.length, t.y.length, t.z.length);
	if (0 === r || t.sampleRate <= 0) return s;
	const o = a.filter((e) => !ka(e)?.needsModel);
	if (0 === o.length) return s;
	const l = new Float64Array(3 * r);
	for (let u = 0; u < r; u++) l[3 * u] = t.x[u], l[3 * u + 1] = t.y[u], l[3 * u + 2] = t.z[u];
	u(n, `before detectNonwearUnifiedBatch(${o.join(",")})`);
	const c = await B(e, (e) => e.detectNonwearUnifiedBatch(o, {
		raw: l,
		sampleRate: t.sampleRate,
		epochSeconds: t.epochSeconds
	}), {
		ms: S,
		label: `detectNonwearUnifiedBatch(${o.join(",")})`,
		signal: n,
		cancel: i
	}).catch((e) => (p(e, n, `detectNonwearUnifiedBatch(${o.join(",")})`), console.warn("[local-processing] A raw-signal nonwear batch failed."), null));
	if (c) for (const [u, d] of Object.entries(c)) s.set(u, d);
	return s;
}
async function Rr(e, t, n, a, i, s = wa, r = () => {
	_(e);
}) {
	const o = {}, l = s.filter((e) => !ka(e)?.needsModel);
	if (0 === l.length) return o;
	const c = n.map((e) => t[e]).filter((e) => void 0 !== e), d = us(c.map((e) => e.timestamps)), f = us(c.map((e) => e.axisY)), m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
	for (const { start: y, end: w } of Tr(d, a)) {
		const t = f.slice(y, w);
		if (0 === t.length) continue;
		u(i, "before count nonwear continuous run");
		const n = await B(e, (e) => e.detectNonwearUnifiedBatch(l, {
			counts: t,
			epochSeconds: a
		}), {
			ms: S,
			label: "count nonwear continuous run",
			signal: i,
			cancel: r
		}).catch((e) => (p(e, i, "count nonwear continuous run"), console.warn("[local-processing] A count-based nonwear batch failed for one contiguous run."), null));
		for (const [i, s] of Object.entries(n ?? {})) {
			if (!s.available || !s.nonwear?.length) {
				m.has(i) || m.set(i, s);
				continue;
			}
			const t = await Aa(s, {
				baseTsSec: d[y],
				epochTimestampsSec: d.slice(y, w),
				epochLenSec: a
			}, e), n = m.get(i)?.nonwear ?? new Uint8Array(d.length);
			n.set(t, y), m.set(i, {
				...s,
				nonwear: n,
				elementSeconds: a
			}), h.set(i, (h.get(i) ?? 0) + t.length);
		}
	}
	let g = 0;
	for (const u of n) {
		const e = t[u]?.timestamps.length ?? 0;
		0 !== e && (o[u] = new Map([...m].map(([t, n]) => {
			const a = h.get(t) === d.length;
			return [t, {
				...n,
				available: a,
				nonwear: a ? n.nonwear.slice(g, g + e) : null
			}];
		})), g += e);
	}
	return o;
}
function zr(e) {
	return null == e ? {} : { [Y.OAKLEY_1997]: { oakleyThreshold: e } };
}
async function $r(e, t, n, a, i, s, r, o = () => {
	_(e);
}, l = {}, c = Ti) {
	if (0 === c.length) return;
	const d = a.flatMap((e) => n[e] ?? []), f = us(d.map((e) => e.timestamps)), m = us(d.map((e) => e.axisY)), h = {}, g = /* @__PURE__ */ new Map();
	for (const { start: _, end: v } of Tr(f, i)) {
		const t = m.slice(_, v);
		if (!t || 0 === t.length) continue;
		const n = /* @__PURE__ */ new Map();
		for (const d of c) {
			const a = Ri(d, i);
			if ("gate_needs_30s_epoch" === a.kind) {
				n.set(d, a.response);
				continue;
			}
			u(s, `before scoreEpochs(${d} continuous)`);
			const c = await B(e, (e) => e.scoreEpochs(xi({
				algorithm: d,
				counts: t,
				epochSeconds: i,
				...r ? { postprocessing: r } : {},
				...l[d] ? { config: l[d] } : {}
			})), {
				ms: S,
				label: `scoreEpochs(${d} continuous)`,
				signal: s,
				cancel: o
			}).catch((e) => (p(e, s, `scoreEpochs(${d} continuous)`), console.warn("[local-processing] A descriptor-driven sleep/wake scorer failed for one contiguous run."), null));
			c && n.set(d, c);
		}
		const a = Ni(n, t.length);
		for (const [e, i] of Object.entries(a)) {
			const t = h[e] ?? new Uint8Array(f.length);
			t.set(i, _), h[e] = t, g.set(e, (g.get(e) ?? 0) + i.length);
		}
	}
	const y = Object.entries(h).filter(([e]) => g.get(e) === f.length);
	let w = 0;
	for (const u of a) {
		const e = n[u], a = t[u];
		if (!e) continue;
		const i = w + e.timestamps.length;
		a && (a.unifiedSleepWake = Object.fromEntries(y.map(([e, t]) => [e, t.slice(w, i)]))), w = i;
	}
}
function Cr(e, t) {
	return {
		vector_magnitude: e.vectorMagnitude,
		axis_y: e.axisY,
		axis_x: e.axisX,
		axis_z: e.axisZ
	}[t];
}
async function Dr(e, t, n, a, i, s, r) {
	if (!e || !t || 0 === e.timestamps.byteLength) return;
	if ("counts_axis_y" !== ka(t)?.requiredSignal) return;
	if (ra(e, t, n)) return;
	const o = new Float64Array(e.timestamps), l = i ?? j(s), c = await le(o, { day: e }, l), u = Re(Qe(t) ?? [], c), d = u !== c, p = async (e, t) => {
		const n = {
			timestamps: new Float64Array(e.timestamps),
			axisY: new Float64Array(t),
			vectorMagnitude: new Float64Array(t)
		};
		return d ? is(l, n, c) : n;
	}, f = (e, t) => d ? rs(l, e, t, o) : t;
	let m;
	try {
		const i = [...(await dn(e.fileId, a, r)).values()];
		if (Sa.includes(t)) {
			const t = i.filter((e) => e.timestamps.byteLength > 0 && Cr(e, n)).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), a = t.findIndex((t) => t.date === e.date);
			if (a < 0) return;
			const r = [];
			for (const e of t) r.push(await p(e, Cr(e, n)));
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
			const r = (await Rr(l, a, n.map((e) => e.date), u, s, [t]))[e.date]?.get(t);
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
	s?.throwIfAborted(), await Xe(e.fileId, e.date, m, a, s), s?.throwIfAborted(), Object.assign(e, m);
}
async function Er(e, t, n, a, i, s = () => {
	_(e);
}) {
	const r = us(n.map((e) => t[e].timestamps)), o = us(n.map((e) => t[e].axisY)), l = us(n.map((e) => t[e].choiAxis ?? t[e].vectorMagnitude)), c = Tr(r, a), u = await B(e, (e) => e.scoreAllDays(c.map(({ start: e, end: t }) => ({
		activityF64: o.slice(e, t),
		vmF64: l.slice(e, t),
		epochSeconds: a
	}))), {
		ms: S,
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
		const n = await B(e, (e) => e.detectNonwearChoi2011(l.slice(h.start, h.end), a), {
			ms: S,
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
function Fr(e, t) {
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
	return await jn((t) => t.recordingFacts(e), new Ae(t)) ?? {};
}
async function Pr(e) {
	return Wt((await qe(e))?.extraSettings);
}
async function jr(e, t, n, a) {
	n?.throwIfAborted();
	const i = await h(e, 65536, a);
	n?.throwIfAborted();
	const s = new TextDecoder("utf-8", { fatal: !1 }).decode(i);
	for (const r of [/measurement frequency\s*[,:\t]\s*(\d+)/i, /sample rate(?:\s*hz)?\s*[,:\t]\s*(\d+)/i]) {
		const e = r.exec(s);
		if (e && e[1]) {
			const t = Number.parseInt(e[1], 10);
			if (Number.isFinite(t) && t > 0) return t;
		}
	}
	return $[t];
}
async function Br(e, t, n, a) {
	t?.throwIfAborted();
	const i = Ai(e) ? z(Mi("aw5")) : P(e.name);
	if ("none" === i) return {};
	const s = Math.max(65536, 2048);
	let r;
	try {
		r = await h(e, s, a);
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
function Gr(e) {
	return `stored_nonwear_mask:${e}`;
}
Object.freeze([]);
const Lr = {
	temperature_epoch_stream: (e) => null != e.temperature && ha(new Float64Array(e.temperature)),
	sleep_wake_epoch_stream: (e) => null != e.algorithmResults?.[Y.ACTIWARE_SLEEP_WAKE],
	device_wear_state_evidence_stream: (e) => !0 === e.actiwareOffWristChannel
};
function Ur(e) {
	const t = [];
	for (const [n, a] of Object.entries(Lr)) for (const i of e) if (a(i)) {
		t.push(n);
		break;
	}
	for (const n of ua) e.some((e) => null != ra(e, n, "")) && t.push(Gr(n));
	return t;
}
async function Hr(e, t, n) {
	const a = [];
	for (const r of t) {
		const t = vi(e, r);
		t && a.push(t.wire);
	}
	if (0 === a.length) return [];
	const { request: i, transfer: s } = fi(a);
	return (await n.computeCircadian(c(i, s))).day_summaries.filter((e) => e.has_signal).map((e) => e.analysis_date);
}
function Zr(e) {
	return e instanceof Error ? e : /* @__PURE__ */ new Error("Local ingest lease renewal failed.");
}
const qr = Math.max(1e3, Math.floor(_n / 4));
async function Vr(e) {
	void 0 !== e.heartbeatId && (clearInterval(e.heartbeatId), delete e.heartbeatId), await e.heartbeatPending, delete e.heartbeatPending;
}
async function Wr(e, t, n) {
	const i = a().scoring(), s = {
		...e.recording,
		...t.recording
	}, r = e.placement ?? {
		bodySite: i.sensorLocation,
		laterality: i.participantLaterality
	}, o = await Nt({
		...t,
		...t.ggirPart2Config ? { ggirNonwearDetector: await Ve(t.ggirPart2Config.csvText, n ?? j(e.signal)) } : {},
		...e.ingestProvenance ? { ingestProvenance: e.ingestProvenance } : {},
		recording: Fr(s, r)
	}, e.attemptId, e.db);
	return "started" === o.kind && (e.guard = o.guard, function(e) {
		void 0 === e.heartbeatId && (e.heartbeatId = setInterval(() => function(e) {
			const t = e.guard;
			t && void 0 === e.heartbeatError && (e.heartbeatPending = (e.heartbeatPending ?? Promise.resolve()).then(() => ct(t, e.db)).catch((t) => {
				e.heartbeatError = t;
			}));
		}(e), qr));
	}(e)), o;
}
async function Jr(e) {
	if (await e.heartbeatPending, void 0 !== e.heartbeatError) throw Zr(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new fn();
	return await ct(t, e.db), t;
}
async function Kr(e) {
	if (await Vr(e), void 0 !== e.heartbeatError) throw Zr(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new fn();
	await async function(e, t = U()) {
		try {
			return await async function(e, t = U(), n) {
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
					]), r = s(t, i), o = Ur([...(await dn(e, a)).values()]), l = t ? Ja(t.sourceType, t.sourceProfileId) : null;
					if (l && T[l].capabilityFromSensorRows && !o.includes("device_wear_state_evidence_stream") && i > 0 && o.push("device_wear_state_evidence_stream"), void 0 === t?.id) return o;
					if (await x(a, [
						a.files,
						a.sensorNonwear,
						a.projectMeta
					], async () => {
						const t = await a.files.get(e);
						return s(t, await a.sensorNonwear.where("fileId").equals(e).count()) === r && (t && (i = t.resolvedCapabilities, l = o, void 0 === i || i.length !== l.length || !l.every((e) => i.includes(e)) || 4 !== t.resolvedCapabilitiesRevision) && await I(a, [a.files], () => a.files.update(e, {
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
	}(t.fileId, e.db), e.finalizedFileId = await Ct(t, e.db, e.signal), delete e.guard;
}
async function Yr(e, t) {
	try {
		await Vr(e);
		const t = e.guard, n = !!t && await ft(t, e.db);
		t && delete e.guard, n ? (console.warn("[local-processing] Rolled back an incomplete local ingest."), e.rollbackOutcome = "rolled_back") : e.rollbackOutcome ??= "nothing_to_roll_back";
	} catch {
		console.error("[local-processing] Incomplete local ingest rollback also failed."), e.rollbackOutcome = "failed";
	}
}
function Xr(e, t) {
	return "object" == typeof e && null !== e && void 0 !== t.rollbackOutcome && (e.__localIngestRollbackOutcome = t.rollbackOutcome), e;
}
async function Qr(e, t, n, a, i) {
	try {
		const s = await Hr(e, t, a);
		await Ie(e, t.map((e) => e.date), s, n, i);
	} catch {
		i?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}
}
function eo(e, t, n, a) {
	return a <= 0 ? 0 : .9 * (e - 1 + (t - e + 1) * n / 3) / a;
}
function to({ scope: e, fileId: t, sourceContentHash: n, label: a, signalDates: i, onChunk: s }) {
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
		s?.(u, d, 0), await Jr(e), s?.(u, d, 1);
		try {
			const t = c.map((e) => e.facts);
			await Fe(c.map((e) => e.day), e.db, t.every((e) => void 0 !== e) ? t : void 0, e.signal);
		} catch (m) {
			throw console.warn("[local-processing] Activity-day persistence failed."), Vi(m, `saveActivityDay (${a})`), l.activityFailed = !0, m;
		}
		l.saved += c.length;
		const p = c.map((e) => e.day.date);
		try {
			await Ie(t, p, p.filter((e) => i.has(e)), e.db, e.signal);
		} catch {
			console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
		}
		s?.(u, d, 2);
		const f = c.flatMap((e) => e.history.map((t) => ({
			...t,
			date: e.day.date
		})));
		await async function(e, t, n, a, i = U(), s) {
			const r = i, o = jt(), l = a.map((a) => {
				const i = {
					fileId: e,
					date: a.date ?? t,
					appVersion: o,
					results: a.results,
					...void 0 !== n ? { sourceContentHash: n } : {}
				};
				if (null === gt(a)) throw new Error(`Refused an algorithm run for ${String(a.algoKey ?? a.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
				return void 0 !== a.cubeConfig ? {
					...i,
					cubeConfig: a.cubeConfig
				} : {
					...i,
					algoKey: a.algoKey
				};
			});
			try {
				return await Me(l, r, s), !0;
			} catch {
				s?.throwIfAborted(), console.error("[local-processing] Algorithm history batch write failed; retrying records individually.");
			}
			let c = !1;
			for (const u of l) try {
				await dt(u, r, s);
			} catch {
				s?.throwIfAborted(), c = !0, console.error("[local-processing] An algorithm history write failed; latest scoring remains available.");
				try {
					await ao({
						op: "algorithm_run_put",
						fileId: e,
						payload: {
							kind: "history_write_failed",
							...gt(u),
							date: u.date,
							error: "history_write_failed"
						}
					}, r, s);
				} catch {}
			}
			return !c;
		}(t, c[0].day.date, n, f, e.db, e.signal) || (l.historyFailed = !0), s?.(u, d, 3), await K();
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
async function no(e, t = U(), n) {
	const a = t;
	try {
		const t = await e.identity(), s = await yt(e.fileId, a);
		await Li({
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
			profileProofStatus: (i = t.profileProofStatus, Ci(i, k, "profileProofStatus")),
			temporalBasis: Di(t.temporalBasis),
			calibration: e.calibration,
			diaryDisposition: s.length > 0 ? "present" : "absent",
			timestampGrid: e.timestampGrid ?? "epoch_5s_floor_seconds",
			dailyRows: e.rows,
			appVersion: jt(),
			startedAt: e.startedAt,
			finishedAt: e.finishedAt ?? (/* @__PURE__ */ new Date()).toISOString()
		}, a, n);
	} catch {
		n?.throwIfAborted(), console.error("[local-processing] Execution attestation write failed; day summaries remain stored.");
	}
	var i;
}
async function ao(e, t = U(), n) {
	const a = t, { appendWal: i, withWalTx: s } = await import("./wal-DJUQnA2u.js").then((e) => e.r);
	await s([], async () => {
		await i(e);
	}, a, n);
}
function io(e, t) {
	return Hn(void 0 === t ? void 0 : { recording: t }, e?.sensorLocation ?? C.sensor_location);
}
function so(e) {
	return function(e) {
		return ts.includes(e);
	}(e) ? e : 60;
}
function ro(e) {
	const t = nr(e?.lstmSelection);
	return {
		selection: t,
		descriptor: er(t.modelId),
		scoreOptions: {
			modelId: t.modelId,
			...null != t.threshold ? { threshold: t.threshold } : {}
		}
	};
}
function oo(e) {
	const t = ro(e);
	return { extras: {
		lstmFeatureContract: "spectral_30s_mean_centered_v3_probabilities",
		lstmModelId: t.descriptor.id,
		lstmModelVersion: t.descriptor.version,
		lstmThreshold: String(t.selection.threshold ?? t.descriptor.defaultThreshold),
		ggirCountScorerContract: "zcy_ws3_count_epoch_v4"
	} };
}
function lo(e, t) {
	return "number" == typeof e && "number" == typeof t && e !== t;
}
let co = 0;
const uo = /* @__PURE__ */ new Set();
function po(e, t, n) {
	if (n) {
		const e = $n(n);
		if (!at(e)) return we(e);
	}
	return t ?? H.SMART;
}
function fo(e, t) {
	e.invalidateQueries({ queryKey: t }).catch((e) => {
		Ft("warn", "Query invalidation failed", {
			...An(e),
			query_key: t.map(String).join(":")
		});
	});
}
const mo = {
	[O.RULE_1_INCLUDE_ACTIVITY]: "Included mid-sleep wake activity (continuous sleep follows)",
	[O.RULE_2_SMALL_PERIODS]: "Evaluated a small sleep period near onset",
	[O.RULE_3_EXTEND_BEFORE_DIARY]: "Extended onset backward through sleep preceding the diary marker",
	[O.RULE_4_NAP_VARIATION]: "Marked a long continuous block as a nap",
	[O.RULE_5_CHOI_SPIKE]: "Tolerated Choi-only nonwear (activity spike present in period)",
	[O.RULE_6_EQUIDISTANT]: "Chose between multiple candidate boundaries",
	[O.RULE_7_CROSS_DAY_NONWEAR]: "Applied cross-day diary nonwear pattern",
	[O.RULE_8_ONSET_BEFORE_INBED]: "Clamped onset to diary in-bed time (onset reported before in-bed)",
	[O.RULE_9_NAP_REGULARITY]: "Placed nap from this child's cross-day nap regularity (no diary nap logged)",
	[O.RULE_10_REGULARITY_OVERRIDE]: "Re-centered the sleep window on this child's cross-day sleep regularity",
	[O.RULE_11_RELIABILITY_FALLBACK]: "Diary unreliable for this night — anchored to accelerometry instead"
};
function ho(e) {
	const t = e.replace(/^rule_\d+_/, "").replace(/_/g, " ").trim();
	return 0 === t.length ? e : t.charAt(0).toUpperCase() + t.slice(1);
}
function go(e) {
	return Se(e, s);
}
async function yo(e, t, n) {
	const a = n ? await n.wearSiteHasptRouting(e, t ?? void 0) : await Be("wearSiteHasptRouting", `${e}:${t ?? ""}`, () => s().wearSiteHasptRouting(e, t ?? void 0));
	return {
		sensorLocation: a.sensorLocation,
		variant: a.variant,
		requiresLongitudinalAxis: a.requiresLongitudinalAxis,
		routedByWearSite: null == t
	};
}
var wo;
function _o(e, t, n) {
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
Object.fromEntries(Object.values(O).map((e) => [e, mo[e] ?? ho(e)]));
var vo = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, bo = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(wo = globalThis).__zod_globalConfig ?? (wo.__zod_globalConfig = {});
const So = globalThis.__zod_globalConfig;
function ko(e) {
	return e && Object.assign(So, e), So;
}
function Io(e) {
	const t = Object.values(e).filter((e) => "number" == typeof e);
	return Object.entries(e).filter(([e, n]) => -1 === t.indexOf(+e)).map(([e, t]) => t);
}
function Ao(e, t) {
	return "bigint" == typeof t ? t.toString() : t;
}
function xo(e) {
	return { get value() {
		{
			const t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function No(e) {
	return null == e;
}
function To(e) {
	const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
const Mo = Symbol("evaluating");
function Ro(e, t, n) {
	let a;
	Object.defineProperty(e, t, {
		get() {
			if (a !== Mo) return void 0 === a && (a = Mo, a = n()), a;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function zo(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function $o(...e) {
	const t = {};
	for (const n of e) {
		const e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Co(e) {
	return JSON.stringify(e);
}
const Do = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Eo(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
const Fo = xo(() => {
	if (So.jitless) return !1;
	if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return new Function(""), !0;
	} catch (e) {
		return !1;
	}
});
function Oo(e) {
	if (!1 === Eo(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	if ("function" != typeof t) return !0;
	const n = t.prototype;
	return !1 !== Eo(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function Po(e) {
	return Oo(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const jo = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
function Bo(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Go(e, t, n) {
	const a = new e._zod.constr(t ?? e._zod.def);
	return t && !n?.parent || (a._zod.parent = e), a;
}
function Lo(e) {
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
const Uo = {
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Ho(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!0 !== e.issues[n]?.continue) return !0;
	return !1;
}
function Zo(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!1 === e.issues[n]?.continue) return !0;
	return !1;
}
function qo(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function Vo(e) {
	return "string" == typeof e ? e : e?.message;
}
function Wo(e, t, n) {
	const a = e.message ? e.message : Vo(e.inst?._zod.def?.error?.(e)) ?? Vo(t?.error?.(e)) ?? Vo(n.customError?.(e)) ?? Vo(n.localeError?.(e)) ?? "Invalid input", { inst: i, continue: s, input: r, ...o } = e;
	return o.path ?? (o.path = []), o.message = a, t?.reportInput && (o.input = r), o;
}
function Jo(e) {
	return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function Ko(...e) {
	const [t, n, a] = e;
	return "string" == typeof t ? {
		message: t,
		code: "custom",
		input: n,
		inst: a
	} : { ...t };
}
const Yo = (e, t) => {
	e.name = "$ZodError", Object.defineProperty(e, "_zod", {
		value: e._zod,
		enumerable: !1
	}), Object.defineProperty(e, "issues", {
		value: t,
		enumerable: !1
	}), e.message = JSON.stringify(t, Ao, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, Xo = _o("$ZodError", Yo), Qo = _o("$ZodError", Yo, { Parent: Error }), el = (e) => (t, n, a, i) => {
	const s = a ? {
		...a,
		async: !1
	} : { async: !1 }, r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise) throw new vo();
	if (r.issues.length) {
		const t = new ((i?.Err) ?? e)(r.issues.map((e) => Wo(e, s, ko())));
		throw Do(t, i?.callee), t;
	}
	return r.value;
}, tl = (e) => async (t, n, a, i) => {
	const s = a ? {
		...a,
		async: !0
	} : { async: !0 };
	let r = t._zod.run({
		value: n,
		issues: []
	}, s);
	if (r instanceof Promise && (r = await r), r.issues.length) {
		const t = new ((i?.Err) ?? e)(r.issues.map((e) => Wo(e, s, ko())));
		throw Do(t, i?.callee), t;
	}
	return r.value;
}, nl = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		async: !1
	} : { async: !1 }, s = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (s instanceof Promise) throw new vo();
	return s.issues.length ? {
		success: !1,
		error: new (e ?? Xo)(s.issues.map((e) => Wo(e, i, ko())))
	} : {
		success: !0,
		data: s.value
	};
}, al = nl(Qo), il = (e) => async (t, n, a) => {
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
		error: new e(s.issues.map((e) => Wo(e, i, ko())))
	} : {
		success: !0,
		data: s.value
	};
}, sl = il(Qo), rl = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return el(e)(t, n, i);
}, ol = (e) => (t, n, a) => el(e)(t, n, a), ll = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return tl(e)(t, n, i);
}, cl = (e) => async (t, n, a) => tl(e)(t, n, a), ul = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return nl(e)(t, n, i);
}, dl = (e) => (t, n, a) => nl(e)(t, n, a), pl = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return il(e)(t, n, i);
}, fl = (e) => async (t, n, a) => il(e)(t, n, a), ml = /^[cC][0-9a-z]{6,}$/, hl = /^[0-9a-z]+$/, gl = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, yl = /^[0-9a-vA-V]{20}$/, wl = /^[A-Za-z0-9]{27}$/, _l = /^[a-zA-Z0-9_-]{21}$/, vl = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, bl = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Sl = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, kl = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Il = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Al = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, xl = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Nl = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Tl = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Ml = /^[A-Za-z0-9_-]*$/, Rl = /^https?$/, zl = /^\+[1-9]\d{6,14}$/, $l = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Cl = new RegExp(`^${$l}$`);
function Dl(e) {
	const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return "number" == typeof e.precision ? -1 === e.precision ? `${t}` : 0 === e.precision ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
const El = /^-?\d+$/, Fl = /^-?\d+(?:\.\d+)?$/, Ol = /^(?:true|false)$/i, Pl = /^[^A-Z]*$/, jl = /^[^a-z]*$/, Bl = _o("$ZodCheck", (e, t) => {
	var n;
	e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Gl = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, Ll = _o("$ZodCheckLessThan", (e, t) => {
	Bl.init(e, t);
	const n = Gl[typeof t.value];
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
}), Ul = _o("$ZodCheckGreaterThan", (e, t) => {
	Bl.init(e, t);
	const n = Gl[typeof t.value];
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
}), Hl = _o("$ZodCheckMultipleOf", (e, t) => {
	Bl.init(e, t), e._zod.onattach.push((e) => {
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
}), Zl = _o("$ZodCheckNumberFormat", (e, t) => {
	Bl.init(e, t), t.format = t.format || "float64";
	const n = t.format?.includes("int"), a = n ? "int" : "number", [i, s] = Uo[t.format];
	e._zod.onattach.push((e) => {
		const a = e._zod.bag;
		a.format = t.format, a.minimum = i, a.maximum = s, n && (a.pattern = El);
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
}), ql = _o("$ZodCheckMaxLength", (e, t) => {
	var n;
	Bl.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !No(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		const a = n.value;
		if (a.length <= t.maximum) return;
		const i = Jo(a);
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
}), Vl = _o("$ZodCheckMinLength", (e, t) => {
	var n;
	Bl.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !No(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		const a = n.value;
		if (a.length >= t.minimum) return;
		const i = Jo(a);
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
}), Wl = _o("$ZodCheckLengthEquals", (e, t) => {
	var n;
	Bl.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		const t = e.value;
		return !No(t) && void 0 !== t.length;
	}), e._zod.onattach.push((e) => {
		const n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		const a = n.value, i = a.length;
		if (i === t.length) return;
		const s = Jo(a), r = i > t.length;
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
}), Jl = _o("$ZodCheckStringFormat", (e, t) => {
	var n, a;
	Bl.init(e, t), e._zod.onattach.push((e) => {
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
}), Kl = _o("$ZodCheckRegex", (e, t) => {
	Jl.init(e, t), e._zod.check = (n) => {
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
}), Yl = _o("$ZodCheckLowerCase", (e, t) => {
	t.pattern ?? (t.pattern = Pl), Jl.init(e, t);
}), Xl = _o("$ZodCheckUpperCase", (e, t) => {
	t.pattern ?? (t.pattern = jl), Jl.init(e, t);
}), Ql = _o("$ZodCheckIncludes", (e, t) => {
	Bl.init(e, t);
	const n = Bo(t.includes), a = new RegExp("number" == typeof t.position ? `^.{${t.position}}${n}` : n);
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
}), ec = _o("$ZodCheckStartsWith", (e, t) => {
	Bl.init(e, t);
	const n = new RegExp(`^${Bo(t.prefix)}.*`);
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
}), tc = _o("$ZodCheckEndsWith", (e, t) => {
	Bl.init(e, t);
	const n = new RegExp(`.*${Bo(t.suffix)}$`);
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
}), nc = _o("$ZodCheckOverwrite", (e, t) => {
	Bl.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
});
var ac = class {
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
const ic = {
	major: 4,
	minor: 4,
	patch: 3
}, sc = _o("$ZodType", (e, t) => {
	var n;
	e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = ic;
	const a = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && a.unshift(e);
	for (const i of a) for (const t of i._zod.onattach) t(e);
	if (0 === a.length) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		const t = (e, t, n) => {
			let a, i = Ho(e);
			for (const s of t) {
				if (s._zod.def.when) {
					if (Zo(e)) continue;
					if (!s._zod.def.when(e)) continue;
				} else if (i) continue;
				const t = e.issues.length, r = s._zod.check(e);
				if (r instanceof Promise && !1 === n?.async) throw new vo();
				if (a || r instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
					await r, e.issues.length !== t && (i || (i = Ho(e, t)));
				});
				else {
					if (e.issues.length === t) continue;
					i || (i = Ho(e, t));
				}
			}
			return a ? a.then(() => e) : e;
		}, n = (n, i, s) => {
			if (Ho(n)) return n.aborted = !0, n;
			const r = t(i, a, s);
			if (r instanceof Promise) {
				if (!1 === s.async) throw new vo();
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
				if (!1 === s.async) throw new vo();
				return r.then((e) => t(e, a, s));
			}
			return t(r, a, s);
		};
	}
	Ro(e, "~standard", () => ({
		validate: (t) => {
			try {
				const n = al(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch (n) {
				return sl(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), rc = _o("$ZodString", (e, t) => {
	var n;
	sc.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? (n = e._zod.bag, new RegExp(`^${n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*"}$`)), e._zod.parse = (n, a) => {
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
}), oc = _o("$ZodStringFormat", (e, t) => {
	Jl.init(e, t), rc.init(e, t);
}), lc = _o("$ZodGUID", (e, t) => {
	t.pattern ?? (t.pattern = bl), oc.init(e, t);
}), cc = _o("$ZodUUID", (e, t) => {
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
		t.pattern ?? (t.pattern = Sl(e));
	} else t.pattern ?? (t.pattern = Sl());
	oc.init(e, t);
}), uc = _o("$ZodEmail", (e, t) => {
	t.pattern ?? (t.pattern = kl), oc.init(e, t);
}), dc = _o("$ZodURL", (e, t) => {
	oc.init(e, t), e._zod.check = (n) => {
		try {
			const a = n.value.trim();
			if (!t.normalize && t.protocol?.source === Rl.source && !/^https?:\/\//i.test(a)) return void n.issues.push({
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
}), pc = _o("$ZodEmoji", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), oc.init(e, t);
}), fc = _o("$ZodNanoID", (e, t) => {
	t.pattern ?? (t.pattern = _l), oc.init(e, t);
}), mc = _o("$ZodCUID", (e, t) => {
	t.pattern ?? (t.pattern = ml), oc.init(e, t);
}), hc = _o("$ZodCUID2", (e, t) => {
	t.pattern ?? (t.pattern = hl), oc.init(e, t);
}), gc = _o("$ZodULID", (e, t) => {
	t.pattern ?? (t.pattern = gl), oc.init(e, t);
}), yc = _o("$ZodXID", (e, t) => {
	t.pattern ?? (t.pattern = yl), oc.init(e, t);
}), wc = _o("$ZodKSUID", (e, t) => {
	t.pattern ?? (t.pattern = wl), oc.init(e, t);
}), _c = _o("$ZodISODateTime", (e, t) => {
	t.pattern ?? (t.pattern = function(e) {
		const t = Dl({ precision: e.precision }), n = ["Z"];
		e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const a = `${t}(?:${n.join("|")})`;
		return new RegExp(`^${$l}T(?:${a})$`);
	}(t)), oc.init(e, t);
}), vc = _o("$ZodISODate", (e, t) => {
	t.pattern ?? (t.pattern = Cl), oc.init(e, t);
}), bc = _o("$ZodISOTime", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp(`^${Dl(t)}$`)), oc.init(e, t);
}), Sc = _o("$ZodISODuration", (e, t) => {
	t.pattern ?? (t.pattern = vl), oc.init(e, t);
}), kc = _o("$ZodIPv4", (e, t) => {
	t.pattern ?? (t.pattern = Il), oc.init(e, t), e._zod.bag.format = "ipv4";
}), Ic = _o("$ZodIPv6", (e, t) => {
	t.pattern ?? (t.pattern = Al), oc.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
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
}), Ac = _o("$ZodCIDRv4", (e, t) => {
	t.pattern ?? (t.pattern = xl), oc.init(e, t);
}), xc = _o("$ZodCIDRv6", (e, t) => {
	t.pattern ?? (t.pattern = Nl), oc.init(e, t), e._zod.check = (n) => {
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
function Nc(e) {
	if ("" === e) return !0;
	if (/\s/.test(e)) return !1;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
const Tc = _o("$ZodBase64", (e, t) => {
	t.pattern ?? (t.pattern = Tl), oc.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		Nc(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Mc = _o("$ZodBase64URL", (e, t) => {
	t.pattern ?? (t.pattern = Ml), oc.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		(function(e) {
			if (!Ml.test(e)) return !1;
			const t = e.replace(/[-_]/g, (e) => "-" === e ? "+" : "/");
			return Nc(t.padEnd(4 * Math.ceil(t.length / 4), "="));
		})(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Rc = _o("$ZodE164", (e, t) => {
	t.pattern ?? (t.pattern = zl), oc.init(e, t);
}), zc = _o("$ZodJWT", (e, t) => {
	oc.init(e, t), e._zod.check = (n) => {
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
}), $c = _o("$ZodNumber", (e, t) => {
	sc.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Fl, e._zod.parse = (n, a) => {
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
}), Cc = _o("$ZodNumberFormat", (e, t) => {
	Zl.init(e, t), $c.init(e, t);
}), Dc = _o("$ZodBoolean", (e, t) => {
	sc.init(e, t), e._zod.pattern = Ol, e._zod.parse = (n, a) => {
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
}), Ec = _o("$ZodUnknown", (e, t) => {
	sc.init(e, t), e._zod.parse = (e) => e;
}), Fc = _o("$ZodNever", (e, t) => {
	sc.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function Oc(e, t, n) {
	e.issues.length && t.issues.push(...qo(n, e.issues)), t.value[n] = e.value;
}
const Pc = _o("$ZodArray", (e, t) => {
	sc.init(e, t), e._zod.parse = (n, a) => {
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
function jc(e, t, n, a, i, s) {
	const r = n in a;
	if (e.issues.length) {
		if (i && s && !r) return;
		t.issues.push(...qo(n, e.issues));
	}
	r || i ? void 0 === e.value ? r && (t.value[n] = void 0) : t.value[n] = e.value : e.issues.length || t.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: void 0,
		path: [n]
	});
}
function Bc(e) {
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
function Gc(e, t, n, a, i, s) {
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
		i instanceof Promise ? e.push(i.then((e) => jc(e, n, p, t, u, d))) : jc(i, n, p, t, u, d);
	}
	return r.length && n.issues.push({
		code: "unrecognized_keys",
		keys: r,
		input: t,
		inst: s
	}), e.length ? Promise.all(e).then(() => n) : n;
}
const Lc = _o("$ZodObject", (e, t) => {
	if (sc.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		const e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			const n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	const n = xo(() => Bc(t));
	Ro(e._zod, "propValues", () => {
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
	const a = Eo, i = t.catchall;
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
			s instanceof Promise ? l.push(s.then((n) => jc(n, t, e, o, a, i))) : jc(s, t, e, o, a, i);
		}
		return i ? Gc(l, o, t, r, n.value, e) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), Uc = _o("$ZodObjectJIT", (e, t) => {
	Lc.init(e, t);
	const n = e._zod.parse, a = xo(() => Bc(t));
	let i;
	const s = Eo, r = !So.jitless, o = r && Fo.value, l = t.catchall;
	let c;
	e._zod.parse = (u, d) => {
		c ?? (c = a.value);
		const p = u.value;
		return s(p) ? r && o && !1 === d?.async && !0 !== d.jitless ? (i || (i = ((e) => {
			const t = new ac([
				"shape",
				"payload",
				"ctx"
			]), n = a.value, i = (e) => {
				const t = Co(e);
				return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
			};
			t.write("const input = payload.value;");
			const s = Object.create(null);
			let r = 0;
			for (const a of n.keys) s[a] = "key_" + r++;
			t.write("const newResult = {};");
			for (const a of n.keys) {
				const n = s[a], r = Co(a), o = e[a], l = "optional" === o?._zod?.optin, c = "optional" === o?._zod?.optout;
				t.write(`const ${n} = ${i(a)};`), l && c ? t.write(`\n        if (${n}.issues.length) {\n          if (${r} in input) {\n            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [${r}, ...iss.path] : [${r}]\n            })));\n          }\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : l ? t.write(`\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        \n        if (${n}.value === undefined) {\n          if (${r} in input) {\n            newResult[${r}] = undefined;\n          }\n        } else {\n          newResult[${r}] = ${n}.value;\n        }\n        \n      `) : t.write(`\n        const ${n}_present = ${r} in input;\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${r}, ...iss.path] : [${r}]\n          })));\n        }\n        if (!${n}_present && !${n}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${r}]\n          });\n        }\n\n        if (${n}_present) {\n          if (${n}.value === undefined) {\n            newResult[${r}] = undefined;\n          } else {\n            newResult[${r}] = ${n}.value;\n          }\n        }\n\n      `);
			}
			t.write("payload.value = newResult;"), t.write("return payload;");
			const o = t.compile();
			return (t, n) => o(e, t, n);
		})(t.shape)), u = i(u, d), l ? Gc([], p, u, d, c, e) : u) : n(u, d) : (u.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), u);
	};
});
function Hc(e, t, n, a) {
	for (const s of e) if (0 === s.issues.length) return t.value = s.value, t;
	const i = e.filter((e) => !Ho(e));
	return 1 === i.length ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => Wo(e, a, ko())))
	}), t);
}
const Zc = _o("$ZodUnion", (e, t) => {
	sc.init(e, t), Ro(e._zod, "optin", () => t.options.some((e) => "optional" === e._zod.optin) ? "optional" : void 0), Ro(e._zod, "optout", () => t.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0), Ro(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), Ro(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			const e = t.options.map((e) => e._zod.pattern);
			return new RegExp(`^(${e.map((e) => To(e.source)).join("|")})$`);
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
		return s ? Promise.all(r).then((t) => Hc(t, a, e, i)) : Hc(r, a, e, i);
	};
}), qc = _o("$ZodIntersection", (e, t) => {
	sc.init(e, t), e._zod.parse = (e, n) => {
		const a = e.value, i = t.left._zod.run({
			value: a,
			issues: []
		}, n), s = t.right._zod.run({
			value: a,
			issues: []
		}, n);
		return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([t, n]) => Wc(e, t, n)) : Wc(e, i, s);
	};
});
function Vc(e, t) {
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
			const n = Vc(e[s], t[s]);
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
			const i = Vc(e[a], t[a]);
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
function Wc(e, t, n) {
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
	}), Ho(e)) return e;
	const r = Vc(t.value, n.value);
	if (!r.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
	return e.value = r.data, e;
}
const Jc = _o("$ZodRecord", (e, t) => {
	sc.init(e, t), e._zod.parse = (n, a) => {
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
						issues: r.issues.map((e) => Wo(e, a, ko())),
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
					e.issues.length && n.issues.push(...qo(c, e.issues)), n.value[l] = e.value;
				})) : (u.issues.length && n.issues.push(...qo(c, u.issues)), n.value[l] = u.value);
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
				if ("string" == typeof r && Fl.test(r) && o.issues.length) {
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
						issues: o.issues.map((e) => Wo(e, a, ko())),
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
					e.issues.length && n.issues.push(...qo(r, e.issues)), n.value[o.value] = e.value;
				})) : (l.issues.length && n.issues.push(...qo(r, l.issues)), n.value[o.value] = l.value);
			}
		}
		return s.length ? Promise.all(s).then(() => n) : n;
	};
}), Kc = _o("$ZodEnum", (e, t) => {
	sc.init(e, t);
	const n = Io(t.entries), a = new Set(n);
	e._zod.values = a, e._zod.pattern = new RegExp(`^(${n.filter((e) => jo.has(typeof e)).map((e) => "string" == typeof e ? Bo(e) : e.toString()).join("|")})$`), e._zod.parse = (t, i) => {
		const s = t.value;
		return a.has(s) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: s,
			inst: e
		}), t;
	};
}), Yc = _o("$ZodTransform", (e, t) => {
	sc.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, a) => {
		if ("backward" === a.direction) throw new bo(e.constructor.name);
		const i = t.transform(n.value, n);
		if (a.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n.fallback = !0, n));
		if (i instanceof Promise) throw new vo();
		return n.value = i, n.fallback = !0, n;
	};
});
function Xc(e, t) {
	return void 0 === t && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e;
}
const Qc = _o("$ZodOptional", (e, t) => {
	sc.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Ro(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), Ro(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${To(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if ("optional" === t.innerType._zod.optin) {
			const a = e.value, i = t.innerType._zod.run(e, n);
			return i instanceof Promise ? i.then((e) => Xc(e, a)) : Xc(i, a);
		}
		return void 0 === e.value ? e : t.innerType._zod.run(e, n);
	};
}), eu = _o("$ZodExactOptional", (e, t) => {
	Qc.init(e, t), Ro(e._zod, "values", () => t.innerType._zod.values), Ro(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), tu = _o("$ZodNullable", (e, t) => {
	sc.init(e, t), Ro(e._zod, "optin", () => t.innerType._zod.optin), Ro(e._zod, "optout", () => t.innerType._zod.optout), Ro(e._zod, "pattern", () => {
		const e = t.innerType._zod.pattern;
		return e ? new RegExp(`^(${To(e.source)}|null)$`) : void 0;
	}), Ro(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => null === e.value ? e : t.innerType._zod.run(e, n);
}), nu = _o("$ZodDefault", (e, t) => {
	sc.init(e, t), e._zod.optin = "optional", Ro(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		if (void 0 === e.value) return e.value = t.defaultValue, e;
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then((e) => au(e, t)) : au(a, t);
	};
});
function au(e, t) {
	return void 0 === e.value && (e.value = t.defaultValue), e;
}
const iu = _o("$ZodPrefault", (e, t) => {
	sc.init(e, t), e._zod.optin = "optional", Ro(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => ("backward" === n.direction || void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), su = _o("$ZodNonOptional", (e, t) => {
	sc.init(e, t), Ro(e._zod, "values", () => {
		const e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
	}), e._zod.parse = (n, a) => {
		const i = t.innerType._zod.run(n, a);
		return i instanceof Promise ? i.then((t) => ru(t, e)) : ru(i, e);
	};
});
function ru(e, t) {
	return e.issues.length || void 0 !== e.value || e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
const ou = _o("$ZodCatch", (e, t) => {
	sc.init(e, t), e._zod.optin = "optional", Ro(e._zod, "optout", () => t.innerType._zod.optout), Ro(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then((a) => (e.value = a.value, a.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: a.issues.map((e) => Wo(e, n, ko())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e)) : (e.value = a.value, a.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: a.issues.map((e) => Wo(e, n, ko())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e);
	};
}), lu = _o("$ZodPipe", (e, t) => {
	sc.init(e, t), Ro(e._zod, "values", () => t.in._zod.values), Ro(e._zod, "optin", () => t.in._zod.optin), Ro(e._zod, "optout", () => t.out._zod.optout), Ro(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) {
			const a = t.out._zod.run(e, n);
			return a instanceof Promise ? a.then((e) => cu(e, t.in, n)) : cu(a, t.in, n);
		}
		const a = t.in._zod.run(e, n);
		return a instanceof Promise ? a.then((e) => cu(e, t.out, n)) : cu(a, t.out, n);
	};
});
function cu(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues,
		fallback: e.fallback
	}, n);
}
const uu = _o("$ZodReadonly", (e, t) => {
	sc.init(e, t), Ro(e._zod, "propValues", () => t.innerType._zod.propValues), Ro(e._zod, "values", () => t.innerType._zod.values), Ro(e._zod, "optin", () => t.innerType?._zod?.optin), Ro(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then(du) : du(a);
	};
});
function du(e) {
	return e.value = Object.freeze(e.value), e;
}
const pu = _o("$ZodCustom", (e, t) => {
	Bl.init(e, t), sc.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		const a = n.value, i = t.fn(a);
		if (i instanceof Promise) return i.then((t) => fu(t, n, a, e));
		fu(i, n, a, e);
	};
});
function fu(e, t, n, a) {
	if (!e) {
		const e = {
			code: "custom",
			input: n,
			inst: a,
			path: [...a._zod.def.path ?? []],
			continue: !a._zod.def.abort
		};
		a._zod.def.params && (e.params = a._zod.def.params), t.issues.push(Ko(e));
	}
}
var mu;
(mu = globalThis).__zod_globalRegistry ?? (mu.__zod_globalRegistry = new class {
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
const hu = globalThis.__zod_globalRegistry;
function gu(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...Lo(t)
	});
}
function yu(e, t) {
	return new Ll({
		check: "less_than",
		...Lo(t),
		value: e,
		inclusive: !1
	});
}
function wu(e, t) {
	return new Ll({
		check: "less_than",
		...Lo(t),
		value: e,
		inclusive: !0
	});
}
function _u(e, t) {
	return new Ul({
		check: "greater_than",
		...Lo(t),
		value: e,
		inclusive: !1
	});
}
function vu(e, t) {
	return new Ul({
		check: "greater_than",
		...Lo(t),
		value: e,
		inclusive: !0
	});
}
function bu(e, t) {
	return new Hl({
		check: "multiple_of",
		...Lo(t),
		value: e
	});
}
function Su(e, t) {
	return new ql({
		check: "max_length",
		...Lo(t),
		maximum: e
	});
}
function ku(e, t) {
	return new Vl({
		check: "min_length",
		...Lo(t),
		minimum: e
	});
}
function Iu(e, t) {
	return new Wl({
		check: "length_equals",
		...Lo(t),
		length: e
	});
}
function Au(e) {
	return new nc({
		check: "overwrite",
		tx: e
	});
}
function xu(e, t) {
	const n = new Bl({
		check: "custom",
		...Lo(t)
	});
	return n._zod.check = e, n;
}
function Nu(e) {
	let t = e?.target ?? "draft-2020-12";
	return "draft-4" === t && (t = "draft-04"), "draft-7" === t && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? hu,
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
function Tu(e, t, n = {
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
		s && (r.ref || (r.ref = s), Tu(s, t, a), t.seen.get(s).isParent = !0);
	}
	const l = t.metadataRegistry.get(e);
	return l && Object.assign(r.schema, l), "input" === t.io && zu(e) && (delete r.schema.examples, delete r.schema.default), "input" === t.io && "_prefault" in r.schema && ((a = r.schema).default ?? (a.default = r.schema._prefault)), delete r.schema._prefault, t.seen.get(e).schema;
}
function Mu(e, t) {
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
function Ru(e, t) {
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
					input: $u(t, "input", e.processors),
					output: $u(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch (o) {
		throw new Error("Error converting schema to JSON.");
	}
}
function zu(e, t) {
	const n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	const a = e._zod.def;
	if ("transform" === a.type) return !0;
	if ("array" === a.type) return zu(a.element, n);
	if ("set" === a.type) return zu(a.valueType, n);
	if ("lazy" === a.type) return zu(a.getter(), n);
	if ("promise" === a.type || "optional" === a.type || "nonoptional" === a.type || "nullable" === a.type || "readonly" === a.type || "default" === a.type || "prefault" === a.type) return zu(a.innerType, n);
	if ("intersection" === a.type) return zu(a.left, n) || zu(a.right, n);
	if ("record" === a.type || "map" === a.type) return zu(a.keyType, n) || zu(a.valueType, n);
	if ("pipe" === a.type) return !!e._zod.traits.has("$ZodCodec") || zu(a.in, n) || zu(a.out, n);
	if ("object" === a.type) {
		for (const e in a.shape) if (zu(a.shape[e], n)) return !0;
		return !1;
	}
	if ("union" === a.type) {
		for (const e of a.options) if (zu(e, n)) return !0;
		return !1;
	}
	if ("tuple" === a.type) {
		for (const e of a.items) if (zu(e, n)) return !0;
		return !(!a.rest || !zu(a.rest, n));
	}
	return !1;
}
const $u = (e, t, n = {}) => (a) => {
	const { libraryOptions: i, target: s } = a ?? {}, r = Nu({
		...i ?? {},
		target: s,
		io: t,
		processors: n
	});
	return Tu(e, r), Mu(r, e), Ru(r, e);
}, Cu = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, Du = (e, t, n, a) => {
	const i = e._zod.def;
	Tu(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
}, Eu = _o("ZodISODateTime", (e, t) => {
	_c.init(e, t), sd.init(e, t);
});
const Fu = _o("ZodISODate", (e, t) => {
	vc.init(e, t), sd.init(e, t);
});
const Ou = _o("ZodISOTime", (e, t) => {
	bc.init(e, t), sd.init(e, t);
});
const Pu = _o("ZodISODuration", (e, t) => {
	Sc.init(e, t), sd.init(e, t);
});
const ju = (e, t) => {
	Xo.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
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
			e.issues.push(t), e.message = JSON.stringify(e.issues, Ao, 2);
		} },
		addIssues: { value: (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, Ao, 2);
		} },
		isEmpty: { get: () => 0 === e.issues.length }
	});
}, Bu = _o("ZodError", ju, { Parent: Error }), Gu = el(Bu), Lu = tl(Bu), Uu = nl(Bu), Hu = il(Bu), Zu = rl(Bu), qu = ol(Bu), Vu = ll(Bu), Wu = cl(Bu), Ju = ul(Bu), Ku = dl(Bu), Yu = pl(Bu), Xu = fl(Bu), Qu = /* @__PURE__ */ new WeakMap();
function ed(e, t, n) {
	const a = Object.getPrototypeOf(e);
	let i = Qu.get(a);
	if (i || (i = /* @__PURE__ */ new Set(), Qu.set(a, i)), !i.has(t)) {
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
const td = _o("ZodType", (e, t) => (sc.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: $u(e, "input"),
	output: $u(e, "output")
} }), e.toJSONSchema = ((e, t = {}) => (n) => {
	const a = Nu({
		...n,
		processors: t
	});
	return Tu(e, a), Mu(a, e), Ru(a, e);
})(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (t, n) => Gu(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => Uu(e, t, n), e.parseAsync = async (t, n) => Lu(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => Hu(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => Zu(e, t, n), e.decode = (t, n) => qu(e, t, n), e.encodeAsync = async (t, n) => Vu(e, t, n), e.decodeAsync = async (t, n) => Wu(e, t, n), e.safeEncode = (t, n) => Ju(e, t, n), e.safeDecode = (t, n) => Ku(e, t, n), e.safeEncodeAsync = async (t, n) => Yu(e, t, n), e.safeDecodeAsync = async (t, n) => Xu(e, t, n), ed(e, "ZodType", {
	check(...e) {
		const t = this.def;
		return this.clone($o(t, { checks: [...t.checks ?? [], ...e.map((e) => "function" == typeof e ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return Go(this, e, t);
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
				return new ip({
					type: "custom",
					check: "custom",
					fn: t,
					...Lo(n)
				});
			}(0, e, t);
		}(e, t));
	},
	superRefine(e, t) {
		return this.check(function(e, t) {
			return function(e, t) {
				const n = xu((t) => (t.addIssue = (e) => {
					if ("string" == typeof e) t.issues.push(Ko(e, t.value, n._zod.def));
					else {
						const a = e;
						a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = t.value), a.inst ?? (a.inst = n), a.continue ?? (a.continue = !n._zod.def.abort), t.issues.push(Ko(a));
					}
				}, e(t.value, t)), t);
				return n;
			}(e, t);
		}(e, t));
	},
	overwrite(e) {
		return this.check(Au(e));
	},
	optional() {
		return Vd(this);
	},
	exactOptional() {
		return new Wd({
			type: "optional",
			innerType: this
		});
	},
	nullable() {
		return Kd(this);
	},
	nullish() {
		return Vd(Kd(this));
	},
	nonoptional(e) {
		return function(e, t) {
			return new Qd({
				type: "nonoptional",
				innerType: e,
				...Lo(t)
			});
		}(this, e);
	},
	array() {
		return Ed(this);
	},
	or(e) {
		return jd([this, e]);
	},
	and(e) {
		return new Bd({
			type: "intersection",
			left: this,
			right: e
		});
	},
	transform(e) {
		return np(this, new Zd({
			type: "transform",
			transform: e
		}));
	},
	default(e) {
		return t = e, new Yd({
			type: "default",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Po(t);
			}
		});
		var t;
	},
	prefault(e) {
		return t = e, new Xd({
			type: "prefault",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Po(t);
			}
		});
		var t;
	},
	catch(e) {
		return new ep({
			type: "catch",
			innerType: this,
			catchValue: "function" == typeof (t = e) ? t : () => t
		});
		var t;
	},
	pipe(e) {
		return np(this, e);
	},
	readonly() {
		return new ap({
			type: "readonly",
			innerType: this
		});
	},
	describe(e) {
		const t = this.clone();
		return hu.add(t, { description: e }), t;
	},
	meta(...e) {
		if (0 === e.length) return hu.get(this);
		const t = this.clone();
		return hu.add(t, e[0]), t;
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
	get: () => hu.get(e)?.description,
	configurable: !0
}), e)), nd = _o("_ZodString", (e, t) => {
	rc.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = n;
		a.type = "string";
		const { minimum: i, maximum: s, format: r, patterns: o, contentEncoding: l } = e._zod.bag;
		if ("number" == typeof i && (a.minLength = i), "number" == typeof s && (a.maxLength = s), r && (a.format = Cu[r] ?? r, "" === a.format && delete a.format, "time" === r && delete a.format), l && (a.contentEncoding = l), o && o.size > 0) {
			const e = [...o];
			1 === e.length ? a.pattern = e[0].source : e.length > 1 && (a.allOf = [...e.map((e) => ({
				..."draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	})(e, t, n);
	const n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, ed(e, "_ZodString", {
		regex(...e) {
			return this.check(function(e, t) {
				return new Kl({
					check: "string_format",
					format: "regex",
					...Lo(t),
					pattern: e
				});
			}(...e));
		},
		includes(...e) {
			return this.check(function(e, t) {
				return new Ql({
					check: "string_format",
					format: "includes",
					...Lo(t),
					includes: e
				});
			}(...e));
		},
		startsWith(...e) {
			return this.check(function(e, t) {
				return new ec({
					check: "string_format",
					format: "starts_with",
					...Lo(t),
					prefix: e
				});
			}(...e));
		},
		endsWith(...e) {
			return this.check(function(e, t) {
				return new tc({
					check: "string_format",
					format: "ends_with",
					...Lo(t),
					suffix: e
				});
			}(...e));
		},
		min(...e) {
			return this.check(ku(...e));
		},
		max(...e) {
			return this.check(Su(...e));
		},
		length(...e) {
			return this.check(Iu(...e));
		},
		nonempty(...e) {
			return this.check(ku(1, ...e));
		},
		lowercase(e) {
			return this.check(function(e) {
				return new Yl({
					check: "string_format",
					format: "lowercase",
					...Lo(e)
				});
			}(e));
		},
		uppercase(e) {
			return this.check(function(e) {
				return new Xl({
					check: "string_format",
					format: "uppercase",
					...Lo(e)
				});
			}(e));
		},
		trim() {
			return this.check(Au((e) => e.trim()));
		},
		normalize(...e) {
			return this.check(function(e) {
				return Au((t) => t.normalize(e));
			}(...e));
		},
		toLowerCase() {
			return this.check(Au((e) => e.toLowerCase()));
		},
		toUpperCase() {
			return this.check(Au((e) => e.toUpperCase()));
		},
		slugify() {
			return this.check(Au((e) => function(e) {
				return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
			}(e)));
		}
	});
}), ad = _o("ZodString", (e, t) => {
	rc.init(e, t), nd.init(e, t), e.email = (t) => e.check(function(e, t) {
		return new rd({
			type: "string",
			format: "email",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.url = (t) => e.check(function(e, t) {
		return new cd({
			type: "string",
			format: "url",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.jwt = (t) => e.check(function(e, t) {
		return new Id({
			type: "string",
			format: "jwt",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.emoji = (t) => e.check(function(e, t) {
		return new ud({
			type: "string",
			format: "emoji",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.guid = (t) => e.check(gu(od, t)), e.uuid = (t) => e.check(function(e, t) {
		return new ld({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.uuidv4 = (t) => e.check(function(e, t) {
		return new ld({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v4",
			...Lo(t)
		});
	}(0, t)), e.uuidv6 = (t) => e.check(function(e, t) {
		return new ld({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v6",
			...Lo(t)
		});
	}(0, t)), e.uuidv7 = (t) => e.check(function(e, t) {
		return new ld({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v7",
			...Lo(t)
		});
	}(0, t)), e.nanoid = (t) => e.check(function(e, t) {
		return new dd({
			type: "string",
			format: "nanoid",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.guid = (t) => e.check(gu(od, t)), e.cuid = (t) => e.check(function(e, t) {
		return new pd({
			type: "string",
			format: "cuid",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.cuid2 = (t) => e.check(function(e, t) {
		return new fd({
			type: "string",
			format: "cuid2",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.ulid = (t) => e.check(function(e, t) {
		return new md({
			type: "string",
			format: "ulid",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.base64 = (t) => e.check(function(e, t) {
		return new bd({
			type: "string",
			format: "base64",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.base64url = (t) => e.check(function(e, t) {
		return new Sd({
			type: "string",
			format: "base64url",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.xid = (t) => e.check(function(e, t) {
		return new hd({
			type: "string",
			format: "xid",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.ksuid = (t) => e.check(function(e, t) {
		return new gd({
			type: "string",
			format: "ksuid",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.ipv4 = (t) => e.check(function(e, t) {
		return new yd({
			type: "string",
			format: "ipv4",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.ipv6 = (t) => e.check(function(e, t) {
		return new wd({
			type: "string",
			format: "ipv6",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.cidrv4 = (t) => e.check(function(e, t) {
		return new _d({
			type: "string",
			format: "cidrv4",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.cidrv6 = (t) => e.check(function(e, t) {
		return new vd({
			type: "string",
			format: "cidrv6",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.e164 = (t) => e.check(function(e, t) {
		return new kd({
			type: "string",
			format: "e164",
			check: "string_format",
			abort: !1,
			...Lo(t)
		});
	}(0, t)), e.datetime = (t) => e.check(function(e) {
		return function(e, t) {
			return new Eu({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: !1,
				local: !1,
				precision: null,
				...Lo(t)
			});
		}(0, e);
	}(t)), e.date = (t) => e.check(function(e) {
		return function(e, t) {
			return new Fu({
				type: "string",
				format: "date",
				check: "string_format",
				...Lo(t)
			});
		}(0, e);
	}(t)), e.time = (t) => e.check(function(e) {
		return function(e, t) {
			return new Ou({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...Lo(t)
			});
		}(0, e);
	}(t)), e.duration = (t) => e.check(function(e) {
		return function(e, t) {
			return new Pu({
				type: "string",
				format: "duration",
				check: "string_format",
				...Lo(t)
			});
		}(0, e);
	}(t));
});
function id(e) {
	return function(e, t) {
		return new ad({
			type: "string",
			...Lo(t)
		});
	}(0, e);
}
const sd = _o("ZodStringFormat", (e, t) => {
	oc.init(e, t), nd.init(e, t);
}), rd = _o("ZodEmail", (e, t) => {
	uc.init(e, t), sd.init(e, t);
}), od = _o("ZodGUID", (e, t) => {
	lc.init(e, t), sd.init(e, t);
}), ld = _o("ZodUUID", (e, t) => {
	cc.init(e, t), sd.init(e, t);
}), cd = _o("ZodURL", (e, t) => {
	dc.init(e, t), sd.init(e, t);
}), ud = _o("ZodEmoji", (e, t) => {
	pc.init(e, t), sd.init(e, t);
}), dd = _o("ZodNanoID", (e, t) => {
	fc.init(e, t), sd.init(e, t);
}), pd = _o("ZodCUID", (e, t) => {
	mc.init(e, t), sd.init(e, t);
}), fd = _o("ZodCUID2", (e, t) => {
	hc.init(e, t), sd.init(e, t);
}), md = _o("ZodULID", (e, t) => {
	gc.init(e, t), sd.init(e, t);
}), hd = _o("ZodXID", (e, t) => {
	yc.init(e, t), sd.init(e, t);
}), gd = _o("ZodKSUID", (e, t) => {
	wc.init(e, t), sd.init(e, t);
}), yd = _o("ZodIPv4", (e, t) => {
	kc.init(e, t), sd.init(e, t);
}), wd = _o("ZodIPv6", (e, t) => {
	Ic.init(e, t), sd.init(e, t);
}), _d = _o("ZodCIDRv4", (e, t) => {
	Ac.init(e, t), sd.init(e, t);
}), vd = _o("ZodCIDRv6", (e, t) => {
	xc.init(e, t), sd.init(e, t);
}), bd = _o("ZodBase64", (e, t) => {
	Tc.init(e, t), sd.init(e, t);
}), Sd = _o("ZodBase64URL", (e, t) => {
	Mc.init(e, t), sd.init(e, t);
}), kd = _o("ZodE164", (e, t) => {
	Rc.init(e, t), sd.init(e, t);
}), Id = _o("ZodJWT", (e, t) => {
	zc.init(e, t), sd.init(e, t);
}), Ad = _o("ZodNumber", (e, t) => {
	$c.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = n, { minimum: i, maximum: s, format: r, multipleOf: o, exclusiveMaximum: l, exclusiveMinimum: c } = e._zod.bag;
		"string" == typeof r && r.includes("int") ? a.type = "integer" : a.type = "number";
		const u = "number" == typeof c && c >= (i ?? Number.NEGATIVE_INFINITY), d = "number" == typeof l && l <= (s ?? Number.POSITIVE_INFINITY), p = "draft-04" === t.target || "openapi-3.0" === t.target;
		u ? p ? (a.minimum = c, a.exclusiveMinimum = !0) : a.exclusiveMinimum = c : "number" == typeof i && (a.minimum = i), d ? p ? (a.maximum = l, a.exclusiveMaximum = !0) : a.exclusiveMaximum = l : "number" == typeof s && (a.maximum = s), "number" == typeof o && (a.multipleOf = o);
	})(e, t, n), ed(e, "ZodNumber", {
		gt(e, t) {
			return this.check(_u(e, t));
		},
		gte(e, t) {
			return this.check(vu(e, t));
		},
		min(e, t) {
			return this.check(vu(e, t));
		},
		lt(e, t) {
			return this.check(yu(e, t));
		},
		lte(e, t) {
			return this.check(wu(e, t));
		},
		max(e, t) {
			return this.check(wu(e, t));
		},
		int(e) {
			return this.check(Td(e));
		},
		safe(e) {
			return this.check(Td(e));
		},
		positive(e) {
			return this.check(_u(0, e));
		},
		nonnegative(e) {
			return this.check(vu(0, e));
		},
		negative(e) {
			return this.check(yu(0, e));
		},
		nonpositive(e) {
			return this.check(wu(0, e));
		},
		multipleOf(e, t) {
			return this.check(bu(e, t));
		},
		step(e, t) {
			return this.check(bu(e, t));
		},
		finite() {
			return this;
		}
	});
	const n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function xd(e) {
	return function(e, t) {
		return new Ad({
			type: "number",
			checks: [],
			...Lo(t)
		});
	}(0, e);
}
const Nd = _o("ZodNumberFormat", (e, t) => {
	Cc.init(e, t), Ad.init(e, t);
});
function Td(e) {
	return function(e, t) {
		return new Nd({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...Lo(t)
		});
	}(0, e);
}
const Md = _o("ZodBoolean", (e, t) => {
	Dc.init(e, t), td.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.type = "boolean";
	})(0, 0, t);
});
function Rd(e) {
	return function(e, t) {
		return new Md({
			type: "boolean",
			...Lo(t)
		});
	}(0, e);
}
const zd = _o("ZodUnknown", (e, t) => {
	Ec.init(e, t), td.init(e, t), e._zod.processJSONSchema = (e, t, n) => {};
});
function $d() {
	return new zd({ type: "unknown" });
}
const Cd = _o("ZodNever", (e, t) => {
	Fc.init(e, t), td.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.not = {};
	})(0, 0, t);
});
const Dd = _o("ZodArray", (e, t) => {
	Pc.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, s = e._zod.def, { minimum: r, maximum: o } = e._zod.bag;
		"number" == typeof r && (i.minItems = r), "number" == typeof o && (i.maxItems = o), i.type = "array", i.items = Tu(s.element, t, {
			...a,
			path: [...a.path, "items"]
		});
	})(e, t, n, a), e.element = t.element, ed(e, "ZodArray", {
		min(e, t) {
			return this.check(ku(e, t));
		},
		nonempty(e) {
			return this.check(ku(1, e));
		},
		max(e, t) {
			return this.check(Su(e, t));
		},
		length(e, t) {
			return this.check(Iu(e, t));
		},
		unwrap() {
			return this.element;
		}
	});
});
function Ed(e, t) {
	return function(e, t, n) {
		return new Dd({
			type: "array",
			element: t,
			...Lo(n)
		});
	}(0, e, t);
}
const Fd = _o("ZodObject", (e, t) => {
	Uc.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, s = e._zod.def;
		i.type = "object", i.properties = {};
		const r = s.shape;
		for (const c in r) i.properties[c] = Tu(r[c], t, {
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
		l.size > 0 && (i.required = Array.from(l)), "never" === s.catchall?._zod.def.type ? i.additionalProperties = !1 : s.catchall ? s.catchall && (i.additionalProperties = Tu(s.catchall, t, {
			...a,
			path: [...a.path, "additionalProperties"]
		})) : "output" === t.io && (i.additionalProperties = !1);
	})(e, t, n, a), Ro(e, "shape", () => t.shape), ed(e, "ZodObject", {
		keyof() {
			return Hd(Object.keys(this._zod.def.shape));
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
				catchall: $d()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: $d()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: function(e, t) {
					return new Cd({
						type: "never",
						...Lo(t)
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
				return Go(e, $o(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return zo(this, "shape", n), n;
				} }));
			}(this, e);
		},
		safeExtend(e) {
			return function(e, t) {
				if (!Oo(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
				return Go(e, $o(e._zod.def, { get shape() {
					const n = {
						...e._zod.def.shape,
						...t
					};
					return zo(this, "shape", n), n;
				} }));
			}(this, e);
		},
		merge(e) {
			return function(e, t) {
				if (e._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
				return Go(e, $o(e._zod.def, {
					get shape() {
						const n = {
							...e._zod.def.shape,
							...t._zod.def.shape
						};
						return zo(this, "shape", n), n;
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
				return Go(e, $o(e._zod.def, {
					get shape() {
						const e = {};
						for (const a in t) {
							if (!(a in n.shape)) throw new Error(`Unrecognized key: "${a}"`);
							t[a] && (e[a] = n.shape[a]);
						}
						return zo(this, "shape", e), e;
					},
					checks: []
				}));
			}(this, e);
		},
		omit(e) {
			return function(e, t) {
				const n = e._zod.def, a = n.checks;
				if (a && a.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
				return Go(e, $o(e._zod.def, {
					get shape() {
						const a = { ...e._zod.def.shape };
						for (const e in t) {
							if (!(e in n.shape)) throw new Error(`Unrecognized key: "${e}"`);
							t[e] && delete a[e];
						}
						return zo(this, "shape", a), a;
					},
					checks: []
				}));
			}(this, e);
		},
		partial(...e) {
			return function(e, t, n) {
				const a = t._zod.def.checks;
				if (a && a.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
				return Go(t, $o(t._zod.def, {
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
						return zo(this, "shape", i), i;
					},
					checks: []
				}));
			}(qd, this, e[0]);
		},
		required(...e) {
			return t = Qd, n = this, a = e[0], Go(n, $o(n._zod.def, { get shape() {
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
				return zo(this, "shape", i), i;
			} }));
			var t, n, a;
		}
	});
});
function Od(e, t) {
	const n = {
		type: "object",
		shape: e ?? {},
		...Lo(t)
	};
	return new Fd(n);
}
const Pd = _o("ZodUnion", (e, t) => {
	Zc.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = !1 === i.inclusive, r = i.options.map((e, n) => Tu(e, t, {
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
function jd(e, t) {
	return new Pd({
		type: "union",
		options: e,
		...Lo(t)
	});
}
const Bd = _o("ZodIntersection", (e, t) => {
	qc.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = Tu(i.left, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				0
			]
		}), r = Tu(i.right, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				1
			]
		}), o = (e) => "allOf" in e && 1 === Object.keys(e).length;
		n.allOf = [...o(s) ? s.allOf : [s], ...o(r) ? r.allOf : [r]];
	})(e, t, n, a);
}), Gd = _o("ZodRecord", (e, t) => {
	Jc.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, s = e._zod.def;
		i.type = "object";
		const r = s.keyType, o = r._zod.bag?.patterns;
		if ("loose" === s.mode && o && o.size > 0) {
			const e = Tu(s.valueType, t, {
				...a,
				path: [
					...a.path,
					"patternProperties",
					"*"
				]
			});
			i.patternProperties = {};
			for (const t of o) i.patternProperties[t.source] = e;
		} else "draft-07" !== t.target && "draft-2020-12" !== t.target || (i.propertyNames = Tu(s.keyType, t, {
			...a,
			path: [...a.path, "propertyNames"]
		})), i.additionalProperties = Tu(s.valueType, t, {
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
function Ld(e, t, n) {
	return t && t._zod ? new Gd({
		type: "record",
		keyType: e,
		valueType: t,
		...Lo(n)
	}) : new Gd({
		type: "record",
		keyType: id(),
		valueType: e,
		...Lo(t)
	});
}
const Ud = _o("ZodEnum", (e, t) => {
	Kc.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = Io(e._zod.def.entries);
		a.every((e) => "number" == typeof e) && (n.type = "number"), a.every((e) => "string" == typeof e) && (n.type = "string"), n.enum = a;
	})(e, 0, n), e.enum = t.entries, e.options = Object.values(t.entries);
	const n = new Set(Object.keys(t.entries));
	e.extract = (e, a) => {
		const i = {};
		for (const s of e) {
			if (!n.has(s)) throw new Error(`Key ${s} not found in enum`);
			i[s] = t.entries[s];
		}
		return new Ud({
			...t,
			checks: [],
			...Lo(a),
			entries: i
		});
	}, e.exclude = (e, a) => {
		const i = { ...t.entries };
		for (const t of e) {
			if (!n.has(t)) throw new Error(`Key ${t} not found in enum`);
			delete i[t];
		}
		return new Ud({
			...t,
			checks: [],
			...Lo(a),
			entries: i
		});
	};
});
function Hd(e, t) {
	const n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new Ud({
		type: "enum",
		entries: n,
		...Lo(t)
	});
}
const Zd = _o("ZodTransform", (e, t) => {
	Yc.init(e, t), td.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
	})(0, e), e._zod.parse = (n, a) => {
		if ("backward" === a.direction) throw new bo(e.constructor.name);
		n.addIssue = (a) => {
			if ("string" == typeof a) n.issues.push(Ko(a, n.value, t));
			else {
				const t = a;
				t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), t.input ?? (t.input = n.value), t.inst ?? (t.inst = e), n.issues.push(Ko(t));
			}
		};
		const i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n.fallback = !0, n)) : (n.value = i, n.fallback = !0, n);
	};
}), qd = _o("ZodOptional", (e, t) => {
	Qc.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => Du(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
});
function Vd(e) {
	return new qd({
		type: "optional",
		innerType: e
	});
}
const Wd = _o("ZodExactOptional", (e, t) => {
	eu.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => Du(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), Jd = _o("ZodNullable", (e, t) => {
	tu.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = Tu(i.innerType, t, a), r = t.seen.get(e);
		"openapi-3.0" === t.target ? (r.ref = i.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
});
function Kd(e) {
	return new Jd({
		type: "nullable",
		innerType: e
	});
}
const Yd = _o("ZodDefault", (e, t) => {
	nu.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Tu(i.innerType, t, a), t.seen.get(e).ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
}), Xd = _o("ZodPrefault", (e, t) => {
	iu.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Tu(i.innerType, t, a), t.seen.get(e).ref = i.innerType, "input" === t.io && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
}), Qd = _o("ZodNonOptional", (e, t) => {
	su.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Tu(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
	})(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), ep = _o("ZodCatch", (e, t) => {
	ou.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		let s;
		Tu(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
		try {
			s = i.catchValue(void 0);
		} catch {
			throw new Error("Dynamic catch values are not supported in JSON Schema");
		}
		n.default = s;
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
}), tp = _o("ZodPipe", (e, t) => {
	lu.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = i.in._zod.traits.has("$ZodTransform"), r = "input" === t.io ? s ? i.out : i.in : i.out;
		Tu(r, t, a), t.seen.get(e).ref = r;
	})(e, t, 0, a), e.in = t.in, e.out = t.out;
});
function np(e, t) {
	return new tp({
		type: "pipe",
		in: e,
		out: t
	});
}
const ap = _o("ZodReadonly", (e, t) => {
	uu.init(e, t), td.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Tu(i.innerType, t, a), t.seen.get(e).ref = i.innerType, n.readOnly = !0;
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
}), ip = _o("ZodCustom", (e, t) => {
	pu.init(e, t), td.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t) => {
		if ("throw" === t.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
	})(0, e);
}), sp = Hd((rp = A, Object.values(rp)));
var rp;
Od({
	password: id(),
	username: id().max(100, "Username must be 100 characters or fewer")
});
const op = Od({
	onset_timestamp: xd().nullable().optional(),
	offset_timestamp: xd().nullable().optional(),
	marker_index: xd().int().default(1),
	marker_type: sp.default(A.MAIN_SLEEP)
}), lp = Od({
	start_timestamp: xd().nullable().optional(),
	end_timestamp: xd().nullable().optional(),
	marker_index: xd().int().default(1)
}), cp = (Od({
	sleep_markers: Ed(op).optional().default([]),
	nonwear_markers: Ed(lp).optional().default([]),
	explicit_no_nonwear: Rd().optional().default(!1),
	is_invalid_night: Rd().optional().default(!1),
	needs_consensus: Rd().optional().default(!1),
	notes: id().nullable().optional(),
	sleep_period_detection_config: Ld(id(), $d()).nullable().optional()
}), Od({
	timestamps: Ed(xd()).optional().default([]),
	axis_x: Ed(xd()).optional().default([]),
	axis_y: Ed(xd()).optional().default([]),
	axis_z: Ed(xd()).optional().default([]),
	vector_magnitude: Ed(xd()).optional().default([]),
	temperature: Ed(xd()).optional().default([]),
	lux: Ed(xd()).optional().default([]),
	melanopic_lux: Ed(xd()).optional().default([]),
	ggir_timestamps: Ed(xd()).optional().default([]),
	ggir_enmo: Ed(xd()).optional().default([]),
	ggir_anglez: Ed(xd()).optional().default([]),
	ggir_sib: Ed(xd()).optional().default([]),
	timestamps_30s: Ed(xd()).optional().default([]),
	axis_x_30s: Ed(xd()).optional().default([]),
	axis_y_30s: Ed(xd()).optional().default([]),
	axis_z_30s: Ed(xd()).optional().default([]),
	vector_magnitude_30s: Ed(xd()).optional().default([])
})), up = Od({
	resolution_id: id(),
	epoch_length_seconds: xd().int().positive(),
	category: id(),
	source_type: id().nullable().optional(),
	derived_from_resolution_id: id().nullable().optional(),
	aggregation_method: id().nullable().optional(),
	data: cp,
	algorithm_results: Ed(xd()).nullable().optional(),
	nonwear_results: Ed(xd()).nullable().optional()
}), dp = (Od({
	data: cp.optional(),
	epoch_resolutions: Ed(up).optional().default([]),
	timestamps: Ed(xd()).optional(),
	axis_x: Ed(xd()).optional(),
	axis_y: Ed(xd()).optional(),
	axis_z: Ed(xd()).optional(),
	vector_magnitude: Ed(xd()).optional(),
	temperature: Ed(xd()).optional(),
	algorithm_results: Ed(xd()).nullable().optional(),
	nonwear_results: Ed(xd()).nullable().optional(),
	nonwear_results_choi_2011: Ed(xd()).nullable().optional(),
	event_markers: Ed(jd([xd(), Rd()])).optional().default([]),
	event_marker_timestamps: Ed(xd()).optional().default([]),
	view_start: xd().nullable().optional(),
	view_end: xd().nullable().optional(),
	sensor_nonwear_periods: Ed(Od({
		start_timestamp: xd(),
		end_timestamp: xd()
	})).optional().default([]),
	device_nonwear_source: Hd(b).nullable().optional(),
	algorithmic_nonwear_masks: Ld(id(), Ed(xd())).optional()
}), ie.diary_tolerance_minutes, ie.nap_min_consecutive_epochs, ie.epoch_length_seconds, () => o.waitFor(import("./cube-variants-xx2CnCTj.js"))), pp = {
	warmVariantsForDay: async (...e) => (await dp()).scoreCountBasedHasibVariantsForDay(...e),
	withRecordingWakeThreshold: async (...e) => (await dp()).withRecordingWakeThreshold(...e)
}, fp = [
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
function mp(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function hp(e) {
	return JSON.stringify(e);
}
function gp(e) {
	const t = mp(e.config), n = mp(t?.signals) ?? t;
	return {
		...n ? { config: n } : {},
		days: e.days
	};
}
function yp(e) {
	return JSON.stringify(gp(e));
}
function wp(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function _p(e) {
	const t = wp(e), n = t?.analysis_date, a = wp(t?.intrinsic), i = a?.state;
	if (!t || "string" != typeof n || 0 === n.length || !a || "string" != typeof i || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(i)) return null;
	const s = a.score, r = a.verdict, o = a.infinite_reason, l = {}, c = [], u = t.per_guider;
	if (Array.isArray(u)) for (const h of u) {
		const e = wp(h);
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
	const d = wp(a.features), p = d && Array.isArray(d.feature_values) ? d : null, f = wp(a.legacy_complexity_features) ?? (null === p ? d : null) ?? {}, m = t.computed_at;
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
const vp = /^[0-9a-f]{64}$/;
var bp = class extends Error {
	constructor(e = !1) {
		super(e ? "Stored complexity evidence failed integrity verification." : "Complexity evidence failed integrity verification."), this.name = "ComplexityEvidenceIntegrityError";
	}
}, Sp = class extends Error {
	constructor() {
		super("Complexity evidence diverged for an existing generation."), this.name = "ComplexityEvidenceDivergenceError";
	}
}, kp = class extends Error {
	constructor() {
		super("Complexity evidence is older than the retained generation window."), this.name = "ComplexityEvidenceRetentionError";
	}
};
function Ip(e = !1) {
	throw new bp(e);
}
function Ap(e) {
	"string" == typeof e && vp.test(e) || Ip();
}
function xp(e) {
	"string" == typeof e && 0 !== e.length && Number.isFinite(Date.parse(e)) || Ip();
}
function Np(e) {
	if (null === e) return "null";
	switch (typeof e) {
		case "string":
		case "boolean": return JSON.stringify(e);
		case "number": return Number.isFinite(e) || Ip(), JSON.stringify(Object.is(e, -0) ? 0 : e);
		case "object": {
			if (Array.isArray(e)) {
				const t = [];
				for (let n = 0; n < e.length; n += 1) n in e || Ip(), t.push(Np(e[n]));
				return `[${t.join(",")}]`;
			}
			const t = Object.getPrototypeOf(e);
			t !== Object.prototype && null !== t && Ip(), Object.getOwnPropertySymbols(e).length > 0 && Ip();
			const n = e, a = [];
			for (const e of Object.keys(n).sort()) {
				const t = Object.getOwnPropertyDescriptor(n, e);
				t && "value" in t && t.enumerable || Ip(), a.push(`${JSON.stringify(e)}:${Np(t.value)}`);
			}
			return `{${a.join(",")}}`;
		}
		default: return Ip();
	}
}
function Tp(e) {
	const t = Np(e), n = JSON.parse(t);
	return (null == n || "object" != typeof n || Array.isArray(n)) && Ip(), n;
}
async function Mp(e) {
	return oe(Np(e));
}
function Rp(e) {
	const t = e;
	for (const a of [
		"contractVersion",
		"crateVersion",
		"target",
		"semanticProfile",
		"profileProofStatus",
		"temporalBasis"
	]) "string" == typeof t[a] && "" !== t[a] || Ip();
	null === t.sourceRevision || "string" == typeof t.sourceRevision && "" !== t.sourceRevision || Ip(), Ap(t.artifactSha256);
	const n = t.compiledFeatures;
	Array.isArray(n) && n.every((e) => "string" == typeof e && e.length > 0) || Ip(), Np(e);
}
async function zp(e, t) {
	"string" != typeof e && Ip(), void 0 !== t && Ap(t);
	let n = 0;
	for (; n < e.length && /\s/.test(e[n]);) n += 1;
	let a = e.length - 1;
	for (; a >= n && /\s/.test(e[a]);) a -= 1;
	"{" === e[n] && "}" === e[a] || Ip();
	const i = await oe(e);
	return void 0 !== t && t !== i && Ip(), i;
}
function $p(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != typeof t || null === e || null === t) return !1;
	if (Array.isArray(e) || Array.isArray(t)) return !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((e, n) => $p(e, t[n]));
	if ("object" != typeof e || "object" != typeof t) return !1;
	const n = Object.keys(e).sort(), a = Object.keys(t).sort();
	if (n.length !== a.length || n.some((e, t) => e !== a[t])) return !1;
	const i = e, s = t;
	return n.every((e) => $p(i[e], s[e]));
}
function Cp(e) {
	try {
		const t = JSON.parse(e);
		return (null === t || "object" != typeof t || Array.isArray(t)) && Ip(), t;
	} catch {
		return Ip();
	}
}
function Dp(e, t) {
	const n = Object.keys(e).sort(), a = [...t].sort();
	return n.length === a.length && n.every((e, t) => e === a[t]);
}
function Ep(e) {
	return "number" == typeof e && Number.isFinite(e);
}
function Fp(e) {
	return null === e || "string" == typeof e && e.length > 0;
}
function Op(e) {
	return Array.isArray(e) && e.every(Ep);
}
function Pp(e) {
	return Array.isArray(e) && e.every((e) => Number.isInteger(e) && (0 === e || 1 === e));
}
function jp(e, t) {
	return 0 === e.length || e.length === t;
}
function Bp(e) {
	Array.isArray(e) || Ip();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && Ip();
		const e = t, n = e.start_ts, a = e.end_ts;
		Dp(e, ["start_ts", "end_ts"]) && Ep(n) && Ep(a) && !(a < n) || Ip();
	}
}
function Gp(e, t) {
	Array.isArray(e) && e.length === t || Ip();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && Ip();
		const e = n;
		Dp(e, ["onset_time", "offset_time"]) && "string" == typeof e.onset_time && 0 !== e.onset_time.length && Fp(e.offset_time) || Ip();
	}
}
function Lp(e) {
	Array.isArray(e) || Ip();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && Ip();
		const e = t;
		Dp(e, ["start_time", "end_time"]) && "string" == typeof e.start_time && 0 !== e.start_time.length && "string" == typeof e.end_time && 0 !== e.end_time.length || Ip();
	}
}
function Up(e) {
	Array.isArray(e) || Ip();
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && Ip();
		const e = n, a = e.guider, i = e.detector, s = e.onset_ts, r = e.offset_ts;
		(!Dp(e, [
			"guider",
			"detector",
			"onset_ts",
			"offset_ts"
		]) || "string" != typeof a || 0 === a.length || t.has(a) || !Fp(i) || null !== s && !Ep(s) || null !== r && !Ep(r) || null === s && null === r) && Ip(), t.set(a, {
			detector: i,
			onset: s,
			offset: r
		});
	}
	return t;
}
function Hp(e) {
	if (null === e) return null;
	Array.isArray(e) && 2 === e.length || Ip();
	const t = e[0], n = e[1];
	return (!Ep(t) || !Ep(n) || n <= t) && Ip(), [t, n];
}
function Zp(e, t) {
	const n = Cp(e), a = void 0 === n.config ? ["days"] : ["config", "days"], i = n.days;
	Dp(n, a) && Array.isArray(i) || Ip(), void 0 === n.config || null !== n.config && "object" == typeof n.config && !Array.isArray(n.config) || Ip();
	const s = /* @__PURE__ */ new Set();
	for (const o of i) {
		(null === o || "object" != typeof o || Array.isArray(o)) && Ip();
		const e = o;
		Dp(e, fp) || Ip();
		const t = e.analysis_date, n = e.epoch_length_seconds, a = e.timestamps, i = e.activity_counts, r = e.sleep_scores, l = e.choi_nonwear, c = e.diary_nap_count, u = e.anglez, d = e.light, p = e.temperature, f = e.heart_rate, m = e.detach_nonwear, h = e.is_weekend, g = e.calibration_error, y = e.imputed_fraction;
		!("string" != typeof t || 0 === t.length || s.has(t) || "number" != typeof n || !Number.isInteger(n) || n <= 0) && Op(a) && 0 !== a.length && Op(i) && i.length === a.length && Pp(r) && r.length === a.length && Pp(l) && jp(l, a.length) && Number.isInteger(c) && !(c < 0) && Fp(e.diary_onset_time) && Fp(e.diary_wake_time) && Fp(e.diary_in_bed_time) && Fp(e.diary_out_bed_time) && (null === h || "boolean" == typeof h) && Op(u) && jp(u, a.length) && Op(d) && jp(d, a.length) && Op(p) && jp(p, a.length) && Op(f) && jp(f, a.length) && Pp(m) && jp(m, a.length) && (null === g || Ep(g)) && (null === y || !(!Ep(y) || y < 0 || y > 1)) || Ip(), Bp(e.sensor_nonwear), Gp(e.diary_naps, c), Lp(e.diary_nonwear);
		const w = Up(e.guider_targets), _ = Hp(e.hdcza_window), v = w.get(H.HDCZA);
		(null === _ && void 0 !== v || null !== _ && (void 0 === v || null !== v.detector || v.onset !== _[0] || v.offset !== _[1])) && Ip(), s.add(t);
	}
	const r = n;
	return $p(Cp(t), gp(r)) || Ip(), {
		difficulty: r,
		dates: s
	};
}
function qp(e, t, n, a) {
	Dp(t, ["config", "days"]) || Ip(), $p(t.config, e.difficulty.config ?? null) || Ip();
	const i = t.days;
	Array.isArray(i) && i.length === e.difficulty.days.length || Ip();
	for (let o = 0; o < i.length; o += 1) {
		const t = i[o], n = e.difficulty.days[o];
		(null === t || "object" != typeof t || Array.isArray(t) || null === n || "object" != typeof n || Array.isArray(n)) && Ip();
		const a = t, s = n;
		Dp(a, [
			"analysis_date",
			"epoch_length_seconds",
			"timestamps"
		]) && a.analysis_date === s.analysis_date && a.epoch_length_seconds === s.epoch_length_seconds && $p(a.timestamps, s.timestamps) || Ip();
	}
	const s = Object.keys(n);
	(s.length !== e.dates.size || s.some((t) => !e.dates.has(t))) && Ip();
	const r = new Map(e.difficulty.days.map((e) => [e.analysis_date, e]));
	for (const [o, l] of Object.entries(n)) {
		(null === l || "object" != typeof l || Array.isArray(l)) && Ip();
		const e = l, t = _p(e.canonicalResult);
		null !== t && t.canonicalResult.analysis_date === o && $p(e, t) || Ip();
	}
	if (null !== a) {
		const t = Object.keys(a);
		(t.length !== e.dates.size || t.some((t) => !e.dates.has(t))) && Ip();
		for (const [e, n] of Object.entries(a)) {
			(null === n || "object" != typeof n || Array.isArray(n)) && Ip();
			const t = n, a = r.get(e);
			t.analysis_date === e && Number.isInteger(t.epoch_length_seconds) && t.epoch_length_seconds === a?.epoch_length_seconds || Ip();
		}
	}
}
async function Vp(e) {
	return Mp(function(e) {
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
async function Wp(e) {
	try {
		Rp(e.runtimeIdentity), null !== e.sourceContentHash && Ap(e.sourceContentHash);
		const t = Tp(e.runtimeIdentity), n = await zp(e.difficultyRequestWireJson, e.difficultyRequestSha256), a = await zp(e.signalsRequestWireJson, e.signalsRequestSha256);
		Zp(e.difficultyRequestWireJson, e.signalsRequestWireJson);
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
			generationKey: await Vp(i)
		};
	} catch (t) {
		if (t instanceof bp) throw t;
		return Ip();
	}
}
async function Jp(e) {
	return Mp(function(e) {
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
function Kp(e, t) {
	void 0 !== t && (null !== t && Ap(t), e !== t && Ip());
}
async function Yp(e) {
	(!Number.isInteger(e.fileId) || e.fileId <= 0) && Ip(), void 0 !== e.id && (!Number.isInteger(e.id) || e.id <= 0) && Ip();
	for (const o of [
		e.generationKey,
		e.difficultyRequestSha256,
		e.signalsRequestSha256,
		e.projectionSha256,
		e.difficultyResultSha256,
		e.recordSha256
	]) Ap(o);
	null !== e.signalsResultSha256 && Ap(e.signalsResultSha256), null !== e.sourceContentHash && Ap(e.sourceContentHash), "sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || Ip(), Rp(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || Ip(), await zp(e.difficultyRequestWireJson, e.difficultyRequestSha256), await zp(e.signalsRequestWireJson, e.signalsRequestSha256);
	const t = Zp(e.difficultyRequestWireJson, e.signalsRequestWireJson);
	xp(e.createdAt), xp(e.updatedAt), Date.parse(e.updatedAt) < Date.parse(e.createdAt) && Ip(), null === e.signalsByDate != (null === e.signalsResultSha256) && Ip();
	const n = Tp(e.projectionInput), a = Tp(e.difficultyByDate), i = null === e.signalsByDate ? null : Tp(e.signalsByDate);
	qp(t, n, a, i);
	const s = {
		evidenceContractId: e.evidenceContractId,
		difficultyMethodId: e.difficultyMethodId,
		signalsMethodId: e.signalsMethodId,
		requestContractId: e.requestContractId,
		sourceContentHash: e.sourceContentHash,
		runtimeIdentity: Tp(e.runtimeIdentity),
		difficultyRequestWireJson: e.difficultyRequestWireJson,
		signalsRequestWireJson: e.signalsRequestWireJson,
		difficultyRequestSha256: e.difficultyRequestSha256,
		signalsRequestSha256: e.signalsRequestSha256
	};
	await Vp(s) !== e.generationKey && Ip(), await Mp(n) !== e.projectionSha256 && Ip(), await Mp(a) !== e.difficultyResultSha256 && Ip(), null !== i && await Mp(i) !== e.signalsResultSha256 && Ip();
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
	return await Jp(r) !== e.recordSha256 && Ip(), r;
}
async function Xp(e) {
	try {
		return await Yp(e);
	} catch {
		throw new bp(!0);
	}
}
function Qp(e, t, n = !1) {
	if (!t) throw new bp(n);
	if (null !== e.sourceContentHash && t.sourceContentHash !== e.sourceContentHash) throw new bp(n);
}
async function ef(e, t, n) {
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
async function tf(e, t, n = U()) {
	const [a, i] = await n.transaction("r", [n.files, n.complexityEvidence], async () => Promise.all([n.complexityEvidence.where("[fileId+generationKey]").equals([e, t]).first(), n.files.get(e)]));
	if (!a) return;
	const s = await Xp(a);
	return Qp(s, i, !0), s;
}
function nf(e, t, n, a) {
	return null === a ? null : {
		...a,
		binding: a?.binding ?? ce.captureWorkspaceBinding(e, t, n)
	};
}
async function af(e, t = s()) {
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
function sf(e) {
	const t = a().scoring(), n = [ri(Tt(t, e).nonwearDetectorsCounts, t.showChoiNonwear), ri(Zt(t.nonwearDetectorsGgir, e), t.showChoiNonwear)];
	return n.filter((e, t) => n.findIndex((t) => _i(t) === _i(e)) === t);
}
function rf(e, t) {
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
function of(e, t) {
	return [.../* @__PURE__ */ new Set([...e.availableDates, ...t])].sort();
}
function lf(e, t) {
	return e ? {
		detectors: [...e.detectors],
		any: Uint8Array.from(e.mask).buffer,
		weight: e.weight ? Float64Array.from(e.weight).buffer : null,
		grid: e.grid === t.timestamps ? "counts" : "ggir"
	} : null;
}
async function cf(e, { file: t, sets: n, capsense: a, db: i, signal: s }) {
	const r = n.filter((t) => !(_i(t) in (e.displayNonwear ?? {})));
	if (0 === r.length) return;
	const o = j(s), l = await za(e, Te, "navigation facts", Ia(), o);
	if (!l) return;
	ln(l.timestamps, hn(e, t));
	const c = Ja(t.sourceType, t.sourceProfileId), u = {};
	for (const [m, h] of Object.entries(l.nonwearMasksByDetector)) 0 === h.length || Xa(m) || (u[m] = h);
	const d = {
		algorithmicNonwearMasks: u,
		timestamps: l.timestamps,
		ggirTimestamps: l.ggirTimestamps,
		sensorNonwearPeriods: "detach_mask" === li(c) && l.detachNonwear ? rf(l.detachNonwear, l.timestamps) : a,
		deviceNonwearSource: c
	}, p = { ...e.displayNonwear }, f = await Promise.all(r.map((e) => (s?.throwIfAborted(), ui(d, e, o))));
	for (const [m, h] of r.entries()) p[_i(h)] = lf(f[m], d);
	await $e(e.fileId, e.date, p, {
		seriesRevision: t.seriesRevision ?? 0,
		nonwearBandGeneration: t.nonwearBandGeneration ?? 0
	}, i, s);
}
const uf = /* @__PURE__ */ new WeakMap();
function df(e, t, n) {
	let a = uf.get(t);
	a || uf.set(t, a = /* @__PURE__ */ new Map());
	const i = a.get(e);
	if (i) return y(i, n);
	const s = async function(e, t, n) {
		n?.throwIfAborted();
		const a = await ge(e, t);
		if (!a || "incomplete" === a.ingestState) return;
		const i = await Nn(e, t);
		let s = a.navigationFacts;
		(function(e, t) {
			const n = e?.navigationFacts;
			if (!e || 1 !== n?.version) return !1;
			const a = of(e, t);
			return n.dates.length === a.length && n.dates.every((e, t) => e === a[t]);
		})(a, i) || (s = await async function(e, t, n, a) {
			const i = j(a), s = {}, r = async (e) => {
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
			const c = await Ka(n), u = await oi(e, c, a), d = [...new Set([u.zone, u.reason ? c : null].filter((e) => Boolean(e)))], p = {};
			return await jn((t) => {
				for (const n of d) {
					const a = {};
					for (const i of e.availableDates) {
						const e = t.dstTransitionOnNight(n, i);
						e && (a[i] = e);
					}
					p[n] = a;
				}
			}, new Ae(i)), {
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
		}(a, of(a, i), t, n), n?.throwIfAborted(), await t.files.update(e, { navigationFacts: s }));
		const r = sf(a), o = r.map(_i), l = a.seriesRevision ?? 0;
		if (s?.bands?.seriesRevision === l && o.every((e) => s.bands.keys.includes(e))) return;
		const c = "sensor_rows" === li(Ja(a.sourceType, a.sourceProfileId)) ? (await de(e, t)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : [];
		for (const u of i) {
			n?.throwIfAborted();
			const i = await Et(e, u, t);
			i && await cf(i, {
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
function pf(e, t) {
	for (const n of e) {
		const e = n.epochResolutions?.find((e) => e.category === t && !e.derivedFromResolutionId);
		if (e) return e.epochLengthSeconds;
	}
	return null;
}
function ff(e, t) {
	const n = "counts" === t ? e.timestamps : e.ggirTimestamps;
	return n ? Math.floor(n.byteLength / Float64Array.BYTES_PER_ELEMENT) : 0;
}
function mf(e) {
	return "number" != typeof e ? String(e) : (/* @__PURE__ */ new Date(1e3 * e)).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: !1,
		timeZone: "UTC"
	});
}
function hf(e) {
	if ("object" != typeof e || null === e) return String(e).slice(0, 60);
	const t = e;
	return "onsetTimestamp" in t && "offsetTimestamp" in t ? `${mf(t.onsetTimestamp)}–${mf(t.offsetTimestamp)}` : "startTimestamp" in t && "endTimestamp" in t ? `${mf(t.startTimestamp)}–${mf(t.endTimestamp)}` : JSON.stringify(t).slice(0, 60);
}
function gf(e, t = "(unset)") {
	if (void 0 === e) return t;
	if (null === e) return t;
	const n = "string" == typeof e ? e : JSON.stringify(e);
	return n.length > 48 ? `${n.slice(0, 45)}…` : n;
}
function yf(e) {
	const t = e.rowCount, n = e.dayCount, a = [`${gf(e.subject, "export")} (${gf(e.format, "?")})`, gf(e.filename, "")].filter((e) => "" !== e), i = ["number" == typeof t ? `${t} rows` : null, "number" == typeof n ? `${n} day${1 === n ? "" : "s"}` : null].filter((e) => null !== e);
	return i.length > 0 ? `${a.join(" · ")} — ${i.join(", ")}` : a.join(" · ");
}
function wf(e, t, n, a) {
	const i = n?.exportId;
	return "export_started" === t && "string" == typeof i && a.has(i) ? "" === e ? "outcome unknown" : `${e} · outcome unknown` : e;
}
function _f(e, t) {
	const n = g({
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
			return "onsetTimestamp" in a ? `${e} #${t}${n}: ${mf(a.onsetTimestamp)}–${mf(a.offsetTimestamp)}` : "startTimestamp" in a ? `${e} #${t}: ${mf(a.startTimestamp)}–${mf(a.endTimestamp)}` : `${e} #${t}${n}`;
		}
		case "sleep_period_split": return `sleep #${a.periodIndex ?? "?"} split at ${mf(a.at)}`;
		case "sleep_period_merged": return `sleep #${a.periodIndex ?? "?"} merged ${a.direction ?? "?"}`;
		case "marker_adjusted": {
			const e = a.updates ?? {}, t = a.category ?? "?", n = a.periodIndex ?? "?", i = [];
			return void 0 !== e.onsetTimestamp && i.push(`onset → ${mf(e.onsetTimestamp)}`), void 0 !== e.offsetTimestamp && i.push(`offset → ${mf(e.offsetTimestamp)}`), void 0 !== e.startTimestamp && i.push(`start → ${mf(e.startTimestamp)}`), void 0 !== e.endTimestamp && i.push(`end → ${mf(e.endTimestamp)}`), void 0 !== e.markerType && i.push(`type → ${e.markerType}`), `${t} #${n}: ${i.join(", ")}`;
		}
		case "marker_moved": {
			const e = a.before, t = a.after;
			if (!e || !t) return "drag completed";
			const n = Array.isArray(e.sleepMarkers) ? e.sleepMarkers : [], i = Array.isArray(t.sleepMarkers) ? t.sleepMarkers : [];
			for (let a = 0; a < Math.max(n.length, i.length); a++) {
				const e = n[a], t = i[a];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `sleep #${a}: ${hf(e)} ⇒ ${hf(t)}`;
			}
			const s = Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : [], r = Array.isArray(t.nonwearMarkers) ? t.nonwearMarkers : [];
			for (let a = 0; a < Math.max(s.length, r.length); a++) {
				const e = s[a], t = r[a];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `nonwear #${a}: ${hf(e)} ⇒ ${hf(t)}`;
			}
			return "drag completed (no visible change)";
		}
		case "marker_deleted": {
			const e = a.category ?? "?", t = a.periodIndex ?? "?", n = a.before;
			return n ? `${e} #${t}: was ${hf(n)}` : `${e} #${t}`;
		}
		case "actiware_rest_edited": {
			const e = "string" == typeof a.edit ? a.edit : "?";
			return "add" === e ? `rest added: ${hf(a.to)}` : "remove" === e ? `rest removed: was ${hf(a.from)}` : `rest ${"move" === e ? "moved" : e}: ${hf(a.from)} ⇒ ${hf(a.to)}`;
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
			const e = gf(a.intent, "mutation"), t = gf(a.guard, "?"), n = a.disposition, i = "refused_by_store" === n ? "refused" : "applied_with_violation" === n ? "applied anyway" : gf(n, "");
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
				const e = gf(a.before, ""), t = gf(a.after, "");
				return "" === e ? `"${t}"` : `"${e}" → "${t}"`;
			}
			return a.text ? `"${String(a.text).slice(0, 60)}"` : a.notes ? `"${String(a.notes).slice(0, 60)}"` : `${a.length ?? "?"} chars`;
		case "settings_changed": return `${gf(a.scope, "?")} · ${gf(a.key, "?")}: ${gf(a.before)} → ${gf(a.after)}`;
		case "settings_reset": {
			const e = a.changed, t = gf(a.scope, "settings");
			if (!Array.isArray(e)) return `${t} reset to defaults`;
			if (0 === e.length) return `${t}: already at defaults`;
			const n = e.slice(0, 4).map((e) => gf(e, "?")).join(", "), i = e.length > 4 ? ", …" : "";
			return `${t}: ${String(e.length)} reset to default (${n}${i})`;
		}
		case "app_version_changed": return `${gf(a.before, "(first run)")} → ${gf(a.after, "?")}`;
		case "system_migration": return `${gf(a.subject, "schema")}: ${gf(a.before, "?")} → ${gf(a.after, "?")}`;
		case "data_exported": return yf(a);
		case "export_started": return `Started: ${yf(a)}`;
		case "export_cancelled": return `${gf(a.filename, "export")} — ${gf(a.reason, "cancelled")}`;
		case "preset_changed": {
			const e = gf(a.family, "preset"), t = gf(a.change, "changed"), n = gf(a.preset, "?"), i = a.before;
			return null == i ? `${e}: ${t} ${n}` : `${e}: ${t} ${n} (was ${gf(i)})`;
		}
		case "markers_synced": {
			const e = a.conflicts, t = a.errorCount;
			let n = `Pushed ${a.pushed ?? 0}, pulled ${a.pulled ?? 0}`;
			return "number" == typeof e && e > 0 && (n += `, ${e} conflict${1 === e ? "" : "s"}`), "number" == typeof t && t > 0 && (n += `, ${t} error${1 === t ? "" : "s"}`), n;
		}
		case "system_recalculation": return `Recalculated ${gf(a.subject, "derived data")}`;
		case "diary_staged": return `Staged ${a.staged ?? 0}, replaced ${a.replaced ?? 0}, skipped ${a.skipped ?? 0}`;
		case "diary_decision_recorded": return `Decided ${gf(a.ruleKind, "a rule")} → ${gf(a.outcome, "(no outcome)")} (${gf(a.scope, "unscoped")}, ${a.nights ?? 0} nights)`;
		case "diary_decision_state_saved": return `Saved decision state "${gf(a.restorePoint, "untitled")}" (${a.decisions ?? 0} decisions)`;
		case "diary_session_saved": {
			const e = gf(a.status, "saved"), t = gf(a.step, "an unknown step"), n = gf(a.sourceSha256Prefix, "an unnamed source");
			return "removed" === e ? `Removed the saved diary session for ${n}` : `Diary session ${n} saved as ${e} on ${t}`;
		}
		case "diary_decision_state_restored": return `Restored decision state "${gf(a.restorePoint, "untitled")}" (${a.reflagged ?? 0} reflagged, ${a.unflagged ?? 0} unflagged, ${a.nights ?? 0} nights)`;
		case "diary_decisions_reset": return `Reset ${a.decisions ?? 0} diary decisions across ${a.nights ?? 0} nights`;
		case "diary_attached": {
			const e = a.entryCount, t = a.matchBasis, n = ["number" == typeof e ? `${e} night${1 === e ? "" : "s"}` : null, "string" == typeof t && "" !== t ? `matched by ${t}` : null].filter((e) => null !== e).join(", ");
			return "" === n ? "Attached diary" : `Attached diary (${n})`;
		}
		case "diary_discarded": {
			const e = a.analysisDate;
			return null == e ? `Discarded ${gf(a.sourceKey, "diary")}` : `Discarded ${gf(a.sourceKey, "diary")} for ${gf(e, "?")}`;
		}
		case "diary_workspace_cleared": {
			const e = (e, t) => {
				const n = Number(a[e] ?? 0);
				return `${String(n)} ${t}${1 === n ? "" : "s"}`;
			};
			return `Cleared workspace diary (${e("staged", "staged night")}, ${e("occurrences", "response")})`;
		}
		case "diary_repaired": {
			const e = a.fields, t = Array.isArray(e) ? e.map((e) => gf(e, "?")).join(", ") : "";
			return "" === t ? `Repaired ${a.applied ?? 0} field${1 === a.applied ? "" : "s"}` : `Repaired ${a.applied ?? 0}: ${t}`;
		}
		case "diary_changed": {
			const e = a.fields, t = gf(a.change, "changed"), n = Array.isArray(e) ? e.map((e) => gf(e, "?")).join(", ") : "";
			return "" === n ? `Diary ${t}` : `Diary ${t}: ${n}`;
		}
		case "workspace_deleted": {
			const e = a.auditRowsDestroyed;
			return `${gf(a.displayName, "workspace")} deleted — ${a.auditRowsTotal ?? 0} audit rows, ${a.auditRowsReplicated ?? 0} replicated, ${e ?? 0} destroyed`;
		}
		case "audit_chain_reanchored": return `Restored ${a.restoredRows ?? 0} rows (restore ${String(a.restoreId ?? "?").slice(0, 8)})`;
		case "workspace_recovered": return `Recovered from backup ${gf(a.backupSha256, "?").slice(0, 8)} — ${gf(a.applied, "0")} changes put back, ${gf(a.skipped, "0")} skipped, ${gf(a.recordingsToReimport, "0")} recordings to import again`;
		case "access_changed": return `${gf(a.subject, "access")} · ${gf(a.scope, "?")}: ${gf(a.before)} → ${gf(a.after)}`;
		case "assignment_changed": {
			const e = a.fileCount, t = a.fileIds, n = "number" == typeof e ? e : Array.isArray(t) ? t.length : 0;
			return `${gf(a.change, "changed")} ${gf(a.subject, "assignment")} · ${gf(a.scope, "?")} (${n} file${1 === n ? "" : "s"})`;
		}
	}
	return Object.entries(a).slice(0, 5).map(([e, t]) => "number" == typeof t && e.toLowerCase().includes("timestamp") ? `${e}: ${mf(t)}` : "string" == typeof t && t.length > 50 ? `${e}: "${t.slice(0, 47)}..."` : Array.isArray(t) ? `${e}: [${t.length} items]` : "object" == typeof t && null !== t ? `${e}: {…}` : `${e}: ${JSON.stringify(t)}`).join(", ");
}
function vf(e) {
	return JSON.stringify(e.map((e) => ({
		start_timestamp: e.startTimestamp,
		end_timestamp: e.endTimestamp,
		marker_index: e.markerIndex
	})));
}
function bf(e, t) {
	const n = (i = t, "mims_metrics" === (a = e ?? "generic") ? Qi(i, s) : "ggir_part5_daysummary" === a ? function(e, t) {
		const n = es(e, t);
		return e.date_column || e.datetime_column || n.push({
			key: "date_column",
			message: "Map a date/day column for the daily summary table."
		}), n;
	}(i, s) : Xi(i, s));
	var a, i, s;
	if (0 !== n.length) throw new Error(function(e) {
		return `Column-mapped CSV settings are incomplete: ${e.map((e) => e.message).join(" ")} ${zi}`;
	}(n));
}
function Sf(e) {
	const t = /* @__PURE__ */ new Map();
	for (const a of e) "auto_score" !== a.username || a.algorithm !== Y.VAN_HEES_2015 || a.isInvalidNight || t.set(a.date, pn(t.get(a.date), a));
	const n = /* @__PURE__ */ new Map();
	for (const [a, i] of t) {
		const e = i.sleepMarkers.filter((e) => e.markerType === A.MAIN_SLEEP);
		if (1 !== e.length) continue;
		const t = e[0], s = t?.onsetTimestamp, r = t?.offsetTimestamp;
		"number" == typeof s && Number.isFinite(s) && "number" == typeof r && Number.isFinite(r) && r > s && n.set(a, [s, r]);
	}
	return n;
}
async function kf(e, t) {
	const n = t.dailyGgirSummaries;
	if (!n) return /* @__PURE__ */ new Map();
	const a = await n.where("fileId").equals(e).toArray();
	return new Map(a.map((e) => [e.analysisDate, e]));
}
function If(e) {
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
function Af(e, t, n, a) {
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
const xf = "wasm-parallel";
function Nf(e) {
	const t = e.compiledFeatures;
	return {
		...e,
		compiledFeatures: t.includes(xf) ? t.filter((e) => e !== xf) : [...t, xf]
	};
}
function Tf(e, t) {
	const n = e.compiledFeatures.filter((e) => e !== xf), a = t.compiledFeatures.filter((e) => e !== xf);
	return e.contractVersion === t.contractVersion && e.crateVersion === t.crateVersion && e.sourceRevision === t.sourceRevision && e.target === t.target && e.semanticProfile === t.semanticProfile && e.profileProofStatus === t.profileProofStatus && e.temporalBasis === t.temporalBasis && e.artifactSha256 === t.artifactSha256 && n.length === a.length && n.every((e, t) => e === a[t]);
}
async function Mf(e, t, n, a, i = /* @__PURE__ */ new Map()) {
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
			epochs: await ki(c.timestamps, t, a),
			ggir: await ki(c.ggirTimestamps, t, a)
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
function Rf(e, t) {
	const n = new Set(t.map((e) => e.analysis_date)), a = Object.keys(e);
	return n.size === t.length && a.length === n.size && a.every((e) => n.has(e));
}
function zf(e) {
	const t = [...e.entries()].sort(([e], [t]) => e.localeCompare(t));
	let n = null, a = null;
	for (const [, r] of t) try {
		const e = ut(r).timestamps;
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
			const t = ut(e).timestamps;
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
async function $f(e, t, n, a, i, s, r) {
	const o = [], l = [];
	for (const c of new Set(t)) {
		let t = null;
		for (const o of e) if (o && 0 !== ut(o).timestamps.length && (await Dr(o, c, n, i, void 0, s, r), t = la(c, _a(o, n), a), null !== t)) break;
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
function Cf({ available: e, dropped: t }) {
	return 0 === e.length && t.length > 0 ? t.map((e) => e.reason).join("; ") : null;
}
function Df(e) {
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
function Ef(e) {
	return 1 === e.length && ma(e[0]);
}
function Ff(e, t, n) {
	const a = e?.byDate[t];
	return a ? "refused" === a.kind ? a.reason : null : function(e) {
		const t = e?.sleepPeriodDetectionConfig?.[fm];
		return "string" == typeof t ? t : null;
	}(n);
}
async function Of(e, t) {
	if (!("placementResults" in e)) return;
	const n = await e.placementResults.get(t);
	return 2 === n?.policy ? n : void 0;
}
function Pf(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let a = 0; a < t; a += 1) {
		const t = e[a];
		if (null == t || !Number.isFinite(t)) return [];
		n[a] = t;
	}
	return n;
}
function jf(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let a = 0; a < t; a += 1) {
		const t = e[a];
		if (0 !== t && 1 !== t) return [];
		n[a] = t;
	}
	return n;
}
function Bf(e, t, n) {
	if (t.length !== e.length || n.length !== e.length) return [];
	const a = new Array(e.length);
	for (let i = 0; i < e.length; i += 1) {
		const s = t[i], r = e[i], o = n[i];
		if (null == s || null == r || s !== r || null == o || !Number.isFinite(o)) return [];
		a[i] = o;
	}
	return a;
}
function Gf(e, t, n, a, i, s) {
	const r = [], o = null == t ? null : s.resolveInstant(t, e, ue.evening_onset, i), l = null == n ? null : s.resolveInstant(n, e, ue.morning_offset, i);
	return null == o && null == l || r.push({
		guider: H.DIARY,
		detector: null,
		onset_ts: o,
		offset_ts: l
	}), null != a && r.push({
		guider: H.HDCZA,
		detector: null,
		onset_ts: a[0],
		offset_ts: a[1]
	}), r;
}
function Lf(e) {
	return `complexity-evidence:${e.generationKey}`;
}
function Uf(e) {
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
function Hf(e) {
	return e.projectionInput;
}
function Zf(e) {
	return e.difficultyByDate;
}
function qf(e) {
	return e.signalsByDate;
}
function Vf(e, t, n, a) {
	return {
		has_markers: F(e),
		has_nonwear: X(e),
		is_invalid_night: e?.isInvalidNight ?? !1,
		needs_consensus: e?.needsConsensus ?? !1,
		auto_flagged: t,
		has_auto_score: (n?.sleepMarkers?.length ?? 0) > 0 || !0 === n?.isInvalidNight,
		auto_score_unavailable_reason: a
	};
}
async function Wf(e, t, n, a) {
	const [i, s] = await Promise.all([a.markers.where("[fileId+date+username]").between([
		e,
		t,
		""
	], [
		e,
		t,
		"￿"
	], !0, !0).toArray(), Of(a, e)]), r = /* @__PURE__ */ new Map();
	for (const c of i) r.set(c.username, pn(r.get(c.username), c));
	const o = r.size >= 2 && (await af([{
		usersForDate: r,
		kind: "sleep"
	}, {
		usersForDate: r,
		kind: "nonwear"
	}])).some((e) => e.disagree), l = r.get(ht);
	return Vf(r.get(n), o, l, Ff(s, t, l));
}
function Jf(e) {
	return JSON.stringify((e ?? []).map((e) => [e.startTimestamp ?? null, e.endTimestamp ?? null]));
}
function Kf(e) {
	const t = e ? null : a().scoring(), i = e?.nightStartHour ?? t?.nightStartHour ?? n.night_start_hour, s = e?.nightEndHour ?? t?.nightEndHour ?? n.night_end_hour, r = parseInt(i.split(":")[0] ?? "21", 10), o = parseInt(s.split(":")[0] ?? "9", 10);
	return {
		nightStartHour: Number.isNaN(r) ? 21 : r,
		nightEndHour: Number.isNaN(o) ? 9 : o
	};
}
const Yf = /* @__PURE__ */ new Set(), Xf = /* @__PURE__ */ new WeakMap();
function Qf(e, t, n, a) {
	const i = Xf.get(e) ?? /* @__PURE__ */ new Map();
	Xf.set(e, i);
	const s = i.get(t);
	if (s) {
		let r;
		return {
			run: s.run.catch((o) => {
				if (!s.signal?.aborted || n?.aborted) throw o;
				return i.get(t) === s && i.delete(t), r = Qf(e, t, n, a), r.run;
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
function em(e, t, n, i) {
	return W({
		kind: D.NIGHT_DIFFICULTY,
		key: `${D.NIGHT_DIFFICULTY}:${String(e)}`,
		label: "Update night difficulty",
		workspaceId: t.name,
		signal: i,
		rerun: !0,
		run: async (i) => {
			const s = new rm();
			try {
				if (i.signal.throwIfAborted(), i.progress(0, 2), U() !== t) return;
				const r = await ge(e, t);
				if (!r || "incomplete" === r.ingestState) return;
				await df(e, t, i.signal), i.signal.throwIfAborted(), i.progress(1, 2);
				const o = r.nightDifficulty, l = n ?? (o ? {
					nightStartHour: `${String(o.nightStartHour).padStart(2, "0")}:00`,
					nightEndHour: `${String(o.nightEndHour).padStart(2, "0")}:00`
				} : void 0);
				await s.computeDatesStatus(e, r.availableDates, a().scoring().username || "anonymous", l, i.signal), i.progress(2, 2);
			} finally {
				s.dispose();
			}
		}
	}).catch((e) => {
		e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] Stored night difficulty could not be refreshed.", e);
	});
}
Pe((e, t, n) => {
	em(e, t, void 0, n);
});
const tm = /* @__PURE__ */ new WeakMap();
function nm(e, t, n, a, i) {
	i?.throwIfAborted();
	let s = tm.get(e);
	return s || (s = /* @__PURE__ */ new Map(), tm.set(e, s)), s.set(t, {
		inputs: n,
		byDate: a
	}), a;
}
const am = /* @__PURE__ */ new WeakMap();
function im(e, t) {
	let n = am.get(e);
	n || am.set(e, n = /* @__PURE__ */ new Map());
	const a = _t(t);
	let i = n.get(a);
	return i || n.set(a, i = Ee(e.values(), t)), i;
}
function sm(e) {
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
var rm = class t {
	sourceKey = "local";
	nightRecordData = Ir;
	sourceAnalyses;
	services;
	disposed = !1;
	operationProcessingOptions;
	constructor(e, { sourceAnalyses: t = Ar, services: n = pp } = {}) {
		this.operationProcessingOptions = e, this.sourceAnalyses = t, this.services = n;
	}
	fileBatches = /* @__PURE__ */ new Map();
	beginFileBatch(e, t = U(), n) {
		let i = this.fileBatches.get(e);
		i && i.db === t || (i = {
			db: t,
			signal: n,
			depth: 0,
			savedNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map()
		}, this.fileBatches.set(e, i));
		const s = i;
		s.depth += 1;
		let r = !1;
		return { end: async () => {
			r || (r = !0, s.depth -= 1, s.depth > 0 || (this.fileBatches.get(e) === s && this.fileBatches.delete(e), 0 === s.savedNights.size || s.signal?.aborted || await this.sourceAnalyses.reduce(async (t, n) => {
				await t;
				const i = s.savedNights.get(n.id);
				i && await n.followDeferredNights?.({
					fileId: e,
					nights: i,
					analysisParadigm: a().scoring().analysisParadigm,
					db: s.db,
					signal: s.signal
				});
			}, Promise.resolve())));
		} };
	}
	reanalyze(e, t, n) {
		return Nr(this.sourceAnalyses, e, "reanalyze")?.reanalyze(e, t, {
			...n,
			services: this.services
		}) ?? null;
	}
	fileBatch(e, t) {
		const n = this.fileBatches.get(e);
		return n?.db === t ? n : null;
	}
	placementDiaries(e, t, n = this.fileBatch(e, t)) {
		return n?.days ? n.diaries ??= yt(e, t) : yt(e, t);
	}
	async placementDiary(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? (await this.placementDiaries(e, n, a)).find((e) => e.analysisDate === t) ?? null : St(e, t, n);
	}
	async placementMarker(e, t, n, a, i = this.fileBatch(e, a)) {
		if (!i?.days) return mt(e, t, ht, n, void 0, a);
		const s = await (i.markers ??= a.markers.where("fileId").equals(e).toArray()), r = Oe(s, {
			date: t,
			username: ht
		}, n);
		return r ? Ce(r) : void 0;
	}
	async placementDay(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? a.days.get(t) : Et(e, t, n, a?.activityDayMemo);
	}
	async scorerVerdict(e, t, n, a, i = this.fileBatch(t, e)) {
		return i?.days ? im(i.days, n) : i?.activityDayMemo ? im(await dn(t, e, i.activityDayMemo), n) : (await st(t, e, a))(n);
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
		const n = U(), a = await dn(e, n, this.fileBatch(e, n)?.activityDayMemo), i = im(a, t), s = [];
		for (const [r, o] of [...a].sort(([e], [t]) => e.localeCompare(t))) {
			const e = await za(o, i, `loadFileDaySeries ${r}`, Ia());
			e && s.push(e);
		}
		return s;
	}
	async loadActivityData(e, t, n) {
		const a = U();
		let i, s = await ge(e, a), r = null;
		if (fe(s)) {
			const { ensureSavedGgirNonwear: t } = await import("./ggir-import-D9aW-GXy.js");
			try {
				r = await t(e, a, void 0, !1);
			} catch {
				i = "Saved GGIR nonwear recovery failed; recovered nonwear is unavailable.";
			}
			s = await ge(e, a);
		}
		const o = s?.navigationFacts;
		o?.window[t] || df(e, a);
		const l = await Oa(e, t, a, void 0, o);
		if (!l) throw new Error(`No activity data found for fileId=${e} date=${t}. File may not be processed yet.`);
		const c = await this.scorerVerdict(a, e, n?.algorithm, { file: s }), u = await za(l, c, `loadActivityData ${t}`, Ia());
		if (!u) throw new Error(`Activity data for fileId=${e} date=${t} is corrupt; please reprocess.`);
		const d = await Ta(t, o), p = 48 === n?.viewHours ? [d, await Ta(d, o)] : [d], f = await Promise.all(p.map((t) => Et(e, t, a, this.fileBatch(e, a)?.activityDayMemo))), m = [l];
		for (const k of f) {
			if (!k) break;
			m.push(k);
			const e = await za(k, c, "loadActivityData next-day", Ia());
			if (!e) throw new Error("Next-day activity data is corrupt; please reprocess.");
			const t = u.timestamps.length, n = e.timestamps.length;
			Ga(u.timestamps, e.timestamps), Ga(u.axisY, e.axisY), Ga(u.vectorMagnitude, e.vectorMagnitude), (u.axisX.length > 0 || e.axisX.length > 0) && (u.axisX.length < t && (u.axisX = new Array(t).fill(0)), Ga(u.axisX, e.axisX.length > 0 ? e.axisX : new Array(n).fill(0))), (u.axisZ.length > 0 || e.axisZ.length > 0) && (u.axisZ.length < t && (u.axisZ = new Array(t).fill(0)), Ga(u.axisZ, e.axisZ.length > 0 ? e.axisZ : new Array(n).fill(0))), (u.temperature.length > 0 || e.temperature.length > 0) && (u.temperature.length < t && (u.temperature = new Array(t).fill(NaN)), Ga(u.temperature, e.temperature.length > 0 ? e.temperature : new Array(n).fill(NaN))), (u.eventMarkers.length > 0 || e.eventMarkers.length > 0) && (u.eventMarkers.length < t && (u.eventMarkers = new Array(t).fill(0)), Ga(u.eventMarkers, e.eventMarkers.length > 0 ? e.eventMarkers : new Array(n).fill(0))), Ga(u.eventMarkerTimestamps, e.eventMarkerTimestamps), (u.lux.length > 0 || e.lux.length > 0) && (u.lux.length < t && (u.lux = new Array(t).fill(NaN)), Ga(u.lux, e.lux.length > 0 ? e.lux : new Array(n).fill(NaN))), (u.sleepScores.length > 0 || e.sleepScores.length > 0) && (u.sleepScores.length < t && (u.sleepScores = new Array(t).fill(0)), Ga(u.sleepScores, e.sleepScores.length > 0 ? e.sleepScores : new Array(n).fill(0))), (u.sleepScoreGaps.length > 0 || e.sleepScoreGaps.length > 0) && (u.sleepScoreGaps.length < t && (u.sleepScoreGaps = new Array(t).fill(0)), Ga(u.sleepScoreGaps, e.sleepScoreGaps.length > 0 ? e.sleepScoreGaps : new Array(n).fill(0))), (u.lstmTimestamps30s.length > 0 || e.lstmTimestamps30s.length > 0) && (u.lstmTimestamps30s = $a(u.lstmTimestamps30s, e.lstmTimestamps30s), u.lstmSleepWake30s = Na(u.lstmSleepWake30s, e.lstmSleepWake30s)), ja(u, e, t, n), (u.ggirTimestamps.length > 0 || e.ggirTimestamps.length > 0) && (u.ggirSib = Da(u.ggirTimestamps, u.ggirSib, e.ggirTimestamps, e.ggirSib), u.ggirTimestamps = $a(u.ggirTimestamps, e.ggirTimestamps), u.ggirEnmo = $a(u.ggirEnmo, e.ggirEnmo), u.ggirAnglez = $a(u.ggirAnglez, e.ggirAnglez));
		}
		u.ggirSib = Ra(u.ggirTimestamps, u.ggirSib);
		const { start: h, end: g } = await ai(t, 48 === n?.viewHours ? 48 : void 0, o), y = Ja(s?.sourceType, s?.sourceProfileId);
		let w = [];
		ma(y) ? w = (await Vt(e, h, g, a)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : "detach_mask" === li(y) && u.detachNonwear && (w = rf(u.detachNonwear, u.timestamps));
		const _ = {};
		for (const [k, I] of Object.entries(u.nonwearMasksByDetector)) 0 !== I.length && (Xa(k) || (_[k] = I));
		const v = m.flatMap((e) => e.ggirTimestamps?.byteLength ? [e.ggirInvalid] : []);
		if (v.length > 0 && v.every((e) => void 0 !== e)) {
			const e = v.flatMap((e) => Array.from(new Uint8Array(e)));
			e.length === u.ggirTimestamps.length && (_[kt.ggir_part2_invalid] = e);
		}
		ln(u.timestamps, pf(m, "count_sleep_wake")), ln(u.ggirTimestamps, pf(m, "ggir_sleep_period"));
		const b = function(e, t, n, a) {
			const i = {}, s = e.filter((e) => ff(e, "counts") > 0 || ff(e, "ggir") > 0);
			for (const r of sf(a)) {
				const e = _i(r);
				if (!s.every((t) => t.displayNonwear && e in t.displayNonwear)) continue;
				const a = s.map((t) => t.displayNonwear[e] ?? null), o = a.filter((e) => null !== e), l = o[0]?.grid;
				if (!l) {
					i[e] = null;
					continue;
				}
				if (o.some((e) => e.grid !== l)) continue;
				const c = o.some((e) => null !== e.weight), u = [], d = [];
				if (s.forEach((e, t) => {
					const n = a[t], i = n ? new Uint8Array(n.any) : new Uint8Array(ff(e, l));
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
		Object.keys(b).length < sf(s ?? null).length && df(e, a);
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
			...n?.algorithm && !Ma(n.algorithm) && 0 === u.sleepScores.length && u.timestamps.length > 0 ? { scorerMissingReason: "stale" === c.status ? c.reason : Pa(n.algorithm, {
				sourceProfileId: s?.sourceProfileId,
				actiwareSleepWake: (await Bt(e, a))?.actiwareSleepWake
			}) } : {},
			lstmTimestamps30s: u.lstmTimestamps30s,
			lstmSleepWake30s: u.lstmSleepWake30s,
			nonwearResults: u.nonwearResults,
			nonwearResultsChoi2011: u.nonwearResultsChoi2011,
			vanHeesNonwear: u.vanHeesNonwear,
			algorithmicNonwearMasks: _,
			nonwearBands: b,
			...r ? { nonwearSourceLabels: { [kt.ggir_saved]: r } } : {},
			...i ? { savedNonwearMissingReason: i } : {},
			epochResolutions: S,
			viewStart: h,
			viewEnd: g,
			sensorNonwearPeriods: w,
			deviceNonwearSource: y
		};
	}
	async loadMarkers(e, t, n, a, i, s) {
		const r = s ?? U(), o = await mt(e, t, n, a, i, r);
		return o ? sm(o) : null;
	}
	async saveMarkers(e, t, n, i, s, r, o, l, c) {
		const u = l ?? U(), d = a().scoring(), p = nf(u, {
			username: n,
			studyId: d.selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, c), f = o?.signal ?? this.fileBatch(e, u)?.signal;
		let m, h = null, g = null, y = !1, w = o?.sleepPeriodDetection ?? d.sleepPeriodDetection;
		const _ = await Un({
			fileId: e,
			date: t,
			username: n,
			algorithm: s ?? null,
			detectionRule: r ?? null,
			signal: f
		}, u, async (a) => {
			const l = "function" == typeof i ? await i(a ? sm(a) : null) : {
				data: i,
				settings: o
			};
			if (!l) return null;
			h = l.data;
			const c = l.settings ?? o, p = m = await ge(e, u);
			h = {
				...h,
				sleepMarkers: await this.nightRecordData[rn(p, d.analysisParadigm)].sleepPeriodsToSave({
					fileId: e,
					date: t,
					isInvalidNight: h.isInvalidNight ?? a?.isInvalidNight ?? !1
				}, h.sleepMarkers, u)
			}, w = bn({
				algorithm: s ?? "",
				sleepPeriodDetection: c?.sleepPeriodDetection ?? d.sleepPeriodDetection
			});
			const _ = w ? ot(w) : null, v = void 0 === c?.periodGuider ? Tt(d, p) : null, b = c?.periodGuider ?? v?.periodGuider, S = c?.periodGuider ?? (_ && !0 !== v?.placementFromSource ? we($n(_)) : v?.periodGuider), k = s ? Pt(s) : null, I = k ? vn(k) : null, A = await mt(e, t, n, s ?? null, r ?? null, u);
			y = !A || A.algorithm !== (s ?? null) || A.detectionRule !== (r ?? null) || JSON.stringify(A.sleepMarkers) !== JSON.stringify(h.sleepMarkers) || void 0 !== h.isInvalidNight && h.isInvalidNight !== A.isInvalidNight, g = void 0 !== h.nonwearMarkers && "auto_score" !== n ? Jf(A?.nonwearMarkers) : null;
			let x = h.sleepPeriodDetectionConfig ?? null;
			if (null === x) {
				const n = await St(e, t, u);
				x = zn({
					algorithm: s ?? null,
					periodGuider: po(0, b, w),
					sleepPeriodDetection: w,
					diaryOnsetTime: xt(n),
					diaryWakeTime: Pn(n)
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
					algorithm: s ?? null,
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
		const v = h, b = sm(_.record), S = {
			fileId: e,
			file: m,
			nights: /* @__PURE__ */ new Map([[t, v.sleepMarkers]]),
			sleepMarkersChanged: y,
			username: n,
			analysisParadigm: a().scoring().analysisParadigm,
			db: u,
			signal: f,
			openBatch: () => this.fileBatch(e, u)
		};
		if (await this.sourceAnalyses.reduce(async (e, t, n) => !!(await e || n > 0 && f?.aborted) || (xr(t, m, "followSavedNights") && await t.followSavedNights(S), !1), Promise.resolve(!1))) return b;
		null !== g && g !== Jf(v.nonwearMarkers) && em(e, u, void 0, f), y && mt(e, t, n, s ?? null, r ?? null, u).then(async (t) => {
			if (!t) return;
			const { storeNightPeriodMetrics: n } = await import("./local-export-worker-DRuJMI8r.js").then((e) => e.L);
			return n(t, await this.scorerVerdict(u, e, t.algorithm), u, f);
		}).catch(() => {
			console.warn("[local-analysis] period metrics could not be stored with the saved night");
		});
		try {
			if (U() !== u) return b;
		} catch {
			return b;
		}
		const k = mn();
		if (!k.capabilities.tauri) return b;
		try {
			const [a, i] = await Promise.all([ge(e, u), mt(e, t, n, s ?? null, r ?? null, u)]);
			if (!a?.fileHash || !i?.contentHash) return b;
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
				nonwearMarkers: vf(i.nonwearMarkers),
				isInvalidNight: i.isInvalidNight,
				notes: v.notes,
				contentHash: i.contentHash
			});
		} catch {
			console.warn("[platform] native marker mirror failed for the active local selection");
		}
		var I;
		return b;
	}
	async listFiles() {
		const e = U();
		return (await ve(e)).map((e) => {
			const t = e.id ?? 0, n = N(e);
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
				views: Z(t, n, /* @__PURE__ */ new Set(), e.epochLengthSeconds),
				count_epoch_seconds: e.epochLengthSeconds
			};
		});
	}
	async listDates(e) {
		const t = U();
		return (await ge(e, t))?.availableDates ?? Nn(e, t);
	}
	async getDiaryEntry(e, t) {
		const n = U(), a = await St(e, t, n);
		return a ? ke(a, await Cn(e, n)) : null;
	}
	async listDiaryEntries(e) {
		const t = U(), n = await yt(e, t);
		if (0 === n.length) return n;
		const a = await Cn(e, t);
		return null === a ? n : be(n, a);
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
		const d = j(c), [p, f, m, h] = await Promise.all([
			u?.days ? [...u.days.keys()].sort() : Nn(e, i),
			this.placementDiaries(e, i, u),
			Ef(s) ? Dn(e, i) : On(e, i),
			i.files.get(e)
		]), g = await be(f, a, d), y = new Map(g.map((e) => [e.analysisDate, e])), w = [], _ = p.filter((e) => e !== t), v = await Promise.all(_.map((t) => this.placementDay(e, t, i, u)));
		for (const [b, S] of _.entries()) {
			const e = v[b];
			if (!e) continue;
			for (const n of s) await Dr(e, n, l, i, d, c, u?.activityDayMemo);
			const t = await za(e, n, `autoScore context ${S}`, l, d);
			if (!t || 0 === t.timestamps.length || 0 === t.sleepScores.length) continue;
			const a = y.get(S), p = t.timestamps[0] ?? 0, f = t.timestamps[t.timestamps.length - 1] ?? p, g = await kn(t.timestamps, qt({
				day: e,
				file: h
			}), d), _ = Df(va(await fa(s, t.nonwearMasksByDetector, {
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
				diaryBedTime: Ut(a),
				diaryOnsetTime: xt(a),
				diaryWakeTime: Pn(a),
				diaryNaps: a ? Fn(a) : null,
				diaryNonwear: a ? it(a) : null
			});
		}
		return {
			contextDays: w,
			deviceOffNonwear: m
		};
	}
	async autoScore(e, t, n, a) {
		const i = a ?? U();
		if (this.fileBatch(e, i)) return this.autoScoreNight(e, t, n, go, i);
		const s = {}, r = await dn(e, i, s), o = {
			db: i,
			signal: n.signal,
			depth: 0,
			savedNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map(),
			activityDayMemo: s,
			span: Promise.resolve(zf(r))
		};
		return this.autoScoreNight(e, t, n, go, i, void 0, void 0, void 0, o);
	}
	async autoScoreFile(e, t, n = !0, a = U(), i) {
		if (M(a.name)) return /* @__PURE__ */ new Map();
		const s = await this.filePlacementState(e, t, a);
		if (!s) return /* @__PURE__ */ new Map();
		const { file: r, inputs: o, cached: l } = s, c = Yt(r);
		return c ? new Map(r.availableDates.map((e) => [e, {
			kind: "refused",
			reason: c
		}])) : l ? nm(a, e, o, l, t.signal) : n ? W({
			kind: D.AUTO_SCORE,
			key: `${D.AUTO_SCORE}:${String(e)}:${o}`,
			label: "Compute marker placement",
			workspaceId: a.name,
			signal: t.signal,
			run: async (n) => {
				const l = i?.inputs === o ? i.byDate : await this.computeFilePlacement(s, t, a, n);
				return await this.storeFilePlacement(e, o, l, a, {
					...t,
					signal: n.signal
				}) ? (n.progress(r.availableDates.length, r.availableDates.length), nm(a, e, o, l, n.signal)) : /* @__PURE__ */ new Map();
			}
		}) : /* @__PURE__ */ new Map();
	}
	async filePlacementState(e, t, n) {
		const i = await ge(e, n), s = tm.get(n)?.get(e), [r, l, c] = await Promise.all([
			yt(e, n),
			n.markerProvenance.get(e),
			s ? void 0 : Of(n, e)
		]);
		if (!i) return null;
		const u = await o.waitFor(async function(e, t, n, i) {
			const s = a().scoring(), r = t.ruleset ?? s.placementRuleset, o = /* @__PURE__ */ new Set([Y.VAN_HEES_2015, ...t.algorithm && Ma(t.algorithm) ? [t.algorithm] : []]), l = (e) => "auto_score" === e.username && o.has(e.algorithm ?? ""), c = (i?.rows ?? []).filter((e) => l(e) || r !== R.LEGACY && e.nonwearDecided).map((e) => [e.id, l(e) ? e.lastModifiedAt : e.nonwearSpans ?? e.lastModifiedAt]), { signal: u, choiAxis: d, hasptVariant: p, studySettingsRevision: f, ...m } = t;
			return oe(JSON.stringify({
				v: 2,
				options: m,
				ruleset: r,
				nonwearDetectors: t.nonwearDetectors ?? ca(xa(t.algorithm)),
				choiAxis: t.choiAxis ?? s.choiAxis,
				hasptVariant: t.hasptVariant ?? s.ggirHasptVariant,
				seriesRevision: e.seriesRevision ?? 0,
				dates: e.availableDates,
				diaries: n,
				rows: c
			}));
		}(i, t, r, l));
		if (s?.inputs === u) return {
			fileId: e,
			file: i,
			diaries: r,
			inputs: u,
			cached: s.byDate
		};
		const d = s ? await Of(n, e) : c;
		return {
			fileId: e,
			file: i,
			diaries: r,
			inputs: u,
			cached: d?.inputs === u ? new Map(Object.entries(d.byDate)) : null
		};
	}
	async storeFilePlacement(e, t, n, a, i) {
		if (i.signal?.throwIfAborted(), M(a.name)) return !1;
		const s = await x(a, [
			a.files,
			a.diaryEntries,
			a.markerProvenance,
			a.placementResults,
			a.studySettings
		], async () => {
			if (void 0 !== i.studySettingsRevision && ((await qe(a))?.contentHash ?? null) !== i.studySettingsRevision) return !1;
			const s = await this.filePlacementState(e, i, a);
			return !M(a.name) && s?.inputs === t && (await a.placementResults.put({
				fileId: e,
				policy: 2,
				inputs: t,
				byDate: Object.fromEntries(n)
			}), !0);
		}, i.signal);
		return s && U() === a && ze(e, a), s;
	}
	async storeFilesPlacement(e, n, a, i, s) {
		const r = [], o = await Promise.allSettled(e.map(({ fileId: e, options: t }) => this.filePlacementState(e, t, n))), c = {
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: l()
		}, u = o.flatMap((e) => "fulfilled" === e.status && e.value ? [e.value.file] : []), d = u.flatMap((e) => "ggir_part1" === ne(e.sourceType)?.importWorkerBudget ? [{ size: e.sourceSizeBytes ?? 0 }] : []), p = d.length > 0 && d.length === u.length ? ci(d, c) : {
			...c,
			maxExtraWorkers: Number.POSITIVE_INFINITY
		}, f = await Ua(e.map(({ fileId: e, options: i }, l) => ({
			name: `placement:${String(e)}`,
			cost: 1,
			run: async (c, u) => {
				try {
					const r = new t(), u = o[l];
					if ("rejected" === u.status) throw u.reason;
					const d = u.value;
					if (!d || d.cached) return null;
					const p = await r.computeFilePlacement(d, i, n, a, c, s);
					return {
						fileId: e,
						inputs: d.inputs,
						byDate: p
					};
				} catch {
					return a.signal.throwIfAborted(), u.primary || u.cancel(), r.push(e), null;
				}
			}
		})), {
			createWorker: q,
			extraWorkers: ni(p),
			cancelOperation: () => {},
			...i,
			signal: a.signal
		});
		for (const [t, l] of f.entries()) {
			try {
				l && await this.storeFilePlacement(l.fileId, l.inputs, l.byDate, n, e[t].options) && nm(n, l.fileId, l.inputs, l.byDate, a.signal);
			} catch {
				a.signal.throwIfAborted(), r.push(e[t].fileId);
			}
			a.progress(t + 1, f.length);
		}
		if (r.length > 0) {
			const e = `Marker placement failed for recording ID(s) ${r.sort((e, t) => e - t).map(String).join(", ")}.`;
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
		return vt(async (u) => {
			const d = await dn(o, n, u), p = r ?? (await Pr(n)).csvText, f = void 0 !== i && Ma(t.algorithm), m = [];
			let h, g = l.length;
			const y = new Promise((e) => {
				h = e;
			}).then(async () => {
				if (0 !== m.length) try {
					a.signal.throwIfAborted();
					const e = m.map((e) => e.opts), n = f && i ? await i.placeStoredGgirNights([...d.values()], Ee([...d.values()], t.algorithm), m.map((e) => ({
						options: e.opts,
						...e.anchor
					}))) : await function(e, t = s()) {
						return rt(e, t);
					}(e, i ?? j(a.signal));
					a.signal.throwIfAborted();
					for (const [t, a] of m.entries()) a.resolve(n[t]);
				} catch (e) {
					for (const t of m) t.reject(e);
				}
			}), w = this.beginFileBatch(o, n, a.signal), _ = this.fileBatch(o, n), v = {
				activityDayMemo: _.activityDayMemo,
				days: _.days,
				span: _.span,
				file: _.file,
				diaries: _.diaries,
				markers: _.markers
			};
			_.activityDayMemo = u, _.days = d, _.span = Promise.resolve(zf(d)), _.file = Promise.resolve(e.file), _.diaries = Promise.resolve(e.diaries);
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
						}), n, p, i, f ? (e, t, n) => new Promise((i, s) => {
							m.push({
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
	async autoScoreNight(e, t, n, i, s = U(), r, o, l, c) {
		const u = o ?? j(n.signal);
		n.signal?.throwIfAborted();
		const p = c ?? this.fileBatch(e, s), f = await (p ? p.file ??= ge(e, s) : ge(e, s)), m = Yt(f);
		if (m) return {
			kind: "refused",
			reason: m
		};
		const h = n.ruleset ?? a().scoring().placementRuleset, g = xa(n.algorithm), y = n.nonwearDetectors ?? ca(g), w = n.choiAxis ?? a().scoring().choiAxis, _ = n.sleepPeriodDetection ? ot(n.sleepPeriodDetection) : void 0;
		let v = oa(_, {
			path: g,
			selected: y
		}) ?? null;
		const b = await Oa(e, t, s, (t) => this.placementDay(e, t, s, p), void 0, u);
		if (!b) return {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
		if ("vendor_analysis" === d.find((e) => e.id === n.algorithm)?.execution) {
			const a = {
				fileId: e,
				date: t,
				file: f,
				options: n,
				sleepPeriodDetectionConfig: v,
				db: s,
				batch: p
			}, i = await this.sourceAnalyses.reduce(async (e, t) => await e ?? t.proposeNight?.(a) ?? null, Promise.resolve(null));
			if (i) return i;
		}
		const S = await this.placementDay(e, await Ta(t, void 0, u), s, p), k = await (Nr(this.sourceAnalyses, f, "guiderWindow")?.guiderWindow({
			fileId: e,
			date: t,
			db: s,
			batch: p
		}) ?? null), I = Ja(f?.sourceType, f?.sourceProfileId), x = await $f([b, S], y, w, I, s, n.signal, p?.activityDayMemo), N = await this.scorerVerdict(s, e, n.algorithm, { file: f }, p), T = Ma(n.algorithm), M = T && l ? { kind: "angle-deferred" } : await Ea({
			day: b,
			nextDay: S,
			verdict: N,
			angle: T,
			requireScores: !0,
			missingScoresReason: n.algorithm === Y.LSTM_SLEEP_WAKE ? "No LSTM sleep/wake results are stored for this file. Re-import or reprocess the raw file so the app can compute spectral features and run the ONNX model." : "No algorithm results available",
			choiAxis: w,
			laterDays: async () => [...(p?.days ?? await dn(e, s, p?.activityDayMemo)).values()].filter((e) => e.date > t).sort((e, t) => e.date.localeCompare(t.date)),
			core: u
		});
		if ("refused" === M.kind) return M;
		const z = T ? null : Cf(x);
		if (null !== z) return {
			kind: "refused",
			reason: z
		};
		v = oa(_, {
			path: g,
			selected: y,
			available: x.available,
			dropped: x.dropped
		}) ?? null;
		const $ = pa(x.dropped, g), C = (e) => "refused" === e.kind || null === v && 0 === $.length ? e : {
			...e,
			notes: [...$, ...e.notes],
			sleep_period_detection_config: {
				...e.sleep_period_detection_config ?? {},
				...v ?? {}
			}
		};
		if ("angle" === M.kind || "angle-legacy" === M.kind || "angle-deferred" === M.kind) {
			const o = await this.placementMarker(e, t, n.algorithm ?? null, s, p) ?? await this.placementMarker(e, t, Y.VAN_HEES_2015, s, p), c = o?.sleepMarkers[0], d = null != c?.onsetTimestamp && null != c.offsetTimestamp ? {
				startTimestamp: c.onsetTimestamp,
				endTimestamp: c.offsetTimestamp
			} : null, m = () => c && null != c.onsetTimestamp && null != c.offsetTimestamp ? {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: c.onsetTimestamp,
					offset_timestamp: c.offsetTimestamp,
					marker_type: A.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: [],
				notes: ["HDCZA fallback: no 5s SIB stream available for structured sleep-period fusion", `HDCZA window: ${wn(c.onsetTimestamp)} – ${wn(c.offsetTimestamp)}`],
				decisions: [],
				sleep_period_detection_config: o?.sleepPeriodDetectionConfig ?? v
			} : {
				kind: "refused",
				reason: "No HDCZA sleep window found — re-process the file to regenerate it"
			};
			if ("angle" === M.kind || "angle-deferred" === M.kind) {
				let c = {
					timestamps: /* @__PURE__ */ new Float64Array(),
					activityCounts: /* @__PURE__ */ new Float64Array(),
					sleepScores: /* @__PURE__ */ new Uint8Array()
				};
				if ("angle" === M.kind) {
					const e = await La(M, t, u);
					if ("refused" === e.kind) return e;
					c = e.series;
				}
				const [g, y] = await Promise.all([this.placementDiary(e, t, s, p), p ? p.span ??= Cn(e, s, f?.seriesRevision ?? 0) : Cn(e, s, f?.seriesRevision ?? 0)]), w = g ? await ke(g, y, u) : null, _ = (await yo(n.sensorLocation ?? "wrist", n.hasptVariant ?? a().scoring().ggirHasptVariant, u)).variant, v = function(e) {
					const t = e?.sleepPeriodDetectionConfig?.haspt_variant;
					return Object.values(wt).includes(t) ? t : null;
				}(o), k = null == o ? null : null == v ? `HASPT variant not recorded at import; assumed ${_} from the study setting. Reprocess the file to record it.` : v !== _ ? `HASPT variant at import was ${v}; the study setting now gives ${_}. Placed with ${v}; reprocess the file to apply ${_}.` : null, I = h === R.GGIR_PART4, A = I ? await _e(await this.placementDiaries(e, s, p), void 0, u) : null, x = A?.wakeIsOutBed ? null : $t(w, A?.outBedIsWake ? "diary_out_of_bed_time" : "diary_wake_time"), N = A?.outBedIsWake ? null : $t(w, A?.wakeIsOutBed ? "diary_wake_time" : "diary_out_of_bed_time"), T = {
					...c,
					choiNonwear: null,
					ggirHasptAlgo: v ?? _,
					ggirConfigCsv: r ?? (await Pr(s)).csvText,
					...A?.hasBedlog ? { ggirDiaryHasBedlog: !0 } : {},
					...A?.hasSleeplog ? { ggirDiaryHasSleeplog: !0 } : {},
					diaryBedTime: I ? $t(w, "diary_in_bed_time") : Ut(w),
					diaryOutBedTime: I ? N : Mn(w),
					diaryOnsetTime: I ? $t(w, "diary_onset_time") : xt(w),
					diaryWakeTime: I ? x : Pn(w),
					diaryNaps: w ? Fn(w) : null,
					analysisDate: t,
					onsetMinConsecutiveSleep: 1,
					offsetMinConsecutiveMinutes: 1,
					algorithm: n.algorithm,
					periodGuider: po(n.algorithm, n.periodGuider, n.sleepPeriodDetection),
					...void 0 !== n.sleepPeriodDetection ? { sleepPeriodDetection: n.sleepPeriodDetection } : {},
					...n.scorerPostprocessing ? { scorerPostprocessing: n.scorerPostprocessing } : {},
					ruleset: h,
					epochLengthSeconds: 5,
					hdczaWindow: d
				}, z = "angle-deferred" === M.kind ? await l(T, b, S) : await i(T);
				return "angle-legacy" === z ? m() : C(k && "refused" !== z.kind ? {
					...z,
					notes: [k, ...z.notes]
				} : z);
			}
			return m();
		}
		const [D, E] = await Promise.all([this.placementDiary(e, t, s, p), p ? p.span ??= Cn(e, s, f?.seriesRevision ?? 0) : Cn(e, s, f?.seriesRevision ?? 0)]), F = D ? await ke(D, E, u) : null, { unpacked: O } = M, { timestamps: P, axisY: B, sleepScores: G, eventMarkerTimestamps: L } = O, H = He(n.detectionRule), Z = po(n.algorithm, n.periodGuider, n.sleepPeriodDetection), q = await this.placementMarker(e, t, Y.VAN_HEES_2015, s, p), V = q?.sleepMarkers.find((e) => e.markerType === A.MAIN_SLEEP) ?? q?.sleepMarkers[0], W = null != V?.onsetTimestamp && null != V.offsetTimestamp ? {
			startTimestamp: V.onsetTimestamp,
			endTimestamp: V.offsetTimestamp
		} : null, J = await kn(P, qt({
			day: b,
			file: f
		}), u), K = x.available.some(ma) ? await (p ? p.sensor ??= de(e, s) : de(e, s)) : [], X = Df(va(await fa(x.available, O.nonwearMasksByDetector, {
			offPeriods: K,
			source: I
		}, {
			timestampsSec: P,
			epochLenSec: J
		}, u))), Q = h !== R.LEGACY ? await this.loadPlacementFileContext(e, t, n.algorithm, N, E, s, x.available, K, I, w, n.signal, p) : null, { startIndex: ee, endIndex: te } = await ki(P, t, u);
		if (ee === te) return {
			kind: "refused",
			reason: "No activity data found for this date"
		};
		const ne = P.slice(ee, te), ae = B.slice(ee, te), ie = G.slice(ee, te), se = X.choiNonwear ? X.choiNonwear.slice(ee, te) : null, re = X.nonwearWeight ? X.nonwearWeight.slice(ee, te) : null, oe = X.nonwearMemberFlags ? X.nonwearMemberFlags.slice(ee, te) : null, le = ne[0] ?? 0, ce = ne[ne.length - 1] ?? le;
		return C(await i({
			timestamps: ne,
			activityCounts: ae,
			sleepScores: ie,
			choiNonwear: se,
			...re ? { nonwearWeight: re } : {},
			...oe ? { nonwearMemberFlags: oe } : {},
			diaryBedTime: Ut(F),
			diaryOnsetTime: xt(F),
			diaryWakeTime: Pn(F),
			diaryNaps: F ? Fn(F) : null,
			diaryNonwear: F ? it(F) : null,
			analysisDate: t,
			onsetMinConsecutiveSleep: H.onsetN,
			offsetMinConsecutiveMinutes: H.offsetN,
			algorithm: n.algorithm,
			periodGuider: Z,
			...void 0 !== n.sleepPeriodDetection ? { sleepPeriodDetection: n.sleepPeriodDetection } : {},
			...n.scorerPostprocessing ? { scorerPostprocessing: n.scorerPostprocessing } : {},
			ruleset: h,
			nonwearDetectors: X.nonwearDetectors,
			epochLengthSeconds: J,
			hdczaWindow: W,
			eventMarkerTimestamps: L.filter((e) => e >= le && e <= ce + 60),
			actiwareRestWindow: k,
			nightStartHour: En(n.nightStartHour),
			nightEndHour: En(n.nightEndHour),
			...Q ? {
				sensorNonwear: Q.deviceOffNonwear.filter((e) => e.startTimestamp <= ce && e.endTimestamp >= le),
				contextDays: Q.contextDays
			} : {}
		}));
	}
	async autoNonwear(e, t, n) {
		if (void 0 === n.threshold) throw new Error("Local auto-nonwear requires a resolved nonwear threshold.");
		const i = U(), r = await Oa(e, t, i, (t) => Et(e, t, i, this.fileBatch(e, i)?.activityDayMemo));
		if (!r) return {
			kind: "refused",
			reason: "No activity data"
		};
		const [o, l, u, d] = await Promise.all([
			Et(e, await Ta(t), i, this.fileBatch(e, i)?.activityDayMemo),
			St(e, t, i),
			de(e, i),
			ge(e, i)
		]), p = a().scoring(), f = Tt(p, d), m = n.nonwearDetectors ?? ("ggir" === xa(f.algorithm) ? p.nonwearDetectorsGgir : f.nonwearDetectorsCounts), h = Ja(d?.sourceType, d?.sourceProfileId), g = await $f([r, o], m, Ia(), h, i, void 0, this.fileBatch(e, i)?.activityDayMemo), y = Cf(g);
		if (null !== y) return {
			kind: "refused",
			reason: y
		};
		const w = await Ea({
			day: r,
			nextDay: o,
			verdict: Te,
			angle: !1,
			requireScores: !1,
			missingScoresReason: "",
			choiAxis: Ia(),
			laterDays: () => Promise.resolve([])
		});
		if ("counts" !== w.kind) return {
			kind: "refused",
			reason: "refused" === w.kind ? w.reason : Ca
		};
		const _ = w.unpacked, { timestamps: v, axisY: b } = _, S = v[0] ?? 0, k = v[v.length - 1] ?? S, I = va(await fa(g.available, _.nonwearMasksByDetector, {
			offPeriods: u.filter((e) => e.startTimestamp <= k && e.endTimestamp >= S),
			source: h
		}, {
			timestampsSec: v,
			epochLenSec: await le(v, {
				day: r,
				file: d
			})
		})), A = Df(I), x = Ef(g.available), N = l ? it(l) : [], T = n.existingSleepMarkers, M = await async function(e) {
			if (0 === e.timestamps.length || 0 === e.activityCounts.length) return ye("No activity data");
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
				epoch_length_seconds: e.epochLengthSeconds ?? se,
				threshold: e.threshold ?? 0,
				min_duration_minutes: e.minDurationMinutes ?? 10,
				zero_activity_ratio: .65,
				diary_min_duration_minutes: e.diaryMinDurationMinutes ?? 1,
				...nt(e.nonwearDetectors, e.nonwearWeight, {
					alwaysNameSingle: !0,
					memberFlags: e.nonwearMemberFlags
				})
			}, n = [
				JSON.stringify(t),
				e.timestamps instanceof Float64Array ? e.timestamps : Float64Array.from(e.timestamps),
				e.activityCounts instanceof Float64Array ? e.activityCounts : Float64Array.from(e.activityCounts),
				e.choiNonwear instanceof Uint8Array ? e.choiNonwear : Uint8Array.from(e.choiNonwear ?? [])
			], a = n.slice(1).filter((t) => ArrayBuffer.isView(t) && t !== e.timestamps && t !== e.activityCounts && t !== e.choiNonwear), i = await s().placeNonwearMarkers(c(n, a.map((e) => e.buffer)));
			return i ? {
				kind: "placed",
				nonwear_markers: i.nonwear_markers,
				notes: i.notes
			} : ye("Nonwear placement is unavailable in this build — reload while online to update the local engine.");
		}({
			timestamps: v,
			activityCounts: b,
			diaryNonwear: N,
			choiNonwear: x ? null : A.choiNonwear,
			nonwearDetectors: A.nonwearDetectors,
			...A.nonwearWeight ? { nonwearWeight: A.nonwearWeight } : {},
			...A.nonwearMemberFlags ? { nonwearMemberFlags: A.nonwearMemberFlags } : {},
			sensorNonwearPeriods: x ? u.filter((e) => e.startTimestamp <= k && e.endTimestamp >= S).sort((e, t) => e.startTimestamp - t.startTimestamp).map((e) => [e.startTimestamp, e.endTimestamp]) : [],
			existingSleepMarkers: T,
			analysisDate: t,
			threshold: n.threshold
		});
		return "refused" === M.kind ? M : {
			kind: "placed",
			nonwear_markers: M.nonwear_markers.map((e) => da(e, I?.available.length ?? 0)),
			notes: [...pa(g.dropped, xa(f.algorithm)), ...M.notes]
		};
	}
	async listFileScoringCounts(e, t, n) {
		return this.fileScoringCountsIn(U(), e, t, n);
	}
	async fileScoringCountsIn(e, t, n, a) {
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const { nightStartHour: i, nightEndHour: s } = Kf(a), [r, o] = await Promise.all([e.files.bulkGet([...t]), Kt(t, e)]);
		return Promise.all(t.map(async (t, a) => {
			const l = r[a], c = l?.availableDates ?? await Nn(t, e), u = /* @__PURE__ */ new Map();
			for (const e of o[a]?.rows ?? []) e.username === n && u.set(e.date, pn(u.get(e.date), e));
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
		const i = U(), r = (await ge(e, i))?.nightDifficulty, { nightStartHour: o, nightEndHour: l } = Kf(a);
		if (r?.nightStartHour !== o || r.nightEndHour !== l || !t.every((e) => e in r.byDate)) return null;
		void 0 === r.notRankableReason && s().getComputeIdentity().then(({ sourceRevision: t }) => {
			r.sourceRevision !== String(t) && em(e, i, a);
		}, () => {});
		const [c, u] = await Promise.all([Rn(e, i), Of(i, e)]), d = Ot(c, n), p = Ot(c, ht), f = Lt(c), m = t.filter((e) => (f.get(e)?.size ?? 0) >= 2), h = await af(m.flatMap((e) => [{
			usersForDate: f.get(e),
			kind: "sleep"
		}, {
			usersForDate: f.get(e),
			kind: "nonwear"
		}])), g = new Set(m.filter((e, t) => h[2 * t].disagree || h[2 * t + 1].disagree));
		return t.map((e) => ({
			date: e,
			...Vf(d.get(e), g.has(e), p.get(e), Ff(u, e, p.get(e))),
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
		const r = j(s);
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const l = U(), c = ++this.nextComplexityGenerationToken;
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
				const t = await Rn(e, l), [a, i, s, r, o] = await Promise.all([
					dn(e),
					yt(e),
					Dn(e, l, t),
					kf(e, l),
					ge(e)
				]);
				return [
					Ot(t, n),
					Ot(t, ht),
					a,
					i,
					s,
					Lt(t),
					Sf(t),
					r,
					o
				];
			}, [p, m, h, g, y, w, _, v, b] = "function" == typeof l.transaction ? await l.transaction("r", [
				l.markers,
				l.activityDays,
				l.diaryEntries,
				l.sensorNonwear,
				l.dailyGgirSummaries,
				l.files
			], async () => {
				if (U() !== l) throw new Error("The local workspace changed before difficulty inputs could be read.");
				const e = await d();
				if (U() !== l) throw new Error("The local workspace changed while difficulty inputs were being read.");
				return e;
			}) : await d(), S = zf(h), k = new Map((await be(g, S, r)).map((e) => [e.analysisDate, e])), { nightStartHour: I, nightEndHour: A } = Kf(a), N = t.filter((e) => (w.get(e)?.size ?? 0) >= 2), T = await af(N.flatMap((e) => [{
				usersForDate: w.get(e),
				kind: "sleep"
			}, {
				usersForDate: w.get(e),
				kind: "nonwear"
			}]), r), M = new Set(N.filter((e, t) => T[2 * t].disagree || T[2 * t + 1].disagree)), R = await Of(l, e), z = (e) => t.map((t) => ({
				date: t,
				...Vf(p.get(t), M.has(t), m.get(t), Ff(R, t, m.get(t))),
				complexity_pre: e(t),
				complexity_post: null
			})), $ = b?.nightDifficulty;
			$?.nightStartHour === I && $.nightEndHour === A && t.every((e) => e in $.byDate) && (s?.throwIfAborted(), i(z((e) => $.byDate[e] ?? null)));
			const C = [], D = [...t], E = await Ui(D, r), F = new Map(D.map((e, t) => [e, E[t] ?? !1])), O = Ee(h.values()), P = /* @__PURE__ */ new Map();
			for (const n of t) {
				s?.throwIfAborted();
				const t = await Mf(h, n, O, r, P);
				if (!t) continue;
				const { timestamps: a, axisY: i, sleepScores: o, nonwearResults: l, temperature: c, detachNonwear: u, ggirTimestamps: d, ggirAnglez: p } = t, f = Pf(a, a.length), m = Pf(i, f.length), g = jf(o, f.length);
				if (0 === f.length || 0 === m.length || 0 === g.length) continue;
				const w = k.get(n), S = _.get(n) ?? null, I = await jn((t) => {
					const a = lt(xt(w), t), i = lt(Pn(w), t);
					return {
						naps: w ? Fn(w).map(([e, n]) => ({
							onset_time: lt(e, t),
							offset_time: lt(n, t)
						})).filter((e) => null != e.onset_time) : [],
						nonwear: w ? it(w).map(([e, n]) => [lt(e, t), lt(n, t)]).filter((e) => null != e[0] && null != e[1]).map(([e, t]) => ({
							start_time: e,
							end_time: t
						})) : [],
						onset: a,
						wake: i,
						inBed: lt(Ut(w), t),
						outBed: lt(Mn(w), t),
						guiderTargets: Gf(n, a, i, S, We(e), t)
					};
				}, new Ae(r)), A = I.naps, x = I.nonwear, N = f[0] ?? 0, T = f[f.length - 1] ?? N, M = I.onset, R = I.wake, z = v.get(n)?.calibration?.errorEnd;
				C.push({
					analysis_date: n,
					epoch_length_seconds: await kn(f, qt({
						day: h.get(n),
						file: b
					}), r),
					timestamps: f,
					activity_counts: m,
					sleep_scores: g,
					choi_nonwear: jf(l, f.length),
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
					is_weekend: F.get(n) ?? null,
					guider_targets: I.guiderTargets,
					anglez: Bf(f, d, p),
					light: [],
					temperature: Pf(c, f.length),
					heart_rate: [],
					detach_nonwear: jf(u, f.length),
					calibration_error: "number" == typeof z && Number.isFinite(z) ? z : null,
					imputed_fraction: null,
					hdcza_window: S
				});
			}
			let j, B;
			try {
				if (C.length > 0) {
					const n = {
						config: { signals: {
							night_start_hour: I,
							night_end_hour: A
						} },
						days: C
					}, a = {
						config: n.config ?? null,
						days: n.days.map((e) => ({
							analysis_date: e.analysis_date,
							epoch_length_seconds: e.epoch_length_seconds,
							timestamps: e.timestamps
						}))
					}, i = r, u = await i.getComputeIdentity(), d = await Wp({
						runtimeIdentity: u,
						difficultyRequestWireJson: hp(n),
						signalsRequestWireJson: yp(n),
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
					}), ...f], h = await tf(e, d.generationKey, l) ?? await tf(e, (await Wp({
						runtimeIdentity: Nf(u),
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
						projectionInput: Hf(h),
						difficultyByDate: Zf(h),
						signalsByDate: qf(h),
						computeIdentity: h.runtimeIdentity,
						projectionRevision: Lf(h),
						evidence: Uf(h)
					};
					else {
						s?.throwIfAborted();
						const p = Qf(l, d.generationKey, s, () => r.computeFileDifficulty(m));
						B = p.release;
						const f = await p.run;
						if (s?.throwIfAborted(), !Tf(u, await i.getComputeIdentity())) throw new Error("The local scoring runtime changed while difficulty was being computed. Re-run the calculation.");
						if (Rf(f.byDate, n.days)) {
							const n = await async function(e) {
								try {
									(!Number.isInteger(e.fileId) || e.fileId <= 0) && Ip();
									const t = await async function(e) {
										"sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || Ip(), null !== e.sourceContentHash && Ap(e.sourceContentHash), Rp(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || Ip(), Ap(e.difficultyRequestSha256), Ap(e.signalsRequestSha256), await zp(e.difficultyRequestWireJson, e.difficultyRequestSha256), await zp(e.signalsRequestWireJson, e.signalsRequestSha256);
										const t = Zp(e.difficultyRequestWireJson, e.signalsRequestWireJson);
										Ap(e.generationKey);
										const { generationKey: n, ...a } = e;
										return await Vp(a) !== e.generationKey && Ip(), t;
									}(e.identity), n = Tp(e.projectionInput), a = Tp(e.difficultyByDate), i = null == e.signalsByDate ? null : Tp(e.signalsByDate);
									qp(t, n, a, i);
									const s = await Mp(n), r = await Mp(a), o = null === i ? null : await Mp(i);
									Kp(s, e.expectedHashes?.projectionSha256), Kp(r, e.expectedHashes?.difficultyResultSha256), Kp(o, e.expectedHashes?.signalsResultSha256);
									const l = (/* @__PURE__ */ new Date()).toISOString(), c = e.createdAt ?? l, u = e.updatedAt ?? c;
									xp(c), xp(u), Date.parse(u) < Date.parse(c) && Ip();
									const d = {
										fileId: e.fileId,
										generationKey: e.identity.generationKey,
										evidenceContractId: e.identity.evidenceContractId,
										difficultyMethodId: e.identity.difficultyMethodId,
										signalsMethodId: e.identity.signalsMethodId,
										requestContractId: e.identity.requestContractId,
										sourceContentHash: e.identity.sourceContentHash,
										runtimeIdentity: Tp(e.identity.runtimeIdentity),
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
									}, p = await Jp(d);
									return Kp(p, e.expectedHashes?.recordSha256), {
										...d,
										recordSha256: p
									};
								} catch (t) {
									if (t instanceof bp) throw t;
									return Ip();
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
							const i = await async function(e, t = U(), n = "fresh", a) {
								"fresh" !== n && "restore" !== n && Ip();
								const i = await o.waitFor(Xp(e));
								return ia([t.files, t.complexityEvidence], async () => {
									const e = await t.files.get(i.fileId);
									Qp(i, e);
									const a = await t.complexityEvidence.where("[fileId+generationKey]").equals([i.fileId, i.generationKey]).first();
									if (a) {
										const e = await o.waitFor(Xp(a));
										if (r = i, (s = e).generationKey !== r.generationKey || s.projectionSha256 !== r.projectionSha256 || s.difficultyResultSha256 !== r.difficultyResultSha256 || s.difficultyRequestSha256 !== r.difficultyRequestSha256 || s.signalsRequestSha256 !== r.signalsRequestSha256 || s.sourceContentHash !== r.sourceContentHash) throw new Sp();
										if (null !== e.signalsResultSha256 && null !== i.signalsResultSha256 && e.signalsResultSha256 !== i.signalsResultSha256) throw new Sp();
										if (null === e.signalsByDate && null !== i.signalsByDate) {
											const n = new Date(Math.max(Date.now(), Date.parse(e.createdAt))).toISOString(), a = {
												...e,
												signalsByDate: i.signalsByDate,
												signalsResultSha256: i.signalsResultSha256,
												updatedAt: n
											}, s = await o.waitFor(Jp(a)), r = {
												...a,
												recordSha256: s
											};
											return await t.complexityEvidence.put(r), await ef(r, "signals_enriched", 0), {
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
										if (a.length > 5) throw new bp(!0);
										if (a.length < 5) return;
										if ("fresh" === n) return;
										a.sort((e, t) => {
											const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
											return 0 !== n ? n : (t.id ?? 0) - (e.id ?? 0);
										});
										const i = a[a.length - 1];
										if (i && Date.parse(t.createdAt) < Date.parse(i.createdAt)) throw new kp();
									}(t, i, n);
									const l = { ...i };
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
										const s = i.slice(5).map((e) => e.id).filter((e) => void 0 !== e);
										return s.length > 0 && await a.bulkDelete(s), s.length;
									}(t, u.fileId, n);
									return await ef(u, "inserted", d), {
										record: u,
										disposition: "inserted",
										evicted: d
									};
								}, t, a);
							}(n, l, "fresh", s);
							"inserted" === i.disposition && await async function(e, t, n) {
								try {
									await ce.recordWorkspaceDurably(V.SYSTEM_RECALCULATION, {
										subject: "night_complexity_generation",
										generationKey: e.generationKey,
										difficultyResultSha256: e.difficultyResultSha256,
										dateCount: Object.keys(e.difficultyByDate).length
									}, t, n) || console.warn("[local-data-source] Complexity evidence was saved, but its audit event is still pending.");
								} catch {
									console.warn("[local-data-source] Complexity evidence was saved, but its audit event could not be recorded.");
								}
							}(i.record, l, s), j = {
								token: c,
								evidenceDb: l,
								coveredDates: [...new Set(t)].sort(),
								signalRequest: null == i.record.signalsByDate ? m : null,
								projectionInput: Hf(i.record),
								difficultyByDate: Zf(i.record),
								signalsByDate: qf(i.record),
								computeIdentity: i.record.runtimeIdentity,
								projectionRevision: Lf(i.record),
								evidence: Uf(i.record)
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
			} catch (f) {
				s?.throwIfAborted();
				const t = this.latestComplexityTokenByFile.get(e);
				if (this.disposed || null == t || t === c) throw f;
				j = await this.awaitNewerComplexitySnapshot(e, c);
			} finally {
				B?.();
			}
			s?.throwIfAborted(), u(j), this.latestComplexityTokenByFile.get(e) === c && (s?.throwIfAborted(), this.publishComplexitySnapshot(e, j, s), this.complexityFailureByFile.delete(e));
			let G = j;
			if (this.latestComplexityTokenByFile.get(e) !== c) {
				const t = this.complexityGenerationByFile.get(e);
				if (t && t.token !== c) G = await t.promise;
				else {
					const t = this.complexityFailureByFile.get(e);
					if (void 0 !== t && t.token === this.latestComplexityTokenByFile.get(e)) throw t.error;
					const n = this.complexitySnapshotByFile.get(e);
					if (!n) throw new Error("A newer local difficulty generation replaced this result.");
					G = n;
				}
			}
			const L = G.difficultyByDate;
			if (G === j && (0 === C.length || null !== j.computeIdentity)) {
				const n = [...h.values()].map(ut), a = 0 === C.length && n.some((e) => e.ggir) && n.every((e) => e.ggir || 0 === e.timestamps.length), i = {
					nightStartHour: I,
					nightEndHour: A,
					byDate: Object.fromEntries(t.map((e) => [e, L[e]?.difficulty ?? null])),
					sourceRevision: String((j.computeIdentity ?? await r.getComputeIdentity()).sourceRevision),
					...a ? { notRankableReason: "GGIR nights are not ranked by difficulty: the difficulty core reads 60 s activity counts and sleep scores, and a GGIR folder holds 5 s ENMO, anglez and SIB only." } : {}
				};
				if (JSON.stringify(b?.nightDifficulty) !== JSON.stringify(i)) try {
					s?.throwIfAborted(), await x(l, [l.files], () => l.files.update(e, { nightDifficulty: i }), s);
					for (const t of Yf) t(e, l);
					s?.throwIfAborted();
				} catch {
					s?.throwIfAborted(), console.warn("[local-data-source] Stored night difficulty could not be written.");
				}
			}
			return z((e) => L[e]?.difficulty ?? null);
		} catch (f) {
			throw this.latestComplexityTokenByFile.get(e) === c && this.complexityFailureByFile.set(e, {
				token: c,
				error: /* @__PURE__ */ new Error("The newest local difficulty generation failed.")
			}), d(f), f;
		} finally {
			this.complexityGenerationByFile.get(e)?.token === c && this.complexityGenerationByFile.delete(e);
		}
	}
	async loadAdjacentMarkers(e, t, n) {
		const a = (await ge(e))?.availableDates?.slice().sort() ?? [], i = a.indexOf(t);
		if (i < 0) return null;
		const s = i > 0 ? a[i - 1] ?? null : null, r = i < a.length - 1 ? a[i + 1] ?? null : null, [o, l] = await Promise.all([s ? mt(e, s, n) : null, r ? mt(e, r, n) : null]), c = (e) => (e?.sleepMarkers ?? []).map((e) => ({
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
		const n = U(), a = await It(e, t, void 0, n);
		if (0 === e) return a;
		const i = await je(e, t, n);
		return [...a, ...i].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
	}
	static isRecordInView(e, t, n) {
		return e.fileId === t && e.analysisDate === n || 0 !== t && Le(e, t, n);
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
		const i = await this.auditRecordsForView(t, n), s = (a ? i.filter((e) => e.username === a) : i).filter((e) => "number" == typeof e.id), r = e("audit_log_csv", "local"), o = await bt(s), l = function(e) {
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
				w(String(u.id)),
				w((/* @__PURE__ */ new Date(1e3 * u.clientTimestamp)).toISOString()),
				w(u.action),
				w(wf(null === t ? "" : _f(t, u.action), u.action, t, l)),
				w(u.username),
				w(String(u.fileId)),
				w(u.analysisDate ?? ""),
				w(null == u.studyId ? "" : String(u.studyId)),
				w(u.sessionId),
				w(String(u.sequence)),
				w(u.eventHash ?? ""),
				w(u.previousHash ?? ""),
				w(null === t ? "" : JSON.stringify(t)),
				w(n?.basis ?? "unanchored"),
				w(void 0 === n ? "" : Ye(n.state)),
				w(void 0 === n || "unanchored" === n.basis ? "" : JSON.stringify(n.state))
			].join(","));
		}
		return new Blob([`${c.join("\n")}\n`], { type: "text/csv;charset=utf-8" });
	}
	async verifyAuditChain(e, n) {
		const a = await nn();
		return {
			...await on(a),
			total_rows: a.length,
			rows_for_view: a.filter((a) => t.isRecordInView(a, e, n)).length
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
		const a = t.signalRequest, i = t.computeIdentity, r = t.evidence, l = t.evidenceDb, c = this.complexitySignalGenerationByFile.get(e);
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
				if (!Tf(i, d)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), c();
				const p = await u.computeFileSignals(a), f = await u.getComputeIdentity();
				if (!Tf(i, f)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), c();
				if (!Rf(p.byDate, JSON.parse(a[0]).days)) throw new Error("The local scoring runtime returned incomplete night-signal evidence.");
				if (this.disposed) throw new Error("The local workspace changed before night-signal evidence could be saved.");
				const m = n();
				if (!m) return null;
				if (m.token !== t.token) return m;
				if (m.signalsByDate) return m;
				const h = await async function(e, t = U(), n) {
					(!Number.isInteger(e.fileId) || e.fileId <= 0) && Ip(), Ap(e.generationKey);
					const a = Tp(e.signalsByDate), i = await Mp(a);
					return Kp(i, e.signalsResultSha256), ia([t.files, t.complexityEvidence], async () => {
						const n = await t.complexityEvidence.where("[fileId+generationKey]").equals([e.fileId, e.generationKey]).first();
						if (!n) throw new bp();
						const s = await o.waitFor(Xp(n));
						if (Qp(s, await t.files.get(s.fileId)), null !== s.signalsResultSha256) {
							if (s.signalsResultSha256 !== i) throw new Sp();
							return {
								record: s,
								disposition: "deduplicated",
								evicted: 0
							};
						}
						const r = new Date(Math.max(Date.now(), Date.parse(s.createdAt))).toISOString(), l = {
							...s,
							signalsByDate: a,
							signalsResultSha256: i,
							updatedAt: r
						}, c = await o.waitFor(Jp(l)), u = await o.waitFor(Yp({
							...l,
							recordSha256: c
						}));
						return await t.complexityEvidence.put(u), await ef(u, "signals_enriched", 0), {
							record: u,
							disposition: "signals_enriched",
							evicted: 0
						};
					}, t, n);
				}({
					fileId: e,
					generationKey: r.generationKey,
					signalsByDate: p.byDate
				}, l), g = n();
				if (!g) return null;
				if (g.token !== t.token) return g;
				if (g.signalsByDate) return g;
				const y = {
					...g,
					signalRequest: null,
					projectionInput: Hf(h.record),
					difficultyByDate: Zf(h.record),
					signalsByDate: qf(h.record),
					computeIdentity: h.record.runtimeIdentity,
					projectionRevision: Lf(h.record),
					evidence: Uf(h.record)
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
			plot_intervals: Af(r ?? void 0, s ?? void 0, t, a?.projectionRevision ?? void 0)
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
			!1 !== a.datesStatus && fo(e, ["dates-status", t]), fo(e, ["local-dates-status", t]), !1 !== a.fileQuality && fo(e, ["file-quality"]), fo(e, ["analysis-summary"]), fo(e, ["adjacent-markers"]), fo(e, [
				"audit-log",
				t,
				n
			]), fo(e, ["actogram-markers", t]), fo(e, [
				"night-stored-variant",
				t,
				n
			]), fo(e, ["local-export-file-stats"]), fo(e, ["local-export-circadian-coverage"]), function() {
				co += 1;
				for (const e of uo) e();
			}();
		})(a, e, t, {
			datesStatus: !p,
			fileQuality: !1
		});
		const f = c ?? U();
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
	async unscoreNight(e, t, n, i, s, r, o, l) {
		const c = o ?? U(), u = nf(c, {
			username: n || "anonymous",
			studyId: a().scoring().selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, l);
		return await Zn({
			fileId: e,
			date: t,
			username: n || "anonymous",
			algorithm: i,
			detectionRule: s,
			expected: r,
			signal: this.fileBatch(e, c)?.signal
		}, c, u), null;
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
			fo(e, o);
		});
	}
	async patchDateStatus(e, t, n) {
		const { fileId: a, date: i, username: s, workspaceScope: r } = t;
		for (const o of e.getQueryCache().findAll({ queryKey: ["dates-status", a] })) {
			const t = o.queryKey, l = o.state.data;
			if (t[2] === this.sourceKey && (t[3] !== r || t[4] !== (s || "anonymous"))) continue;
			if (o.state.isInvalidated) continue;
			if (!o.isActive()) {
				fo(e, t);
				continue;
			}
			const c = t[4], u = o.state.dataUpdatedAt;
			try {
				if (!l || t[2] !== this.sourceKey || "string" != typeof c) throw new Error("not a local status list");
				const s = await Wf(a, i, c, n);
				if (o.state.dataUpdatedAt !== u) continue;
				e.setQueryData(t, (e) => e?.map((e) => e.date === i ? {
					...e,
					...s
				} : e));
			} catch {
				fo(e, t);
			}
		}
	}
	async ingestFile(e, t, n) {
		const { processLocalFile: i } = await import("./local-processing-Bb1z_tpj.js"), s = a().scoring(), r = this.operationProcessingOptions, o = r?.devicePreset ?? s.devicePreset, l = r?.skipRows ?? s.skipRows, c = r?.choiAxis ?? s.choiAxis, u = r?.columnMapping ?? s.columnMapping, d = r?.countEpochSeconds ?? (30 === s.epochLengthSeconds ? 30 : 60);
		e.name.toLowerCase().endsWith(".csv") && o && "actigraph" !== o && "geneactiv" !== o && bf(o, u);
		const p = U(), f = await i(e, o ?? "actigraph", l ?? 10, t, c ?? "vector_magnitude", u, n, {
			...r ? {} : cr(s),
			countEpochSeconds: d,
			sleepPeriodDetectionConfig: ot(s.sleepPeriodDetection),
			...this.operationProcessingOptions
		});
		return f.alreadyImported || (em(f.fileId, p, void 0, n), function(e, t, n) {
			W({
				kind: D.PHYSICAL_ACTIVITY,
				key: `${D.PHYSICAL_ACTIVITY}:${String(e)}`,
				label: "Store activity answers",
				workspaceId: t.name,
				signal: n,
				rerun: !0,
				run: (n) => vt(async (i) => {
					const [{ computeLocalPhysicalActivityAnalysis: s, physicalActivityStoreAnalysisOptions: r }, { createPhysicalActivityWorkspaceRepository: o, loadPhysicalActivityWorkspaceDays: l }] = await Promise.all([import("./local-physical-activity-analysis-DKLXmDPR.js"), import("./physical-activity-workspace-days-50JqzWg_.js")]);
					if (n.signal.throwIfAborted(), n.progress(0, 2), U() !== t) return;
					const c = r(a().scoring());
					await s({
						...c,
						dbOverride: t,
						activityDayMemo: i,
						onlyFileIds: [e],
						signal: n.signal
					}), n.signal.throwIfAborted(), n.progress(1, 2), await l({
						username: c.username,
						maskPolicy: c.maskPolicy,
						repository: o(t, i),
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
		return (t ? await Rt(e, t) : await Je(e)).map(If);
	}
};
const om = [
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
], lm = om.filter((e) => "observed" !== e && "technically_unusable" !== e && "corrupt" !== e), cm = [
	"insufficient_still_windows",
	"required_calibration_evidence_unavailable",
	"calibration_evidence_unusable"
];
function um(e, t, n, a) {
	const i = (/* @__PURE__ */ new Date()).toISOString(), s = function(e, t) {
		if (!e) return null;
		const n = function(e) {
			const t = [], { resolution_id: n, factory_parameters_availability: a, factory_parameters_artifact: i, auto_calibration_availability: s, auto_calibration_execution: r, selected_source: o, fallback_source: l, fallback_reason: c, fallback_policy_execution: u, refusal: d } = e;
			/\S/.test(n) || t.push("resolution_id must be non-blank"), om.includes(a) || t.push(`factory_parameters_availability '${a}' is not an ObservationAvailability`), om.includes(s) || t.push(`auto_calibration_availability '${s}' is not an ObservationAvailability`);
			const p = [
				o,
				l,
				d
			].filter((e) => void 0 !== e).length;
			if (1 !== p && t.push(`exactly one of selected_source/fallback_source/refusal is required, found ${String(p)}`), "observed" === a && void 0 === i && t.push("observed factory_parameters requires factory_parameters_artifact"), "observed" !== a && void 0 !== i && t.push("non-observed factory_parameters must not carry factory_parameters_artifact"), "observed" === s && void 0 === r && t.push("observed auto_calibration requires auto_calibration_execution"), "observed" !== s && void 0 !== r && t.push("non-observed auto_calibration must not carry auto_calibration_execution"), "factory_parameters" === o && "observed" !== a && t.push("selected_source=factory_parameters requires observed factory evidence"), "auto_calibration" === o && "observed" !== s && t.push("selected_source=auto_calibration requires observed auto-calibration evidence"), void 0 === l || void 0 !== c && void 0 !== u || t.push("fallback_source requires fallback_reason and fallback_policy_execution"), void 0 !== l || void 0 === c && void 0 === u || t.push("fallback provenance is only allowed alongside fallback_source"), d) {
				cm.includes(d.code) || t.push(`refusal.code '${d.code}' is not a CalibrationRefusalCode`), "insufficient_still_windows" === d.code && ("auto_calibration" !== d.blocked_source && t.push("insufficient_still_windows must block auto_calibration"), "technically_unusable" !== d.availability && t.push("insufficient_still_windows must use availability technically_unusable")), "required_calibration_evidence_unavailable" !== d.code || lm.includes(d.availability) || t.push(`required_calibration_evidence_unavailable cannot use availability '${d.availability}'`), "calibration_evidence_unusable" === d.code && "technically_unusable" !== d.availability && "corrupt" !== d.availability && t.push(`calibration_evidence_unusable cannot use availability '${d.availability}'`);
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
const dm = "Re-import this file to compute GGIR's invalid mask.", pm = "Hip HDCZA needs the longitudinal angle (anglex or angley), which this recording lacks on GGIR's grid; no night was placed.", fm = "nonwear_detector_unavailable";
function mm(e) {
	return e.isInvalidNight || e.sleepMarkers.some((e) => function(e, t = !1) {
		return "auto" !== e.source || function(e, t = !1) {
			if (!0 === e.edited || t) return !0;
			const n = e.placement;
			return lo(e.onsetTimestamp, n?.onset_timestamp) || lo(e.offsetTimestamp, n?.offset_timestamp);
		}(e, t);
	}(e));
}
async function hm(e, t, n, a) {
	return e.nightIntervalOverlap(t, n, Float64Array.from(a, ([e]) => e), Float64Array.from(a, ([, e]) => e), Float64Array.from(a, ([, , e]) => void 0 !== e && void 0 === e.unavailable ? e.weight : 0));
}
function gm(e, t) {
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
async function ym(e, t, n, a) {
	const i = a.map(async ([, , a]) => {
		if (!a?.memberFlags || !a.timestamps) return [];
		const { memberFlags: i } = a, s = await e.epochsOverlapping(Float64Array.from(a.timestamps).subarray(0, i.length), 60, t, n);
		return s ? e.nonwearContributors([...i], zt(a.detectors), s[0], s[1]) : [];
	});
	return zt([...new Set((await Promise.all(i)).flat())]);
}
async function wm(e, t, n, a, i, s, r) {
	const o = _a(t, n), l = Object.fromEntries(Object.entries(o).map(([e, t]) => [e, new Uint8Array(t)])), c = await le(e, { day: t }, r), u = await fa(i, l, {
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
async function _m(e, t, n = [], a = [], i = {}, r = null, o = s()) {
	const l = [], c = n.map(([e, t]) => ({
		startTimestamp: e,
		endTimestamp: t
	}));
	for (const [s, u] of Object.entries(e)) {
		const e = t[s]?.timestamps;
		e && 0 !== e.length && l.push(...await wm(e, {
			nonwearResults: u.nonwear.buffer,
			nonwearResultsChoi2011: u.nonwearChoi2011?.buffer ?? null,
			detachNonwear: u.detachNonwear?.buffer ?? null,
			...i[s]
		}, "", c, a, r, o));
	}
	return l;
}
async function vm(e, t, n, a = Ke, i) {
	return jn((i) => {
		if (!e) return [];
		const s = [];
		for (const { start: r, end: o } of pt(e)) {
			if (!r || !o) continue;
			const e = i.resolveSpan(r, o, t, ue.daytime, a);
			e && s.push({
				markerType: A.NAP,
				markerIndex: n + s.length + 1,
				onsetTimestamp: e[0],
				offsetTimestamp: e[1]
			});
		}
		return s;
	}, new Ae(i));
}
function bm(e) {
	const t = e instanceof Error ? e.message : "";
	return t.startsWith("runGgirPart3:") ? t : t.includes("timed out") ? `it timed out after ${String(S / 6e4)} minutes` : t.includes("is not a function") ? "this build's actours WASM has no runGgirPart3 export" : "the actours WASM runtime failed (out of memory or a Rust panic)";
}
async function Sm(e, t, n, i = [], r = /* @__PURE__ */ new Map(), o, l, c, d = "wrist", f = U(), m, h, g, y, w, v) {
	const b = f, k = l?.ggirConfig ?? await Pr(b), I = t.length;
	if (0 === I) return null;
	const x = r.values().next().value;
	x && Xt(e, x.importMappingProvenance);
	const N = h ?? s(), T = g ?? (() => _(N)), M = await yo(d, o?.variant, N), R = M.variant, z = M.sensorLocation, $ = {
		...c ?? {},
		haspt_variant: R,
		hdcza_proposal_revision: 6,
		ggir_config_sha256: k.sha256
	}, C = l?.angley5s, D = l?.anglex5s, E = C && C.length === I ? C : void 0, F = D && D.length === I ? D : void 0, O = l?.invalid5s?.length === I ? l.invalid5s : void 0, P = void 0 !== w && void 0 !== O;
	if (void 0 === O) return dm;
	const j = "hip" === z && !E && !F;
	if (j && (console.warn("[local-processing] Hip HDCZA was skipped because no aligned longitudinal axis was available."), !P)) return pm;
	let G = !1;
	const L = l?.dstRuns ?? [], H = O, Z = l?.activity5s?.length === I ? l.activity5s : void 0;
	u(m, "before local HASPT placement");
	const q = await B(N, (e) => e.runGgirPart3({
		anglez: t,
		ggirConfigCsv: k.csvText,
		hasibCounts: pe(k.csvText, l?.zeroCrossings5s),
		...F ? { anglex: F } : {},
		...E ? { angley: E } : {},
		...Z ? { enmo: Z } : {},
		invalid: H,
		startTsEpochSec: n,
		hasptAlgo: R,
		...void 0 !== o?.config ? { hasptConfig: o.config } : {},
		..."hip" !== z || F && E ? {} : { longitudinalAxis: E ? 2 : 1 },
		...l?.timezone ? { timezone: l.timezone } : {}
	}), {
		ms: S,
		label: `local ${R} placement`,
		signal: m,
		cancel: T
	}).then((e) => ({
		result: e,
		failure: null
	}), (e) => (p(e, m, `local ${R} placement`), console.warn("[local-processing] GGIR Part 3 failed for this recording."), {
		result: null,
		failure: bm(e)
	}));
	if (q.result && P && w(q.result.part3Sib5s), j) return pm;
	if (!q.result) return `GGIR Part 3 (${R}) failed: ${q.failure}`;
	const V = q.result.part3SptNights, W = await N.ggirIndicesToWallClockMs(Uint32Array.from(V.flatMap((e) => [e.onsetIdx, e.wakeIdx])), 1e3 * n, [...L], l?.wallClockMs ? Float64Array.from(l.wallClockMs) : void 0), J = V.map((e, t) => ({
		onsetTimestamp: W[2 * t] / 1e3,
		offsetTimestamp: W[2 * t + 1] / 1e3,
		analysisDate: e.analysisDate
	}));
	for (const { onsetTimestamp: s, offsetTimestamp: _, analysisDate: S } of J) {
		u(m, "before local HASPT marker placement");
		const t = await mt(e, S, ht, Y.VAN_HEES_2015, null, b);
		if (t && mm(t)) continue;
		const n = await hm(N, s, _, i), o = gm(n.seconds, i), l = 0 === o.available.length && 0 === o.dropped.length ? $ : {
			...$,
			nonwear_detectors_available: o.available,
			nonwear_detectors_dropped: o.dropped.map(({ detector: e, reason: t }) => ({
				detector: e,
				reason: t
			}))
		}, f = pa(o.dropped, "ggir"), h = (e) => [e, ...f].join("; "), g = n.weightedFraction, w = g > 0 && o.available.length > 1 ? await ym(N, s, _, i) : null, k = await vm(r.get(S) ?? null, S, 1, We(e), N), I = aa(null, d), x = [{
			markerType: A.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: s,
			offsetTimestamp: _
		}, ...k].map((e) => ({
			...e,
			source: "auto",
			settingsHash: I
		}));
		u(m, "before local HASPT marker persistence"), await a().nights.writeHeadless({
			signal: m,
			fileId: e,
			date: S,
			expected: na(t),
			username: "auto_score",
			sleepMarkers: x,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: h(`${R} SPT: ${wn(s)} → ${wn(_)}` + (k.length > 0 ? `; ${k.length} diary nap(s)` : "") + (g > 0 ? `; selected-detector nonwear overlap ${Math.round(100 * g)}%` : "") + (w ? ` from ${ya(w, o.available.length)}` : "")),
			algorithm: Y.VAN_HEES_2015,
			sleepPeriodDetectionConfig: l
		}, b, {
			...y ? { binding: y } : {},
			events: () => y ? [{
				action: "auto_score_applied",
				payload: Ln({
					algorithm: Y.VAN_HEES_2015,
					sleepPeriodDetection: c ?? null,
					sleepCount: 1,
					napCount: k.length,
					markers: x
				})
			}] : []
		}).then(() => !0, (e) => (p(e, m, "local HASPT marker persistence"), console.warn("[local-processing] HDCZA marker persistence failed."), G = !0, !1)) && v?.(S);
	}
	return G ? "one or more auto-marker writes failed" : null;
}
const km = /* @__PURE__ */ new Set([
	2,
	5,
	6
]);
function Im(e) {
	return !1 !== e.imputeTimegaps && (null == e.dataFormat || km.has(e.dataFormat)) && (null == e.configtz || e.configtz === e.desiredtz);
}
function Am(e) {
	return `GGIR zone ${e} from the GT3X info.txt TimeZone: the app's assumption, since GGIR takes desiredtz and configtz from its own settings`;
}
async function xm(e, t, n, a, i) {
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
var Nm = class extends Error {
	name = "GgirImportRefusal";
	category;
	constructor(e) {
		super(Tn(e)), this.category = e;
	}
};
function Tm(e, t) {
	const n = Dt(e);
	if (n && (n.notRead && n.notRead.length > 0 && t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR output",
		warning: n.notRead.map((e) => `not read: ${e.path}: ${e.reason}.`).join(" ")
	}), n.refusedNotRead)) throw new Nm("ggir-not-read");
}
function Mm(e, t) {
	const { username: n, selectedStudyId: i } = a().scoring();
	return ce.captureWorkspaceBinding(e, {
		signal: t,
		username: n,
		studyId: i
	});
}
const Rm = /* @__PURE__ */ new WeakMap();
async function zm(e, t, n, a) {
	const i = e.timestampsMs.length;
	if (0 === i || e.enmo5s.length !== i || e.anglez5s.length !== i) throw new Error("GGIR meta RData did not contain aligned metashort timestamp, ENMO, and anglez columns.");
	const s = {
		desiredtz: e.desiredtz ?? void 0,
		dataFormat: e.inspection?.dformc ?? void 0,
		...a ? tn(await n.ggirConfigValues(a)) : {}
	}, { runs: r, storedMs: o, steps: l } = await n.wallClockDstPlaceholders(e.timestampsMs, 1e3 * e.epochSeconds, Im(s)), c = o.filter((e) => !Number.isNaN(e)), u = (e.timestampsMs[0] ?? 0) / 1e3, d = t?.sources.ms2 ? t.nonwear : e.nonwearShort, p = {
		...d.length === i ? { nonwear: d } : {},
		...e.invalidShort.length === e.timestampsMs.length ? { invalid: e.invalidShort } : {}
	}, f = t ? t.sources.ms3 ? t.sib : void 0 : e.part3Sib5s?.length === i ? e.part3Sib5s : void 0, m = await ms(n, o, e.enmo5s, e.anglez5s, {
		...p,
		...t?.sources.ms2 ? { invalid: t.invalid } : {},
		...f ? { sib: f } : {}
	});
	if (t && (Qn(t.sleepWindows), t.sources.ms3 && t.sib.length !== i || t.sources.ms2 && (t.invalid.length !== i || t.nonwear.length > 0 && t.nonwear.length !== i))) throw new Error("GGIR Parts 2–3 do not cover the same 5 s epochs as Part 1.");
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
const $m = /* @__PURE__ */ new WeakMap();
var Cm = class extends Error {};
const Dm = /* @__PURE__ */ new WeakMap();
async function Em(e, t, n, a = !0) {
	let i = Dm.get(t);
	if (i || (i = /* @__PURE__ */ new Map(), Dm.set(t, i)), i.has(e)) {
		const t = i.get(e);
		if (!(t instanceof Cm)) return t;
		if (!a) throw t;
	}
	let s = $m.get(t);
	s || (s = /* @__PURE__ */ new Map(), $m.set(t, s));
	const r = s.get(e);
	if (r) return r;
	const o = (async () => {
		const a = await ge(e, t);
		if (!fe(a)) return null;
		if (0 === (await Nn(e, t)).length) return null;
		const i = await t.ggirResultsBundles.get(e);
		if (!i) return null;
		const s = j(n);
		if (a?.ggirSavedNonwearSettled) return Ya(i.configCsv, s);
		const r = [...(await dn(e, t)).values()].filter((e) => e.ggirTimestamps?.byteLength && e.unifiedNonwearMasks?.[kt.ggir_saved]?.byteLength !== e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), o = r.filter((e) => e.vanHeesNonwear?.byteLength === e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), l = r.filter((e) => !o.includes(e)), c = l.length ? await ee(t, e) : null, u = c?.ms2 ? await s.reviewGgirResults({
			part1: new Uint8Array(c.part1),
			configCsv: c.configCsv,
			ms2: new Uint8Array(c.ms2),
			edits: [],
			crossCheck: !1
		}) : null, d = c && u?.nonwear.length ? (await zm(await s.readGgirMeta(new Uint8Array(c.part1), null, !0), u, s, c.configCsv)).ggirByDate : null, p = [...o.map((e) => ({
			date: e.date,
			unifiedNonwearMasks: {
				...e.unifiedNonwearMasks,
				[kt.ggir_saved]: e.vanHeesNonwear
			},
			vanHeesNonwear: null
		})), ...d ? l.map((e) => {
			const t = d.get(e.date), n = new Float64Array(e.ggirTimestamps);
			if (!t?.nonwear || t.timestamps.length !== n.length || !n.every((e, n) => e === t.timestamps[n])) throw new Cm("Saved GGIR nonwear does not match the stored epoch grid.");
			return {
				date: e.date,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					[kt.ggir_saved]: new Uint8Array(t.nonwear).buffer
				},
				vanHeesNonwear: null
			};
		}) : []];
		return await x(t, [
			t.projectMeta,
			t.activityDays,
			t.physicalActivityFileSummaries,
			t.files
		], async () => {
			await Promise.all(p.map(({ date: a, ...i }) => Xe(e, a, i, t, n))), await t.files.update(e, { ggirSavedNonwearSettled: !0 });
		}, n), p.length, Ya(i.configCsv, s);
	})().then((t) => (i.set(e, t), t)).catch((t) => {
		throw !n?.aborted && t instanceof Cm && i.set(e, t), console.warn("[local-processing] Could not fill saved GGIR nonwear from retained ms2."), t;
	}).finally(() => {
		s.delete(e);
	});
	return s.set(e, o), o;
}
async function Fm(e, t, n, a, i) {
	const s = Dt(e)?.configCsv, { n: r, startSec: o, dstRuns: l, storedMs: c, clockSteps: d, wallClockMs: p, timegaps: f, ggirSib: m, ggirByDate: h } = await zm(t, n, a, await s?.text()), g = [...h.keys()].sort(), y = n ? await async function(e, t) {
		const n = await Promise.all(e.map(async (e) => t.has(e) || t.has(await ((e) => a.nextDate(e))(e) ?? "")));
		return e.filter((e, t) => n[t]);
	}(Wn(n), h) : [], w = y.length > 0 ? y : await Ns(h, a);
	if (0 === g.length) throw new Error("GGIR meta RData did not contain any dated 5 s epochs.");
	const _ = g.flatMap((e) => {
		const t = h.get(e);
		if (!t) return [];
		u(i, `saveActivityDay ${e}`);
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
			...t.nonwear ? n ? { unifiedNonwearMasks: { [kt.ggir_saved]: new Uint8Array(t.nonwear).buffer } } : { vanHeesNonwear: new Uint8Array(t.nonwear).buffer } : {},
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
		clockSteps: d,
		wallClockMs: p,
		timegaps: f,
		rdataConfig: s,
		availableDates: g,
		nightDates: w,
		ggirSib: m,
		dayRecords: _,
		facts: await Promise.all(_.map((e) => Ht(e, a))),
		signalDates: await Hr(0, _, a).catch((e) => (i?.throwIfAborted(), Ft("warn", "GGIR circadian coverage store failed", An(e)), null)),
		placeholders: l.length > 0 ? await xm(a, 1e3 * o, l, {
			anglez: t.anglez5s,
			enmo: t.enmo5s
		}, p) : void 0,
		summaries: n ? await Vn(n, 0, i, a) : [],
		markers: n ? await Kn(n, d, a) : void 0
	};
}
async function Om(e, t, n, a) {
	const i = a ?? await r(e, void 0, n), s = await Qt(i.fullHash, t) ?? await In(i.prefixHash, t, i.fullHash);
	return s?.id ? s : void 0;
}
const Pm = [
	["ms2", "stockMs2"],
	["ms3", "stockMs3"],
	["ms4", "stockMs4"],
	["ms5", "stockMs5"]
];
async function jm(e, t, n) {
	const a = Dt(t);
	if (!a) return null;
	const [i, ...s] = await Promise.all([a.configCsv.text(), ...Pm.map(([e]) => a[e]?.arrayBuffer())]), r = await a.qwindowCsv?.text();
	return n.transaction("rw", [
		n.files,
		n.ggirResultsBundles,
		n.ggirResultsBlobs,
		n.ggirCorrectedValues
	], async () => {
		const [t, o] = await Promise.all([n.ggirResultsBlobs.get(e), n.ggirResultsBundles.get(e)]);
		return t && o ? o.configCsv === i && Pm.every(([e, n], a) => ((e, t) => {
			if (void 0 === e || void 0 === t) return e === t;
			const n = new Uint8Array(e), a = new Uint8Array(t);
			return n.length === a.length && n.every((e, t) => e === a[t]);
		})(t[n] ?? t[e], s[a])) ? !a.resultsCsv || t.resultsCsv ? null : (await n.ggirResultsBundles.update(e, {
			resultsCsv: a.resultsCsv,
			...void 0 !== r && void 0 === t.qwindowCsv ? { qwindowCsv: r } : {}
		}), await n.ggirCorrectedValues.delete(e), await cn(n, [e]), "added") : "different_run" : null;
	});
}
const Bm = {
	none: "File already imported",
	added: "File already imported; GGIR's results files added",
	different_run: "File already imported; this folder holds a different GGIR run of it, so the stored one was kept"
};
async function Gm(e, t, n, a, i, o, l) {
	const d = Rm.get(e);
	Rm.delete(e);
	const f = i?.db ?? U(), m = a?.ggirConfig ?? await Pr(f), h = o ?? s(), g = i ?? {
		db: f,
		attemptId: L(),
		auditBinding: Mm(f, n),
		signal: n,
		recording: await Br(e, n, h)
	};
	u(n, "processGgirMetaRDataFile"), Tm(e, t);
	const y = l ?? (() => {
		_(h);
	});
	t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR meta RData..."
	});
	const { prefixHash: w, fullHash: v } = d?.value?.hashes ?? await r(e, (e) => {
		t?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, n), b = await Om(e, f, n, {
		prefixHash: w,
		fullHash: v
	});
	if (b?.id) {
		const n = await jm(b.id, e, f);
		t?.({
			phase: "complete",
			percent: 100,
			message: Bm[n ?? "none"]
		});
		const a = b.availableDates;
		return await gn(e.name, f), {
			alreadyImported: !0,
			...n ? { ggirResultsFiles: n } : {},
			fileId: b.id,
			availableDates: a,
			sourceType: b.sourceType ?? te.GGIR_5S_UPLOAD
		};
	}
	const k = await tt(e.name, f);
	if (k && "incomplete" !== k.ingestState) throw new Nm(Gt);
	if (t?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing GGIR metashort and metalong..."
	}), u(n, "before reading GGIR RData"), d && "error" in d) throw d.error;
	const I = Dt(e), A = d?.value?.input ?? (I ? await Jn(I) : null), N = d?.value || !A ? void 0 : await B(h, (e) => e.prepareGgirRecording(A), {
		ms: S,
		label: "prepareGgirRecording",
		signal: n,
		cancel: y
	}), T = N && A ? (M = A, null === (R = N.cleanedNightsCsv) ? M : {
		...M,
		cleanedNightsCsv: R
	}) : A;
	var M, R;
	const z = d?.value || T ? void 0 : await e.arrayBuffer();
	u(n, "after reading GGIR RData");
	const $ = d?.value?.meta ?? N?.meta ?? await B(h, (e) => e.readGgirMeta(c(new Uint8Array(z), [z]), m.csvText, !1), {
		ms: 3e5,
		label: "readGgirMeta",
		signal: n,
		cancel: y
	}), C = function(e, t) {
		return t && !t.sources.ms4 && e?.notRead?.some((e) => /(?:^|\/)meta\/ms4\.out\//u.test(e.path)) ? {
			...t,
			importNotices: [...t.importNotices, Xn]
		} : t;
	}(I, d?.value?.review ?? N?.review ?? null), D = d?.value?.computed ?? await Fm(e, $, C, h, n), { n: E, startSec: F, dstRuns: O, storedMs: P, clockSteps: j, wallClockMs: G, timegaps: H, rdataConfig: Z, availableDates: q, nightDates: V, ggirSib: W } = D;
	t?.({
		phase: "storing",
		percent: 55,
		message: "Saving GGIR 5 s epochs..."
	});
	const J = await Wr(g, {
		filename: e.name,
		devicePreset: "ggir_5s_meta",
		epochLengthSeconds: $.epochSeconds,
		availableDates: V,
		fileHash: w,
		sourceContentHash: v,
		sourceSizeBytes: e.size,
		source: "local",
		eventMarkerInstants: [],
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: te.GGIR_5S_UPLOAD,
		...F > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * F)).toISOString() } } : {},
		sourceProfileId: "actoglance.source.ggir_rdata.v1",
		...$.desiredtz ? { ggirTimezone: $.desiredtz } : {},
		...O.length + j.length > 0 ? { ggirClockBasis: (K = H, Y = null != Z, Im(K) ? `GGIR's imputed fall-back hour left out (${Y ? "config.csv: imputeTimegaps TRUE, configtz = desiredtz" : "no config.csv, so GGIR's defaults are assumed"})` : `GGIR's repeated fall-back hour kept as recorded data (${!1 === K.imputeTimegaps ? "imputeTimegaps = FALSE" : null == K.dataFormat || km.has(K.dataFormat) ? `configtz ${K.configtz ?? ""} differs from desiredtz ${K.desiredtz ?? ""}` : `GGIR does not gap-impute data format ${String(K.dataFormat)}`})`) } : {},
		...j.length > 0 ? { ggirClockSteps: j } : {},
		...O.length > 0 ? { ggirDstPlaceholders: D.placeholders } : {}
	}, h);
	var K, Y;
	if ("already_complete" === J.kind) {
		const t = J.record.id;
		if (null == t) throw new Error("Completed local import identity is invalid.");
		const n = await jm(t, e, f);
		return await gn(e.name, f), {
			alreadyImported: !0,
			...n ? { ggirResultsFiles: n } : {},
			fileId: t,
			availableDates: J.record.availableDates,
			sourceType: J.record.sourceType ?? te.GGIR_5S_UPLOAD
		};
	}
	const X = J.guard.fileId;
	let Q = null, ee = !1;
	const ne = !C && !W, ae = await I?.qwindowCsv?.text();
	if (C && T) try {
		const t = T.configCsv ? await Ve(T.configCsv, h) : void 0;
		if (await Jr(g), await he(D.summaries.map((e) => ({
			...e,
			fileId: X
		})), f, n), await x(f, [f.files, f.ggirResultsBundles], async () => {
			await f.ggirResultsBundles.put(Yn(X, I?.recordingFile ?? e.name, T, C, {
				part2Reports: I?.part2Reports,
				personReports: I?.personReports,
				qwindowCsv: ae,
				resultsCsv: I?.resultsCsv
			})), await f.files.update(X, {
				ggirBundleRevision: crypto.randomUUID(),
				ggirSavedNonwearSettled: !0,
				...t ? { ggirNonwearDetector: t } : {}
			});
		}, n), !await ta(X, C, io(a, g.recording), f, !0, j, n, D.markers)) throw new Error("GGIR results markers could not be saved.");
	} catch (me) {
		throw await Yr(g), me;
	}
	const ie = $.invalidShort.length === E ? $.invalidShort : null, se = C ? null : await B(h, (e) => e.runGgirFromEpoch({
		source: "ggir_part1_rdata",
		invalidMask: ie ? "ggir_part2" : "none"
	}, $.anglez5s, $.enmo5s, $.epochSeconds, F, ie ?? new Uint8Array(E), $.desiredtz ?? void 0, m.csvText).catch((e) => (p(e, n, "runGgirFromEpoch (GGIR RData)"), Ft("warn", "GGIR epoch analysis failed", An(e)), ee = !0, null)), {
		ms: S,
		label: "runGgirFromEpoch (GGIR RData)",
		signal: n,
		cancel: y
	});
	if (se?.days?.length) {
		const e = um(se.days, X, void 0, m);
		await Jr(g), await he(e, f, n).catch((e) => {
			Ft("warn", "GGIR daily summary store failed", An(e)), ee = !0;
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
	}(j.length > 0 ? P : $.timestampsMs, $.nonwearShort), oe = new Map((C ? [] : await yt(X, f)).map((e) => [e.analysisDate, e])), le = $.anglez5sImputed?.length === E ? $.anglez5sImputed : $.anglez5s, ce = $.enmo5sImputed?.length === E ? $.enmo5sImputed : $.enmo5s;
	Q = C ? Q : await Sm(X, le, F, re, oe, a?.hasptVariant, {
		activity5s: ce,
		...ie ? { invalid5s: ie } : {},
		dstRuns: O,
		wallClockMs: G,
		...$.desiredtz ? { timezone: $.desiredtz } : {}
	}, oa(a?.sleepPeriodDetectionConfig, ga), io(a, g.recording), f, n, h, y, g.auditBinding);
	const ue = D.dayRecords.map((e) => ({
		...e,
		fileId: X
	}));
	let de = !1;
	await Jr(g);
	const pe = (await Fe(ue, f, D.facts, n).catch((e) => (Ft("warn", "GGIR activity day store failed", An(e)), Vi(e, "saveActivityDay (GGIR RData)"), de = !0, []))).length;
	if (!de && D.signalDates && await Ie(X, q, D.signalDates, f, n).catch((e) => {
		n?.throwIfAborted(), Ft("warn", "GGIR circadian coverage store failed", An(e));
	}), de || pe !== q.length || 0 === pe) throw await Yr(g), /* @__PURE__ */ new Error("Could not save any GGIR RData epochs — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	u(n, "before completing GGIR RData ingest"), await Kr(g);
	const fe = [
		...C?.configWarnings ?? [],
		...C?.importNotices ?? [],
		C?.sources.ms4 && ea(C),
		I && !I.resultsCsv && "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.",
		de && "One or more days of GGIR RData epochs could not be saved.",
		Q && (C ? "GGIR results markers could not be saved." : "Sleep window detection (HDCZA) could not place auto-markers."),
		ee && (C ? "GGIR source summaries could not be saved." : "GGIR daily summaries could not be computed or saved for this GGIR RData file."),
		ne && "GGIR HASIB sleep/wake flags could not be computed."
	].filter(Boolean).join(" ");
	return t?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete",
		...fe ? { warning: fe } : {}
	}), {
		fileId: X,
		availableDates: V,
		sourceType: te.GGIR_5S_UPLOAD,
		...C ? { ggir: {
			...(await import("./ggir-results-import-CUHCsMSz.js").then((e) => e.f)).ggirImportCounts(C, qn(I?.part2Reports, C, I?.recordingFile ?? e.name)),
			bodySite: (await ge(X, f))?.recording?.bodySite
		} } : {}
	};
}
async function Lm(e, t, n, a, i, o, l) {
	const c = o?.db ?? U(), d = l ?? j(i), p = o ?? {
		db: c,
		attemptId: L(),
		auditBinding: Mm(c, i),
		signal: i,
		recording: await Br(e, i, d)
	};
	u(i, "processMappedMimsCsvFile"), a?.({
		phase: "reading",
		percent: 0,
		message: "Reading mapped MIMS CSV..."
	});
	const { prefixHash: f, fullHash: m } = await r(e, (e) => {
		a?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, i), h = await Om(e, c, i, {
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
			sourceType: h.sourceType ?? te.EPOCHS_60S
		};
	}
	const g = await tt(e.name, c);
	if (g && "incomplete" !== g.ingestState) throw new sn();
	a?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing mapped MIMS columns..."
	}), u(i, "before reading mapped MIMS CSV");
	const y = await async function(e, t, n, a) {
		const i = G(await e.text()), r = J(i);
		if (r.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
		const o = r.records, l = o[t]?.text;
		if (!l) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
		const c = v(l), u = Q(l, c), d = Qi(n, u);
		if (d.length > 0) throw new Error($i(d));
		const p = Ms(u, n.datetime_column), f = Ms(u, n.date_column), m = Ms(u, n.time_column), h = Ms(u, n.mims_unit_column), g = Ms(u, n.mims_unit_x_column), y = Ms(u, n.mims_unit_y_column), w = Ms(u, n.mims_unit_z_column), _ = [], b = [], S = [], k = [], I = [], A = [];
		for (let s = t + 2; s <= o.length; s++) {
			const e = o[s - 1];
			if (!e?.text.trim()) continue;
			const t = Q(e.text, c);
			A.push({
				sourceRow: e.sourceRow,
				row: t,
				label: Es(t, p, f, m)
			});
		}
		const x = await (a ?? s()).sourceLabelsWallClockMs(A.map(({ label: e }) => e)), N = A.findIndex((e, t) => !Number.isFinite(x[t] ?? NaN));
		if (N >= 0) throw new Error(`Could not parse timestamp on row ${String(A[N].sourceRow)} of the mapped MIMS CSV.`);
		for (const [s, { row: v }] of A.entries()) _.push(x[s]), b.push(Fs(v, h)), S.push(Fs(v, g)), k.push(Fs(v, y)), I.push(Fs(v, w));
		if (0 === _.length) throw new Error("The mapped MIMS CSV did not contain any data rows.");
		return {
			timestampsMs: new Float64Array(_),
			mimsUnit: null === h ? /* @__PURE__ */ new Float64Array() : new Float64Array(b),
			mimsUnitX: null === g ? /* @__PURE__ */ new Float64Array() : new Float64Array(S),
			mimsUnitY: null === y ? /* @__PURE__ */ new Float64Array() : new Float64Array(k),
			mimsUnitZ: null === w ? /* @__PURE__ */ new Float64Array() : new Float64Array(I)
		};
	}(e, t, n, d);
	u(i, "after reading mapped MIMS CSV");
	const w = te.EPOCHS_60S, _ = await async function(e, t) {
		const n = /* @__PURE__ */ new Map(), a = t.timestampsMs.length, i = Os(t.mimsUnit, a), s = Os(t.mimsUnitX, a), r = Os(t.mimsUnitY, a), o = Os(t.mimsUnitZ, a), l = Float64Array.from(t.timestampsMs, (e) => e / 1e3);
		for (const [c, u] of await ls(e, l)) n.set(c, {
			timestamps: cs(l, u, 0),
			...i ? { mimsUnit: cs(i, u, NaN) } : {},
			...s ? { mimsUnitX: cs(s, u, NaN) } : {},
			...r ? { mimsUnitY: cs(r, u, NaN) } : {},
			...o ? { mimsUnitZ: cs(o, u, NaN) } : {}
		});
		return n;
	}(d, y), b = [..._.keys()].sort(), S = await Ns(_, d);
	a?.({
		phase: "storing",
		percent: 55,
		message: "Saving mapped MIMS epochs..."
	});
	const k = await Wr(p, {
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
	}, d);
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
	const I = k.guard.fileId;
	let A = !1, x = 0;
	for (const s of b) {
		const e = _.get(s);
		if (!e) continue;
		u(i, `saveActivityDay ${s}`);
		const t = /* @__PURE__ */ new Float64Array();
		await Jr(p);
		const n = {
			fileId: I,
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
		await xe(n, c, i).then(() => !0).catch((e) => (Ft("warn", "MIMS activity day store failed", An(e)), Vi(e, "saveActivityDay (mapped MIMS CSV)"), A = !0, !1)) && (x += 1, await Qr(I, [n], c, d, i));
	}
	if (A || x !== b.length || 0 === x) throw await Yr(p), /* @__PURE__ */ new Error("Could not save any mapped MIMS data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return u(i, "before completing mapped MIMS ingest"), await Kr(p), a?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete"
	}), {
		fileId: I,
		availableDates: S,
		sourceType: w
	};
}
function Um(e) {
	const t = e.trim();
	if (!/^\d{4}-\d{2}-\d{2}/.test(t)) return null;
	const n = t.includes("	") ? "	" : ",";
	return t.split(n).length;
}
async function Hm(e, t, n) {
	const a = Math.min(e.size, 16777216);
	let s = Math.min(16384, a);
	for (;;) {
		u(t, "before reading GeneActiv CSV header");
		const r = await i(e, s, n);
		u(t, "after reading GeneActiv CSV header");
		const o = s >= a, l = r.split("\n"), c = o && s >= e.size ? l : l.slice(0, -1);
		for (const e of c) {
			const t = Um(e);
			if (null !== t) return t >= 12;
		}
		if (o) return !1;
		s = Math.min(2 * s, a);
	}
}
export { fs as $, Ar as A, gs as B, Fr as C, Mr as D, zr as E, Cs as F, vs as G, ks as H, zs as I, bs as J, us as K, $s as L, er as M, tr as N, Er as O, nr as P, ws as Q, Ds as R, Pr as S, $r as T, Ss as U, ys as V, _s as W, os as X, Ns as Y, ms as Z, Yr as _, um as a, Vi as at, Br as b, so as c, qi as ct, Jr as d, Ui as dt, Em as ensureSavedGgirNonwear, xs as et, no as f, Kr as g, eo as h, _m as i, Hm as isGeneactivEpochCsv, Wi as it, ar as j, Nr as k, ro as l, Zi as lt, to as m, Am as n, ss as nt, Sm as o, Yi as ot, Wr as p, Gm as processGgirMetaRDataFile, Lm as processMappedMimsCsvFile, As as q, dm as r, Tm as refuseUnimportableGgirRecording, rs as rt, oo as s, Ji as st, xm as t, is as tt, io as u, Hi as ut, Xr as v, Rr as w, jr as x, Hr as y, Is as z };
