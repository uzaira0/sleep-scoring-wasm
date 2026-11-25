import { h as e } from "./ggir-results-types-kmrkPkJO.js";
import { $n as t, Cn as n, Cr as a, Et as i, G as s, Hr as r, Ir as o, J as l, L as c, Mr as u, Nr as d, O as p, On as f, Ot as m, Pr as h, Rr as g, S as y, Sr as w, St as _, T as v, Tt as b, W as S, Wr as k, X as I, Xn as A, Y as x, Z as T, _r as N, ar as M, b as $, br as R, bt as z, d as D, f as E, fr as C, gr as O, gt as P, h as F, hr as j, ht as B, ir as L, k as G, kn as U, l as Z, n as H, nr as q, nt as W, o as V, p as J, pt as K, qr as Y, r as X, s as Q, st as ee, ur as te, ut as ne, vr as ae, wn as ie, wr as se, xt as re, yr as oe, yt as le, z as ce } from "./background-jobs-CtACoe42.js";
import { $n as ue, $r as de, $t as pe, A as fe, An as me, B as he, C as ge, Cr as ye, Ct as we, D as _e, Dn as ve, Dt as be, E as Se, Et as ke, Fn as Ie, Ft as Ae, G as xe, Gn as Te, H as Ne, Ht as Me, In as $e, J as Re, Jn as ze, K as De, L as Ee, Lr as Ce, Lt as Oe, M as Pe, Mn as Fe, Mr as je, Mt as Be, N as Le, Nt as Ge, O as Ue, Or as Ze, Ot as He, P as qe, Q as We, Qn as Ve, Qr as Je, Qt as Ke, Rt as Ye, S as Xe, Sr as Qe, St as et, Tt as tt, U as nt, Un as at, Ur as it, V as st, Vr as rt, W as ot, Wr as lt, Wt as ct, X as ut, Xr as dt, Xt as pt, Y as ft, Yr as mt, Yt as ht, Zn as gt, _ as yt, _n as wt, _r as _t, _t as vt, a as bt, at as St, b as kt, bn as It, bt as At, c as xt, cn as Tt, cr as Nt, d as Mt, dn as $t, dr as Rt, dt as zt, ei as Dt, en as Et, er as Ct, et as Ot, f as Pt, ft as Ft, g as jt, gn as Bt, gt as Lt, hn as Gt, ht as Ut, i as Zt, it as Ht, j as qt, jn as Wt, k as Vt, kn as Jt, kr as Kt, kt as Yt, l as Xt, lr as Qt, mn as en, mt as tn, n as nn, nr as an, nt as sn, o as rn, ot as on, p as ln, pt as cn, q as un, qn as dn, qr as pn, r as fn, rn as mn, rt as hn, s as gn, sr as yn, st as wn, t as _n, tn as vn, tr as bn, tt as Sn, u as kn, ur as In, ut as An, v as xn, vn as Tn, vt as Nn, w as Mn, wn as $n, wr as Rn, wt as zn, x as Dn, xr as En, xt as Cn, y as On, yn as Pn, yt as Fn, z as jn, zt as Bn } from "./db-GL-XcXL6.js";
import { C as Ln, D as Gn, E as Un, O as Zn, S as Hn, _ as qn, a as Wn, c as Vn, g as Jn, k as Kn, l as Yn, n as Xn, r as Qn, u as ea, v as ta, w as na, x as aa, y as ia } from "./ggir-results-import-2zgZscoa.js";
import { i as sa, t as ra } from "./wal-ZP8v39R1.js";
import { C as oa, D as la, S as ca, T as ua, a as da, b as pa, d as fa, f as ma, g as ha, h as ga, i as ya, l as wa, n as _a, o as va, p as ba, s as Sa, t as ka, v as Ia, w as Aa, x as xa, y as Ta } from "./local-nonwear-unified-CLQBVFz9.js";
import { _ as Na, a as Ma, c as $a, d as Ra, f as za, g as Da, h as Ea, i as Ca, l as Oa, n as Pa, o as Fa, p as ja, r as Ba, s as La, t as Ga, v as Ua } from "./epoch-utils-Cxly8wHc.js";
import { $ as Za, A as Ha, B as qa, C as Wa, D as Va, E as Ja, G as Ka, H as Ya, J as Xa, K as Qa, M as ei, N as ti, O as ni, P as ai, S as ii, T as si, U as ri, V as oi, W as li, X as ci, Y as ui, Z as di, _ as pi, b as fi, et as mi, g as hi, h as gi, j as yi, k as wi, nt as _i, p as vi, q as bi, tt as Si, v as ki, x as Ii, z as Ai } from "./local-export-worker-BdFlLgPy.js";
import { S as xi, b as Ti, d as Ni, i as Mi, m as $i, n as Ri, o as zi, r as Di, s as Ei, w as Ci, x as Oi, y as Pi } from "./ingest-B7tq1PwN.js";
import { t as Fi } from "./valid-day-criteria-Dq1yivCk.js";
const ji = "Review Data Settings > CSV Settings before opening this file.";
function Bi(e) {
	return `Column-mapped CSV mapping could not be applied: ${e.map((e) => e.message).join(" ")} ${ji}`;
}
function Li(e, t, n) {
	const a = Object.values(t);
	if (!a.includes(e)) throw new Error(`${n} must be one of ${a.join(", ")} (bundle reported "${e}")`);
	return e;
}
function Gi(e) {
	return Li(e, ae, "temporalBasis");
}
const Ui = {
	full_calibrated_signal: "https://w3id.org/sleep-scoring-ontology/method/actours/full-pipeline-file/1",
	epoch_series_part3to5: "https://w3id.org/sleep-scoring-ontology/method/actours/ggir-epoch-parts-3-to-5/1"
}, Zi = "actours.compute.file.v1", Hi = Number.MAX_SAFE_INTEGER;
function qi(e) {
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
		if (Number.isInteger(e) && Math.abs(e) > Hi) throw new TypeError("method parameter integers must be exactly representable in IEEE-754 binary64");
		return e;
	}
	if (Array.isArray(e)) return e.map(qi);
	if ("object" == typeof e) {
		const t = {};
		for (const [n, a] of Object.entries(e)) null != a && (t[n] = qi(a));
		return t;
	}
	throw new TypeError("unsupported method parameter type: " + typeof e);
}
const Wi = /* @__PURE__ */ new Set([
	"id",
	"fileId",
	"createdAt",
	"updatedAt"
]);
async function Vi(e) {
	const t = [...e].sort((e, t) => e.analysisDate.localeCompare(t.analysisDate)).map((e) => Ct(qi(function(e) {
		const t = {};
		for (const [n, a] of Object.entries(e)) Wi.has(n) || void 0 !== a && (t[n] = a);
		return t;
	}(e))));
	return ce(`[${t.join(",")}]`);
}
const Ji = {
	accelerator: "cpu_only",
	concurrency: {
		mode: "serial",
		max_threads: null
	},
	vectorization: "baseline"
};
async function Ki(e, t = J(), n) {
	const a = t, i = await async function(e) {
		if (!/^[0-9a-f]{64}$/.test(e.sourceContentSha256)) throw new Error("sourceContentSha256 must be 64 lowercase hex characters");
		if (!Number.isInteger(e.sourceSizeBytes) || e.sourceSizeBytes < 1) throw new Error("sourceSizeBytes must be a positive integer");
		if (!/^[0-9a-f]{64}$/.test(e.runtimeBuild.artifactSha256)) throw new Error("runtimeBuild.artifactSha256 must be 64 lowercase hex characters");
		const t = e.dailyRows.length, n = 0 === t ? [] : [`daily_summary_stream:sha256:${await Vi(e.dailyRows)}`], a = Ji, i = Ui[e.computePath], s = await async function(e) {
			if (!e.methodSpecificationId.trim()) throw new Error("methodSpecificationId must be nonblank");
			const t = (n = e.params, Ct(qi(n)));
			var n;
			return {
				parameter_set_hash: await ce(t),
				method_specification_id: e.methodSpecificationId,
				canonicalization_version: "rfc8785_jcs_v1",
				canonical_parameters_json: t,
				parameter_schema_reference: e.parameterSchemaReference ?? null
			};
		}({
			methodSpecificationId: i,
			params: {
				file_compute_contract: Zi,
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
			file_compute_contract_version: Zi,
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
		return ce(Ct({
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
	return D(a, [a.localExecutions], async () => {
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
async function Yi(e, t = x()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
async function Xi(e, t = Fi, n) {
	return (await Promise.all(e.map((e) => Qi([e], t, n)))).map((e) => 1 === e.validDays);
}
async function Qi(e, t = Fi, n) {
	return H(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
}
function es(e, t) {
	const n = [
		...zn(e, is, t),
		...tt(e, is),
		...be(e, is, t)
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
function ts(e, t) {
	const n = ns(e, t), a = Boolean(e.datetime_column), i = Boolean(e.date_column && e.time_column);
	return a || i || n.push({
		key: "timestamp",
		message: "Map Date/time, or map both Date and Time."
	}), e.mims_unit_column || n.push({
		key: "mims_unit_column",
		message: "Map a MIMS unit column."
	}), n;
}
function ns(e, t) {
	return [
		...zn(e, is, t),
		...tt(e, is),
		...be(e, is, t)
	];
}
const as = [30, 60], is = [
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
], ss = [
	["axis_x", "axisX"],
	["axis_y", "axisY"],
	["axis_z", "axisZ"],
	["vector_magnitude", "vectorMagnitude"],
	["choi_axis", "choiAxis"]
];
async function rs(e, t, n) {
	const a = ss.filter(([, e]) => (t[e]?.length ?? 0) > 0), { series: s } = await e.aggregateEpochSeries({
		target_seconds: i,
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
	}), r = (e) => Float64Array.from(s.channels.find((t) => t.name === e)?.counts ?? []), o = {
		timestamps: Float64Array.from(s.timestamps_ms, (e) => e / 1e3),
		axisY: r("axis_y"),
		vectorMagnitude: r("vector_magnitude")
	};
	for (const [i, l] of a) "axisY" !== l && "vectorMagnitude" !== l && (o[l] = r(i));
	return o;
}
async function os(e, t, n, a) {
	const i = n.flatMap((e) => t[e] ? [[e, t[e]]] : []), s = await Promise.all(i.map(([, t]) => rs(e, t, a)));
	return Object.fromEntries(i.map(([e], t) => [e, s[t]]));
}
async function ls(e, t, n, a) {
	return 0 === t.length ? new Uint8Array(a.length) : e.projectLabelsOntoGrid(t, n, i, a);
}
async function cs(e, t, n) {
	return Array.from(await e.roundCountStorage(Float64Array.from(t), n));
}
async function us(e, t) {
	const { dates: n, day: a } = await e.utcDayIndex(Float64Array.from(t)), i = new Map(n.map((e) => [e, []]));
	return a.forEach((e, t) => {
		const a = n[e];
		void 0 !== a && i.get(a)?.push(t);
	}), i;
}
function ds(e, t, n) {
	return t.map((t) => e[t] ?? n);
}
function ps(e) {
	const t = new Float64Array(e.reduce((e, t) => e + t.length, 0));
	let n = 0;
	for (const a of e) t.set(a, n), n += a.length;
	return t;
}
function fs(e, t, n) {
	return Float64Array.from(t, (t) => e[t] ?? n);
}
async function ms(e, t, n, a) {
	return Float64Array.from(await e.uniformTimestamps(t, 1e3 * n, a), (e) => e / 1e3);
}
async function hs(e, t, n, a) {
	if (!Number.isFinite(t) || 0 === n.length || !Number.isFinite(a) || a <= 0) return /* @__PURE__ */ new Map();
	const i = await us(e, await ms(e, t, a, n.length));
	return new Map(Array.from(i, ([e, t]) => [e, Uint8Array.from(ds(n, t, 0))]));
}
async function gs(e, t, n, a, i = {}) {
	const s = /* @__PURE__ */ new Map();
	if (0 === t.length) return s;
	if (n.length !== t.length || a.length !== t.length) return console.warn("[local-processing] The 5 s GGIR timestamp grid does not match its ENMO/anglez series; skipping the GGIR day split rather than fabricating zeros."), s;
	const r = void 0 !== i.sib && i.sib.length === t.length;
	for (const [y, w] of [["anglex", i.anglex], ["angley", i.angley]]) if (w?.length && w.length !== t.length) throw new Error(`The GGIR ${y} series has ${String(w.length)} epochs where the 5 s grid has ${String(t.length)}.`);
	const o = Boolean(i.anglex?.length), l = Boolean(i.angley?.length), c = void 0 !== i.nonwear && i.nonwear.length === t.length, u = void 0 !== i.invalid && i.invalid.length === t.length, d = void 0 !== i.mimsUnit && i.mimsUnit.length === t.length, p = void 0 !== i.mimsUnitX && i.mimsUnitX.length === t.length, f = void 0 !== i.mimsUnitY && i.mimsUnitY.length === t.length, m = void 0 !== i.mimsUnitZ && i.mimsUnitZ.length === t.length, h = (e, t) => t.map((t) => (e[t] ?? 0) > 0 ? 1 : 0), g = Float64Array.from(t, (e) => e / 1e3);
	for (const [y, w] of await us(e, g)) s.set(y, {
		timestamps: ds(g, w, 0),
		enmo: ds(n, w, 0),
		anglez: ds(a, w, 0),
		...o ? { anglex: ds(i.anglex, w, 0) } : {},
		...l ? { angley: ds(i.angley, w, 0) } : {},
		...r ? { sib: ds(i.sib, w, 0) } : {},
		...c ? { nonwear: h(i.nonwear, w) } : {},
		...u ? { invalid: h(i.invalid, w) } : {},
		...d ? { mimsUnit: ds(i.mimsUnit, w, NaN) } : {},
		...p ? { mimsUnitX: ds(i.mimsUnitX, w, NaN) } : {},
		...f ? { mimsUnitY: ds(i.mimsUnitY, w, NaN) } : {},
		...m ? { mimsUnitZ: ds(i.mimsUnitZ, w, NaN) } : {}
	});
	return s;
}
async function ys(e, t, n, a, i, s) {
	const r = /* @__PURE__ */ new Map();
	if (0 === t.length || !Number.isFinite(n)) return r;
	for (const [o, l] of Object.entries(a)) r.set(o, await e.foldUniformOntoGrid(n / 1e3, 30, t, Float64Array.from(l.timestamps), i, s));
	return r;
}
async function ws(e, t, n, a, i) {
	const s = await ys(e, Float64Array.from(t), n, a, i, "majority_ties_sleep");
	return new Map(Array.from(s, ([e, t]) => [e, Uint8Array.from(t)]));
}
async function _s(e, t, n, a, i) {
	const s = await ys(e, Float64Array.from(t), n, a, i, "mean");
	return new Map(Array.from(s, ([e, t]) => [e, Float32Array.from(t)]));
}
async function vs(e, t, n) {
	const a = /* @__PURE__ */ new Map();
	if (!t || 0 === t.length || null === n || !Number.isFinite(n)) return a;
	const i = await ms(e, n, 30, t.length);
	for (const [s, r] of await us(e, i)) a.set(s, {
		timestamps: ds(i, r, 0),
		scores: r.map((e) => t[e] ? 1 : 0)
	});
	return a;
}
async function bs(e, t, n, a, i) {
	const s = await e.foldOntoGrid(Float64Array.from(t), Float64Array.from(n), Float64Array.from(a), 1e3 * i, "finite_mean");
	return Array.from(s);
}
async function Ss(e, t, n, a, i, s, r, o, l, c, u, d) {
	return async function(e, t, n, a, i, s, r, o, l, c, u, d) {
		const p = {}, f = null != i, m = null != s && s.length > 0, h = null != r && r.length > 0, g = null != o && o.length > 0, y = null != l?.unit && l.unit.length === t.length, w = null != l?.unitX && l.unitX.length === t.length, _ = null != l?.unitY && l.unitY.length === t.length, v = null != l?.unitZ && l.unitZ.length === t.length, b = null != u && u.length === t.length, S = null != c && c.length === t.length, k = null != d && d.length === t.length;
		for (const [I, A] of await us(e, t)) p[I] = {
			timestamps: fs(t, A, 0),
			axisY: fs(n, A, 0),
			vectorMagnitude: fs(a, A, 0),
			...h ? { axisX: fs(r, A, 0) } : {},
			...g ? { axisZ: fs(o, A, 0) } : {},
			...f ? { choiAxis: fs(i, A, 0) } : {},
			...m ? { temperature: fs(s, A, NaN) } : {},
			...y ? { mimsUnit: fs(l?.unit ?? [], A, NaN) } : {},
			...w ? { mimsUnitX: fs(l?.unitX ?? [], A, NaN) } : {},
			..._ ? { mimsUnitY: fs(l?.unitY ?? [], A, NaN) } : {},
			...v ? { mimsUnitZ: fs(l?.unitZ ?? [], A, NaN) } : {},
			...b ? { zeroCrossingX: fs(u, A, NaN) } : {},
			...S ? { zeroCrossingY: fs(c, A, NaN) } : {},
			...k ? { zeroCrossingZ: fs(d, A, NaN) } : {}
		};
		return p;
	}(e, t, await cs(e, n, 0), await cs(e, a, 2), void 0 !== r ? await cs(e, r, 0) : void 0, o, await cs(e, i, 0), await cs(e, s, 0), l, c, u, d);
}
function ks(e, t) {
	return 30 !== t && (A(e)?.hasRawAccel ?? !1);
}
async function Is(e) {
	if (e.timestampsMs) {
		const t = 1e3 / e.sampleRate, n = e.timestampsMs[0] !== e.firstTsMs, a = e.timestampsMs.some((n, a) => Math.abs(n - e.firstTsMs - a * t) > .5 * t);
		if (n || a) return console.warn("[local-processing] Native 30-second counts were skipped because raw preparation changed the sample timeline."), null;
	}
	const t = e.cancelOperation ?? (() => {
		I(e.wasmApi);
	}), n = await V(e.wasmApi, (t) => t.neishabouriCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: $,
		label: `neishabouriCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}), a = await V(e.wasmApi, (t) => t.zeroCrossingCounts(e.x, e.y, e.z, e.sampleRate, 30), {
		ms: $,
		label: `zeroCrossingCounts 30s (${e.label})`,
		signal: e.signal,
		cancel: t
	}).catch((t) => (v(t, e.signal, `zeroCrossingCounts 30s (${e.label})`), console.warn("[local-processing] The optional 30-second zero-crossing pass failed."), null));
	return {
		timestampsSec: await ms(e.wasmApi, e.firstTsMs, 30, n.y.length),
		neishabouri: n,
		zeroCrossing: a
	};
}
async function As(e, t, n) {
	const a = n.zeroCrossing, i = await Ss(e, n.timestampsSec, n.neishabouri.y, n.neishabouri.vm, n.neishabouri.x, n.neishabouri.z, void 0, void 0, void 0, a ? await cs(e, a.zcy, 0) : void 0, a ? await cs(e, a.zcx, 0) : void 0, a ? await cs(e, a.zcz, 0) : void 0);
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
const xs = "Recording crossed a timezone boundary (a 1 h jump in the device clock). Recording times are kept as the device's wall-clock time; no timezone or daylight-saving shift is applied, so local-time metrics around the jump may be off.";
async function Ts(e, t) {
	return await e.detectHourClockJumpMs(Float64Array.from(t)) ? xs : null;
}
async function Ns(e, t, n = 60) {
	(await e.irregularInternalDays(Float64Array.from(t), n)).forEach(() => {
		console.warn("[local-processing] A possible DST transition or partial internal day was detected; review the in-app import warning.");
	});
}
async function Ms(e, t, n) {
	const a = [...e], s = n && n.storedEpochSeconds < i ? n : void 0, r = s ? await Promise.all(a.map(([, e]) => async function(e, t, n) {
		const { series: a } = await e.aggregateEpochSeries({
			target_seconds: i,
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
	}(s.core, e.timestamps, s.storedEpochSeconds))) : a.map(([, e]) => e.timestamps), o = [];
	let l = Number.POSITIVE_INFINITY, c = Number.NEGATIVE_INFINITY;
	for (const [i, [u]] of a.entries()) {
		const e = r[i];
		s && 0 === e.length || (o.push(u), 0 !== e.length && (l = Math.min(l, e[0] ?? l), c = Math.max(c, e[e.length - 1] ?? c)));
	}
	return o.sort(), Number.isFinite(l) && Number.isFinite(c) ? Be(o, l, c, void 0, t) : o;
}
function $s(e) {
	return /[",\r\n]/.test(e) ? `"${e.replace(/"/g, "\"\"")}"` : e;
}
function Rs(e, t) {
	if (!t) return null;
	const n = ke(t), a = e.findIndex((e) => ke(e) === n);
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
function Ds(e, t) {
	if (e.length !== t.length) return console.warn("[local-processing] Event-marker column dropped: mapped row count differs from the parsed epoch count."), /* @__PURE__ */ new Float64Array(0);
	const n = [];
	for (let a = 0; a < e.length; a += 1) {
		const i = t[a];
		1 === e[a] && null != i && Number.isFinite(i) && n.push(i / 1e3);
	}
	return Float64Array.from(n.sort((e, t) => e - t));
}
function Es(e, t, n) {
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
async function Os(e, t, n, a) {
	y(a, "standardizing mapped CSV");
	const i = j(await e.text());
	y(a, "standardizing mapped CSV");
	const s = C(i);
	if (s.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
	const r = s.records, o = r[t]?.text;
	if (!o) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
	const l = L(o), c = te(o, l), u = es(n, c);
	if (u.length > 0) throw new Error(Bi(u));
	const d = Rs(c, n.datetime_column), p = Rs(c, n.date_column), f = Rs(c, n.time_column), m = Rs(c, n.activity_column), h = Rs(c, n.axis_x_column), g = Rs(c, n.axis_z_column), w = Rs(c, n.vector_magnitude_column), _ = [
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
	].filter((e) => null !== e.idx), v = Rs(c, n.event_marker_column), b = null === v ? null : [];
	if (null === m) throw new Error("Column-mapped CSV mapping requires an activity/counts column before import.");
	if (null === d && (null === p || null === f)) throw new Error("Column-mapped CSV mapping requires Date/time, or both Date and Time, before import.");
	const S = null !== d ? ["Datetime", "Axis1"] : [
		"Date",
		"Time",
		"Axis1"
	];
	null !== h && S.push("Axis2"), null !== g && S.push("Axis3"), null !== w && S.push("Vector Magnitude"), S.push(..._.map((e) => e.header));
	const k = [S.join(",")];
	for (let A = t + 1; A < r.length; A += 1) {
		(A - t - 1) % 1e3 == 0 && (await Q(), y(a, "standardizing mapped CSV"));
		const e = r[A];
		if (!e.text.trim()) continue;
		const n = te(e.text, l), i = null !== d ? [n[d] ?? "", n[m] ?? ""] : [
			null === p ? "" : n[p] ?? "",
			null === f ? "" : n[f] ?? "",
			n[m] ?? ""
		];
		null !== h && i.push(n[h] ?? ""), null !== g && i.push(n[g] ?? ""), null !== w && i.push(n[w] ?? "");
		for (const t of _) i.push(n[t.idx] ?? "");
		b && null !== v && b.push(zs(n[v])), k.push(i.map($s).join(","));
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
function Ps(e, t, n, a) {
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
function js(e, t) {
	return e.length === t && e.some((e) => Number.isFinite(e)) ? e : void 0;
}
const Bs = {
	ggirHasptVariant: g.ggir_haspt_variant,
	ggirHasibVariantsEnabled: g.ggir_hasib_variants_enabled,
	ggirHasibVariants: [...g.ggir_hasib_variants],
	ggirHasibCountSource: g.ggir_hasib_count_source,
	ggirHasibCountEpochSeconds: g.ggir_hasib_count_epoch_seconds
}, Ls = new Set(h), Gs = new Set(d), Us = new Set(u);
function Zs(e) {
	const t = e ?? {}, n = t.ggir_haspt_variant, a = t.ggir_hasib_variants_enabled, i = t.ggir_hasib_variants, s = t.ggir_hasib_count_source, r = t.ggir_hasib_count_epoch_seconds, o = Array.isArray(i) ? Array.from(new Set(i.filter((e) => "string" == typeof e && Gs.has(e)))) : [...Bs.ggirHasibVariants];
	return {
		ggirHasptVariant: "string" == typeof n && Ls.has(n) ? n : Bs.ggirHasptVariant,
		ggirHasibVariantsEnabled: "boolean" == typeof a ? a : Bs.ggirHasibVariantsEnabled,
		ggirHasibVariants: o,
		ggirHasibCountSource: "string" == typeof s && Us.has(s) ? s : Bs.ggirHasibCountSource,
		ggirHasibCountEpochSeconds: "number" == typeof r && Number.isInteger(r) && r >= 1 ? r : Bs.ggirHasibCountEpochSeconds
	};
}
function Hs(e) {
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
function qs(e) {
	return !Et(e);
}
const Ws = /* @__PURE__ */ new WeakMap();
async function Vs(e, t) {
	const n = await Di(e, t);
	return {
		data: n,
		nights: await Ja(n?.actiwareIntervals, H())
	};
}
function Js(e, t, n) {
	if (!n) return Vs(e, t);
	let a = Ws.get(n);
	return a || Ws.set(n, a = Vs(e, t)), a;
}
const Ks = {
	windowForNight: async (e) => qs(e.file) ? async function({ fileId: e, date: t, db: n, batch: a }) {
		return si((await Js(e, n, a)).nights, t);
	}(e) : null,
	tables: (e) => [e.actiwareFileData],
	stampInput: async (e, t) => ({ rest: (await t.actiwareFileData.get(e))?.actiwareIntervals }),
	fingerprint: (e) => ({ actiwareRestWindow: e })
}, Ys = "actiware";
function Xs(e) {
	return [...Ht(e)].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort();
}
async function Qs(e, t, n) {
	try {
		const a = await t.actiwareFileData.get(e);
		if (!a?.actiwareSleepWake) return;
		const i = (await t.actiwareStatisticsInputs.get(e))?.input, s = (await t.files.get(e))?.seriesRevision ?? 0, r = Xs(await t.markers.where("fileId").equals(e).toArray());
		let o = null;
		try {
			o = await vi(await Ja(a.actiwareIntervals, H(n)), i, r, (e) => H(n).actiwareIntervalStatistics(e));
		} catch (wd) {
			n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), In("error", "Actiware statistics recalculation failed", {
				...Qt(wd),
				file_id: e
			});
		}
		await E(t, [
			t.actiwareFileData,
			t.actiwareStatisticsInputs,
			t.files,
			t.markers
		], async () => {
			const n = await t.actiwareFileData.get(e), l = (await t.actiwareStatisticsInputs.get(e))?.input;
			if (!n || ((await t.files.get(e))?.seriesRevision ?? 0) !== s) return;
			if (JSON.stringify(l) !== JSON.stringify(i) || JSON.stringify(n.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
			const c = Xs(await t.markers.where("fileId").equals(e).toArray());
			JSON.stringify(c) === JSON.stringify(r) && (await (null === o ? Mi(t, e) : Ei(t, e, o, !1)), await rn(t, [e]));
		}, n);
	} catch (wd) {
		n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), In("error", "Actiware statistics recalculation failed", {
			...Qt(wd),
			file_id: e
		});
		try {
			await E(t, [t.actiwareFileData, t.files], async () => {
				await Mi(t, e), await rn(t, [e]);
			}, n);
		} catch {
			throw wd instanceof Error ? wd : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
		}
	}
}
async function er(e, t, n, { analysisParadigm: a, signal: i, read: s }) {
	const o = s ? s.file : await Xe(e, n);
	if (qs(o)) {
		if (pt(o, a) === pn.rest_intervals) return Qs(e, n, i);
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
			])), p = Ht(l.filter((e) => c || t.has(e.date))), f = c ? new Map([...[...p].map(([e, t]) => [e, t.sleepMarkers]), ...t]) : t, m = new Map([...f].flatMap(([e, t]) => {
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
				g = await hi({
					file: a,
					statisticsInput: s
				}, m, (e) => H(i).actiwareIntervalStatistics(e), H(i));
			} catch (wd) {
				i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), In("error", "Actiware statistics recalculation failed", {
					...Qt(wd),
					file_id: e
				});
			}
			await E(n, [
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
				if (null === g) return await Mi(n, e), void await rn(n, [e]);
				const y = pi(t, g), w = y.length > 0 ? await r.waitFor(oi(y, H(i))) : void 0, _ = ki(t, g), v = _.length > 0 ? await r.waitFor(Ja(_, H(i))) : void 0, b = gi(t, g, p.keys(), {
					rowDateOf: w,
					rowNights: v
				});
				await Ei(n, e, b, !0 === t.actiwareStatisticsNeedsRecompute && !(c && p.size === f.size)), await rn(n, [e]);
			}, i);
		} catch (wd) {
			i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), In("error", "Actiware statistics recalculation failed", {
				...Qt(wd),
				file_id: e
			});
			try {
				await E(n, [n.actiwareFileData, n.files], async () => {
					await Mi(n, e), await rn(n, [e]);
				}, i);
			} catch {
				throw wd instanceof Error ? wd : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
			}
		}
	}
}
const tr = "An earlier audit record is still being written. The rest interval was not changed; try again.";
async function nr(e, t, n, a) {
	return (await ar(e, n, a, (n, { core: a }) => ii(n, e.date, t, a))).sleepMarkers;
}
async function ar({ fileId: e, date: t, actor: n }, a, i, s) {
	const r = await a.actiwareFileData.get(e), o = (await a.actiwareStatisticsInputs.get(e))?.input, l = r?.actiwareSleepWake;
	if (!l || !o) throw new Ii("This recording has no Actiware analysis settings, so its rest intervals cannot be edited.");
	const c = H(i), u = r?.actiwareIntervals ?? [], d = await Ja(u, c), p = await s(d, {
		epochs: o.epochs,
		params: l.params,
		grid: {
			startTimestamp: l.startTimestamp,
			epochSeconds: l.epochSeconds
		},
		core: c
	}), f = [...p.intervals], m = Xs(await a.markers.where("fileId").equals(e).toArray()), h = ni(u, f), g = wi(h);
	if (0 === g.length) return {
		sleepMarkers: yi(d, t, m.includes(t)),
		removed: 0,
		history: null
	};
	const y = await vi(p, o, m, (e) => c.actiwareIntervalStatistics(e)).catch(Ni), w = Ve.captureWorkspaceBinding(a, {
		username: n.username,
		studyId: n.studyId
	});
	if (!await Ve.settleWritesForDb(a, w)) throw new Ii(tr);
	let _ = !1;
	return await E(a, [
		a.actiwareFileData,
		a.markers,
		a.files,
		a.placementResults,
		a.projectMeta,
		a.auditLog
	], async () => {
		const n = await a.actiwareFileData.get(e);
		if (JSON.stringify(n?.actiwareIntervals ?? []) !== JSON.stringify(u)) throw new Ii("That rest interval changed since it was shown; reload the night.");
		_ = null === y || JSON.stringify(Xs(await a.markers.where("fileId").equals(e).toArray())) !== JSON.stringify(m);
		const s = Va(n?.actiwareRemovedRests ?? [], h, f);
		await zi(a, e, {
			intervals: f,
			removedRests: s
		}, _ ? null : y ?? []), await a.placementResults.delete(e), await Fe([e], a, i), await rn(a, [e]), await g.reduce(async (n, a) => {
			if (await n, !await Ve.recordFileEventDurably({
				fileId: e,
				analysisDate: t,
				action: q.ACTIWARE_REST_EDITED,
				payload: { ...a }
			}, w)) throw new Ii(tr);
		}, Promise.resolve());
	}, i), _ && await Qs(e, a, i), {
		sleepMarkers: yi(p, t, m.includes(t)),
		removed: h.take.filter((e) => "rest" === e.kind).length,
		history: {
			undo: (e, t = a, n) => nr(e, ai(h), t, n),
			redo: (e, t = a, n) => nr(e, h, t, n)
		}
	};
}
const ir = {
	nightRecord: {
		sleepPeriodsToSave: async ({ fileId: e, date: t, isInvalidNight: n }, a, i) => ei(a, await Ja((await Di(e, i))?.actiwareIntervals, H()), t, n),
		writeEdit: function(e, t, n = J(), a) {
			return ar(e, n, a, (n, a) => Wa(n, e.date, t, a));
		}
	},
	sourceAnalysis: {
		id: Ys,
		stores: ["actiwareFileData", "actiwareStatisticsInputs"],
		persistIngest: Ri,
		afterRestore: async function({ notCarried: e, db: t }) {
			return (await Promise.all(e.map(async (e) => void 0 === e ? void 0 : t.actiwareFileData.get(e)))).flatMap((e) => e?.actiwareSleepWake ? [] : ["Actiware Sleep/Wake: not in this older backup and could not be rebuilt from it"]);
		},
		covers: qs,
		followSavedNights: async function({ fileId: e, file: t, nights: n, sleepMarkersChanged: a, analysisParadigm: i, db: s, signal: r, openBatch: o }) {
			const l = a ? void 0 : await s.actiwareFileData.get(e);
			if (a || l?.actiwareStatisticsNeedsRecompute || l?.actiwareSleepWake && !l.actiwareStatistics?.length) {
				const a = o();
				if (a) {
					let e = a.savedNights.get(Ys);
					e || a.savedNights.set(Ys, e = /* @__PURE__ */ new Map());
					for (const [t, a] of n) e.set(t, a);
				} else await er(e, n, s, {
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
				await er(e, t, a, {
					analysisParadigm: n,
					signal: i
				});
			} catch (wd) {
				In("error", "Actiware statistics recalculation failed", {
					...Qt(wd),
					file_id: e
				});
			}
		},
		proposeNight: async function({ fileId: e, date: t, file: n, options: a, sleepPeriodDetectionConfig: i, db: s, batch: r }) {
			if (a.algorithm !== O.ACTIWARE_SLEEP_WAKE) return null;
			const o = qs(n) ? await Js(e, s, r) : null, l = o?.data, c = o ? ti(o.nights, t) : null, u = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(11, 19), d = l?.actiwareRestProposal?.notes?.[t], p = null !== o && Ha(o.nights, t).some((e) => "scorer" === e.origin), f = d && !p ? [`Rest proposal (SCREENS Autoscore): ${d}`] : [], { source_a: m, source_b: h, fusion_policy: g, apply_nonwear_gate: y } = Rn(ht({
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
					marker_type: R.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: (c.additionalSleeps ?? []).map((e, t) => ({
					onset_timestamp: e.startTimestamp,
					offset_timestamp: e.endTimestamp,
					marker_type: R.NAP,
					marker_index: t + 2
				})),
				decisions: [],
				sleep_period_detection_config: w,
				notes: [`Actiware sleep interval ${u(c.sleep.startTimestamp)}–${u(c.sleep.endTimestamp)} inside rest interval ${u(c.rest.startTimestamp)}–${u(c.rest.endTimestamp)}, as Actiware sets it.`, ...f]
			};
		},
		hasScorerSettings: async (e, t) => null != (await Di(e, t))?.actiwareSleepWake,
		afterDiaryChange: {
			label: "Propose rest intervals from the new diary",
			run: async function(e, t, n) {
				try {
					await async function(e, t, n) {
						const a = await t.studySettings.where("key").equals("study").first(), i = a?.extraSettings ?? {}, s = $t(i.actiware_rest_proposal);
						if (s.rest_autoscore !== lt.screens) return !1;
						const r = await t.files.get(e);
						if (null == r?.id || !Tt(r)) return !1;
						const { reanalyzeActiwareFile: o } = await import("./reanalysis-Cz1DX8Kn.js");
						return (await o({
							...r,
							id: r.id
						}, {
							paradigm: mn(i.analysis_paradigm),
							overrides: vn(i.actiware_analysis),
							proposal: s,
							hasib: Hs(Zs(i))?.hasibVariants,
							db: t,
							expectedStudyContentHash: a?.contentHash ?? null,
							services: n
						})).changed;
					}(e, t, n);
				} catch (wd) {
					throw In("error", "Rest proposal after the diary write failed", {
						...Qt(wd),
						file_id: e
					}), new Error("The rest intervals were not proposed again from the new diary; they still follow the previous diary. Save the study settings to propose them again.", { cause: wd });
				}
			}
		},
		reanalyze: async (e, t, { db: n, expectedStudyContentHash: a, signal: i, services: s }) => {
			if (!Tt(e)) return { changed: !1 };
			const { reanalyzeActiwareFile: o, ACTIWARE_NOT_RECONCILED: l } = await r.waitFor(import("./reanalysis-Cz1DX8Kn.js")), c = await o(e, {
				paradigm: mn(t.analysis_paradigm),
				overrides: vn(t.actiware_analysis),
				proposal: $t(t.actiware_rest_proposal),
				hasib: Hs(Zs(t))?.hasibVariants,
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
	},
	restWindow: Ks
}, sr = {
	id: "ggir_saved_folder",
	covers: () => !0,
	stores: [],
	persistIngest: () => Promise.resolve(),
	afterRestore: () => Promise.resolve([]),
	followSavedNights: ({ fileId: e, username: t, db: n, signal: a }) => (fi(e, t, n, a), Promise.resolve())
}, rr = {
	windowForNight: async (e) => function(e) {
		const t = e?.sleepMarkers.find((e) => e.markerType === R.MAIN_SLEEP) ?? e?.sleepMarkers[0];
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
}, or = { sleepPeriodsToSave: (e, t) => Promise.resolve(t) }, lr = {
	[pn.sleep_periods]: or,
	[pn.rest_intervals]: ir.nightRecord
}, cr = [ir.sourceAnalysis, sr], ur = {
	hdcza: rr,
	actiware_rest_interval: ir.restWindow
}, dr = Object.assign({
	"../assets/models/lstm_sleep_wake.onnx": "/sleep-scoring-wasm/assets/lstm_sleep_wake-CMNVV_Rk.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba-DjoYpGzg.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa--Jn4_6Dd.onnx",
	"../assets/models/student_lstm_h64_g128_from_lstm_ba.onnx": "/sleep-scoring-wasm/assets/student_lstm_h64_g128_from_lstm_ba-BZ4I7SAE.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_ba.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_ba-CK3CNFjI.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_kappa.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_kappa-Cb_N5vbO.onnx",
	"../assets/models/teacher_lstm_h128_g256_ba.onnx": "/sleep-scoring-wasm/assets/teacher_lstm_h128_g256_ba-CbSChb-h.onnx"
}), pr = dr["../assets/models/lstm_sleep_wake.onnx"] ?? null, fr = "lstm_sleep_wake_regular_best_20260626", mr = "bcaf0f2b3f35638a324fd0058ce4cbab03d8f6574cec33a7a07e3e4e0139a908", hr = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_URL, gr = "configured-url", yr = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_VERSION ?? fr, wr = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SHA256 ?? (!hr && pr ? mr : ""), _r = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SIZE_LABEL ?? "7.4 MB model file", vr = [
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
		version: fr,
		sha256: mr,
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
var br = class extends Error {
	constructor(e) {
		super(e), this.name = "LstmModelUnavailableError";
	}
};
function Sr() {
	const e = vr.flatMap((e) => {
		const t = dr[e.assetKey];
		return t ? [{
			...e,
			url: t,
			source: "bundled"
		}] : [];
	}), t = hr ? {
		id: gr,
		label: "Configured URL",
		description: "ONNX model configured by VITE_LSTM_SLEEP_WAKE_ONNX_URL.",
		url: hr,
		version: yr,
		sha256: wr || null,
		sizeLabel: _r,
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
function kr(e = Sr()) {
	return hr && hr.length > 0 ? gr : e.find((e) => e.recommended)?.id ?? e[0]?.id ?? null;
}
function Ir(e) {
	const t = Sr(), n = e ?? kr(t);
	return (t.find((e) => e.id === n) ?? t.find((e) => e.id === kr(t))) || {
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
function Ar(e) {
	if (!Number.isFinite(e)) throw new br("LSTM threshold must be a finite number between 0 and 1.");
	return Math.min(1, Math.max(0, e));
}
function xr(e) {
	const t = Number.parseFloat({
		BASE_URL: "/sleep-scoring-wasm/",
		DEV: !1,
		MODE: "production",
		PROD: !0,
		SSR: !1,
		VITE_BASE_PATH: "/sleep-scoring-wasm/",
		VITE_FORCE_LOCAL_MODE: "true"
	}.VITE_LSTM_SLEEP_WAKE_THRESHOLD ?? "NaN");
	return Number.isFinite(t) ? Ar(t) : e.defaultThreshold;
}
function Tr(e) {
	return null != e ? Ir(e) : hr && hr.length > 0 ? Ir(gr) : Ir();
}
async function Nr(e) {
	(function() {
		if (!("caches" in globalThis)) throw new br("Browser Cache Storage is unavailable, so the LSTM ONNX model cannot be cached.");
	})();
	const t = Tr(e), n = function(e) {
		const { url: t } = Tr(e);
		if (!t) throw new br("LSTM ONNX model is not configured. Add frontend/src/assets/models/lstm_sleep_wake.onnx or set VITE_LSTM_SLEEP_WAKE_ONNX_URL.");
		return t;
	}(t.id), a = await (await caches.open(function(e) {
		return `sleep-scoring-lstm-onnx-${e.version}`;
	}(t))).match(n);
	if (!a) throw new br("LSTM ONNX model has not been downloaded yet.");
	return new Uint8Array(await a.arrayBuffer());
}
function Mr(e) {
	const t = Sr(), n = e && "object" == typeof e ? e : null, a = "string" == typeof n?.modelId ? n.modelId : null, i = a && t.some((e) => e.id === a) ? a : kr(t);
	if (!i) return {
		modelId: null,
		threshold: null
	};
	const s = Ir(i), r = n?.threshold;
	return {
		modelId: i,
		threshold: "number" == typeof r && Number.isFinite(r) ? Ar(r) : xr(s)
	};
}
function $r(e) {
	return Mr({
		modelId: e,
		threshold: null
	}).threshold ?? .5;
}
function Rr(e, t) {
	if (0 === e.length) return [];
	const n = [0];
	for (let a = 1; a < e.length; a++) Math.abs(e[a] - e[a - 1] - t) > .001 && n.push(a);
	return n.map((t, a) => ({
		start: t,
		end: n[a + 1] ?? e.length
	}));
}
async function zr(e, t, n, a = da, i = () => {
	I(e);
}) {
	const s = /* @__PURE__ */ new Map(), r = Math.min(t.x.length, t.y.length, t.z.length);
	if (0 === r || t.sampleRate <= 0) return s;
	const o = a.filter((e) => !Ia(e)?.needsModel);
	if (0 === o.length) return s;
	const l = new Float64Array(3 * r);
	for (let u = 0; u < r; u++) l[3 * u] = t.x[u], l[3 * u + 1] = t.y[u], l[3 * u + 2] = t.z[u];
	y(n, `before detectNonwearUnifiedBatch(${o.join(",")})`);
	const c = await V(e, (e) => e.detectNonwearUnifiedBatch(o, {
		raw: l,
		sampleRate: t.sampleRate,
		epochSeconds: t.epochSeconds
	}), {
		ms: $,
		label: `detectNonwearUnifiedBatch(${o.join(",")})`,
		signal: n,
		cancel: i
	}).catch((e) => (v(e, n, `detectNonwearUnifiedBatch(${o.join(",")})`), console.warn("[local-processing] A raw-signal nonwear batch failed."), null));
	if (c) for (const [u, d] of Object.entries(c)) s.set(u, d);
	return s;
}
async function Dr(e, t, n, a, i, s = _a, r = () => {
	I(e);
}) {
	const o = {}, l = s.filter((e) => !Ia(e)?.needsModel);
	if (0 === l.length) return o;
	const c = n.map((e) => t[e]).filter((e) => void 0 !== e), u = ps(c.map((e) => e.timestamps)), d = ps(c.map((e) => e.axisY)), p = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
	for (const { start: h, end: g } of Rr(u, a)) {
		const t = d.slice(h, g);
		if (0 === t.length) continue;
		y(i, "before count nonwear continuous run");
		const n = await V(e, (e) => e.detectNonwearUnifiedBatch(l, {
			counts: t,
			epochSeconds: a
		}), {
			ms: $,
			label: "count nonwear continuous run",
			signal: i,
			cancel: r
		}).catch((e) => (v(e, i, "count nonwear continuous run"), console.warn("[local-processing] A count-based nonwear batch failed for one contiguous run."), null));
		for (const [i, s] of Object.entries(n ?? {})) {
			if (!s.available || !s.nonwear?.length) {
				p.has(i) || p.set(i, s);
				continue;
			}
			const t = await xa(s, {
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
	return null == e ? {} : { [O.OAKLEY_1997]: { oakleyThreshold: e } };
}
async function Cr(e, t, n, a, i, s, r, o = () => {
	I(e);
}, l = {}, c = Ti) {
	if (0 === c.length) return;
	const u = a.flatMap((e) => n[e] ?? []), d = ps(u.map((e) => e.timestamps)), p = ps(u.map((e) => e.axisY)), f = {}, m = /* @__PURE__ */ new Map();
	for (const { start: w, end: _ } of Rr(d, i)) {
		const t = p.slice(w, _);
		if (!t || 0 === t.length) continue;
		const n = /* @__PURE__ */ new Map();
		for (const u of c) {
			const a = Ci(u, i);
			if ("gate_needs_30s_epoch" === a.kind) {
				n.set(u, a.response);
				continue;
			}
			y(s, `before scoreEpochs(${u} continuous)`);
			const c = await V(e, (e) => e.scoreEpochs(xi({
				algorithm: u,
				counts: t,
				epochSeconds: i,
				...r ? { postprocessing: r } : {},
				...l[u] ? { config: l[u] } : {}
			})), {
				ms: $,
				label: `scoreEpochs(${u} continuous)`,
				signal: s,
				cancel: o
			}).catch((e) => (v(e, s, `scoreEpochs(${u} continuous)`), console.warn("[local-processing] A descriptor-driven sleep/wake scorer failed for one contiguous run."), null));
			c && n.set(u, c);
		}
		const a = Oi(n, t.length);
		for (const [e, i] of Object.entries(a)) {
			const t = f[e] ?? new Uint8Array(d.length);
			t.set(i, w), f[e] = t, m.set(e, (m.get(e) ?? 0) + i.length);
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
function Or(e, t) {
	return {
		vector_magnitude: e.vectorMagnitude,
		axis_y: e.axisY,
		axis_x: e.axisX,
		axis_z: e.axisZ
	}[t];
}
async function Pr(e, t, n, a, i, s, r) {
	if (!e || !t || 0 === e.timestamps.byteLength) return;
	if ("counts_axis_y" !== Ia(t)?.requiredSignal) return;
	if (oa(e, t, n)) return;
	const o = new Float64Array(e.timestamps), l = i ?? H(s), c = await We(o, { day: e }, l), u = rt(Ce(t) ?? [], c), d = u !== c, p = async (e, t) => {
		const n = {
			timestamps: new Float64Array(e.timestamps),
			axisY: new Float64Array(t),
			vectorMagnitude: new Float64Array(t)
		};
		return d ? rs(l, n, c) : n;
	}, f = (e, t) => d ? ls(l, e, t, o) : t;
	let m;
	try {
		const i = [...(await Pt(e.fileId, a, r)).values()];
		if (ka.includes(t)) {
			const t = i.filter((e) => e.timestamps.byteLength > 0 && Or(e, n)).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), a = t.findIndex((t) => t.date === e.date);
			if (a < 0) return;
			const r = [];
			for (const e of t) r.push(await p(e, Or(e, n)));
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
			const r = (await Dr(l, a, n.map((e) => e.date), u, s, [t]))[e.date]?.get(t);
			if (!r?.available || !r.nonwear) return;
			const d = await Sa(/* @__PURE__ */ new Map([[t, {
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
	s?.throwIfAborted(), await Ee(e.fileId, e.date, m, a, s), s?.throwIfAborted(), Object.assign(e, m);
}
async function Fr(e, t, n, a, i, s = () => {
	I(e);
}) {
	const r = ps(n.map((e) => t[e].timestamps)), o = ps(n.map((e) => t[e].axisY)), l = ps(n.map((e) => t[e].choiAxis ?? t[e].vectorMagnitude)), c = Rr(r, a), u = await V(e, (e) => e.scoreAllDays(c.map(({ start: e, end: t }) => ({
		activityF64: o.slice(e, t),
		vmF64: l.slice(e, t),
		epochSeconds: a
	}))), {
		ms: $,
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
		const n = await V(e, (e) => e.detectNonwearChoi2011(l.slice(h.start, h.end), a), {
			ms: $,
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
function jr(e, t) {
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
function Br(e) {
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
function Lr(e, t) {
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
async function Gr(e, t) {
	return await Ge((t) => t.recordingFacts(e), new Yt(t)) ?? {};
}
async function Ur(e) {
	return me((await _e(e))?.extraSettings);
}
async function Zr(e, t, n, a) {
	n?.throwIfAborted();
	const i = await S(e, 65536, a);
	n?.throwIfAborted();
	const s = new TextDecoder("utf-8", { fatal: !1 }).decode(i);
	for (const r of [/measurement frequency\s*[,:\t]\s*(\d+)/i, /sample rate(?:\s*hz)?\s*[,:\t]\s*(\d+)/i]) {
		const e = r.exec(s);
		if (e && e[1]) {
			const t = Number.parseInt(e[1], 10);
			if (Number.isFinite(t) && t > 0) return t;
		}
	}
	return G[t];
}
async function Hr(e, t, n, a) {
	t?.throwIfAborted();
	const i = $i(e) ? _(Pi("aw5")) : re(e.name);
	if ("none" === i) return {};
	const s = Math.max(65536, 2048);
	let r;
	try {
		r = await S(e, s, a);
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
		return null === e ? {} : await Gr(e, n);
	}
	return await Gr(new TextDecoder("utf-8", { fatal: !1 }).decode(r), n);
}
function qr(e) {
	return `stored_nonwear_mask:${e}`;
}
Object.freeze([]);
const Wr = {
	temperature_epoch_stream: (e) => null != e.temperature && ga(new Float64Array(e.temperature)),
	sleep_wake_epoch_stream: (e) => null != e.algorithmResults?.[O.ACTIWARE_SLEEP_WAKE],
	device_wear_state_evidence_stream: (e) => !0 === e.actiwareOffWristChannel
};
function Vr(e) {
	const t = [];
	for (const [n, a] of Object.entries(Wr)) for (const i of e) if (a(i)) {
		t.push(n);
		break;
	}
	for (const n of da) e.some((e) => null != oa(e, n, "")) && t.push(qr(n));
	return t;
}
async function Jr(e, t, n) {
	const a = [];
	for (const r of t) {
		const t = _i(e, r);
		t && a.push(t.wire);
	}
	if (0 === a.length) return [];
	const { request: i, transfer: s } = Si(a);
	return (await n.computeCircadian(Y(i, s))).day_summaries.filter((e) => e.has_signal).map((e) => e.analysis_date);
}
function Kr(e) {
	return e instanceof Error ? e : /* @__PURE__ */ new Error("Local ingest lease renewal failed.");
}
const Yr = Math.max(1e3, Math.floor(_n / 4));
async function Xr(e) {
	void 0 !== e.heartbeatId && (clearInterval(e.heartbeatId), delete e.heartbeatId), await e.heartbeatPending, delete e.heartbeatPending;
}
async function Qr(e, t, n) {
	const a = k().scoring(), i = {
		...e.recording,
		...t.recording
	}, s = e.placement ?? {
		bodySite: a.sensorLocation,
		laterality: a.participantLaterality
	}, r = await bt({
		...t,
		...t.ggirPart2Config ? { ggirNonwearDetector: await ve(t.ggirPart2Config.csvText, n ?? H(e.signal)) } : {},
		...e.ingestProvenance ? { ingestProvenance: e.ingestProvenance } : {},
		recording: Lr(i, s)
	}, e.attemptId, e.db);
	return "started" === r.kind && (e.guard = r.guard, function(e) {
		void 0 === e.heartbeatId && (e.heartbeatId = setInterval(() => function(e) {
			const t = e.guard;
			t && void 0 === e.heartbeatError && (e.heartbeatPending = (e.heartbeatPending ?? Promise.resolve()).then(() => Ne(t, e.db)).catch((t) => {
				e.heartbeatError = t;
			}));
		}(e), Yr));
	}(e)), r;
}
async function eo(e) {
	if (await e.heartbeatPending, void 0 !== e.heartbeatError) throw Kr(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new fn();
	return await Ne(t, e.db), t;
}
async function to(e) {
	if (await Xr(e), void 0 !== e.heartbeatError) throw Kr(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new fn();
	await async function(e, t = J()) {
		try {
			return await async function(e, t = J(), a) {
				const i = t;
				for (;;) {
					a?.throwIfAborted();
					const [t, s] = await Promise.all([i.files.get(e), i.sensorNonwear.where("fileId").equals(e).count()]), r = (e, t) => JSON.stringify([
						e?.id,
						e?.seriesRevision ?? 0,
						e?.exportInputRevision ?? 0,
						e?.sourceContentHash,
						e?.sourceType,
						e?.sourceProfileId,
						t
					]), o = r(t, s), l = Vr([...(await Pt(e, i)).values()]), c = t ? Qa(t.sourceType, t.sourceProfileId) : null;
					if (c && n[c].capabilityFromSensorRows && !l.includes("device_wear_state_evidence_stream") && s > 0 && l.push("device_wear_state_evidence_stream"), void 0 === t?.id) return l;
					if (await E(i, [
						i.files,
						i.sensorNonwear,
						i.projectMeta
					], async () => {
						const t = await i.files.get(e);
						return r(t, await i.sensorNonwear.where("fileId").equals(e).count()) === o && (t && (n = t.resolvedCapabilities, s = l, void 0 === n || n.length !== s.length || !s.every((e) => n.includes(e)) || 4 !== t.resolvedCapabilitiesRevision) && await D(i, [i.files], () => i.files.update(e, {
							resolvedCapabilities: l,
							resolvedCapabilitiesRevision: 4
						}), a), !0);
						var n, s;
					}, a)) return l;
				}
			}(e, t);
		} catch {
			return console.warn("Capability refresh failed. Stored data was kept; conditional capabilities remain unavailable until the next read."), [];
		}
	}(t.fileId, e.db), e.finalizedFileId = await xt(t, e.db, e.signal), delete e.guard;
}
async function no(e, t) {
	try {
		await Xr(e);
		const t = e.guard, n = !!t && await nt(t, e.db);
		t && delete e.guard, n ? (console.warn("[local-processing] Rolled back an incomplete local ingest."), e.rollbackOutcome = "rolled_back") : e.rollbackOutcome ??= "nothing_to_roll_back";
	} catch {
		console.error("[local-processing] Incomplete local ingest rollback also failed."), e.rollbackOutcome = "failed";
	}
}
function ao(e, t) {
	return "object" == typeof e && null !== e && void 0 !== t.rollbackOutcome && (e.__localIngestRollbackOutcome = t.rollbackOutcome), e;
}
async function io(e, t, n, a, i) {
	try {
		const s = await Jr(e, t, a);
		await qe(e, t.map((e) => e.date), s, n, i);
	} catch {
		i?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}
}
function so(e, t, n, a) {
	return a <= 0 ? 0 : .9 * (e - 1 + (t - e + 1) * n / 3) / a;
}
function ro({ scope: e, fileId: t, sourceContentHash: n, signalDates: a, onChunk: i }) {
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
		i?.(c, u, 0), await eo(e), i?.(c, u, 1);
		try {
			const t = l.map((e) => e.facts);
			await xe(l.map((e) => e.day), e.db, t.every((e) => void 0 !== e) ? t : void 0, e.signal);
		} catch (f) {
			throw console.warn("[local-processing] Activity-day persistence failed."), o.activityFailed = !0, f;
		}
		o.saved += l.length;
		const d = l.map((e) => e.day.date);
		try {
			await qe(t, d, d.filter((e) => a.has(e)), e.db, e.signal);
		} catch {
			console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
		}
		i?.(c, u, 2);
		const p = l.flatMap((e) => e.history.map((t) => ({
			...t,
			date: e.day.date
		})));
		await async function(e, t, n, a, i = J(), s) {
			const r = i, o = ue(), l = a.map((a) => {
				const i = {
					fileId: e,
					date: a.date ?? t,
					appVersion: o,
					results: a.results,
					...void 0 !== n ? { sourceContentHash: n } : {}
				};
				if (null === Ye(a)) throw new Error(`Refused an algorithm run for ${String(a.algoKey ?? a.cubeConfig?.id)}: not a declared AlgorithmRunKey or a planned cube config.`);
				return void 0 !== a.cubeConfig ? {
					...i,
					cubeConfig: a.cubeConfig
				} : {
					...i,
					algoKey: a.algoKey
				};
			});
			try {
				return await st(l, r, s), !0;
			} catch {
				s?.throwIfAborted(), console.error("[local-processing] Algorithm history batch write failed; retrying records individually.");
			}
			let c = !1;
			for (const u of l) try {
				await he(u, r, s);
			} catch {
				s?.throwIfAborted(), c = !0, console.error("[local-processing] An algorithm history write failed; latest scoring remains available.");
				try {
					await lo({
						op: "algorithm_run_put",
						fileId: e,
						payload: {
							kind: "history_write_failed",
							...Ye(u),
							date: u.date,
							error: "history_write_failed"
						}
					}, r, s);
				} catch {}
			}
			return !c;
		}(t, l[0].day.date, n, p, e.db, e.signal) || (o.historyFailed = !0), i?.(c, u, 3), await Q();
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
async function oo(e, t = J(), n) {
	const a = t;
	try {
		const t = await e.identity(), s = await ft(e.fileId, a);
		await Ki({
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
			profileProofStatus: (i = t.profileProofStatus, Li(i, N, "profileProofStatus")),
			temporalBasis: Gi(t.temporalBasis),
			calibration: e.calibration,
			diaryDisposition: s.length > 0 ? "present" : "absent",
			timestampGrid: e.timestampGrid ?? "epoch_5s_floor_seconds",
			dailyRows: e.rows,
			appVersion: ue(),
			startedAt: e.startedAt,
			finishedAt: e.finishedAt ?? (/* @__PURE__ */ new Date()).toISOString()
		}, a, n);
	} catch {
		n?.throwIfAborted(), console.error("[local-processing] Execution attestation write failed; day summaries remain stored.");
	}
	var i;
}
async function lo(e, t = J(), n) {
	const a = t, { appendWal: i, withWalTx: s } = await import("./wal-ZP8v39R1.js").then((e) => e.r);
	await s([], async () => {
		await i(e);
	}, a, n);
}
async function co(e, t, n, a, i, s) {
	if (0 === n.length) return !0;
	try {
		return await eo(e), await De(t, jr(t, n), a, i), !0;
	} catch (wd) {
		return In("warn", `${s} nonwear periods not saved`, Qt(wd)), !1;
	}
}
function uo(e, t) {
	return na(void 0 === t ? void 0 : { recording: t }, e?.sensorLocation ?? g.sensor_location);
}
function po(e) {
	return function(e) {
		return as.includes(e);
	}(e) ? e : 60;
}
function fo(e) {
	const t = Mr(e?.lstmSelection);
	return {
		selection: t,
		descriptor: Tr(t.modelId),
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
let ho = 0;
const go = /* @__PURE__ */ new Set();
function yo(e, t, n) {
	if (n) {
		const e = ye(n);
		if (!En(e)) return Qe(e);
	}
	return t ?? w.SMART;
}
function wo(e, t) {
	e.invalidateQueries({ queryKey: t }).catch((e) => {
		In("warn", "Query invalidation failed", {
			...Qt(e),
			query_key: t.map(String).join(":")
		});
	});
}
const _o = {
	[a.RULE_1_INCLUDE_ACTIVITY]: "Included mid-sleep wake activity (continuous sleep follows)",
	[a.RULE_2_SMALL_PERIODS]: "Evaluated a small sleep period near onset",
	[a.RULE_3_EXTEND_BEFORE_DIARY]: "Extended onset backward through sleep preceding the diary marker",
	[a.RULE_4_NAP_VARIATION]: "Marked a long continuous block as a nap",
	[a.RULE_5_CHOI_SPIKE]: "Tolerated Choi-only nonwear (activity spike present in period)",
	[a.RULE_6_EQUIDISTANT]: "Chose between multiple candidate boundaries",
	[a.RULE_7_CROSS_DAY_NONWEAR]: "Applied cross-day diary nonwear pattern",
	[a.RULE_8_ONSET_BEFORE_INBED]: "Clamped onset to diary in-bed time (onset reported before in-bed)",
	[a.RULE_9_NAP_REGULARITY]: "Placed nap from this child's cross-day nap regularity (no diary nap logged)",
	[a.RULE_10_REGULARITY_OVERRIDE]: "Re-centered the sleep window on this child's cross-day sleep regularity",
	[a.RULE_11_RELIABILITY_FALLBACK]: "Diary unreliable for this night — anchored to accelerometry instead"
};
function vo(e) {
	const t = e.replace(/^rule_\d+_/, "").replace(/_/g, " ").trim();
	return 0 === t.length ? e : t.charAt(0).toUpperCase() + t.slice(1);
}
function bo(e) {
	return It(e, x);
}
async function So(e, t, n = x()) {
	if (null != e && e !== mt.HDCZA) return e;
	const a = (await n.ggirAppConfigSummary(t, !0)).applied.hasptAlgo;
	return Object.values(mt).includes(a) ? a : void 0;
}
async function ko(e, t, n) {
	const a = n ? await n.wearSiteHasptRouting(e, t ?? void 0) : await Wt("wearSiteHasptRouting", `${e}:${t ?? ""}`, () => x().wearSiteHasptRouting(e, t ?? void 0));
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
	return e.map((e) => Wo(e)).join(t);
}
function xo(e, t) {
	return "bigint" == typeof t ? t.toString() : t;
}
Object.fromEntries(Object.values(a).map((e) => [e, _o[e] ?? vo(e)]));
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
	for (const s of n) {
		const n = Object.getOwnPropertyDescriptor(i, s);
		n.enumerable && (n.get ? Do(e, s, () => {
			const e = t._zod.def.shape[s];
			return a ? a(e, s) : e;
		}) : Eo(e, s, a ? a(n.value, s) : n.value));
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
function Zo(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ho(e, t, n) {
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
function Wo(e) {
	return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`;
}
const Vo = (() => ({
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
	const s = n ? new Set(Ko(t, n)) : void 0, r = {};
	return Co(r, t, Reflect.ownKeys(zo(t)), e && ((t, n) => s && !s.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), Ho(t, Oo(t._zod.def, {
		shape: r,
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
function sl(e, t, n) {
	var a;
	const i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (a = e).schema ?? (a.schema = e.inst) : e.schema = e.inst);
	const s = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0, r = e.message ? e.message : nl(e.inst?._zod.def?.error?.(e)) ?? nl(s?.(e)) ?? nl(t?.error?.(e)) ?? nl(n.customError?.(e)) ?? nl(n.localeError?.(e)) ?? "Invalid input", o = {};
	for (const l of Object.keys(e)) "inst" !== l && "schema" !== l && "continue" !== l && "input" !== l && "__proto__" !== l && (o[l] = e[l]);
	return o.path ?? (o.path = []), o.message = r, t?.reportInput && (o.input = e.input), o;
}
const rl = /[\uD800-\uDBFF]/;
function ol(e) {
	const t = e.length;
	if (!rl.test(e)) return t;
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
	const s = n, r = s && /* @__PURE__ */ new WeakSet();
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
					}) : fl(e, n, a.value);
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
	const t = (n, a, i, s) => {
		const r = i ? {
			...i,
			async: !1
		} : { async: !1 }, o = n._zod.run({
			value: a,
			issues: []
		}, r);
		if (o instanceof Promise) throw new kl();
		if (o.issues.length) {
			const n = new ((s?.Err) ?? e)(o.issues.map((e) => sl(e, r, xl())));
			throw Fo(n, s?.callee ?? t), n;
		}
		return o.value;
	};
	return t;
}, Cl = (e) => {
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
			const n = new ((s?.Err) ?? e)(o.issues.map((e) => sl(e, r, xl())));
			throw Fo(n, s?.callee ?? t), n;
		}
		return o.value;
	};
	return t;
}, Ol = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		async: !1
	} : { async: !1 }, s = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (s instanceof Promise) throw new kl();
	return s.issues.length ? Pl(e, s.issues, i) : {
		success: !0,
		data: s.value
	};
};
function Pl(e, t, n) {
	let a;
	return {
		success: !1,
		get error() {
			return a || (a = new e(t.map((e) => sl(e, n, xl()))), t = void 0, n = void 0), a;
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
	let s = t._zod.run({
		value: n,
		issues: []
	}, i);
	return s instanceof Promise && (s = await s), s.issues.length ? Pl(e, s.issues, i) : {
		success: !0,
		data: s.value
	};
}, jl = Symbol.for("zod.compile.invalid"), Bl = Symbol.for("zod.compile.fallback"), Ll = (e) => {
	const t = El(e), n = (e, a, i, s) => {
		const r = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return t(e, a, r, Dl(n, s));
	};
	return n;
}, Gl = (e) => {
	const t = El(e), n = (e, a, i, s) => t(e, a, i, Dl(n, s));
	return n;
}, Ul = (e) => {
	const t = Cl(e), n = async (e, a, i, s) => {
		const r = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return await t(e, a, r, Dl(n, s));
	};
	return n;
}, Zl = (e) => {
	const t = Cl(e), n = async (e, a, i, s) => await t(e, a, i, Dl(n, s));
	return n;
}, Hl = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return Ol(e)(t, n, i);
}, ql = (e) => (t, n, a) => Ol(e)(t, n, a), Wl = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return Fl(e)(t, n, i);
}, Vl = (e) => async (t, n, a) => Fl(e)(t, n, a), Jl = /^[cC][0-9a-z]{6,}$/, Kl = /^[0-9a-z]+$/, Yl = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Xl = /^[0-9a-vA-V]{20}$/, Ql = /^[A-Za-z0-9]{27}$/, ec = /^[a-zA-Z0-9_-]{21}$/, tc = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, nc = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ac = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ic = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, sc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, rc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, oc = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, lc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, cc = /^https?$/, uc = /^\+[1-9]\d{6,14}$/, dc = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
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
	const n = t.format?.includes("int"), a = n ? "int" : "number", [i, s] = Vo[t.format];
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
}), Nc = Sl("$ZodCheckMaxLength", (e, t) => {
	var n;
	bc.init(e, t), (n = e._zod.def).when ?? (n.when = Sc), e._zod.check = (n) => {
		const a = n.value, i = a.length;
		if (("string" == typeof a && i > t.maximum ? ol(a) : i) <= t.maximum) return;
		const s = ll(a);
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
}), Mc = Sl("$ZodCheckMinLength", (e, t) => {
	var n;
	bc.init(e, t), (n = e._zod.def).when ?? (n.when = Sc), e._zod.check = (n) => {
		const a = n.value, i = a.length;
		if (("string" == typeof a && i >= t.minimum && i < 2 * t.minimum ? ol(a) : i) >= t.minimum) return;
		const s = ll(a);
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
}), $c = Sl("$ZodCheckLengthEquals", (e, t) => {
	var n;
	bc.init(e, t), (n = e._zod.def).when ?? (n.when = Sc), e._zod.check = (n) => {
		const a = n.value, i = a.length, s = "string" == typeof a && i >= t.length && i <= 2 * t.length ? ol(a) : i;
		if (s === t.length) return;
		const r = ll(a), o = s > t.length;
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
	const n = Zo(t.includes);
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
	const n = new RegExp(`^${Zo(t.prefix)}.*`);
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
	const n = new RegExp(`.*${Zo(t.suffix)}$`);
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
	for (const s of i) for (const t of s._zod.onattach) t(e);
	if (0 === i.length) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		const t = (t, n, a) => {
			if (t.memo) return t;
			let i, s = Qo(t);
			for (const r of n) {
				if (r._zod.def.when) {
					if (el(t)) continue;
					if (!r._zod.def.when(t)) continue;
				} else if (s) continue;
				const n = t.issues.length, o = r._zod.check(t);
				if (o instanceof Promise && !1 === a?.async) throw new kl();
				if (i || o instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await o, t.issues.length !== n && (il(t.issues, n, e), s || (s = Qo(t, n)));
				});
				else {
					if (t.issues.length === n) continue;
					il(t.issues, n, e), s || (s = Qo(t, n));
				}
			}
			return i ? i.then(() => t) : t;
		}, n = (n, a, s) => {
			if (Qo(n)) return n.aborted = !0, n;
			const r = t(a, i, s);
			if (r instanceof Promise) {
				if (!1 === s.async) throw new kl();
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
				if (!1 === s.async) throw new kl();
				return r.then((e) => t(e, i, s));
			}
			return t(r, i, s);
		};
	}
}, {
	get "~standard"() {
		return dl(this, "~standard", Uc(this));
	},
	set "~standard"(e) {
		ul(this, "~standard", e);
	}
}), Gc = (e, t) => e.issues.length ? { issues: e.issues.map((e) => sl(e, t, xl())) } : { value: e.value };
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
const Zc = Sl("$ZodString", (e, t) => {
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
}), Hc = Sl("$ZodStringFormat", (e, t) => {
	Rc.init(e, t), Zc.init(e, t);
}), qc = Sl("$ZodGUID", (e, t) => {
	t.pattern ?? (t.pattern = nc), Hc.init(e, t);
}), Wc = Sl("$ZodUUID", (e, t) => {
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
	Hc.init(e, t);
}), Vc = Sl("$ZodEmail", (e, t) => {
	t.pattern ?? (t.pattern = ic), Hc.init(e, t);
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
	Hc.init(e, t), e._zod.check = (n) => {
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
	t.pattern ?? (t.pattern = new RegExp("^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", "u")), Hc.init(e, t);
}), eu = Sl("$ZodNanoID", (e, t) => {
	if (void 0 !== t.length && (!Number.isInteger(t.length) || t.length < 1)) throw new Error(`Invalid nanoid length: ${t.length}`);
	var n;
	t.pattern ?? (t.pattern = void 0 === t.length ? ec : (n = t.length, new RegExp(`^[a-zA-Z0-9_-]{${n}}$`))), Hc.init(e, t);
}), tu = Sl("$ZodCUID", (e, t) => {
	t.pattern ?? (t.pattern = Jl), Hc.init(e, t);
}), nu = Sl("$ZodCUID2", (e, t) => {
	t.pattern ?? (t.pattern = Kl), Hc.init(e, t);
}), au = Sl("$ZodULID", (e, t) => {
	t.pattern ?? (t.pattern = Yl), Hc.init(e, t);
}), iu = Sl("$ZodXID", (e, t) => {
	t.pattern ?? (t.pattern = Xl), Hc.init(e, t);
}), su = Sl("$ZodKSUID", (e, t) => {
	t.pattern ?? (t.pattern = Ql), Hc.init(e, t);
}), ru = Sl("$ZodISODateTime", (e, t) => {
	t.pattern ?? (t.pattern = function(e) {
		const t = ["Z"];
		e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const n = `${mc({
			precision: e.precision,
			seconds: !0
		})}(?:${t.join("|")})`, a = e.local ? `${n}|${mc({ precision: e.precision })}` : n;
		return new RegExp(`^${dc}T(?:${a})$`);
	}(t)), Hc.init(e, t);
}), ou = Sl("$ZodISODate", (e, t) => {
	t.pattern ?? (t.pattern = fc), Hc.init(e, t);
}), lu = Sl("$ZodISOTime", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp(`^${mc(t)}$`)), Hc.init(e, t);
}), cu = Sl("$ZodISODuration", (e, t) => {
	t.pattern ?? (t.pattern = tc), Hc.init(e, t);
}), uu = Sl("$ZodIPv4", (e, t) => {
	t.pattern ?? (t.pattern = sc), Hc.init(e, t);
}), du = /^[0-9a-fA-F:.]+$/;
function pu(e) {
	return !!du.test(e) && Jc(`http://[${e}]`);
}
const fu = Sl("$ZodIPv6", (e, t) => {
	t.pattern ?? (t.pattern = rc), Hc.init(e, t), e._zod.check = (n) => {
		pu(n.value) || n.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), mu = Sl("$ZodCIDRv4", (e, t) => {
	t.pattern ?? (t.pattern = oc), Hc.init(e, t);
}), hu = Sl("$ZodCIDRv6", (e, t) => {
	t.pattern ?? (t.pattern = lc), Hc.init(e, t), e._zod.check = (n) => {
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
	t.pattern ?? (t.pattern = yu), Hc.init(e, t), e._zod.check = (n) => {
		gu(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), _u = /^[A-Za-z0-9_-]*$/, vu = Sl("$ZodBase64URL", (e, t) => {
	t.pattern ?? (t.pattern = _u), Hc.init(e, t), e._zod.check = (n) => {
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
	t.pattern ?? (t.pattern = uc), Hc.init(e, t);
}), Su = Sl("$ZodJWT", (e, t) => {
	Hc.init(e, t), e._zod.check = (n) => {
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
}), Iu = Sl("$ZodNumberFormat", (e, t) => {
	Tc.init(e, t), ku.init(e, t);
}), Au = Sl("$ZodBoolean", (e, t) => {
	Lc.init(e, t), e._zod.pattern = wc, e._zod.parse = (n, a) => {
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
			if (l instanceof Promise) r.push(l.then((t) => Mu(t, a, e)));
			else if (Mu(l, a, e), o && 0 !== l.issues.length && Qo(l)) break;
		}
		return r.length ? Promise.all(r).then(() => a) : a;
	}, function(e, t) {
		const n = al(e._zod.def.checks);
		if (!n.length) return;
		const a = Math.min(...n.map((e) => e[0])), i = e._zod.parse;
		e._zod.parse = (n, s) => {
			const r = t(n.value);
			if (r > a && !s?.skipChecks && "backward" !== s?.direction) {
				for (const [t, a] of al(e._zod.def.checks)) if (r > t && a._zod.def.when(n)) {
					const t = n.issues.length;
					return a._zod.check(n), n.issues[t].continue = !1, il(n.issues, t, e), n;
				}
			}
			return i(n, s);
		};
	}(e, Nu);
});
function Ru(e, t, n, a, i, s) {
	const r = n in a, o = "optional" === s;
	if (r || !o || "optional" !== i) {
		if (e.issues.length) {
			if (void 0 !== i && o && !r) return;
			t.issues.push(...tl(n, e.issues));
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
function Du(e) {
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
function Eu(e, t, n, a, i, s, r) {
	const o = [], l = i.keySet, c = i.catchall._zod, u = c.def.type, d = c.optin, p = c.optout;
	let f = 0;
	for (const m in t) {
		if (r && n.issues.length !== f) {
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
		inst: s,
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
	const s = jo, r = t.catchall;
	let o;
	const l = Al.memoizer;
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
				if (Qo(t, p)) break;
				p = t.issues.length;
			}
			if ("__proto__" === e) continue;
			const i = u[e], s = i._zod.optin, r = i._zod.optout, o = i._zod.run({
				value: a[e],
				issues: []
			}, n);
			o instanceof Promise ? c.push(o.then((n) => Ru(n, t, e, a, s, r))) : Ru(o, t, e, a, s, r);
		}
		return r ? Eu(c, a, t, n, i.value, e, !0 === d) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), Ou = Sl("$ZodObjectJIT", (e, t) => {
	Cu.init(e, t);
	const n = e._zod.parse, a = No(() => Du(t)), i = Al.memoizer;
	let s;
	const r = jo, o = !Al.jitless, l = o && Bo.value, c = t.catchall;
	let u;
	e._zod.parse = (d, p) => {
		u ?? (u = a.value);
		const f = d.value;
		return r(f) ? o && l && !1 === p?.async && !0 !== p.jitless ? (s || (s = ((t) => {
			const n = a.value, s = n.symbolKeys, r = new jc(["payload", "ctx"], {
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
				const n = c[e], a = "symbol" == typeof e ? `syms[${s.indexOf(e)}]` : Po(e), i = `${a} in input`, u = t[e], d = u?._zod?.optin, p = void 0 !== d, f = "optional" === u?._zod?.optout;
				if (r.write(`const ${n} = ${o(a)};`), p && f) {
					const e = "optional" === d ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
					r.write(`\n        const ${n}_present = ${i};\n        if (!${n}.issues.length || ${n}_present) {\n          if (${n}.issues.length) {${l(n, a)}\n          }\n\n          if (${e}) {\n            newResult[${a}] = ${n}.value;\n          }\n        }\n\n      `);
				} else p ? (r.write(`\n        if (${n}.issues.length) {${l(n, a)}\n        }\n      `), "defaulted" === d ? r.write(`newResult[${a}] = ${n}.value;`) : r.write(`\n        if (${n}.value !== undefined || ${i}) {\n          newResult[${a}] = ${n}.value;\n        }\n      `)) : r.write(`\n        const ${n}_present = ${i};\n        if (${n}.issues.length) {${l(n, a)}\n        }\n        if (!${n}_present && !${n}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${a}]\n          });\n          if (ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }\n        }\n\n        if (${n}_present) {\n          newResult[${a}] = ${n}.value;\n        }\n\n      `);
			}
			return r.write("payload.value = newResult;"), r.write("return payload;"), r.compile();
		})(t.shape)), d = s(d, p), c ? Eu([], f, d, p, u, e, !0 === p?.abortEarly) : d) : n(d, p) : (d.issues.push({
			expected: "object",
			code: "invalid_type",
			input: f,
			inst: e
		}), d);
	};
});
function Pu(e, t, n, a) {
	for (const s of e) if (0 === s.issues.length) return t.value = s.value, t;
	const i = e.filter((e) => !Qo(e));
	return 1 === i.length ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => sl(e, a, xl())))
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
		return s ? Promise.all(r).then((t) => Pu(t, a, e, i)) : Pu(r, a, e, i);
	};
}), ju = Sl("$ZodIntersection", (e, t) => {
	Lc.init(e, t), e._zod.parse = (e, n) => {
		const a = e.value, i = t.left._zod.run({
			value: a,
			issues: []
		}, n), s = t.right._zod.run({
			value: a,
			issues: []
		}, n);
		return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([t, n]) => Lu(e, t, n)) : Lu(e, i, s);
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
		for (const s of a) {
			if ("__proto__" === s) continue;
			const n = Bu(e[s], t[s]);
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
		const s = a.value;
		if (!Lo(s)) return a.issues.push({
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
						issues: o.issues.map((e) => sl(e, i, xl())),
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
					e.issues.length && a.issues.push(...tl(n, e.issues)), a.value[c] = e.value;
				})) : (u.issues.length && a.issues.push(...tl(n, u.issues)), a.value[c] = u.value);
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
				if ("string" == typeof n && yc.test(n) && c.issues.length) {
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
						issues: c.issues.map((e) => sl(e, i, xl())),
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
					e.issues.length && a.issues.push(...tl(n, e.issues)), a.value[u] = e.value;
				})) : (d.issues.length && a.issues.push(...tl(n, d.issues)), a.value[u] = d.value);
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
}), Uu = Sl("$ZodEnum", (e, t) => {
	Lc.init(e, t);
	const n = Io(t.entries), a = new Set(n);
	e._zod.values = a, yl(e, "pattern", (e) => {
		const t = Io(e.def.entries).filter((e) => Uo.has(typeof e));
		return new RegExp(t.length ? `^(${t.map((e) => Zo(e.toString())).join("|")})$` : "^[^\\s\\S]$");
	}), e._zod.parse = (t, i) => {
		const s = t.value;
		return a.has(s) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: s,
			inst: e
		}), t;
	};
}), Zu = Sl("$ZodTransform", (e, t) => {
	Lc.init(e, t), e._zod.optin = "optional", Al.memoizer?.guard(e), e._zod.parse = (n, a) => {
		if ("backward" === a.direction) throw new Il(e.constructor.name);
		const i = t.transform(n.value, n);
		if (a.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new kl();
		return n.value = i, n;
	};
});
function Hu(e, t) {
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
			return a instanceof Promise ? a.then((t) => Hu(e, t)) : Hu(e, a);
		}
		return t.innerType._zod.run(e, n);
	};
}), Wu = Sl("$ZodExactOptional", (e, t) => {
	qu.init(e, t), yl(e, "values", (e) => e.def.innerType._zod.values), yl(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), Vu = Sl("$ZodNullable", (e, t) => {
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
		error: { issues: t.issues.map((e) => sl(e, a, xl())) },
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
		return a instanceof Promise ? a.then(sd) : sd(a);
	};
});
function sd(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
const rd = Sl("$ZodCustom", (e, t) => {
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
	const s = (e) => {
		if (2 !== i && e?._zod) {
			const a = md(e, t, n);
			a > i && (i = a);
		}
	}, r = (e) => {
		e > i && (i = e);
	}, o = e._zod.def;
	switch (o.type) {
		case "object": {
			const e = Ro(o);
			r(e ? ((e) => {
				let a = 0;
				for (const i of Reflect.ownKeys(e)) {
					const s = Object.getOwnPropertyDescriptor(e, i);
					if (!s.enumerable) continue;
					const r = s.get ? 1 : s.value?._zod ? md(s.value, t, n) : 0;
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
			r(a ? md(a, t, !1) : 1);
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
		let n, a, i, s = !1;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			const t = e._zod.parse, r = (o, l) => {
				if (void 0 === n) {
					const a = md(e, /* @__PURE__ */ new Set(), !1);
					if (0 === a) return e._zod.parse = t, e._zod.run === r && (e._zod.run = t), t(o, l);
					2 === a || s ? n = !0 : s = !0;
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
			e._zod.parse = r, e._zod.run === t && (e._zod.run = r);
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
			case "invalid_value": return 1 === e.values.length ? `Invalid input: expected ${Wo(e.values[0])}` : `Invalid option: expected one of ${Ao(e.values, "|")}`;
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
	const s = "function" == typeof t.unrepresentable ? t.unrepresentable({
		zodSchema: e,
		path: a.path,
		message: i
	}) : t.unrepresentable;
	if ("any" === s) return !1;
	if (void 0 === s || "throw" === s) throw new Error(i);
	return Object.assign(n, s), !0;
}
function Cd(e, t, n = {
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
		s && (r.ref || (r.ref = s), Cd(s, t, a), t.seen.get(s).isParent = !0);
	}
	const l = t.metadataRegistry.get(e);
	return l && zd(r.schema, l), "input" === t.io && Hd(e) && (delete r.schema.examples, delete r.schema.default), "input" === t.io && "_prefault" in r.schema && ((a = r.schema).default ?? (a.default = r.schema._prefault)), delete r.schema._prefault, t.seen.get(e).schema;
}
function Od(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Pd(e, t) {
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
					ref: `${i("__shared")}#/${a}/${Od(s)}`
				};
			}
			const i = `#/${a}/`;
			if (t[1] === n && !t[1].schema.id) return { ref: "#" };
			const s = t[1].schema.id ?? "__schema" + e.counter++;
			return {
				defId: s,
				ref: i + Od(s)
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
	for (const s of e) {
		if ("object" != typeof s || "object" !== s.type) return null;
		for (const e in s) if (!jd.has(e)) return null;
		t.push(s);
	}
	const n = {}, a = /* @__PURE__ */ new Set();
	for (const s of t) {
		for (const e in s.properties) {
			if (Object.prototype.hasOwnProperty.call(n, e)) continue;
			const a = [];
			for (const n of t) {
				const t = n.properties?.[e] ?? Ld(n);
				null != t && (a.some((e) => JSON.stringify(e) === JSON.stringify(t)) || a.push(t));
			}
			$o(n, e, 1 === a.length ? a[0] : Gd(a) ?? { allOf: a });
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
		const s = t.filter((t) => t !== e), r = e[i].map((e) => Gd([...s, e]));
		if (r.some((e) => !e)) return;
		a = { [i]: r };
	} else a = Gd(t);
	a && (delete e.allOf, zd(e, a));
}
function Zd(e, t) {
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
	const s = e.metadataRegistry.get(t)?.id;
	void 0 !== s && i.id === s && delete i.id;
	const r = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (const l of e.seen.entries()) {
		const e = l[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, $o(r, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(r).length > 0 && ("draft-2020-12" === e.target ? i.$defs = r : i.definitions = r);
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
function Hd(e, t) {
	const n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	const a = e._zod.def;
	if ("transform" === a.type) return !0;
	if ("array" === a.type) return Hd(a.element, n);
	if ("set" === a.type) return Hd(a.valueType, n);
	if ("lazy" === a.type) return Hd(a.getter(), n);
	if ("promise" === a.type || "optional" === a.type || "nonoptional" === a.type || "nullable" === a.type || "readonly" === a.type || "default" === a.type || "prefault" === a.type || "catch" === a.type) return Hd(a.innerType, n);
	if ("intersection" === a.type) return Hd(a.left, n) || Hd(a.right, n);
	if ("record" === a.type || "map" === a.type) return Hd(a.keyType, n) || Hd(a.valueType, n);
	if ("pipe" === a.type) return !!e._zod.traits.has("$ZodCodec") || Hd(a.in, n) || Hd(a.out, n);
	if ("object" === a.type) {
		for (const e in a.shape) if (Hd(a.shape[e], n)) return !0;
		return !1;
	}
	if ("union" === a.type) {
		for (const e of a.options) if (Hd(e, n)) return !0;
		return !1;
	}
	if ("tuple" === a.type) {
		for (const e of a.items) if (Hd(e, n)) return !0;
		return !(!a.rest || !Hd(a.rest, n));
	}
	return !1;
}
const qd = (e, t, n = {}) => (a) => {
	const { libraryOptions: i, target: s } = a ?? {}, r = Dd({
		...i ?? {},
		target: s,
		io: t,
		processors: n
	});
	return Cd(e, r), Pd(r, e), Zd(r, e);
}, Wd = (e, t, n) => {
	(void 0 === e[t] || n > e[t]) && (e[t] = n);
}, Vd = (e, t, n) => {
	(void 0 === e[t] || n < e[t]) && (e[t] = n);
}, Jd = (e, t) => {
	Wd(e, "minimum", t), Vd(e, "maximum", t);
}, Kd = (e, t) => {
	e.multipleOf ?? (e.multipleOf = []), e.multipleOf.includes(t) || e.multipleOf.push(t);
}, Yd = (e, t) => {
	e.patterns ?? (e.patterns = /* @__PURE__ */ new Set()), e.patterns.add(t);
}, Xd = (e, t) => {
	e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
}, Qd = (e, t) => {
	e.format = t, t.includes("int") && (e.isInt = !0);
}, ep = (e, t) => Wd(e, "minimum", t.minimum), tp = (e, t) => Vd(e, "maximum", t.maximum), np = (e) => (t, n) => {
	Qd(t, n.format);
	const [a, i] = e[n.format];
	Wd(t, "minimum", a), Vd(t, "maximum", i);
}, ap = {
	greater_than: (e, t) => Wd(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
	less_than: (e, t) => Vd(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
	multiple_of: (e, t) => Kd(e, t.value),
	number_format: np(Vo),
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
	for (const s of a) ap[s._zod.def.check]?.(t, s._zod.def);
	const i = e._zod.bag;
	void 0 !== i.minimum && Wd(t, "minimum", i.minimum), void 0 !== i.exclusiveMinimum && Wd(t, "exclusiveMinimum", i.exclusiveMinimum), void 0 !== i.maximum && Vd(t, "maximum", i.maximum), void 0 !== i.exclusiveMaximum && Vd(t, "exclusiveMaximum", i.exclusiveMaximum), void 0 !== i.multipleOf && Kd(t, i.multipleOf), void 0 !== i.format && (t.format ?? (t.format = i.format), i.format.includes("int") && (t.isInt = !0)), i.mime && Xd(t, i.mime);
	for (const s of i.patterns ?? []) Yd(t, s);
	return t;
}
const sp = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, rp = /* @__PURE__ */ new Map([[yu, /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/], [_u, /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/]]), op = (e) => rp.get(e) ?? e;
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
	const a = Array.isArray(t.type) ? t.type : [t.type], i = !a.includes("string") && a.some((e) => "number" === e || "integer" === e), s = t.enum ?? (void 0 !== t.const ? [t.const] : void 0);
	if (!i && !s?.some((e) => "number" == typeof e)) return t;
	const { minimum: r, maximum: o, exclusiveMinimum: l, exclusiveMaximum: c, multipleOf: u, format: d, id: p, ...f } = t;
	return f.enum ? f.enum = f.enum.map((e) => "number" == typeof e ? String(e) : e) : "number" == typeof f.const && (f.const = String(f.const)), i ? (f.type = "string", s || (f.pattern = (a.includes("number") ? yc : gc).source), f) : f;
}
const up = /* @__PURE__ */ new WeakMap(), dp = Symbol();
function pp(e, t, n, a, i) {
	let s = !1;
	const r = JSON.stringify(e, (e, t) => "bigint" != typeof t ? t : (s = !0, null));
	return s ? (Ed(t, n, a, i, "BigInt defaults cannot be represented in JSON Schema"), dp) : JSON.parse(r);
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
}, yp = Sl("ZodError", gp, void 0, { Parent: Error }), wp = El(yp), _p = Cl(yp), vp = Ol(yp), bp = Fl(yp), Sp = Ll(yp), kp = Gl(yp), Ip = Ul(yp), Ap = Zl(yp), xp = Hl(yp), Tp = ql(yp), Np = Wl(yp), Mp = Vl(yp);
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
		return Ho(this, e, t);
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
				let s;
				if (i ? (a[Bl] = !0, s = i({
					value: t,
					issues: []
				}, a)) : s = e._zod.run({
					value: t,
					issues: []
				}, a), s instanceof Promise) throw new kl();
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
			return Cd(e, a), Pd(a, e), Zd(a, e);
		})(this, {})(e);
	},
	get description() {
		return vd.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), zp = Sl("_ZodString", (e, t) => {
	Zc.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = n;
		a.type = "string";
		const { minimum: i, maximum: s, format: r, patterns: o, contentEncoding: l, laxFormat: c } = ip(e);
		if ("number" == typeof i && (a.minLength = i), "number" == typeof s && (a.maxLength = s), r && (a.format = sp[r] ?? r, "" === a.format && delete a.format, ("time" === r || c) && delete a.format), l && (a.contentEncoding = l), o && o.size > 0) {
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
	Zc.init(e, t), zp.init(e, t);
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
			return new sf({
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
			return new Zp({
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
			return new Hp({
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
			return new Wp({
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
			return new Vp({
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
	Hc.init(e, t), zp.init(e, t);
}), Op = Sl("ZodISODateTime", (e, t) => {
	ru.init(e, t), Cp.init(e, t);
}), Pp = Sl("ZodISODate", (e, t) => {
	ou.init(e, t), Cp.init(e, t);
}), Fp = Sl("ZodISOTime", (e, t) => {
	lu.init(e, t), Cp.init(e, t);
}), jp = Sl("ZodISODuration", (e, t) => {
	cu.init(e, t), Cp.init(e, t);
}), Bp = Sl("ZodEmail", (e, t) => {
	Vc.init(e, t), Cp.init(e, t);
}), Lp = Sl("ZodGUID", (e, t) => {
	qc.init(e, t), Cp.init(e, t);
}), Gp = Sl("ZodUUID", (e, t) => {
	Wc.init(e, t), Cp.init(e, t);
}), Up = Sl("ZodURL", (e, t) => {
	Xc.init(e, t), Cp.init(e, t);
}), Zp = Sl("ZodEmoji", (e, t) => {
	Qc.init(e, t), Cp.init(e, t);
}), Hp = Sl("ZodNanoID", (e, t) => {
	eu.init(e, t), Cp.init(e, t);
}), qp = Sl("ZodCUID", (e, t) => {
	tu.init(e, t), Cp.init(e, t);
}), Wp = Sl("ZodCUID2", (e, t) => {
	nu.init(e, t), Cp.init(e, t);
}), Vp = Sl("ZodULID", (e, t) => {
	au.init(e, t), Cp.init(e, t);
}), Jp = Sl("ZodXID", (e, t) => {
	iu.init(e, t), Cp.init(e, t);
}), Kp = Sl("ZodKSUID", (e, t) => {
	su.init(e, t), Cp.init(e, t);
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
}), sf = Sl("ZodJWT", (e, t) => {
	Su.init(e, t), Cp.init(e, t);
}), rf = Sl("ZodNumber", (e, t) => {
	ku.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, { minimum: s, maximum: r, multipleOf: o, exclusiveMaximum: l, exclusiveMinimum: c, isInt: u } = ip(e);
		i.type = u ? "integer" : "number";
		const d = "number" == typeof c && c >= (s ?? Number.NEGATIVE_INFINITY), p = "number" == typeof l && l <= (r ?? Number.POSITIVE_INFINITY), f = "draft-04" === t.target || "openapi-3.0" === t.target;
		if (d ? f ? (i.minimum = c, i.exclusiveMinimum = !0) : i.exclusiveMinimum = c : "number" == typeof s && (i.minimum = s), p ? f ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : "number" == typeof r && (i.maximum = r), o) {
			const n = /* @__PURE__ */ new Set();
			for (const l of o) Number.isFinite(l) && 0 !== l ? n.add(Math.abs(l)) : Ed(e, t, i, a, `A multipleOf divisor of ${l} cannot be represented in JSON Schema`);
			const [s, ...r] = n;
			void 0 !== s && (i.multipleOf = s), r.length && (i.allOf = [...i.allOf ?? [], ...r.map((e) => ({ multipleOf: e }))]);
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
		return new rf(bd({
			type: "number",
			checks: [],
			...qo(t)
		}));
	}(0, e);
}
const lf = Sl("ZodNumberFormat", (e, t) => {
	Iu.init(e, t), rf.init(e, t);
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
		const i = n, s = e._zod.def, { minimum: r, maximum: o } = ip(e);
		"number" == typeof r && (i.minItems = r), "number" == typeof o && (i.maxItems = o), i.type = "array", i.items = Cd(s.element, t, {
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
		const i = n, s = e._zod.def, r = s.shape;
		if (Object.getOwnPropertySymbols(r).length && Ed(e, t, i, a, "Symbol keys cannot be represented in JSON Schema")) return;
		i.type = "object", i.properties = {};
		for (const l in r) $o(i.properties, l, Cd(r[l], t, {
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
			("input" === t.io ? void 0 === lp(e) : void 0 === e._zod.optout) && o.push(l);
		}
		o.length > 0 && (i.required = o), "never" === s.catchall?._zod.def.type ? i.additionalProperties = !1 : s.catchall ? s.catchall && (i.additionalProperties = Cd(s.catchall, t, {
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
			return Ho(e, Oo(e._zod.def, { shape: Yo(e, t) }));
		}(this, e);
	},
	safeExtend(e) {
		return function(e, t) {
			if (!Lo(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
			return Ho(e, Oo(e._zod.def, { shape: Yo(e, t) }));
		}(this, e);
	},
	merge(e) {
		return function(e, t) {
			if (!t?._zod?.def) throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
			if (e._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
			const n = {};
			return Co(n, e, Reflect.ownKeys(zo(e))), Co(n, t, Reflect.ownKeys(zo(t))), Ho(e, Oo(e._zod.def, {
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
			return Co(i, e, Ko(e, t)), Ho(e, Oo(n, {
				shape: i,
				checks: []
			}));
		}(this, e);
	},
	omit(e) {
		return function(e, t) {
			const n = e._zod.def, a = n.checks;
			if (a && a.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
			const i = new Set(Ko(e, t)), s = {};
			return Co(s, e, Reflect.ownKeys(zo(e)).filter((e) => !i.has(e))), Ho(e, Oo(n, {
				shape: s,
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
			})), Ho(t, Oo(t._zod.def, { shape: i }));
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
		const i = e._zod.def, s = !1 === i.inclusive, r = i.options.map((e, n) => Cd(e, t, {
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
function vf(e, t) {
	return new _f({
		type: "union",
		options: e,
		...qo(t)
	});
}
const bf = Sl("ZodIntersection", (e, t) => {
	ju.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = Cd(i.left, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				0
			]
		}), r = Cd(i.right, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				1
			]
		}), o = (e) => "allOf" in e && 1 === Object.keys(e).length, l = [...o(s) ? s.allOf : [s], ...o(r) ? r.allOf : [r]];
		n.allOf = l, t.intersections.push(l);
	})(e, t, n, a);
}), Sf = Sl("ZodRecord", (e, t) => {
	$p(), Gu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, s = e._zod.def;
		i.type = "object";
		const r = s.keyType, o = ip(r).patterns;
		if ("loose" === s.mode && o && o.size > 0) {
			const e = Cd(s.valueType, t, {
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
				i.propertyNames = Cd(s.keyType, t, {
					...a,
					path: [...a.path, "propertyNames"]
				});
				let n = up.get(t);
				n || (n = [], up.set(t, n), t.deferred.push(() => function(e) {
					const t = /* @__PURE__ */ new Map();
					for (const a of e.seen.values()) a.def && !t.has(a.schema) && t.set(a.schema, a);
					const n = /* @__PURE__ */ new Map();
					for (const a of up.get(e) ?? []) {
						const i = e.seen.get(a), s = (i?.def ?? i?.schema)?.propertyNames;
						if (!s || !0 === s || n.has(s)) continue;
						const r = cp(t, s, /* @__PURE__ */ new Set());
						r !== s && n.set(s, r);
					}
					if (n.size) for (const a of e.seen.values()) for (const e of [a.schema, a.def]) {
						const t = e && n.get(e.propertyNames);
						t && (e.propertyNames = t);
					}
				}(t))), n.push(e);
			}
			i.additionalProperties = Cd(s.valueType, t, {
				...a,
				path: [...a.path, "additionalProperties"]
			});
		}
		const l = r._zod.values, c = "input" === t.io && void 0 !== lp(s.valueType);
		if (l && !s.partial && !c) {
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
		for (const s of e) {
			if (!n.has(s)) throw new Error(`Key ${s} not found in enum`);
			i[s] = t.entries[s];
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
	$p(), Zu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
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
	Wu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => fp(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), $f = Sl("ZodNullable", (e, t) => {
	Vu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = Cd(i.innerType, t, a), r = t.seen.get(e);
		"openapi-3.0" === t.target ? (r.ref = i.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
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
		const s = pp(i.defaultValue, e, t, n, a);
		s !== dp && (n.default = s);
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
}), Df = Sl("ZodPrefault", (e, t) => {
	Yu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		if (Cd(i.innerType, t, a), t.seen.get(e).ref = i.innerType, "input" !== t.io) return;
		const s = pp(i.defaultValue, e, t, n, a);
		s !== dp && (n._prefault = s);
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
}), Ef = Sl("ZodNonOptional", (e, t) => {
	Xu.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Cd(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
	})(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), Cf = Sl("ZodCatch", (e, t) => {
	td.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		let s;
		Cd(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
		try {
			s = i.catchValue(void 0);
		} catch {
			Ed(e, t, n, a, "Dynamic catch values are not supported in JSON Schema");
			return;
		}
		n.default = s;
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
}), Of = Sl("ZodPipe", (e, t) => {
	nd.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, s = i.in._zod.traits.has("$ZodTransform"), r = "input" === t.io ? s ? i.out : i.in : i.out;
		Cd(r, t, a), t.seen.get(e).ref = r;
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
	rd.init(e, t), Rp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		Ed(e, t, n, a, "Custom types cannot be represented in JSON Schema");
	})(e, t, n, a);
}), Bf = Af((Lf = R, Object.values(Lf)));
var Lf;
wf({
	password: Ep(),
	username: Ep().max(100, "Username must be 100 characters or fewer")
});
const Gf = wf({
	onset_timestamp: of().nullable().optional(),
	offset_timestamp: of().nullable().optional(),
	marker_index: of().int().default(1),
	marker_type: Bf.default(R.MAIN_SLEEP)
}), Uf = wf({
	start_timestamp: of().nullable().optional(),
	end_timestamp: of().nullable().optional(),
	marker_index: of().int().default(1)
}), Zf = (wf({
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
})), Hf = wf({
	resolution_id: Ep(),
	epoch_length_seconds: of().int().positive(),
	category: Ep(),
	source_type: Ep().nullable().optional(),
	derived_from_resolution_id: Ep().nullable().optional(),
	aggregation_method: Ep().nullable().optional(),
	data: Zf,
	algorithm_results: gf(of()).nullable().optional(),
	nonwear_results: gf(of()).nullable().optional()
}), qf = (wf({
	data: Zf.optional(),
	epoch_resolutions: gf(Hf).optional().default([]),
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
	device_nonwear_source: Af(ie).nullable().optional(),
	algorithmic_nonwear_masks: kf(Ep(), gf(of())).optional()
}), f.diary_tolerance_minutes, f.nap_min_consecutive_epochs, f.epoch_length_seconds, () => r.waitFor(import("./cube-variants-Ct3H0jB1.js"))), Wf = {
	warmVariantsForDay: async (...e) => (await qf()).scoreCountBasedHasibVariantsForDay(...e),
	withRecordingWakeThreshold: async (...e) => (await qf()).withRecordingWakeThreshold(...e)
};
function Vf(e, t, n) {
	return null != e[n] && e.covers(t);
}
function Jf(e, t, n) {
	return e.find((e) => Vf(e, t, n));
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
	const s = a.score, r = a.verdict, o = a.infinite_reason, l = {}, c = [], u = t.per_guider;
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
const am = /^[0-9a-f]{64}$/;
var im = class extends Error {
	constructor(e = !1) {
		super(e ? "Stored complexity evidence failed integrity verification." : "Complexity evidence failed integrity verification."), this.name = "ComplexityEvidenceIntegrityError";
	}
}, sm = class extends Error {
	constructor() {
		super("Complexity evidence diverged for an existing generation."), this.name = "ComplexityEvidenceDivergenceError";
	}
}, rm = class extends Error {
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
	return ce(um(e));
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
	const i = await ce(e);
	return void 0 !== t && t !== i && om(), i;
}
function hm(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != typeof t || null === e || null === t) return !1;
	if (Array.isArray(e) || Array.isArray(t)) return !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((e, n) => hm(e, t[n]));
	if ("object" != typeof e || "object" != typeof t) return !1;
	const n = Object.keys(e).sort(), a = Object.keys(t).sort();
	if (n.length !== a.length || n.some((e, t) => e !== a[t])) return !1;
	const i = e, s = t;
	return n.every((e) => hm(i[e], s[e]));
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
		const e = n, a = e.guider, i = e.detector, s = e.onset_ts, r = e.offset_ts;
		(!ym(e, [
			"guider",
			"detector",
			"onset_ts",
			"offset_ts"
		]) || "string" != typeof a || 0 === a.length || t.has(a) || !_m(i) || null !== s && !wm(s) || null !== r && !wm(r) || null === s && null === r) && om(), t.set(a, {
			detector: i,
			onset: s,
			offset: r
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
	const s = /* @__PURE__ */ new Set();
	for (const o of i) {
		(null === o || "object" != typeof o || Array.isArray(o)) && om();
		const e = o;
		ym(e, Kf) || om();
		const t = e.analysis_date, n = e.epoch_length_seconds, a = e.timestamps, i = e.activity_counts, r = e.sleep_scores, l = e.choi_nonwear, c = e.diary_nap_count, u = e.anglez, d = e.light, p = e.temperature, f = e.heart_rate, m = e.detach_nonwear, h = e.is_weekend, g = e.calibration_error, y = e.imputed_fraction;
		!("string" != typeof t || 0 === t.length || s.has(t) || "number" != typeof n || !Number.isInteger(n) || n <= 0) && vm(a) && 0 !== a.length && vm(i) && i.length === a.length && bm(r) && r.length === a.length && bm(l) && Sm(l, a.length) && Number.isInteger(c) && !(c < 0) && _m(e.diary_onset_time) && _m(e.diary_wake_time) && _m(e.diary_in_bed_time) && _m(e.diary_out_bed_time) && (null === h || "boolean" == typeof h) && vm(u) && Sm(u, a.length) && vm(d) && Sm(d, a.length) && vm(p) && Sm(p, a.length) && vm(f) && Sm(f, a.length) && bm(m) && Sm(m, a.length) && (null === g || wm(g)) && (null === y || !(!wm(y) || y < 0 || y > 1)) || om(), km(e.sensor_nonwear), Im(e.diary_naps, c), Am(e.diary_nonwear);
		const _ = xm(e.guider_targets), v = Tm(e.hdcza_window), b = _.get(w.HDCZA);
		(null === v && void 0 !== b || null !== v && (void 0 === b || null !== b.detector || b.onset !== v[0] || b.offset !== v[1])) && om(), s.add(t);
	}
	const r = n;
	return hm(gm(t), Qf(r)) || om(), {
		difficulty: r,
		dates: s
	};
}
function Mm(e, t, n, a) {
	ym(t, ["config", "days"]) || om(), hm(t.config, e.difficulty.config ?? null) || om();
	const i = t.days;
	Array.isArray(i) && i.length === e.difficulty.days.length || om();
	for (let o = 0; o < i.length; o += 1) {
		const t = i[o], n = e.difficulty.days[o];
		(null === t || "object" != typeof t || Array.isArray(t) || null === n || "object" != typeof n || Array.isArray(n)) && om();
		const a = t, s = n;
		ym(a, [
			"analysis_date",
			"epoch_length_seconds",
			"timestamps"
		]) && a.analysis_date === s.analysis_date && a.epoch_length_seconds === s.epoch_length_seconds && hm(a.timestamps, s.timestamps) || om();
	}
	const s = Object.keys(n);
	(s.length !== e.dates.size || s.some((t) => !e.dates.has(t))) && om();
	const r = new Map(e.difficulty.days.map((e) => [e.analysis_date, e]));
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
			const t = n, a = r.get(e);
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
	const s = {
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
	await $m(s) !== e.generationKey && om(), await pm(n) !== e.projectionSha256 && om(), await pm(a) !== e.difficultyResultSha256 && om(), null !== i && await pm(i) !== e.signalsResultSha256 && om();
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
	return await zm(r) !== e.recordSha256 && om(), r;
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
	await ra({
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
async function Fm(e, t, n = J()) {
	const [a, i] = await n.transaction("r", [n.files, n.complexityEvidence], async () => Promise.all([n.complexityEvidence.where("[fileId+generationKey]").equals([e, t]).first(), n.files.get(e)]));
	if (!a) return;
	const s = await Cm(a);
	return Om(s, i, !0), s;
}
function jm(e, t, n, a) {
	return null === a ? null : {
		...a,
		binding: a?.binding ?? Ve.captureWorkspaceBinding(e, t, n)
	};
}
async function Bm(e, t = x()) {
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
	const t = k().scoring(), n = [li(pe(t, e).nonwearDetectorsCounts, t.showChoiNonwear), li(Ke(t.nonwearDetectorsGgir, e), t.showChoiNonwear)];
	return n.filter((e, t) => n.findIndex((t) => Xa(t) === Xa(e)) === t);
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
function Zm(e, t) {
	return e ? {
		detectors: [...e.detectors],
		any: Uint8Array.from(e.mask).buffer,
		weight: e.weight ? Float64Array.from(e.weight).buffer : null,
		grid: e.grid === t.timestamps ? "counts" : "ggir"
	} : null;
}
async function Hm(e, { file: t, sets: n, capsense: a, db: i, signal: s }) {
	const r = n.filter((t) => !(Xa(t) in (e.displayNonwear ?? {})));
	if (0 === r.length) return;
	const o = H(s), l = await za(e, Bn, "navigation facts", Aa(), o);
	if (!l) return;
	Sn(l.timestamps, sn(e, t));
	const c = Qa(t.sourceType, t.sourceProfileId), u = {};
	for (const [m, h] of Object.entries(l.nonwearMasksByDetector)) 0 === h.length || bi(m) || (u[m] = h);
	const d = {
		algorithmicNonwearMasks: u,
		timestamps: l.timestamps,
		ggirTimestamps: l.ggirTimestamps,
		sensorNonwearPeriods: "detach_mask" === Ka(c) && l.detachNonwear ? Gm(l.detachNonwear, l.timestamps) : a,
		deviceNonwearSource: c
	}, p = { ...e.displayNonwear }, f = await Promise.all(r.map((e) => (s?.throwIfAborted(), ci(d, e, o))));
	for (const [m, h] of r.entries()) p[Xa(h)] = Zm(f[m], d);
	await un(e.fileId, e.date, p, {
		seriesRevision: t.seriesRevision ?? 0,
		nonwearBandGeneration: t.nonwearBandGeneration ?? 0
	}, i, s);
}
const qm = /* @__PURE__ */ new WeakMap();
function Wm(e, t, n) {
	let a = qm.get(t);
	a || qm.set(t, a = /* @__PURE__ */ new Map());
	const i = a.get(e);
	if (i) return T(i, n);
	const s = async function(e, t, n) {
		n?.throwIfAborted();
		const a = await Xe(e, t);
		if (!a || "incomplete" === a.ingestState) return;
		const i = await yt(e, t);
		let s = a.navigationFacts;
		(function(e, t) {
			const n = e?.navigationFacts;
			if (!e || 1 !== n?.version) return !1;
			const a = Um(e, t);
			return n.dates.length === a.length && n.dates.every((e, t) => e === a[t]);
		})(a, i) || (s = await async function(e, t, n, a) {
			const i = H(a), s = {}, r = async (e) => {
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
			const c = await ri(n), u = await Ya(e, c, a), d = [...new Set([u.zone, u.reason ? c : null].filter((e) => Boolean(e)))], p = {};
			return await Ge((t) => {
				for (const n of d) {
					const a = {};
					for (const i of e.availableDates) {
						const e = t.dstTransitionOnNight(n, i);
						e && (a[i] = e);
					}
					p[n] = a;
				}
			}, new Yt(i)), {
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
		}(a, Um(a, i), t, n), n?.throwIfAborted(), await t.files.update(e, { navigationFacts: s }));
		const r = Lm(a), o = r.map(Xa), l = a.seriesRevision ?? 0;
		if (s?.bands?.seriesRevision === l && o.every((e) => s.bands.keys.includes(e))) return;
		const c = "sensor_rows" === Ka(Qa(a.sourceType, a.sourceProfileId)) ? (await Vt(e, t)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : [];
		for (const u of i) {
			n?.throwIfAborted();
			const i = await Mt(e, u, t);
			i && await Hm(i, {
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
function Vm(e, t) {
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
function th(e, n) {
	const a = t({
		action: n ?? "",
		payload: e
	}), i = a.payload ?? e;
	switch (void 0 === n ? void 0 : a.action) {
		case "session_start": {
			const e = Array.isArray(i.sleepMarkers) ? i.sleepMarkers : [], t = Array.isArray(i.nonwearMarkers) ? i.nonwearMarkers : [];
			let n = `Loaded ${e.length} sleep, ${t.length} nonwear`;
			return i.isInvalidNight && (n += " | Invalid Night"), i.needsConsensus && (n += " | Flagged"), n;
		}
		case "session_end": return "Session ended";
		case "marker_placed": {
			const e = i.category ?? "sleep", t = i.periodIndex ?? "?", n = i.markerType ? ` (${i.markerType})` : "";
			return "onsetTimestamp" in i ? `${e} #${t}${n}: ${Km(i.onsetTimestamp)}–${Km(i.offsetTimestamp)}` : "startTimestamp" in i ? `${e} #${t}: ${Km(i.startTimestamp)}–${Km(i.endTimestamp)}` : `${e} #${t}${n}`;
		}
		case "sleep_period_split": return `sleep #${i.periodIndex ?? "?"} split at ${Km(i.at)}`;
		case "sleep_period_merged": return `sleep #${i.periodIndex ?? "?"} merged ${i.direction ?? "?"}`;
		case "marker_adjusted": {
			const e = i.updates ?? {}, t = i.category ?? "?", n = i.periodIndex ?? "?", a = [];
			return void 0 !== e.onsetTimestamp && a.push(`onset → ${Km(e.onsetTimestamp)}`), void 0 !== e.offsetTimestamp && a.push(`offset → ${Km(e.offsetTimestamp)}`), void 0 !== e.startTimestamp && a.push(`start → ${Km(e.startTimestamp)}`), void 0 !== e.endTimestamp && a.push(`end → ${Km(e.endTimestamp)}`), void 0 !== e.markerType && a.push(`type → ${e.markerType}`), `${t} #${n}: ${a.join(", ")}`;
		}
		case "marker_moved": {
			const e = i.before, t = i.after;
			if (!e || !t) return "drag completed";
			const n = Array.isArray(e.sleepMarkers) ? e.sleepMarkers : [], a = Array.isArray(t.sleepMarkers) ? t.sleepMarkers : [];
			for (let i = 0; i < Math.max(n.length, a.length); i++) {
				const e = n[i], t = a[i];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `sleep #${i}: ${Ym(e)} ⇒ ${Ym(t)}`;
			}
			const s = Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : [], r = Array.isArray(t.nonwearMarkers) ? t.nonwearMarkers : [];
			for (let i = 0; i < Math.max(s.length, r.length); i++) {
				const e = s[i], t = r[i];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `nonwear #${i}: ${Ym(e)} ⇒ ${Ym(t)}`;
			}
			return "drag completed (no visible change)";
		}
		case "marker_deleted": {
			const e = i.category ?? "?", t = i.periodIndex ?? "?", n = i.before;
			return n ? `${e} #${t}: was ${Ym(n)}` : `${e} #${t}`;
		}
		case "actiware_rest_edited": {
			const e = "string" == typeof i.edit ? i.edit : "?";
			return "add" === e ? `rest added: ${Ym(i.to)}` : "remove" === e ? `rest removed: was ${Ym(i.from)}` : `rest ${"move" === e ? "moved" : e}: ${Ym(i.from)} ⇒ ${Ym(i.to)}`;
		}
		case "markers_cleared": return `Cleared ${i.sleepCount ?? 0} sleep, ${i.nonwearCount ?? 0} nonwear`;
		case "undo":
		case "redo": {
			const e = i.sleepCount, t = i.nonwearCount;
			return "number" != typeof e && "number" != typeof t ? "" : `Restored: ${"number" == typeof e ? e : 0} sleep, ${"number" == typeof t ? t : 0} nonwear`;
		}
		case "auto_score_applied": return `${i.algorithm}: ${i.sleepCount ?? 0} sleep, ${i.napCount ?? 0} nap`;
		case "auto_nonwear_applied": {
			const e = Array.isArray(i.weights) ? i.weights.filter((e) => "string" == typeof e) : [], t = `${i.count ?? 0} nonwear periods detected`;
			return 0 === e.length ? t : `${t}: ${e.join("; ")}`;
		}
		case "markers_saved": {
			let e = `${i.sleepCount ?? 0} sleep, ${i.nonwearCount ?? 0} nonwear`;
			return i.notes && (e += ` | "${String(i.notes).slice(0, 50)}"`), i.isInvalidNight && (e += " | Invalid Night"), e;
		}
		case "invalid_night_toggled": {
			const e = i.value ? "Enabled" : "Disabled", t = i.clearedSleepMarkers, n = Array.isArray(t) ? t.length : 0;
			return 0 === n ? e : `${e} — cleared ${n} sleep marker${1 === n ? "" : "s"}`;
		}
		case "no_nonwear_toggled": return i.value ? "Confirmed no nonwear" : "No-nonwear cleared";
		case "consensus_toggled": return i.value ? "Flagged for consensus" : "Unflagged";
		case "candidate_copied": {
			const e = i.label ?? i.sourceUsername ?? "unknown", t = "nonwear" === i.kind ? `${i.nonwearCount ?? "?"} nonwear` : `${i.sleepCount ?? "?"} sleep`;
			return `From ${String(e)} (${t})`;
		}
		case "consensus_vote_cast": return null == i.candidateId ? "Vote withdrawn" : `Voted for candidate #${i.candidateId}`;
		case "consensus_resolved": {
			const e = i.kind;
			return "string" == typeof e && "" !== e ? `${e} consensus resolved` : "Consensus resolved";
		}
		case "transition_flagged": {
			const e = Xm(i.intent, "mutation"), t = Xm(i.guard, "?"), n = i.disposition, a = "refused_by_store" === n ? "refused" : "applied_with_violation" === n ? "applied anyway" : Xm(n, "");
			return "" === a ? `${e} flagged: ${t}` : `${e} flagged: ${t} — ${a}`;
		}
		case "file_uploaded":
		case "file_processed":
		case "file_reprocessed":
		case "file_deleted": {
			const e = i.filename ?? "?", t = i.dateCount;
			return null == t ? String(e) : `${String(e)} (${String(t)} days)`;
		}
		case "notes_changed":
			if (void 0 !== i.after) {
				const e = Xm(i.before, ""), t = Xm(i.after, "");
				return "" === e ? `"${t}"` : `"${e}" → "${t}"`;
			}
			return i.text ? `"${String(i.text).slice(0, 60)}"` : i.notes ? `"${String(i.notes).slice(0, 60)}"` : `${i.length ?? "?"} chars`;
		case "settings_changed": return `${Xm(i.scope, "?")} · ${Xm(i.key, "?")}: ${Xm(i.before)} → ${Xm(i.after)}`;
		case "settings_reset": {
			const e = i.changed, t = Xm(i.scope, "settings");
			if (!Array.isArray(e)) return `${t} reset to defaults`;
			if (0 === e.length) return `${t}: already at defaults`;
			const n = e.slice(0, 4).map((e) => Xm(e, "?")).join(", "), a = e.length > 4 ? ", …" : "";
			return `${t}: ${String(e.length)} reset to default (${n}${a})`;
		}
		case "app_version_changed": return `${Xm(i.before, "(first run)")} → ${Xm(i.after, "?")}`;
		case "system_migration": return `${Xm(i.subject, "schema")}: ${Xm(i.before, "?")} → ${Xm(i.after, "?")}`;
		case "data_exported": return Qm(i);
		case "export_started": return `Started: ${Qm(i)}`;
		case "export_cancelled": return `${Xm(i.filename, "export")} — ${Xm(i.reason, "cancelled")}`;
		case "preset_changed": {
			const e = Xm(i.family, "preset"), t = Xm(i.change, "changed"), n = Xm(i.preset, "?"), a = i.before;
			return null == a ? `${e}: ${t} ${n}` : `${e}: ${t} ${n} (was ${Xm(a)})`;
		}
		case "markers_synced": {
			const e = i.conflicts, t = i.errorCount;
			let n = `Pushed ${i.pushed ?? 0}, pulled ${i.pulled ?? 0}`;
			return "number" == typeof e && e > 0 && (n += `, ${e} conflict${1 === e ? "" : "s"}`), "number" == typeof t && t > 0 && (n += `, ${t} error${1 === t ? "" : "s"}`), n;
		}
		case "system_recalculation": return `Recalculated ${Xm(i.subject, "derived data")}`;
		case "diary_staged": return `Staged ${i.staged ?? 0}, replaced ${i.replaced ?? 0}, skipped ${i.skipped ?? 0}`;
		case "diary_decision_recorded": return `Decided ${Xm(i.ruleKind, "a rule")} → ${Xm(i.outcome, "(no outcome)")} (${Xm(i.scope, "unscoped")}, ${i.nights ?? 0} nights)`;
		case "diary_decision_state_saved": return `Saved decision state "${Xm(i.restorePoint, "untitled")}" (${i.decisions ?? 0} decisions)`;
		case "diary_session_saved": {
			const e = Xm(i.status, "saved"), t = Xm(i.step, "an unknown step"), n = Xm(i.sourceSha256Prefix, "an unnamed source");
			return "removed" === e ? `Removed the saved diary session for ${n}` : `Diary session ${n} saved as ${e} on ${t}`;
		}
		case "diary_decision_state_restored": return `Restored decision state "${Xm(i.restorePoint, "untitled")}" (${i.reflagged ?? 0} reflagged, ${i.unflagged ?? 0} unflagged, ${i.nights ?? 0} nights)`;
		case "diary_decisions_reset": return `Reset ${i.decisions ?? 0} diary decisions across ${i.nights ?? 0} nights`;
		case "diary_attached": {
			const e = i.entryCount, t = i.matchBasis, n = ["number" == typeof e ? `${e} night${1 === e ? "" : "s"}` : null, "string" == typeof t && "" !== t ? `matched by ${t}` : null].filter((e) => null !== e).join(", ");
			return "" === n ? "Attached diary" : `Attached diary (${n})`;
		}
		case "diary_discarded": {
			const e = i.analysisDate;
			return null == e ? `Discarded ${Xm(i.sourceKey, "diary")}` : `Discarded ${Xm(i.sourceKey, "diary")} for ${Xm(e, "?")}`;
		}
		case "diary_workspace_cleared": {
			const e = (e, t) => {
				const n = Number(i[e] ?? 0);
				return `${String(n)} ${t}${1 === n ? "" : "s"}`;
			};
			return `Cleared workspace diary (${e("staged", "staged night")}, ${e("occurrences", "response")})`;
		}
		case "diary_repaired": {
			const e = i.fields, t = Array.isArray(e) ? e.map((e) => Xm(e, "?")).join(", ") : "";
			return "" === t ? `Repaired ${i.applied ?? 0} field${1 === i.applied ? "" : "s"}` : `Repaired ${i.applied ?? 0}: ${t}`;
		}
		case "diary_changed": {
			const e = i.fields, t = Xm(i.change, "changed"), n = Array.isArray(e) ? e.map((e) => Xm(e, "?")).join(", ") : "";
			return "" === n ? `Diary ${t}` : `Diary ${t}: ${n}`;
		}
		case "workspace_deleted": {
			const e = i.auditRowsDestroyed;
			return `${Xm(i.displayName, "workspace")} deleted — ${i.auditRowsTotal ?? 0} audit rows, ${i.auditRowsReplicated ?? 0} replicated, ${e ?? 0} destroyed`;
		}
		case "audit_chain_reanchored": return `Restored ${i.restoredRows ?? 0} rows (restore ${String(i.restoreId ?? "?").slice(0, 8)})`;
		case "workspace_recovered": return `Recovered from backup ${Xm(i.backupSha256, "?").slice(0, 8)} — ${Xm(i.applied, "0")} changes put back, ${Xm(i.skipped, "0")} skipped, ${Xm(i.recordingsToReimport, "0")} recordings to import again`;
		case "access_changed": return `${Xm(i.subject, "access")} · ${Xm(i.scope, "?")}: ${Xm(i.before)} → ${Xm(i.after)}`;
		case "assignment_changed": {
			const e = i.fileCount, t = i.fileIds, n = "number" == typeof e ? e : Array.isArray(t) ? t.length : 0;
			return `${Xm(i.change, "changed")} ${Xm(i.subject, "assignment")} · ${Xm(i.scope, "?")} (${n} file${1 === n ? "" : "s"})`;
		}
	}
	return Object.entries(i).slice(0, 5).map(([e, t]) => "number" == typeof t && e.toLowerCase().includes("timestamp") ? `${e}: ${Km(t)}` : "string" == typeof t && t.length > 50 ? `${e}: "${t.slice(0, 47)}..."` : Array.isArray(t) ? `${e}: [${t.length} items]` : "object" == typeof t && null !== t ? `${e}: {…}` : `${e}: ${JSON.stringify(t)}`).join(", ");
}
function nh(e) {
	return JSON.stringify(e.map((e) => ({
		start_timestamp: e.startTimestamp,
		end_timestamp: e.endTimestamp,
		marker_index: e.markerIndex
	})));
}
function ah(e, t) {
	const n = (i = t, "mims_metrics" === (a = e ?? "generic") ? ts(i, s) : "ggir_part5_daysummary" === a ? function(e, t) {
		const n = ns(e, t);
		return e.date_column || e.datetime_column || n.push({
			key: "date_column",
			message: "Map a date/day column for the daily summary table."
		}), n;
	}(i, s) : es(i, s));
	var a, i, s;
	if (0 !== n.length) throw new Error(function(e) {
		return `Column-mapped CSV settings are incomplete: ${e.map((e) => e.message).join(" ")} ${ji}`;
	}(n));
}
function ih(e) {
	const t = /* @__PURE__ */ new Map();
	for (const a of e) "auto_score" !== a.username || a.algorithm !== O.VAN_HEES_2015 || a.isInvalidNight || t.set(a.date, wn(t.get(a.date), a));
	const n = /* @__PURE__ */ new Map();
	for (const [a, i] of t) {
		const e = i.sleepMarkers.filter((e) => e.markerType === R.MAIN_SLEEP);
		if (1 !== e.length) continue;
		const t = e[0], s = t?.onsetTimestamp, r = t?.offsetTimestamp;
		"number" == typeof s && Number.isFinite(s) && "number" == typeof r && Number.isFinite(r) && r > s && n.set(a, [s, r]);
	}
	return n;
}
async function sh(e, t) {
	const n = t.dailyGgirSummaries;
	if (!n) return /* @__PURE__ */ new Map();
	const a = await n.where("fileId").equals(e).toArray();
	return new Map(a.map((e) => [e.analysisDate, e]));
}
function rh(e) {
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
	const s = [];
	for (const l of [t, await Ma(t, void 0, a)]) {
		const r = e.get(l);
		if (!r) continue;
		let o = i.get(l);
		o || i.set(l, o = za(r, n, `listDatesStatus ${l}`, Aa(), a));
		const c = await o;
		if (!c) return null;
		s.push({
			unpacked: c,
			epochs: await qa(c.timestamps, t, a),
			ggir: await qa(c.ggirTimestamps, t, a)
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
function ph(e, t) {
	const n = new Set(t.map((e) => e.analysis_date)), a = Object.keys(e);
	return n.size === t.length && a.length === n.size && a.every((e) => n.has(e));
}
function fh(e) {
	const t = [...e.entries()].sort(([e], [t]) => e.localeCompare(t));
	let n = null, a = null;
	for (const [, r] of t) try {
		const e = Oe(r).timestamps;
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
			const t = Oe(e).timestamps;
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
async function mh(e, t, n, a, i, s, r) {
	const o = [], l = [];
	for (const c of new Set(t)) {
		let t = null;
		for (const o of e) if (o && 0 !== Oe(o).timestamps.length && (await Pr(o, c, n, i, void 0, s, r), t = ca(c, va(o, n), a), null !== t)) break;
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
	return 1 === e.length && ha(e[0]);
}
function wh(e, t, n) {
	const a = e?.byDate[t];
	return a ? "refused" === a.kind ? a.reason : null : function(e) {
		const t = e?.sleepPeriodDetectionConfig?.[qh];
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
		const s = t[i], r = e[i], o = n[i];
		if (null == s || null == r || s !== r || null == o || !Number.isFinite(o)) return [];
		a[i] = o;
	}
	return a;
}
function kh(e, t, n, a, i, s) {
	const r = [], o = null == t ? null : s.resolveInstant(t, e, Je.evening_onset, i), l = null == n ? null : s.resolveInstant(n, e, Je.morning_offset, i);
	return null == o && null == l || r.push({
		guider: w.DIARY,
		detector: null,
		onset_ts: o,
		offset_ts: l
	}), null != a && r.push({
		guider: w.HDCZA,
		detector: null,
		onset_ts: a[0],
		offset_ts: a[1]
	}), r;
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
		has_markers: P(e),
		has_nonwear: K(e),
		is_invalid_night: e?.isInvalidNight ?? !1,
		needs_consensus: e?.needsConsensus ?? !1,
		auto_flagged: t,
		has_auto_score: (n?.sleepMarkers?.length ?? 0) > 0 || !0 === n?.isInvalidNight,
		auto_score_unavailable_reason: a
	};
}
async function $h(e, t, n, a) {
	const [i, s] = await Promise.all([a.markers.where("[fileId+date+username]").between([
		e,
		t,
		""
	], [
		e,
		t,
		"￿"
	], !0, !0).toArray(), _h(a, e)]), r = /* @__PURE__ */ new Map();
	for (const c of i) r.set(c.username, wn(r.get(c.username), c));
	const o = r.size >= 2 && (await Bm([{
		usersForDate: r,
		kind: "sleep"
	}, {
		usersForDate: r,
		kind: "nonwear"
	}])).some((e) => e.disagree), l = r.get(it);
	return Mh(r.get(n), o, l, wh(s, t, l));
}
function Rh(e) {
	return JSON.stringify((e ?? []).map((e) => [e.startTimestamp ?? null, e.endTimestamp ?? null]));
}
function zh(e) {
	const t = e ? null : k().scoring(), n = e?.nightStartHour ?? t?.nightStartHour ?? o.night_start_hour, a = e?.nightEndHour ?? t?.nightEndHour ?? o.night_end_hour, i = parseInt(n.split(":")[0] ?? "21", 10), s = parseInt(a.split(":")[0] ?? "9", 10);
	return {
		nightStartHour: Number.isNaN(i) ? 21 : i,
		nightEndHour: Number.isNaN(s) ? 9 : s
	};
}
const Dh = /* @__PURE__ */ new Set(), Eh = /* @__PURE__ */ new WeakMap();
function Ch(e, t, n, a) {
	const i = Eh.get(e) ?? /* @__PURE__ */ new Map();
	Eh.set(e, i);
	const s = i.get(t);
	if (s) {
		let r;
		return {
			run: s.run.catch((o) => {
				if (!s.signal?.aborted || n?.aborted) throw o;
				return i.get(t) === s && i.delete(t), r = Ch(e, t, n, a), r.run;
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
function Oh(e, t, n, a) {
	return X({
		kind: Z.NIGHT_DIFFICULTY,
		key: `${Z.NIGHT_DIFFICULTY}:${String(e)}`,
		label: "Update night difficulty",
		workspaceId: t.name,
		signal: a,
		rerun: !0,
		run: async (a) => {
			const i = new Gh();
			try {
				if (a.signal.throwIfAborted(), a.progress(0, 2), J() !== t) return;
				const s = await Xe(e, t);
				if (!s || "incomplete" === s.ingestState) return;
				await Wm(e, t, a.signal), a.signal.throwIfAborted(), a.progress(1, 2);
				const r = s.nightDifficulty, o = n ?? (r ? {
					nightStartHour: `${String(r.nightStartHour).padStart(2, "0")}:00`,
					nightEndHour: `${String(r.nightEndHour).padStart(2, "0")}:00`
				} : void 0);
				await i.computeDatesStatus(e, s.availableDates, k().scoring().username || "anonymous", o, a.signal), a.progress(2, 2);
			} finally {
				i.dispose();
			}
		}
	}).catch((e) => {
		e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] Stored night difficulty could not be refreshed.", e);
	});
}
$e((e, t, n) => {
	Oh(e, t, void 0, n);
});
const Ph = /* @__PURE__ */ new WeakMap();
function Fh(e, t, n, a, i) {
	i?.throwIfAborted();
	let s = Ph.get(e);
	return s || (s = /* @__PURE__ */ new Map(), Ph.set(e, s)), s.set(t, {
		inputs: n,
		byDate: a
	}), a;
}
const jh = /* @__PURE__ */ new WeakMap();
function Bh(e, t) {
	let n = jh.get(e);
	n || jh.set(e, n = /* @__PURE__ */ new Map());
	const a = ct(t);
	let i = n.get(a);
	return i || n.set(a, i = Me(e.values(), t)), i;
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
var Gh = class t {
	sourceKey = "local";
	nightRecordData = lr;
	sourceAnalyses;
	services;
	disposed = !1;
	operationProcessingOptions;
	constructor(e, { sourceAnalyses: t = cr, services: n = Wf } = {}) {
		this.operationProcessingOptions = e, this.sourceAnalyses = t, this.services = n;
	}
	fileBatches = /* @__PURE__ */ new Map();
	beginFileBatch(e, t = J(), n) {
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
					analysisParadigm: k().scoring().analysisParadigm,
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
		return n?.days ? n.diaries ??= ft(e, t) : ft(e, t);
	}
	async placementDiary(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? (await this.placementDiaries(e, n, a)).find((e) => e.analysisDate === t) ?? null : ut(e, t, n);
	}
	async placementMarker(e, t, n, a, i = this.fileBatch(e, a)) {
		if (!i?.days) return at(e, t, it, n, void 0, a);
		const s = await (i.markers ??= a.markers.where("fileId").equals(e).toArray()), r = Te(s, {
			date: t,
			username: it
		}, n);
		return r ? dn(r) : void 0;
	}
	async placementDay(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? a.days.get(t) : Mt(e, t, n, a?.activityDayMemo);
	}
	async scorerVerdict(e, t, n, a, i = this.fileBatch(t, e)) {
		return i?.days ? Bh(i.days, n) : i?.activityDayMemo ? Bh(await Pt(t, e, i.activityDayMemo), n) : (await Mn(t, e, a))(n);
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
		const n = J(), a = await Pt(e, n, this.fileBatch(e, n)?.activityDayMemo), i = Bh(a, t), s = [];
		for (const [r, o] of [...a].sort(([e], [t]) => e.localeCompare(t))) {
			const e = await za(o, i, `loadFileDaySeries ${r}`, Aa());
			e && s.push(e);
		}
		return s;
	}
	async loadActivityData(e, t, n) {
		const a = J();
		let i, s = await Xe(e, a), r = null;
		if (Kt(s)) {
			const { ensureSavedGgirNonwear: t } = await import("./ggir-import-8_9lvide.js");
			try {
				r = await t(e, a, void 0, !1);
			} catch {
				i = "Saved GGIR nonwear recovery failed; recovered nonwear is unavailable.";
			}
			s = await Xe(e, a);
		}
		const o = s?.navigationFacts;
		o?.window[t] || Wm(e, a);
		const l = await Fa(e, t, a, void 0, o);
		if (!l) throw new Error(`No activity data found for fileId=${e} date=${t}. File may not be processed yet.`);
		const c = await this.scorerVerdict(a, e, n?.algorithm, { file: s }), u = await za(l, c, `loadActivityData ${t}`, Aa());
		if (!u) throw new Error(`Activity data for fileId=${e} date=${t} is corrupt; please reprocess.`);
		const d = await Ma(t, o), p = 48 === n?.viewHours ? [d, await Ma(d, o)] : [d], f = await Promise.all(p.map((t) => Mt(e, t, a, this.fileBatch(e, a)?.activityDayMemo))), m = [l];
		for (const k of f) {
			if (!k) break;
			m.push(k);
			const e = await za(k, c, "loadActivityData next-day", Aa());
			if (!e) throw new Error("Next-day activity data is corrupt; please reprocess.");
			const t = u.timestamps.length, n = e.timestamps.length;
			Ga(u.timestamps, e.timestamps), Ga(u.axisY, e.axisY), Ga(u.vectorMagnitude, e.vectorMagnitude), (u.axisX.length > 0 || e.axisX.length > 0) && (u.axisX.length < t && (u.axisX = new Array(t).fill(0)), Ga(u.axisX, e.axisX.length > 0 ? e.axisX : new Array(n).fill(0))), (u.axisZ.length > 0 || e.axisZ.length > 0) && (u.axisZ.length < t && (u.axisZ = new Array(t).fill(0)), Ga(u.axisZ, e.axisZ.length > 0 ? e.axisZ : new Array(n).fill(0))), (u.temperature.length > 0 || e.temperature.length > 0) && (u.temperature.length < t && (u.temperature = new Array(t).fill(NaN)), Ga(u.temperature, e.temperature.length > 0 ? e.temperature : new Array(n).fill(NaN))), (u.eventMarkers.length > 0 || e.eventMarkers.length > 0) && (u.eventMarkers.length < t && (u.eventMarkers = new Array(t).fill(0)), Ga(u.eventMarkers, e.eventMarkers.length > 0 ? e.eventMarkers : new Array(n).fill(0))), Ga(u.eventMarkerTimestamps, e.eventMarkerTimestamps), (u.lux.length > 0 || e.lux.length > 0) && (u.lux.length < t && (u.lux = new Array(t).fill(NaN)), Ga(u.lux, e.lux.length > 0 ? e.lux : new Array(n).fill(NaN))), (u.sleepScores.length > 0 || e.sleepScores.length > 0) && (u.sleepScores.length < t && (u.sleepScores = new Array(t).fill(0)), Ga(u.sleepScores, e.sleepScores.length > 0 ? e.sleepScores : new Array(n).fill(0))), (u.sleepScoreGaps.length > 0 || e.sleepScoreGaps.length > 0) && (u.sleepScoreGaps.length < t && (u.sleepScoreGaps = new Array(t).fill(0)), Ga(u.sleepScoreGaps, e.sleepScoreGaps.length > 0 ? e.sleepScoreGaps : new Array(n).fill(0))), (u.lstmTimestamps30s.length > 0 || e.lstmTimestamps30s.length > 0) && (u.lstmTimestamps30s = Da(u.lstmTimestamps30s, e.lstmTimestamps30s), u.lstmSleepWake30s = Na(u.lstmSleepWake30s, e.lstmSleepWake30s)), Ba(u, e, t, n), (u.ggirTimestamps.length > 0 || e.ggirTimestamps.length > 0) && (u.ggirSib = Ca(u.ggirTimestamps, u.ggirSib, e.ggirTimestamps, e.ggirSib), u.ggirTimestamps = Da(u.ggirTimestamps, e.ggirTimestamps), u.ggirEnmo = Da(u.ggirEnmo, e.ggirEnmo), u.ggirAnglez = Da(u.ggirAnglez, e.ggirAnglez));
		}
		u.ggirSib = Ra(u.ggirTimestamps, u.ggirSib);
		const { start: h, end: g } = await Ai(t, 48 === n?.viewHours ? 48 : void 0, o), y = Qa(s?.sourceType, s?.sourceProfileId);
		let w = [];
		ha(y) ? w = (await fe(e, h, g, a)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : "detach_mask" === Ka(y) && u.detachNonwear && (w = Gm(u.detachNonwear, u.timestamps));
		const _ = {};
		for (const [k, I] of Object.entries(u.nonwearMasksByDetector)) 0 !== I.length && (bi(k) || (_[k] = I));
		const v = m.flatMap((e) => e.ggirTimestamps?.byteLength ? [e.ggirInvalid] : []);
		if (v.length > 0 && v.every((e) => void 0 !== e)) {
			const e = v.flatMap((e) => Array.from(new Uint8Array(e)));
			e.length === u.ggirTimestamps.length && (_[dt.ggir_part2_invalid] = e);
		}
		Sn(u.timestamps, Vm(m, "count_sleep_wake")), Sn(u.ggirTimestamps, Vm(m, "ggir_sleep_period"));
		const b = function(e, t, n, a) {
			const i = {}, s = e.filter((e) => Jm(e, "counts") > 0 || Jm(e, "ggir") > 0);
			for (const r of Lm(a)) {
				const e = Xa(r);
				if (!s.every((t) => t.displayNonwear && e in t.displayNonwear)) continue;
				const a = s.map((t) => t.displayNonwear[e] ?? null), o = a.filter((e) => null !== e), l = o[0]?.grid;
				if (!l) {
					i[e] = null;
					continue;
				}
				if (o.some((e) => e.grid !== l)) continue;
				const c = o.some((e) => null !== e.weight), u = [], d = [];
				if (s.forEach((e, t) => {
					const n = a[t], i = n ? new Uint8Array(n.any) : new Uint8Array(Jm(e, l));
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
		Object.keys(b).length < Lm(s ?? null).length && Wm(e, a);
		const S = await Pa(u, m, c, s);
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
			...u.ggirTimestamps.length > 0 && 0 === u.ggirSib.length ? { ggirSibMissingReason: La(s, l) } : {},
			algorithmResults: u.sleepScores.length > 0 ? u.sleepScores : null,
			...u.sleepScoreGaps.length > 0 ? { algorithmResultGaps: u.sleepScoreGaps } : {},
			...n?.algorithm && !$a(n.algorithm) && 0 === u.sleepScores.length && u.timestamps.length > 0 ? { scorerMissingReason: "stale" === c.status ? c.reason : ja(n.algorithm, {
				sourceProfileId: s?.sourceProfileId,
				scorerSettingsStored: await Jf(this.sourceAnalyses, s, "hasScorerSettings")?.hasScorerSettings(e, a)
			}) } : {},
			lstmTimestamps30s: u.lstmTimestamps30s,
			lstmSleepWake30s: u.lstmSleepWake30s,
			nonwearResults: u.nonwearResults,
			nonwearResultsChoi2011: u.nonwearResultsChoi2011,
			vanHeesNonwear: u.vanHeesNonwear,
			algorithmicNonwearMasks: _,
			nonwearBands: b,
			...r ? { nonwearSourceLabels: { [dt.ggir_saved]: r } } : {},
			...i ? { savedNonwearMissingReason: i } : {},
			epochResolutions: S,
			viewStart: h,
			viewEnd: g,
			sensorNonwearPeriods: w,
			deviceNonwearSource: y
		};
	}
	async loadMarkers(e, t, n, a, i, s) {
		const r = s ?? J(), o = await at(e, t, n, a, i, r);
		return o ? Lh(o) : null;
	}
	async saveMarkers(e, t, n, a, i, s, r, o, l) {
		const c = o ?? J(), u = k().scoring(), d = jm(c, {
			username: n,
			studyId: u.selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, l), p = r?.signal ?? this.fileBatch(e, c)?.signal;
		let f, m = null, h = null, g = !1, y = r?.sleepPeriodDetection ?? u.sleepPeriodDetection;
		const w = await Zn({
			fileId: e,
			date: t,
			username: n,
			algorithm: i ?? null,
			detectionRule: s ?? null,
			signal: p
		}, c, async (o) => {
			const l = "function" == typeof a ? await a(o ? Lh(o) : null) : {
				data: a,
				settings: r
			};
			if (!l) return null;
			m = l.data;
			const d = l.settings ?? r, w = f = await Xe(e, c);
			m = {
				...m,
				sleepMarkers: await this.nightRecordData[pt(w, u.analysisParadigm)].sleepPeriodsToSave({
					fileId: e,
					date: t,
					isInvalidNight: m.isInvalidNight ?? o?.isInvalidNight ?? !1
				}, m.sleepMarkers, c)
			}, y = ht({
				algorithm: i ?? "",
				sleepPeriodDetection: d?.sleepPeriodDetection ?? u.sleepPeriodDetection
			});
			const _ = y ? Rn(y) : null, v = void 0 === d?.periodGuider ? pe(u, w) : null, b = d?.periodGuider ?? v?.periodGuider, S = d?.periodGuider ?? (_ && !0 !== v?.placementFromSource ? Qe(ye(_)) : v?.periodGuider), k = i ? de(i) : null, I = k ? Dt(k) : null, A = await at(e, t, n, i ?? null, s ?? null, c);
			g = !A || A.algorithm !== (i ?? null) || A.detectionRule !== (s ?? null) || JSON.stringify(A.sleepMarkers) !== JSON.stringify(m.sleepMarkers) || void 0 !== m.isInvalidNight && m.isInvalidNight !== A.isInvalidNight, h = void 0 !== m.nonwearMarkers && "auto_score" !== n ? Rh(A?.nonwearMarkers) : null;
			let x = m.sleepPeriodDetectionConfig ?? null;
			if (null === x) {
				const n = await ut(e, t, c);
				x = Tn({
					algorithm: i ?? null,
					periodGuider: yo(0, b, y),
					sleepPeriodDetection: y,
					diaryOnsetTime: zt(n),
					diaryWakeTime: cn(n)
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
		const _ = m, v = Lh(w.record), b = {
			fileId: e,
			file: f,
			nights: /* @__PURE__ */ new Map([[t, _.sleepMarkers]]),
			sleepMarkersChanged: g,
			username: n,
			analysisParadigm: k().scoring().analysisParadigm,
			db: c,
			signal: p,
			openBatch: () => this.fileBatch(e, c)
		};
		if (await this.sourceAnalyses.reduce(async (e, t, n) => !!(await e || n > 0 && p?.aborted) || (Vf(t, f, "followSavedNights") && await t.followSavedNights(b), !1), Promise.resolve(!1))) return v;
		null !== h && h !== Rh(_.nonwearMarkers) && Oh(e, c, void 0, p), g && at(e, t, n, i ?? null, s ?? null, c).then(async (t) => {
			if (!t) return;
			const { storeNightPeriodMetrics: n } = await import("./local-export-worker-BdFlLgPy.js").then((e) => e.R);
			return n(t, await this.scorerVerdict(c, e, t.algorithm), c, p);
		}).catch(() => {
			console.warn("[local-analysis] period metrics could not be stored with the saved night");
		});
		try {
			if (J() !== c) return v;
		} catch {
			return v;
		}
		const S = an();
		if (!S.capabilities.tauri) return v;
		try {
			const [a, r] = await Promise.all([Xe(e, c), at(e, t, n, i ?? null, s ?? null, c)]);
			if (!a?.fileHash || !r?.contentHash) return v;
			await S.workspace.saveMarkers({
				fileHash: a.fileHash,
				date: t,
				username: n,
				sleepMarkers: (I = _.sleepMarkers, JSON.stringify(I.map((e) => ({
					onset_timestamp: e.onsetTimestamp,
					offset_timestamp: e.offsetTimestamp,
					marker_index: e.markerIndex,
					marker_type: e.markerType
				})))),
				nonwearMarkers: nh(r.nonwearMarkers),
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
		const e = J();
		return (await Se(e)).map((e) => {
			const t = e.id ?? 0, n = le(e);
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
				views: z(t, n, /* @__PURE__ */ new Set(), e.epochLengthSeconds),
				count_epoch_seconds: e.epochLengthSeconds
			};
		});
	}
	async listDates(e) {
		const t = J();
		return (await Xe(e, t))?.availableDates ?? yt(e, t);
	}
	async getDiaryEntry(e, t) {
		const n = J(), a = await ut(e, t, n);
		return a ? At(a, await Nn(e, n)) : null;
	}
	async listDiaryEntries(e) {
		const t = J(), n = await ft(e, t);
		if (0 === n.length) return n;
		const a = await Nn(e, t);
		return null === a ? n : Cn(n, a);
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
		const d = H(c), [p, f, m, h] = await Promise.all([
			u?.days ? [...u.days.keys()].sort() : yt(e, i),
			this.placementDiaries(e, i, u),
			yh(s) ? kt(e, i) : xn(e, i),
			i.files.get(e)
		]), g = await Cn(f, a, d), y = new Map(g.map((e) => [e.analysisDate, e])), w = [], _ = p.filter((e) => e !== t), v = await Promise.all(_.map((t) => this.placementDay(e, t, i, u)));
		for (const [b, S] of _.entries()) {
			const e = v[b];
			if (!e) continue;
			for (const n of s) await Pr(e, n, l, i, d, c, u?.activityDayMemo);
			const t = await za(e, n, `autoScore context ${S}`, l, d);
			if (!t || 0 === t.timestamps.length || 0 === t.sleepScores.length) continue;
			const a = y.get(S), p = t.timestamps[0] ?? 0, f = t.timestamps[t.timestamps.length - 1] ?? p, g = await Ot(t.timestamps, hn({
				day: e,
				file: h
			}), d), _ = gh(ba(await ma(s, t.nonwearMasksByDetector, {
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
				diaryBedTime: An(a),
				diaryOnsetTime: zt(a),
				diaryWakeTime: cn(a),
				diaryNaps: a ? Ut(a) : null,
				diaryNonwear: a ? Lt(a) : null
			});
		}
		return {
			contextDays: w,
			deviceOffNonwear: m
		};
	}
	async autoScore(e, t, n, a) {
		const i = a ?? J();
		if (this.fileBatch(e, i)) return this.autoScoreNight(e, t, n, bo, i);
		const s = {}, r = await Pt(e, i, s), o = {
			db: i,
			signal: n.signal,
			depth: 0,
			savedNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map(),
			activityDayMemo: s,
			span: Promise.resolve(fh(r))
		};
		return this.autoScoreNight(e, t, n, bo, i, void 0, void 0, void 0, o);
	}
	async autoScoreFile(e, t, n = !0, a = J(), i) {
		if (F(a.name)) return /* @__PURE__ */ new Map();
		const s = await this.filePlacementState(e, t, a);
		if (!s) return /* @__PURE__ */ new Map();
		const { file: r, inputs: o, cached: l } = s, c = Ze(r);
		return c ? new Map(r.availableDates.map((e) => [e, {
			kind: "refused",
			reason: c
		}])) : l ? Fh(a, e, o, l, t.signal) : n ? X({
			kind: Z.AUTO_SCORE,
			key: `${Z.AUTO_SCORE}:${String(e)}:${o}`,
			label: "Compute marker placement",
			workspaceId: a.name,
			signal: t.signal,
			run: async (n) => {
				const l = i?.inputs === o ? i.byDate : await this.computeFilePlacement(s, t, a, n);
				return await this.storeFilePlacement(e, o, l, a, {
					...t,
					signal: n.signal
				}) ? (n.progress(r.availableDates.length, r.availableDates.length), Fh(a, e, o, l, n.signal)) : /* @__PURE__ */ new Map();
			}
		}) : /* @__PURE__ */ new Map();
	}
	async filePlacementState(e, t, n) {
		const a = await Xe(e, n), i = Ph.get(n)?.get(e), [s, o, l] = await Promise.all([
			ft(e, n),
			n.markerProvenance.get(e),
			i ? void 0 : _h(n, e)
		]);
		if (!a) return null;
		const c = await r.waitFor(async function(e, t, n, a) {
			const i = k().scoring(), s = t.ruleset ?? i.placementRuleset, r = /* @__PURE__ */ new Set([O.VAN_HEES_2015, ...t.algorithm && $a(t.algorithm) ? [t.algorithm] : []]), o = (e) => "auto_score" === e.username && r.has(e.algorithm ?? ""), l = (a?.rows ?? []).filter((e) => o(e) || s !== se.LEGACY && e.nonwearDecided).map((e) => [e.id, o(e) ? e.lastModifiedAt : e.nonwearSpans ?? e.lastModifiedAt]), { signal: c, choiAxis: u, hasptVariant: d, studySettingsRevision: p, ...f } = t;
			return ce(JSON.stringify({
				v: 2,
				options: f,
				ruleset: s,
				nonwearDetectors: t.nonwearDetectors ?? ua(Ta(t.algorithm)),
				choiAxis: t.choiAxis ?? i.choiAxis,
				hasptVariant: t.hasptVariant ?? i.ggirHasptVariant,
				seriesRevision: e.seriesRevision ?? 0,
				dates: e.availableDates,
				diaries: n,
				rows: l
			}));
		}(a, t, s, o));
		if (i?.inputs === c) return {
			fileId: e,
			file: a,
			diaries: s,
			inputs: c,
			cached: i.byDate
		};
		const u = i ? await _h(n, e) : l;
		return {
			fileId: e,
			file: a,
			diaries: s,
			inputs: c,
			cached: u?.inputs === c ? new Map(Object.entries(u.byDate)) : null
		};
	}
	async storeFilePlacement(e, t, n, a, i) {
		if (i.signal?.throwIfAborted(), F(a.name)) return !1;
		const s = await E(a, [
			a.files,
			a.diaryEntries,
			a.markerProvenance,
			a.placementResults,
			a.studySettings
		], async () => {
			if (void 0 !== i.studySettingsRevision && ((await _e(a))?.contentHash ?? null) !== i.studySettingsRevision) return !1;
			const s = await this.filePlacementState(e, i, a);
			return !F(a.name) && s?.inputs === t && (await a.placementResults.put({
				fileId: e,
				policy: 2,
				inputs: t,
				byDate: Object.fromEntries(n)
			}), !0);
		}, i.signal);
		return s && J() === a && Ie(e, a), s;
	}
	async storeFilesPlacement(e, n, a, i, s) {
		const r = [], o = await Promise.allSettled(e.map(({ fileId: e, options: t }) => this.filePlacementState(e, t, n))), c = {
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: p()
		}, u = o.flatMap((e) => "fulfilled" === e.status && e.value ? [e.value.file] : []), d = u.flatMap((e) => "ggir_part1" === b(e.sourceType)?.importWorkerBudget ? [{ size: e.sourceSizeBytes ?? 0 }] : []), f = d.length > 0 && d.length === u.length ? di(d, c) : {
			...c,
			maxExtraWorkers: Number.POSITIVE_INFINITY
		}, m = await mi(e.map(({ fileId: e, options: i }, l) => ({
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
			createWorker: l,
			extraWorkers: Za(f),
			cancelOperation: () => {},
			...i,
			signal: a.signal
		});
		for (const [t, l] of m.entries()) {
			try {
				l && await this.storeFilePlacement(l.fileId, l.inputs, l.byDate, n, e[t].options) && Fh(n, l.fileId, l.inputs, l.byDate, a.signal);
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
		return Re(async (c) => {
			const u = await Pt(r, n, c), d = s ?? (await Ur(n)).csvText, p = void 0 !== i && $a(t.algorithm), f = [];
			let m, h = o.length;
			const g = new Promise((e) => {
				m = e;
			}).then(async () => {
				if (0 !== f.length) try {
					a.signal.throwIfAborted();
					const e = f.map((e) => e.opts), n = p && i ? await i.placeStoredGgirNights([...u.values()], Me([...u.values()], t.algorithm), f.map((e) => ({
						options: e.opts,
						...e.anchor
					}))) : await function(e, t = x()) {
						return Pn(e, t);
					}(e, i ?? H(a.signal));
					a.signal.throwIfAborted();
					for (const [t, a] of f.entries()) a.resolve(n[t]);
				} catch (wd) {
					for (const t of f) t.reject(wd);
				}
			}), y = this.beginFileBatch(r, n, a.signal), w = this.fileBatch(r, n), _ = {
				activityDayMemo: w.activityDayMemo,
				days: w.days,
				span: w.span,
				file: w.file,
				diaries: w.diaries,
				markers: w.markers
			};
			w.activityDayMemo = c, w.days = u, w.span = Promise.resolve(fh(u)), w.file = Promise.resolve(e.file), w.diaries = Promise.resolve(e.diaries);
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
	async autoScoreNight(e, t, n, a, i = J(), s, r, o, l) {
		const c = r ?? H(n.signal);
		n.signal?.throwIfAborted();
		const u = l ?? this.fileBatch(e, i), d = await (u ? u.file ??= Xe(e, i) : Xe(e, i)), p = Ze(d);
		if (p) return {
			kind: "refused",
			reason: p
		};
		const f = n.ruleset ?? k().scoring().placementRuleset, m = Ta(n.algorithm), h = n.nonwearDetectors ?? ua(m), g = n.choiAxis ?? k().scoring().choiAxis, y = n.sleepPeriodDetection ? Rn(n.sleepPeriodDetection) : void 0;
		let w = la(y, {
			path: m,
			selected: h
		}) ?? null;
		const _ = await Fa(e, t, i, (t) => this.placementDay(e, t, i, u), void 0, c);
		if (!_) return {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
		if ("vendor_analysis" === U.find((e) => e.id === n.algorithm)?.execution) {
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
		const v = await this.placementDay(e, await Ma(t, void 0, c), i, u), b = Qa(d?.sourceType, d?.sourceProfileId), S = await mh([_, v], h, g, b, i, n.signal, u?.activityDayMemo), I = await this.scorerVerdict(i, e, n.algorithm, { file: d }, u), A = $a(n.algorithm), x = A && o ? { kind: "angle-deferred" } : await Oa({
			day: _,
			nextDay: v,
			verdict: I,
			angle: A,
			requireScores: !0,
			missingScoresReason: n.algorithm === O.LSTM_SLEEP_WAKE ? "No LSTM sleep/wake results are stored for this file. Re-import or reprocess the raw file so the app can compute spectral features and run the ONNX model." : "No algorithm results available",
			choiAxis: g,
			laterDays: async () => [...(u?.days ?? await Pt(e, i, u?.activityDayMemo)).values()].filter((e) => e.date > t).sort((e, t) => e.date.localeCompare(t.date)),
			core: c
		});
		if ("refused" === x.kind) return x;
		const T = A ? null : hh(S);
		if (null !== T) return {
			kind: "refused",
			reason: T
		};
		w = la(y, {
			path: m,
			selected: h,
			available: S.available,
			dropped: S.dropped
		}) ?? null;
		const N = fa(S.dropped, m), M = (e) => "refused" === e.kind || null === w && 0 === N.length ? e : {
			...e,
			notes: [...N, ...e.notes],
			sleep_period_detection_config: {
				...e.sleep_period_detection_config ?? {},
				...w ?? {}
			}
		};
		if ("angle" === x.kind || "angle-legacy" === x.kind || "angle-deferred" === x.kind) {
			const r = await this.placementMarker(e, t, n.algorithm ?? null, i, u) ?? await this.placementMarker(e, t, O.VAN_HEES_2015, i, u), l = r?.sleepMarkers[0], p = null != l?.onsetTimestamp && null != l.offsetTimestamp ? {
				startTimestamp: l.onsetTimestamp,
				endTimestamp: l.offsetTimestamp
			} : null, m = () => l && null != l.onsetTimestamp && null != l.offsetTimestamp ? {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: l.onsetTimestamp,
					offset_timestamp: l.offsetTimestamp,
					marker_type: R.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: [],
				notes: ["HDCZA fallback: no 5s SIB stream available for structured sleep-period fusion", `HDCZA window: ${ne(l.onsetTimestamp)} – ${ne(l.offsetTimestamp)}`],
				decisions: [],
				sleep_period_detection_config: r?.sleepPeriodDetectionConfig ?? w
			} : {
				kind: "refused",
				reason: "No HDCZA sleep window found — re-process the file to regenerate it"
			};
			if ("angle" === x.kind || "angle-deferred" === x.kind) {
				let l = {
					timestamps: /* @__PURE__ */ new Float64Array(),
					activityCounts: /* @__PURE__ */ new Float64Array(),
					sleepScores: /* @__PURE__ */ new Uint8Array()
				};
				if ("angle" === x.kind) {
					const e = await Ua(x, t, c);
					if ("refused" === e.kind) return e;
					l = e.series;
				}
				const [h, g] = await Promise.all([this.placementDiary(e, t, i, u), u ? u.span ??= Nn(e, i, d?.seriesRevision ?? 0) : Nn(e, i, d?.seriesRevision ?? 0)]), y = h ? await At(h, g, c) : null, w = s ?? (await Ur(i)).csvText, b = (await ko(n.sensorLocation ?? "wrist", await So(n.hasptVariant ?? k().scoring().ggirHasptVariant, w, c), c)).variant, S = function(e) {
					const t = e?.sleepPeriodDetectionConfig?.haspt_variant;
					return Object.values(mt).includes(t) ? t : null;
				}(r), I = null == r ? null : null == S ? `HASPT variant not recorded at import; assumed ${b} from the study setting. Reprocess the file to record it.` : S !== b ? `HASPT variant at import was ${S}; the study setting now gives ${b}. Placed with ${S}; reprocess the file to apply ${b}.` : null, A = f === se.GGIR_PART4, T = A ? await vt(await this.placementDiaries(e, i, u), void 0, c) : null, N = T?.wakeIsOutBed ? null : tn(y, T?.outBedIsWake ? "diary_out_of_bed_time" : "diary_wake_time"), $ = T?.outBedIsWake ? null : tn(y, T?.wakeIsOutBed ? "diary_wake_time" : "diary_out_of_bed_time"), R = {
					...l,
					choiNonwear: null,
					ggirHasptAlgo: S ?? b,
					ggirConfigCsv: w,
					...T?.hasBedlog ? { ggirDiaryHasBedlog: !0 } : {},
					...T?.hasSleeplog ? { ggirDiaryHasSleeplog: !0 } : {},
					diaryBedTime: A ? tn(y, "diary_in_bed_time") : An(y),
					diaryOutBedTime: A ? $ : Ft(y),
					diaryOnsetTime: A ? tn(y, "diary_onset_time") : zt(y),
					diaryWakeTime: A ? N : cn(y),
					diaryNaps: y ? Ut(y) : null,
					analysisDate: t,
					onsetMinConsecutiveSleep: 1,
					offsetMinConsecutiveMinutes: 1,
					algorithm: n.algorithm,
					periodGuider: yo(n.algorithm, n.periodGuider, n.sleepPeriodDetection),
					...void 0 !== n.sleepPeriodDetection ? { sleepPeriodDetection: n.sleepPeriodDetection } : {},
					...n.scorerPostprocessing ? { scorerPostprocessing: n.scorerPostprocessing } : {},
					ruleset: f,
					epochLengthSeconds: 5,
					guiderWindows: p ? { hdcza: p } : {}
				}, z = "angle-deferred" === x.kind ? await o(R, _, v) : await a(R);
				return "angle-legacy" === z ? m() : M(I && "refused" !== z.kind ? {
					...z,
					notes: [I, ...z.notes]
				} : z);
			}
			return m();
		}
		const [$, z] = await Promise.all([this.placementDiary(e, t, i, u), u ? u.span ??= Nn(e, i, d?.seriesRevision ?? 0) : Nn(e, i, d?.seriesRevision ?? 0)]), D = $ ? await At($, z, c) : null, { unpacked: E } = x, { timestamps: C, axisY: P, sleepScores: F, eventMarkerTimestamps: j } = E, B = je(n.detectionRule), L = yo(n.algorithm, n.periodGuider, n.sleepPeriodDetection), G = await $n(ur, {
			fileId: e,
			file: d,
			date: t,
			db: i,
			batch: u,
			autoScoreMarker: (n) => this.placementMarker(e, t, n, i, u)
		}), Z = await Ot(C, hn({
			day: _,
			file: d
		}), c), q = S.available.some(ha) ? await (u ? u.sensor ??= Vt(e, i) : Vt(e, i)) : [], W = gh(ba(await ma(S.available, E.nonwearMasksByDetector, {
			offPeriods: q,
			source: b
		}, {
			timestampsSec: C,
			epochLenSec: Z
		}, c))), V = f !== se.LEGACY ? await this.loadPlacementFileContext(e, t, n.algorithm, I, z, i, S.available, q, b, g, n.signal, u) : null, { startIndex: K, endIndex: Y } = await qa(C, t, c);
		if (K === Y) return {
			kind: "refused",
			reason: "No activity data found for this date"
		};
		const X = C.slice(K, Y), Q = P.slice(K, Y), ee = F.slice(K, Y), te = W.choiNonwear ? W.choiNonwear.slice(K, Y) : null, ae = W.nonwearWeight ? W.nonwearWeight.slice(K, Y) : null, ie = W.nonwearMemberFlags ? W.nonwearMemberFlags.slice(K, Y) : null, re = X[0] ?? 0, oe = X[X.length - 1] ?? re;
		return M(await a({
			timestamps: X,
			activityCounts: Q,
			sleepScores: ee,
			choiNonwear: te,
			...ae ? { nonwearWeight: ae } : {},
			...ie ? { nonwearMemberFlags: ie } : {},
			diaryBedTime: An(D),
			diaryOnsetTime: zt(D),
			diaryWakeTime: cn(D),
			diaryNaps: D ? Ut(D) : null,
			diaryNonwear: D ? Lt(D) : null,
			analysisDate: t,
			onsetMinConsecutiveSleep: B.onsetN,
			offsetMinConsecutiveMinutes: B.offsetN,
			algorithm: n.algorithm,
			periodGuider: L,
			...void 0 !== n.sleepPeriodDetection ? { sleepPeriodDetection: n.sleepPeriodDetection } : {},
			...n.scorerPostprocessing ? { scorerPostprocessing: n.scorerPostprocessing } : {},
			ruleset: f,
			nonwearDetectors: W.nonwearDetectors,
			epochLengthSeconds: Z,
			guiderWindows: G,
			eventMarkerTimestamps: j.filter((e) => e >= re && e <= oe + 60),
			nightStartHour: Gt(n.nightStartHour),
			nightEndHour: Gt(n.nightEndHour),
			...V ? {
				sensorNonwear: V.deviceOffNonwear.filter((e) => e.startTimestamp <= oe && e.endTimestamp >= re),
				contextDays: V.contextDays
			} : {}
		}));
	}
	async autoNonwear(e, t, n) {
		if (void 0 === n.threshold) throw new Error("Local auto-nonwear requires a resolved nonwear threshold.");
		const a = J(), i = await Fa(e, t, a, (t) => Mt(e, t, a, this.fileBatch(e, a)?.activityDayMemo));
		if (!i) return {
			kind: "refused",
			reason: "No activity data"
		};
		const [s, r, o, l] = await Promise.all([
			Mt(e, await Ma(t), a, this.fileBatch(e, a)?.activityDayMemo),
			ut(e, t, a),
			Vt(e, a),
			Xe(e, a)
		]), c = k().scoring(), u = pe(c, l), d = n.nonwearDetectors ?? ("ggir" === Ta(u.algorithm) ? c.nonwearDetectorsGgir : u.nonwearDetectorsCounts), p = Qa(l?.sourceType, l?.sourceProfileId), f = await mh([i, s], d, Aa(), p, a, void 0, this.fileBatch(e, a)?.activityDayMemo), h = hh(f);
		if (null !== h) return {
			kind: "refused",
			reason: h
		};
		const g = await Oa({
			day: i,
			nextDay: s,
			verdict: Bn,
			angle: !1,
			requireScores: !1,
			missingScoresReason: "",
			choiAxis: Aa(),
			laterDays: () => Promise.resolve([])
		});
		if ("counts" !== g.kind) return {
			kind: "refused",
			reason: "refused" === g.kind ? g.reason : Ea
		};
		const y = g.unpacked, { timestamps: w, axisY: _ } = y, v = w[0] ?? 0, b = w[w.length - 1] ?? v, S = ba(await ma(f.available, y.nonwearMasksByDetector, {
			offPeriods: o.filter((e) => e.startTimestamp <= b && e.endTimestamp >= v),
			source: p
		}, {
			timestampsSec: w,
			epochLenSec: await We(w, {
				day: i,
				file: l
			})
		})), I = gh(S), A = yh(f.available), T = r ? Lt(r) : [], N = n.existingSleepMarkers, M = await async function(e) {
			if (0 === e.timestamps.length || 0 === e.activityCounts.length) return wt("No activity data");
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
				epoch_length_seconds: e.epochLengthSeconds ?? m,
				threshold: e.threshold ?? 0,
				min_duration_minutes: e.minDurationMinutes ?? 10,
				zero_activity_ratio: .65,
				diary_min_duration_minutes: e.diaryMinDurationMinutes ?? 1,
				...Bt(e.nonwearDetectors, e.nonwearWeight, {
					alwaysNameSingle: !0,
					memberFlags: e.nonwearMemberFlags
				})
			}, n = [
				JSON.stringify(t),
				e.timestamps instanceof Float64Array ? e.timestamps : Float64Array.from(e.timestamps),
				e.activityCounts instanceof Float64Array ? e.activityCounts : Float64Array.from(e.activityCounts),
				e.choiNonwear instanceof Uint8Array ? e.choiNonwear : Uint8Array.from(e.choiNonwear ?? [])
			], a = n.slice(1).filter((t) => ArrayBuffer.isView(t) && t !== e.timestamps && t !== e.activityCounts && t !== e.choiNonwear), i = await x().placeNonwearMarkers(Y(n, a.map((e) => e.buffer)));
			return i ? {
				kind: "placed",
				nonwear_markers: i.nonwear_markers,
				notes: i.notes
			} : wt("Nonwear placement is unavailable in this build — reload while online to update the local engine.");
		}({
			timestamps: w,
			activityCounts: _,
			diaryNonwear: T,
			choiNonwear: A ? null : I.choiNonwear,
			nonwearDetectors: I.nonwearDetectors,
			...I.nonwearWeight ? { nonwearWeight: I.nonwearWeight } : {},
			...I.nonwearMemberFlags ? { nonwearMemberFlags: I.nonwearMemberFlags } : {},
			sensorNonwearPeriods: A ? o.filter((e) => e.startTimestamp <= b && e.endTimestamp >= v).sort((e, t) => e.startTimestamp - t.startTimestamp).map((e) => [e.startTimestamp, e.endTimestamp]) : [],
			existingSleepMarkers: N,
			analysisDate: t,
			threshold: n.threshold
		});
		return "refused" === M.kind ? M : {
			kind: "placed",
			nonwear_markers: M.nonwear_markers.map((e) => pa(e, S?.available.length ?? 0)),
			notes: [...fa(f.dropped, Ta(u.algorithm)), ...M.notes]
		};
	}
	async listFileScoringCounts(e, t, n) {
		return this.fileScoringCountsIn(J(), e, t, n);
	}
	async fileScoringCountsIn(e, t, n, a) {
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const { nightStartHour: i, nightEndHour: s } = zh(a), [r, o] = await Promise.all([e.files.bulkGet([...t]), Ue(t, e)]);
		return Promise.all(t.map(async (t, a) => {
			const l = r[a], c = l?.availableDates ?? await yt(t, e), u = /* @__PURE__ */ new Map();
			for (const e of o[a]?.rows ?? []) e.username === n && u.set(e.date, wn(u.get(e.date), e));
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
		const i = J(), s = (await Xe(e, i))?.nightDifficulty, { nightStartHour: r, nightEndHour: o } = zh(a);
		if (s?.nightStartHour !== r || s.nightEndHour !== o || !t.every((e) => e in s.byDate)) return null;
		void 0 === s.notRankableReason && x().getComputeIdentity().then(({ sourceRevision: t }) => {
			s.sourceRevision !== String(t) && Oh(e, i, a);
		}, () => {});
		const [l, c] = await Promise.all([ge(e, i), _h(i, e)]), u = St(l, n), d = St(l, it), p = on(l), f = t.filter((e) => (p.get(e)?.size ?? 0) >= 2), m = await Bm(f.flatMap((e) => [{
			usersForDate: p.get(e),
			kind: "sleep"
		}, {
			usersForDate: p.get(e),
			kind: "nonwear"
		}])), h = new Set(f.filter((e, t) => m[2 * t].disagree || m[2 * t + 1].disagree));
		return t.map((e) => ({
			date: e,
			...Mh(u.get(e), h.has(e), d.get(e), wh(c, e, d.get(e))),
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
		const o = H(s);
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const l = J(), c = ++this.nextComplexityGenerationToken;
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
				const t = await ge(e, l), [a, i, s, r, o] = await Promise.all([
					Pt(e),
					ft(e),
					kt(e, l, t),
					sh(e, l),
					Xe(e)
				]);
				return [
					St(t, n),
					St(t, it),
					a,
					i,
					s,
					on(t),
					ih(t),
					r,
					o
				];
			}, [p, f, m, h, g, y, w, _, v] = "function" == typeof l.transaction ? await l.transaction("r", [
				l.markers,
				l.activityDays,
				l.diaryEntries,
				l.sensorNonwear,
				l.dailyGgirSummaries,
				l.files
			], async () => {
				if (J() !== l) throw new Error("The local workspace changed before difficulty inputs could be read.");
				const e = await d();
				if (J() !== l) throw new Error("The local workspace changed while difficulty inputs were being read.");
				return e;
			}) : await d(), b = fh(m), S = new Map((await Cn(h, b, o)).map((e) => [e.analysisDate, e])), { nightStartHour: k, nightEndHour: I } = zh(a), A = t.filter((e) => (y.get(e)?.size ?? 0) >= 2), x = await Bm(A.flatMap((e) => [{
				usersForDate: y.get(e),
				kind: "sleep"
			}, {
				usersForDate: y.get(e),
				kind: "nonwear"
			}]), o), T = new Set(A.filter((e, t) => x[2 * t].disagree || x[2 * t + 1].disagree)), N = await _h(l, e), M = (e) => t.map((t) => ({
				date: t,
				...Mh(p.get(t), T.has(t), f.get(t), wh(N, t, f.get(t))),
				complexity_pre: e(t),
				complexity_post: null
			})), $ = v?.nightDifficulty;
			$?.nightStartHour === k && $.nightEndHour === I && t.every((e) => e in $.byDate) && (s?.throwIfAborted(), i(M((e) => $.byDate[e] ?? null)));
			const R = [], z = [...t], D = await Yi(z, o), C = new Map(z.map((e, t) => [e, D[t] ?? !1])), O = Me(m.values()), P = /* @__PURE__ */ new Map();
			for (const n of t) {
				s?.throwIfAborted();
				const t = await dh(m, n, O, o, P);
				if (!t) continue;
				const { timestamps: a, axisY: i, sleepScores: r, nonwearResults: l, temperature: c, detachNonwear: u, ggirTimestamps: d, ggirAnglez: p } = t, f = vh(a, a.length), h = vh(i, f.length), y = bh(r, f.length);
				if (0 === f.length || 0 === h.length || 0 === y.length) continue;
				const b = S.get(n), k = w.get(n) ?? null, I = await Ge((t) => {
					const a = Fn(zt(b), t), i = Fn(cn(b), t);
					return {
						naps: b ? Ut(b).map(([e, n]) => ({
							onset_time: Fn(e, t),
							offset_time: Fn(n, t)
						})).filter((e) => null != e.onset_time) : [],
						nonwear: b ? Lt(b).map(([e, n]) => [Fn(e, t), Fn(n, t)]).filter((e) => null != e[0] && null != e[1]).map(([e, t]) => ({
							start_time: e,
							end_time: t
						})) : [],
						onset: a,
						wake: i,
						inBed: Fn(An(b), t),
						outBed: Fn(Ft(b), t),
						guiderTargets: kh(n, a, i, k, et(e), t)
					};
				}, new Yt(o)), A = I.naps, x = I.nonwear, T = f[0] ?? 0, N = f[f.length - 1] ?? T, M = I.onset, $ = I.wake, z = _.get(n)?.calibration?.errorEnd;
				R.push({
					analysis_date: n,
					epoch_length_seconds: await Ot(f, hn({
						day: m.get(n),
						file: v
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
					is_weekend: C.get(n) ?? null,
					guider_targets: I.guiderTargets,
					anglez: Sh(f, d, p),
					light: [],
					temperature: vh(c, f.length),
					heart_rate: [],
					detach_nonwear: bh(u, f.length),
					calibration_error: "number" == typeof z && Number.isFinite(z) ? z : null,
					imputed_fraction: null,
					hdcza_window: k
				});
			}
			let F, j;
			try {
				if (R.length > 0) {
					const n = {
						config: { signals: {
							night_start_hour: k,
							night_end_hour: I
						} },
						days: R
					}, a = {
						config: n.config ?? null,
						days: n.days.map((e) => ({
							analysis_date: e.analysis_date,
							epoch_length_seconds: e.epoch_length_seconds,
							timestamps: e.timestamps
						}))
					}, i = o, u = await i.getComputeIdentity(), d = await Rm({
						runtimeIdentity: u,
						difficultyRequestWireJson: Xf(n),
						signalsRequestWireJson: em(n),
						sourceContentHash: v?.sourceContentHash ?? null
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
					}), ...f], h = await Fm(e, d.generationKey, l) ?? await Fm(e, (await Rm({
						runtimeIdentity: ch(u),
						difficultyRequestWireJson: d.difficultyRequestWireJson,
						difficultyRequestSha256: d.difficultyRequestSha256,
						signalsRequestWireJson: d.signalsRequestWireJson,
						signalsRequestSha256: d.signalsRequestSha256,
						sourceContentHash: d.sourceContentHash
					})).generationKey, l);
					if (h) F = {
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
						j = p.release;
						const f = await p.run;
						if (s?.throwIfAborted(), !uh(u, await i.getComputeIdentity())) throw new Error("The local scoring runtime changed while difficulty was being computed. Re-run the calculation.");
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
									const s = await pm(n), r = await pm(a), o = null === i ? null : await pm(i);
									Dm(s, e.expectedHashes?.projectionSha256), Dm(r, e.expectedHashes?.difficultyResultSha256), Dm(o, e.expectedHashes?.signalsResultSha256);
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
										projectionSha256: s,
										difficultyResultSha256: r,
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
							const i = await async function(e, t = J(), n = "fresh", a) {
								"fresh" !== n && "restore" !== n && om();
								const i = await r.waitFor(Cm(e));
								return sa([t.files, t.complexityEvidence], async () => {
									const e = await t.files.get(i.fileId);
									Om(i, e);
									const a = await t.complexityEvidence.where("[fileId+generationKey]").equals([i.fileId, i.generationKey]).first();
									if (a) {
										const e = await r.waitFor(Cm(a));
										if (o = i, (s = e).generationKey !== o.generationKey || s.projectionSha256 !== o.projectionSha256 || s.difficultyResultSha256 !== o.difficultyResultSha256 || s.difficultyRequestSha256 !== o.difficultyRequestSha256 || s.signalsRequestSha256 !== o.signalsRequestSha256 || s.sourceContentHash !== o.sourceContentHash) throw new sm();
										if (null !== e.signalsResultSha256 && null !== i.signalsResultSha256 && e.signalsResultSha256 !== i.signalsResultSha256) throw new sm();
										if (null === e.signalsByDate && null !== i.signalsByDate) {
											const n = new Date(Math.max(Date.now(), Date.parse(e.createdAt))).toISOString(), a = {
												...e,
												signalsByDate: i.signalsByDate,
												signalsResultSha256: i.signalsResultSha256,
												updatedAt: n
											}, s = await r.waitFor(zm(a)), o = {
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
										if (i && Date.parse(t.createdAt) < Date.parse(i.createdAt)) throw new rm();
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
									return await Pm(u, "inserted", d), {
										record: u,
										disposition: "inserted",
										evicted: d
									};
								}, t, a);
							}(n, l, "fresh", s);
							"inserted" === i.disposition && await async function(e, t, n) {
								try {
									await Ve.recordWorkspaceDurably(q.SYSTEM_RECALCULATION, {
										subject: "night_complexity_generation",
										generationKey: e.generationKey,
										difficultyResultSha256: e.difficultyResultSha256,
										dateCount: Object.keys(e.difficultyByDate).length
									}, t, n) || console.warn("[local-data-source] Complexity evidence was saved, but its audit event is still pending.");
								} catch {
									console.warn("[local-data-source] Complexity evidence was saved, but its audit event could not be recorded.");
								}
							}(i.record, l, s), F = {
								token: c,
								evidenceDb: l,
								coveredDates: [...new Set(t)].sort(),
								signalRequest: null == i.record.signalsByDate ? m : null,
								projectionInput: xh(i.record),
								difficultyByDate: Th(i.record),
								signalsByDate: Nh(i.record),
								computeIdentity: i.record.runtimeIdentity,
								projectionRevision: Ih(i.record),
								evidence: Ah(i.record)
							};
						} else console.warn("[local-data-source] Night difficulty is unavailable from the current local scoring runtime."), F = {
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
				} else F = {
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
				F = await this.awaitNewerComplexitySnapshot(e, c);
			} finally {
				j?.();
			}
			s?.throwIfAborted(), u(F), this.latestComplexityTokenByFile.get(e) === c && (s?.throwIfAborted(), this.publishComplexitySnapshot(e, F, s), this.complexityFailureByFile.delete(e));
			let B = F;
			if (this.latestComplexityTokenByFile.get(e) !== c) {
				const t = this.complexityGenerationByFile.get(e);
				if (t && t.token !== c) B = await t.promise;
				else {
					const t = this.complexityFailureByFile.get(e);
					if (void 0 !== t && t.token === this.latestComplexityTokenByFile.get(e)) throw t.error;
					const n = this.complexitySnapshotByFile.get(e);
					if (!n) throw new Error("A newer local difficulty generation replaced this result.");
					B = n;
				}
			}
			const L = B.difficultyByDate;
			if (B === F && (0 === R.length || null !== F.computeIdentity)) {
				const n = [...m.values()].map(Oe), a = 0 === R.length && n.some((e) => e.ggir) && n.every((e) => e.ggir || 0 === e.timestamps.length), i = {
					nightStartHour: k,
					nightEndHour: I,
					byDate: Object.fromEntries(t.map((e) => [e, L[e]?.difficulty ?? null])),
					sourceRevision: String((F.computeIdentity ?? await o.getComputeIdentity()).sourceRevision),
					...a ? { notRankableReason: "GGIR nights are not ranked by difficulty: the difficulty core reads 60 s activity counts and sleep scores, and a GGIR folder holds 5 s ENMO, anglez and SIB only." } : {}
				};
				if (JSON.stringify(v?.nightDifficulty) !== JSON.stringify(i)) try {
					s?.throwIfAborted(), await E(l, [l.files], () => l.files.update(e, { nightDifficulty: i }), s);
					for (const t of Dh) t(e, l);
					s?.throwIfAborted();
				} catch {
					s?.throwIfAborted(), console.warn("[local-data-source] Stored night difficulty could not be written.");
				}
			}
			return M((e) => L[e]?.difficulty ?? null);
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
		const a = (await Xe(e))?.availableDates?.slice().sort() ?? [], i = a.indexOf(t);
		if (i < 0) return null;
		const s = i > 0 ? a[i - 1] ?? null : null, r = i < a.length - 1 ? a[i + 1] ?? null : null, [o, l] = await Promise.all([s ? at(e, s, n) : null, r ? at(e, r, n) : null]), c = (e) => (e?.sleepMarkers ?? []).map((e) => ({
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
		const n = J(), a = await jt(e, t, void 0, n);
		if (0 === e) return a;
		const i = await qt(e, t, n);
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
				M(String(u.id)),
				M((/* @__PURE__ */ new Date(1e3 * u.clientTimestamp)).toISOString()),
				M(u.action),
				M(eh(null === t ? "" : th(t, u.action), u.action, t, l)),
				M(u.username),
				M(String(u.fileId)),
				M(u.analysisDate ?? ""),
				M(null == u.studyId ? "" : String(u.studyId)),
				M(u.sessionId),
				M(String(u.sequence)),
				M(u.eventHash ?? ""),
				M(u.previousHash ?? ""),
				M(null === t ? "" : JSON.stringify(t)),
				M(n?.basis ?? "unanchored"),
				M(void 0 === n ? "" : gt(n.state)),
				M(void 0 === n || "unanchored" === n.basis ? "" : JSON.stringify(n.state))
			].join(","));
		}
		return new Blob([`${c.join("\n")}\n`], { type: "text/csv;charset=utf-8" });
	}
	async verifyAuditChain(e, n) {
		const a = await ln();
		return {
			...await bn(a),
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
		const a = t.signalRequest, i = t.computeIdentity, s = t.evidence, o = t.evidenceDb, l = this.complexitySignalGenerationByFile.get(e);
		if (l?.token === t.token) return await l.promise;
		const c = (async () => {
			const n = () => this.complexitySnapshotByFile.get(e) ?? null, l = () => {
				const a = n();
				if (!a || a.token !== t.token) return a;
				const i = {
					...a,
					signalRequest: null
				};
				return this.publishComplexitySnapshot(e, i), i;
			};
			try {
				const c = x(), u = await c.getComputeIdentity();
				if (!uh(i, u)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), l();
				const d = await c.computeFileSignals(a), p = await c.getComputeIdentity();
				if (!uh(i, p)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), l();
				if (!ph(d.byDate, JSON.parse(a[0]).days)) throw new Error("The local scoring runtime returned incomplete night-signal evidence.");
				if (this.disposed) throw new Error("The local workspace changed before night-signal evidence could be saved.");
				const f = n();
				if (!f) return null;
				if (f.token !== t.token) return f;
				if (f.signalsByDate) return f;
				const m = await async function(e, t = J(), n) {
					(!Number.isInteger(e.fileId) || e.fileId <= 0) && om(), lm(e.generationKey);
					const a = dm(e.signalsByDate), i = await pm(a);
					return Dm(i, e.signalsResultSha256), sa([t.files, t.complexityEvidence], async () => {
						const n = await t.complexityEvidence.where("[fileId+generationKey]").equals([e.fileId, e.generationKey]).first();
						if (!n) throw new im();
						const s = await r.waitFor(Cm(n));
						if (Om(s, await t.files.get(s.fileId)), null !== s.signalsResultSha256) {
							if (s.signalsResultSha256 !== i) throw new sm();
							return {
								record: s,
								disposition: "deduplicated",
								evicted: 0
							};
						}
						const o = new Date(Math.max(Date.now(), Date.parse(s.createdAt))).toISOString(), l = {
							...s,
							signalsByDate: a,
							signalsResultSha256: i,
							updatedAt: o
						}, c = await r.waitFor(zm(l)), u = await r.waitFor(Em({
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
					generationKey: s.generationKey,
					signalsByDate: d.byDate
				}, o), h = n();
				if (!h) return null;
				if (h.token !== t.token) return h;
				if (h.signalsByDate) return h;
				const g = {
					...h,
					signalRequest: null,
					projectionInput: xh(m.record),
					difficultyByDate: Th(m.record),
					signalsByDate: Nh(m.record),
					computeIdentity: m.record.runtimeIdentity,
					projectionRevision: Ih(m.record),
					evidence: Ah(m.record)
				};
				return this.publishComplexitySnapshot(e, g), g;
			} catch {
				return console.warn("[local-data-source] Full night-signal detail is temporarily unavailable; showing the retained difficulty result."), n();
			}
		})();
		this.complexitySignalGenerationByFile.set(e, {
			token: t.token,
			promise: c
		});
		try {
			return await c;
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
				const a = await Xe(e), i = a?.availableDates?.includes(t) ? [...new Set(a.availableDates)].sort() : [t];
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
			plot_intervals: oh(r ?? void 0, s ?? void 0, t, a?.projectionRevision ?? void 0)
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
		const f = c ?? J();
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
		const l = r ?? J(), c = jm(l, {
			username: n || "anonymous",
			studyId: k().scoring().selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, o);
		return await Gn({
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
				const s = await $h(a, i, c, n);
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
		const { processLocalFile: a } = await import("./local-processing-bm0y4uMK.js"), i = k().scoring(), s = this.operationProcessingOptions, r = s?.devicePreset ?? i.devicePreset, o = s?.skipRows ?? i.skipRows, l = s?.choiAxis ?? i.choiAxis, c = s?.columnMapping ?? i.columnMapping, u = s?.countEpochSeconds ?? (30 === i.epochLengthSeconds ? 30 : 60);
		e.name.toLowerCase().endsWith(".csv") && r && "actigraph" !== r && "geneactiv" !== r && ah(r, c);
		const d = J(), p = await a(e, r ?? "actigraph", o ?? 10, t, l ?? "vector_magnitude", c, n, {
			...s ? {} : Hs(i),
			countEpochSeconds: u,
			sleepPeriodDetectionConfig: Rn(i.sleepPeriodDetection),
			...this.operationProcessingOptions
		});
		return p.alreadyImported || (Oh(p.fileId, d, void 0, n), function(e, t, n) {
			X({
				kind: Z.PHYSICAL_ACTIVITY,
				key: `${Z.PHYSICAL_ACTIVITY}:${String(e)}`,
				label: "Store activity answers",
				workspaceId: t.name,
				signal: n,
				rerun: !0,
				run: (n) => Re(async (a) => {
					const [{ computeLocalPhysicalActivityAnalysis: i, physicalActivityStoreAnalysisOptions: s }, { createPhysicalActivityWorkspaceRepository: r, loadPhysicalActivityWorkspaceDays: o }] = await Promise.all([import("./local-physical-activity-analysis-JwxszsXL.js"), import("./physical-activity-workspace-days-D8eTem7-.js")]);
					if (n.signal.throwIfAborted(), n.progress(0, 2), J() !== t) return;
					const l = s(k().scoring());
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
		return (t ? await On(e, t) : await Le(e)).map(rh);
	}
};
function Uh(e, t, n, a) {
	const i = (/* @__PURE__ */ new Date()).toISOString(), s = Hn(n, t), r = (e, t = 0) => "number" == typeof e && Number.isFinite(e) ? e : t;
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
const Zh = "Re-import this file to compute GGIR's invalid mask.", Hh = "Hip HDCZA needs the longitudinal angle (anglex or angley), which this recording lacks on GGIR's grid; no night was placed.", qh = "nonwear_detector_unavailable";
function Wh(e) {
	return e.isInvalidNight || e.sleepMarkers.some((e) => function(e, t = !1) {
		return "auto" !== e.source || B(e, t);
	}(e));
}
async function Vh(e, t, n, a) {
	return e.nightIntervalOverlap(t, n, Float64Array.from(a, ([e]) => e), Float64Array.from(a, ([, e]) => e), Float64Array.from(a, ([, , e]) => void 0 !== e && void 0 === e.unavailable ? e.weight : 0));
}
function Jh(e, t) {
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
async function Kh(e, t, n, a) {
	const i = a.map(async ([, , a]) => {
		if (!a?.memberFlags || !a.timestamps) return [];
		const { memberFlags: i } = a, s = await e.epochsOverlapping(Float64Array.from(a.timestamps).subarray(0, i.length), 60, t, n);
		return s ? e.nonwearContributors([...i], en(a.detectors), s[0], s[1]) : [];
	});
	return en([...new Set((await Promise.all(i)).flat())]);
}
async function Yh(e, t, n, a, i, s, r) {
	const o = va(t, n), l = Object.fromEntries(Object.entries(o).map(([e, t]) => [e, new Uint8Array(t)])), c = await We(e, { day: t }, r), u = await ma(i, l, {
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
async function Xh(e, t, n = [], a = [], i = {}, s = null, r = x()) {
	const o = [], l = n.map(([e, t]) => ({
		startTimestamp: e,
		endTimestamp: t
	}));
	for (const [c, u] of Object.entries(e)) {
		const e = t[c]?.timestamps;
		e && 0 !== e.length && o.push(...await Yh(e, {
			nonwearResults: u.nonwear.buffer,
			nonwearResultsChoi2011: u.nonwearChoi2011?.buffer ?? null,
			detachNonwear: u.detachNonwear?.buffer ?? null,
			...i[c]
		}, "", l, a, s, r));
	}
	return o;
}
async function Qh(e, t, n, a = He, i) {
	return Ge((i) => {
		if (!e) return [];
		const s = [];
		for (const { start: r, end: o } of Ae(e)) {
			if (!r || !o) continue;
			const e = i.resolveSpan(r, o, t, Je.daytime, a);
			e && s.push({
				markerType: R.NAP,
				markerIndex: n + s.length + 1,
				onsetTimestamp: e[0],
				offsetTimestamp: e[1]
			});
		}
		return s;
	}, new Yt(i));
}
function eg(e) {
	const t = e instanceof Error ? e.message : "";
	return t.startsWith("runGgirPart3:") ? t : t.includes("timed out") ? `it timed out after ${String($ / 6e4)} minutes` : t.includes("is not a function") ? "this build's actours WASM has no runGgirPart3 export" : "the actours WASM runtime failed (out of memory or a Rust panic)";
}
async function tg(e, t, n, a = [], i = /* @__PURE__ */ new Map(), s, r, o, l = "wrist", c = J(), u, d, p, f, m, h) {
	const g = c, w = r?.ggirConfig ?? await Ur(g), _ = t.length;
	if (0 === _) return null;
	const b = i.values().next().value;
	b && we(e, b.importMappingProvenance);
	const S = d ?? x(), A = p ?? (() => I(S)), T = await ko(l, await So(s?.variant, w.csvText, S), S), N = T.variant, M = T.sensorLocation, z = {
		...o ?? {},
		haspt_variant: N,
		hdcza_proposal_revision: 6,
		ggir_config_sha256: w.sha256
	}, D = r?.angley5s, E = r?.anglex5s, C = D && D.length === _ ? D : void 0, P = E && E.length === _ ? E : void 0, F = r?.invalid5s?.length === _ ? r.invalid5s : void 0, j = void 0 !== m && void 0 !== F;
	if (void 0 === F) return Zh;
	const B = "hip" === M && !C && !P;
	if (B && (console.warn("[local-processing] Hip HDCZA was skipped because no aligned longitudinal axis was available."), !j)) return Hh;
	let L = !1;
	const G = r?.dstRuns ?? [], U = F, Z = r?.activity5s?.length === _ ? r.activity5s : void 0;
	y(u, "before local HASPT placement");
	const H = await V(S, (e) => e.runGgirPart3({
		anglez: t,
		ggirConfigCsv: w.csvText,
		hasibCounts: Jt(w.csvText, r?.zeroCrossings5s),
		...P ? { anglex: P } : {},
		...C ? { angley: C } : {},
		...Z ? { enmo: Z } : {},
		invalid: U,
		startTsEpochSec: n,
		hasptAlgo: N,
		...void 0 !== s?.config ? { hasptConfig: s.config } : {},
		..."hip" !== M || P && C ? {} : { longitudinalAxis: C ? 2 : 1 },
		...r?.timezone ? { timezone: r.timezone } : {}
	}), {
		ms: $,
		label: `local ${N} placement`,
		signal: u,
		cancel: A
	}).then((e) => ({
		result: e,
		failure: null
	}), (e) => (v(e, u, `local ${N} placement`), console.warn("[local-processing] GGIR Part 3 failed for this recording."), {
		result: null,
		failure: eg(e)
	}));
	if (H.result && j && m(H.result.part3Sib5s), B) return Hh;
	if (!H.result) return `GGIR Part 3 (${N}) failed: ${H.failure}`;
	const q = H.result.part3SptNights, W = await S.ggirIndicesToWallClockMs(Uint32Array.from(q.flatMap((e) => [e.onsetIdx, e.wakeIdx])), 1e3 * n, [...G], r?.wallClockMs ? Float64Array.from(r.wallClockMs) : void 0), K = q.map((e, t) => ({
		onsetTimestamp: W[2 * t] / 1e3,
		offsetTimestamp: W[2 * t + 1] / 1e3,
		analysisDate: e.analysisDate
	}));
	for (const { onsetTimestamp: I, offsetTimestamp: x, analysisDate: $ } of K) {
		y(u, "before local HASPT marker placement");
		const t = await at(e, $, it, O.VAN_HEES_2015, null, g);
		if (t && Wh(t)) continue;
		const n = await Vh(S, I, x, a), s = Jh(n.seconds, a), r = 0 === s.available.length && 0 === s.dropped.length ? z : {
			...z,
			nonwear_detectors_available: s.available,
			nonwear_detectors_dropped: s.dropped.map(({ detector: e, reason: t }) => ({
				detector: e,
				reason: t
			}))
		}, c = fa(s.dropped, "ggir"), d = (e) => [e, ...c].join("; "), p = n.weightedFraction, m = p > 0 && s.available.length > 1 ? await Kh(S, I, x, a) : null, w = await Qh(i.get($) ?? null, $, 1, et(e), S), _ = Ln(null, l), b = [{
			markerType: R.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: I,
			offsetTimestamp: x
		}, ...w].map((e) => ({
			...e,
			source: "auto",
			settingsHash: _
		}));
		y(u, "before local HASPT marker persistence"), await k().nights.writeHeadless({
			signal: u,
			fileId: e,
			date: $,
			expected: Un(t),
			username: "auto_score",
			sleepMarkers: b,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: d(`${N} SPT: ${ne(I)} → ${ne(x)}` + (w.length > 0 ? `; ${w.length} diary nap(s)` : "") + (p > 0 ? `; selected-detector nonwear overlap ${Math.round(100 * p)}%` : "") + (m ? ` from ${wa(m, s.available.length)}` : "")),
			algorithm: O.VAN_HEES_2015,
			sleepPeriodDetectionConfig: r
		}, g, {
			...f ? { binding: f } : {},
			events: () => f ? [{
				action: "auto_score_applied",
				payload: Kn({
					algorithm: O.VAN_HEES_2015,
					sleepPeriodDetection: o ?? null,
					sleepCount: 1,
					napCount: w.length,
					markers: b
				})
			}] : []
		}).then(() => !0, (e) => (v(e, u, "local HASPT marker persistence"), console.warn("[local-processing] HDCZA marker persistence failed."), L = !0, !1)) && h?.($);
	}
	return L ? "one or more auto-marker writes failed" : null;
}
const ng = /* @__PURE__ */ new Set([
	2,
	5,
	6
]);
function ag(e) {
	return !1 !== e.imputeTimegaps && (null == e.dataFormat || ng.has(e.dataFormat)) && (null == e.configtz || e.configtz === e.desiredtz);
}
function ig(e) {
	return `GGIR zone ${e} from the GT3X info.txt TimeZone: the app's assumption, since GGIR takes desiredtz and configtz from its own settings`;
}
async function sg(e, t, n, a, i) {
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
var rg = class extends Error {
	name = "GgirImportRefusal";
	category;
	constructor(e) {
		super(_t(e)), this.category = e;
	}
};
function og(e, t) {
	const n = yn(e);
	if (n && (n.notRead && n.notRead.length > 0 && t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR output",
		warning: n.notRead.map((e) => `not read: ${e.path}: ${e.reason}.`).join(" ")
	}), n.refusedNotRead)) throw new rg("ggir-not-read");
}
function lg(e, t) {
	const { username: n, selectedStudyId: a } = k().scoring();
	return Ve.captureWorkspaceBinding(e, {
		signal: t,
		username: n,
		studyId: a
	});
}
const cg = /* @__PURE__ */ new WeakMap();
async function ug(e, t, n, a) {
	const i = e.timestampsMs.length;
	if (0 === i || e.enmo5s.length !== i || e.anglez5s.length !== i) throw new Error("GGIR meta RData did not contain aligned metashort timestamp, ENMO, and anglez columns.");
	const s = {
		desiredtz: e.desiredtz ?? void 0,
		dataFormat: e.inspection?.dformc ?? void 0,
		...a ? Nt(await n.ggirConfigValues(a)) : {}
	}, { runs: r, storedMs: o, steps: l } = await n.wallClockDstPlaceholders(e.timestampsMs, 1e3 * e.epochSeconds, ag(s)), c = o.filter((e) => !Number.isNaN(e)), u = (e.timestampsMs[0] ?? 0) / 1e3, d = t?.sources.ms2 ? t.nonwear : e.nonwearShort, p = {
		...d.length === i ? { nonwear: d } : {},
		...e.invalidShort.length === e.timestampsMs.length ? { invalid: e.invalidShort } : {}
	}, f = t ? t.sources.ms3 ? t.sib : void 0 : e.part3Sib5s?.length === i ? e.part3Sib5s : void 0, m = await gs(n, o, e.enmo5s, e.anglez5s, {
		anglex: e.anglex5s ?? void 0,
		angley: e.angley5s ?? void 0,
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
const dg = /* @__PURE__ */ new WeakMap();
var pg = class extends Error {};
const fg = /* @__PURE__ */ new WeakMap();
async function mg(e, t, n, a = !0) {
	let i = fg.get(t);
	if (i || (i = /* @__PURE__ */ new Map(), fg.set(t, i)), i.has(e)) {
		const t = i.get(e);
		if (!(t instanceof pg)) return t;
		if (!a) throw t;
	}
	let s = dg.get(t);
	s || (s = /* @__PURE__ */ new Map(), dg.set(t, s));
	const r = s.get(e);
	if (r) return r;
	const o = (async () => {
		const a = await Xe(e, t);
		if (!Kt(a)) return null;
		if (0 === (await yt(e, t)).length) return null;
		const i = await t.ggirResultsBundles.get(e);
		if (!i) return null;
		const s = H(n);
		if (a?.ggirSavedNonwearSettled) return ui(i.configCsv, s);
		const r = [...(await Pt(e, t)).values()].filter((e) => e.ggirTimestamps?.byteLength && e.unifiedNonwearMasks?.[dt.ggir_saved]?.byteLength !== e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), o = r.filter((e) => e.vanHeesNonwear?.byteLength === e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), l = r.filter((e) => !o.includes(e)), c = l.length ? await W(t, e) : null, u = c?.ms2 ? await s.reviewGgirResults({
			part1: new Uint8Array(c.part1),
			configCsv: c.configCsv,
			ms2: new Uint8Array(c.ms2),
			edits: [],
			crossCheck: !1
		}) : null, d = c && u?.nonwear.length ? (await ug(await s.readGgirMeta(new Uint8Array(c.part1), null, !0), u, s, c.configCsv)).ggirByDate : null, p = [...o.map((e) => ({
			date: e.date,
			unifiedNonwearMasks: {
				...e.unifiedNonwearMasks,
				[dt.ggir_saved]: e.vanHeesNonwear
			},
			vanHeesNonwear: null
		})), ...d ? l.map((e) => {
			const t = d.get(e.date), n = new Float64Array(e.ggirTimestamps);
			if (!t?.nonwear || t.timestamps.length !== n.length || !n.every((e, n) => e === t.timestamps[n])) throw new pg("Saved GGIR nonwear does not match the stored epoch grid.");
			return {
				date: e.date,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					[dt.ggir_saved]: new Uint8Array(t.nonwear).buffer
				},
				vanHeesNonwear: null
			};
		}) : []];
		return await E(t, [
			t.projectMeta,
			t.activityDays,
			t.physicalActivityFileSummaries,
			t.files
		], async () => {
			await Promise.all(p.map(({ date: a, ...i }) => Ee(e, a, i, t, n))), await t.files.update(e, { ggirSavedNonwearSettled: !0 });
		}, n), p.length, ui(i.configCsv, s);
	})().then((t) => (i.set(e, t), t)).catch((t) => {
		throw !n?.aborted && t instanceof pg && i.set(e, t), console.warn("[local-processing] Could not fill saved GGIR nonwear from retained ms2."), t;
	}).finally(() => {
		s.delete(e);
	});
	return s.set(e, o), o;
}
async function hg(e, t, n, a) {
	const i = a ?? await c(e, void 0, n), s = await Xt(i.fullHash, t) ?? await kn(i.prefixHash, t, i.fullHash);
	return s?.id ? s : void 0;
}
const gg = [
	["ms2", "stockMs2"],
	["ms3", "stockMs3"],
	["ms4", "stockMs4"],
	["ms5", "stockMs5"]
];
async function yg(e, t, n) {
	const a = yn(t);
	if (!a) return null;
	const [i, ...s] = await Promise.all([a.configCsv.text(), ...gg.map(([e]) => a[e]?.arrayBuffer())]), r = await a.qwindowCsv?.text();
	return n.transaction("rw", [
		n.files,
		n.ggirResultsBundles,
		n.ggirResultsBlobs,
		n.ggirCorrectedValues
	], async () => {
		const [t, o] = await Promise.all([n.ggirResultsBlobs.get(e), n.ggirResultsBundles.get(e)]);
		return t && o ? o.configCsv === i && gg.every(([e, n], a) => ((e, t) => {
			if (void 0 === e || void 0 === t) return e === t;
			const n = new Uint8Array(e), a = new Uint8Array(t);
			return n.length === a.length && n.every((e, t) => e === a[t]);
		})(t[n] ?? t[e], s[a])) ? !a.resultsCsv || t.resultsCsv ? null : (await n.ggirResultsBundles.update(e, {
			resultsCsv: a.resultsCsv,
			...void 0 !== r && void 0 === t.qwindowCsv ? { qwindowCsv: r } : {}
		}), await n.ggirCorrectedValues.delete(e), await rn(n, [e]), "added") : "different_run" : null;
	});
}
const wg = {
	none: "File already imported",
	added: "File already imported; GGIR's results files added",
	different_run: "File already imported; this folder holds a different GGIR run of it, so the stored one was kept"
};
async function _g(e, t, n, a, i, s, r) {
	const o = cg.get(e);
	cg.delete(e);
	const l = i?.db ?? J(), u = a?.ggirConfig ?? await Ur(l), d = s ?? x(), p = i ?? {
		db: l,
		attemptId: ee(),
		auditBinding: lg(l, n),
		signal: n,
		recording: await Hr(e, n, d)
	};
	y(n, "processGgirMetaRDataFile"), og(e, t);
	const f = r ?? (() => {
		I(d);
	});
	t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR meta RData..."
	});
	const { prefixHash: m, fullHash: h } = o?.value?.hashes ?? await c(e, (e) => {
		t?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, n), g = await hg(e, l, n, {
		prefixHash: m,
		fullHash: h
	});
	if (g?.id) {
		const n = await yg(g.id, e, l);
		t?.({
			phase: "complete",
			percent: 100,
			message: wg[n ?? "none"]
		});
		const a = g.availableDates;
		return await gn(e.name, l), {
			alreadyImported: !0,
			...n ? { ggirResultsFiles: n } : {},
			fileId: g.id,
			availableDates: a,
			sourceType: g.sourceType ?? oe.GGIR_5S_UPLOAD
		};
	}
	const w = await Dn(e.name, l);
	if (w && "incomplete" !== w.ingestState) throw new rg(Rt);
	if (t?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing GGIR metashort and metalong..."
	}), y(n, "before reading GGIR RData"), o && "error" in o) throw o.error;
	const _ = yn(e), b = o?.value?.input ?? (_ ? await qn(_) : null), S = o?.value || !b ? void 0 : await V(d, (e) => e.prepareGgirRecording(b), {
		ms: $,
		label: "prepareGgirRecording",
		signal: n,
		cancel: f
	}), k = S && b ? (A = b, null === (T = S.cleanedNightsCsv) ? A : {
		...A,
		cleanedNightsCsv: T
	}) : b;
	var A, T;
	const N = o?.value || k ? void 0 : await e.arrayBuffer();
	y(n, "after reading GGIR RData");
	const M = o?.value?.meta ?? S?.meta ?? await V(d, (e) => e.readGgirMeta(Y(new Uint8Array(N), [N]), u.csvText, !1), {
		ms: 3e5,
		label: "readGgirMeta",
		signal: n,
		cancel: f
	}), R = function(e, t) {
		return t && !t.sources.ms4 && e?.notRead?.some((e) => /(?:^|\/)meta\/ms4\.out\//u.test(e.path)) ? {
			...t,
			importNotices: [...t.importNotices, Xn]
		} : t;
	}(_, o?.value?.review ?? S?.review ?? null), z = o?.value?.computed ?? await async function(e, t, n, a, i) {
		const s = yn(e)?.configCsv, { n: r, startSec: o, dstRuns: l, storedMs: c, clockSteps: u, wallClockMs: d, timegaps: p, ggirSib: f, ggirByDate: m } = await ug(t, n, a, await s?.text()), h = [...m.keys()].sort(), g = await Ms(m, a), w = (e) => a.nextDate(e), _ = n ? await async function(e, t, n, a) {
			const [i] = e, s = n && void 0 !== i ? await Array.from({ length: n.night - 1 }).reduce((e) => e.then((e) => void 0 === e ? void 0 : a(e)), Promise.resolve(i)) : void 0, r = void 0 !== n && void 0 !== s && s < n.nightDate;
			return [.../* @__PURE__ */ new Set([...e.slice(r ? 1 : 0), ...t])].sort();
		}(g, await async function(e, t, n) {
			const a = await Promise.all(e.map(async (e) => t.has(e) || t.has(await n(e) ?? "")));
			return e.filter((e, t) => a[t]);
		}(Yn(n), m, w), Wn(n) ?? function(e) {
			return e.ggirNightOneDate ? {
				night: 1,
				nightDate: e.ggirNightOneDate
			} : void 0;
		}(t), w) : g;
		if (0 === h.length) throw new Error("GGIR meta RData did not contain any dated 5 s epochs.");
		const v = h.flatMap((e) => {
			const t = m.get(e);
			if (!t) return [];
			y(i, `saveActivityDay ${e}`);
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
				...t.nonwear ? n ? { unifiedNonwearMasks: { [dt.ggir_saved]: new Uint8Array(t.nonwear).buffer } } : { vanHeesNonwear: new Uint8Array(t.nonwear).buffer } : {},
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
			facts: await Promise.all(v.map((e) => Zt(e, a))),
			signalDates: await Jr(0, v, a).catch((e) => (i?.throwIfAborted(), In("warn", "GGIR circadian coverage store failed", Qt(e)), null)),
			placeholders: l.length > 0 ? await sg(a, 1e3 * o, l, {
				anglez: t.anglez5s,
				enmo: t.enmo5s
			}, d) : void 0,
			summaries: n ? await aa(n, 0, i, a) : [],
			markers: n ? await Jn(n, u, a) : void 0
		};
	}(e, M, R, d, n), { n: D, startSec: C, dstRuns: O, storedMs: P, clockSteps: F, wallClockMs: j, timegaps: B, rdataConfig: L, availableDates: G, nightDates: U, ggirSib: Z } = z;
	t?.({
		phase: "storing",
		percent: 55,
		message: "Saving GGIR 5 s epochs..."
	});
	const H = await Qr(p, {
		filename: e.name,
		devicePreset: "ggir_5s_meta",
		epochLengthSeconds: M.epochSeconds,
		availableDates: U,
		fileHash: m,
		sourceContentHash: h,
		sourceSizeBytes: e.size,
		source: "local",
		eventMarkerInstants: [],
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: oe.GGIR_5S_UPLOAD,
		...C > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * C)).toISOString() } } : {},
		sourceProfileId: "actoglance.source.ggir_rdata.v1",
		...M.desiredtz ? { ggirTimezone: M.desiredtz } : {},
		...O.length + F.length > 0 ? { ggirClockBasis: (q = B, W = null != L, ag(q) ? `GGIR's imputed fall-back hour left out (${W ? "config.csv: imputeTimegaps TRUE, configtz = desiredtz" : "no config.csv, so GGIR's defaults are assumed"})` : `GGIR's repeated fall-back hour kept as recorded data (${!1 === q.imputeTimegaps ? "imputeTimegaps = FALSE" : null == q.dataFormat || ng.has(q.dataFormat) ? `configtz ${q.configtz ?? ""} differs from desiredtz ${q.desiredtz ?? ""}` : `GGIR does not gap-impute data format ${String(q.dataFormat)}`})`) } : {},
		...F.length > 0 ? { ggirClockSteps: F } : {},
		...O.length > 0 ? { ggirDstPlaceholders: z.placeholders } : {}
	}, d);
	var q, W;
	if ("already_complete" === H.kind) {
		const t = H.record.id;
		if (null == t) throw new Error("Completed local import identity is invalid.");
		const n = await yg(t, e, l);
		return await gn(e.name, l), {
			alreadyImported: !0,
			...n ? { ggirResultsFiles: n } : {},
			fileId: t,
			availableDates: H.record.availableDates,
			sourceType: H.record.sourceType ?? oe.GGIR_5S_UPLOAD
		};
	}
	const K = H.guard.fileId;
	let X = null, Q = !1;
	const te = !R && !Z, ne = await _?.qwindowCsv?.text();
	if (R && k) try {
		const t = k.configCsv ? await ve(k.configCsv, d) : void 0;
		if (await eo(p), await jn(z.summaries.map((e) => ({
			...e,
			fileId: K
		})), l, n), await E(l, [l.files, l.ggirResultsBundles], async () => {
			await l.ggirResultsBundles.put(ea(K, _?.recordingFile ?? e.name, k, R, {
				part2Reports: _?.part2Reports,
				personReports: _?.personReports,
				qwindowCsv: ne,
				resultsCsv: _?.resultsCsv
			})), await l.files.update(K, {
				ggirBundleRevision: crypto.randomUUID(),
				ggirSavedNonwearSettled: !0,
				...t ? { ggirNonwearDetector: t } : {}
			});
		}, n), !await ia(K, R, uo(a, p.recording), l, !0, F, n, z.markers)) throw new Error("GGIR results markers could not be saved.");
	} catch (me) {
		throw await no(p), me;
	}
	const ae = M.invalidShort.length === D ? M.invalidShort : null, ie = R ? null : await V(d, (e) => e.runGgirFromEpoch({
		source: "ggir_part1_rdata",
		invalidMask: ae ? "ggir_part2" : "none"
	}, M.anglez5s, M.enmo5s, C, ae ?? new Uint8Array(D), M.desiredtz ?? void 0, u.csvText).catch((e) => (v(e, n, "runGgirFromEpoch (GGIR RData)"), In("warn", "GGIR epoch analysis failed", Qt(e)), Q = !0, null)), {
		ms: $,
		label: "runGgirFromEpoch (GGIR RData)",
		signal: n,
		cancel: f
	});
	if (ie?.days?.length) {
		const e = Uh(ie.days, K, void 0, u);
		await eo(p), await jn(e, l, n).catch((e) => {
			In("warn", "GGIR daily summary store failed", Qt(e)), Q = !0;
		});
	}
	const se = function(e, t) {
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
	}(F.length > 0 ? P : M.timestampsMs, M.nonwearShort), re = new Map((R ? [] : await ft(K, l)).map((e) => [e.analysisDate, e])), le = M.anglez5sImputed?.length === D ? M.anglez5sImputed : M.anglez5s, ce = M.enmo5sImputed?.length === D ? M.enmo5sImputed : M.enmo5s;
	X = R ? X : await tg(K, le, C, se, re, a?.hasptVariant, {
		activity5s: ce,
		...ae ? { invalid5s: ae } : {},
		dstRuns: O,
		wallClockMs: j,
		...M.desiredtz ? { timezone: M.desiredtz } : {}
	}, la(a?.sleepPeriodDetectionConfig, ya), uo(a, p.recording), l, n, d, f, p.auditBinding);
	const ue = z.dayRecords.map((e) => ({
		...e,
		fileId: K
	}));
	let de = !1;
	await eo(p);
	const pe = (await xe(ue, l, z.facts, n).catch((e) => (In("warn", "GGIR activity day store failed", Qt(e)), de = !0, []))).length;
	if (!de && z.signalDates && await qe(K, G, z.signalDates, l, n).catch((e) => {
		n?.throwIfAborted(), In("warn", "GGIR circadian coverage store failed", Qt(e));
	}), de || pe !== G.length || 0 === pe) throw await no(p), /* @__PURE__ */ new Error("Could not save any GGIR RData epochs — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	y(n, "before completing GGIR RData ingest"), await to(p);
	const fe = [
		...R?.configWarnings ?? [],
		...R?.importNotices ?? [],
		R?.sources.ms4 && Vn(R),
		_ && !_.resultsCsv && "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.",
		de && "One or more days of GGIR RData epochs could not be saved.",
		X && (R ? "GGIR results markers could not be saved." : "Sleep window detection (HDCZA) could not place auto-markers."),
		Q && (R ? "GGIR source summaries could not be saved." : "GGIR daily summaries could not be computed or saved for this GGIR RData file."),
		te && "GGIR HASIB sleep/wake flags could not be computed."
	].filter(Boolean).join(" ");
	return t?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete",
		...fe ? { warning: fe } : {}
	}), {
		fileId: K,
		availableDates: U,
		sourceType: oe.GGIR_5S_UPLOAD,
		...R ? { ggir: {
			...(await import("./ggir-results-import-2zgZscoa.js").then((e) => e.p)).ggirImportCounts(R, ta(_?.part2Reports, R, _?.recordingFile ?? e.name)),
			bodySite: (await Xe(K, l))?.recording?.bodySite
		} } : {}
	};
}
async function vg(e, t, n, a, i, s, r) {
	const o = s?.db ?? J(), l = r ?? H(i), u = s ?? {
		db: o,
		attemptId: ee(),
		auditBinding: lg(o, i),
		signal: i,
		recording: await Hr(e, i, l)
	};
	y(i, "processMappedMimsCsvFile"), a?.({
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
	}, i), f = await hg(e, o, i, {
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
			sourceType: f.sourceType ?? oe.EPOCHS_60S
		};
	}
	const m = await Dn(e.name, o);
	if (m && "incomplete" !== m.ingestState) throw new nn();
	a?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing mapped MIMS columns..."
	}), y(i, "before reading mapped MIMS CSV");
	const h = await async function(e, t, n, a) {
		const i = j(await e.text()), s = C(i);
		if (s.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
		const r = s.records, o = r[t]?.text;
		if (!o) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
		const l = L(o), c = te(o, l), u = ts(n, c);
		if (u.length > 0) throw new Error(Bi(u));
		const d = Rs(c, n.datetime_column), p = Rs(c, n.date_column), f = Rs(c, n.time_column), m = Rs(c, n.mims_unit_column), h = Rs(c, n.mims_unit_x_column), g = Rs(c, n.mims_unit_y_column), y = Rs(c, n.mims_unit_z_column), w = [], _ = [], v = [], b = [], S = [], k = [];
		for (let x = t + 2; x <= r.length; x++) {
			const e = r[x - 1];
			if (!e?.text.trim()) continue;
			const t = te(e.text, l);
			k.push({
				sourceRow: e.sourceRow,
				row: t,
				label: Ps(t, d, p, f)
			});
		}
		const I = await (a ?? x()).sourceLabelsWallClockMs(k.map(({ label: e }) => e)), A = k.findIndex((e, t) => !Number.isFinite(I[t] ?? NaN));
		if (A >= 0) throw new Error(`Could not parse timestamp on row ${String(k[A].sourceRow)} of the mapped MIMS CSV.`);
		for (const [x, { row: T }] of k.entries()) w.push(I[x]), _.push(Fs(T, m)), v.push(Fs(T, h)), b.push(Fs(T, g)), S.push(Fs(T, y));
		if (0 === w.length) throw new Error("The mapped MIMS CSV did not contain any data rows.");
		return {
			timestampsMs: new Float64Array(w),
			mimsUnit: null === m ? /* @__PURE__ */ new Float64Array() : new Float64Array(_),
			mimsUnitX: null === h ? /* @__PURE__ */ new Float64Array() : new Float64Array(v),
			mimsUnitY: null === g ? /* @__PURE__ */ new Float64Array() : new Float64Array(b),
			mimsUnitZ: null === y ? /* @__PURE__ */ new Float64Array() : new Float64Array(S)
		};
	}(e, t, n, l);
	y(i, "after reading mapped MIMS CSV");
	const g = oe.EPOCHS_60S, w = await async function(e, t) {
		const n = /* @__PURE__ */ new Map(), a = t.timestampsMs.length, i = js(t.mimsUnit, a), s = js(t.mimsUnitX, a), r = js(t.mimsUnitY, a), o = js(t.mimsUnitZ, a), l = Float64Array.from(t.timestampsMs, (e) => e / 1e3);
		for (const [c, u] of await us(e, l)) n.set(c, {
			timestamps: ds(l, u, 0),
			...i ? { mimsUnit: ds(i, u, NaN) } : {},
			...s ? { mimsUnitX: ds(s, u, NaN) } : {},
			...r ? { mimsUnitY: ds(r, u, NaN) } : {},
			...o ? { mimsUnitZ: ds(o, u, NaN) } : {}
		});
		return n;
	}(l, h), _ = [...w.keys()].sort(), v = await Ms(w, l);
	a?.({
		phase: "storing",
		percent: 55,
		message: "Saving mapped MIMS epochs..."
	});
	const b = await Qr(u, {
		filename: e.name,
		devicePreset: "mims_metrics",
		epochLengthSeconds: 60,
		availableDates: v,
		fileHash: d,
		sourceContentHash: p,
		sourceSizeBytes: e.size,
		source: "local",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: g,
		...(h.timestampsMs[0] ?? 0) > 0 ? { recording: { effectiveTime: new Date(h.timestampsMs[0] ?? 0).toISOString() } } : {}
	}, l);
	if ("already_complete" === b.kind) {
		const e = b.record.id;
		if (null == e) throw new Error("Completed local import identity is invalid.");
		return {
			alreadyImported: !0,
			fileId: e,
			availableDates: b.record.availableDates,
			sourceType: b.record.sourceType ?? g
		};
	}
	const S = b.guard.fileId;
	let k = !1, I = 0;
	for (const c of _) {
		const e = w.get(c);
		if (!e) continue;
		y(i, `saveActivityDay ${c}`);
		const t = /* @__PURE__ */ new Float64Array();
		await eo(u);
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
		await ot(n, o, i).then(() => !0).catch((e) => (In("warn", "MIMS activity day store failed", Qt(e)), k = !0, !1)) && (I += 1, await io(S, [n], o, l, i));
	}
	if (k || I !== _.length || 0 === I) throw await no(u), /* @__PURE__ */ new Error("Could not save any mapped MIMS data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return y(i, "before completing mapped MIMS ingest"), await to(u), a?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete"
	}), {
		fileId: S,
		availableDates: v,
		sourceType: g
	};
}
function bg(e) {
	const t = e.trim();
	if (!/^\d{4}-\d{2}-\d{2}/.test(t)) return null;
	const n = t.includes("	") ? "	" : ",";
	return t.split(n).length;
}
async function Sg(e, t, n) {
	const a = Math.min(e.size, 16777216);
	let i = Math.min(16384, a);
	for (;;) {
		y(t, "before reading GeneActiv CSV header");
		const r = await s(e, i, n);
		y(t, "after reading GeneActiv CSV header");
		const o = i >= a, l = r.split("\n"), c = o && i >= e.size ? l : l.slice(0, -1);
		for (const e of c) {
			const t = bg(e);
			if (null !== t) return t >= 12;
		}
		if (o) return !1;
		i = Math.min(2 * i, a);
	}
}
export { cs as $, zr as A, Es as B, Ur as C, Dr as D, jr as E, Mr as F, As as G, xs as H, ur as I, Ss as J, Is as K, cr as L, $r as M, Tr as N, Cr as O, Nr as P, Ms as Q, Cs as R, Zr as S, Br as T, ws as U, Os as V, _s as W, Ts as X, ps as Y, ks as Z, no as _, Uh as a, os as at, Jr as b, po as c, Xi as ct, eo as d, mg as ensureSavedGgirNonwear, gs as et, oo as f, to as g, so as h, Xh as i, Sg as isGeneactivEpochCsv, rs as it, Fr as j, Er as k, fo as l, Yi as lt, ro as m, ig as n, hs as nt, tg as o, ls as ot, Qr as p, _g as processGgirMetaRDataFile, vg as processMappedMimsCsvFile, bs as q, Zh as r, og as refuseUnimportableGgirRecording, Ns as rt, mo as s, Qi as st, sg as t, vs as tt, uo as u, co as v, Lr as w, Hr as x, ao as y, Ds as z };
