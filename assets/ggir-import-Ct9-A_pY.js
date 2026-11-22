import { h as e } from "./ggir-results-types-kmrkPkJO.js";
import { Cn as t, Cr as n, Dn as a, Dt as i, Fr as s, G as r, J as o, Kr as l, L as c, Lr as u, Mr as d, Nr as p, O as f, On as m, Qn as h, S as g, Sn as y, Sr as w, T as _, Tt as v, Ur as b, Vr as S, W as k, X as I, Y as A, Yn as x, Z as T, _r as N, b as M, bt as $, d as z, dr as R, f as D, gr as E, h as C, hr as O, ht as P, ir as F, jr as j, k as B, l as L, lr as G, mr as U, n as Z, nt as H, o as q, p as W, pt as V, r as J, rr as K, s as Y, st as X, tr as Q, ut as ee, vr as te, vt as ne, wt as ae, xr as ie, xt as se, yr as re, yt as oe, z as le } from "./background-jobs-CXps6j4v.js";
import { $n as ce, $r as ue, $t as de, A as pe, An as fe, B as me, C as he, Cr as ge, Ct as ye, D as we, Dn as _e, Dt as ve, E as be, Et as Se, Fn as ke, Ft as Ie, G as Ae, Gn as xe, H as Te, Ht as Ne, In as Me, J as $e, Jn as ze, K as Re, L as De, Lr as Ee, Lt as Ce, M as Oe, Mn as Pe, Mr as Fe, Mt as je, N as Be, Nt as Le, O as Ge, Or as Ue, Ot as Ze, P as He, Q as qe, Qn as We, Qr as Ve, Qt as Je, Rt as Ke, S as Ye, Sr as Xe, St as Qe, Tt as et, U as tt, Un as nt, Ur as at, V as it, Vr as st, W as rt, Wr as ot, Wt as lt, X as ct, Xr as ut, Xt as dt, Y as pt, Yr as ft, Yt as mt, Zn as ht, _ as gt, _n as yt, _r as wt, _t, a as vt, at as bt, b as St, bn as kt, bt as It, c as At, cn as xt, cr as Tt, d as Nt, dn as Mt, dr as $t, dt as zt, ei as Rt, en as Dt, er as Et, et as Ct, f as Ot, ft as Pt, g as Ft, gn as jt, gt as Bt, hn as Lt, ht as Gt, i as Ut, it as Zt, j as Ht, jn as qt, k as Wt, kn as Vt, kr as Jt, kt as Kt, l as Yt, lr as Xt, mn as Qt, mt as en, n as tn, nr as nn, nt as an, o as sn, ot as rn, p as on, pt as ln, q as cn, qn as un, qr as dn, r as pn, rn as fn, rt as mn, s as hn, sr as gn, st as yn, t as wn, tn as _n, tr as vn, tt as bn, u as Sn, ur as kn, ut as In, v as An, vn as xn, vt as Tn, w as Nn, wn as Mn, wr as $n, wt as zn, x as Rn, xr as Dn, xt as En, y as Cn, yn as On, yt as Pn, z as Fn, zt as jn } from "./db-ylhhNiJn.js";
import { C as Bn, D as Ln, E as Gn, O as Un, S as Zn, _ as Hn, a as qn, c as Wn, g as Vn, k as Jn, l as Kn, n as Yn, r as Xn, u as Qn, v as ea, w as ta, x as na, y as aa } from "./ggir-results-import-TRmiz9u_.js";
import { i as ia, t as sa } from "./wal-Dfu9rgTj.js";
import { C as ra, D as oa, S as la, T as ca, a as ua, b as da, d as pa, f as fa, g as ma, h as ha, i as ga, l as ya, n as wa, o as _a, p as va, s as ba, t as Sa, v as ka, w as Ia, x as Aa, y as xa } from "./local-nonwear-unified-CM_IZkiP.js";
import { _ as Ta, a as Na, c as Ma, d as $a, f as za, g as Ra, h as Da, i as Ea, l as Ca, n as Oa, o as Pa, p as Fa, r as ja, s as Ba, t as La, v as Ga } from "./epoch-utils-CsrYKmmm.js";
import { $ as Ua, A as Za, B as Ha, C as qa, D as Wa, E as Va, G as Ja, H as Ka, J as Ya, K as Xa, M as Qa, N as ei, O as ti, P as ni, S as ai, T as ii, U as si, V as ri, W as oi, X as li, Y as ci, Z as ui, _ as di, b as pi, et as fi, g as mi, h as hi, j as gi, k as yi, nt as wi, p as _i, q as vi, tt as bi, v as Si, x as ki, z as Ii } from "./local-export-worker-CjBDcX0Y.js";
import { S as Ai, b as xi, d as Ti, i as Ni, m as Mi, n as $i, o as zi, r as Ri, s as Di, w as Ei, x as Ci, y as Oi } from "./ingest-kLoVn8B1.js";
import { t as Pi } from "./valid-day-criteria-D6g-TF6l.js";
const Fi = "Review Data Settings > CSV Settings before opening this file.";
function ji(e) {
	return `Column-mapped CSV mapping could not be applied: ${e.map((e) => e.message).join(" ")} ${Fi}`;
}
function Bi(e, t, n) {
	const a = Object.values(t);
	if (!a.includes(e)) throw new Error(`${n} must be one of ${a.join(", ")} (bundle reported "${e}")`);
	return e;
}
function Li(e) {
	return Bi(e, N, "temporalBasis");
}
const Gi = {
	full_calibrated_signal: "https://w3id.org/sleep-scoring-ontology/method/actours/full-pipeline-file/1",
	epoch_series_part3to5: "https://w3id.org/sleep-scoring-ontology/method/actours/ggir-epoch-parts-3-to-5/1"
}, Ui = "actours.compute.file.v1", Zi = Number.MAX_SAFE_INTEGER;
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
		if (Number.isInteger(e) && Math.abs(e) > Zi) throw new TypeError("method parameter integers must be exactly representable in IEEE-754 binary64");
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
const qi = /* @__PURE__ */ new Set([
	"id",
	"fileId",
	"createdAt",
	"updatedAt"
]);
async function Wi(e) {
	const t = [...e].sort((e, t) => e.analysisDate.localeCompare(t.analysisDate)).map((e) => Et(Hi(function(e) {
		const t = {};
		for (const [n, a] of Object.entries(e)) qi.has(n) || void 0 !== a && (t[n] = a);
		return t;
	}(e))));
	return le(`[${t.join(",")}]`);
}
const Vi = {
	accelerator: "cpu_only",
	concurrency: {
		mode: "serial",
		max_threads: null
	},
	vectorization: "baseline"
};
async function Ji(e, t = W(), n) {
	const a = t, i = await async function(e) {
		if (!/^[0-9a-f]{64}$/.test(e.sourceContentSha256)) throw new Error("sourceContentSha256 must be 64 lowercase hex characters");
		if (!Number.isInteger(e.sourceSizeBytes) || e.sourceSizeBytes < 1) throw new Error("sourceSizeBytes must be a positive integer");
		if (!/^[0-9a-f]{64}$/.test(e.runtimeBuild.artifactSha256)) throw new Error("runtimeBuild.artifactSha256 must be 64 lowercase hex characters");
		const t = e.dailyRows.length, n = 0 === t ? [] : [`daily_summary_stream:sha256:${await Wi(e.dailyRows)}`], a = Vi, i = Gi[e.computePath], s = await async function(e) {
			if (!e.methodSpecificationId.trim()) throw new Error("methodSpecificationId must be nonblank");
			const t = (n = e.params, Et(Hi(n)));
			var n;
			return {
				parameter_set_hash: await le(t),
				method_specification_id: e.methodSpecificationId,
				canonicalization_version: "rfc8785_jcs_v1",
				canonical_parameters_json: t,
				parameter_schema_reference: e.parameterSchemaReference ?? null
			};
		}({
			methodSpecificationId: i,
			params: {
				file_compute_contract: Ui,
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
			file_compute_contract_version: Ui,
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
		return le(Et({
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
	return z(a, [a.localExecutions], async () => {
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
async function Ki(e, t = A()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
async function Yi(e, t = Pi, n) {
	const a = await Z(n).validWearDays(Float64Array.from(e), t);
	return Array.from(a, (e) => 0 !== e);
}
async function Xi(e, t = Pi, n) {
	return Z(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
}
function Qi(e, t) {
	const n = [
		...zn(e, as, t),
		...et(e, as),
		...ve(e, as, t)
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
		...zn(e, as, t),
		...et(e, as),
		...ve(e, as, t)
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
		target_seconds: v,
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
	return 0 === t.length ? new Uint8Array(a.length) : e.projectLabelsOntoGrid(t, n, v, a);
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
	const r = void 0 !== i.sib && i.sib.length === t.length;
	for (const [y, w] of [["anglex", i.anglex], ["angley", i.angley]]) if (w?.length && w.length !== t.length) throw new Error(`The GGIR ${y} series has ${String(w.length)} epochs where the 5 s grid has ${String(t.length)}.`);
	const o = Boolean(i.anglex?.length), l = Boolean(i.angley?.length), c = void 0 !== i.nonwear && i.nonwear.length === t.length, u = void 0 !== i.invalid && i.invalid.length === t.length, d = void 0 !== i.mimsUnit && i.mimsUnit.length === t.length, p = void 0 !== i.mimsUnitX && i.mimsUnitX.length === t.length, f = void 0 !== i.mimsUnitY && i.mimsUnitY.length === t.length, m = void 0 !== i.mimsUnitZ && i.mimsUnitZ.length === t.length, h = (e, t) => t.map((t) => (e[t] ?? 0) > 0 ? 1 : 0), g = Float64Array.from(t, (e) => e / 1e3);
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
	return 30 !== t && (x(e)?.hasRawAccel ?? !1);
}
async function ks(e) {
	if (e.timestampsMs) {
		const t = 1e3 / e.sampleRate, n = e.timestampsMs[0] !== e.firstTsMs, a = e.timestampsMs.some((n, a) => Math.abs(n - e.firstTsMs - a * t) > .5 * t);
		if (n || a) return console.warn("[local-processing] Native 30-second counts were skipped because raw preparation changed the sample timeline."), null;
	}
	const t = e.cancelOperation ?? (() => {
		I(e.wasmApi);
	}), n = await q(e.wasmApi, (t) => t.neishabouriCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: M,
		label: `neishabouriCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}), a = await q(e.wasmApi, (t) => t.zeroCrossingCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: M,
		label: `zeroCrossingCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}).catch((t) => (_(t, e.signal, `zeroCrossingCounts 30s (${e.label})`), console.warn("[local-processing] The optional 30-second zero-crossing pass failed."), null));
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
async function Ts(e, t, n = 60) {
	(await e.irregularInternalDays(Float64Array.from(t), n)).forEach(() => {
		console.warn("[local-processing] A possible DST transition or partial internal day was detected; review the in-app import warning.");
	});
}
async function Ns(e, t, n) {
	const a = [...e], i = n && n.storedEpochSeconds < v ? n : void 0, s = i ? await Promise.all(a.map(([, e]) => async function(e, t, n) {
		const { series: a } = await e.aggregateEpochSeries({
			target_seconds: v,
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
	return r.sort(), Number.isFinite(o) && Number.isFinite(l) ? je(r, o, l, void 0, t) : r;
}
function Ms(e) {
	return /[",\r\n]/.test(e) ? `"${e.replace(/"/g, "\"\"")}"` : e;
}
function $s(e, t) {
	if (!t) return null;
	const n = Se(t), a = e.findIndex((e) => Se(e) === n);
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
function Rs(e, t) {
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
function Es(e, t) {
	const n = Date.parse(`${t}T00:00:00Z`) / 1e3, a = [];
	for (const i of Array.from(e)) i >= n && i < n + 86400 && a.push(i);
	return Float64Array.from(a);
}
async function Cs(e, t, n, a) {
	g(a, "standardizing mapped CSV");
	const i = U(await e.text());
	g(a, "standardizing mapped CSV");
	const s = R(i);
	if (s.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
	const r = s.records, o = r[t]?.text;
	if (!o) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
	const l = K(o), c = G(o, l), u = Qi(n, c);
	if (u.length > 0) throw new Error(ji(u));
	const d = $s(c, n.datetime_column), p = $s(c, n.date_column), f = $s(c, n.time_column), m = $s(c, n.activity_column), h = $s(c, n.axis_x_column), y = $s(c, n.axis_z_column), w = $s(c, n.vector_magnitude_column), _ = [
		{
			header: "ENMO",
			idx: $s(c, n.enmo_column)
		},
		{
			header: "AngleZ",
			idx: $s(c, n.anglez_column)
		},
		{
			header: "GGIR_SIB",
			idx: $s(c, n.ggir_sib_column)
		},
		{
			header: "GGIR_NONWEAR",
			idx: $s(c, n.ggir_nonwear_column)
		},
		{
			header: "MIMS_UNIT",
			idx: $s(c, n.mims_unit_column)
		},
		{
			header: "MIMS_UNIT_X",
			idx: $s(c, n.mims_unit_x_column)
		},
		{
			header: "MIMS_UNIT_Y",
			idx: $s(c, n.mims_unit_y_column)
		},
		{
			header: "MIMS_UNIT_Z",
			idx: $s(c, n.mims_unit_z_column)
		}
	].filter((e) => null !== e.idx), v = $s(c, n.event_marker_column), b = null === v ? null : [];
	if (null === m) throw new Error("Column-mapped CSV mapping requires an activity/counts column before import.");
	if (null === d && (null === p || null === f)) throw new Error("Column-mapped CSV mapping requires Date/time, or both Date and Time, before import.");
	const S = null !== d ? ["Datetime", "Axis1"] : [
		"Date",
		"Time",
		"Axis1"
	];
	null !== h && S.push("Axis2"), null !== y && S.push("Axis3"), null !== w && S.push("Vector Magnitude"), S.push(..._.map((e) => e.header));
	const k = [S.join(",")];
	for (let A = t + 1; A < r.length; A += 1) {
		(A - t - 1) % 1e3 == 0 && (await Y(), g(a, "standardizing mapped CSV"));
		const e = r[A];
		if (!e.text.trim()) continue;
		const n = G(e.text, l), i = null !== d ? [n[d] ?? "", n[m] ?? ""] : [
			null === p ? "" : n[p] ?? "",
			null === f ? "" : n[f] ?? "",
			n[m] ?? ""
		];
		null !== h && i.push(n[h] ?? ""), null !== y && i.push(n[y] ?? ""), null !== w && i.push(n[w] ?? "");
		for (const t of _) i.push(n[t.idx] ?? "");
		b && null !== v && b.push(zs(n[v])), k.push(i.map(Ms).join(","));
	}
	const I = new Blob([`${k.join("\n")}\n`], { type: "text/csv" });
	return {
		name: e.name,
		lastModified: e.lastModified,
		size: I.size,
		arrayBuffer: () => I.arrayBuffer(),
		text: () => I.text(),
		slice: (e, t) => I.slice(e, t),
		...b ? { eventMarkerRows: Uint8Array.from(b) } : {}
	};
}
function Os(e, t, n, a) {
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
function Fs(e, t) {
	return e.length === t && e.some((e) => Number.isFinite(e)) ? e : void 0;
}
const js = {
	ggirHasptVariant: u.ggir_haspt_variant,
	ggirHasibVariantsEnabled: u.ggir_hasib_variants_enabled,
	ggirHasibVariants: [...u.ggir_hasib_variants],
	ggirHasibCountSource: u.ggir_hasib_count_source,
	ggirHasibCountEpochSeconds: u.ggir_hasib_count_epoch_seconds
}, Bs = new Set(p), Ls = new Set(d), Gs = new Set(j);
function Us(e) {
	const t = e ?? {}, n = t.ggir_haspt_variant, a = t.ggir_hasib_variants_enabled, i = t.ggir_hasib_variants, s = t.ggir_hasib_count_source, r = t.ggir_hasib_count_epoch_seconds, o = Array.isArray(i) ? Array.from(new Set(i.filter((e) => "string" == typeof e && Ls.has(e)))) : [...js.ggirHasibVariants];
	return {
		ggirHasptVariant: "string" == typeof n && Bs.has(n) ? n : js.ggirHasptVariant,
		ggirHasibVariantsEnabled: "boolean" == typeof a ? a : js.ggirHasibVariantsEnabled,
		ggirHasibVariants: o,
		ggirHasibCountSource: "string" == typeof s && Gs.has(s) ? s : js.ggirHasibCountSource,
		ggirHasibCountEpochSeconds: "number" == typeof r && Number.isInteger(r) && r >= 1 ? r : js.ggirHasibCountEpochSeconds
	};
}
function Zs(e) {
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
function Hs(e) {
	return !Dt(e);
}
const qs = /* @__PURE__ */ new WeakMap();
async function Ws(e, t) {
	const n = await Ri(e, t);
	return {
		data: n,
		nights: await Va(n?.actiwareIntervals, Z())
	};
}
function Vs(e, t, n) {
	if (!n) return Ws(e, t);
	let a = qs.get(n);
	return a || qs.set(n, a = Ws(e, t)), a;
}
const Js = {
	windowForNight: async (e) => Hs(e.file) ? async function({ fileId: e, date: t, db: n, batch: a }) {
		return ii((await Vs(e, n, a)).nights, t);
	}(e) : null,
	tables: (e) => [e.actiwareFileData],
	stampInput: async (e, t) => ({ rest: (await t.actiwareFileData.get(e))?.actiwareIntervals }),
	fingerprint: (e) => ({ actiwareRestWindow: e })
}, Ks = "actiware";
function Ys(e) {
	return [...Zt(e)].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort();
}
async function Xs(e, t, n) {
	try {
		const a = await t.actiwareFileData.get(e);
		if (!a?.actiwareSleepWake) return;
		const i = (await t.actiwareStatisticsInputs.get(e))?.input, s = (await t.files.get(e))?.seriesRevision ?? 0, r = Ys(await t.markers.where("fileId").equals(e).toArray());
		let o = null;
		try {
			o = await _i(await Va(a.actiwareIntervals, Z(n)), i, r, (e) => Z(n).actiwareIntervalStatistics(e));
		} catch (yd) {
			n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), kn("error", "Actiware statistics recalculation failed", {
				...Xt(yd),
				file_id: e
			});
		}
		await D(t, [
			t.actiwareFileData,
			t.actiwareStatisticsInputs,
			t.files,
			t.markers
		], async () => {
			const n = await t.actiwareFileData.get(e), l = (await t.actiwareStatisticsInputs.get(e))?.input;
			if (!n || ((await t.files.get(e))?.seriesRevision ?? 0) !== s) return;
			if (JSON.stringify(l) !== JSON.stringify(i) || JSON.stringify(n.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
			const c = Ys(await t.markers.where("fileId").equals(e).toArray());
			JSON.stringify(c) === JSON.stringify(r) && (await (null === o ? Ni(t, e) : Di(t, e, o, !1)), await sn(t, [e]));
		}, n);
	} catch (yd) {
		n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), kn("error", "Actiware statistics recalculation failed", {
			...Xt(yd),
			file_id: e
		});
		try {
			await D(t, [t.actiwareFileData, t.files], async () => {
				await Ni(t, e), await sn(t, [e]);
			}, n);
		} catch {
			throw yd instanceof Error ? yd : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
		}
	}
}
async function Qs(e, t, n, { analysisParadigm: a, signal: i, read: s }) {
	const r = s ? s.file : await Ye(e, n);
	if (Hs(r)) {
		if (dt(r, a) === dn.rest_intervals) return Xs(e, n, i);
		try {
			const a = await n.actiwareFileData.get(e);
			if (!a?.actiwareSleepWake) return;
			const s = (await n.actiwareStatisticsInputs.get(e))?.input, r = (await n.files.get(e))?.seriesRevision ?? 0, o = await n.markers.where("fileId").equals(e).toArray(), l = !0 === a.actiwareStatisticsNeedsRecompute, c = (e, t) => JSON.stringify(e.filter((e) => e.date === t).map((e) => [
				e.id,
				e.contentHash,
				e.lastModifiedAt,
				e.sleepMarkers
			])), u = (e) => JSON.stringify(e.map((e) => [
				e.markerType,
				e.onsetTimestamp,
				e.offsetTimestamp
			])), d = Zt(o.filter((e) => l || t.has(e.date))), p = l ? new Map([...[...d].map(([e, t]) => [e, t.sleepMarkers]), ...t]) : t, f = new Map([...p].flatMap(([e, t]) => {
				const n = d.get(e);
				return n && u(n.sleepMarkers) !== u(t) ? [] : [[e, {
					sleepMarkers: [...t],
					isInvalidNight: n?.isInvalidNight ?? !1
				}]];
			}));
			if (0 === f.size) return;
			const m = new Map([...f.keys()].map((e) => [e, c(o, e)]));
			let h = null;
			try {
				h = await mi({
					file: a,
					statisticsInput: s
				}, f, (e) => Z(i).actiwareIntervalStatistics(e), Z(i));
			} catch (yd) {
				i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), kn("error", "Actiware statistics recalculation failed", {
					...Xt(yd),
					file_id: e
				});
			}
			await D(n, [
				n.actiwareFileData,
				n.actiwareStatisticsInputs,
				n.files,
				n.markers
			], async () => {
				const t = await n.actiwareFileData.get(e), o = (await n.actiwareStatisticsInputs.get(e))?.input;
				if (!t || ((await n.files.get(e))?.seriesRevision ?? 0) !== r) return;
				if (JSON.stringify(o) !== JSON.stringify(s) || JSON.stringify(t.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
				const u = await n.markers.where("fileId").equals(e).toArray(), d = new Map([...f].filter(([e]) => c(u, e) === m.get(e)));
				if (0 === d.size) return;
				if (null === h) return await Ni(n, e), void await sn(n, [e]);
				const g = di(t, h), y = g.length > 0 ? await S.waitFor(ri(g, Z(i))) : void 0, w = Si(t, h), _ = w.length > 0 ? await S.waitFor(Va(w, Z(i))) : void 0, v = hi(t, h, d.keys(), {
					rowDateOf: y,
					rowNights: _
				});
				await Di(n, e, v, !0 === t.actiwareStatisticsNeedsRecompute && !(l && d.size === p.size)), await sn(n, [e]);
			}, i);
		} catch (yd) {
			i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), kn("error", "Actiware statistics recalculation failed", {
				...Xt(yd),
				file_id: e
			});
			try {
				await D(n, [n.actiwareFileData, n.files], async () => {
					await Ni(n, e), await sn(n, [e]);
				}, i);
			} catch {
				throw yd instanceof Error ? yd : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
			}
		}
	}
}
const er = "An earlier audit record is still being written. The rest interval was not changed; try again.";
async function tr(e, t, n, a) {
	return (await nr(e, n, a, (n, { core: a }) => ai(n, e.date, t, a))).sleepMarkers;
}
async function nr({ fileId: e, date: t, actor: n }, a, i, s) {
	const r = await a.actiwareFileData.get(e), o = (await a.actiwareStatisticsInputs.get(e))?.input, l = r?.actiwareSleepWake;
	if (!l || !o) throw new ki("This recording has no Actiware analysis settings, so its rest intervals cannot be edited.");
	const c = Z(i), u = r?.actiwareIntervals ?? [], d = await Va(u, c), p = await s(d, {
		epochs: o.epochs,
		params: l.params,
		grid: {
			startTimestamp: l.startTimestamp,
			epochSeconds: l.epochSeconds
		},
		core: c
	}), f = [...p.intervals], m = Ys(await a.markers.where("fileId").equals(e).toArray()), h = ti(u, f), g = yi(h);
	if (0 === g.length) return {
		sleepMarkers: gi(d, t, m.includes(t)),
		removed: 0,
		history: null
	};
	const y = await _i(p, o, m, (e) => c.actiwareIntervalStatistics(e)).catch(Ti), w = We.captureWorkspaceBinding(a, {
		username: n.username,
		studyId: n.studyId
	});
	if (!await We.settleWritesForDb(a, w)) throw new ki(er);
	let _ = !1;
	return await D(a, [
		a.actiwareFileData,
		a.markers,
		a.files,
		a.placementResults,
		a.projectMeta,
		a.auditLog
	], async () => {
		const n = await a.actiwareFileData.get(e);
		if (JSON.stringify(n?.actiwareIntervals ?? []) !== JSON.stringify(u)) throw new ki("That rest interval changed since it was shown; reload the night.");
		_ = null === y || JSON.stringify(Ys(await a.markers.where("fileId").equals(e).toArray())) !== JSON.stringify(m);
		const s = Wa(n?.actiwareRemovedRests ?? [], h, f);
		await zi(a, e, {
			intervals: f,
			removedRests: s
		}, _ ? null : y ?? []), await a.placementResults.delete(e), await Pe([e], a, i), await sn(a, [e]), await g.reduce(async (n, a) => {
			if (await n, !await We.recordFileEventDurably({
				fileId: e,
				analysisDate: t,
				action: Q.ACTIWARE_REST_EDITED,
				payload: { ...a }
			}, w)) throw new ki(er);
		}, Promise.resolve());
	}, i), _ && await Xs(e, a, i), {
		sleepMarkers: gi(p, t, m.includes(t)),
		removed: h.take.filter((e) => "rest" === e.kind).length,
		history: {
			undo: (e, t = a, n) => tr(e, ni(h), t, n),
			redo: (e, t = a, n) => tr(e, h, t, n)
		}
	};
}
const ar = {
	nightRecord: {
		sleepPeriodsToSave: async ({ fileId: e, date: t, isInvalidNight: n }, a, i) => Qa(a, await Va((await Ri(e, i))?.actiwareIntervals, Z()), t, n),
		writeEdit: function(e, t, n = W(), a) {
			return nr(e, n, a, (n, a) => qa(n, e.date, t, a));
		}
	},
	sourceAnalysis: {
		id: Ks,
		stores: ["actiwareFileData", "actiwareStatisticsInputs"],
		persistIngest: $i,
		afterRestore: async function({ notCarried: e, db: t }) {
			return (await Promise.all(e.map(async (e) => void 0 === e ? void 0 : t.actiwareFileData.get(e)))).flatMap((e) => e?.actiwareSleepWake ? [] : ["Actiware Sleep/Wake: not in this older backup and could not be rebuilt from it"]);
		},
		covers: Hs,
		followSavedNights: async function({ fileId: e, file: t, nights: n, sleepMarkersChanged: a, analysisParadigm: i, db: s, signal: r, openBatch: o }) {
			const l = a ? void 0 : await s.actiwareFileData.get(e);
			if (a || l?.actiwareStatisticsNeedsRecompute || l?.actiwareSleepWake && !l.actiwareStatistics?.length) {
				const a = o();
				if (a) {
					let e = a.savedNights.get(Ks);
					e || a.savedNights.set(Ks, e = /* @__PURE__ */ new Map());
					for (const [t, a] of n) e.set(t, a);
				} else await Qs(e, n, s, {
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
				await Qs(e, t, a, {
					analysisParadigm: n,
					signal: i
				});
			} catch (yd) {
				kn("error", "Actiware statistics recalculation failed", {
					...Xt(yd),
					file_id: e
				});
			}
		},
		proposeNight: async function({ fileId: e, date: t, file: n, options: a, sleepPeriodDetectionConfig: i, db: s, batch: r }) {
			if (a.algorithm !== O.ACTIWARE_SLEEP_WAKE) return null;
			const o = Hs(n) ? await Vs(e, s, r) : null, l = o?.data, c = o ? ei(o.nights, t) : null, u = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(11, 19), d = l?.actiwareRestProposal?.notes?.[t], p = null !== o && Za(o.nights, t).some((e) => "scorer" === e.origin), f = d && !p ? [`Rest proposal (SCREENS Autoscore): ${d}`] : [], { source_a: m, source_b: h, fusion_policy: g, apply_nonwear_gate: y } = $n(mt({
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
					marker_type: re.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: (c.additionalSleeps ?? []).map((e, t) => ({
					onset_timestamp: e.startTimestamp,
					offset_timestamp: e.endTimestamp,
					marker_type: re.NAP,
					marker_index: t + 2
				})),
				decisions: [],
				sleep_period_detection_config: w,
				notes: [`Actiware sleep interval ${u(c.sleep.startTimestamp)}–${u(c.sleep.endTimestamp)} inside rest interval ${u(c.rest.startTimestamp)}–${u(c.rest.endTimestamp)}, as Actiware sets it.`, ...f]
			};
		},
		hasScorerSettings: async (e, t) => null != (await Ri(e, t))?.actiwareSleepWake,
		afterDiaryChange: {
			label: "Propose rest intervals from the new diary",
			run: async function(e, t, n) {
				try {
					await async function(e, t, n) {
						const a = await t.studySettings.where("key").equals("study").first(), i = a?.extraSettings ?? {}, s = Mt(i.actiware_rest_proposal);
						if (s.rest_autoscore !== ot.screens) return !1;
						const r = await t.files.get(e);
						if (null == r?.id || !xt(r)) return !1;
						const { reanalyzeActiwareFile: o } = await import("./reanalysis-DAuyLkW6.js");
						return (await o({
							...r,
							id: r.id
						}, {
							paradigm: fn(i.analysis_paradigm),
							overrides: _n(i.actiware_analysis),
							proposal: s,
							hasib: Zs(Us(i))?.hasibVariants,
							db: t,
							expectedStudyContentHash: a?.contentHash ?? null,
							services: n
						})).changed;
					}(e, t, n);
				} catch (yd) {
					throw kn("error", "Rest proposal after the diary write failed", {
						...Xt(yd),
						file_id: e
					}), new Error("The rest intervals were not proposed again from the new diary; they still follow the previous diary. Save the study settings to propose them again.", { cause: yd });
				}
			}
		},
		reanalyze: async (e, t, { db: n, expectedStudyContentHash: a, signal: i, services: s }) => {
			if (!xt(e)) return { changed: !1 };
			const { reanalyzeActiwareFile: r, ACTIWARE_NOT_RECONCILED: o } = await S.waitFor(import("./reanalysis-DAuyLkW6.js")), l = await r(e, {
				paradigm: fn(t.analysis_paradigm),
				overrides: _n(t.actiware_analysis),
				proposal: Mt(t.actiware_rest_proposal),
				hasib: Zs(Us(t))?.hasibVariants,
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
	restWindow: Js
}, ir = {
	id: "ggir_saved_folder",
	covers: () => !0,
	stores: [],
	persistIngest: () => Promise.resolve(),
	afterRestore: () => Promise.resolve([]),
	followSavedNights: ({ fileId: e, username: t, db: n, signal: a }) => (pi(e, t, n, a), Promise.resolve())
}, sr = {
	windowForNight: async (e) => function(e) {
		const t = e?.sleepMarkers.find((e) => e.markerType === re.MAIN_SLEEP) ?? e?.sleepMarkers[0];
		return null != t?.onsetTimestamp && null != t.offsetTimestamp ? {
			startTimestamp: t.onsetTimestamp,
			endTimestamp: t.offsetTimestamp
		} : null;
	}(await e.autoScoreMarker(O.VAN_HEES_2015)),
	tables: (e) => [e.markers],
	stampInput: async (e, t) => ({ hdcza: (await t.markers.where("fileId").equals(e).toArray()).filter((e) => "auto_score" === e.username && e.algorithm === O.VAN_HEES_2015).map((e) => ({
		date: e.date,
		windows: e.sleepMarkers.map((e) => [
			e.markerType,
			e.onsetTimestamp,
			e.offsetTimestamp
		])
	})) }),
	fingerprint: (e) => ({ hdczaWindow: e ? [e.startTimestamp, e.endTimestamp] : null })
}, rr = { sleepPeriodsToSave: (e, t) => Promise.resolve(t) }, or = {
	[dn.sleep_periods]: rr,
	[dn.rest_intervals]: ar.nightRecord
}, lr = [ar.sourceAnalysis, ir], cr = {
	hdcza: sr,
	actiware_rest_interval: ar.restWindow
}, ur = Object.assign({
	"../assets/models/lstm_sleep_wake.onnx": "/sleep-scoring-wasm/assets/lstm_sleep_wake-CMNVV_Rk.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba-DjoYpGzg.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa--Jn4_6Dd.onnx",
	"../assets/models/student_lstm_h64_g128_from_lstm_ba.onnx": "/sleep-scoring-wasm/assets/student_lstm_h64_g128_from_lstm_ba-BZ4I7SAE.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_ba.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_ba-CK3CNFjI.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_kappa.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_kappa-Cb_N5vbO.onnx",
	"../assets/models/teacher_lstm_h128_g256_ba.onnx": "/sleep-scoring-wasm/assets/teacher_lstm_h128_g256_ba-CbSChb-h.onnx"
}), dr = ur["../assets/models/lstm_sleep_wake.onnx"] ?? null, pr = "lstm_sleep_wake_regular_best_20260626", fr = "bcaf0f2b3f35638a324fd0058ce4cbab03d8f6574cec33a7a07e3e4e0139a908", mr = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_URL, hr = "configured-url", gr = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_VERSION ?? pr, yr = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SHA256 ?? (!mr && dr ? fr : ""), wr = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SIZE_LABEL ?? "7.4 MB model file", _r = [
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
		version: pr,
		sha256: fr,
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
var vr = class extends Error {
	constructor(e) {
		super(e), this.name = "LstmModelUnavailableError";
	}
};
function br() {
	const e = _r.flatMap((e) => {
		const t = ur[e.assetKey];
		return t ? [{
			...e,
			url: t,
			source: "bundled"
		}] : [];
	}), t = mr ? {
		id: hr,
		label: "Configured URL",
		description: "ONNX model configured by VITE_LSTM_SLEEP_WAKE_ONNX_URL.",
		url: mr,
		version: gr,
		sha256: yr || null,
		sizeLabel: wr,
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
function Sr(e = br()) {
	return mr && mr.length > 0 ? hr : e.find((e) => e.recommended)?.id ?? e[0]?.id ?? null;
}
function kr(e) {
	const t = br(), n = e ?? Sr(t);
	return (t.find((e) => e.id === n) ?? t.find((e) => e.id === Sr(t))) || {
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
function Ir(e) {
	if (!Number.isFinite(e)) throw new vr("LSTM threshold must be a finite number between 0 and 1.");
	return Math.min(1, Math.max(0, e));
}
function Ar(e) {
	const t = Number.parseFloat({
		BASE_URL: "/sleep-scoring-wasm/",
		DEV: !1,
		MODE: "production",
		PROD: !0,
		SSR: !1,
		VITE_BASE_PATH: "/sleep-scoring-wasm/",
		VITE_FORCE_LOCAL_MODE: "true"
	}.VITE_LSTM_SLEEP_WAKE_THRESHOLD ?? "NaN");
	return Number.isFinite(t) ? Ir(t) : e.defaultThreshold;
}
function xr(e) {
	return null != e ? kr(e) : mr && mr.length > 0 ? kr(hr) : kr();
}
async function Tr(e) {
	(function() {
		if (!("caches" in globalThis)) throw new vr("Browser Cache Storage is unavailable, so the LSTM ONNX model cannot be cached.");
	})();
	const t = xr(e), n = function(e) {
		const { url: t } = xr(e);
		if (!t) throw new vr("LSTM ONNX model is not configured. Add frontend/src/assets/models/lstm_sleep_wake.onnx or set VITE_LSTM_SLEEP_WAKE_ONNX_URL.");
		return t;
	}(t.id), a = await (await caches.open(function(e) {
		return `sleep-scoring-lstm-onnx-${e.version}`;
	}(t))).match(n);
	if (!a) throw new vr("LSTM ONNX model has not been downloaded yet.");
	return new Uint8Array(await a.arrayBuffer());
}
function Nr(e) {
	const t = br(), n = e && "object" == typeof e ? e : null, a = "string" == typeof n?.modelId ? n.modelId : null, i = a && t.some((e) => e.id === a) ? a : Sr(t);
	if (!i) return {
		modelId: null,
		threshold: null
	};
	const s = kr(i), r = n?.threshold;
	return {
		modelId: i,
		threshold: "number" == typeof r && Number.isFinite(r) ? Ir(r) : Ar(s)
	};
}
function Mr(e) {
	return Nr({
		modelId: e,
		threshold: null
	}).threshold ?? .5;
}
function $r(e, t) {
	if (0 === e.length) return [];
	const n = [0];
	for (let a = 1; a < e.length; a++) Math.abs(e[a] - e[a - 1] - t) > .001 && n.push(a);
	return n.map((t, a) => ({
		start: t,
		end: n[a + 1] ?? e.length
	}));
}
async function zr(e, t, n, a = ua, i = () => {
	I(e);
}) {
	const s = /* @__PURE__ */ new Map(), r = Math.min(t.x.length, t.y.length, t.z.length);
	if (0 === r || t.sampleRate <= 0) return s;
	const o = a.filter((e) => !ka(e)?.needsModel);
	if (0 === o.length) return s;
	const l = new Float64Array(3 * r);
	for (let u = 0; u < r; u++) l[3 * u] = t.x[u], l[3 * u + 1] = t.y[u], l[3 * u + 2] = t.z[u];
	g(n, `before detectNonwearUnifiedBatch(${o.join(",")})`);
	const c = await q(e, (e) => e.detectNonwearUnifiedBatch(o, {
		raw: l,
		sampleRate: t.sampleRate,
		epochSeconds: t.epochSeconds
	}), {
		ms: M,
		label: `detectNonwearUnifiedBatch(${o.join(",")})`,
		signal: n,
		cancel: i
	}).catch((e) => (_(e, n, `detectNonwearUnifiedBatch(${o.join(",")})`), console.warn("[local-processing] A raw-signal nonwear batch failed."), null));
	if (c) for (const [u, d] of Object.entries(c)) s.set(u, d);
	return s;
}
async function Rr(e, t, n, a, i, s = wa, r = () => {
	I(e);
}) {
	const o = {}, l = s.filter((e) => !ka(e)?.needsModel);
	if (0 === l.length) return o;
	const c = n.map((e) => t[e]).filter((e) => void 0 !== e), u = ds(c.map((e) => e.timestamps)), d = ds(c.map((e) => e.axisY)), p = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
	for (const { start: h, end: y } of $r(u, a)) {
		const t = d.slice(h, y);
		if (0 === t.length) continue;
		g(i, "before count nonwear continuous run");
		const n = await q(e, (e) => e.detectNonwearUnifiedBatch(l, {
			counts: t,
			epochSeconds: a
		}), {
			ms: M,
			label: "count nonwear continuous run",
			signal: i,
			cancel: r
		}).catch((e) => (_(e, i, "count nonwear continuous run"), console.warn("[local-processing] A count-based nonwear batch failed for one contiguous run."), null));
		for (const [i, s] of Object.entries(n ?? {})) {
			if (!s.available || !s.nonwear?.length) {
				p.has(i) || p.set(i, s);
				continue;
			}
			const t = await Aa(s, {
				baseTsSec: u[h],
				epochTimestampsSec: u.slice(h, y),
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
function Dr(e) {
	return null == e ? {} : { [O.OAKLEY_1997]: { oakleyThreshold: e } };
}
async function Er(e, t, n, a, i, s, r, o = () => {
	I(e);
}, l = {}, c = xi) {
	if (0 === c.length) return;
	const u = a.flatMap((e) => n[e] ?? []), d = ds(u.map((e) => e.timestamps)), p = ds(u.map((e) => e.axisY)), f = {}, m = /* @__PURE__ */ new Map();
	for (const { start: w, end: v } of $r(d, i)) {
		const t = p.slice(w, v);
		if (!t || 0 === t.length) continue;
		const n = /* @__PURE__ */ new Map();
		for (const u of c) {
			const a = Ei(u, i);
			if ("gate_needs_30s_epoch" === a.kind) {
				n.set(u, a.response);
				continue;
			}
			g(s, `before scoreEpochs(${u} continuous)`);
			const c = await q(e, (e) => e.scoreEpochs(Ai({
				algorithm: u,
				counts: t,
				epochSeconds: i,
				...r ? { postprocessing: r } : {},
				...l[u] ? { config: l[u] } : {}
			})), {
				ms: M,
				label: `scoreEpochs(${u} continuous)`,
				signal: s,
				cancel: o
			}).catch((e) => (_(e, s, `scoreEpochs(${u} continuous)`), console.warn("[local-processing] A descriptor-driven sleep/wake scorer failed for one contiguous run."), null));
			c && n.set(u, c);
		}
		const a = Ci(n, t.length);
		for (const [e, i] of Object.entries(a)) {
			const t = f[e] ?? new Uint8Array(d.length);
			t.set(i, w), f[e] = t, m.set(e, (m.get(e) ?? 0) + i.length);
		}
	}
	const h = Object.entries(f).filter(([e]) => m.get(e) === d.length);
	let y = 0;
	for (const g of a) {
		const e = n[g], a = t[g];
		if (!e) continue;
		const i = y + e.timestamps.length;
		a && (a.unifiedSleepWake = Object.fromEntries(h.map(([e, t]) => [e, t.slice(y, i)]))), y = i;
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
async function Or(e, t, n, a, i, s, r) {
	if (!e || !t || 0 === e.timestamps.byteLength) return;
	if ("counts_axis_y" !== ka(t)?.requiredSignal) return;
	if (ra(e, t, n)) return;
	const o = new Float64Array(e.timestamps), l = i ?? Z(s), c = await qe(o, { day: e }, l), u = st(Ee(t) ?? [], c), d = u !== c, p = async (e, t) => {
		const n = {
			timestamps: new Float64Array(e.timestamps),
			axisY: new Float64Array(t),
			vectorMagnitude: new Float64Array(t)
		};
		return d ? ss(l, n, c) : n;
	}, f = (e, t) => d ? os(l, e, t, o) : t;
	let m;
	try {
		const i = [...(await Ot(e.fileId, a, r)).values()];
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
	s?.throwIfAborted(), await De(e.fileId, e.date, m, a, s), s?.throwIfAborted(), Object.assign(e, m);
}
async function Pr(e, t, n, a, i, s = () => {
	I(e);
}) {
	const r = ds(n.map((e) => t[e].timestamps)), o = ds(n.map((e) => t[e].axisY)), l = ds(n.map((e) => t[e].choiAxis ?? t[e].vectorMagnitude)), c = $r(r, a), u = await q(e, (e) => e.scoreAllDays(c.map(({ start: e, end: t }) => ({
		activityF64: o.slice(e, t),
		vmF64: l.slice(e, t),
		epochSeconds: a
	}))), {
		ms: M,
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
		const n = await q(e, (e) => e.detectNonwearChoi2011(l.slice(h.start, h.end), a), {
			ms: M,
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
	const n = /* @__PURE__ */ new Map();
	for (const a of t) {
		const t = new Date(a.startMs), i = `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(t.getUTCDate()).padStart(2, "0")}`, s = n.get(i) ?? [];
		s.push({
			fileId: e,
			analysisDate: i,
			startTimestamp: a.startMs / 1e3,
			endTimestamp: a.endMs / 1e3,
			periodIndex: s.length
		}), n.set(i, s);
	}
	return n;
}
function jr(e) {
	const t = [];
	let n = null;
	const a = [...e].sort((e, t) => e.timestamp - t.timestamp);
	for (const i of a) i.worn || null != n ? i.worn && null != n && (t.push({
		startMs: n,
		endMs: i.timestamp
	}), n = null) : n = i.timestamp;
	if (null != n && a.length > 0) {
		const e = a[a.length - 1]?.timestamp ?? n;
		t.push({
			startMs: n,
			endMs: e
		});
	}
	return t;
}
function Br(e, t) {
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
async function Lr(e, t) {
	return await Le((t) => t.recordingFacts(e), new Kt(t)) ?? {};
}
async function Gr(e) {
	return fe((await we(e))?.extraSettings);
}
async function Ur(e, t, n, a) {
	n?.throwIfAborted();
	const i = await k(e, 65536, a);
	n?.throwIfAborted();
	const s = new TextDecoder("utf-8", { fatal: !1 }).decode(i);
	for (const r of [/measurement frequency\s*[,:\t]\s*(\d+)/i, /sample rate(?:\s*hz)?\s*[,:\t]\s*(\d+)/i]) {
		const e = r.exec(s);
		if (e && e[1]) {
			const t = Number.parseInt(e[1], 10);
			if (Number.isFinite(t) && t > 0) return t;
		}
	}
	return B[t];
}
async function Zr(e, t, n, a) {
	t?.throwIfAborted();
	const i = Mi(e) ? se(Oi("aw5")) : $(e.name);
	if ("none" === i) return {};
	const s = Math.max(65536, 2048);
	let r;
	try {
		r = await k(e, s, a);
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
		return null === e ? {} : await Lr(e, n);
	}
	return await Lr(new TextDecoder("utf-8", { fatal: !1 }).decode(r), n);
}
function Hr(e) {
	return `stored_nonwear_mask:${e}`;
}
Object.freeze([]);
const qr = {
	temperature_epoch_stream: (e) => null != e.temperature && ha(new Float64Array(e.temperature)),
	sleep_wake_epoch_stream: (e) => null != e.algorithmResults?.[O.ACTIWARE_SLEEP_WAKE],
	device_wear_state_evidence_stream: (e) => !0 === e.actiwareOffWristChannel
};
function Wr(e) {
	const t = [];
	for (const [n, a] of Object.entries(qr)) for (const i of e) if (a(i)) {
		t.push(n);
		break;
	}
	for (const n of ua) e.some((e) => null != ra(e, n, "")) && t.push(Hr(n));
	return t;
}
async function Vr(e, t, n) {
	const a = [];
	for (const r of t) {
		const t = wi(e, r);
		t && a.push(t.wire);
	}
	if (0 === a.length) return [];
	const { request: i, transfer: s } = bi(a);
	return (await n.computeCircadian(l(i, s))).day_summaries.filter((e) => e.has_signal).map((e) => e.analysis_date);
}
function Jr(e) {
	return e instanceof Error ? e : /* @__PURE__ */ new Error("Local ingest lease renewal failed.");
}
const Kr = Math.max(1e3, Math.floor(wn / 4));
async function Yr(e) {
	void 0 !== e.heartbeatId && (clearInterval(e.heartbeatId), delete e.heartbeatId), await e.heartbeatPending, delete e.heartbeatPending;
}
async function Xr(e, t, n) {
	const a = b().scoring(), i = {
		...e.recording,
		...t.recording
	}, s = e.placement ?? {
		bodySite: a.sensorLocation,
		laterality: a.participantLaterality
	}, r = await vt({
		...t,
		...t.ggirPart2Config ? { ggirNonwearDetector: await _e(t.ggirPart2Config.csvText, n ?? Z(e.signal)) } : {},
		...e.ingestProvenance ? { ingestProvenance: e.ingestProvenance } : {},
		recording: Br(i, s)
	}, e.attemptId, e.db);
	return "started" === r.kind && (e.guard = r.guard, function(e) {
		void 0 === e.heartbeatId && (e.heartbeatId = setInterval(() => function(e) {
			const t = e.guard;
			t && void 0 === e.heartbeatError && (e.heartbeatPending = (e.heartbeatPending ?? Promise.resolve()).then(() => Te(t, e.db)).catch((t) => {
				e.heartbeatError = t;
			}));
		}(e), Kr));
	}(e)), r;
}
async function Qr(e) {
	if (await e.heartbeatPending, void 0 !== e.heartbeatError) throw Jr(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new pn();
	return await Te(t, e.db), t;
}
async function eo(e) {
	if (await Yr(e), void 0 !== e.heartbeatError) throw Jr(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new pn();
	await async function(e, t = W()) {
		try {
			return await async function(e, t = W(), n) {
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
					]), r = s(t, i), o = Wr([...(await Ot(e, a)).values()]), l = t ? Xa(t.sourceType, t.sourceProfileId) : null;
					if (l && y[l].capabilityFromSensorRows && !o.includes("device_wear_state_evidence_stream") && i > 0 && o.push("device_wear_state_evidence_stream"), void 0 === t?.id) return o;
					if (await D(a, [
						a.files,
						a.sensorNonwear,
						a.projectMeta
					], async () => {
						const t = await a.files.get(e);
						return s(t, await a.sensorNonwear.where("fileId").equals(e).count()) === r && (t && (i = t.resolvedCapabilities, l = o, void 0 === i || i.length !== l.length || !l.every((e) => i.includes(e)) || 4 !== t.resolvedCapabilitiesRevision) && await z(a, [a.files], () => a.files.update(e, {
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
	}(t.fileId, e.db), e.finalizedFileId = await At(t, e.db, e.signal), delete e.guard;
}
async function to(e, t) {
	try {
		await Yr(e);
		const t = e.guard, n = !!t && await tt(t, e.db);
		t && delete e.guard, n ? (console.warn("[local-processing] Rolled back an incomplete local ingest."), e.rollbackOutcome = "rolled_back") : e.rollbackOutcome ??= "nothing_to_roll_back";
	} catch {
		console.error("[local-processing] Incomplete local ingest rollback also failed."), e.rollbackOutcome = "failed";
	}
}
function no(e, t) {
	return "object" == typeof e && null !== e && void 0 !== t.rollbackOutcome && (e.__localIngestRollbackOutcome = t.rollbackOutcome), e;
}
async function ao(e, t, n, a, i) {
	try {
		const s = await Vr(e, t, a);
		await He(e, t.map((e) => e.date), s, n, i);
	} catch {
		i?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}
}
function io(e, t, n, a) {
	return a <= 0 ? 0 : .9 * (e - 1 + (t - e + 1) * n / 3) / a;
}
function so({ scope: e, fileId: t, sourceContentHash: n, signalDates: a, onChunk: i }) {
	const s = [];
	let r = 0;
	const o = {
		saved: 0,
		activityFailed: !1,
		historyFailed: !1
	}, l = async () => {
		const l = s.splice(0);
		if (0 === l.length) return;
		const c = r - l.length + 1, u = r;
		i?.(c, u, 0), await Qr(e), i?.(c, u, 1);
		try {
			const t = l.map((e) => e.facts);
			await Ae(l.map((e) => e.day), e.db, t.every((e) => void 0 !== e) ? t : void 0, e.signal);
		} catch (f) {
			throw console.warn("[local-processing] Activity-day persistence failed."), o.activityFailed = !0, f;
		}
		o.saved += l.length;
		const d = l.map((e) => e.day.date);
		try {
			await He(t, d, d.filter((e) => a.has(e)), e.db, e.signal);
		} catch {
			console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
		}
		i?.(c, u, 2);
		const p = l.flatMap((e) => e.history.map((t) => ({
			...t,
			date: e.day.date
		})));
		await async function(e, t, n, a, i = W(), s) {
			const r = i, o = ce(), l = a.map((a) => {
				const i = {
					fileId: e,
					date: a.date ?? t,
					appVersion: o,
					results: a.results,
					...void 0 !== n ? { sourceContentHash: n } : {}
				};
				if (null === Ke(a)) throw new Error(`Refused an algorithm run for ${String(a.algoKey ?? a.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
				return void 0 !== a.cubeConfig ? {
					...i,
					cubeConfig: a.cubeConfig
				} : {
					...i,
					algoKey: a.algoKey
				};
			});
			try {
				return await it(l, r, s), !0;
			} catch {
				s?.throwIfAborted(), console.error("[local-processing] Algorithm history batch write failed; retrying records individually.");
			}
			let c = !1;
			for (const u of l) try {
				await me(u, r, s);
			} catch {
				s?.throwIfAborted(), c = !0, console.error("[local-processing] An algorithm history write failed; latest scoring remains available.");
				try {
					await oo({
						op: "algorithm_run_put",
						fileId: e,
						payload: {
							kind: "history_write_failed",
							...Ke(u),
							date: u.date,
							error: "history_write_failed"
						}
					}, r, s);
				} catch {}
			}
			return !c;
		}(t, l[0].day.date, n, p, e.db, e.signal) || (o.historyFailed = !0), i?.(c, u, 3), await Y();
	};
	return {
		state: o,
		flush: l,
		add: async (e, t, n) => {
			s.push({
				day: e,
				history: t,
				facts: n
			}), r += 1, s.length >= 8 && await l();
		}
	};
}
async function ro(e, t = W(), n) {
	const a = t;
	try {
		const t = await e.identity(), s = await pt(e.fileId, a);
		await Ji({
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
			profileProofStatus: (i = t.profileProofStatus, Bi(i, E, "profileProofStatus")),
			temporalBasis: Li(t.temporalBasis),
			calibration: e.calibration,
			diaryDisposition: s.length > 0 ? "present" : "absent",
			timestampGrid: e.timestampGrid ?? "epoch_5s_floor_seconds",
			dailyRows: e.rows,
			appVersion: ce(),
			startedAt: e.startedAt,
			finishedAt: e.finishedAt ?? (/* @__PURE__ */ new Date()).toISOString()
		}, a, n);
	} catch {
		n?.throwIfAborted(), console.error("[local-processing] Execution attestation write failed; day summaries remain stored.");
	}
	var i;
}
async function oo(e, t = W(), n) {
	const a = t, { appendWal: i, withWalTx: s } = await import("./wal-Dfu9rgTj.js").then((e) => e.r);
	await s([], async () => {
		await i(e);
	}, a, n);
}
async function lo(e, t, n, a, i, s) {
	if (0 === n.length) return !0;
	try {
		return await Qr(e), await Re(t, Fr(t, n), a, i), !0;
	} catch (yd) {
		return kn("warn", `${s} nonwear periods not saved`, Xt(yd)), !1;
	}
}
function co(e, t) {
	return ta(void 0 === t ? void 0 : { recording: t }, e?.sensorLocation ?? u.sensor_location);
}
function uo(e) {
	return function(e) {
		return ns.includes(e);
	}(e) ? e : 60;
}
function po(e) {
	const t = Nr(e?.lstmSelection);
	return {
		selection: t,
		descriptor: xr(t.modelId),
		scoreOptions: {
			modelId: t.modelId,
			...null != t.threshold ? { threshold: t.threshold } : {}
		}
	};
}
function fo(e) {
	const t = po(e);
	return { extras: {
		lstmFeatureContract: "spectral_30s_mean_centered_v3_probabilities",
		lstmModelId: t.descriptor.id,
		lstmModelVersion: t.descriptor.version,
		lstmThreshold: String(t.selection.threshold ?? t.descriptor.defaultThreshold),
		ggirCountScorerContract: "zcy_ws3_count_epoch_v4"
	} };
}
function mo(e, t) {
	return "number" == typeof e && "number" == typeof t && e !== t;
}
let ho = 0;
const go = /* @__PURE__ */ new Set();
function yo(e, t, n) {
	if (n) {
		const e = ge(n);
		if (!Dn(e)) return Xe(e);
	}
	return t ?? ie.SMART;
}
function wo(e, t) {
	e.invalidateQueries({ queryKey: t }).catch((e) => {
		kn("warn", "Query invalidation failed", {
			...Xt(e),
			query_key: t.map(String).join(":")
		});
	});
}
const _o = {
	[w.RULE_1_INCLUDE_ACTIVITY]: "Included mid-sleep wake activity (continuous sleep follows)",
	[w.RULE_2_SMALL_PERIODS]: "Evaluated a small sleep period near onset",
	[w.RULE_3_EXTEND_BEFORE_DIARY]: "Extended onset backward through sleep preceding the diary marker",
	[w.RULE_4_NAP_VARIATION]: "Marked a long continuous block as a nap",
	[w.RULE_5_CHOI_SPIKE]: "Tolerated Choi-only nonwear (activity spike present in period)",
	[w.RULE_6_EQUIDISTANT]: "Chose between multiple candidate boundaries",
	[w.RULE_7_CROSS_DAY_NONWEAR]: "Applied cross-day diary nonwear pattern",
	[w.RULE_8_ONSET_BEFORE_INBED]: "Clamped onset to diary in-bed time (onset reported before in-bed)",
	[w.RULE_9_NAP_REGULARITY]: "Placed nap from this child's cross-day nap regularity (no diary nap logged)",
	[w.RULE_10_REGULARITY_OVERRIDE]: "Re-centered the sleep window on this child's cross-day sleep regularity",
	[w.RULE_11_RELIABILITY_FALLBACK]: "Diary unreliable for this night — anchored to accelerometry instead"
};
function vo(e) {
	const t = e.replace(/^rule_\d+_/, "").replace(/_/g, " ").trim();
	return 0 === t.length ? e : t.charAt(0).toUpperCase() + t.slice(1);
}
function bo(e) {
	return kt(e, A);
}
async function So(e, t, n) {
	const a = n ? await n.wearSiteHasptRouting(e, t ?? void 0) : await qt("wearSiteHasptRouting", `${e}:${t ?? ""}`, () => A().wearSiteHasptRouting(e, t ?? void 0));
	return {
		sensorLocation: a.sensorLocation,
		variant: a.variant,
		requiresLongitudinalAxis: a.requiresLongitudinalAxis,
		routedByWearSite: null == t
	};
}
function ko(e) {
	const t = Object.values(e).filter((e) => "number" == typeof e);
	return Object.entries(e).filter(([e, n]) => -1 === t.indexOf(+e)).map(([e, t]) => t);
}
function Io(e, t = "|") {
	return e.map((e) => qo(e)).join(t);
}
function Ao(e, t) {
	return "bigint" == typeof t ? t.toString() : t;
}
Object.fromEntries(Object.values(w).map((e) => [e, _o[e] ?? vo(e)]));
var xo = class {
	constructor(e) {
		this._getter = e, this._value = void 0;
	}
	get value() {
		const e = this._getter;
		return void 0 !== e && (this._value = e(), this._getter = void 0), this._value;
	}
};
function To(e) {
	return new xo(e);
}
function No(e) {
	const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function Mo(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function $o(e) {
	const t = Object.getOwnPropertyDescriptor(e, "shape");
	return t?.get ? t.get.raw : t?.value;
}
function zo(e) {
	return $o(e._zod.def) ?? e._zod.def.shape;
}
function Ro(e, t, n) {
	Object.defineProperty(e, t, {
		get() {
			const e = n();
			return Mo(this, t, e), e;
		},
		enumerable: !0,
		configurable: !0
	});
}
function Do(e, t, n) {
	t in e ? Mo(e, t, n) : e[t] = n;
}
function Eo(e, t, n, a) {
	const i = zo(t);
	for (const s of n) {
		const n = Object.getOwnPropertyDescriptor(i, s);
		n.enumerable && (n.get ? Ro(e, s, () => {
			const e = t._zod.def.shape[s];
			return a ? a(e, s) : e;
		}) : Do(e, s, a ? a(n.value, s) : n.value));
	}
}
function Co(...e) {
	const t = {};
	for (const n of e) {
		const e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Oo(e) {
	return JSON.stringify(e);
}
const Po = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Fo(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
const jo = To(() => {
	if (Il.jitless) return !1;
	if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return new Function(""), !0;
	} catch (e) {
		return !1;
	}
});
function Bo(e) {
	if (!1 === Fo(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	if ("function" != typeof t) return !0;
	const n = t.prototype;
	return !1 !== Fo(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function Lo(e) {
	return Bo(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const Go = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
function Uo(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Zo(e, t, n) {
	const a = new e._zod.constr(t ?? e._zod.def);
	return t && !n?.parent || (a._zod.parent = e), a;
}
function Ho(e) {
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
function qo(e) {
	return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`;
}
const Wo = (() => ({
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}))(), Vo = {
	int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
	uint64: [BigInt(0), BigInt("18446744073709551615")]
};
function Jo(e, t) {
	const n = zo(e), a = [];
	for (const i of Reflect.ownKeys(t)) {
		if (!Object.getOwnPropertyDescriptor(n, i)?.enumerable) throw new Error(`Unrecognized key: "${String(i)}"`);
		t[i] && a.push(i);
	}
	return a;
}
function Ko(e, t) {
	const n = {};
	return Eo(n, e, Reflect.ownKeys(zo(e))), function(e, t) {
		for (const n of Reflect.ownKeys(t)) {
			const a = Object.getOwnPropertyDescriptor(t, n);
			a.enumerable && (a.get ? Ro(e, n, () => t[n]) : Do(e, n, a.value));
		}
	}(n, t), n;
}
function Yo(e, t, n, a = "partial") {
	const i = t._zod.def.checks;
	if (i && i.length > 0) throw new Error(`.${a}() cannot be used on object schemas containing refinements`);
	const s = n ? new Set(Jo(t, n)) : void 0, r = {};
	return Eo(r, t, Reflect.ownKeys(zo(t)), e && ((t, n) => s && !s.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), Zo(t, Co(t._zod.def, {
		shape: r,
		checks: []
	}));
}
function Xo(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!0 !== e.issues[n]?.continue) return !0;
	return !1;
}
function Qo(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!1 === e.issues[n]?.continue) return !0;
	return !1;
}
function el(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function tl(e) {
	return "string" == typeof e ? e : e?.message;
}
function nl(e) {
	const t = [];
	for (const n of e ?? []) {
		const e = n._zod.def;
		if (!/_(length|size)$|_equals$/.test(e.check)) break;
		const a = e.maximum ?? e.length ?? e.size;
		a >= 0 && t.push([a, n]);
	}
	return t;
}
function al(e, t, n) {
	var a;
	for (let i = t; i < e.length; i++) (a = e[i]).schema ?? (a.schema = n);
}
function il(e, t, n) {
	var a;
	const i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (a = e).schema ?? (a.schema = e.inst) : e.schema = e.inst);
	const s = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0, r = e.message ? e.message : tl(e.inst?._zod.def?.error?.(e)) ?? tl(s?.(e)) ?? tl(t?.error?.(e)) ?? tl(n.customError?.(e)) ?? tl(n.localeError?.(e)) ?? "Invalid input", o = {};
	for (const l of Object.keys(e)) "inst" !== l && "schema" !== l && "continue" !== l && "input" !== l && "__proto__" !== l && (o[l] = e[l]);
	return o.path ?? (o.path = []), o.message = r, t?.reportInput && (o.input = e.input), o;
}
const sl = /[\uD800-\uDBFF]/;
function rl(e) {
	const t = e.length;
	if (!sl.test(e)) return t;
	let n = t;
	for (let a = 0; a < t - 1; a++) 55296 == (64512 & e.charCodeAt(a)) && 56320 == (64512 & e.charCodeAt(a + 1)) && (n--, a++);
	return n;
}
function ol(e) {
	return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function ll(...e) {
	const [t, n, a] = e;
	return "string" == typeof t ? {
		message: t,
		code: "custom",
		input: n,
		inst: a
	} : { ...t };
}
function cl(e, t, n, a = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: a,
		value: n
	}), n;
}
function ul(e, t, n) {
	return cl(e, t, n, !1);
}
function dl(e, t) {
	for (const n in e) {
		const a = e[n];
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !0,
			get() {
				return cl(this, n, a(this));
			},
			set(e) {
				cl(this, n, e);
			}
		});
	}
	return t;
}
function pl(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return null == this ? n : cl(this, t, n.bind(this));
		},
		set(e) {
			cl(this, t, e);
		}
	});
}
let fl, ml = !1;
const hl = {
	configurable: !0,
	get() {
		ml = !0;
	}
};
function gl(e, t, n) {
	const a = Object.getPrototypeOf(e._zod);
	t in a && fl !== e._zod ? fl = void 0 : (fl = e._zod, Object.defineProperty(a, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, hl);
			const e = ml;
			ml = !1;
			try {
				const a = n(this);
				return ml ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: a
				}), ml = ml || e, a;
			} catch (a) {
				throw delete this[t], ml = ml || e, a;
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
function yl(e) {
	const t = () => e;
	return t["~constantCatch"] = !0, t;
}
var wl;
const _l = {
	value: void 0,
	enumerable: !1
};
let vl = "captureStackTrace" in Error ? Error : null;
function bl(e, t, n, a) {
	function i(e) {
		this.def = e, this.constr = u, this.traits = /* @__PURE__ */ new Set();
	}
	i.prototype = {};
	const s = n, r = s && /* @__PURE__ */ new WeakSet();
	function o(n, a) {
		if (n._zod) {
			if (n._zod.traits.has(e)) return;
		} else {
			_l.value = new i(a);
			try {
				Object.defineProperty(n, "_zod", _l);
			} finally {
				_l.value = void 0;
			}
		}
		if (n._zod.traits.add(e), t(n, a), r) {
			const e = Object.getPrototypeOf(n), t = n._zod.constr.prototype;
			let a = e;
			for (; a && a !== t;) a = Object.getPrototypeOf(a);
			const i = a ?? e;
			r.has(i) || (r.add(i), function(e, t) {
				for (const n in t) {
					const a = Object.getOwnPropertyDescriptor(t, n);
					a.get ? Object.defineProperty(e, n, {
						...a,
						enumerable: !1
					}) : pl(e, n, a.value);
				}
			}(i, s));
		}
		const o = u.prototype;
		for (const e in o) Object.prototype.hasOwnProperty.call(o, e) && (e in n || (n[e] = o[e].bind(n)));
	}
	const l = a?.Parent ?? Object;
	class c extends l {}
	function u(e) {
		const t = a?.Parent ? function(e) {
			const t = vl;
			if (t) {
				const n = t.stackTraceLimit;
				if ("number" == typeof n) {
					try {
						t.stackTraceLimit = 0;
					} catch {
						return vl = null, new e();
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
var Sl = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, kl = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(wl = globalThis).__zod_globalConfig ?? (wl.__zod_globalConfig = {});
const Il = globalThis.__zod_globalConfig;
function Al(e) {
	return e && Object.assign(Il, e), Il;
}
const xl = {
	get: function() {
		const e = this._zod;
		return e.message ?? (e.message = JSON.stringify(e.def, Ao, 2)), e.message;
	},
	set: function(e) {
		this._zod.message = e;
	},
	enumerable: !0,
	configurable: !0
}, Tl = {
	value: void 0,
	enumerable: !1
}, Nl = new WeakSet([Object.prototype, Error.prototype]), Ml = (e, t) => {
	e.name = "$ZodError", Tl.value = t, Object.defineProperty(e, "issues", Tl), Tl.value = void 0, Object.defineProperty(e, "message", xl);
	const n = Object.getPrototypeOf(e);
	Nl.has(n) || (Nl.add(n), Object.defineProperty(n, "toString", {
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
}, $l = bl("$ZodError", Ml);
function zl(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || ("__proto__" === t ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function Rl(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
bl("$ZodError", Ml, void 0, { Parent: Error });
const Dl = (e) => {
	const t = (n, a, i, s) => {
		const r = i ? {
			...i,
			async: !1
		} : { async: !1 }, o = n._zod.run({
			value: a,
			issues: []
		}, r);
		if (o instanceof Promise) throw new Sl();
		if (o.issues.length) {
			const n = new ((s?.Err) ?? e)(o.issues.map((e) => il(e, r, Al())));
			throw Po(n, s?.callee ?? t), n;
		}
		return o.value;
	};
	return t;
}, El = (e) => {
	const t = async (n, a, i, s) => {
		const r = i ? {
			...i,
			async: !0
		} : { async: !0 };
		let o = n._zod.run({
			value: a,
			issues: []
		}, r);
		if (o instanceof Promise && (o = await o), o.issues.length) {
			const n = new ((s?.Err) ?? e)(o.issues.map((e) => il(e, r, Al())));
			throw Po(n, s?.callee ?? t), n;
		}
		return o.value;
	};
	return t;
}, Cl = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		async: !1
	} : { async: !1 }, s = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (s instanceof Promise) throw new Sl();
	return s.issues.length ? Ol(e, s.issues, i) : {
		success: !0,
		data: s.value
	};
};
function Ol(e, t, n) {
	let a;
	return {
		success: !1,
		get error() {
			return a || (a = new e(t.map((e) => il(e, n, Al()))), t = void 0, n = void 0), a;
		},
		set error(e) {
			a = e, t = void 0, n = void 0;
		}
	};
}
const Pl = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		async: !0
	} : { async: !0 };
	let s = t._zod.run({
		value: n,
		issues: []
	}, i);
	return s instanceof Promise && (s = await s), s.issues.length ? Ol(e, s.issues, i) : {
		success: !0,
		data: s.value
	};
}, Fl = Symbol.for("zod.compile.invalid"), jl = Symbol.for("zod.compile.fallback"), Bl = (e) => {
	const t = Dl(e), n = (e, a, i, s) => {
		const r = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return t(e, a, r, Rl(n, s));
	};
	return n;
}, Ll = (e) => {
	const t = Dl(e), n = (e, a, i, s) => t(e, a, i, Rl(n, s));
	return n;
}, Gl = (e) => {
	const t = El(e), n = async (e, a, i, s) => {
		const r = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return await t(e, a, r, Rl(n, s));
	};
	return n;
}, Ul = (e) => {
	const t = El(e), n = async (e, a, i, s) => await t(e, a, i, Rl(n, s));
	return n;
}, Zl = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return Cl(e)(t, n, i);
}, Hl = (e) => (t, n, a) => Cl(e)(t, n, a), ql = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return Pl(e)(t, n, i);
}, Wl = (e) => async (t, n, a) => Pl(e)(t, n, a), Vl = /^[cC][0-9a-z]{6,}$/, Jl = /^[0-9a-z]+$/, Kl = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Yl = /^[0-9a-vA-V]{20}$/, Xl = /^[A-Za-z0-9]{27}$/, Ql = /^[a-zA-Z0-9_-]{21}$/, ec = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, tc = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, nc = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ac = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, ic = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, sc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, rc = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, oc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, lc = /^https?$/, cc = /^\+[1-9]\d{6,14}$/, uc = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function dc(e) {
	return new RegExp(`^${e}$`);
}
const pc = dc(uc);
function fc(e) {
	const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return "number" == typeof e.precision ? -1 === e.precision ? `${t}` : 0 === e.precision ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
const mc = /^[\s\S]{0,}$/, hc = /^-?\d+$/, gc = /^-?\d+(?:\.\d+)?$/, yc = /^(?:true|false)$/i, wc = /^[^A-Z]*$/, _c = /^[^a-z]*$/, vc = bl("$ZodCheck", (e, t) => {
	var n;
	e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), bc = (e) => {
	const t = e.value;
	return !(null == t || void 0 === t.length);
}, Sc = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, kc = bl("$ZodCheckLessThan", (e, t) => {
	vc.init(e, t);
	const n = Sc[typeof t.value];
	e._zod.check = (a) => {
		(t.inclusive ? a.value <= t.value : a.value < t.value) || a.issues.push({
			origin: Sc[typeof a.value] ?? n,
			code: "too_big",
			maximum: "object" == typeof t.value ? t.value.getTime() : t.value,
			input: a.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Ic = bl("$ZodCheckGreaterThan", (e, t) => {
	vc.init(e, t);
	const n = Sc[typeof t.value];
	e._zod.check = (a) => {
		(t.inclusive ? a.value >= t.value : a.value > t.value) || a.issues.push({
			origin: Sc[typeof a.value] ?? n,
			code: "too_small",
			minimum: "object" == typeof t.value ? t.value.getTime() : t.value,
			input: a.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Ac = bl("$ZodCheckMultipleOf", (e, t) => {
	vc.init(e, t), e._zod.check = (n) => {
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
}), xc = bl("$ZodCheckNumberFormat", (e, t) => {
	vc.init(e, t), t.format = t.format || "float64";
	const n = t.format?.includes("int"), a = n ? "int" : "number", [i, s] = Wo[t.format];
	e._zod.check = (r) => {
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
}), Tc = bl("$ZodCheckMaxLength", (e, t) => {
	var n;
	vc.init(e, t), (n = e._zod.def).when ?? (n.when = bc), e._zod.check = (n) => {
		const a = n.value, i = a.length;
		if (("string" == typeof a && i > t.maximum ? rl(a) : i) <= t.maximum) return;
		const s = ol(a);
		n.issues.push({
			origin: s,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: a,
			inst: e,
			continue: !t.abort
		});
	};
}), Nc = bl("$ZodCheckMinLength", (e, t) => {
	var n;
	vc.init(e, t), (n = e._zod.def).when ?? (n.when = bc), e._zod.check = (n) => {
		const a = n.value, i = a.length;
		if (("string" == typeof a && i >= t.minimum && i < 2 * t.minimum ? rl(a) : i) >= t.minimum) return;
		const s = ol(a);
		n.issues.push({
			origin: s,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: a,
			inst: e,
			continue: !t.abort
		});
	};
}), Mc = bl("$ZodCheckLengthEquals", (e, t) => {
	var n;
	vc.init(e, t), (n = e._zod.def).when ?? (n.when = bc), e._zod.check = (n) => {
		const a = n.value, i = a.length, s = "string" == typeof a && i >= t.length && i <= 2 * t.length ? rl(a) : i;
		if (s === t.length) return;
		const r = ol(a), o = s > t.length;
		n.issues.push({
			origin: r,
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
}), $c = bl("$ZodCheckStringFormat", (e, t) => {
	var n, a;
	vc.init(e, t), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
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
}), zc = bl("$ZodCheckRegex", (e, t) => {
	$c.init(e, t), e._zod.check = (n) => {
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
}), Rc = bl("$ZodCheckLowerCase", (e, t) => {
	t.pattern ?? (t.pattern = wc), $c.init(e, t);
}), Dc = bl("$ZodCheckUpperCase", (e, t) => {
	t.pattern ?? (t.pattern = _c), $c.init(e, t);
}), Ec = bl("$ZodCheckIncludes", (e, t) => {
	vc.init(e, t);
	const n = Uo(t.includes);
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
}), Cc = bl("$ZodCheckStartsWith", (e, t) => {
	vc.init(e, t);
	const n = new RegExp(`^${Uo(t.prefix)}.*`);
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
}), Oc = bl("$ZodCheckEndsWith", (e, t) => {
	vc.init(e, t);
	const n = new RegExp(`.*${Uo(t.suffix)}$`);
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
}), Pc = bl("$ZodCheckOverwrite", (e, t) => {
	vc.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
});
var Fc = class {
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
const jc = {
	major: 4,
	minor: 6,
	patch: 7
}, Bc = bl("$ZodType", (e, t) => {
	var n;
	e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = jc;
	const a = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...a ?? []] : a?.length ? [...a] : [];
	for (const s of i) for (const t of s._zod.onattach) t(e);
	if (0 === i.length) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		const t = (t, n, a) => {
			if (t.memo) return t;
			let i, s = Xo(t);
			for (const r of n) {
				if (r._zod.def.when) {
					if (Qo(t)) continue;
					if (!r._zod.def.when(t)) continue;
				} else if (s) continue;
				const n = t.issues.length, o = r._zod.check(t);
				if (o instanceof Promise && !1 === a?.async) throw new Sl();
				if (i || o instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await o, t.issues.length !== n && (al(t.issues, n, e), s || (s = Xo(t, n)));
				});
				else {
					if (t.issues.length === n) continue;
					al(t.issues, n, e), s || (s = Xo(t, n));
				}
			}
			return i ? i.then(() => t) : t;
		}, n = (n, a, s) => {
			if (Xo(n)) return n.aborted = !0, n;
			const r = t(a, i, s);
			if (r instanceof Promise) {
				if (!1 === s.async) throw new Sl();
				return r.then((t) => e._zod.parse(t, s));
			}
			return e._zod.parse(r, s);
		};
		e._zod.run = (a, s) => {
			if (s.skipChecks) return e._zod.parse(a, s);
			if ("backward" === s.direction) {
				const t = e._zod.parse({
					value: a.value,
					issues: []
				}, {
					...s,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, a, s)) : n(t, a, s);
			}
			const r = e._zod.parse(a, s);
			if (r instanceof Promise) {
				if (!1 === s.async) throw new Sl();
				return r.then((e) => t(e, i, s));
			}
			return t(r, i, s);
		};
	}
}, {
	get "~standard"() {
		return ul(this, "~standard", Gc(this));
	},
	set "~standard"(e) {
		cl(this, "~standard", e);
	}
}), Lc = (e, t) => e.issues.length ? { issues: e.issues.map((e) => il(e, t, Al())) } : { value: e.value };
function Gc(e) {
	return {
		validate: (t) => {
			const n = { async: !1 };
			try {
				const a = e._zod.run({
					value: t,
					issues: []
				}, n);
				if (!(a instanceof Promise)) return Lc(a, n);
			} catch (a) {}
			return async function(e, t) {
				const n = { async: !0 };
				return Lc(await e._zod.run({
					value: t,
					issues: []
				}, n), n);
			}(e, t);
		},
		vendor: "zod",
		version: 1
	};
}
const Uc = bl("$ZodString", (e, t) => {
	Bc.init(e, t), e._zod.pattern = t.pattern ?? mc, e._zod.parse = (n, a) => {
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
}), Zc = bl("$ZodStringFormat", (e, t) => {
	$c.init(e, t), Uc.init(e, t);
}), Hc = bl("$ZodGUID", (e, t) => {
	t.pattern ?? (t.pattern = tc), Zc.init(e, t);
}), qc = bl("$ZodUUID", (e, t) => {
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
		t.pattern ?? (t.pattern = nc(e));
	} else t.pattern ?? (t.pattern = nc());
	Zc.init(e, t);
}), Wc = bl("$ZodEmail", (e, t) => {
	t.pattern ?? (t.pattern = ac), Zc.init(e, t);
});
function Vc(e) {
	try {
		return "undefined" != typeof URL && "function" == typeof URL.canParse ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
const Jc = /[\t\n\r]/g;
function Kc(e) {
	return e.replace(Jc, "");
}
const Yc = bl("$ZodURL", (e, t) => {
	Zc.init(e, t), e._zod.check = (n) => {
		try {
			const a = n.value.trim(), i = function(e, t) {
				return "normalize" in t || "hostname" in t || "protocol" in t ? function(e, t) {
					if (!t.normalize && t.protocol?.source === lc.source && !/^https?:\/\//i.test(e)) return 1;
					try {
						if ("undefined" != typeof URL) {
							const t = URL;
							if ("function" == typeof t.parse) return t.parse(e) ?? 2;
						}
						return new URL(e);
					} catch {
						return 2;
					}
				}(e, t) : Vc(e) || 2;
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
			}) : !0 === i ? n.value = Kc(a) : (t.hostname && !function(e, t) {
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
			}), n.value = t.normalize ? i.href : Kc(a));
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
}), Xc = bl("$ZodEmoji", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp("^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", "u")), Zc.init(e, t);
}), Qc = bl("$ZodNanoID", (e, t) => {
	if (void 0 !== t.length && (!Number.isInteger(t.length) || t.length < 1)) throw new Error(`Invalid nanoid length: ${t.length}`);
	var n;
	t.pattern ?? (t.pattern = void 0 === t.length ? Ql : (n = t.length, new RegExp(`^[a-zA-Z0-9_-]{${n}}$`))), Zc.init(e, t);
}), eu = bl("$ZodCUID", (e, t) => {
	t.pattern ?? (t.pattern = Vl), Zc.init(e, t);
}), tu = bl("$ZodCUID2", (e, t) => {
	t.pattern ?? (t.pattern = Jl), Zc.init(e, t);
}), nu = bl("$ZodULID", (e, t) => {
	t.pattern ?? (t.pattern = Kl), Zc.init(e, t);
}), au = bl("$ZodXID", (e, t) => {
	t.pattern ?? (t.pattern = Yl), Zc.init(e, t);
}), iu = bl("$ZodKSUID", (e, t) => {
	t.pattern ?? (t.pattern = Xl), Zc.init(e, t);
}), su = bl("$ZodISODateTime", (e, t) => {
	t.pattern ?? (t.pattern = function(e) {
		const t = ["Z"];
		e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const n = `${fc({
			precision: e.precision,
			seconds: !0
		})}(?:${t.join("|")})`, a = e.local ? `${n}|${fc({ precision: e.precision })}` : n;
		return new RegExp(`^${uc}T(?:${a})$`);
	}(t)), Zc.init(e, t);
}), ru = bl("$ZodISODate", (e, t) => {
	t.pattern ?? (t.pattern = pc), Zc.init(e, t);
}), ou = bl("$ZodISOTime", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp(`^${fc(t)}$`)), Zc.init(e, t);
}), lu = bl("$ZodISODuration", (e, t) => {
	t.pattern ?? (t.pattern = ec), Zc.init(e, t);
}), cu = bl("$ZodIPv4", (e, t) => {
	t.pattern ?? (t.pattern = ic), Zc.init(e, t);
}), uu = /^[0-9a-fA-F:.]+$/;
function du(e) {
	return !!uu.test(e) && Vc(`http://[${e}]`);
}
const pu = bl("$ZodIPv6", (e, t) => {
	t.pattern ?? (t.pattern = sc), Zc.init(e, t), e._zod.check = (n) => {
		du(n.value) || n.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), fu = bl("$ZodCIDRv4", (e, t) => {
	t.pattern ?? (t.pattern = rc), Zc.init(e, t);
}), mu = bl("$ZodCIDRv6", (e, t) => {
	t.pattern ?? (t.pattern = oc), Zc.init(e, t), e._zod.check = (n) => {
		(function(e) {
			const t = e.split("/");
			if (2 !== t.length) return !1;
			const [n, a] = t;
			if (!a) return !1;
			const i = Number(a);
			return `${i}` === a && !(i < 0 || i > 128) && du(n);
		})(n.value) || n.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function hu(e) {
	if ("" === e) return !0;
	if (/\s/.test(e)) return !1;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
const gu = /^[0-9a-zA-Z+/]*={0,2}$/, yu = bl("$ZodBase64", (e, t) => {
	t.pattern ?? (t.pattern = gu), Zc.init(e, t), e._zod.check = (n) => {
		hu(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), wu = /^[A-Za-z0-9_-]*$/, _u = bl("$ZodBase64URL", (e, t) => {
	t.pattern ?? (t.pattern = wu), Zc.init(e, t), e._zod.check = (n) => {
		(function(e) {
			if (!wu.test(e)) return !1;
			const t = e.replace(/[-_]/g, (e) => "-" === e ? "+" : "/");
			return hu(t.padEnd(4 * Math.ceil(t.length / 4), "="));
		})(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), vu = bl("$ZodE164", (e, t) => {
	t.pattern ?? (t.pattern = cc), Zc.init(e, t);
}), bu = bl("$ZodJWT", (e, t) => {
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
}), Su = bl("$ZodNumber", (e, t) => {
	Bc.init(e, t), e._zod.pattern = gc, e._zod.parse = (n, a) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch (r) {}
		const i = n.value;
		if ("number" == typeof i && !Number.isNaN(i) && Number.isFinite(i)) return n;
		const s = "number" == typeof i ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...s ? { received: s } : {}
		}), n;
	};
}), ku = bl("$ZodNumberFormat", (e, t) => {
	xc.init(e, t), Su.init(e, t);
}), Iu = bl("$ZodBoolean", (e, t) => {
	Bc.init(e, t), e._zod.pattern = yc, e._zod.parse = (n, a) => {
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
}), Au = bl("$ZodUnknown", (e, t) => {
	Bc.init(e, t), e._zod.parse = (e) => e;
}), xu = bl("$ZodNever", (e, t) => {
	Bc.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
}), Tu = (e) => Array.isArray(e) ? e.length : -1;
function Nu(e, t, n) {
	e.issues.length && t.issues.push(...el(n, e.issues)), t.value[n] = e.value;
}
const Mu = bl("$ZodArray", (e, t) => {
	Bc.init(e, t);
	const n = Il.memoizer;
	n?.attach(e), e._zod.parse = (a, i) => {
		const s = a.value;
		if (!Array.isArray(s)) return a.issues.push({
			expected: "array",
			code: "invalid_type",
			input: s,
			inst: e
		}), a;
		a.value = n ? n.alloc(e, a, Array(s.length), i) : Array(s.length);
		const r = [], o = i?.abortEarly;
		for (let e = 0; e < s.length; e++) {
			const n = s[e], l = t.element._zod.run({
				value: n,
				issues: []
			}, i);
			if (l instanceof Promise) r.push(l.then((t) => Nu(t, a, e)));
			else if (Nu(l, a, e), o && 0 !== l.issues.length && Xo(l)) break;
		}
		return r.length ? Promise.all(r).then(() => a) : a;
	}, function(e, t) {
		const n = nl(e._zod.def.checks);
		if (!n.length) return;
		const a = Math.min(...n.map((e) => e[0])), i = e._zod.parse;
		e._zod.parse = (n, s) => {
			const r = t(n.value);
			if (r > a && !s?.skipChecks && "backward" !== s?.direction) {
				for (const [t, a] of nl(e._zod.def.checks)) if (r > t && a._zod.def.when(n)) {
					const t = n.issues.length;
					return a._zod.check(n), n.issues[t].continue = !1, al(n.issues, t, e), n;
				}
			}
			return i(n, s);
		};
	}(e, Tu);
});
function $u(e, t, n, a, i, s) {
	const r = n in a, o = "optional" === s;
	if (r || !o || "optional" !== i) {
		if (e.issues.length) {
			if (void 0 !== i && o && !r) return;
			t.issues.push(...el(n, e.issues));
		}
		r || void 0 !== i ? void 0 === e.value ? (r || "defaulted" === i && !o) && (t.value[n] = void 0) : t.value[n] = e.value : e.issues.length || t.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [n]
		});
	}
}
const zu = [];
function Ru(e) {
	const t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), a = n.length ? n : zu, i = a.length ? [...t, ...a] : t;
	for (const o of i) if (!e.shape?.[o]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${String(o)}": expected a Zod schema`);
	const s = (r = e.shape, Object.keys(r).filter((e) => void 0 !== r[e]._zod.optin && "optional" === r[e]._zod.optout));
	var r;
	return {
		...e,
		allKeys: i,
		symbolKeys: a,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(s)
	};
}
function Du(e, t, n, a, i, s, r) {
	const o = [], l = i.keySet, c = i.catchall._zod, u = c.def.type, d = c.optin, p = c.optout;
	let f = 0;
	for (const m in t) {
		if (r && n.issues.length !== f) {
			if (Xo(n, f)) break;
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
		i instanceof Promise ? e.push(i.then((e) => $u(e, n, m, t, d, p))) : $u(i, n, m, t, d, p);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: s,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
const Eu = bl("$ZodObject", (e, t) => {
	Bc.init(e, t);
	const n = Object.getOwnPropertyDescriptor(t, "shape"), a = n?.get ? n.get.raw : t.shape ?? {};
	if (a) {
		const e = () => {
			const n = { ...a };
			return Object.defineProperty(t, "shape", { value: n }), e.raw = n, n;
		};
		e.raw = a, Object.defineProperty(t, "shape", { get: e });
	}
	const i = To(() => Ru(t));
	gl(e, "propValues", (e) => {
		const t = e.def.shape, n = {};
		for (const a in t) {
			const e = t[a]._zod;
			if (e.values) {
				Object.prototype.hasOwnProperty.call(n, a) || Mo(n, a, /* @__PURE__ */ new Set());
				for (const t of e.values) n[a].add(t);
				void 0 !== e.optin && n[a].add(void 0);
			}
		}
		return n;
	});
	const s = Fo, r = t.catchall;
	let o;
	const l = Il.memoizer;
	l?.attach(e), e._zod.parse = (t, n) => {
		o ?? (o = i.value);
		const a = t.value;
		if (!s(a)) return t.issues.push({
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
				if (Xo(t, p)) break;
				p = t.issues.length;
			}
			if ("__proto__" === e) continue;
			const i = u[e], s = i._zod.optin, r = i._zod.optout, o = i._zod.run({
				value: a[e],
				issues: []
			}, n);
			o instanceof Promise ? c.push(o.then((n) => $u(n, t, e, a, s, r))) : $u(o, t, e, a, s, r);
		}
		return r ? Du(c, a, t, n, i.value, e, !0 === d) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), Cu = bl("$ZodObjectJIT", (e, t) => {
	Eu.init(e, t);
	const n = e._zod.parse, a = To(() => Ru(t)), i = Il.memoizer;
	let s;
	const r = Fo, o = !Il.jitless, l = o && jo.value, c = t.catchall;
	let u;
	e._zod.parse = (d, p) => {
		u ?? (u = a.value);
		const f = d.value;
		return r(f) ? o && l && !1 === p?.async && !0 !== p.jitless ? (s || (s = ((t) => {
			const n = a.value, s = n.symbolKeys, r = new Fc(["payload", "ctx"], {
				shape: t,
				inst: e,
				memo: i,
				syms: s
			}), o = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, l = (e, t) => `\n          let ${e}_ab = false;\n          for (let i = 0; i < ${e}.issues.length; i++) {\n            const iss = ${e}.issues[i];\n            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];\n            payload.issues.push(iss);\n            if (iss.continue !== true) ${e}_ab = true;\n          }\n          if (${e}_ab && ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }`;
			r.write("const input = payload.value;");
			const c = Object.create(null);
			let u = 0;
			for (const e of n.allKeys) c[e] = "key_" + u++;
			r.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
			for (const e of n.allKeys) {
				if ("__proto__" === e) continue;
				const n = c[e], a = "symbol" == typeof e ? `syms[${s.indexOf(e)}]` : Oo(e), i = `${a} in input`, u = t[e], d = u?._zod?.optin, p = void 0 !== d, f = "optional" === u?._zod?.optout;
				if (r.write(`const ${n} = ${o(a)};`), p && f) {
					const e = "optional" === d ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
					r.write(`\n        const ${n}_present = ${i};\n        if (!${n}.issues.length || ${n}_present) {\n          if (${n}.issues.length) {${l(n, a)}\n          }\n\n          if (${e}) {\n            newResult[${a}] = ${n}.value;\n          }\n        }\n\n      `);
				} else p ? (r.write(`\n        if (${n}.issues.length) {${l(n, a)}\n        }\n      `), "defaulted" === d ? r.write(`newResult[${a}] = ${n}.value;`) : r.write(`\n        if (${n}.value !== undefined || ${i}) {\n          newResult[${a}] = ${n}.value;\n        }\n      `)) : r.write(`\n        const ${n}_present = ${i};\n        if (${n}.issues.length) {${l(n, a)}\n        }\n        if (!${n}_present && !${n}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${a}]\n          });\n          if (ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }\n        }\n\n        if (${n}_present) {\n          newResult[${a}] = ${n}.value;\n        }\n\n      `);
			}
			return r.write("payload.value = newResult;"), r.write("return payload;"), r.compile();
		})(t.shape)), d = s(d, p), c ? Du([], f, d, p, u, e, !0 === p?.abortEarly) : d) : n(d, p) : (d.issues.push({
			expected: "object",
			code: "invalid_type",
			input: f,
			inst: e
		}), d);
	};
});
function Ou(e, t, n, a) {
	for (const s of e) if (0 === s.issues.length) return t.value = s.value, t;
	const i = e.filter((e) => !Xo(e));
	return 1 === i.length ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => il(e, a, Al())))
	}), t);
}
const Pu = bl("$ZodUnion", (e, t) => {
	Bc.init(e, t), gl(e, "optin", (e) => e.def.options.some((e) => "defaulted" === e._zod.optin) ? "defaulted" : e.def.options.some((e) => void 0 !== e._zod.optin) ? "optional" : void 0), gl(e, "optout", (e) => e.def.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0), gl(e, "values", (e) => {
		if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
	}), gl(e, "pattern", (e) => {
		if (e.def.options.every((e) => e._zod.pattern)) {
			const t = e.def.options.map((e) => e._zod.pattern);
			return new RegExp(`^(${t.map((e) => No(e.source)).join("|")})$`);
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
		return s ? Promise.all(r).then((t) => Ou(t, a, e, i)) : Ou(r, a, e, i);
	};
}), Fu = bl("$ZodIntersection", (e, t) => {
	Bc.init(e, t), e._zod.parse = (e, n) => {
		const a = e.value, i = t.left._zod.run({
			value: a,
			issues: []
		}, n), s = t.right._zod.run({
			value: a,
			issues: []
		}, n);
		return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([t, n]) => Bu(e, t, n)) : Bu(e, i, s);
	};
});
function ju(e, t) {
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (e instanceof Date && t instanceof Date && +e === +t) return {
		valid: !0,
		data: e
	};
	if (Bo(e) && Bo(t)) {
		const n = Object.keys(t), a = Object.keys(e).filter((e) => -1 !== n.indexOf(e)), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (const s of a) {
			if ("__proto__" === s) continue;
			const n = ju(e[s], t[s]);
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
			const i = ju(e[a], t[a]);
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
function Bu(e, t, n) {
	const a = /* @__PURE__ */ new Map();
	let i;
	const s = /* @__PURE__ */ new Map(), r = (e, t) => {
		let n;
		if ("unrecognized_keys" !== e.code || e.path?.length) {
			if ("invalid_key" !== e.code || "record" !== e.origin || 1 !== e.path?.length) return !1;
			{
				const t = String(e.path[0]);
				s.has(t) || s.set(t, e), n = [t];
			}
		} else i ?? (i = e), n = e.keys;
		for (const i of n) a.has(i) || a.set(i, {}), a.get(i)[t] = !0;
		return !0;
	};
	for (const c of t.issues) r(c, "l") || e.issues.push(c);
	for (const c of n.issues) r(c, "r") || e.issues.push(c);
	const o = [...a].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (o.length) {
		const t = i ? o.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (const n of o) !t.includes(n) && s.has(n) && e.issues.push(s.get(n));
	}
	const l = ju(t.value, n.value);
	if (!l.valid) {
		if (Xo(e)) return e;
		throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
	}
	return e.value = l.data, e;
}
const Lu = bl("$ZodRecord", (e, t) => {
	Bc.init(e, t);
	const n = Il.memoizer;
	n?.attach(e), e._zod.parse = (a, i) => {
		const s = a.value;
		if (!Bo(s)) return a.issues.push({
			expected: "record",
			code: "invalid_type",
			input: s,
			inst: e
		}), a;
		const r = [], o = t.keyType._zod.values;
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
						issues: o.issues.map((e) => il(e, i, Al())),
						input: n,
						path: [n],
						inst: e
					});
					continue;
				}
				const c = o.value;
				if ("__proto__" === c) continue;
				const u = t.valueType._zod.run({
					value: s[n],
					issues: []
				}, i);
				u instanceof Promise ? r.push(u.then((e) => {
					e.issues.length && a.issues.push(...el(n, e.issues)), a.value[c] = e.value;
				})) : (u.issues.length && a.issues.push(...el(n, u.issues)), a.value[c] = u.value);
			}
			let c;
			for (const e in s) if (!l.has(e)) if ("loose" === t.mode) {
				if ("__proto__" === e) continue;
				a.value[e] = s[e];
			} else c = c ?? [], c.push(e);
			c && c.length > 0 && a.issues.push({
				code: "unrecognized_keys",
				input: s,
				inst: e,
				keys: c,
				continue: !0
			});
		} else {
			let l;
			a.value = n ? n.alloc(e, a, {}, i) : {};
			for (const n of Reflect.ownKeys(s)) {
				if ("__proto__" === n) continue;
				if (!Object.prototype.propertyIsEnumerable.call(s, n)) continue;
				let c = t.keyType._zod.run({
					value: n,
					issues: []
				}, i);
				if (c instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if ("string" == typeof n && gc.test(n) && c.issues.length) {
					const e = t.keyType._zod.run({
						value: Number(n),
						issues: []
					}, i);
					if (e instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
					0 === e.issues.length && (c = e);
				}
				if (c.issues.length) {
					"loose" === t.mode ? a.value[n] = s[n] : o ? (l = l ?? [], l.push(n)) : a.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: c.issues.map((e) => il(e, i, Al())),
						input: n,
						path: [n],
						inst: e
					});
					continue;
				}
				const u = c.value;
				if ("__proto__" === u) continue;
				const d = t.valueType._zod.run({
					value: s[n],
					issues: []
				}, i);
				d instanceof Promise ? r.push(d.then((e) => {
					e.issues.length && a.issues.push(...el(n, e.issues)), a.value[u] = e.value;
				})) : (d.issues.length && a.issues.push(...el(n, d.issues)), a.value[u] = d.value);
			}
			l && l.length > 0 && a.issues.push({
				code: "unrecognized_keys",
				input: s,
				inst: e,
				keys: l,
				continue: !0
			});
		}
		return r.length ? Promise.all(r).then(() => a) : a;
	};
}), Gu = bl("$ZodEnum", (e, t) => {
	Bc.init(e, t);
	const n = ko(t.entries), a = new Set(n);
	e._zod.values = a, gl(e, "pattern", (e) => {
		const t = ko(e.def.entries).filter((e) => Go.has(typeof e));
		return new RegExp(t.length ? `^(${t.map((e) => Uo(e.toString())).join("|")})$` : "^[^\\s\\S]$");
	}), e._zod.parse = (t, i) => {
		const s = t.value;
		return a.has(s) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: s,
			inst: e
		}), t;
	};
}), Uu = bl("$ZodTransform", (e, t) => {
	Bc.init(e, t), e._zod.optin = "optional", Il.memoizer?.guard(e), e._zod.parse = (n, a) => {
		if ("backward" === a.direction) throw new kl(e.constructor.name);
		const i = t.transform(n.value, n);
		if (a.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new Sl();
		return n.value = i, n;
	};
});
function Zu(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
const Hu = bl("$ZodOptional", (e, t) => {
	Bc.init(e, t), gl(e, "optin", (e) => "defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional"), e._zod.optout = "optional", gl(e, "values", (e) => {
		const t = e.def.innerType._zod.values;
		return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
	}), gl(e, "pattern", (e) => {
		const t = e.def.innerType._zod.pattern;
		return t ? new RegExp(`^(${No(t.source)})?$`) : void 0;
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
}), qu = bl("$ZodExactOptional", (e, t) => {
	Hu.init(e, t), gl(e, "values", (e) => e.def.innerType._zod.values), gl(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), Wu = bl("$ZodNullable", (e, t) => {
	Bc.init(e, t), gl(e, "optin", (e) => e.def.innerType._zod.optin), gl(e, "optout", (e) => e.def.innerType._zod.optout), gl(e, "pattern", (e) => {
		const t = e.def.innerType._zod.pattern;
		return t ? new RegExp(`^(${No(t.source)}|null)$`) : void 0;
	}), gl(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => null === e.value ? e : t.innerType._zod.run(e, n);
}), Vu = bl("$ZodDefault", (e, t) => {
	Bc.init(e, t), e._zod.optin = "defaulted", gl(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		if (void 0 === e.value) return e.value = t.defaultValue, e;
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then((e) => Ju(e, t)) : Ju(a, t);
	};
});
function Ju(e, t) {
	return void 0 === e.value && (e.value = t.defaultValue), e;
}
const Ku = bl("$ZodPrefault", (e, t) => {
	Bc.init(e, t), e._zod.optin = "defaulted", gl(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => ("backward" === n.direction || void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), Yu = bl("$ZodNonOptional", (e, t) => {
	Bc.init(e, t), gl(e, "values", (e) => {
		const t = e.def.innerType._zod.values;
		return t ? new Set([...t].filter((e) => void 0 !== e)) : void 0;
	}), e._zod.parse = (n, a) => {
		const i = t.innerType._zod.run(n, a);
		return i instanceof Promise ? i.then((t) => Xu(t, e)) : Xu(i, e);
	};
});
function Xu(e, t) {
	return e.issues.length || void 0 !== e.value || e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function Qu(e, t, n, a) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => il(e, a, Al())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
const ed = bl("$ZodCatch", (e, t) => {
	Bc.init(e, t), gl(e, "optin", (e) => "defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional"), gl(e, "optout", (e) => e.def.innerType._zod.optout), gl(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const a = t.innerType._zod.run({
			value: e.value,
			issues: []
		}, n);
		return a instanceof Promise ? a.then((a) => Qu(e, a, t, n)) : Qu(e, a, t, n);
	};
}), td = bl("$ZodPipe", (e, t) => {
	Bc.init(e, t), gl(e, "values", (e) => e.def.in._zod.values), gl(e, "optin", (e) => e.def.in._zod.optin), gl(e, "optout", (e) => e.def.out._zod.optout), gl(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) {
			const a = t.out._zod.run(e, n);
			return a instanceof Promise ? a.then((e) => nd(e, t.in, n)) : nd(a, t.in, n);
		}
		const a = t.in._zod.run(e, n);
		return a instanceof Promise ? a.then((e) => nd(e, t.out, n)) : nd(a, t.out, n);
	};
});
function nd(e, t, n) {
	return e.issues.some((e) => "unrecognized_keys" !== e.code) ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
const ad = bl("$ZodReadonly", (e, t) => {
	Bc.init(e, t), gl(e, "propValues", (e) => e.def.innerType._zod.propValues), gl(e, "values", (e) => e.def.innerType._zod.values), gl(e, "optin", (e) => e.def.innerType?._zod?.optin), gl(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then(id) : id(a);
	};
});
function id(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
const sd = bl("$ZodCustom", (e, t) => {
	vc.init(e, t), Bc.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		const a = n.value, i = t.fn(a);
		if (i instanceof Promise) return i.then((t) => rd(t, n, a, e));
		rd(i, n, a, e);
	};
});
function rd(e, t, n, a) {
	if (!e) {
		const e = {
			code: "custom",
			input: n,
			inst: a,
			path: [...a._zod.def.path ?? []],
			continue: !a._zod.def.abort
		};
		a._zod.def.params && (e.params = a._zod.def.params), t.issues.push(ll(e));
	}
}
var od = class extends Error {
	constructor() {
		super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
	}
};
const ld = "~memo", cd = [];
function ud(e) {
	return null !== e && "object" == typeof e;
}
function dd(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
const pd = /* @__PURE__ */ new WeakMap();
function fd(e, t, n) {
	const a = pd.get(e);
	if (void 0 !== a) return a ? 2 : 0;
	if (t.has(e)) return 2;
	t.add(e);
	let i = 0;
	const s = (e) => {
		if (2 !== i && e?._zod) {
			const a = fd(e, t, n);
			a > i && (i = a);
		}
	}, r = (e) => {
		e > i && (i = e);
	}, o = e._zod.def;
	switch (o.type) {
		case "object": {
			const e = $o(o);
			r(e ? ((e) => {
				let a = 0;
				for (const i of Reflect.ownKeys(e)) {
					const s = Object.getOwnPropertyDescriptor(e, i);
					if (!s.enumerable) continue;
					const r = s.get ? 1 : s.value?._zod ? fd(s.value, t, n) : 0;
					r > a && (a = r);
				}
				return a;
			})(e) : 1), s(o.catchall);
			break;
		}
		case "array":
			s(o.element);
			break;
		case "tuple":
			for (const e of o.items) s(e);
			s(o.rest);
			break;
		case "record":
		case "map":
			s(o.keyType), s(o.valueType);
			break;
		case "set":
			s(o.valueType);
			break;
		case "union":
			for (const e of o.options) s(e);
			break;
		case "intersection":
			s(o.left), s(o.right);
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
			s(o.innerType);
			break;
		case "pipe":
			s(o.in), s(o.out);
			break;
		case "function":
			s(o.input), s(o.output);
			break;
		case "lazy": {
			const a = o._cachedInner ?? (n ? e._zod.innerType : void 0);
			r(a ? fd(a, t, !1) : 1);
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
				if (n._zod) s(n);
				else if (Array.isArray(n)) for (const e of n) s(e);
			}
		}
	}
	return t.delete(e), function(e, t) {
		return 1 !== t && pd.set(e, 2 === t), t;
	}(e, i);
}
let md;
const hd = [], gd = {
	alloc(e, t, n) {
		const a = md;
		if (!a) return n;
		md = void 0;
		const i = {
			value: n,
			issues: null
		};
		return a.set(t.value, i), hd.push(i), n;
	},
	guard(e) {
		var t;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			const t = e._zod.parse, n = (e, n) => {
				if ("backward" !== n.direction && function(e, t) {
					const n = e[ld]?.backEdges;
					return void 0 !== n && ud(t) && n.has(t);
				}(n, e.value)) throw new od();
				return t(e, n);
			};
			e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
		});
	},
	attach(e) {
		var t;
		let n, a, i, s = !1;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			const t = e._zod.parse, r = (o, l) => {
				if (void 0 === n) {
					const a = fd(e, /* @__PURE__ */ new Set(), !1);
					if (0 === a) return e._zod.parse = t, e._zod.run === r && (e._zod.run = t), t(o, l);
					2 === a || s ? n = !0 : s = !0;
				}
				const c = o.value;
				if (!ud(c)) return t(o, l);
				let u, d = l[ld];
				d || (d = {
					buckets: /* @__PURE__ */ new WeakMap(),
					backEdges: void 0
				}, l[ld] = d), a === l ? u = i : (u = function(e, t) {
					let n = e.buckets.get(t);
					return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
				}(d, e), a = l, i = u);
				const p = u.get(c);
				if (p) return o.value = p.value, p.issues ? p.issues.length && o.issues.push(...dd(p.issues)) : (o.memo = !0, d.backEdges ?? (d.backEdges = /* @__PURE__ */ new WeakSet()), d.backEdges.add(p.value)), o;
				md = u;
				const f = hd.length, m = t(o, l);
				md = void 0;
				const h = hd.length > f ? hd.pop() : void 0;
				return m instanceof Promise ? m.then((e) => (h && (h.issues = e.issues.length ? dd(e.issues) : cd), e)) : (h && (h.issues = m.issues.length ? dd(m.issues) : cd), m);
			};
			e._zod.parse = r, e._zod.run === t && (e._zod.run = r);
		});
	}
}, yd = () => {
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
			case "invalid_value": return 1 === e.values.length ? `Invalid input: expected ${qo(e.values[0])}` : `Invalid option: expected one of ${Io(e.values, "|")}`;
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
			case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${Io(e.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${e.origin}`;
			case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : !1 === e.inclusive ? "Invalid input: more than one option matched" : "Invalid input";
			case "invalid_element": return `Invalid value in ${e.origin}`;
			default: return "Invalid input";
		}
	};
};
var wd;
(wd = globalThis).__zod_globalRegistry ?? (wd.__zod_globalRegistry = new class {
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
const _d = globalThis.__zod_globalRegistry;
function vd(e) {
	return e.checks && (e.checks = [...e.checks]), e;
}
function bd(e, t) {
	return new kc({
		check: "less_than",
		...Ho(t),
		value: e,
		inclusive: !1
	});
}
function Sd(e, t) {
	return new kc({
		check: "less_than",
		...Ho(t),
		value: e,
		inclusive: !0
	});
}
function kd(e, t) {
	return new Ic({
		check: "greater_than",
		...Ho(t),
		value: e,
		inclusive: !1
	});
}
function Id(e, t) {
	return new Ic({
		check: "greater_than",
		...Ho(t),
		value: e,
		inclusive: !0
	});
}
function Ad(e, t) {
	return new Ac({
		check: "multiple_of",
		...Ho(t),
		value: e
	});
}
function xd(e, t) {
	return new Tc({
		check: "max_length",
		...Ho(t),
		maximum: e
	});
}
function Td(e, t) {
	return new Nc({
		check: "min_length",
		...Ho(t),
		minimum: e
	});
}
function Nd(e, t) {
	return new Mc({
		check: "length_equals",
		...Ho(t),
		length: e
	});
}
function Md(e) {
	return new Pc({
		check: "overwrite",
		tx: e
	});
}
function $d(e, t) {
	const n = new vc({
		check: "custom",
		...Ho(t)
	});
	return n._zod.check = e, n;
}
function zd(e, ...t) {
	for (const n of t) for (const t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && Mo(e, t, n[t]);
	return e;
}
function Rd(e) {
	let t = e?.target ?? "draft-2020-12";
	return "draft-4" === t && (t = "draft-04"), "draft-7" === t && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? _d,
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
function Dd(e, t, n, a, i) {
	const s = "function" == typeof t.unrepresentable ? t.unrepresentable({
		zodSchema: e,
		path: a.path,
		message: i
	}) : t.unrepresentable;
	if ("any" === s) return !1;
	if (void 0 === s || "throw" === s) throw new Error(i);
	return Object.assign(n, s), !0;
}
function Ed(e, t, n = {
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
	t.seen.set(e, r), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
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
		s && (r.ref || (r.ref = s), Ed(s, t, a), t.seen.get(s).isParent = !0);
	}
	const l = t.metadataRegistry.get(e);
	return l && zd(r.schema, l), "input" === t.io && Zd(e) && (delete r.schema.examples, delete r.schema.default), "input" === t.io && "_prefault" in r.schema && ((a = r.schema).default ?? (a.default = r.schema._prefault)), delete r.schema._prefault, t.seen.get(e).schema;
}
function Cd(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Od(e, t) {
	const n = e.seen.get(t);
	if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
	if (e.external && e.sharedDefsExtractedFor === e.external) return;
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
					ref: `${i("__shared")}#/${a}/${Cd(s)}`
				};
			}
			const i = `#/${a}/`;
			if (t[1] === n && !t[1].schema.id) return { ref: "#" };
			const s = t[1].schema.id ?? "__schema" + e.counter++;
			return {
				defId: s,
				ref: i + Cd(s)
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
	e.external && (e.sharedDefsExtractedFor = e.external);
}
function Pd(e) {
	const t = e.anyOf;
	if (!Array.isArray(t) || 0 === t.length || void 0 !== e.type) return;
	const n = [];
	for (const a of t) {
		if (!a || "object" != typeof a) return;
		Pd(a);
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
const Fd = /* @__PURE__ */ new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]), jd = ["oneOf", "anyOf"];
function Bd(e) {
	const t = e.additionalProperties;
	return void 0 === t || !1 === t || "object" != typeof t || null === t ? null : Object.keys(t).length ? t : null;
}
function Ld(e) {
	const t = [];
	for (const s of e) {
		if ("object" != typeof s || "object" !== s.type) return null;
		for (const e in s) if (!Fd.has(e)) return null;
		t.push(s);
	}
	const n = {}, a = /* @__PURE__ */ new Set();
	for (const s of t) {
		for (const e in s.properties) {
			if (Object.prototype.hasOwnProperty.call(n, e)) continue;
			const a = [];
			for (const n of t) {
				const t = n.properties?.[e] ?? Bd(n);
				null != t && (a.some((e) => JSON.stringify(e) === JSON.stringify(t)) || a.push(t));
			}
			Mo(n, e, 1 === a.length ? a[0] : Ld(a) ?? { allOf: a });
		}
		for (const e of s.required ?? []) a.add(e);
	}
	const i = {
		type: "object",
		properties: n
	};
	if (a.size && (i.required = [...a]), t.every((e) => !1 === e.additionalProperties)) i.additionalProperties = !1;
	else {
		const e = [];
		for (const n of t) {
			const t = Bd(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		1 === e.length ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function Gd(e) {
	const t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (const i of Fd) if (i in e) return;
	const n = t.filter((e) => jd.some((t) => Array.isArray(e[t])));
	let a = null;
	if (n.length) {
		const e = n[0], i = jd.find((t) => Array.isArray(e[t]));
		if (1 !== Object.keys(e).length) return;
		const s = t.filter((t) => t !== e), r = e[i].map((e) => Ld([...s, e]));
		if (r.some((e) => !e)) return;
		a = { [i]: r };
	} else a = Ld(t);
	a && (delete e.allOf, zd(e, a));
}
function Ud(e, t) {
	const n = e.seen.get(t);
	if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const a = (t) => {
		const n = e.seen.get(t);
		if (null === n.ref) return;
		const i = n.def ?? n.schema, s = { ...i }, r = n.ref;
		if (n.ref = null, r) {
			a(r);
			const n = e.seen.get(r), o = n.schema;
			if (!o.$ref || "draft-07" !== e.target && "draft-04" !== e.target && "openapi-3.0" !== e.target ? zd(i, o) : (i.allOf = i.allOf ?? [], i.allOf.push(o)), zd(i, s), t._zod.parent === r) for (const e in i) "$ref" !== e && "allOf" !== e && (e in s || delete i[e]);
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
	if (!e.external || e.sharedEmitDoneFor !== e.external) {
		for (const t of [...e.seen.entries()].reverse()) a(t[0]);
		if ("openapi-3.0" !== e.target) for (const t of e.seen.entries()) Pd(t[1].def ?? t[1].schema);
		for (const t of e.deferred) t();
		if (e.intersections.length) {
			const t = /* @__PURE__ */ new Map();
			for (const n of e.seen.values()) for (const e of [n.schema, n.def]) {
				const n = e?.allOf;
				if (!Array.isArray(n)) continue;
				const a = t.get(n);
				a ? a.push(e) : t.set(n, [e]);
			}
			for (const n of e.intersections) for (const e of t.get(n) ?? []) Gd(e);
		}
	}
	const i = {};
	if ("draft-2020-12" === e.target ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === e.target ? i.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === e.target ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		const n = e.external.registry.get(t)?.id;
		if (!n) throw new Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	zd(i, n.defId ? n.schema : n.def ?? n.schema);
	const s = e.metadataRegistry.get(t)?.id;
	void 0 !== s && i.id === s && delete i.id;
	const r = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (const l of e.seen.entries()) {
		const e = l[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, Mo(r, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(r).length > 0 && ("draft-2020-12" === e.target ? i.$defs = r : i.definitions = r);
	try {
		const n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Hd(t, "input", e.processors),
					output: Hd(t, "output", e.processors)
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
const Hd = (e, t, n = {}) => (a) => {
	const { libraryOptions: i, target: s } = a ?? {}, r = Rd({
		...i ?? {},
		target: s,
		io: t,
		processors: n
	});
	return Ed(e, r), Od(r, e), Ud(r, e);
}, qd = (e, t, n) => {
	(void 0 === e[t] || n > e[t]) && (e[t] = n);
}, Wd = (e, t, n) => {
	(void 0 === e[t] || n < e[t]) && (e[t] = n);
}, Vd = (e, t) => {
	qd(e, "minimum", t), Wd(e, "maximum", t);
}, Jd = (e, t) => {
	e.multipleOf ?? (e.multipleOf = []), e.multipleOf.includes(t) || e.multipleOf.push(t);
}, Kd = (e, t) => {
	e.patterns ?? (e.patterns = /* @__PURE__ */ new Set()), e.patterns.add(t);
}, Yd = (e, t) => {
	e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
}, Xd = (e, t) => {
	e.format = t, t.includes("int") && (e.isInt = !0);
}, Qd = (e, t) => qd(e, "minimum", t.minimum), ep = (e, t) => Wd(e, "maximum", t.maximum), tp = (e) => (t, n) => {
	Xd(t, n.format);
	const [a, i] = e[n.format];
	qd(t, "minimum", a), Wd(t, "maximum", i);
}, np = {
	greater_than: (e, t) => qd(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
	less_than: (e, t) => Wd(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
	multiple_of: (e, t) => Jd(e, t.value),
	number_format: tp(Wo),
	bigint_format: tp(Vo),
	min_length: Qd,
	max_length: ep,
	length_equals: (e, t) => Vd(e, t.length),
	min_size: Qd,
	max_size: ep,
	size_equals: (e, t) => Vd(e, t.size),
	string_format: (e, t) => {
		Xd(e, t.format), t.pattern && Kd(e, t.pattern), "base64" !== t.format && "base64url" !== t.format || (e.contentEncoding = t.format), (t.local || -1 === t.precision) && (e.laxFormat = !0);
	},
	mime_type: (e, t) => Yd(e, t.mime)
};
function ap(e) {
	const t = {}, n = e._zod.def, a = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
	for (const s of a) np[s._zod.def.check]?.(t, s._zod.def);
	const i = e._zod.bag;
	void 0 !== i.minimum && qd(t, "minimum", i.minimum), void 0 !== i.exclusiveMinimum && qd(t, "exclusiveMinimum", i.exclusiveMinimum), void 0 !== i.maximum && Wd(t, "maximum", i.maximum), void 0 !== i.exclusiveMaximum && Wd(t, "exclusiveMaximum", i.exclusiveMaximum), void 0 !== i.multipleOf && Jd(t, i.multipleOf), void 0 !== i.format && (t.format ?? (t.format = i.format), i.format.includes("int") && (t.isInt = !0)), i.mime && Yd(t, i.mime);
	for (const s of i.patterns ?? []) Kd(t, s);
	return t;
}
const ip = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, sp = /* @__PURE__ */ new Map([[gu, /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/], [wu, /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/]]), rp = (e) => sp.get(e) ?? e;
function op(e) {
	const t = e._zod.def;
	return "pipe" === t.type && t.in._zod.traits.has("$ZodTransform") ? op(t.out) : "catch" === t.type ? op(t.innerType) : e._zod.optin;
}
function lp(e, t, n) {
	if (t.$ref) {
		if (n.has(t)) return t;
		n.add(t);
		const a = e.get(t)?.def;
		if (!a) return t;
		const i = lp(e, a, n);
		return i === a ? t : i;
	}
	for (const m of ["anyOf", "oneOf"]) {
		const a = t[m];
		if (!Array.isArray(a)) continue;
		const i = a.map((t) => lp(e, t, n));
		i.some((e, t) => e !== a[t]) && (t = {
			...t,
			[m]: i
		});
	}
	const a = Array.isArray(t.type) ? t.type : [t.type], i = !a.includes("string") && a.some((e) => "number" === e || "integer" === e), s = t.enum ?? (void 0 !== t.const ? [t.const] : void 0);
	if (!i && !s?.some((e) => "number" == typeof e)) return t;
	const { minimum: r, maximum: o, exclusiveMinimum: l, exclusiveMaximum: c, multipleOf: u, format: d, id: p, ...f } = t;
	return f.enum ? f.enum = f.enum.map((e) => "number" == typeof e ? String(e) : e) : "number" == typeof f.const && (f.const = String(f.const)), i ? (f.type = "string", s || (f.pattern = (a.includes("number") ? gc : hc).source), f) : f;
}
const cp = /* @__PURE__ */ new WeakMap(), up = Symbol();
function dp(e, t, n, a, i) {
	let s = !1;
	const r = JSON.stringify(e, (e, t) => "bigint" != typeof t ? t : (s = !0, null));
	return s ? (Dd(t, n, a, i, "BigInt defaults cannot be represented in JSON Schema"), up) : JSON.parse(r);
}
const pp = (e, t, n, a) => {
	const i = e._zod.def;
	Ed(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
}, fp = new WeakSet([Object.prototype, Error.prototype]);
function mp(e, t, n) {
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
const hp = (e, t) => {
	$l.init(e, t), e.name = "ZodError";
	const n = Object.getPrototypeOf(e);
	fp.has(n) || (fp.add(n), mp(n, "format", (e) => (t) => function(e, t = (e) => e.message) {
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
						const n = e[i], r = i === e.length - 1;
						if ("_errors" === n) {
							r && a._errors.push(t(s)), i++;
							continue;
						}
						Object.prototype.hasOwnProperty.call(a, n) || Object.defineProperty(a, n, {
							value: { _errors: [] },
							enumerable: !0,
							writable: !0,
							configurable: !0
						});
						const o = a[n];
						r && o._errors.push(t(s)), a = o, i++;
					}
				}
			}
		};
		return a(e), n;
	}(e, t)), mp(n, "flatten", (e) => (t) => function(e, t = (e) => e.message) {
		const n = {}, a = [];
		for (const i of e.issues) i.path.length > 0 ? zl(n, i.path[0], () => []).push(t(i)) : a.push(t(i));
		return {
			formErrors: a,
			fieldErrors: n
		};
	}(e, t)), mp(n, "addIssue", (e) => (t) => {
		e.issues.push(t), e.message = JSON.stringify(e.issues, Ao, 2);
	}), mp(n, "addIssues", (e) => (t) => {
		e.issues.push(...t), e.message = JSON.stringify(e.issues, Ao, 2);
	}), Object.defineProperty(n, "isEmpty", {
		configurable: !0,
		enumerable: !1,
		get() {
			return 0 === this.issues.length;
		}
	}));
}, gp = bl("ZodError", hp, void 0, { Parent: Error }), yp = Dl(gp), wp = El(gp), _p = Cl(gp), vp = Pl(gp), bp = Bl(gp), Sp = Ll(gp), kp = Gl(gp), Ip = Ul(gp), Ap = Zl(gp), xp = Hl(gp), Tp = ql(gp), Np = Wl(gp);
function Mp() {
	Il.memoizer || Al({ memoizer: gd });
}
const $p = bl("ZodType", (e, t) => (Il.localeError || Al({ localeError: yd() }), Bc.init(e, t), e.def = t, e.type = t.type, e), {
	check(...e) {
		const t = this.def;
		return this.clone(Co(t, { checks: [...t.checks ?? [], ...e.map((e) => "function" == typeof e ? { _zod: {
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
				return new Ff({
					type: "custom",
					check: "custom",
					fn: t,
					...Ho(n)
				});
			}(0, e, t);
		}(e, t));
	},
	superRefine(e, t) {
		return this.check(function(e, t) {
			return function(e, t) {
				const n = $d((t) => (t.addIssue = (e) => {
					if ("string" == typeof e) t.issues.push(ll(e, t.value, n._zod.def));
					else {
						const a = e;
						a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), "input" in a || (a.input = t.value), a.inst ?? (a.inst = n), a.continue ?? (a.continue = !n._zod.def.abort), t.issues.push(ll(a));
					}
				}, e(t.value, t)), t);
				return n;
			}(e, t);
		}(e, t));
	},
	overwrite(e) {
		return this.check(Md(e));
	},
	optional() {
		return Tf(this);
	},
	exactOptional() {
		return new Nf({
			type: "optional",
			innerType: this
		});
	},
	nullable() {
		return $f(this);
	},
	nullish() {
		return Tf($f(this));
	},
	nonoptional(e) {
		return function(e, t) {
			return new Df({
				type: "nonoptional",
				innerType: e,
				...Ho(t)
			});
		}(this, e);
	},
	array() {
		return hf(this);
	},
	or(e) {
		return _f([this, e]);
	},
	and(e) {
		return new vf({
			type: "intersection",
			left: this,
			right: e
		});
	},
	transform(e) {
		return Of(this, new Af({
			type: "transform",
			transform: e
		}));
	},
	default(e) {
		return t = e, new zf({
			type: "default",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Lo(t);
			}
		});
		var t;
	},
	prefault(e) {
		return t = e, new Rf({
			type: "prefault",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Lo(t);
			}
		});
		var t;
	},
	catch(e) {
		return new Ef({
			type: "catch",
			innerType: this,
			catchValue: "function" == typeof (t = e) ? t : yl(t)
		});
		var t;
	},
	pipe(e) {
		return Of(this, e);
	},
	readonly() {
		return new Pf({
			type: "readonly",
			innerType: this
		});
	},
	describe(e) {
		const t = this.clone();
		return _d.add(t, { description: e }), t;
	},
	meta(...e) {
		if (0 === e.length) return _d.get(this);
		const t = this.clone();
		return _d.add(t, e[0]), t;
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
		return ul(this, "~standard", {
			...Gc(this),
			jsonSchema: {
				input: Hd(this, "input"),
				output: Hd(this, "output")
			}
		});
	},
	set "~standard"(e) {
		cl(this, "~standard", e);
	},
	parse: function e(t, n) {
		return yp(this, t, n, { callee: e });
	},
	parseAsync: async function e(t, n) {
		return await wp(this, t, n, { callee: e });
	},
	safeParse(e, t) {
		return _p(this, e, t);
	},
	async safeParseAsync(e, t) {
		return vp(this, e, t);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(e) {
		cl(this, "spa", e);
	},
	validate(e, t) {
		return ((e, t, n) => {
			const a = e._zod.bag.validator;
			if (void 0 !== a) {
				if (a(t) !== Fl) return !0;
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
				let s;
				if (i ? (a[jl] = !0, s = i({
					value: t,
					issues: []
				}, a)) : s = e._zod.run({
					value: t,
					issues: []
				}, a), s instanceof Promise) throw new Sl();
				return 0 === s.issues.length;
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
		return bp(this, t, n, { callee: e });
	},
	decode: function e(t, n) {
		return Sp(this, t, n, { callee: e });
	},
	encodeAsync: async function e(t, n) {
		return await kp(this, t, n, { callee: e });
	},
	decodeAsync: async function e(t, n) {
		return await Ip(this, t, n, { callee: e });
	},
	safeEncode(e, t) {
		return Ap(this, e, t);
	},
	safeDecode(e, t) {
		return xp(this, e, t);
	},
	async safeEncodeAsync(e, t) {
		return Tp(this, e, t);
	},
	async safeDecodeAsync(e, t) {
		return Np(this, e, t);
	},
	toJSONSchema(e) {
		return ((e, t = {}) => (n) => {
			const a = Rd({
				...n,
				processors: t
			});
			return Ed(e, a), Od(a, e), Ud(a, e);
		})(this, {})(e);
	},
	get description() {
		return _d.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), zp = bl("_ZodString", (e, t) => {
	Uc.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = n;
		a.type = "string";
		const { minimum: i, maximum: s, format: r, patterns: o, contentEncoding: l, laxFormat: c } = ap(e);
		if ("number" == typeof i && (a.minLength = i), "number" == typeof s && (a.maxLength = s), r && (a.format = ip[r] ?? r, "" === a.format && delete a.format, ("time" === r || c) && delete a.format), l && (a.contentEncoding = l), o && o.size > 0) {
			const e = [...o].map(rp);
			1 === e.length ? a.pattern = e[0].source : e.length > 1 && (a.allOf = [...e.map((e) => ({
				..."draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	})(e, t, n);
}, dl({
	format: (e) => ap(e).format ?? null,
	minLength: (e) => ap(e).minimum ?? null,
	maxLength: (e) => ap(e).maximum ?? null
}, {
	regex(...e) {
		return this.check(function(e, t) {
			return new zc({
				check: "string_format",
				format: "regex",
				...Ho(t),
				pattern: e
			});
		}(...e));
	},
	includes(...e) {
		return this.check(function(e, t) {
			return new Ec({
				check: "string_format",
				format: "includes",
				...Ho(t),
				includes: e
			});
		}(...e));
	},
	startsWith(...e) {
		return this.check(function(e, t) {
			return new Cc({
				check: "string_format",
				format: "starts_with",
				...Ho(t),
				prefix: e
			});
		}(...e));
	},
	endsWith(...e) {
		return this.check(function(e, t) {
			return new Oc({
				check: "string_format",
				format: "ends_with",
				...Ho(t),
				suffix: e
			});
		}(...e));
	},
	min(...e) {
		return this.check(Td(...e));
	},
	max(...e) {
		return this.check(xd(...e));
	},
	length(...e) {
		return this.check(Nd(...e));
	},
	nonempty(...e) {
		return this.check(Td(1, ...e));
	},
	lowercase(e) {
		return this.check(function(e) {
			return new Rc({
				check: "string_format",
				format: "lowercase",
				...Ho(e)
			});
		}(e));
	},
	uppercase(e) {
		return this.check(function(e) {
			return new Dc({
				check: "string_format",
				format: "uppercase",
				...Ho(e)
			});
		}(e));
	},
	trim() {
		return this.check(Md((e) => e.trim()));
	},
	normalize(...e) {
		return this.check(function(e) {
			return Md((t) => t.normalize(e));
		}(...e));
	},
	toLowerCase() {
		return this.check(Md((e) => e.toLowerCase()));
	},
	toUpperCase() {
		return this.check(Md((e) => e.toUpperCase()));
	},
	slugify() {
		return this.check(Md((e) => function(e) {
			return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
		}(e)));
	}
})), Rp = bl("ZodString", (e, t) => {
	Uc.init(e, t), zp.init(e, t);
}, {
	email(e) {
		return this.check(function(e, t) {
			return new jp({
				type: "string",
				format: "email",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	url(e) {
		return this.check(function(e, t) {
			return new Gp({
				type: "string",
				format: "url",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	jwt(e) {
		return this.check(function(e, t) {
			return new af({
				type: "string",
				format: "jwt",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	emoji(e) {
		return this.check(function(e, t) {
			return new Up({
				type: "string",
				format: "emoji",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	guid(e) {
		return this.check(function(e, t) {
			return new Bp({
				type: "string",
				format: "guid",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	uuid(e) {
		return this.check(function(e, t) {
			return new Lp({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	uuidv4(e) {
		return this.check(function(e, t) {
			return new Lp({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: !1,
				version: "v4",
				...Ho(t)
			});
		}(0, e));
	},
	uuidv6(e) {
		return this.check(function(e, t) {
			return new Lp({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: !1,
				version: "v6",
				...Ho(t)
			});
		}(0, e));
	},
	uuidv7(e) {
		return this.check(function(e, t) {
			return new Lp({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: !1,
				version: "v7",
				...Ho(t)
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
				...Ho(t)
			});
		}(0, e));
	},
	cuid(e) {
		return this.check(function(e, t) {
			return new Hp({
				type: "string",
				format: "cuid",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	cuid2(e) {
		return this.check(function(e, t) {
			return new qp({
				type: "string",
				format: "cuid2",
				check: "string_format",
				abort: !1,
				...Ho(t)
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
				...Ho(t)
			});
		}(0, e));
	},
	base64(e) {
		return this.check(function(e, t) {
			return new ef({
				type: "string",
				format: "base64",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	base64url(e) {
		return this.check(function(e, t) {
			return new tf({
				type: "string",
				format: "base64url",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	xid(e) {
		return this.check(function(e, t) {
			return new Vp({
				type: "string",
				format: "xid",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	ksuid(e) {
		return this.check(function(e, t) {
			return new Jp({
				type: "string",
				format: "ksuid",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	ipv4(e) {
		return this.check(function(e, t) {
			return new Kp({
				type: "string",
				format: "ipv4",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	ipv6(e) {
		return this.check(function(e, t) {
			return new Yp({
				type: "string",
				format: "ipv6",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	cidrv4(e) {
		return this.check(function(e, t) {
			return new Xp({
				type: "string",
				format: "cidrv4",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	cidrv6(e) {
		return this.check(function(e, t) {
			return new Qp({
				type: "string",
				format: "cidrv6",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	e164(e) {
		return this.check(function(e, t) {
			return new nf({
				type: "string",
				format: "e164",
				check: "string_format",
				abort: !1,
				...Ho(t)
			});
		}(0, e));
	},
	datetime(e) {
		return this.check(function(e, t) {
			return new Cp({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: !1,
				local: !1,
				precision: null,
				...Ho(t)
			});
		}(0, e));
	},
	date(e) {
		return this.check(function(e, t) {
			return new Op({
				type: "string",
				format: "date",
				check: "string_format",
				...Ho(t)
			});
		}(0, e));
	},
	time(e) {
		return this.check(function(e, t) {
			return new Pp({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...Ho(t)
			});
		}(0, e));
	},
	duration(e) {
		return this.check(function(e, t) {
			return new Fp({
				type: "string",
				format: "duration",
				check: "string_format",
				...Ho(t)
			});
		}(0, e));
	}
});
function Dp(e) {
	return function(e, t) {
		return new Rp(vd({
			type: "string",
			...Ho(t)
		}));
	}(0, e);
}
const Ep = bl("ZodStringFormat", (e, t) => {
	Zc.init(e, t), zp.init(e, t);
}), Cp = bl("ZodISODateTime", (e, t) => {
	su.init(e, t), Ep.init(e, t);
}), Op = bl("ZodISODate", (e, t) => {
	ru.init(e, t), Ep.init(e, t);
}), Pp = bl("ZodISOTime", (e, t) => {
	ou.init(e, t), Ep.init(e, t);
}), Fp = bl("ZodISODuration", (e, t) => {
	lu.init(e, t), Ep.init(e, t);
}), jp = bl("ZodEmail", (e, t) => {
	Wc.init(e, t), Ep.init(e, t);
}), Bp = bl("ZodGUID", (e, t) => {
	Hc.init(e, t), Ep.init(e, t);
}), Lp = bl("ZodUUID", (e, t) => {
	qc.init(e, t), Ep.init(e, t);
}), Gp = bl("ZodURL", (e, t) => {
	Yc.init(e, t), Ep.init(e, t);
}), Up = bl("ZodEmoji", (e, t) => {
	Xc.init(e, t), Ep.init(e, t);
}), Zp = bl("ZodNanoID", (e, t) => {
	Qc.init(e, t), Ep.init(e, t);
}), Hp = bl("ZodCUID", (e, t) => {
	eu.init(e, t), Ep.init(e, t);
}), qp = bl("ZodCUID2", (e, t) => {
	tu.init(e, t), Ep.init(e, t);
}), Wp = bl("ZodULID", (e, t) => {
	nu.init(e, t), Ep.init(e, t);
}), Vp = bl("ZodXID", (e, t) => {
	au.init(e, t), Ep.init(e, t);
}), Jp = bl("ZodKSUID", (e, t) => {
	iu.init(e, t), Ep.init(e, t);
}), Kp = bl("ZodIPv4", (e, t) => {
	cu.init(e, t), Ep.init(e, t);
}), Yp = bl("ZodIPv6", (e, t) => {
	pu.init(e, t), Ep.init(e, t);
}), Xp = bl("ZodCIDRv4", (e, t) => {
	fu.init(e, t), Ep.init(e, t);
}), Qp = bl("ZodCIDRv6", (e, t) => {
	mu.init(e, t), Ep.init(e, t);
}), ef = bl("ZodBase64", (e, t) => {
	yu.init(e, t), Ep.init(e, t);
}), tf = bl("ZodBase64URL", (e, t) => {
	_u.init(e, t), Ep.init(e, t);
}), nf = bl("ZodE164", (e, t) => {
	vu.init(e, t), Ep.init(e, t);
}), af = bl("ZodJWT", (e, t) => {
	bu.init(e, t), Ep.init(e, t);
}), sf = bl("ZodNumber", (e, t) => {
	Su.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, { minimum: s, maximum: r, multipleOf: o, exclusiveMaximum: l, exclusiveMinimum: c, isInt: u } = ap(e);
		i.type = u ? "integer" : "number";
		const d = "number" == typeof c && c >= (s ?? Number.NEGATIVE_INFINITY), p = "number" == typeof l && l <= (r ?? Number.POSITIVE_INFINITY), f = "draft-04" === t.target || "openapi-3.0" === t.target;
		if (d ? f ? (i.minimum = c, i.exclusiveMinimum = !0) : i.exclusiveMinimum = c : "number" == typeof s && (i.minimum = s), p ? f ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : "number" == typeof r && (i.maximum = r), o) {
			const n = /* @__PURE__ */ new Set();
			for (const l of o) Number.isFinite(l) && 0 !== l ? n.add(Math.abs(l)) : Dd(e, t, i, a, `A multipleOf divisor of ${l} cannot be represented in JSON Schema`);
			const [s, ...r] = n;
			void 0 !== s && (i.multipleOf = s), r.length && (i.allOf = [...i.allOf ?? [], ...r.map((e) => ({ multipleOf: e }))]);
		}
	})(e, t, n, a), e.isFinite = !0;
}, dl({
	minValue: (e) => {
		const { minimum: t, exclusiveMinimum: n } = ap(e);
		return Math.max(t ?? Number.NEGATIVE_INFINITY, n ?? Number.NEGATIVE_INFINITY);
	},
	maxValue: (e) => {
		const { maximum: t, exclusiveMaximum: n } = ap(e);
		return Math.min(t ?? Number.POSITIVE_INFINITY, n ?? Number.POSITIVE_INFINITY);
	},
	isInt: (e) => {
		const { isInt: t, multipleOf: n } = ap(e);
		return !!t || !!n?.some(Number.isSafeInteger);
	},
	format: (e) => ap(e).format ?? null
}, {
	gt(e, t) {
		return this.check(kd(e, t));
	},
	gte(e, t) {
		return this.check(Id(e, t));
	},
	min(e, t) {
		return this.check(Id(e, t));
	},
	lt(e, t) {
		return this.check(bd(e, t));
	},
	lte(e, t) {
		return this.check(Sd(e, t));
	},
	max(e, t) {
		return this.check(Sd(e, t));
	},
	int(e) {
		return this.check(lf(e));
	},
	safe(e) {
		return this.check(lf(e));
	},
	positive(e) {
		return this.check(kd(0, e));
	},
	nonnegative(e) {
		return this.check(Id(0, e));
	},
	negative(e) {
		return this.check(bd(0, e));
	},
	nonpositive(e) {
		return this.check(Sd(0, e));
	},
	multipleOf(e, t) {
		return this.check(Ad(e, t));
	},
	step(e, t) {
		return this.check(Ad(e, t));
	},
	finite() {
		return this;
	}
}));
function rf(e) {
	return function(e, t) {
		return new sf(vd({
			type: "number",
			checks: [],
			...Ho(t)
		}));
	}(0, e);
}
const of = bl("ZodNumberFormat", (e, t) => {
	ku.init(e, t), sf.init(e, t);
});
function lf(e) {
	return function(e, t) {
		return new of({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...Ho(t)
		});
	}(0, e);
}
const cf = bl("ZodBoolean", (e, t) => {
	Iu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.type = "boolean";
	})(0, 0, t);
});
function uf(e) {
	return function(e, t) {
		return new cf({
			type: "boolean",
			...Ho(t)
		});
	}(0, e);
}
const df = bl("ZodUnknown", (e, t) => {
	Au.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (e, t, n) => {};
});
function pf() {
	return new df({ type: "unknown" });
}
const ff = bl("ZodNever", (e, t) => {
	xu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.not = {};
	})(0, 0, t);
});
const mf = bl("ZodArray", (e, t) => {
	Mp(), Mu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, s = e._zod.def, { minimum: r, maximum: o } = ap(e);
		"number" == typeof r && (i.minItems = r), "number" == typeof o && (i.maxItems = o), i.type = "array", i.items = Ed(s.element, t, {
			...a,
			path: [...a.path, "items"]
		});
	})(e, t, n, a), e.element = t.element;
}, {
	min(e, t) {
		return this.check(Td(e, t));
	},
	nonempty(e) {
		return this.check(Td(1, e));
	},
	max(e, t) {
		return this.check(xd(e, t));
	},
	length(e, t) {
		return this.check(Nd(e, t));
	},
	unwrap() {
		return this.element;
	}
});
function hf(e, t) {
	return function(e, t, n) {
		return new mf({
			type: "array",
			element: t,
			...Ho(n)
		});
	}(0, e, t);
}
const gf = bl("ZodObject", (e, t) => {
	Mp(), Cu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, s = e._zod.def, r = s.shape;
		if (Object.getOwnPropertySymbols(r).length && Dd(e, t, i, a, "Symbol keys cannot be represented in JSON Schema")) return;
		i.type = "object", i.properties = {};
		for (const l in r) Mo(i.properties, l, Ed(r[l], t, {
			...a,
			path: [
				...a.path,
				"properties",
				l
			]
		}));
		const o = [];
		for (const l of Object.keys(r)) {
			const e = s.shape[l];
			("input" === t.io ? void 0 === op(e) : void 0 === e._zod.optout) && o.push(l);
		}
		o.length > 0 && (i.required = o), "never" === s.catchall?._zod.def.type ? i.additionalProperties = !1 : s.catchall ? s.catchall && (i.additionalProperties = Ed(s.catchall, t, {
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
		return If(Object.keys(this._zod.def.shape));
	},
	catchall(e) {
		return this.clone(Co(this._zod.def, { catchall: e }));
	},
	passthrough() {
		return this.clone(Co(this._zod.def, { catchall: pf() }));
	},
	loose() {
		return this.clone(Co(this._zod.def, { catchall: pf() }));
	},
	strict() {
		return this.clone(Co(this._zod.def, { catchall: function(e, t) {
			return new ff({
				type: "never",
				...Ho(t)
			});
		}(0, e) }));
		var e;
	},
	strip() {
		return this.clone(Co(this._zod.def, { catchall: void 0 }));
	},
	extend(e) {
		return function(e, t) {
			if (!Bo(t)) throw new Error("Invalid input to extend: expected a plain object");
			const n = e._zod.def.checks;
			if (n && n.length > 0) {
				const n = zo(e);
				for (const e of Reflect.ownKeys(t)) if (void 0 !== Object.getOwnPropertyDescriptor(n, e)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
			}
			return Zo(e, Co(e._zod.def, { shape: Ko(e, t) }));
		}(this, e);
	},
	safeExtend(e) {
		return function(e, t) {
			if (!Bo(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
			return Zo(e, Co(e._zod.def, { shape: Ko(e, t) }));
		}(this, e);
	},
	merge(e) {
		return function(e, t) {
			if (!t?._zod?.def) throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
			if (e._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
			const n = {};
			return Eo(n, e, Reflect.ownKeys(zo(e))), Eo(n, t, Reflect.ownKeys(zo(t))), Zo(e, Co(e._zod.def, {
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
			return Eo(i, e, Jo(e, t)), Zo(e, Co(n, {
				shape: i,
				checks: []
			}));
		}(this, e);
	},
	omit(e) {
		return function(e, t) {
			const n = e._zod.def, a = n.checks;
			if (a && a.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
			const i = new Set(Jo(e, t)), s = {};
			return Eo(s, e, Reflect.ownKeys(zo(e)).filter((e) => !i.has(e))), Zo(e, Co(n, {
				shape: s,
				checks: []
			}));
		}(this, e);
	},
	partial(...e) {
		return Yo(xf, this, e[0]);
	},
	exactPartial(...e) {
		return Yo(Nf, this, e[0], "exactPartial");
	},
	required(...e) {
		return function(e, t, n) {
			const a = n ? new Set(Jo(t, n)) : void 0, i = {};
			return Eo(i, t, Reflect.ownKeys(zo(t)), (t, n) => a && !a.has(n) ? t : new e({
				type: "nonoptional",
				innerType: t
			})), Zo(t, Co(t._zod.def, { shape: i }));
		}(Df, this, e[0]);
	}
});
function yf(e, t) {
	const n = {
		type: "object",
		shape: e ?? {},
		...Ho(t)
	};
	return new gf(n);
}
const wf = bl("ZodUnion", (e, t) => {
	Pu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = !1 === i.inclusive, r = i.options.map((e, n) => Ed(e, t, {
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
function _f(e, t) {
	return new wf({
		type: "union",
		options: e,
		...Ho(t)
	});
}
const vf = bl("ZodIntersection", (e, t) => {
	Fu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = Ed(i.left, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				0
			]
		}), r = Ed(i.right, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				1
			]
		}), o = (e) => "allOf" in e && 1 === Object.keys(e).length, l = [...o(s) ? s.allOf : [s], ...o(r) ? r.allOf : [r]];
		n.allOf = l, t.intersections.push(l);
	})(e, t, n, a);
}), bf = bl("ZodRecord", (e, t) => {
	Mp(), Lu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, s = e._zod.def;
		i.type = "object";
		const r = s.keyType, o = ap(r).patterns;
		if ("loose" === s.mode && o && o.size > 0) {
			const e = Ed(s.valueType, t, {
				...a,
				path: [
					...a.path,
					"patternProperties",
					"*"
				]
			});
			i.patternProperties = {};
			for (const t of o) Mo(i.patternProperties, rp(t).source, e);
		} else {
			if ("draft-07" === t.target || "draft-2020-12" === t.target) {
				i.propertyNames = Ed(s.keyType, t, {
					...a,
					path: [...a.path, "propertyNames"]
				});
				let n = cp.get(t);
				n || (n = [], cp.set(t, n), t.deferred.push(() => function(e) {
					const t = /* @__PURE__ */ new Map();
					for (const a of e.seen.values()) a.def && !t.has(a.schema) && t.set(a.schema, a);
					const n = /* @__PURE__ */ new Map();
					for (const a of cp.get(e) ?? []) {
						const i = e.seen.get(a), s = (i?.def ?? i?.schema)?.propertyNames;
						if (!s || !0 === s || n.has(s)) continue;
						const r = lp(t, s, /* @__PURE__ */ new Set());
						r !== s && n.set(s, r);
					}
					if (n.size) for (const a of e.seen.values()) for (const e of [a.schema, a.def]) {
						const t = e && n.get(e.propertyNames);
						t && (e.propertyNames = t);
					}
				}(t))), n.push(e);
			}
			i.additionalProperties = Ed(s.valueType, t, {
				...a,
				path: [...a.path, "additionalProperties"]
			});
		}
		const l = r._zod.values, c = "input" === t.io && void 0 !== op(s.valueType);
		if (l && !s.partial && !c) {
			const e = [...l].filter((e) => "string" == typeof e || "number" == typeof e);
			e.length > 0 && (i.required = e.map(String));
		}
	})(e, t, n, a), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Sf(e, t, n) {
	return t && t._zod ? new bf({
		type: "record",
		keyType: e,
		valueType: t,
		...Ho(n)
	}) : new bf({
		type: "record",
		keyType: Dp(),
		valueType: e,
		...Ho(t)
	});
}
const kf = bl("ZodEnum", (e, t) => {
	Gu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = ko(e._zod.def.entries);
		0 !== a.length ? (a.every((e) => "number" == typeof e) && (n.type = "number"), a.every((e) => "string" == typeof e) && (n.type = "string"), n.enum = a) : n.not = {};
	})(e, 0, n), e.enum = t.entries, e.options = [...e._zod.values];
	const n = new Set(Object.keys(t.entries));
	e.extract = (e, a) => {
		const i = {};
		for (const s of e) {
			if (!n.has(s)) throw new Error(`Key ${s} not found in enum`);
			i[s] = t.entries[s];
		}
		return new kf({
			...t,
			checks: [],
			...Ho(a),
			entries: i
		});
	}, e.exclude = (e, a) => {
		const i = { ...t.entries };
		for (const t of e) {
			if (!n.has(t)) throw new Error(`Key ${t} not found in enum`);
			delete i[t];
		}
		return new kf({
			...t,
			checks: [],
			...Ho(a),
			entries: i
		});
	};
});
function If(e, t) {
	const n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new kf({
		type: "enum",
		entries: n,
		...Ho(t)
	});
}
const Af = bl("ZodTransform", (e, t) => {
	Mp(), Uu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		Dd(e, t, n, a, "Transforms cannot be represented in JSON Schema");
	})(e, t, n, a), e._zod.parse = (n, a) => {
		if ("backward" === a.direction) throw new kl(e.constructor.name);
		n.addIssue = (a) => {
			if ("string" == typeof a) n.issues.push(ll(a, n.value, t));
			else {
				const t = a;
				t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), "input" in t || (t.input = n.value), t.inst ?? (t.inst = e), n.issues.push(ll(t));
			}
		};
		const i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
}), xf = bl("ZodOptional", (e, t) => {
	Hu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => pp(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
});
function Tf(e) {
	return new xf({
		type: "optional",
		innerType: e
	});
}
const Nf = bl("ZodExactOptional", (e, t) => {
	qu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => pp(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), Mf = bl("ZodNullable", (e, t) => {
	Wu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = Ed(i.innerType, t, a), r = t.seen.get(e);
		"openapi-3.0" === t.target ? (r.ref = i.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
});
function $f(e) {
	return new Mf({
		type: "nullable",
		innerType: e
	});
}
const zf = bl("ZodDefault", (e, t) => {
	Vu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Ed(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
		const s = dp(i.defaultValue, e, t, n, a);
		s !== up && (n.default = s);
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
}), Rf = bl("ZodPrefault", (e, t) => {
	Ku.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		if (Ed(i.innerType, t, a), t.seen.get(e).ref = i.innerType, "input" !== t.io) return;
		const s = dp(i.defaultValue, e, t, n, a);
		s !== up && (n._prefault = s);
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
}), Df = bl("ZodNonOptional", (e, t) => {
	Yu.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Ed(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
	})(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), Ef = bl("ZodCatch", (e, t) => {
	ed.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		let s;
		Ed(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
		try {
			s = i.catchValue(void 0);
		} catch {
			Dd(e, t, n, a, "Dynamic catch values are not supported in JSON Schema");
			return;
		}
		n.default = s;
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
}), Cf = bl("ZodPipe", (e, t) => {
	td.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = i.in._zod.traits.has("$ZodTransform"), r = "input" === t.io ? s ? i.out : i.in : i.out;
		Ed(r, t, a), t.seen.get(e).ref = r;
	})(e, t, 0, a), e.in = t.in, e.out = t.out;
});
function Of(e, t) {
	return new Cf({
		type: "pipe",
		in: e,
		out: t
	});
}
const Pf = bl("ZodReadonly", (e, t) => {
	ad.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Ed(i.innerType, t, a), t.seen.get(e).ref = i.innerType, n.readOnly = !0;
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
}), Ff = bl("ZodCustom", (e, t) => {
	sd.init(e, t), $p.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		Dd(e, t, n, a, "Custom types cannot be represented in JSON Schema");
	})(e, t, n, a);
}), jf = If((Bf = re, Object.values(Bf)));
var Bf;
yf({
	password: Dp(),
	username: Dp().max(100, "Username must be 100 characters or fewer")
});
const Lf = yf({
	onset_timestamp: rf().nullable().optional(),
	offset_timestamp: rf().nullable().optional(),
	marker_index: rf().int().default(1),
	marker_type: jf.default(re.MAIN_SLEEP)
}), Gf = yf({
	start_timestamp: rf().nullable().optional(),
	end_timestamp: rf().nullable().optional(),
	marker_index: rf().int().default(1)
}), Uf = (yf({
	sleep_markers: hf(Lf).optional().default([]),
	nonwear_markers: hf(Gf).optional().default([]),
	explicit_no_nonwear: uf().optional().default(!1),
	is_invalid_night: uf().optional().default(!1),
	needs_consensus: uf().optional().default(!1),
	notes: Dp().nullable().optional(),
	sleep_period_detection_config: Sf(Dp(), pf()).nullable().optional()
}), yf({
	timestamps: hf(rf()).optional().default([]),
	axis_x: hf(rf()).optional().default([]),
	axis_y: hf(rf()).optional().default([]),
	axis_z: hf(rf()).optional().default([]),
	vector_magnitude: hf(rf()).optional().default([]),
	temperature: hf(rf()).optional().default([]),
	lux: hf(rf()).optional().default([]),
	melanopic_lux: hf(rf()).optional().default([]),
	ggir_timestamps: hf(rf()).optional().default([]),
	ggir_enmo: hf(rf()).optional().default([]),
	ggir_anglez: hf(rf()).optional().default([]),
	ggir_sib: hf(rf()).optional().default([]),
	timestamps_30s: hf(rf()).optional().default([]),
	axis_x_30s: hf(rf()).optional().default([]),
	axis_y_30s: hf(rf()).optional().default([]),
	axis_z_30s: hf(rf()).optional().default([]),
	vector_magnitude_30s: hf(rf()).optional().default([])
})), Zf = yf({
	resolution_id: Dp(),
	epoch_length_seconds: rf().int().positive(),
	category: Dp(),
	source_type: Dp().nullable().optional(),
	derived_from_resolution_id: Dp().nullable().optional(),
	aggregation_method: Dp().nullable().optional(),
	data: Uf,
	algorithm_results: hf(rf()).nullable().optional(),
	nonwear_results: hf(rf()).nullable().optional()
}), Hf = (yf({
	data: Uf.optional(),
	epoch_resolutions: hf(Zf).optional().default([]),
	timestamps: hf(rf()).optional(),
	axis_x: hf(rf()).optional(),
	axis_y: hf(rf()).optional(),
	axis_z: hf(rf()).optional(),
	vector_magnitude: hf(rf()).optional(),
	temperature: hf(rf()).optional(),
	algorithm_results: hf(rf()).nullable().optional(),
	nonwear_results: hf(rf()).nullable().optional(),
	nonwear_results_choi_2011: hf(rf()).nullable().optional(),
	event_markers: hf(_f([rf(), uf()])).optional().default([]),
	event_marker_timestamps: hf(rf()).optional().default([]),
	view_start: rf().nullable().optional(),
	view_end: rf().nullable().optional(),
	sensor_nonwear_periods: hf(yf({
		start_timestamp: rf(),
		end_timestamp: rf()
	})).optional().default([]),
	device_nonwear_source: If(t).nullable().optional(),
	algorithmic_nonwear_masks: Sf(Dp(), hf(rf())).optional()
}), a.diary_tolerance_minutes, a.nap_min_consecutive_epochs, a.epoch_length_seconds, () => S.waitFor(import("./cube-variants-BIPtzAOK.js"))), qf = {
	warmVariantsForDay: async (...e) => (await Hf()).scoreCountBasedHasibVariantsForDay(...e),
	withRecordingWakeThreshold: async (...e) => (await Hf()).withRecordingWakeThreshold(...e)
};
function Wf(e, t, n) {
	return null != e[n] && e.covers(t);
}
function Vf(e, t, n) {
	return e.find((e) => Wf(e, t, n));
}
const Jf = [
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
function Kf(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function Yf(e) {
	return JSON.stringify(e);
}
function Xf(e) {
	const t = Kf(e.config), n = Kf(t?.signals) ?? t;
	return {
		...n ? { config: n } : {},
		days: e.days
	};
}
function Qf(e) {
	return JSON.stringify(Xf(e));
}
function em(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function tm(e) {
	const t = em(e), n = t?.analysis_date, a = em(t?.intrinsic), i = a?.state;
	if (!t || "string" != typeof n || 0 === n.length || !a || "string" != typeof i || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(i)) return null;
	const s = a.score, r = a.verdict, o = a.infinite_reason, l = {}, c = [], u = t.per_guider;
	if (Array.isArray(u)) for (const h of u) {
		const e = em(h);
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
	const d = em(a.features), p = d && Array.isArray(d.feature_values) ? d : null, f = em(a.legacy_complexity_features) ?? (null === p ? d : null) ?? {}, m = t.computed_at;
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
const nm = /^[0-9a-f]{64}$/;
var am = class extends Error {
	constructor(e = !1) {
		super(e ? "Stored complexity evidence failed integrity verification." : "Complexity evidence failed integrity verification."), this.name = "ComplexityEvidenceIntegrityError";
	}
}, im = class extends Error {
	constructor() {
		super("Complexity evidence diverged for an existing generation."), this.name = "ComplexityEvidenceDivergenceError";
	}
}, sm = class extends Error {
	constructor() {
		super("Complexity evidence is older than the retained generation window."), this.name = "ComplexityEvidenceRetentionError";
	}
};
function rm(e = !1) {
	throw new am(e);
}
function om(e) {
	"string" == typeof e && nm.test(e) || rm();
}
function lm(e) {
	"string" == typeof e && 0 !== e.length && Number.isFinite(Date.parse(e)) || rm();
}
function cm(e) {
	if (null === e) return "null";
	switch (typeof e) {
		case "string":
		case "boolean": return JSON.stringify(e);
		case "number": return Number.isFinite(e) || rm(), JSON.stringify(Object.is(e, -0) ? 0 : e);
		case "object": {
			if (Array.isArray(e)) {
				const t = [];
				for (let n = 0; n < e.length; n += 1) n in e || rm(), t.push(cm(e[n]));
				return `[${t.join(",")}]`;
			}
			const t = Object.getPrototypeOf(e);
			t !== Object.prototype && null !== t && rm(), Object.getOwnPropertySymbols(e).length > 0 && rm();
			const n = e, a = [];
			for (const e of Object.keys(n).sort()) {
				const t = Object.getOwnPropertyDescriptor(n, e);
				t && "value" in t && t.enumerable || rm(), a.push(`${JSON.stringify(e)}:${cm(t.value)}`);
			}
			return `{${a.join(",")}}`;
		}
		default: return rm();
	}
}
function um(e) {
	const t = cm(e), n = JSON.parse(t);
	return (null == n || "object" != typeof n || Array.isArray(n)) && rm(), n;
}
async function dm(e) {
	return le(cm(e));
}
function pm(e) {
	const t = e;
	for (const a of [
		"contractVersion",
		"crateVersion",
		"target",
		"semanticProfile",
		"profileProofStatus",
		"temporalBasis"
	]) "string" == typeof t[a] && "" !== t[a] || rm();
	null === t.sourceRevision || "string" == typeof t.sourceRevision && "" !== t.sourceRevision || rm(), om(t.artifactSha256);
	const n = t.compiledFeatures;
	Array.isArray(n) && n.every((e) => "string" == typeof e && e.length > 0) || rm(), cm(e);
}
async function fm(e, t) {
	"string" != typeof e && rm(), void 0 !== t && om(t);
	let n = 0;
	for (; n < e.length && /\s/.test(e[n]);) n += 1;
	let a = e.length - 1;
	for (; a >= n && /\s/.test(e[a]);) a -= 1;
	"{" === e[n] && "}" === e[a] || rm();
	const i = await le(e);
	return void 0 !== t && t !== i && rm(), i;
}
function mm(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != typeof t || null === e || null === t) return !1;
	if (Array.isArray(e) || Array.isArray(t)) return !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((e, n) => mm(e, t[n]));
	if ("object" != typeof e || "object" != typeof t) return !1;
	const n = Object.keys(e).sort(), a = Object.keys(t).sort();
	if (n.length !== a.length || n.some((e, t) => e !== a[t])) return !1;
	const i = e, s = t;
	return n.every((e) => mm(i[e], s[e]));
}
function hm(e) {
	try {
		const t = JSON.parse(e);
		return (null === t || "object" != typeof t || Array.isArray(t)) && rm(), t;
	} catch {
		return rm();
	}
}
function gm(e, t) {
	const n = Object.keys(e).sort(), a = [...t].sort();
	return n.length === a.length && n.every((e, t) => e === a[t]);
}
function ym(e) {
	return "number" == typeof e && Number.isFinite(e);
}
function wm(e) {
	return null === e || "string" == typeof e && e.length > 0;
}
function _m(e) {
	return Array.isArray(e) && e.every(ym);
}
function vm(e) {
	return Array.isArray(e) && e.every((e) => Number.isInteger(e) && (0 === e || 1 === e));
}
function bm(e, t) {
	return 0 === e.length || e.length === t;
}
function Sm(e) {
	Array.isArray(e) || rm();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && rm();
		const e = t, n = e.start_ts, a = e.end_ts;
		gm(e, ["start_ts", "end_ts"]) && ym(n) && ym(a) && !(a < n) || rm();
	}
}
function km(e, t) {
	Array.isArray(e) && e.length === t || rm();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && rm();
		const e = n;
		gm(e, ["onset_time", "offset_time"]) && "string" == typeof e.onset_time && 0 !== e.onset_time.length && wm(e.offset_time) || rm();
	}
}
function Im(e) {
	Array.isArray(e) || rm();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && rm();
		const e = t;
		gm(e, ["start_time", "end_time"]) && "string" == typeof e.start_time && 0 !== e.start_time.length && "string" == typeof e.end_time && 0 !== e.end_time.length || rm();
	}
}
function Am(e) {
	Array.isArray(e) || rm();
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && rm();
		const e = n, a = e.guider, i = e.detector, s = e.onset_ts, r = e.offset_ts;
		(!gm(e, [
			"guider",
			"detector",
			"onset_ts",
			"offset_ts"
		]) || "string" != typeof a || 0 === a.length || t.has(a) || !wm(i) || null !== s && !ym(s) || null !== r && !ym(r) || null === s && null === r) && rm(), t.set(a, {
			detector: i,
			onset: s,
			offset: r
		});
	}
	return t;
}
function xm(e) {
	if (null === e) return null;
	Array.isArray(e) && 2 === e.length || rm();
	const t = e[0], n = e[1];
	return (!ym(t) || !ym(n) || n <= t) && rm(), [t, n];
}
function Tm(e, t) {
	const n = hm(e), a = void 0 === n.config ? ["days"] : ["config", "days"], i = n.days;
	gm(n, a) && Array.isArray(i) || rm(), void 0 === n.config || null !== n.config && "object" == typeof n.config && !Array.isArray(n.config) || rm();
	const s = /* @__PURE__ */ new Set();
	for (const o of i) {
		(null === o || "object" != typeof o || Array.isArray(o)) && rm();
		const e = o;
		gm(e, Jf) || rm();
		const t = e.analysis_date, n = e.epoch_length_seconds, a = e.timestamps, i = e.activity_counts, r = e.sleep_scores, l = e.choi_nonwear, c = e.diary_nap_count, u = e.anglez, d = e.light, p = e.temperature, f = e.heart_rate, m = e.detach_nonwear, h = e.is_weekend, g = e.calibration_error, y = e.imputed_fraction;
		!("string" != typeof t || 0 === t.length || s.has(t) || "number" != typeof n || !Number.isInteger(n) || n <= 0) && _m(a) && 0 !== a.length && _m(i) && i.length === a.length && vm(r) && r.length === a.length && vm(l) && bm(l, a.length) && Number.isInteger(c) && !(c < 0) && wm(e.diary_onset_time) && wm(e.diary_wake_time) && wm(e.diary_in_bed_time) && wm(e.diary_out_bed_time) && (null === h || "boolean" == typeof h) && _m(u) && bm(u, a.length) && _m(d) && bm(d, a.length) && _m(p) && bm(p, a.length) && _m(f) && bm(f, a.length) && vm(m) && bm(m, a.length) && (null === g || ym(g)) && (null === y || !(!ym(y) || y < 0 || y > 1)) || rm(), Sm(e.sensor_nonwear), km(e.diary_naps, c), Im(e.diary_nonwear);
		const w = Am(e.guider_targets), _ = xm(e.hdcza_window), v = w.get(ie.HDCZA);
		(null === _ && void 0 !== v || null !== _ && (void 0 === v || null !== v.detector || v.onset !== _[0] || v.offset !== _[1])) && rm(), s.add(t);
	}
	const r = n;
	return mm(hm(t), Xf(r)) || rm(), {
		difficulty: r,
		dates: s
	};
}
function Nm(e, t, n, a) {
	gm(t, ["config", "days"]) || rm(), mm(t.config, e.difficulty.config ?? null) || rm();
	const i = t.days;
	Array.isArray(i) && i.length === e.difficulty.days.length || rm();
	for (let o = 0; o < i.length; o += 1) {
		const t = i[o], n = e.difficulty.days[o];
		(null === t || "object" != typeof t || Array.isArray(t) || null === n || "object" != typeof n || Array.isArray(n)) && rm();
		const a = t, s = n;
		gm(a, [
			"analysis_date",
			"epoch_length_seconds",
			"timestamps"
		]) && a.analysis_date === s.analysis_date && a.epoch_length_seconds === s.epoch_length_seconds && mm(a.timestamps, s.timestamps) || rm();
	}
	const s = Object.keys(n);
	(s.length !== e.dates.size || s.some((t) => !e.dates.has(t))) && rm();
	const r = new Map(e.difficulty.days.map((e) => [e.analysis_date, e]));
	for (const [o, l] of Object.entries(n)) {
		(null === l || "object" != typeof l || Array.isArray(l)) && rm();
		const e = l, t = tm(e.canonicalResult);
		null !== t && t.canonicalResult.analysis_date === o && mm(e, t) || rm();
	}
	if (null !== a) {
		const t = Object.keys(a);
		(t.length !== e.dates.size || t.some((t) => !e.dates.has(t))) && rm();
		for (const [e, n] of Object.entries(a)) {
			(null === n || "object" != typeof n || Array.isArray(n)) && rm();
			const t = n, a = r.get(e);
			t.analysis_date === e && Number.isInteger(t.epoch_length_seconds) && t.epoch_length_seconds === a?.epoch_length_seconds || rm();
		}
	}
}
async function Mm(e) {
	return dm(function(e) {
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
async function $m(e) {
	try {
		pm(e.runtimeIdentity), null !== e.sourceContentHash && om(e.sourceContentHash);
		const t = um(e.runtimeIdentity), n = await fm(e.difficultyRequestWireJson, e.difficultyRequestSha256), a = await fm(e.signalsRequestWireJson, e.signalsRequestSha256);
		Tm(e.difficultyRequestWireJson, e.signalsRequestWireJson);
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
			generationKey: await Mm(i)
		};
	} catch (yd) {
		if (yd instanceof am) throw yd;
		return rm();
	}
}
async function zm(e) {
	return dm(function(e) {
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
function Rm(e, t) {
	void 0 !== t && (null !== t && om(t), e !== t && rm());
}
async function Dm(e) {
	(!Number.isInteger(e.fileId) || e.fileId <= 0) && rm(), void 0 !== e.id && (!Number.isInteger(e.id) || e.id <= 0) && rm();
	for (const o of [
		e.generationKey,
		e.difficultyRequestSha256,
		e.signalsRequestSha256,
		e.projectionSha256,
		e.difficultyResultSha256,
		e.recordSha256
	]) om(o);
	null !== e.signalsResultSha256 && om(e.signalsResultSha256), null !== e.sourceContentHash && om(e.sourceContentHash), "sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || rm(), pm(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || rm(), await fm(e.difficultyRequestWireJson, e.difficultyRequestSha256), await fm(e.signalsRequestWireJson, e.signalsRequestSha256);
	const t = Tm(e.difficultyRequestWireJson, e.signalsRequestWireJson);
	lm(e.createdAt), lm(e.updatedAt), Date.parse(e.updatedAt) < Date.parse(e.createdAt) && rm(), null === e.signalsByDate != (null === e.signalsResultSha256) && rm();
	const n = um(e.projectionInput), a = um(e.difficultyByDate), i = null === e.signalsByDate ? null : um(e.signalsByDate);
	Nm(t, n, a, i);
	const s = {
		evidenceContractId: e.evidenceContractId,
		difficultyMethodId: e.difficultyMethodId,
		signalsMethodId: e.signalsMethodId,
		requestContractId: e.requestContractId,
		sourceContentHash: e.sourceContentHash,
		runtimeIdentity: um(e.runtimeIdentity),
		difficultyRequestWireJson: e.difficultyRequestWireJson,
		signalsRequestWireJson: e.signalsRequestWireJson,
		difficultyRequestSha256: e.difficultyRequestSha256,
		signalsRequestSha256: e.signalsRequestSha256
	};
	await Mm(s) !== e.generationKey && rm(), await dm(n) !== e.projectionSha256 && rm(), await dm(a) !== e.difficultyResultSha256 && rm(), null !== i && await dm(i) !== e.signalsResultSha256 && rm();
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
	return await zm(r) !== e.recordSha256 && rm(), r;
}
async function Em(e) {
	try {
		return await Dm(e);
	} catch {
		throw new am(!0);
	}
}
function Cm(e, t, n = !1) {
	if (!t) throw new am(n);
	if (null !== e.sourceContentHash && t.sourceContentHash !== e.sourceContentHash) throw new am(n);
}
async function Om(e, t, n) {
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
async function Pm(e, t, n = W()) {
	const [a, i] = await n.transaction("r", [n.files, n.complexityEvidence], async () => Promise.all([n.complexityEvidence.where("[fileId+generationKey]").equals([e, t]).first(), n.files.get(e)]));
	if (!a) return;
	const s = await Em(a);
	return Cm(s, i, !0), s;
}
function Fm(e, t, n, a) {
	return null === a ? null : {
		...a,
		binding: a?.binding ?? We.captureWorkspaceBinding(e, t, n)
	};
}
async function jm(e, t = A()) {
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
function Bm(e) {
	const t = b().scoring(), n = [oi(de(t, e).nonwearDetectorsCounts, t.showChoiNonwear), oi(Je(t.nonwearDetectorsGgir, e), t.showChoiNonwear)];
	return n.filter((e, t) => n.findIndex((t) => Ya(t) === Ya(e)) === t);
}
function Lm(e, t) {
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
function Gm(e, t) {
	return [.../* @__PURE__ */ new Set([...e.availableDates, ...t])].sort();
}
function Um(e, t) {
	return e ? {
		detectors: [...e.detectors],
		any: Uint8Array.from(e.mask).buffer,
		weight: e.weight ? Float64Array.from(e.weight).buffer : null,
		grid: e.grid === t.timestamps ? "counts" : "ggir"
	} : null;
}
async function Zm(e, { file: t, sets: n, capsense: a, db: i, signal: s }) {
	const r = n.filter((t) => !(Ya(t) in (e.displayNonwear ?? {})));
	if (0 === r.length) return;
	const o = Z(s), l = await za(e, jn, "navigation facts", Ia(), o);
	if (!l) return;
	bn(l.timestamps, an(e, t));
	const c = Xa(t.sourceType, t.sourceProfileId), u = {};
	for (const [m, h] of Object.entries(l.nonwearMasksByDetector)) 0 === h.length || vi(m) || (u[m] = h);
	const d = {
		algorithmicNonwearMasks: u,
		timestamps: l.timestamps,
		ggirTimestamps: l.ggirTimestamps,
		sensorNonwearPeriods: "detach_mask" === Ja(c) && l.detachNonwear ? Lm(l.detachNonwear, l.timestamps) : a,
		deviceNonwearSource: c
	}, p = { ...e.displayNonwear }, f = await Promise.all(r.map((e) => (s?.throwIfAborted(), li(d, e, o))));
	for (const [m, h] of r.entries()) p[Ya(h)] = Um(f[m], d);
	await cn(e.fileId, e.date, p, {
		seriesRevision: t.seriesRevision ?? 0,
		nonwearBandGeneration: t.nonwearBandGeneration ?? 0
	}, i, s);
}
const Hm = /* @__PURE__ */ new WeakMap();
function qm(e, t, n) {
	let a = Hm.get(t);
	a || Hm.set(t, a = /* @__PURE__ */ new Map());
	const i = a.get(e);
	if (i) return T(i, n);
	const s = async function(e, t, n) {
		n?.throwIfAborted();
		const a = await Ye(e, t);
		if (!a || "incomplete" === a.ingestState) return;
		const i = await gt(e, t);
		let s = a.navigationFacts;
		(function(e, t) {
			const n = e?.navigationFacts;
			if (!e || 1 !== n?.version) return !1;
			const a = Gm(e, t);
			return n.dates.length === a.length && n.dates.every((e, t) => e === a[t]);
		})(a, i) || (s = await async function(e, t, n, a) {
			const i = Z(a), s = {}, r = async (e) => {
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
			const c = await si(n), u = await Ka(e, c, a), d = [...new Set([u.zone, u.reason ? c : null].filter((e) => Boolean(e)))], p = {};
			return await Le((t) => {
				for (const n of d) {
					const a = {};
					for (const i of e.availableDates) {
						const e = t.dstTransitionOnNight(n, i);
						e && (a[i] = e);
					}
					p[n] = a;
				}
			}, new Kt(i)), {
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
		}(a, Gm(a, i), t, n), n?.throwIfAborted(), await t.files.update(e, { navigationFacts: s }));
		const r = Bm(a), o = r.map(Ya), l = a.seriesRevision ?? 0;
		if (s?.bands?.seriesRevision === l && o.every((e) => s.bands.keys.includes(e))) return;
		const c = "sensor_rows" === Ja(Xa(a.sourceType, a.sourceProfileId)) ? (await Wt(e, t)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : [];
		for (const u of i) {
			n?.throwIfAborted();
			const i = await Nt(e, u, t);
			i && await Zm(i, {
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
function Wm(e, t) {
	for (const n of e) {
		const e = n.epochResolutions?.find((e) => e.category === t && !e.derivedFromResolutionId);
		if (e) return e.epochLengthSeconds;
	}
	return null;
}
function Vm(e, t) {
	const n = "counts" === t ? e.timestamps : e.ggirTimestamps;
	return n ? Math.floor(n.byteLength / Float64Array.BYTES_PER_ELEMENT) : 0;
}
function Jm(e) {
	return "number" != typeof e ? String(e) : (/* @__PURE__ */ new Date(1e3 * e)).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: !1,
		timeZone: "UTC"
	});
}
function Km(e) {
	if ("object" != typeof e || null === e) return String(e).slice(0, 60);
	const t = e;
	return "onsetTimestamp" in t && "offsetTimestamp" in t ? `${Jm(t.onsetTimestamp)}–${Jm(t.offsetTimestamp)}` : "startTimestamp" in t && "endTimestamp" in t ? `${Jm(t.startTimestamp)}–${Jm(t.endTimestamp)}` : JSON.stringify(t).slice(0, 60);
}
function Ym(e, t = "(unset)") {
	if (void 0 === e) return t;
	if (null === e) return t;
	const n = "string" == typeof e ? e : JSON.stringify(e);
	return n.length > 48 ? `${n.slice(0, 45)}…` : n;
}
function Xm(e) {
	const t = e.rowCount, n = e.dayCount, a = [`${Ym(e.subject, "export")} (${Ym(e.format, "?")})`, Ym(e.filename, "")].filter((e) => "" !== e), i = ["number" == typeof t ? `${t} rows` : null, "number" == typeof n ? `${n} day${1 === n ? "" : "s"}` : null].filter((e) => null !== e);
	return i.length > 0 ? `${a.join(" · ")} — ${i.join(", ")}` : a.join(" · ");
}
function Qm(e, t, n, a) {
	const i = n?.exportId;
	return "export_started" === t && "string" == typeof i && a.has(i) ? "" === e ? "outcome unknown" : `${e} · outcome unknown` : e;
}
function eh(e, t) {
	const n = h({
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
			return "onsetTimestamp" in a ? `${e} #${t}${n}: ${Jm(a.onsetTimestamp)}–${Jm(a.offsetTimestamp)}` : "startTimestamp" in a ? `${e} #${t}: ${Jm(a.startTimestamp)}–${Jm(a.endTimestamp)}` : `${e} #${t}${n}`;
		}
		case "sleep_period_split": return `sleep #${a.periodIndex ?? "?"} split at ${Jm(a.at)}`;
		case "sleep_period_merged": return `sleep #${a.periodIndex ?? "?"} merged ${a.direction ?? "?"}`;
		case "marker_adjusted": {
			const e = a.updates ?? {}, t = a.category ?? "?", n = a.periodIndex ?? "?", i = [];
			return void 0 !== e.onsetTimestamp && i.push(`onset → ${Jm(e.onsetTimestamp)}`), void 0 !== e.offsetTimestamp && i.push(`offset → ${Jm(e.offsetTimestamp)}`), void 0 !== e.startTimestamp && i.push(`start → ${Jm(e.startTimestamp)}`), void 0 !== e.endTimestamp && i.push(`end → ${Jm(e.endTimestamp)}`), void 0 !== e.markerType && i.push(`type → ${e.markerType}`), `${t} #${n}: ${i.join(", ")}`;
		}
		case "marker_moved": {
			const e = a.before, t = a.after;
			if (!e || !t) return "drag completed";
			const n = Array.isArray(e.sleepMarkers) ? e.sleepMarkers : [], i = Array.isArray(t.sleepMarkers) ? t.sleepMarkers : [];
			for (let a = 0; a < Math.max(n.length, i.length); a++) {
				const e = n[a], t = i[a];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `sleep #${a}: ${Km(e)} ⇒ ${Km(t)}`;
			}
			const s = Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : [], r = Array.isArray(t.nonwearMarkers) ? t.nonwearMarkers : [];
			for (let a = 0; a < Math.max(s.length, r.length); a++) {
				const e = s[a], t = r[a];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `nonwear #${a}: ${Km(e)} ⇒ ${Km(t)}`;
			}
			return "drag completed (no visible change)";
		}
		case "marker_deleted": {
			const e = a.category ?? "?", t = a.periodIndex ?? "?", n = a.before;
			return n ? `${e} #${t}: was ${Km(n)}` : `${e} #${t}`;
		}
		case "actiware_rest_edited": {
			const e = "string" == typeof a.edit ? a.edit : "?";
			return "add" === e ? `rest added: ${Km(a.to)}` : "remove" === e ? `rest removed: was ${Km(a.from)}` : `rest ${"move" === e ? "moved" : e}: ${Km(a.from)} ⇒ ${Km(a.to)}`;
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
			const e = Ym(a.intent, "mutation"), t = Ym(a.guard, "?"), n = a.disposition, i = "refused_by_store" === n ? "refused" : "applied_with_violation" === n ? "applied anyway" : Ym(n, "");
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
				const e = Ym(a.before, ""), t = Ym(a.after, "");
				return "" === e ? `"${t}"` : `"${e}" → "${t}"`;
			}
			return a.text ? `"${String(a.text).slice(0, 60)}"` : a.notes ? `"${String(a.notes).slice(0, 60)}"` : `${a.length ?? "?"} chars`;
		case "settings_changed": return `${Ym(a.scope, "?")} · ${Ym(a.key, "?")}: ${Ym(a.before)} → ${Ym(a.after)}`;
		case "settings_reset": {
			const e = a.changed, t = Ym(a.scope, "settings");
			if (!Array.isArray(e)) return `${t} reset to defaults`;
			if (0 === e.length) return `${t}: already at defaults`;
			const n = e.slice(0, 4).map((e) => Ym(e, "?")).join(", "), i = e.length > 4 ? ", …" : "";
			return `${t}: ${String(e.length)} reset to default (${n}${i})`;
		}
		case "app_version_changed": return `${Ym(a.before, "(first run)")} → ${Ym(a.after, "?")}`;
		case "system_migration": return `${Ym(a.subject, "schema")}: ${Ym(a.before, "?")} → ${Ym(a.after, "?")}`;
		case "data_exported": return Xm(a);
		case "export_started": return `Started: ${Xm(a)}`;
		case "export_cancelled": return `${Ym(a.filename, "export")} — ${Ym(a.reason, "cancelled")}`;
		case "preset_changed": {
			const e = Ym(a.family, "preset"), t = Ym(a.change, "changed"), n = Ym(a.preset, "?"), i = a.before;
			return null == i ? `${e}: ${t} ${n}` : `${e}: ${t} ${n} (was ${Ym(i)})`;
		}
		case "markers_synced": {
			const e = a.conflicts, t = a.errorCount;
			let n = `Pushed ${a.pushed ?? 0}, pulled ${a.pulled ?? 0}`;
			return "number" == typeof e && e > 0 && (n += `, ${e} conflict${1 === e ? "" : "s"}`), "number" == typeof t && t > 0 && (n += `, ${t} error${1 === t ? "" : "s"}`), n;
		}
		case "system_recalculation": return `Recalculated ${Ym(a.subject, "derived data")}`;
		case "diary_staged": return `Staged ${a.staged ?? 0}, replaced ${a.replaced ?? 0}, skipped ${a.skipped ?? 0}`;
		case "diary_decision_recorded": return `Decided ${Ym(a.ruleKind, "a rule")} → ${Ym(a.outcome, "(no outcome)")} (${Ym(a.scope, "unscoped")}, ${a.nights ?? 0} nights)`;
		case "diary_decision_state_saved": return `Saved decision state "${Ym(a.restorePoint, "untitled")}" (${a.decisions ?? 0} decisions)`;
		case "diary_session_saved": {
			const e = Ym(a.status, "saved"), t = Ym(a.step, "an unknown step"), n = Ym(a.sourceSha256Prefix, "an unnamed source");
			return "removed" === e ? `Removed the saved diary session for ${n}` : `Diary session ${n} saved as ${e} on ${t}`;
		}
		case "diary_decision_state_restored": return `Restored decision state "${Ym(a.restorePoint, "untitled")}" (${a.reflagged ?? 0} reflagged, ${a.unflagged ?? 0} unflagged, ${a.nights ?? 0} nights)`;
		case "diary_decisions_reset": return `Reset ${a.decisions ?? 0} diary decisions across ${a.nights ?? 0} nights`;
		case "diary_attached": {
			const e = a.entryCount, t = a.matchBasis, n = ["number" == typeof e ? `${e} night${1 === e ? "" : "s"}` : null, "string" == typeof t && "" !== t ? `matched by ${t}` : null].filter((e) => null !== e).join(", ");
			return "" === n ? "Attached diary" : `Attached diary (${n})`;
		}
		case "diary_discarded": {
			const e = a.analysisDate;
			return null == e ? `Discarded ${Ym(a.sourceKey, "diary")}` : `Discarded ${Ym(a.sourceKey, "diary")} for ${Ym(e, "?")}`;
		}
		case "diary_workspace_cleared": {
			const e = (e, t) => {
				const n = Number(a[e] ?? 0);
				return `${String(n)} ${t}${1 === n ? "" : "s"}`;
			};
			return `Cleared workspace diary (${e("staged", "staged night")}, ${e("occurrences", "response")})`;
		}
		case "diary_repaired": {
			const e = a.fields, t = Array.isArray(e) ? e.map((e) => Ym(e, "?")).join(", ") : "";
			return "" === t ? `Repaired ${a.applied ?? 0} field${1 === a.applied ? "" : "s"}` : `Repaired ${a.applied ?? 0}: ${t}`;
		}
		case "diary_changed": {
			const e = a.fields, t = Ym(a.change, "changed"), n = Array.isArray(e) ? e.map((e) => Ym(e, "?")).join(", ") : "";
			return "" === n ? `Diary ${t}` : `Diary ${t}: ${n}`;
		}
		case "workspace_deleted": {
			const e = a.auditRowsDestroyed;
			return `${Ym(a.displayName, "workspace")} deleted — ${a.auditRowsTotal ?? 0} audit rows, ${a.auditRowsReplicated ?? 0} replicated, ${e ?? 0} destroyed`;
		}
		case "audit_chain_reanchored": return `Restored ${a.restoredRows ?? 0} rows (restore ${String(a.restoreId ?? "?").slice(0, 8)})`;
		case "workspace_recovered": return `Recovered from backup ${Ym(a.backupSha256, "?").slice(0, 8)} — ${Ym(a.applied, "0")} changes put back, ${Ym(a.skipped, "0")} skipped, ${Ym(a.recordingsToReimport, "0")} recordings to import again`;
		case "access_changed": return `${Ym(a.subject, "access")} · ${Ym(a.scope, "?")}: ${Ym(a.before)} → ${Ym(a.after)}`;
		case "assignment_changed": {
			const e = a.fileCount, t = a.fileIds, n = "number" == typeof e ? e : Array.isArray(t) ? t.length : 0;
			return `${Ym(a.change, "changed")} ${Ym(a.subject, "assignment")} · ${Ym(a.scope, "?")} (${n} file${1 === n ? "" : "s"})`;
		}
	}
	return Object.entries(a).slice(0, 5).map(([e, t]) => "number" == typeof t && e.toLowerCase().includes("timestamp") ? `${e}: ${Jm(t)}` : "string" == typeof t && t.length > 50 ? `${e}: "${t.slice(0, 47)}..."` : Array.isArray(t) ? `${e}: [${t.length} items]` : "object" == typeof t && null !== t ? `${e}: {…}` : `${e}: ${JSON.stringify(t)}`).join(", ");
}
function th(e) {
	return JSON.stringify(e.map((e) => ({
		start_timestamp: e.startTimestamp,
		end_timestamp: e.endTimestamp,
		marker_index: e.markerIndex
	})));
}
function nh(e, t) {
	const n = (i = t, "mims_metrics" === (a = e ?? "generic") ? es(i, s) : "ggir_part5_daysummary" === a ? function(e, t) {
		const n = ts(e, t);
		return e.date_column || e.datetime_column || n.push({
			key: "date_column",
			message: "Map a date/day column for the daily summary table."
		}), n;
	}(i, s) : Qi(i, s));
	var a, i, s;
	if (0 !== n.length) throw new Error(function(e) {
		return `Column-mapped CSV settings are incomplete: ${e.map((e) => e.message).join(" ")} ${Fi}`;
	}(n));
}
function ah(e) {
	const t = /* @__PURE__ */ new Map();
	for (const a of e) "auto_score" !== a.username || a.algorithm !== O.VAN_HEES_2015 || a.isInvalidNight || t.set(a.date, yn(t.get(a.date), a));
	const n = /* @__PURE__ */ new Map();
	for (const [a, i] of t) {
		const e = i.sleepMarkers.filter((e) => e.markerType === re.MAIN_SLEEP);
		if (1 !== e.length) continue;
		const t = e[0], s = t?.onsetTimestamp, r = t?.offsetTimestamp;
		"number" == typeof s && Number.isFinite(s) && "number" == typeof r && Number.isFinite(r) && r > s && n.set(a, [s, r]);
	}
	return n;
}
async function ih(e, t) {
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
function rh(e, t, n, a) {
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
const oh = "wasm-parallel";
function lh(e) {
	const t = e.compiledFeatures;
	return {
		...e,
		compiledFeatures: t.includes(oh) ? t.filter((e) => e !== oh) : [...t, oh]
	};
}
function ch(e, t) {
	const n = e.compiledFeatures.filter((e) => e !== oh), a = t.compiledFeatures.filter((e) => e !== oh);
	return e.contractVersion === t.contractVersion && e.crateVersion === t.crateVersion && e.sourceRevision === t.sourceRevision && e.target === t.target && e.semanticProfile === t.semanticProfile && e.profileProofStatus === t.profileProofStatus && e.temporalBasis === t.temporalBasis && e.artifactSha256 === t.artifactSha256 && n.length === a.length && n.every((e, t) => e === a[t]);
}
async function uh(e, t, n, a, i = /* @__PURE__ */ new Map()) {
	const s = [];
	for (const l of [t, await Na(t, void 0, a)]) {
		const r = e.get(l);
		if (!r) continue;
		let o = i.get(l);
		o || i.set(l, o = za(r, n, `listDatesStatus ${l}`, Ia(), a));
		const c = await o;
		if (!c) return null;
		s.push({
			unpacked: c,
			epochs: await Ha(c.timestamps, t, a),
			ggir: await Ha(c.ggirTimestamps, t, a)
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
function dh(e, t) {
	const n = new Set(t.map((e) => e.analysis_date)), a = Object.keys(e);
	return n.size === t.length && a.length === n.size && a.every((e) => n.has(e));
}
function ph(e) {
	const t = [...e.entries()].sort(([e], [t]) => e.localeCompare(t));
	let n = null, a = null;
	for (const [, r] of t) try {
		const e = Ce(r).timestamps;
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
			const t = Ce(e).timestamps;
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
async function fh(e, t, n, a, i, s, r) {
	const o = [], l = [];
	for (const c of new Set(t)) {
		let t = null;
		for (const o of e) if (o && 0 !== Ce(o).timestamps.length && (await Or(o, c, n, i, void 0, s, r), t = la(c, _a(o, n), a), null !== t)) break;
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
function mh({ available: e, dropped: t }) {
	return 0 === e.length && t.length > 0 ? t.map((e) => e.reason).join("; ") : null;
}
function hh(e) {
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
function gh(e) {
	return 1 === e.length && ma(e[0]);
}
function yh(e, t, n) {
	const a = e?.byDate[t];
	return a ? "refused" === a.kind ? a.reason : null : function(e) {
		const t = e?.sleepPeriodDetectionConfig?.[Hh];
		return "string" == typeof t ? t : null;
	}(n);
}
async function wh(e, t) {
	if (!("placementResults" in e)) return;
	const n = await e.placementResults.get(t);
	return 2 === n?.policy ? n : void 0;
}
function _h(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let a = 0; a < t; a += 1) {
		const t = e[a];
		if (null == t || !Number.isFinite(t)) return [];
		n[a] = t;
	}
	return n;
}
function vh(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let a = 0; a < t; a += 1) {
		const t = e[a];
		if (0 !== t && 1 !== t) return [];
		n[a] = t;
	}
	return n;
}
function bh(e, t, n) {
	if (t.length !== e.length || n.length !== e.length) return [];
	const a = new Array(e.length);
	for (let i = 0; i < e.length; i += 1) {
		const s = t[i], r = e[i], o = n[i];
		if (null == s || null == r || s !== r || null == o || !Number.isFinite(o)) return [];
		a[i] = o;
	}
	return a;
}
function Sh(e, t, n, a, i, s) {
	const r = [], o = null == t ? null : s.resolveInstant(t, e, Ve.evening_onset, i), l = null == n ? null : s.resolveInstant(n, e, Ve.morning_offset, i);
	return null == o && null == l || r.push({
		guider: ie.DIARY,
		detector: null,
		onset_ts: o,
		offset_ts: l
	}), null != a && r.push({
		guider: ie.HDCZA,
		detector: null,
		onset_ts: a[0],
		offset_ts: a[1]
	}), r;
}
function kh(e) {
	return `complexity-evidence:${e.generationKey}`;
}
function Ih(e) {
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
function Ah(e) {
	return e.projectionInput;
}
function xh(e) {
	return e.difficultyByDate;
}
function Th(e) {
	return e.signalsByDate;
}
function Nh(e, t, n, a) {
	return {
		has_markers: P(e),
		has_nonwear: V(e),
		is_invalid_night: e?.isInvalidNight ?? !1,
		needs_consensus: e?.needsConsensus ?? !1,
		auto_flagged: t,
		has_auto_score: (n?.sleepMarkers?.length ?? 0) > 0 || !0 === n?.isInvalidNight,
		auto_score_unavailable_reason: a
	};
}
async function Mh(e, t, n, a) {
	const [i, s] = await Promise.all([a.markers.where("[fileId+date+username]").between([
		e,
		t,
		""
	], [
		e,
		t,
		"￿"
	], !0, !0).toArray(), wh(a, e)]), r = /* @__PURE__ */ new Map();
	for (const c of i) r.set(c.username, yn(r.get(c.username), c));
	const o = r.size >= 2 && (await jm([{
		usersForDate: r,
		kind: "sleep"
	}, {
		usersForDate: r,
		kind: "nonwear"
	}])).some((e) => e.disagree), l = r.get(at);
	return Nh(r.get(n), o, l, yh(s, t, l));
}
function $h(e) {
	return JSON.stringify((e ?? []).map((e) => [e.startTimestamp ?? null, e.endTimestamp ?? null]));
}
function zh(e) {
	const t = e ? null : b().scoring(), n = e?.nightStartHour ?? t?.nightStartHour ?? s.night_start_hour, a = e?.nightEndHour ?? t?.nightEndHour ?? s.night_end_hour, i = parseInt(n.split(":")[0] ?? "21", 10), r = parseInt(a.split(":")[0] ?? "9", 10);
	return {
		nightStartHour: Number.isNaN(i) ? 21 : i,
		nightEndHour: Number.isNaN(r) ? 9 : r
	};
}
const Rh = /* @__PURE__ */ new Set(), Dh = /* @__PURE__ */ new WeakMap();
function Eh(e, t, n, a) {
	const i = Dh.get(e) ?? /* @__PURE__ */ new Map();
	Dh.set(e, i);
	const s = i.get(t);
	if (s) {
		let r;
		return {
			run: s.run.catch((o) => {
				if (!s.signal?.aborted || n?.aborted) throw o;
				return i.get(t) === s && i.delete(t), r = Eh(e, t, n, a), r.run;
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
function Ch(e, t, n, a) {
	return J({
		kind: L.NIGHT_DIFFICULTY,
		key: `${L.NIGHT_DIFFICULTY}:${String(e)}`,
		label: "Update night difficulty",
		workspaceId: t.name,
		signal: a,
		rerun: !0,
		run: async (a) => {
			const i = new Lh();
			try {
				if (a.signal.throwIfAborted(), a.progress(0, 2), W() !== t) return;
				const s = await Ye(e, t);
				if (!s || "incomplete" === s.ingestState) return;
				await qm(e, t, a.signal), a.signal.throwIfAborted(), a.progress(1, 2);
				const r = s.nightDifficulty, o = n ?? (r ? {
					nightStartHour: `${String(r.nightStartHour).padStart(2, "0")}:00`,
					nightEndHour: `${String(r.nightEndHour).padStart(2, "0")}:00`
				} : void 0);
				await i.computeDatesStatus(e, s.availableDates, b().scoring().username || "anonymous", o, a.signal), a.progress(2, 2);
			} finally {
				i.dispose();
			}
		}
	}).catch((e) => {
		e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] Stored night difficulty could not be refreshed.", e);
	});
}
Me((e, t, n) => {
	Ch(e, t, void 0, n);
});
const Oh = /* @__PURE__ */ new WeakMap();
function Ph(e, t, n, a, i) {
	i?.throwIfAborted();
	let s = Oh.get(e);
	return s || (s = /* @__PURE__ */ new Map(), Oh.set(e, s)), s.set(t, {
		inputs: n,
		byDate: a
	}), a;
}
const Fh = /* @__PURE__ */ new WeakMap();
function jh(e, t) {
	let n = Fh.get(e);
	n || Fh.set(e, n = /* @__PURE__ */ new Map());
	const a = lt(t);
	let i = n.get(a);
	return i || n.set(a, i = Ne(e.values(), t)), i;
}
function Bh(e) {
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
var Lh = class t {
	sourceKey = "local";
	nightRecordData = or;
	sourceAnalyses;
	services;
	disposed = !1;
	operationProcessingOptions;
	constructor(e, { sourceAnalyses: t = lr, services: n = qf } = {}) {
		this.operationProcessingOptions = e, this.sourceAnalyses = t, this.services = n;
	}
	fileBatches = /* @__PURE__ */ new Map();
	beginFileBatch(e, t = W(), n) {
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
					analysisParadigm: b().scoring().analysisParadigm,
					db: i.db,
					signal: i.signal
				});
			}, Promise.resolve())));
		} };
	}
	reanalyze(e, t, n) {
		return Vf(this.sourceAnalyses, e, "reanalyze")?.reanalyze(e, t, {
			...n,
			services: this.services
		}) ?? null;
	}
	fileBatch(e, t) {
		const n = this.fileBatches.get(e);
		return n?.db === t ? n : null;
	}
	placementDiaries(e, t, n = this.fileBatch(e, t)) {
		return n?.days ? n.diaries ??= pt(e, t) : pt(e, t);
	}
	async placementDiary(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? (await this.placementDiaries(e, n, a)).find((e) => e.analysisDate === t) ?? null : ct(e, t, n);
	}
	async placementMarker(e, t, n, a, i = this.fileBatch(e, a)) {
		if (!i?.days) return nt(e, t, at, n, void 0, a);
		const s = await (i.markers ??= a.markers.where("fileId").equals(e).toArray()), r = xe(s, {
			date: t,
			username: at
		}, n);
		return r ? un(r) : void 0;
	}
	async placementDay(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? a.days.get(t) : Nt(e, t, n, a?.activityDayMemo);
	}
	async scorerVerdict(e, t, n, a, i = this.fileBatch(t, e)) {
		return i?.days ? jh(i.days, n) : i?.activityDayMemo ? jh(await Ot(t, e, i.activityDayMemo), n) : (await Nn(t, e, a))(n);
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
		const n = W(), a = await Ot(e, n, this.fileBatch(e, n)?.activityDayMemo), i = jh(a, t), s = [];
		for (const [r, o] of [...a].sort(([e], [t]) => e.localeCompare(t))) {
			const e = await za(o, i, `loadFileDaySeries ${r}`, Ia());
			e && s.push(e);
		}
		return s;
	}
	async loadActivityData(e, t, n) {
		const a = W();
		let i, s = await Ye(e, a), r = null;
		if (Jt(s)) {
			const { ensureSavedGgirNonwear: t } = await import("./ggir-import-Ct9-A_pY.js");
			try {
				r = await t(e, a, void 0, !1);
			} catch {
				i = "Saved GGIR nonwear recovery failed; recovered nonwear is unavailable.";
			}
			s = await Ye(e, a);
		}
		const o = s?.navigationFacts;
		o?.window[t] || qm(e, a);
		const l = await Pa(e, t, a, void 0, o);
		if (!l) throw new Error(`No activity data found for fileId=${e} date=${t}. File may not be processed yet.`);
		const c = await this.scorerVerdict(a, e, n?.algorithm, { file: s }), u = await za(l, c, `loadActivityData ${t}`, Ia());
		if (!u) throw new Error(`Activity data for fileId=${e} date=${t} is corrupt; please reprocess.`);
		const d = await Na(t, o), p = 48 === n?.viewHours ? [d, await Na(d, o)] : [d], f = await Promise.all(p.map((t) => Nt(e, t, a, this.fileBatch(e, a)?.activityDayMemo))), m = [l];
		for (const k of f) {
			if (!k) break;
			m.push(k);
			const e = await za(k, c, "loadActivityData next-day", Ia());
			if (!e) throw new Error("Next-day activity data is corrupt; please reprocess.");
			const t = u.timestamps.length, n = e.timestamps.length;
			La(u.timestamps, e.timestamps), La(u.axisY, e.axisY), La(u.vectorMagnitude, e.vectorMagnitude), (u.axisX.length > 0 || e.axisX.length > 0) && (u.axisX.length < t && (u.axisX = new Array(t).fill(0)), La(u.axisX, e.axisX.length > 0 ? e.axisX : new Array(n).fill(0))), (u.axisZ.length > 0 || e.axisZ.length > 0) && (u.axisZ.length < t && (u.axisZ = new Array(t).fill(0)), La(u.axisZ, e.axisZ.length > 0 ? e.axisZ : new Array(n).fill(0))), (u.temperature.length > 0 || e.temperature.length > 0) && (u.temperature.length < t && (u.temperature = new Array(t).fill(NaN)), La(u.temperature, e.temperature.length > 0 ? e.temperature : new Array(n).fill(NaN))), (u.eventMarkers.length > 0 || e.eventMarkers.length > 0) && (u.eventMarkers.length < t && (u.eventMarkers = new Array(t).fill(0)), La(u.eventMarkers, e.eventMarkers.length > 0 ? e.eventMarkers : new Array(n).fill(0))), La(u.eventMarkerTimestamps, e.eventMarkerTimestamps), (u.lux.length > 0 || e.lux.length > 0) && (u.lux.length < t && (u.lux = new Array(t).fill(NaN)), La(u.lux, e.lux.length > 0 ? e.lux : new Array(n).fill(NaN))), (u.sleepScores.length > 0 || e.sleepScores.length > 0) && (u.sleepScores.length < t && (u.sleepScores = new Array(t).fill(0)), La(u.sleepScores, e.sleepScores.length > 0 ? e.sleepScores : new Array(n).fill(0))), (u.sleepScoreGaps.length > 0 || e.sleepScoreGaps.length > 0) && (u.sleepScoreGaps.length < t && (u.sleepScoreGaps = new Array(t).fill(0)), La(u.sleepScoreGaps, e.sleepScoreGaps.length > 0 ? e.sleepScoreGaps : new Array(n).fill(0))), (u.lstmTimestamps30s.length > 0 || e.lstmTimestamps30s.length > 0) && (u.lstmTimestamps30s = Ra(u.lstmTimestamps30s, e.lstmTimestamps30s), u.lstmSleepWake30s = Ta(u.lstmSleepWake30s, e.lstmSleepWake30s)), ja(u, e, t, n), (u.ggirTimestamps.length > 0 || e.ggirTimestamps.length > 0) && (u.ggirSib = Ea(u.ggirTimestamps, u.ggirSib, e.ggirTimestamps, e.ggirSib), u.ggirTimestamps = Ra(u.ggirTimestamps, e.ggirTimestamps), u.ggirEnmo = Ra(u.ggirEnmo, e.ggirEnmo), u.ggirAnglez = Ra(u.ggirAnglez, e.ggirAnglez));
		}
		u.ggirSib = $a(u.ggirTimestamps, u.ggirSib);
		const { start: h, end: g } = await Ii(t, 48 === n?.viewHours ? 48 : void 0, o), y = Xa(s?.sourceType, s?.sourceProfileId);
		let w = [];
		ma(y) ? w = (await pe(e, h, g, a)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : "detach_mask" === Ja(y) && u.detachNonwear && (w = Lm(u.detachNonwear, u.timestamps));
		const _ = {};
		for (const [k, I] of Object.entries(u.nonwearMasksByDetector)) 0 !== I.length && (vi(k) || (_[k] = I));
		const v = m.flatMap((e) => e.ggirTimestamps?.byteLength ? [e.ggirInvalid] : []);
		if (v.length > 0 && v.every((e) => void 0 !== e)) {
			const e = v.flatMap((e) => Array.from(new Uint8Array(e)));
			e.length === u.ggirTimestamps.length && (_[ut.ggir_part2_invalid] = e);
		}
		bn(u.timestamps, Wm(m, "count_sleep_wake")), bn(u.ggirTimestamps, Wm(m, "ggir_sleep_period"));
		const b = function(e, t, n, a) {
			const i = {}, s = e.filter((e) => Vm(e, "counts") > 0 || Vm(e, "ggir") > 0);
			for (const r of Bm(a)) {
				const e = Ya(r);
				if (!s.every((t) => t.displayNonwear && e in t.displayNonwear)) continue;
				const a = s.map((t) => t.displayNonwear[e] ?? null), o = a.filter((e) => null !== e), l = o[0]?.grid;
				if (!l) {
					i[e] = null;
					continue;
				}
				if (o.some((e) => e.grid !== l)) continue;
				const c = o.some((e) => null !== e.weight), u = [], d = [];
				if (s.forEach((e, t) => {
					const n = a[t], i = n ? new Uint8Array(n.any) : new Uint8Array(Vm(e, l));
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
		Object.keys(b).length < Bm(s ?? null).length && qm(e, a);
		const S = await Oa(u, m, c, s);
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
			...n?.algorithm && !Ma(n.algorithm) && 0 === u.sleepScores.length && u.timestamps.length > 0 ? { scorerMissingReason: "stale" === c.status ? c.reason : Fa(n.algorithm, {
				sourceProfileId: s?.sourceProfileId,
				scorerSettingsStored: await Vf(this.sourceAnalyses, s, "hasScorerSettings")?.hasScorerSettings(e, a)
			}) } : {},
			lstmTimestamps30s: u.lstmTimestamps30s,
			lstmSleepWake30s: u.lstmSleepWake30s,
			nonwearResults: u.nonwearResults,
			nonwearResultsChoi2011: u.nonwearResultsChoi2011,
			vanHeesNonwear: u.vanHeesNonwear,
			algorithmicNonwearMasks: _,
			nonwearBands: b,
			...r ? { nonwearSourceLabels: { [ut.ggir_saved]: r } } : {},
			...i ? { savedNonwearMissingReason: i } : {},
			epochResolutions: S,
			viewStart: h,
			viewEnd: g,
			sensorNonwearPeriods: w,
			deviceNonwearSource: y
		};
	}
	async loadMarkers(e, t, n, a, i, s) {
		const r = s ?? W(), o = await nt(e, t, n, a, i, r);
		return o ? Bh(o) : null;
	}
	async saveMarkers(e, t, n, a, i, s, r, o, l) {
		const c = o ?? W(), u = b().scoring(), d = Fm(c, {
			username: n,
			studyId: u.selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, l), p = r?.signal ?? this.fileBatch(e, c)?.signal;
		let f, m = null, h = null, g = !1, y = r?.sleepPeriodDetection ?? u.sleepPeriodDetection;
		const w = await Un({
			fileId: e,
			date: t,
			username: n,
			algorithm: i ?? null,
			detectionRule: s ?? null,
			signal: p
		}, c, async (o) => {
			const l = "function" == typeof a ? await a(o ? Bh(o) : null) : {
				data: a,
				settings: r
			};
			if (!l) return null;
			m = l.data;
			const d = l.settings ?? r, w = f = await Ye(e, c);
			m = {
				...m,
				sleepMarkers: await this.nightRecordData[dt(w, u.analysisParadigm)].sleepPeriodsToSave({
					fileId: e,
					date: t,
					isInvalidNight: m.isInvalidNight ?? o?.isInvalidNight ?? !1
				}, m.sleepMarkers, c)
			}, y = mt({
				algorithm: i ?? "",
				sleepPeriodDetection: d?.sleepPeriodDetection ?? u.sleepPeriodDetection
			});
			const _ = y ? $n(y) : null, v = void 0 === d?.periodGuider ? de(u, w) : null, b = d?.periodGuider ?? v?.periodGuider, S = d?.periodGuider ?? (_ && !0 !== v?.placementFromSource ? Xe(ge(_)) : v?.periodGuider), k = i ? ue(i) : null, I = k ? Rt(k) : null, A = await nt(e, t, n, i ?? null, s ?? null, c);
			g = !A || A.algorithm !== (i ?? null) || A.detectionRule !== (s ?? null) || JSON.stringify(A.sleepMarkers) !== JSON.stringify(m.sleepMarkers) || void 0 !== m.isInvalidNight && m.isInvalidNight !== A.isInvalidNight, h = void 0 !== m.nonwearMarkers && "auto_score" !== n ? $h(A?.nonwearMarkers) : null;
			let x = m.sleepPeriodDetectionConfig ?? null;
			if (null === x) {
				const n = await ct(e, t, c);
				x = xn({
					algorithm: i ?? null,
					periodGuider: yo(0, b, y),
					sleepPeriodDetection: y,
					diaryOnsetTime: zt(n),
					diaryWakeTime: ln(n)
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
		const _ = m, v = Bh(w.record), S = {
			fileId: e,
			file: f,
			nights: /* @__PURE__ */ new Map([[t, _.sleepMarkers]]),
			sleepMarkersChanged: g,
			username: n,
			analysisParadigm: b().scoring().analysisParadigm,
			db: c,
			signal: p,
			openBatch: () => this.fileBatch(e, c)
		};
		if (await this.sourceAnalyses.reduce(async (e, t, n) => !!(await e || n > 0 && p?.aborted) || (Wf(t, f, "followSavedNights") && await t.followSavedNights(S), !1), Promise.resolve(!1))) return v;
		null !== h && h !== $h(_.nonwearMarkers) && Ch(e, c, void 0, p), g && nt(e, t, n, i ?? null, s ?? null, c).then(async (t) => {
			if (!t) return;
			const { storeNightPeriodMetrics: n } = await import("./local-export-worker-CjBDcX0Y.js").then((e) => e.R);
			return n(t, await this.scorerVerdict(c, e, t.algorithm), c, p);
		}).catch(() => {
			console.warn("[local-analysis] period metrics could not be stored with the saved night");
		});
		try {
			if (W() !== c) return v;
		} catch {
			return v;
		}
		const k = nn();
		if (!k.capabilities.tauri) return v;
		try {
			const [a, r] = await Promise.all([Ye(e, c), nt(e, t, n, i ?? null, s ?? null, c)]);
			if (!a?.fileHash || !r?.contentHash) return v;
			await k.workspace.saveMarkers({
				fileHash: a.fileHash,
				date: t,
				username: n,
				sleepMarkers: (I = _.sleepMarkers, JSON.stringify(I.map((e) => ({
					onset_timestamp: e.onsetTimestamp,
					offset_timestamp: e.offsetTimestamp,
					marker_index: e.markerIndex,
					marker_type: e.markerType
				})))),
				nonwearMarkers: th(r.nonwearMarkers),
				isInvalidNight: r.isInvalidNight,
				notes: _.notes,
				contentHash: r.contentHash
			});
		} catch {
			console.warn("[platform] native marker mirror failed for the active local selection");
		}
		var I;
		return v;
	}
	async listFiles() {
		const e = W();
		return (await be(e)).map((e) => {
			const t = e.id ?? 0, n = ne(e);
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
				views: oe(t, n, /* @__PURE__ */ new Set(), e.epochLengthSeconds),
				count_epoch_seconds: e.epochLengthSeconds
			};
		});
	}
	async listDates(e) {
		const t = W();
		return (await Ye(e, t))?.availableDates ?? gt(e, t);
	}
	async getDiaryEntry(e, t) {
		const n = W(), a = await ct(e, t, n);
		return a ? It(a, await Tn(e, n)) : null;
	}
	async listDiaryEntries(e) {
		const t = W(), n = await pt(e, t);
		if (0 === n.length) return n;
		const a = await Tn(e, t);
		return null === a ? n : En(n, a);
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
		const d = Z(c), [p, f, m, h] = await Promise.all([
			u?.days ? [...u.days.keys()].sort() : gt(e, i),
			this.placementDiaries(e, i, u),
			gh(s) ? St(e, i) : An(e, i),
			i.files.get(e)
		]), g = await En(f, a, d), y = new Map(g.map((e) => [e.analysisDate, e])), w = [], _ = p.filter((e) => e !== t), v = await Promise.all(_.map((t) => this.placementDay(e, t, i, u)));
		for (const [b, S] of _.entries()) {
			const e = v[b];
			if (!e) continue;
			for (const n of s) await Or(e, n, l, i, d, c, u?.activityDayMemo);
			const t = await za(e, n, `autoScore context ${S}`, l, d);
			if (!t || 0 === t.timestamps.length || 0 === t.sleepScores.length) continue;
			const a = y.get(S), p = t.timestamps[0] ?? 0, f = t.timestamps[t.timestamps.length - 1] ?? p, g = await Ct(t.timestamps, mn({
				day: e,
				file: h
			}), d), _ = hh(va(await fa(s, t.nonwearMasksByDetector, {
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
				diaryBedTime: In(a),
				diaryOnsetTime: zt(a),
				diaryWakeTime: ln(a),
				diaryNaps: a ? Gt(a) : null,
				diaryNonwear: a ? Bt(a) : null
			});
		}
		return {
			contextDays: w,
			deviceOffNonwear: m
		};
	}
	async autoScore(e, t, n, a) {
		const i = a ?? W();
		if (this.fileBatch(e, i)) return this.autoScoreNight(e, t, n, bo, i);
		const s = {}, r = await Ot(e, i, s), o = {
			db: i,
			signal: n.signal,
			depth: 0,
			savedNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map(),
			activityDayMemo: s,
			span: Promise.resolve(ph(r))
		};
		return this.autoScoreNight(e, t, n, bo, i, void 0, void 0, void 0, o);
	}
	async autoScoreFile(e, t, n = !0, a = W(), i) {
		if (C(a.name)) return /* @__PURE__ */ new Map();
		const s = await this.filePlacementState(e, t, a);
		if (!s) return /* @__PURE__ */ new Map();
		const { file: r, inputs: o, cached: l } = s, c = Ue(r);
		return c ? new Map(r.availableDates.map((e) => [e, {
			kind: "refused",
			reason: c
		}])) : l ? Ph(a, e, o, l, t.signal) : n ? J({
			kind: L.AUTO_SCORE,
			key: `${L.AUTO_SCORE}:${String(e)}:${o}`,
			label: "Compute marker placement",
			workspaceId: a.name,
			signal: t.signal,
			run: async (n) => {
				const l = i?.inputs === o ? i.byDate : await this.computeFilePlacement(s, t, a, n);
				return await this.storeFilePlacement(e, o, l, a, {
					...t,
					signal: n.signal
				}) ? (n.progress(r.availableDates.length, r.availableDates.length), Ph(a, e, o, l, n.signal)) : /* @__PURE__ */ new Map();
			}
		}) : /* @__PURE__ */ new Map();
	}
	async filePlacementState(e, t, a) {
		const i = await Ye(e, a), s = Oh.get(a)?.get(e), [r, o, l] = await Promise.all([
			pt(e, a),
			a.markerProvenance.get(e),
			s ? void 0 : wh(a, e)
		]);
		if (!i) return null;
		const c = await S.waitFor(async function(e, t, a, i) {
			const s = b().scoring(), r = t.ruleset ?? s.placementRuleset, o = /* @__PURE__ */ new Set([O.VAN_HEES_2015, ...t.algorithm && Ma(t.algorithm) ? [t.algorithm] : []]), l = (e) => "auto_score" === e.username && o.has(e.algorithm ?? ""), c = (i?.rows ?? []).filter((e) => l(e) || r !== n.LEGACY && e.nonwearDecided).map((e) => [e.id, l(e) ? e.lastModifiedAt : e.nonwearSpans ?? e.lastModifiedAt]), { signal: u, choiAxis: d, hasptVariant: p, studySettingsRevision: f, ...m } = t;
			return le(JSON.stringify({
				v: 2,
				options: m,
				ruleset: r,
				nonwearDetectors: t.nonwearDetectors ?? ca(xa(t.algorithm)),
				choiAxis: t.choiAxis ?? s.choiAxis,
				hasptVariant: t.hasptVariant ?? s.ggirHasptVariant,
				seriesRevision: e.seriesRevision ?? 0,
				dates: e.availableDates,
				diaries: a,
				rows: c
			}));
		}(i, t, r, o));
		if (s?.inputs === c) return {
			fileId: e,
			file: i,
			diaries: r,
			inputs: c,
			cached: s.byDate
		};
		const u = s ? await wh(a, e) : l;
		return {
			fileId: e,
			file: i,
			diaries: r,
			inputs: c,
			cached: u?.inputs === c ? new Map(Object.entries(u.byDate)) : null
		};
	}
	async storeFilePlacement(e, t, n, a, i) {
		if (i.signal?.throwIfAborted(), C(a.name)) return !1;
		const s = await D(a, [
			a.files,
			a.diaryEntries,
			a.markerProvenance,
			a.placementResults,
			a.studySettings
		], async () => {
			if (void 0 !== i.studySettingsRevision && ((await we(a))?.contentHash ?? null) !== i.studySettingsRevision) return !1;
			const s = await this.filePlacementState(e, i, a);
			return !C(a.name) && s?.inputs === t && (await a.placementResults.put({
				fileId: e,
				policy: 2,
				inputs: t,
				byDate: Object.fromEntries(n)
			}), !0);
		}, i.signal);
		return s && W() === a && ke(e, a), s;
	}
	async storeFilesPlacement(e, n, a, i, s) {
		const r = [], l = await Promise.allSettled(e.map(({ fileId: e, options: t }) => this.filePlacementState(e, t, n))), c = {
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: f()
		}, u = l.flatMap((e) => "fulfilled" === e.status && e.value ? [e.value.file] : []), d = u.flatMap((e) => "ggir_part1" === ae(e.sourceType)?.importWorkerBudget ? [{ size: e.sourceSizeBytes ?? 0 }] : []), p = d.length > 0 && d.length === u.length ? ui(d, c) : {
			...c,
			maxExtraWorkers: Number.POSITIVE_INFINITY
		}, m = await fi(e.map(({ fileId: e, options: i }, o) => ({
			name: `placement:${String(e)}`,
			cost: 1,
			run: async (c, u) => {
				try {
					const r = new t(), u = l[o];
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
			createWorker: o,
			extraWorkers: Ua(p),
			cancelOperation: () => {},
			...i,
			signal: a.signal
		});
		for (const [t, o] of m.entries()) {
			try {
				o && await this.storeFilePlacement(o.fileId, o.inputs, o.byDate, n, e[t].options) && Ph(n, o.fileId, o.inputs, o.byDate, a.signal);
			} catch {
				a.signal.throwIfAborted(), r.push(e[t].fileId);
			}
			a.progress(t + 1, m.length);
		}
		if (r.length > 0) {
			const e = `Marker placement failed for recording ID(s) ${r.sort((e, t) => e - t).map(String).join(", ")}.`;
			throw a.progress(m.length, m.length, e), new Error(e);
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
		return $e(async (c) => {
			const u = await Ot(r, n, c), d = s ?? (await Gr(n)).csvText, p = void 0 !== i && Ma(t.algorithm), f = [];
			let m, h = o.length;
			const g = new Promise((e) => {
				m = e;
			}).then(async () => {
				if (0 !== f.length) try {
					a.signal.throwIfAborted();
					const e = f.map((e) => e.opts), n = p && i ? await i.placeStoredGgirNights([...u.values()], Ne([...u.values()], t.algorithm), f.map((e) => ({
						options: e.opts,
						...e.anchor
					}))) : await function(e, t = A()) {
						return On(e, t);
					}(e, i ?? Z(a.signal));
					a.signal.throwIfAborted();
					for (const [t, a] of f.entries()) a.resolve(n[t]);
				} catch (yd) {
					for (const t of f) t.reject(yd);
				}
			}), y = this.beginFileBatch(r, n, a.signal), w = this.fileBatch(r, n), _ = {
				activityDayMemo: w.activityDayMemo,
				days: w.days,
				span: w.span,
				file: w.file,
				diaries: w.diaries,
				markers: w.markers
			};
			w.activityDayMemo = c, w.days = u, w.span = Promise.resolve(ph(u)), w.file = Promise.resolve(e.file), w.diaries = Promise.resolve(e.diaries);
			try {
				0 === o.length && m();
				const e = await Promise.all(o.map(async (e) => {
					let t = !1;
					const a = () => {
						t || (t = !0, h -= 1, 0 === h && m());
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
				await g;
				const t = new Map(e);
				return a.signal.throwIfAborted(), t;
			} finally {
				Object.assign(w, _), await y.end();
			}
		});
	}
	async autoScoreNight(e, t, a, i, s = W(), r, o, l, c) {
		const u = o ?? Z(a.signal);
		a.signal?.throwIfAborted();
		const d = c ?? this.fileBatch(e, s), p = await (d ? d.file ??= Ye(e, s) : Ye(e, s)), f = Ue(p);
		if (f) return {
			kind: "refused",
			reason: f
		};
		const h = a.ruleset ?? b().scoring().placementRuleset, g = xa(a.algorithm), y = a.nonwearDetectors ?? ca(g), w = a.choiAxis ?? b().scoring().choiAxis, _ = a.sleepPeriodDetection ? $n(a.sleepPeriodDetection) : void 0;
		let v = oa(_, {
			path: g,
			selected: y
		}) ?? null;
		const S = await Pa(e, t, s, (t) => this.placementDay(e, t, s, d), void 0, u);
		if (!S) return {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
		if ("vendor_analysis" === m.find((e) => e.id === a.algorithm)?.execution) {
			const n = {
				fileId: e,
				date: t,
				file: p,
				options: a,
				sleepPeriodDetectionConfig: v,
				db: s,
				batch: d
			}, i = await this.sourceAnalyses.reduce(async (e, t) => await e ?? t.proposeNight?.(n) ?? null, Promise.resolve(null));
			if (i) return i;
		}
		const k = await this.placementDay(e, await Na(t, void 0, u), s, d), I = Xa(p?.sourceType, p?.sourceProfileId), A = await fh([S, k], y, w, I, s, a.signal, d?.activityDayMemo), x = await this.scorerVerdict(s, e, a.algorithm, { file: p }, d), T = Ma(a.algorithm), N = T && l ? { kind: "angle-deferred" } : await Ca({
			day: S,
			nextDay: k,
			verdict: x,
			angle: T,
			requireScores: !0,
			missingScoresReason: a.algorithm === O.LSTM_SLEEP_WAKE ? "No LSTM sleep/wake results are stored for this file. Re-import or reprocess the raw file so the app can compute spectral features and run the ONNX model." : "No algorithm results available",
			choiAxis: w,
			laterDays: async () => [...(d?.days ?? await Ot(e, s, d?.activityDayMemo)).values()].filter((e) => e.date > t).sort((e, t) => e.date.localeCompare(t.date)),
			core: u
		});
		if ("refused" === N.kind) return N;
		const M = T ? null : mh(A);
		if (null !== M) return {
			kind: "refused",
			reason: M
		};
		v = oa(_, {
			path: g,
			selected: y,
			available: A.available,
			dropped: A.dropped
		}) ?? null;
		const $ = pa(A.dropped, g), z = (e) => "refused" === e.kind || null === v && 0 === $.length ? e : {
			...e,
			notes: [...$, ...e.notes],
			sleep_period_detection_config: {
				...e.sleep_period_detection_config ?? {},
				...v ?? {}
			}
		};
		if ("angle" === N.kind || "angle-legacy" === N.kind || "angle-deferred" === N.kind) {
			const o = await this.placementMarker(e, t, a.algorithm ?? null, s, d) ?? await this.placementMarker(e, t, O.VAN_HEES_2015, s, d), c = o?.sleepMarkers[0], f = null != c?.onsetTimestamp && null != c.offsetTimestamp ? {
				startTimestamp: c.onsetTimestamp,
				endTimestamp: c.offsetTimestamp
			} : null, m = () => c && null != c.onsetTimestamp && null != c.offsetTimestamp ? {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: c.onsetTimestamp,
					offset_timestamp: c.offsetTimestamp,
					marker_type: re.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: [],
				notes: ["HDCZA fallback: no 5s SIB stream available for structured sleep-period fusion", `HDCZA window: ${ee(c.onsetTimestamp)} – ${ee(c.offsetTimestamp)}`],
				decisions: [],
				sleep_period_detection_config: o?.sleepPeriodDetectionConfig ?? v
			} : {
				kind: "refused",
				reason: "No HDCZA sleep window found — re-process the file to regenerate it"
			};
			if ("angle" === N.kind || "angle-deferred" === N.kind) {
				let c = {
					timestamps: /* @__PURE__ */ new Float64Array(),
					activityCounts: /* @__PURE__ */ new Float64Array(),
					sleepScores: /* @__PURE__ */ new Uint8Array()
				};
				if ("angle" === N.kind) {
					const e = await Ga(N, t, u);
					if ("refused" === e.kind) return e;
					c = e.series;
				}
				const [g, y] = await Promise.all([this.placementDiary(e, t, s, d), d ? d.span ??= Tn(e, s, p?.seriesRevision ?? 0) : Tn(e, s, p?.seriesRevision ?? 0)]), w = g ? await It(g, y, u) : null, _ = (await So(a.sensorLocation ?? "wrist", a.hasptVariant ?? b().scoring().ggirHasptVariant, u)).variant, v = function(e) {
					const t = e?.sleepPeriodDetectionConfig?.haspt_variant;
					return Object.values(ft).includes(t) ? t : null;
				}(o), I = null == o ? null : null == v ? `HASPT variant not recorded at import; assumed ${_} from the study setting. Reprocess the file to record it.` : v !== _ ? `HASPT variant at import was ${v}; the study setting now gives ${_}. Placed with ${v}; reprocess the file to apply ${_}.` : null, A = h === n.GGIR_PART4, x = A ? await _t(await this.placementDiaries(e, s, d), void 0, u) : null, T = x?.wakeIsOutBed ? null : en(w, x?.outBedIsWake ? "diary_out_of_bed_time" : "diary_wake_time"), M = x?.outBedIsWake ? null : en(w, x?.wakeIsOutBed ? "diary_wake_time" : "diary_out_of_bed_time"), $ = {
					...c,
					choiNonwear: null,
					ggirHasptAlgo: v ?? _,
					ggirConfigCsv: r ?? (await Gr(s)).csvText,
					...x?.hasBedlog ? { ggirDiaryHasBedlog: !0 } : {},
					...x?.hasSleeplog ? { ggirDiaryHasSleeplog: !0 } : {},
					diaryBedTime: A ? en(w, "diary_in_bed_time") : In(w),
					diaryOutBedTime: A ? M : Pt(w),
					diaryOnsetTime: A ? en(w, "diary_onset_time") : zt(w),
					diaryWakeTime: A ? T : ln(w),
					diaryNaps: w ? Gt(w) : null,
					analysisDate: t,
					onsetMinConsecutiveSleep: 1,
					offsetMinConsecutiveMinutes: 1,
					algorithm: a.algorithm,
					periodGuider: yo(a.algorithm, a.periodGuider, a.sleepPeriodDetection),
					...void 0 !== a.sleepPeriodDetection ? { sleepPeriodDetection: a.sleepPeriodDetection } : {},
					...a.scorerPostprocessing ? { scorerPostprocessing: a.scorerPostprocessing } : {},
					ruleset: h,
					epochLengthSeconds: 5,
					guiderWindows: f ? { hdcza: f } : {}
				}, R = "angle-deferred" === N.kind ? await l($, S, k) : await i($);
				return "angle-legacy" === R ? m() : z(I && "refused" !== R.kind ? {
					...R,
					notes: [I, ...R.notes]
				} : R);
			}
			return m();
		}
		const [R, D] = await Promise.all([this.placementDiary(e, t, s, d), d ? d.span ??= Tn(e, s, p?.seriesRevision ?? 0) : Tn(e, s, p?.seriesRevision ?? 0)]), E = R ? await It(R, D, u) : null, { unpacked: C } = N, { timestamps: P, axisY: F, sleepScores: j, eventMarkerTimestamps: B } = C, L = Fe(a.detectionRule), G = yo(a.algorithm, a.periodGuider, a.sleepPeriodDetection), U = await Mn(cr, {
			fileId: e,
			file: p,
			date: t,
			db: s,
			batch: d,
			autoScoreMarker: (n) => this.placementMarker(e, t, n, s, d)
		}), H = await Ct(P, mn({
			day: S,
			file: p
		}), u), q = A.available.some(ma) ? await (d ? d.sensor ??= Wt(e, s) : Wt(e, s)) : [], V = hh(va(await fa(A.available, C.nonwearMasksByDetector, {
			offPeriods: q,
			source: I
		}, {
			timestampsSec: P,
			epochLenSec: H
		}, u))), J = h !== n.LEGACY ? await this.loadPlacementFileContext(e, t, a.algorithm, x, D, s, A.available, q, I, w, a.signal, d) : null, { startIndex: K, endIndex: Y } = await Ha(P, t, u);
		if (K === Y) return {
			kind: "refused",
			reason: "No activity data found for this date"
		};
		const X = P.slice(K, Y), Q = F.slice(K, Y), te = j.slice(K, Y), ne = V.choiNonwear ? V.choiNonwear.slice(K, Y) : null, ae = V.nonwearWeight ? V.nonwearWeight.slice(K, Y) : null, ie = V.nonwearMemberFlags ? V.nonwearMemberFlags.slice(K, Y) : null, se = X[0] ?? 0, oe = X[X.length - 1] ?? se;
		return z(await i({
			timestamps: X,
			activityCounts: Q,
			sleepScores: te,
			choiNonwear: ne,
			...ae ? { nonwearWeight: ae } : {},
			...ie ? { nonwearMemberFlags: ie } : {},
			diaryBedTime: In(E),
			diaryOnsetTime: zt(E),
			diaryWakeTime: ln(E),
			diaryNaps: E ? Gt(E) : null,
			diaryNonwear: E ? Bt(E) : null,
			analysisDate: t,
			onsetMinConsecutiveSleep: L.onsetN,
			offsetMinConsecutiveMinutes: L.offsetN,
			algorithm: a.algorithm,
			periodGuider: G,
			...void 0 !== a.sleepPeriodDetection ? { sleepPeriodDetection: a.sleepPeriodDetection } : {},
			...a.scorerPostprocessing ? { scorerPostprocessing: a.scorerPostprocessing } : {},
			ruleset: h,
			nonwearDetectors: V.nonwearDetectors,
			epochLengthSeconds: H,
			guiderWindows: U,
			eventMarkerTimestamps: B.filter((e) => e >= se && e <= oe + 60),
			nightStartHour: Lt(a.nightStartHour),
			nightEndHour: Lt(a.nightEndHour),
			...J ? {
				sensorNonwear: J.deviceOffNonwear.filter((e) => e.startTimestamp <= oe && e.endTimestamp >= se),
				contextDays: J.contextDays
			} : {}
		}));
	}
	async autoNonwear(e, t, n) {
		if (void 0 === n.threshold) throw new Error("Local auto-nonwear requires a resolved nonwear threshold.");
		const a = W(), s = await Pa(e, t, a, (t) => Nt(e, t, a, this.fileBatch(e, a)?.activityDayMemo));
		if (!s) return {
			kind: "refused",
			reason: "No activity data"
		};
		const [r, o, c, u] = await Promise.all([
			Nt(e, await Na(t), a, this.fileBatch(e, a)?.activityDayMemo),
			ct(e, t, a),
			Wt(e, a),
			Ye(e, a)
		]), d = b().scoring(), p = de(d, u), f = n.nonwearDetectors ?? ("ggir" === xa(p.algorithm) ? d.nonwearDetectorsGgir : p.nonwearDetectorsCounts), m = Xa(u?.sourceType, u?.sourceProfileId), h = await fh([s, r], f, Ia(), m, a, void 0, this.fileBatch(e, a)?.activityDayMemo), g = mh(h);
		if (null !== g) return {
			kind: "refused",
			reason: g
		};
		const y = await Ca({
			day: s,
			nextDay: r,
			verdict: jn,
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
		const w = y.unpacked, { timestamps: _, axisY: v } = w, S = _[0] ?? 0, k = _[_.length - 1] ?? S, I = va(await fa(h.available, w.nonwearMasksByDetector, {
			offPeriods: c.filter((e) => e.startTimestamp <= k && e.endTimestamp >= S),
			source: m
		}, {
			timestampsSec: _,
			epochLenSec: await qe(_, {
				day: s,
				file: u
			})
		})), x = hh(I), T = gh(h.available), N = o ? Bt(o) : [], M = n.existingSleepMarkers, $ = await async function(e) {
			if (0 === e.timestamps.length || 0 === e.activityCounts.length) return yt("No activity data");
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
				epoch_length_seconds: e.epochLengthSeconds ?? i,
				threshold: e.threshold ?? 0,
				min_duration_minutes: e.minDurationMinutes ?? 10,
				zero_activity_ratio: .65,
				diary_min_duration_minutes: e.diaryMinDurationMinutes ?? 1,
				...jt(e.nonwearDetectors, e.nonwearWeight, {
					alwaysNameSingle: !0,
					memberFlags: e.nonwearMemberFlags
				})
			}, n = [
				JSON.stringify(t),
				e.timestamps instanceof Float64Array ? e.timestamps : Float64Array.from(e.timestamps),
				e.activityCounts instanceof Float64Array ? e.activityCounts : Float64Array.from(e.activityCounts),
				e.choiNonwear instanceof Uint8Array ? e.choiNonwear : Uint8Array.from(e.choiNonwear ?? [])
			], a = n.slice(1).filter((t) => ArrayBuffer.isView(t) && t !== e.timestamps && t !== e.activityCounts && t !== e.choiNonwear), s = await A().placeNonwearMarkers(l(n, a.map((e) => e.buffer)));
			return s ? {
				kind: "placed",
				nonwear_markers: s.nonwear_markers,
				notes: s.notes
			} : yt("Nonwear placement is unavailable in this build — reload while online to update the local engine.");
		}({
			timestamps: _,
			activityCounts: v,
			diaryNonwear: N,
			choiNonwear: T ? null : x.choiNonwear,
			nonwearDetectors: x.nonwearDetectors,
			...x.nonwearWeight ? { nonwearWeight: x.nonwearWeight } : {},
			...x.nonwearMemberFlags ? { nonwearMemberFlags: x.nonwearMemberFlags } : {},
			sensorNonwearPeriods: T ? c.filter((e) => e.startTimestamp <= k && e.endTimestamp >= S).sort((e, t) => e.startTimestamp - t.startTimestamp).map((e) => [e.startTimestamp, e.endTimestamp]) : [],
			existingSleepMarkers: M,
			analysisDate: t,
			threshold: n.threshold
		});
		return "refused" === $.kind ? $ : {
			kind: "placed",
			nonwear_markers: $.nonwear_markers.map((e) => da(e, I?.available.length ?? 0)),
			notes: [...pa(h.dropped, xa(p.algorithm)), ...$.notes]
		};
	}
	async listFileScoringCounts(e, t, n) {
		return this.fileScoringCountsIn(W(), e, t, n);
	}
	async fileScoringCountsIn(e, t, n, a) {
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const { nightStartHour: i, nightEndHour: s } = zh(a), [r, o] = await Promise.all([e.files.bulkGet([...t]), Ge(t, e)]);
		return Promise.all(t.map(async (t, a) => {
			const l = r[a], c = l?.availableDates ?? await gt(t, e), u = /* @__PURE__ */ new Map();
			for (const e of o[a]?.rows ?? []) e.username === n && u.set(e.date, yn(u.get(e.date), e));
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
		const i = W(), s = (await Ye(e, i))?.nightDifficulty, { nightStartHour: r, nightEndHour: o } = zh(a);
		if (s?.nightStartHour !== r || s.nightEndHour !== o || !t.every((e) => e in s.byDate)) return null;
		void 0 === s.notRankableReason && A().getComputeIdentity().then(({ sourceRevision: t }) => {
			s.sourceRevision !== String(t) && Ch(e, i, a);
		}, () => {});
		const [l, c] = await Promise.all([he(e, i), wh(i, e)]), u = bt(l, n), d = bt(l, at), p = rn(l), f = t.filter((e) => (p.get(e)?.size ?? 0) >= 2), m = await jm(f.flatMap((e) => [{
			usersForDate: p.get(e),
			kind: "sleep"
		}, {
			usersForDate: p.get(e),
			kind: "nonwear"
		}])), h = new Set(f.filter((e, t) => m[2 * t].disagree || m[2 * t + 1].disagree));
		return t.map((e) => ({
			date: e,
			...Nh(u.get(e), h.has(e), d.get(e), yh(c, e, d.get(e))),
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
		const r = Z(s);
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const o = W(), l = ++this.nextComplexityGenerationToken;
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
					Ot(e),
					pt(e),
					St(e, o, t),
					ih(e, o),
					Ye(e)
				]);
				return [
					bt(t, n),
					bt(t, at),
					a,
					i,
					s,
					rn(t),
					ah(t),
					r,
					l
				];
			}, [d, p, f, m, h, g, y, w, _] = "function" == typeof o.transaction ? await o.transaction("r", [
				o.markers,
				o.activityDays,
				o.diaryEntries,
				o.sensorNonwear,
				o.dailyGgirSummaries,
				o.files
			], async () => {
				if (W() !== o) throw new Error("The local workspace changed before difficulty inputs could be read.");
				const e = await u();
				if (W() !== o) throw new Error("The local workspace changed while difficulty inputs were being read.");
				return e;
			}) : await u(), v = ph(f), b = new Map((await En(m, v, r)).map((e) => [e.analysisDate, e])), { nightStartHour: k, nightEndHour: I } = zh(a), A = t.filter((e) => (g.get(e)?.size ?? 0) >= 2), x = await jm(A.flatMap((e) => [{
				usersForDate: g.get(e),
				kind: "sleep"
			}, {
				usersForDate: g.get(e),
				kind: "nonwear"
			}]), r), T = new Set(A.filter((e, t) => x[2 * t].disagree || x[2 * t + 1].disagree)), N = await wh(o, e), M = (e) => t.map((t) => ({
				date: t,
				...Nh(d.get(t), T.has(t), p.get(t), yh(N, t, p.get(t))),
				complexity_pre: e(t),
				complexity_post: null
			})), $ = _?.nightDifficulty;
			$?.nightStartHour === k && $.nightEndHour === I && t.every((e) => e in $.byDate) && (s?.throwIfAborted(), i(M((e) => $.byDate[e] ?? null)));
			const z = [], R = [...t], E = await Ki(R, r), C = new Map(R.map((e, t) => [e, E[t] ?? !1])), O = Ne(f.values()), P = /* @__PURE__ */ new Map();
			for (const n of t) {
				s?.throwIfAborted();
				const t = await uh(f, n, O, r, P);
				if (!t) continue;
				const { timestamps: a, axisY: i, sleepScores: o, nonwearResults: l, temperature: c, detachNonwear: u, ggirTimestamps: d, ggirAnglez: p } = t, m = _h(a, a.length), g = _h(i, m.length), v = vh(o, m.length);
				if (0 === m.length || 0 === g.length || 0 === v.length) continue;
				const S = b.get(n), k = y.get(n) ?? null, I = await Le((t) => {
					const a = Pn(zt(S), t), i = Pn(ln(S), t);
					return {
						naps: S ? Gt(S).map(([e, n]) => ({
							onset_time: Pn(e, t),
							offset_time: Pn(n, t)
						})).filter((e) => null != e.onset_time) : [],
						nonwear: S ? Bt(S).map(([e, n]) => [Pn(e, t), Pn(n, t)]).filter((e) => null != e[0] && null != e[1]).map(([e, t]) => ({
							start_time: e,
							end_time: t
						})) : [],
						onset: a,
						wake: i,
						inBed: Pn(In(S), t),
						outBed: Pn(Pt(S), t),
						guiderTargets: Sh(n, a, i, k, Qe(e), t)
					};
				}, new Kt(r)), A = I.naps, x = I.nonwear, T = m[0] ?? 0, N = m[m.length - 1] ?? T, M = I.onset, $ = I.wake, R = w.get(n)?.calibration?.errorEnd;
				z.push({
					analysis_date: n,
					epoch_length_seconds: await Ct(m, mn({
						day: f.get(n),
						file: _
					}), r),
					timestamps: m,
					activity_counts: g,
					sleep_scores: v,
					choi_nonwear: vh(l, m.length),
					sensor_nonwear: h.filter((e) => e.startTimestamp <= N && e.endTimestamp >= T).map((e) => ({
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
					is_weekend: C.get(n) ?? null,
					guider_targets: I.guiderTargets,
					anglez: bh(m, d, p),
					light: [],
					temperature: _h(c, m.length),
					heart_rate: [],
					detach_nonwear: vh(u, m.length),
					calibration_error: "number" == typeof R && Number.isFinite(R) ? R : null,
					imputed_fraction: null,
					hdcza_window: k
				});
			}
			let F, j;
			try {
				if (z.length > 0) {
					const n = {
						config: { signals: {
							night_start_hour: k,
							night_end_hour: I
						} },
						days: z
					}, a = {
						config: n.config ?? null,
						days: n.days.map((e) => ({
							analysis_date: e.analysis_date,
							epoch_length_seconds: e.epoch_length_seconds,
							timestamps: e.timestamps
						}))
					}, i = r, c = await i.getComputeIdentity(), u = await $m({
						runtimeIdentity: c,
						difficultyRequestWireJson: Yf(n),
						signalsRequestWireJson: Qf(n),
						sourceContentHash: _?.sourceContentHash ?? null
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
					}), ...p], m = await Pm(e, u.generationKey, o) ?? await Pm(e, (await $m({
						runtimeIdentity: lh(c),
						difficultyRequestWireJson: u.difficultyRequestWireJson,
						difficultyRequestSha256: u.difficultyRequestSha256,
						signalsRequestWireJson: u.signalsRequestWireJson,
						signalsRequestSha256: u.signalsRequestSha256,
						sourceContentHash: u.sourceContentHash
					})).generationKey, o);
					if (m) F = {
						token: l,
						evidenceDb: o,
						coveredDates: [...new Set(t)].sort(),
						signalRequest: null == m.signalsByDate ? f : null,
						projectionInput: Ah(m),
						difficultyByDate: xh(m),
						signalsByDate: Th(m),
						computeIdentity: m.runtimeIdentity,
						projectionRevision: kh(m),
						evidence: Ih(m)
					};
					else {
						s?.throwIfAborted();
						const d = Eh(o, u.generationKey, s, () => r.computeFileDifficulty(f));
						j = d.release;
						const p = await d.run;
						if (s?.throwIfAborted(), !ch(c, await i.getComputeIdentity())) throw new Error("The local scoring runtime changed while difficulty was being computed. Re-run the calculation.");
						if (dh(p.byDate, n.days)) {
							const n = await async function(e) {
								try {
									(!Number.isInteger(e.fileId) || e.fileId <= 0) && rm();
									const t = await async function(e) {
										"sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || rm(), null !== e.sourceContentHash && om(e.sourceContentHash), pm(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || rm(), om(e.difficultyRequestSha256), om(e.signalsRequestSha256), await fm(e.difficultyRequestWireJson, e.difficultyRequestSha256), await fm(e.signalsRequestWireJson, e.signalsRequestSha256);
										const t = Tm(e.difficultyRequestWireJson, e.signalsRequestWireJson);
										om(e.generationKey);
										const { generationKey: n, ...a } = e;
										return await Mm(a) !== e.generationKey && rm(), t;
									}(e.identity), n = um(e.projectionInput), a = um(e.difficultyByDate), i = null == e.signalsByDate ? null : um(e.signalsByDate);
									Nm(t, n, a, i);
									const s = await dm(n), r = await dm(a), o = null === i ? null : await dm(i);
									Rm(s, e.expectedHashes?.projectionSha256), Rm(r, e.expectedHashes?.difficultyResultSha256), Rm(o, e.expectedHashes?.signalsResultSha256);
									const l = (/* @__PURE__ */ new Date()).toISOString(), c = e.createdAt ?? l, u = e.updatedAt ?? c;
									lm(c), lm(u), Date.parse(u) < Date.parse(c) && rm();
									const d = {
										fileId: e.fileId,
										generationKey: e.identity.generationKey,
										evidenceContractId: e.identity.evidenceContractId,
										difficultyMethodId: e.identity.difficultyMethodId,
										signalsMethodId: e.identity.signalsMethodId,
										requestContractId: e.identity.requestContractId,
										sourceContentHash: e.identity.sourceContentHash,
										runtimeIdentity: um(e.identity.runtimeIdentity),
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
									}, p = await zm(d);
									return Rm(p, e.expectedHashes?.recordSha256), {
										...d,
										recordSha256: p
									};
								} catch (yd) {
									if (yd instanceof am) throw yd;
									return rm();
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
							const i = await async function(e, t = W(), n = "fresh", a) {
								"fresh" !== n && "restore" !== n && rm();
								const i = await S.waitFor(Em(e));
								return ia([t.files, t.complexityEvidence], async () => {
									const e = await t.files.get(i.fileId);
									Cm(i, e);
									const a = await t.complexityEvidence.where("[fileId+generationKey]").equals([i.fileId, i.generationKey]).first();
									if (a) {
										const e = await S.waitFor(Em(a));
										if (r = i, (s = e).generationKey !== r.generationKey || s.projectionSha256 !== r.projectionSha256 || s.difficultyResultSha256 !== r.difficultyResultSha256 || s.difficultyRequestSha256 !== r.difficultyRequestSha256 || s.signalsRequestSha256 !== r.signalsRequestSha256 || s.sourceContentHash !== r.sourceContentHash) throw new im();
										if (null !== e.signalsResultSha256 && null !== i.signalsResultSha256 && e.signalsResultSha256 !== i.signalsResultSha256) throw new im();
										if (null === e.signalsByDate && null !== i.signalsByDate) {
											const n = new Date(Math.max(Date.now(), Date.parse(e.createdAt))).toISOString(), a = {
												...e,
												signalsByDate: i.signalsByDate,
												signalsResultSha256: i.signalsResultSha256,
												updatedAt: n
											}, s = await S.waitFor(zm(a)), r = {
												...a,
												recordSha256: s
											};
											return await t.complexityEvidence.put(r), await Om(r, "signals_enriched", 0), {
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
										if (a.length > 5) throw new am(!0);
										if (a.length < 5) return;
										if ("fresh" === n) return;
										a.sort((e, t) => {
											const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
											return 0 !== n ? n : (t.id ?? 0) - (e.id ?? 0);
										});
										const i = a[a.length - 1];
										if (i && Date.parse(t.createdAt) < Date.parse(i.createdAt)) throw new sm();
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
									return await Om(c, "inserted", u), {
										record: c,
										disposition: "inserted",
										evicted: u
									};
								}, t, a);
							}(n, o, "fresh", s);
							"inserted" === i.disposition && await async function(e, t, n) {
								try {
									await We.recordWorkspaceDurably(Q.SYSTEM_RECALCULATION, {
										subject: "night_complexity_generation",
										generationKey: e.generationKey,
										difficultyResultSha256: e.difficultyResultSha256,
										dateCount: Object.keys(e.difficultyByDate).length
									}, t, n) || console.warn("[local-data-source] Complexity evidence was saved, but its audit event is still pending.");
								} catch {
									console.warn("[local-data-source] Complexity evidence was saved, but its audit event could not be recorded.");
								}
							}(i.record, o, s), F = {
								token: l,
								evidenceDb: o,
								coveredDates: [...new Set(t)].sort(),
								signalRequest: null == i.record.signalsByDate ? f : null,
								projectionInput: Ah(i.record),
								difficultyByDate: xh(i.record),
								signalsByDate: Th(i.record),
								computeIdentity: i.record.runtimeIdentity,
								projectionRevision: kh(i.record),
								evidence: Ih(i.record)
							};
						} else console.warn("[local-data-source] Night difficulty is unavailable from the current local scoring runtime."), F = {
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
				} else F = {
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
			} catch (yd) {
				s?.throwIfAborted();
				const n = this.latestComplexityTokenByFile.get(e);
				if (this.disposed || null == n || n === l) throw yd;
				F = await this.awaitNewerComplexitySnapshot(e, l);
			} finally {
				j?.();
			}
			s?.throwIfAborted(), c(F), this.latestComplexityTokenByFile.get(e) === l && (s?.throwIfAborted(), this.publishComplexitySnapshot(e, F, s), this.complexityFailureByFile.delete(e));
			let B = F;
			if (this.latestComplexityTokenByFile.get(e) !== l) {
				const t = this.complexityGenerationByFile.get(e);
				if (t && t.token !== l) B = await t.promise;
				else {
					const t = this.complexityFailureByFile.get(e);
					if (void 0 !== t && t.token === this.latestComplexityTokenByFile.get(e)) throw t.error;
					const n = this.complexitySnapshotByFile.get(e);
					if (!n) throw new Error("A newer local difficulty generation replaced this result.");
					B = n;
				}
			}
			const L = B.difficultyByDate;
			if (B === F && (0 === z.length || null !== F.computeIdentity)) {
				const n = [...f.values()].map(Ce), a = 0 === z.length && n.some((e) => e.ggir) && n.every((e) => e.ggir || 0 === e.timestamps.length), i = {
					nightStartHour: k,
					nightEndHour: I,
					byDate: Object.fromEntries(t.map((e) => [e, L[e]?.difficulty ?? null])),
					sourceRevision: String((F.computeIdentity ?? await r.getComputeIdentity()).sourceRevision),
					...a ? { notRankableReason: "GGIR nights are not ranked by difficulty: the difficulty core reads 60 s activity counts and sleep scores, and a GGIR folder holds 5 s ENMO, anglez and SIB only." } : {}
				};
				if (JSON.stringify(_?.nightDifficulty) !== JSON.stringify(i)) try {
					s?.throwIfAborted(), await D(o, [o.files], () => o.files.update(e, { nightDifficulty: i }), s);
					for (const t of Rh) t(e, o);
					s?.throwIfAborted();
				} catch {
					s?.throwIfAborted(), console.warn("[local-data-source] Stored night difficulty could not be written.");
				}
			}
			return M((e) => L[e]?.difficulty ?? null);
		} catch (yd) {
			throw this.latestComplexityTokenByFile.get(e) === l && this.complexityFailureByFile.set(e, {
				token: l,
				error: /* @__PURE__ */ new Error("The newest local difficulty generation failed.")
			}), u(yd), yd;
		} finally {
			this.complexityGenerationByFile.get(e)?.token === l && this.complexityGenerationByFile.delete(e);
		}
	}
	async loadAdjacentMarkers(e, t, n) {
		const a = (await Ye(e))?.availableDates?.slice().sort() ?? [], i = a.indexOf(t);
		if (i < 0) return null;
		const s = i > 0 ? a[i - 1] ?? null : null, r = i < a.length - 1 ? a[i + 1] ?? null : null, [o, l] = await Promise.all([s ? nt(e, s, n) : null, r ? nt(e, r, n) : null]), c = (e) => (e?.sleepMarkers ?? []).map((e) => ({
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
		const n = W(), a = await Ft(e, t, void 0, n);
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
		const i = await this.auditRecordsForView(t, n), s = (a ? i.filter((e) => e.username === a) : i).filter((e) => "number" == typeof e.id), r = e("audit_log_csv", "local"), o = await ze(s), l = function(e) {
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
				F(String(u.id)),
				F((/* @__PURE__ */ new Date(1e3 * u.clientTimestamp)).toISOString()),
				F(u.action),
				F(Qm(null === t ? "" : eh(t, u.action), u.action, t, l)),
				F(u.username),
				F(String(u.fileId)),
				F(u.analysisDate ?? ""),
				F(null == u.studyId ? "" : String(u.studyId)),
				F(u.sessionId),
				F(String(u.sequence)),
				F(u.eventHash ?? ""),
				F(u.previousHash ?? ""),
				F(null === t ? "" : JSON.stringify(t)),
				F(n?.basis ?? "unanchored"),
				F(void 0 === n ? "" : ht(n.state)),
				F(void 0 === n || "unanchored" === n.basis ? "" : JSON.stringify(n.state))
			].join(","));
		}
		return new Blob([`${c.join("\n")}\n`], { type: "text/csv;charset=utf-8" });
	}
	async verifyAuditChain(e, n) {
		const a = await on();
		return {
			...await vn(a),
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
				const l = A(), c = await l.getComputeIdentity();
				if (!ch(i, c)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), o();
				const u = await l.computeFileSignals(a), d = await l.getComputeIdentity();
				if (!ch(i, d)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), o();
				if (!dh(u.byDate, JSON.parse(a[0]).days)) throw new Error("The local scoring runtime returned incomplete night-signal evidence.");
				if (this.disposed) throw new Error("The local workspace changed before night-signal evidence could be saved.");
				const p = n();
				if (!p) return null;
				if (p.token !== t.token) return p;
				if (p.signalsByDate) return p;
				const f = await async function(e, t = W(), n) {
					(!Number.isInteger(e.fileId) || e.fileId <= 0) && rm(), om(e.generationKey);
					const a = um(e.signalsByDate), i = await dm(a);
					return Rm(i, e.signalsResultSha256), ia([t.files, t.complexityEvidence], async () => {
						const n = await t.complexityEvidence.where("[fileId+generationKey]").equals([e.fileId, e.generationKey]).first();
						if (!n) throw new am();
						const s = await S.waitFor(Em(n));
						if (Cm(s, await t.files.get(s.fileId)), null !== s.signalsResultSha256) {
							if (s.signalsResultSha256 !== i) throw new im();
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
						}, l = await S.waitFor(zm(o)), c = await S.waitFor(Dm({
							...o,
							recordSha256: l
						}));
						return await t.complexityEvidence.put(c), await Om(c, "signals_enriched", 0), {
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
				const h = {
					...m,
					signalRequest: null,
					projectionInput: Ah(f.record),
					difficultyByDate: xh(f.record),
					signalsByDate: Th(f.record),
					computeIdentity: f.record.runtimeIdentity,
					projectionRevision: kh(f.record),
					evidence: Ih(f.record)
				};
				return this.publishComplexitySnapshot(e, h), h;
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
				const a = await Ye(e), i = a?.availableDates?.includes(t) ? [...new Set(a.availableDates)].sort() : [t];
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
			plot_intervals: rh(r ?? void 0, s ?? void 0, t, a?.projectionRevision ?? void 0)
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
			!1 !== a.datesStatus && wo(e, ["dates-status", t]), wo(e, ["local-dates-status", t]), !1 !== a.fileQuality && wo(e, ["file-quality"]), wo(e, ["analysis-summary"]), wo(e, ["adjacent-markers"]), wo(e, [
				"audit-log",
				t,
				n
			]), wo(e, ["actogram-markers", t]), wo(e, [
				"night-stored-variant",
				t,
				n
			]), wo(e, ["local-export-file-stats"]), wo(e, ["local-export-circadian-coverage"]), function() {
				ho += 1;
				for (const e of go) e();
			}();
		})(a, e, t, {
			datesStatus: !p,
			fileQuality: !1
		});
		const f = c ?? W();
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
		const l = r ?? W(), c = Fm(l, {
			username: n || "anonymous",
			studyId: b().scoring().selectedStudyId
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
			wo(e, o);
		});
	}
	async patchDateStatus(e, t, n) {
		const { fileId: a, date: i, username: s, workspaceScope: r } = t;
		for (const o of e.getQueryCache().findAll({ queryKey: ["dates-status", a] })) {
			const t = o.queryKey, l = o.state.data;
			if (t[2] === this.sourceKey && (t[3] !== r || t[4] !== (s || "anonymous"))) continue;
			if (o.state.isInvalidated) continue;
			if (!o.isActive()) {
				wo(e, t);
				continue;
			}
			const c = t[4], u = o.state.dataUpdatedAt;
			try {
				if (!l || t[2] !== this.sourceKey || "string" != typeof c) throw new Error("not a local status list");
				const s = await Mh(a, i, c, n);
				if (o.state.dataUpdatedAt !== u) continue;
				e.setQueryData(t, (e) => e?.map((e) => e.date === i ? {
					...e,
					...s
				} : e));
			} catch {
				wo(e, t);
			}
		}
	}
	async ingestFile(e, t, n) {
		const { processLocalFile: a } = await import("./local-processing-G4H2GC4C.js"), i = b().scoring(), s = this.operationProcessingOptions, r = s?.devicePreset ?? i.devicePreset, o = s?.skipRows ?? i.skipRows, l = s?.choiAxis ?? i.choiAxis, c = s?.columnMapping ?? i.columnMapping, u = s?.countEpochSeconds ?? (30 === i.epochLengthSeconds ? 30 : 60);
		e.name.toLowerCase().endsWith(".csv") && r && "actigraph" !== r && "geneactiv" !== r && nh(r, c);
		const d = W(), p = await a(e, r ?? "actigraph", o ?? 10, t, l ?? "vector_magnitude", c, n, {
			...s ? {} : Zs(i),
			countEpochSeconds: u,
			sleepPeriodDetectionConfig: $n(i.sleepPeriodDetection),
			...this.operationProcessingOptions
		});
		return p.alreadyImported || (Ch(p.fileId, d, void 0, n), function(e, t, n) {
			J({
				kind: L.PHYSICAL_ACTIVITY,
				key: `${L.PHYSICAL_ACTIVITY}:${String(e)}`,
				label: "Store activity answers",
				workspaceId: t.name,
				signal: n,
				rerun: !0,
				run: (n) => $e(async (a) => {
					const [{ computeLocalPhysicalActivityAnalysis: i, physicalActivityStoreAnalysisOptions: s }, { createPhysicalActivityWorkspaceRepository: r, loadPhysicalActivityWorkspaceDays: o }] = await Promise.all([import("./local-physical-activity-analysis-COtzVBBA.js"), import("./physical-activity-workspace-days-B8_8O3ch.js")]);
					if (n.signal.throwIfAborted(), n.progress(0, 2), W() !== t) return;
					const l = s(b().scoring());
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
		return (t ? await Cn(e, t) : await Be(e)).map(sh);
	}
};
function Gh(e, t, n, a) {
	const i = (/* @__PURE__ */ new Date()).toISOString(), s = Zn(n, t), r = (e, t = 0) => "number" == typeof e && Number.isFinite(e) ? e : t;
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
const Uh = "Re-import this file to compute GGIR's invalid mask.", Zh = "Hip HDCZA needs the longitudinal angle (anglex or angley), which this recording lacks on GGIR's grid; no night was placed.", Hh = "nonwear_detector_unavailable";
function qh(e) {
	return e.isInvalidNight || e.sleepMarkers.some((e) => function(e, t = !1) {
		return "auto" !== e.source || function(e, t = !1) {
			if (!0 === e.edited || t) return !0;
			const n = e.placement;
			return mo(e.onsetTimestamp, n?.onset_timestamp) || mo(e.offsetTimestamp, n?.offset_timestamp);
		}(e, t);
	}(e));
}
async function Wh(e, t, n, a) {
	return e.nightIntervalOverlap(t, n, Float64Array.from(a, ([e]) => e), Float64Array.from(a, ([, e]) => e), Float64Array.from(a, ([, , e]) => void 0 !== e && void 0 === e.unavailable ? e.weight : 0));
}
function Vh(e, t) {
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
async function Jh(e, t, n, a) {
	const i = a.map(async ([, , a]) => {
		if (!a?.memberFlags || !a.timestamps) return [];
		const { memberFlags: i } = a, s = await e.epochsOverlapping(Float64Array.from(a.timestamps).subarray(0, i.length), 60, t, n);
		return s ? e.nonwearContributors([...i], Qt(a.detectors), s[0], s[1]) : [];
	});
	return Qt([...new Set((await Promise.all(i)).flat())]);
}
async function Kh(e, t, n, a, i, s, r) {
	const o = _a(t, n), l = Object.fromEntries(Object.entries(o).map(([e, t]) => [e, new Uint8Array(t)])), c = await qe(e, { day: t }, r), u = await fa(i, l, {
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
async function Yh(e, t, n = [], a = [], i = {}, s = null, r = A()) {
	const o = [], l = n.map(([e, t]) => ({
		startTimestamp: e,
		endTimestamp: t
	}));
	for (const [c, u] of Object.entries(e)) {
		const e = t[c]?.timestamps;
		e && 0 !== e.length && o.push(...await Kh(e, {
			nonwearResults: u.nonwear.buffer,
			nonwearResultsChoi2011: u.nonwearChoi2011?.buffer ?? null,
			detachNonwear: u.detachNonwear?.buffer ?? null,
			...i[c]
		}, "", l, a, s, r));
	}
	return o;
}
async function Xh(e, t, n, a = Ze, i) {
	return Le((i) => {
		if (!e) return [];
		const s = [];
		for (const { start: r, end: o } of Ie(e)) {
			if (!r || !o) continue;
			const e = i.resolveSpan(r, o, t, Ve.daytime, a);
			e && s.push({
				markerType: re.NAP,
				markerIndex: n + s.length + 1,
				onsetTimestamp: e[0],
				offsetTimestamp: e[1]
			});
		}
		return s;
	}, new Kt(i));
}
function Qh(e) {
	const t = e instanceof Error ? e.message : "";
	return t.startsWith("runGgirPart3:") ? t : t.includes("timed out") ? `it timed out after ${String(M / 6e4)} minutes` : t.includes("is not a function") ? "this build's actours WASM has no runGgirPart3 export" : "the actours WASM runtime failed (out of memory or a Rust panic)";
}
async function eg(e, t, n, a = [], i = /* @__PURE__ */ new Map(), s, r, o, l = "wrist", c = W(), u, d, p, f, m, h) {
	const y = c, w = r?.ggirConfig ?? await Gr(y), v = t.length;
	if (0 === v) return null;
	const S = i.values().next().value;
	S && ye(e, S.importMappingProvenance);
	const k = d ?? A(), x = p ?? (() => I(k)), T = await So(l, s?.variant, k), N = T.variant, $ = T.sensorLocation, z = {
		...o ?? {},
		haspt_variant: N,
		hdcza_proposal_revision: 6,
		ggir_config_sha256: w.sha256
	}, R = r?.angley5s, D = r?.anglex5s, E = R && R.length === v ? R : void 0, C = D && D.length === v ? D : void 0, P = r?.invalid5s?.length === v ? r.invalid5s : void 0, F = void 0 !== m && void 0 !== P;
	if (void 0 === P) return Uh;
	const j = "hip" === $ && !E && !C;
	if (j && (console.warn("[local-processing] Hip HDCZA was skipped because no aligned longitudinal axis was available."), !F)) return Zh;
	let B = !1;
	const L = r?.dstRuns ?? [], G = P, U = r?.activity5s?.length === v ? r.activity5s : void 0;
	g(u, "before local HASPT placement");
	const Z = await q(k, (e) => e.runGgirPart3({
		anglez: t,
		ggirConfigCsv: w.csvText,
		hasibCounts: Vt(w.csvText, r?.zeroCrossings5s),
		...C ? { anglex: C } : {},
		...E ? { angley: E } : {},
		...U ? { enmo: U } : {},
		invalid: G,
		startTsEpochSec: n,
		hasptAlgo: N,
		...void 0 !== s?.config ? { hasptConfig: s.config } : {},
		..."hip" !== $ || C && E ? {} : { longitudinalAxis: E ? 2 : 1 },
		...r?.timezone ? { timezone: r.timezone } : {}
	}), {
		ms: M,
		label: `local ${N} placement`,
		signal: u,
		cancel: x
	}).then((e) => ({
		result: e,
		failure: null
	}), (e) => (_(e, u, `local ${N} placement`), console.warn("[local-processing] GGIR Part 3 failed for this recording."), {
		result: null,
		failure: Qh(e)
	}));
	if (Z.result && F && m(Z.result.part3Sib5s), j) return Zh;
	if (!Z.result) return `GGIR Part 3 (${N}) failed: ${Z.failure}`;
	const H = Z.result.part3SptNights, V = await k.ggirIndicesToWallClockMs(Uint32Array.from(H.flatMap((e) => [e.onsetIdx, e.wakeIdx])), 1e3 * n, [...L], r?.wallClockMs ? Float64Array.from(r.wallClockMs) : void 0), J = H.map((e, t) => ({
		onsetTimestamp: V[2 * t] / 1e3,
		offsetTimestamp: V[2 * t + 1] / 1e3,
		analysisDate: e.analysisDate
	}));
	for (const { onsetTimestamp: I, offsetTimestamp: A, analysisDate: M } of J) {
		g(u, "before local HASPT marker placement");
		const t = await nt(e, M, at, O.VAN_HEES_2015, null, y);
		if (t && qh(t)) continue;
		const n = await Wh(k, I, A, a), s = Vh(n.seconds, a), r = 0 === s.available.length && 0 === s.dropped.length ? z : {
			...z,
			nonwear_detectors_available: s.available,
			nonwear_detectors_dropped: s.dropped.map(({ detector: e, reason: t }) => ({
				detector: e,
				reason: t
			}))
		}, c = pa(s.dropped, "ggir"), d = (e) => [e, ...c].join("; "), p = n.weightedFraction, m = p > 0 && s.available.length > 1 ? await Jh(k, I, A, a) : null, w = await Xh(i.get(M) ?? null, M, 1, Qe(e), k), v = Bn(null, l), S = [{
			markerType: re.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: I,
			offsetTimestamp: A
		}, ...w].map((e) => ({
			...e,
			source: "auto",
			settingsHash: v
		}));
		g(u, "before local HASPT marker persistence"), await b().nights.writeHeadless({
			signal: u,
			fileId: e,
			date: M,
			expected: Gn(t),
			username: "auto_score",
			sleepMarkers: S,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: d(`${N} SPT: ${ee(I)} → ${ee(A)}` + (w.length > 0 ? `; ${w.length} diary nap(s)` : "") + (p > 0 ? `; selected-detector nonwear overlap ${Math.round(100 * p)}%` : "") + (m ? ` from ${ya(m, s.available.length)}` : "")),
			algorithm: O.VAN_HEES_2015,
			sleepPeriodDetectionConfig: r
		}, y, {
			...f ? { binding: f } : {},
			events: () => f ? [{
				action: "auto_score_applied",
				payload: Jn({
					algorithm: O.VAN_HEES_2015,
					sleepPeriodDetection: o ?? null,
					sleepCount: 1,
					napCount: w.length,
					markers: S
				})
			}] : []
		}).then(() => !0, (e) => (_(e, u, "local HASPT marker persistence"), console.warn("[local-processing] HDCZA marker persistence failed."), B = !0, !1)) && h?.(M);
	}
	return B ? "one or more auto-marker writes failed" : null;
}
const tg = /* @__PURE__ */ new Set([
	2,
	5,
	6
]);
function ng(e) {
	return !1 !== e.imputeTimegaps && (null == e.dataFormat || tg.has(e.dataFormat)) && (null == e.configtz || e.configtz === e.desiredtz);
}
function ag(e) {
	return `GGIR zone ${e} from the GT3X info.txt TimeZone: the app's assumption, since GGIR takes desiredtz and configtz from its own settings`;
}
async function ig(e, t, n, a, i) {
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
var sg = class extends Error {
	name = "GgirImportRefusal";
	category;
	constructor(e) {
		super(wt(e)), this.category = e;
	}
};
function rg(e, t) {
	const n = gn(e);
	if (n && (n.notRead && n.notRead.length > 0 && t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR output",
		warning: n.notRead.map((e) => `not read: ${e.path}: ${e.reason}.`).join(" ")
	}), n.refusedNotRead)) throw new sg("ggir-not-read");
}
function og(e, t) {
	const { username: n, selectedStudyId: a } = b().scoring();
	return We.captureWorkspaceBinding(e, {
		signal: t,
		username: n,
		studyId: a
	});
}
const lg = /* @__PURE__ */ new WeakMap();
async function cg(e, t, n, a) {
	const i = e.timestampsMs.length;
	if (0 === i || e.enmo5s.length !== i || e.anglez5s.length !== i) throw new Error("GGIR meta RData did not contain aligned metashort timestamp, ENMO, and anglez columns.");
	const s = {
		desiredtz: e.desiredtz ?? void 0,
		dataFormat: e.inspection?.dformc ?? void 0,
		...a ? Tt(await n.ggirConfigValues(a)) : {}
	}, { runs: r, storedMs: o, steps: l } = await n.wallClockDstPlaceholders(e.timestampsMs, 1e3 * e.epochSeconds, ng(s)), c = o.filter((e) => !Number.isNaN(e)), u = (e.timestampsMs[0] ?? 0) / 1e3, d = t?.sources.ms2 ? t.nonwear : e.nonwearShort, p = {
		...d.length === i ? { nonwear: d } : {},
		...e.invalidShort.length === e.timestampsMs.length ? { invalid: e.invalidShort } : {}
	}, f = t ? t.sources.ms3 ? t.sib : void 0 : e.part3Sib5s?.length === i ? e.part3Sib5s : void 0, m = await hs(n, o, e.enmo5s, e.anglez5s, {
		anglex: e.anglex5s ?? void 0,
		angley: e.angley5s ?? void 0,
		...p,
		...t?.sources.ms2 ? { invalid: t.invalid } : {},
		...f ? { sib: f } : {}
	});
	if (t && (Xn(t.sleepWindows), t.sources.ms3 && t.sib.length !== i || t.sources.ms2 && (t.invalid.length !== i || t.nonwear.length > 0 && t.nonwear.length !== i))) throw new Error("GGIR Parts 2–3 do not cover the same 5 s epochs as Part 1.");
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
const ug = /* @__PURE__ */ new WeakMap();
var dg = class extends Error {};
const pg = /* @__PURE__ */ new WeakMap();
async function fg(e, t, n, a = !0) {
	let i = pg.get(t);
	if (i || (i = /* @__PURE__ */ new Map(), pg.set(t, i)), i.has(e)) {
		const t = i.get(e);
		if (!(t instanceof dg)) return t;
		if (!a) throw t;
	}
	let s = ug.get(t);
	s || (s = /* @__PURE__ */ new Map(), ug.set(t, s));
	const r = s.get(e);
	if (r) return r;
	const o = (async () => {
		const a = await Ye(e, t);
		if (!Jt(a)) return null;
		if (0 === (await gt(e, t)).length) return null;
		const i = await t.ggirResultsBundles.get(e);
		if (!i) return null;
		const s = Z(n);
		if (a?.ggirSavedNonwearSettled) return ci(i.configCsv, s);
		const r = [...(await Ot(e, t)).values()].filter((e) => e.ggirTimestamps?.byteLength && e.unifiedNonwearMasks?.[ut.ggir_saved]?.byteLength !== e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), o = r.filter((e) => e.vanHeesNonwear?.byteLength === e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), l = r.filter((e) => !o.includes(e)), c = l.length ? await H(t, e) : null, u = c?.ms2 ? await s.reviewGgirResults({
			part1: new Uint8Array(c.part1),
			configCsv: c.configCsv,
			ms2: new Uint8Array(c.ms2),
			edits: [],
			crossCheck: !1
		}) : null, d = c && u?.nonwear.length ? (await cg(await s.readGgirMeta(new Uint8Array(c.part1), null, !0), u, s, c.configCsv)).ggirByDate : null, p = [...o.map((e) => ({
			date: e.date,
			unifiedNonwearMasks: {
				...e.unifiedNonwearMasks,
				[ut.ggir_saved]: e.vanHeesNonwear
			},
			vanHeesNonwear: null
		})), ...d ? l.map((e) => {
			const t = d.get(e.date), n = new Float64Array(e.ggirTimestamps);
			if (!t?.nonwear || t.timestamps.length !== n.length || !n.every((e, n) => e === t.timestamps[n])) throw new dg("Saved GGIR nonwear does not match the stored epoch grid.");
			return {
				date: e.date,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					[ut.ggir_saved]: new Uint8Array(t.nonwear).buffer
				},
				vanHeesNonwear: null
			};
		}) : []];
		return await D(t, [
			t.projectMeta,
			t.activityDays,
			t.physicalActivityFileSummaries,
			t.files
		], async () => {
			await Promise.all(p.map(({ date: a, ...i }) => De(e, a, i, t, n))), await t.files.update(e, { ggirSavedNonwearSettled: !0 });
		}, n), p.length, ci(i.configCsv, s);
	})().then((t) => (i.set(e, t), t)).catch((t) => {
		throw !n?.aborted && t instanceof dg && i.set(e, t), console.warn("[local-processing] Could not fill saved GGIR nonwear from retained ms2."), t;
	}).finally(() => {
		s.delete(e);
	});
	return s.set(e, o), o;
}
async function mg(e, t, n, a) {
	const i = a ?? await c(e, void 0, n), s = await Yt(i.fullHash, t) ?? await Sn(i.prefixHash, t, i.fullHash);
	return s?.id ? s : void 0;
}
const hg = [
	["ms2", "stockMs2"],
	["ms3", "stockMs3"],
	["ms4", "stockMs4"],
	["ms5", "stockMs5"]
];
async function gg(e, t, n) {
	const a = gn(t);
	if (!a) return null;
	const [i, ...s] = await Promise.all([a.configCsv.text(), ...hg.map(([e]) => a[e]?.arrayBuffer())]), r = await a.qwindowCsv?.text();
	return n.transaction("rw", [
		n.files,
		n.ggirResultsBundles,
		n.ggirResultsBlobs,
		n.ggirCorrectedValues
	], async () => {
		const [t, o] = await Promise.all([n.ggirResultsBlobs.get(e), n.ggirResultsBundles.get(e)]);
		return t && o ? o.configCsv === i && hg.every(([e, n], a) => ((e, t) => {
			if (void 0 === e || void 0 === t) return e === t;
			const n = new Uint8Array(e), a = new Uint8Array(t);
			return n.length === a.length && n.every((e, t) => e === a[t]);
		})(t[n] ?? t[e], s[a])) ? !a.resultsCsv || t.resultsCsv ? null : (await n.ggirResultsBundles.update(e, {
			resultsCsv: a.resultsCsv,
			...void 0 !== r && void 0 === t.qwindowCsv ? { qwindowCsv: r } : {}
		}), await n.ggirCorrectedValues.delete(e), await sn(n, [e]), "added") : "different_run" : null;
	});
}
const yg = {
	none: "File already imported",
	added: "File already imported; GGIR's results files added",
	different_run: "File already imported; this folder holds a different GGIR run of it, so the stored one was kept"
};
async function wg(e, t, n, a, i, s, r) {
	const o = lg.get(e);
	lg.delete(e);
	const u = i?.db ?? W(), d = a?.ggirConfig ?? await Gr(u), p = s ?? A(), f = i ?? {
		db: u,
		attemptId: X(),
		auditBinding: og(u, n),
		signal: n,
		recording: await Zr(e, n, p)
	};
	g(n, "processGgirMetaRDataFile"), rg(e, t);
	const m = r ?? (() => {
		I(p);
	});
	t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR meta RData..."
	});
	const { prefixHash: h, fullHash: y } = o?.value?.hashes ?? await c(e, (e) => {
		t?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, n), w = await mg(e, u, n, {
		prefixHash: h,
		fullHash: y
	});
	if (w?.id) {
		const n = await gg(w.id, e, u);
		t?.({
			phase: "complete",
			percent: 100,
			message: yg[n ?? "none"]
		});
		const a = w.availableDates;
		return await hn(e.name, u), {
			alreadyImported: !0,
			...n ? { ggirResultsFiles: n } : {},
			fileId: w.id,
			availableDates: a,
			sourceType: w.sourceType ?? te.GGIR_5S_UPLOAD
		};
	}
	const v = await Rn(e.name, u);
	if (v && "incomplete" !== v.ingestState) throw new sg($t);
	if (t?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing GGIR metashort and metalong..."
	}), g(n, "before reading GGIR RData"), o && "error" in o) throw o.error;
	const b = gn(e), S = o?.value?.input ?? (b ? await Hn(b) : null), k = o?.value || !S ? void 0 : await q(p, (e) => e.prepareGgirRecording(S), {
		ms: M,
		label: "prepareGgirRecording",
		signal: n,
		cancel: m
	}), x = k && S ? (T = S, null === (N = k.cleanedNightsCsv) ? T : {
		...T,
		cleanedNightsCsv: N
	}) : S;
	var T, N;
	const $ = o?.value || x ? void 0 : await e.arrayBuffer();
	g(n, "after reading GGIR RData");
	const z = o?.value?.meta ?? k?.meta ?? await q(p, (e) => e.readGgirMeta(l(new Uint8Array($), [$]), d.csvText, !1), {
		ms: 3e5,
		label: "readGgirMeta",
		signal: n,
		cancel: m
	}), R = function(e, t) {
		return t && !t.sources.ms4 && e?.notRead?.some((e) => /(?:^|\/)meta\/ms4\.out\//u.test(e.path)) ? {
			...t,
			importNotices: [...t.importNotices, Yn]
		} : t;
	}(b, o?.value?.review ?? k?.review ?? null), E = o?.value?.computed ?? await async function(e, t, n, a, i) {
		const s = gn(e)?.configCsv, { n: r, startSec: o, dstRuns: l, storedMs: c, clockSteps: u, wallClockMs: d, timegaps: p, ggirSib: f, ggirByDate: m } = await cg(t, n, a, await s?.text()), h = [...m.keys()].sort(), y = await Ns(m, a), w = (e) => a.nextDate(e), _ = n ? await async function(e, t, n, a) {
			const [i] = e, s = n && void 0 !== i ? await Array.from({ length: n.night - 1 }).reduce((e) => e.then((e) => void 0 === e ? void 0 : a(e)), Promise.resolve(i)) : void 0, r = void 0 !== n && void 0 !== s && s < n.nightDate;
			return [.../* @__PURE__ */ new Set([...e.slice(r ? 1 : 0), ...t])].sort();
		}(y, await async function(e, t, n) {
			const a = await Promise.all(e.map(async (e) => t.has(e) || t.has(await n(e) ?? "")));
			return e.filter((e, t) => a[t]);
		}(Kn(n), m, w), qn(n), w) : y;
		if (0 === h.length) throw new Error("GGIR meta RData did not contain any dated 5 s epochs.");
		const v = h.flatMap((e) => {
			const t = m.get(e);
			if (!t) return [];
			g(i, `saveActivityDay ${e}`);
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
				...t.nonwear ? n ? { unifiedNonwearMasks: { [ut.ggir_saved]: new Uint8Array(t.nonwear).buffer } } : { vanHeesNonwear: new Uint8Array(t.nonwear).buffer } : {},
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
			nightDates: _,
			ggirSib: f,
			dayRecords: v,
			facts: await Promise.all(v.map((e) => Ut(e, a))),
			signalDates: await Vr(0, v, a).catch((e) => (i?.throwIfAborted(), kn("warn", "GGIR circadian coverage store failed", Xt(e)), null)),
			placeholders: l.length > 0 ? await ig(a, 1e3 * o, l, {
				anglez: t.anglez5s,
				enmo: t.enmo5s
			}, d) : void 0,
			summaries: n ? await na(n, 0, i, a) : [],
			markers: n ? await Vn(n, u, a) : void 0
		};
	}(e, z, R, p, n), { n: C, startSec: O, dstRuns: P, storedMs: F, clockSteps: j, wallClockMs: B, timegaps: L, rdataConfig: G, availableDates: U, nightDates: Z, ggirSib: H } = E;
	t?.({
		phase: "storing",
		percent: 55,
		message: "Saving GGIR 5 s epochs..."
	});
	const V = await Xr(f, {
		filename: e.name,
		devicePreset: "ggir_5s_meta",
		epochLengthSeconds: z.epochSeconds,
		availableDates: Z,
		fileHash: h,
		sourceContentHash: y,
		sourceSizeBytes: e.size,
		source: "local",
		eventMarkerInstants: [],
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: te.GGIR_5S_UPLOAD,
		...O > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * O)).toISOString() } } : {},
		sourceProfileId: "actoglance.source.ggir_rdata.v1",
		...z.desiredtz ? { ggirTimezone: z.desiredtz } : {},
		...P.length + j.length > 0 ? { ggirClockBasis: (J = L, K = null != G, ng(J) ? `GGIR's imputed fall-back hour left out (${K ? "config.csv: imputeTimegaps TRUE, configtz = desiredtz" : "no config.csv, so GGIR's defaults are assumed"})` : `GGIR's repeated fall-back hour kept as recorded data (${!1 === J.imputeTimegaps ? "imputeTimegaps = FALSE" : null == J.dataFormat || tg.has(J.dataFormat) ? `configtz ${J.configtz ?? ""} differs from desiredtz ${J.desiredtz ?? ""}` : `GGIR does not gap-impute data format ${String(J.dataFormat)}`})`) } : {},
		...j.length > 0 ? { ggirClockSteps: j } : {},
		...P.length > 0 ? { ggirDstPlaceholders: E.placeholders } : {}
	}, p);
	var J, K;
	if ("already_complete" === V.kind) {
		const t = V.record.id;
		if (null == t) throw new Error("Completed local import identity is invalid.");
		const n = await gg(t, e, u);
		return await hn(e.name, u), {
			alreadyImported: !0,
			...n ? { ggirResultsFiles: n } : {},
			fileId: t,
			availableDates: V.record.availableDates,
			sourceType: V.record.sourceType ?? te.GGIR_5S_UPLOAD
		};
	}
	const Y = V.guard.fileId;
	let Q = null, ee = !1;
	const ne = !R && !H, ae = await b?.qwindowCsv?.text();
	if (R && x) try {
		const t = x.configCsv ? await _e(x.configCsv, p) : void 0;
		if (await Qr(f), await Fn(E.summaries.map((e) => ({
			...e,
			fileId: Y
		})), u, n), await D(u, [u.files, u.ggirResultsBundles], async () => {
			await u.ggirResultsBundles.put(Qn(Y, b?.recordingFile ?? e.name, x, R, {
				part2Reports: b?.part2Reports,
				personReports: b?.personReports,
				qwindowCsv: ae,
				resultsCsv: b?.resultsCsv
			})), await u.files.update(Y, {
				ggirBundleRevision: crypto.randomUUID(),
				ggirSavedNonwearSettled: !0,
				...t ? { ggirNonwearDetector: t } : {}
			});
		}, n), !await aa(Y, R, co(a, f.recording), u, !0, j, n, E.markers)) throw new Error("GGIR results markers could not be saved.");
	} catch (me) {
		throw await to(f), me;
	}
	const ie = z.invalidShort.length === C ? z.invalidShort : null, se = R ? null : await q(p, (e) => e.runGgirFromEpoch({
		source: "ggir_part1_rdata",
		invalidMask: ie ? "ggir_part2" : "none"
	}, z.anglez5s, z.enmo5s, O, ie ?? new Uint8Array(C), z.desiredtz ?? void 0, d.csvText).catch((e) => (_(e, n, "runGgirFromEpoch (GGIR RData)"), kn("warn", "GGIR epoch analysis failed", Xt(e)), ee = !0, null)), {
		ms: M,
		label: "runGgirFromEpoch (GGIR RData)",
		signal: n,
		cancel: m
	});
	if (se?.days?.length) {
		const e = Gh(se.days, Y, void 0, d);
		await Qr(f), await Fn(e, u, n).catch((e) => {
			kn("warn", "GGIR daily summary store failed", Xt(e)), ee = !0;
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
	}(j.length > 0 ? F : z.timestampsMs, z.nonwearShort), oe = new Map((R ? [] : await pt(Y, u)).map((e) => [e.analysisDate, e])), le = z.anglez5sImputed?.length === C ? z.anglez5sImputed : z.anglez5s, ce = z.enmo5sImputed?.length === C ? z.enmo5sImputed : z.enmo5s;
	Q = R ? Q : await eg(Y, le, O, re, oe, a?.hasptVariant, {
		activity5s: ce,
		...ie ? { invalid5s: ie } : {},
		dstRuns: P,
		wallClockMs: B,
		...z.desiredtz ? { timezone: z.desiredtz } : {}
	}, oa(a?.sleepPeriodDetectionConfig, ga), co(a, f.recording), u, n, p, m, f.auditBinding);
	const ue = E.dayRecords.map((e) => ({
		...e,
		fileId: Y
	}));
	let de = !1;
	await Qr(f);
	const pe = (await Ae(ue, u, E.facts, n).catch((e) => (kn("warn", "GGIR activity day store failed", Xt(e)), de = !0, []))).length;
	if (!de && E.signalDates && await He(Y, U, E.signalDates, u, n).catch((e) => {
		n?.throwIfAborted(), kn("warn", "GGIR circadian coverage store failed", Xt(e));
	}), de || pe !== U.length || 0 === pe) throw await to(f), /* @__PURE__ */ new Error("Could not save any GGIR RData epochs — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	g(n, "before completing GGIR RData ingest"), await eo(f);
	const fe = [
		...R?.configWarnings ?? [],
		...R?.importNotices ?? [],
		R?.sources.ms4 && Wn(R),
		b && !b.resultsCsv && "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.",
		de && "One or more days of GGIR RData epochs could not be saved.",
		Q && (R ? "GGIR results markers could not be saved." : "Sleep window detection (HDCZA) could not place auto-markers."),
		ee && (R ? "GGIR source summaries could not be saved." : "GGIR daily summaries could not be computed or saved for this GGIR RData file."),
		ne && "GGIR HASIB sleep/wake flags could not be computed."
	].filter(Boolean).join(" ");
	return t?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete",
		...fe ? { warning: fe } : {}
	}), {
		fileId: Y,
		availableDates: Z,
		sourceType: te.GGIR_5S_UPLOAD,
		...R ? { ggir: {
			...(await import("./ggir-results-import-TRmiz9u_.js").then((e) => e.p)).ggirImportCounts(R, ea(b?.part2Reports, R, b?.recordingFile ?? e.name)),
			bodySite: (await Ye(Y, u))?.recording?.bodySite
		} } : {}
	};
}
async function _g(e, t, n, a, i, s, r) {
	const o = s?.db ?? W(), l = r ?? Z(i), u = s ?? {
		db: o,
		attemptId: X(),
		auditBinding: og(o, i),
		signal: i,
		recording: await Zr(e, i, l)
	};
	g(i, "processMappedMimsCsvFile"), a?.({
		phase: "reading",
		percent: 0,
		message: "Reading mapped MIMS CSV..."
	});
	const { prefixHash: d, fullHash: p } = await c(e, (e) => {
		a?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, i), f = await mg(e, o, i, {
		prefixHash: d,
		fullHash: p
	});
	if (f?.id) {
		a?.({
			phase: "complete",
			percent: 100,
			message: "File already imported"
		});
		const e = f.availableDates;
		return {
			alreadyImported: !0,
			fileId: f.id,
			availableDates: e,
			sourceType: f.sourceType ?? te.EPOCHS_60S
		};
	}
	const m = await Rn(e.name, o);
	if (m && "incomplete" !== m.ingestState) throw new tn();
	a?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing mapped MIMS columns..."
	}), g(i, "before reading mapped MIMS CSV");
	const h = await async function(e, t, n, a) {
		const i = U(await e.text()), s = R(i);
		if (s.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
		const r = s.records, o = r[t]?.text;
		if (!o) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
		const l = K(o), c = G(o, l), u = es(n, c);
		if (u.length > 0) throw new Error(ji(u));
		const d = $s(c, n.datetime_column), p = $s(c, n.date_column), f = $s(c, n.time_column), m = $s(c, n.mims_unit_column), h = $s(c, n.mims_unit_x_column), g = $s(c, n.mims_unit_y_column), y = $s(c, n.mims_unit_z_column), w = [], _ = [], v = [], b = [], S = [], k = [];
		for (let A = t + 2; A <= r.length; A++) {
			const e = r[A - 1];
			if (!e?.text.trim()) continue;
			const t = G(e.text, l);
			k.push({
				sourceRow: e.sourceRow,
				row: t,
				label: Os(t, d, p, f)
			});
		}
		const I = await (a ?? A()).sourceLabelsWallClockMs(k.map(({ label: e }) => e)), x = k.findIndex((e, t) => !Number.isFinite(I[t] ?? NaN));
		if (x >= 0) throw new Error(`Could not parse timestamp on row ${String(k[x].sourceRow)} of the mapped MIMS CSV.`);
		for (const [A, { row: T }] of k.entries()) w.push(I[A]), _.push(Ps(T, m)), v.push(Ps(T, h)), b.push(Ps(T, g)), S.push(Ps(T, y));
		if (0 === w.length) throw new Error("The mapped MIMS CSV did not contain any data rows.");
		return {
			timestampsMs: new Float64Array(w),
			mimsUnit: null === m ? /* @__PURE__ */ new Float64Array() : new Float64Array(_),
			mimsUnitX: null === h ? /* @__PURE__ */ new Float64Array() : new Float64Array(v),
			mimsUnitY: null === g ? /* @__PURE__ */ new Float64Array() : new Float64Array(b),
			mimsUnitZ: null === y ? /* @__PURE__ */ new Float64Array() : new Float64Array(S)
		};
	}(e, t, n, l);
	g(i, "after reading mapped MIMS CSV");
	const y = te.EPOCHS_60S, w = await async function(e, t) {
		const n = /* @__PURE__ */ new Map(), a = t.timestampsMs.length, i = Fs(t.mimsUnit, a), s = Fs(t.mimsUnitX, a), r = Fs(t.mimsUnitY, a), o = Fs(t.mimsUnitZ, a), l = Float64Array.from(t.timestampsMs, (e) => e / 1e3);
		for (const [c, u] of await cs(e, l)) n.set(c, {
			timestamps: us(l, u, 0),
			...i ? { mimsUnit: us(i, u, NaN) } : {},
			...s ? { mimsUnitX: us(s, u, NaN) } : {},
			...r ? { mimsUnitY: us(r, u, NaN) } : {},
			...o ? { mimsUnitZ: us(o, u, NaN) } : {}
		});
		return n;
	}(l, h), _ = [...w.keys()].sort(), v = await Ns(w, l);
	a?.({
		phase: "storing",
		percent: 55,
		message: "Saving mapped MIMS epochs..."
	});
	const b = await Xr(u, {
		filename: e.name,
		devicePreset: "mims_metrics",
		epochLengthSeconds: 60,
		availableDates: v,
		fileHash: d,
		sourceContentHash: p,
		sourceSizeBytes: e.size,
		source: "local",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: y,
		...(h.timestampsMs[0] ?? 0) > 0 ? { recording: { effectiveTime: new Date(h.timestampsMs[0] ?? 0).toISOString() } } : {}
	}, l);
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
	for (const c of _) {
		const e = w.get(c);
		if (!e) continue;
		g(i, `saveActivityDay ${c}`);
		const t = /* @__PURE__ */ new Float64Array();
		await Qr(u);
		const n = {
			fileId: S,
			date: c,
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
		await rt(n, o, i).then(() => !0).catch((e) => (kn("warn", "MIMS activity day store failed", Xt(e)), k = !0, !1)) && (I += 1, await ao(S, [n], o, l, i));
	}
	if (k || I !== _.length || 0 === I) throw await to(u), /* @__PURE__ */ new Error("Could not save any mapped MIMS data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return g(i, "before completing mapped MIMS ingest"), await eo(u), a?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete"
	}), {
		fileId: S,
		availableDates: v,
		sourceType: y
	};
}
function vg(e) {
	const t = e.trim();
	if (!/^\d{4}-\d{2}-\d{2}/.test(t)) return null;
	const n = t.includes("	") ? "	" : ",";
	return t.split(n).length;
}
async function bg(e, t, n) {
	const a = Math.min(e.size, 16777216);
	let i = Math.min(16384, a);
	for (;;) {
		g(t, "before reading GeneActiv CSV header");
		const s = await r(e, i, n);
		g(t, "after reading GeneActiv CSV header");
		const o = i >= a, l = s.split("\n"), c = o && i >= e.size ? l : l.slice(0, -1);
		for (const e of c) {
			const t = vg(e);
			if (null !== t) return t >= 12;
		}
		if (o) return !1;
		i = Math.min(2 * i, a);
	}
}
export { ls as $, zr as A, Ds as B, Gr as C, Rr as D, Fr as E, Nr as F, Is as G, As as H, cr as I, bs as J, ks as K, lr as L, Mr as M, xr as N, Er as O, Tr as P, Ns as Q, Es as R, Ur as S, jr as T, ys as U, Cs as V, ws as W, xs as X, ds as Y, Ss as Z, to as _, Gh as a, rs as at, Vr as b, uo as c, Yi as ct, Qr as d, fg as ensureSavedGgirNonwear, hs as et, ro as f, eo as g, io as h, Yh as i, bg as isGeneactivEpochCsv, ss as it, Pr as j, Dr as k, po as l, Ki as lt, so as m, ag as n, ms as nt, eg as o, os as ot, Xr as p, wg as processGgirMetaRDataFile, _g as processMappedMimsCsvFile, vs as q, Uh as r, rg as refuseUnimportableGgirRecording, Ts as rt, fo as s, Xi as st, ig as t, _s as tt, co as u, lo as v, Br as w, Zr as x, no as y, Rs as z };
