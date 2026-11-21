import { p as e } from "./ggir-results-types-e7JA7N7O.js";
import { An as t, B as n, Bn as a, Bt as i, Cn as r, Cr as s, E as o, En as c, Ft as l, Hn as u, Ir as d, It as p, L as f, M as m, Mr as h, N as g, Nr as y, O as w, On as _, Or as v, P as b, Pr as S, R as k, Rn as I, Sn as A, Sr as x, T, Tn as N, Tr as M, Vt as $, Wn as R, Yn as E, Zn as z, ar as D, cn as C, cr as O, d as P, dn as F, er as j, f as B, gn as L, gr as G, h as U, j as Z, jr as H, kn as q, l as V, lr as W, n as J, nr as K, o as Y, p as X, r as Q, s as ee, un as te, vn as ne, vr as ae, wn as ie, x as re, xn as se, zn as oe } from "./background-jobs-XKgiZRrI.js";
import { $ as ce, $n as le, $r as ue, A as de, At as pe, B as fe, Bt as me, C as he, Cr as ge, Ct as ye, D as we, Dt as _e, E as ve, En as be, Et as Se, Ft as ke, Gn as Ie, H as Ae, I as xe, J as Te, K as Ne, Kt as Me, Ln as $e, Lr as Re, Lt as Ee, M as ze, Mn as De, Mr as Ce, N as Oe, Nn as Pe, O as Fe, Or as je, Ot as Be, Pn as Le, Pt as Ge, Qr as Ue, Qt as Ze, R as He, Rn as qe, S as Ve, Sn as We, Sr as Je, St as Ke, T as Ye, Tt as Xe, U as Qe, Ur as et, V as tt, Vr as nt, Vt as at, W as it, Wr as rt, Wt as st, Xn as ot, Xr as ct, Y as lt, Yn as ut, Yr as dt, Z as pt, Zt as ft, _ as mt, _n as ht, _r as gt, _t as yt, a as wt, an as _t, b as vt, bn as bt, bt as St, c as kt, cr as It, ct as At, d as xt, dr as Tt, ei as Nt, en as Mt, er as $t, et as Rt, f as Et, ft as zt, g as Dt, gn as Ct, gt as Ot, ht as Pt, i as Ft, ir as jt, it as Bt, j as Lt, jn as Gt, jt as Ut, k as Zt, kn as Ht, kr as qt, kt as Vt, l as Wt, lr as Jt, lt as Kt, mt as Yt, n as Xt, nn as Qt, nr as en, nt as tn, o as nn, ot as an, p as rn, pn as sn, pt as on, q as cn, qn as ln, qr as un, r as dn, rn as pn, rr as fn, rt as mn, s as hn, sr as gn, st as yn, t as wn, tn as _n, tr as vn, tt as bn, u as Sn, un as kn, ur as In, v as An, vn as xn, vt as Tn, w as Nn, wr as Mn, wt as $n, x as Rn, xn as En, xr as zn, xt as Dn, y as Cn, yn as On, yt as Pn, z as Fn, zt as jn } from "./db-5ieqyMTc.js";
import { D as Bn, E as Ln, S as Gn, T as Un, _ as Zn, b as Hn, c as qn, g as Vn, h as Wn, i as Jn, m as Kn, n as Yn, o as Xn, s as Qn, t as ea, w as ta, x as na, y as aa } from "./ggir-results-import-D4hCs8mr.js";
import { i as ia, t as ra } from "./wal-CFJka1o3.js";
import { C as sa, D as oa, S as ca, T as la, a as ua, b as da, d as pa, f as fa, g as ma, h as ha, i as ga, l as ya, n as wa, o as _a, p as va, s as ba, t as Sa, v as ka, w as Ia, x as Aa, y as xa } from "./local-nonwear-unified-qM9YQyQW.js";
import { _ as Ta, a as Na, c as Ma, d as $a, f as Ra, g as Ea, h as za, i as Da, l as Ca, n as Oa, o as Pa, p as Fa, r as ja, s as Ba, t as La, v as Ga } from "./epoch-utils-BGU9d2_6.js";
import { A as Ua, B as Za, C as Ha, D as qa, E as Va, G as Wa, H as Ja, J as Ka, K as Ya, M as Xa, N as Qa, O as ei, P as ti, Q as ni, S as ai, T as ii, U as ri, V as si, W as oi, X as ci, Y as li, Z as ui, _ as di, b as pi, g as fi, h as mi, j as hi, k as gi, p as yi, q as wi, v as _i, x as vi, z as bi } from "./local-export-shard-worker-SpuZhuag.js";
import { S as Si, b as ki, d as Ii, i as Ai, m as xi, n as Ti, o as Ni, r as Mi, s as $i, w as Ri, x as Ei, y as zi } from "./ingest-C27A4S5W.js";
import { t as Di } from "./valid-day-criteria-BH6-VK0O.js";
const Ci = "Review Data Settings > CSV Settings before opening this file.";
function Oi(e) {
	return `Column-mapped CSV mapping could not be applied: ${e.map((e) => e.message).join(" ")} ${Ci}`;
}
function Pi({ cores: e, deviceMemoryGib: t, maxExtraWorkers: n = 3, workerMemoryGib: a = 1, minDeviceMemoryGib: i = 8 }) {
	return !Number.isFinite(t) || (t ?? 0) < i || !Number.isFinite(e) || (e ?? 0) <= 2 ? 0 : Math.max(0, Math.min(n, Math.floor(e) - 2, Math.floor(t / 2 / a) - 1));
}
function Fi(e, t) {
	return t.primary && e instanceof Error && e.message.includes("timed out during");
}
let ji = 0;
async function Bi(e, { primary: t, getPrimary: n, extraWorkers: a, memoryBudgetGib: i, signal: r, cancelOperation: s = () => {}, createWorker: o }) {
	if (r?.aborted) throw new DOMException("Aborted: raw passes", "AbortError");
	if (0 === e.length) return [];
	if (e.some((e) => {
		const t = Function.prototype.toString.call(e.run);
		return !t.includes("[native code]") && /^(?:async\s*)?(?:function(?:\s+\w+)?\s*|[\w$]+\s*)?\(\s*\)/u.test(t);
	})) throw new Error("A raw pass must receive its pool worker");
	if (0 === a && !t && !n && !o) throw new Error("A single-worker pass must borrow or inject its worker");
	const c = o ?? H, l = e.map((e, t) => ({
		pass: e,
		index: t
	})), u = new Array(e.length), d = /* @__PURE__ */ new Map(), p = {
		stopped: !1,
		done: !1
	}, f = (e, t) => {
		const n = d.get(e);
		void 0 !== n && (d.delete(e), ji = Math.max(0, ji - n), !t && e.release ? e.release() : e.terminate());
	};
	let m;
	const g = new Promise((e, t) => {
		m = () => {
			p.stopped = !0, t(new DOMException("Aborted: raw passes", "AbortError"));
		}, r?.addEventListener("abort", m, { once: !0 }), r?.aborted && m();
	}), y = async (e, a, i, r) => {
		let o, l, m = i, g = !1;
		const y = 0 === e && (void 0 !== t || void 0 !== n), w = new Proxy({}, { get: (e, a) => {
			if (p.done) throw new Error("Raw pass pool finished");
			if (p.stopped) throw new DOMException("Aborted: raw passes", "AbortError");
			if (!l && !o) if (y) l = t ?? n();
			else if (ji + m <= 1 + 4 * Number.EPSILON) {
				ji += m;
				try {
					o = c({ singleThread: !0 });
				} catch (bd) {
					throw ji = Math.max(0, ji - m), bd;
				}
				d.set(o, m);
			} else l = t ?? n?.() ?? h();
			return Reflect.get(l ?? o.api, a);
		} }), _ = {
			cancel: () => {
				l ? s() : (g = !0, o && f(o, !0));
			},
			get primary() {
				return void 0 !== l || Boolean(y);
			}
		};
		let v = !1;
		try {
			for (let e = a(); e; e = a()) {
				if (p.stopped) return;
				g && (o = void 0, g = !1);
				const t = o ? r?.(e) : void 0;
				o && void 0 !== t && (f(o, !0), o = void 0, m = t);
				const { pass: n, index: a } = e;
				u[a] = await n.run(w, _);
			}
		} catch (bd) {
			throw v = !0, p.stopped = !0, bd;
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
		a > 0 && l.sort((e, t) => t.pass.cost - e.pass.cost);
		for (const t of l) {
			const n = e.reduce((e, t) => t.cost < e.cost ? t : e);
			n.passes.push(t), n.cost += t.pass.cost;
		}
		_ = Promise.all(e.map((e, t) => y(t, () => e.passes.shift(), 1 / (a + 1))));
	} else {
		const e = (e) => e?.pass.memoryGib ?? 0;
		l.sort((t, n) => e(n) - e(t) || n.pass.cost - t.pass.cost);
		let t = 0, n = 0, a = 0;
		_ = new Promise((r, s) => {
			let o = 0;
			const c = () => {
				for (; n < w && t < l.length && (0 === n || a + e(l[t]) <= i);) {
					let d = e(l[t]);
					a += d, o += 1;
					const p = (t) => {
						const n = e(t);
						if (!(2 * n > d)) return a -= d - n, d = n, queueMicrotask(c), Math.min(1, n / i);
					};
					y(n++, u, Math.min(1, d / i), p).then(() => {
						0 === --o && r();
					}, s);
				}
			}, u = () => {
				const e = l[t++];
				return e && c(), e;
			};
			c();
		});
	}
	try {
		await Promise.race([g, _]);
	} catch (bd) {
		p.stopped = !0;
		try {
			s();
		} catch {}
		throw bd;
	} finally {
		p.done = !0, m && r?.removeEventListener("abort", m);
		for (const e of [...d.keys()]) f(e, !0);
	}
	return u;
}
function Li(e, t, n) {
	const a = Object.values(t);
	if (!a.includes(e)) throw new Error(`${n} must be one of ${a.join(", ")} (bundle reported "${e}")`);
	return e;
}
function Gi(e) {
	return Li(e, ie, "temporalBasis");
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
const Vi = /* @__PURE__ */ new Set([
	"id",
	"fileId",
	"createdAt",
	"updatedAt"
]);
async function Wi(e) {
	const t = [...e].sort((e, t) => e.analysisDate.localeCompare(t.analysisDate)).map((e) => en(qi(function(e) {
		const t = {};
		for (const [n, a] of Object.entries(e)) Vi.has(n) || void 0 !== a && (t[n] = a);
		return t;
	}(e))));
	return ae(`[${t.join(",")}]`);
}
const Ji = {
	accelerator: "cpu_only",
	concurrency: {
		mode: "serial",
		max_threads: null
	},
	vectorization: "baseline"
};
async function Ki(e, t = X(), n) {
	const a = t, i = await async function(e) {
		if (!/^[0-9a-f]{64}$/.test(e.sourceContentSha256)) throw new Error("sourceContentSha256 must be 64 lowercase hex characters");
		if (!Number.isInteger(e.sourceSizeBytes) || e.sourceSizeBytes < 1) throw new Error("sourceSizeBytes must be a positive integer");
		if (!/^[0-9a-f]{64}$/.test(e.runtimeBuild.artifactSha256)) throw new Error("runtimeBuild.artifactSha256 must be 64 lowercase hex characters");
		const t = e.dailyRows.length, n = 0 === t ? [] : [`daily_summary_stream:sha256:${await Wi(e.dailyRows)}`], a = Ji, i = Ui[e.computePath], r = await async function(e) {
			if (!e.methodSpecificationId.trim()) throw new Error("methodSpecificationId must be nonblank");
			const t = (n = e.params, en(qi(n)));
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
		}), s = e.runtimeBuild, o = s.sourceRevision ?? `${s.crateVersion}+${[...s.compiledFeatures].sort().join("+")}`, c = {
			execution_id: (l = e.fileId, u = e.computePath, `local:file-${String(l)}:actours-${u.replace(/_/g, "-")}-v1`),
			method_specification_id: i,
			method_implementation_id: `actours:${s.target}:${o}:artifact-sha256-${s.artifactSha256}:${e.computePath}`,
			parameter_set_hash: r.parameter_set_hash,
			input_entity_ids: [`urn:sha256:${e.sourceContentSha256}`],
			output_entity_ids: n,
			started_at: e.startedAt,
			completed_at: e.finishedAt
		};
		var l, u;
		return {
			result_contract_version: "sleep-scoring-web.local-content-bound-daily-summary/v1",
			file_compute_contract_version: Zi,
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
			method_execution: c,
			output_row_count: t,
			runtime_build: s,
			source_digest_scope: e.sourceDigestScope
		};
	}(e), r = await async function(e) {
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
	return P(a, [a.localExecutions], async () => {
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
async function Yi(e, t = h()) {
	const n = await t.weekendDates([...e]);
	return Array.from(n, (e) => 0 !== e);
}
async function Xi(e, t = Di, n) {
	const a = await J(n).validWearDays(Float64Array.from(e), t);
	return Array.from(a, (e) => 0 !== e);
}
async function Qi(e, t = Di, n) {
	return J(n).participantValidity(Float64Array.from(e, (e) => e.wearMinutes), Uint8Array.from(e, (e) => e.isWeekend ? 1 : 0), Uint8Array.from(e, (e) => !0 === e.isPartialDay ? 1 : 0), t);
}
function er() {
	return [
		"Could not identify file format.",
		"Use Data Settings > CSV Import for mapped vendor, GGIR, MIMS, or generic activity CSV exports.",
		"Native local ingest supports ActiGraph CSV/GT3X, GENEActiv raw CSV/.bin, GGIR meta RData, NHANES PAX80 archives, and recognized generic CSV mappings.",
		"Condor ActLumus/ActTrust TXT files require the server parser today."
	].join(" ");
}
function tr(e, t) {
	mn(e) && E().storage.reportFull(t, "Browser storage quota was exceeded while saving local results.");
}
function nr(e) {
	return "the local model runtime or its input contract rejected the operation";
}
function ar(e) {
	return `LSTM ONNX sleep/wake scoring could not be computed for this raw file${e ? ` because ${e}` : ""}. Count-based scoring is intact.`;
}
function ir(e) {
	if (!e || 0 === e.length) return "";
	let t = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY, a = 0;
	for (const i of e) t = Math.min(t, i), n = Math.max(n, i), a += i;
	return ` (sleep probability min=${t.toFixed(3)}, mean=${(a / e.length).toFixed(3)}, max=${n.toFixed(3)})`;
}
function rr(e, t) {
	if (!e || 0 === e.length) return null;
	let n = 0;
	for (const a of e) n += a ? 1 : 0;
	return 0 === n ? `LSTM ONNX sleep/wake scoring produced an all-wake result${ir(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : n === e.length ? `LSTM ONNX sleep/wake scoring produced an all-sleep result${ir(t)}. This can happen for out-of-distribution recordings or a feature/model contract mismatch; compare against HDCZA/count-based scoring before using the LSTM output.` : null;
}
function sr(e, t) {
	const n = [
		...Se(e, ur, t),
		..._e(e, ur),
		...Vt(e, ur, t)
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
function or(e, t) {
	const n = cr(e, t), a = Boolean(e.datetime_column), i = Boolean(e.date_column && e.time_column);
	return a || i || n.push({
		key: "timestamp",
		message: "Map Date/time, or map both Date and Time."
	}), e.mims_unit_column || n.push({
		key: "mims_unit_column",
		message: "Map a MIMS unit column."
	}), n;
}
function cr(e, t) {
	return [
		...Se(e, ur, t),
		..._e(e, ur),
		...Vt(e, ur, t)
	];
}
const lr = [30, 60], ur = [
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
], dr = [
	["axis_x", "axisX"],
	["axis_y", "axisY"],
	["axis_z", "axisZ"],
	["vector_magnitude", "vectorMagnitude"],
	["choi_axis", "choiAxis"]
];
async function pr(e, t, n) {
	const a = dr.filter(([, e]) => (t[e]?.length ?? 0) > 0), { series: i } = await e.aggregateEpochSeries({
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
	}), r = (e) => Float64Array.from(i.channels.find((t) => t.name === e)?.counts ?? []), s = {
		timestamps: Float64Array.from(i.timestamps_ms, (e) => e / 1e3),
		axisY: r("axis_y"),
		vectorMagnitude: r("vector_magnitude")
	};
	for (const [o, c] of a) "axisY" !== c && "vectorMagnitude" !== c && (s[c] = r(o));
	return s;
}
async function fr(e, t, n, a) {
	const i = n.flatMap((e) => t[e] ? [[e, t[e]]] : []), r = await Promise.all(i.map(([, t]) => pr(e, t, a)));
	return Object.fromEntries(i.map(([e], t) => [e, r[t]]));
}
async function mr(e, t, n, a) {
	return 0 === t.length ? new Uint8Array(a.length) : e.projectLabelsOntoGrid(t, n, k, a);
}
async function hr(e, t, n) {
	return Array.from(await e.roundCountStorage(Float64Array.from(t), n));
}
async function gr(e, t) {
	const { dates: n, day: a } = await e.utcDayIndex(Float64Array.from(t)), i = new Map(n.map((e) => [e, []]));
	return a.forEach((e, t) => {
		const a = n[e];
		void 0 !== a && i.get(a)?.push(t);
	}), i;
}
function yr(e, t, n) {
	return t.map((t) => e[t] ?? n);
}
function wr(e) {
	const t = new Float64Array(e.reduce((e, t) => e + t.length, 0));
	let n = 0;
	for (const a of e) t.set(a, n), n += a.length;
	return t;
}
function _r(e, t, n) {
	return Float64Array.from(t, (t) => e[t] ?? n);
}
async function vr(e, t, n, a) {
	return Float64Array.from(await e.uniformTimestamps(t, 1e3 * n, a), (e) => e / 1e3);
}
async function br(e, t, n, a) {
	if (!Number.isFinite(t) || 0 === n.length || !Number.isFinite(a) || a <= 0) return /* @__PURE__ */ new Map();
	const i = await gr(e, await vr(e, t, a, n.length));
	return new Map(Array.from(i, ([e, t]) => [e, Uint8Array.from(yr(n, t, 0))]));
}
async function Sr(e, t, n, a, i = {}) {
	const r = /* @__PURE__ */ new Map();
	if (0 === t.length) return r;
	if (n.length !== t.length || a.length !== t.length) return console.warn("[local-processing] The 5 s GGIR timestamp grid does not match its ENMO/anglez series; skipping the GGIR day split rather than fabricating zeros."), r;
	const s = void 0 !== i.sib && i.sib.length === t.length;
	for (const [y, w] of [["anglex", i.anglex], ["angley", i.angley]]) if (w?.length && w.length !== t.length) throw new Error(`The GGIR ${y} series has ${String(w.length)} epochs where the 5 s grid has ${String(t.length)}.`);
	const o = Boolean(i.anglex?.length), c = Boolean(i.angley?.length), l = void 0 !== i.nonwear && i.nonwear.length === t.length, u = void 0 !== i.invalid && i.invalid.length === t.length, d = void 0 !== i.mimsUnit && i.mimsUnit.length === t.length, p = void 0 !== i.mimsUnitX && i.mimsUnitX.length === t.length, f = void 0 !== i.mimsUnitY && i.mimsUnitY.length === t.length, m = void 0 !== i.mimsUnitZ && i.mimsUnitZ.length === t.length, h = (e, t) => t.map((t) => (e[t] ?? 0) > 0 ? 1 : 0), g = Float64Array.from(t, (e) => e / 1e3);
	for (const [y, w] of await gr(e, g)) r.set(y, {
		timestamps: yr(g, w, 0),
		enmo: yr(n, w, 0),
		anglez: yr(a, w, 0),
		...o ? { anglex: yr(i.anglex, w, 0) } : {},
		...c ? { angley: yr(i.angley, w, 0) } : {},
		...s ? { sib: yr(i.sib, w, 0) } : {},
		...l ? { nonwear: h(i.nonwear, w) } : {},
		...u ? { invalid: h(i.invalid, w) } : {},
		...d ? { mimsUnit: yr(i.mimsUnit, w, NaN) } : {},
		...p ? { mimsUnitX: yr(i.mimsUnitX, w, NaN) } : {},
		...f ? { mimsUnitY: yr(i.mimsUnitY, w, NaN) } : {},
		...m ? { mimsUnitZ: yr(i.mimsUnitZ, w, NaN) } : {}
	});
	return r;
}
async function kr(e, t, n, a, i, r) {
	const s = /* @__PURE__ */ new Map();
	if (0 === t.length || !Number.isFinite(n)) return s;
	for (const [o, c] of Object.entries(a)) s.set(o, await e.foldUniformOntoGrid(n / 1e3, 30, t, Float64Array.from(c.timestamps), i, r));
	return s;
}
async function Ir(e, t, n, a, i) {
	const r = await kr(e, Float64Array.from(t), n, a, i, "majority_ties_sleep");
	return new Map(Array.from(r, ([e, t]) => [e, Uint8Array.from(t)]));
}
async function Ar(e, t, n, a, i) {
	const r = await kr(e, Float64Array.from(t), n, a, i, "mean");
	return new Map(Array.from(r, ([e, t]) => [e, Float32Array.from(t)]));
}
async function xr(e, t, n) {
	const a = /* @__PURE__ */ new Map();
	if (!t || 0 === t.length || null === n || !Number.isFinite(n)) return a;
	const i = await vr(e, n, 30, t.length);
	for (const [r, s] of await gr(e, i)) a.set(r, {
		timestamps: yr(i, s, 0),
		scores: s.map((e) => t[e] ? 1 : 0)
	});
	return a;
}
async function Tr(e, t, n, a, i) {
	const r = await e.foldOntoGrid(Float64Array.from(t), Float64Array.from(n), Float64Array.from(a), 1e3 * i, "finite_mean");
	return Array.from(r);
}
async function Nr(e, t, n, a, i, r, s, o, c, l, u, d) {
	return async function(e, t, n, a, i, r, s, o, c, l, u, d) {
		const p = {}, f = null != i, m = null != r && r.length > 0, h = null != s && s.length > 0, g = null != o && o.length > 0, y = null != c?.unit && c.unit.length === t.length, w = null != c?.unitX && c.unitX.length === t.length, _ = null != c?.unitY && c.unitY.length === t.length, v = null != c?.unitZ && c.unitZ.length === t.length, b = null != u && u.length === t.length, S = null != l && l.length === t.length, k = null != d && d.length === t.length;
		for (const [I, A] of await gr(e, t)) p[I] = {
			timestamps: _r(t, A, 0),
			axisY: _r(n, A, 0),
			vectorMagnitude: _r(a, A, 0),
			...h ? { axisX: _r(s, A, 0) } : {},
			...g ? { axisZ: _r(o, A, 0) } : {},
			...f ? { choiAxis: _r(i, A, 0) } : {},
			...m ? { temperature: _r(r, A, NaN) } : {},
			...y ? { mimsUnit: _r(c?.unit ?? [], A, NaN) } : {},
			...w ? { mimsUnitX: _r(c?.unitX ?? [], A, NaN) } : {},
			..._ ? { mimsUnitY: _r(c?.unitY ?? [], A, NaN) } : {},
			...v ? { mimsUnitZ: _r(c?.unitZ ?? [], A, NaN) } : {},
			...b ? { zeroCrossingX: _r(u, A, NaN) } : {},
			...S ? { zeroCrossingY: _r(l, A, NaN) } : {},
			...k ? { zeroCrossingZ: _r(d, A, NaN) } : {}
		};
		return p;
	}(e, t, await hr(e, n, 0), await hr(e, a, 2), void 0 !== s ? await hr(e, s, 0) : void 0, o, await hr(e, i, 0), await hr(e, r, 0), c, l, u, d);
}
function Mr(e, t) {
	return 30 !== t && (C(e)?.hasRawAccel ?? !1);
}
async function $r(e) {
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
	}).catch((t) => (D(t, e.signal, `zeroCrossingCounts 30s (${e.label})`), console.warn("[local-processing] The optional 30-second zero-crossing pass failed."), null));
	return {
		timestampsSec: await vr(e.wasmApi, e.firstTsMs, 30, n.y.length),
		neishabouri: n,
		zeroCrossing: a
	};
}
async function Rr(e, t, n) {
	const a = n.zeroCrossing, i = await Nr(e, n.timestampsSec, n.neishabouri.y, n.neishabouri.vm, n.neishabouri.x, n.neishabouri.z, void 0, void 0, void 0, a ? await hr(e, a.zcy, 0) : void 0, a ? await hr(e, a.zcx, 0) : void 0, a ? await hr(e, a.zcz, 0) : void 0);
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
const Er = "Recording crossed a timezone boundary (a 1 h jump in the device clock). Recording times are kept as the device's wall-clock time; no timezone or daylight-saving shift is applied, so local-time metrics around the jump may be off.";
async function zr(e, t) {
	return await e.detectHourClockJumpMs(Float64Array.from(t)) ? Er : null;
}
async function Dr(e, t, n = 60) {
	(await e.irregularInternalDays(Float64Array.from(t), n)).forEach(() => {
		console.warn("[local-processing] A possible DST transition or partial internal day was detected; review the in-app import warning.");
	});
}
async function Cr(e, t, n) {
	const a = [...e], i = n && n.storedEpochSeconds < k ? n : void 0, r = i ? await Promise.all(a.map(([, e]) => async function(e, t, n) {
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
	}(i.core, e.timestamps, i.storedEpochSeconds))) : a.map(([, e]) => e.timestamps), s = [];
	let o = Number.POSITIVE_INFINITY, c = Number.NEGATIVE_INFINITY;
	for (const [l, [u]] of a.entries()) {
		const e = r[l];
		i && 0 === e.length || (s.push(u), 0 !== e.length && (o = Math.min(o, e[0] ?? o), c = Math.max(c, e[e.length - 1] ?? c)));
	}
	return s.sort(), Number.isFinite(o) && Number.isFinite(c) ? Ge(s, o, c, void 0, t) : s;
}
function Or(e) {
	return /[",\r\n]/.test(e) ? `"${e.replace(/"/g, "\"\"")}"` : e;
}
function Pr(e, t) {
	if (!t) return null;
	const n = Be(t), a = e.findIndex((e) => Be(e) === n);
	return a >= 0 ? a : null;
}
function Fr(e) {
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
function jr(e, t) {
	if (e.length !== t.length) return console.warn("[local-processing] Event-marker column dropped: mapped row count differs from the parsed epoch count."), /* @__PURE__ */ new Float64Array(0);
	const n = [];
	for (let a = 0; a < e.length; a += 1) {
		const i = t[a];
		1 === e[a] && null != i && Number.isFinite(i) && n.push(i / 1e3);
	}
	return Float64Array.from(n.sort((e, t) => e - t));
}
function Br(e, t, n) {
	const a = new Uint8Array(e.length);
	let i = 0;
	for (const r of Array.from(t)) {
		for (; i + 1 < e.length && (e[i + 1] ?? 1 / 0) <= r;) i += 1;
		const t = e[i];
		null != t && r >= t && r < t + n && (a[i] = 1);
	}
	return a;
}
function Lr(e, t) {
	const n = Date.parse(`${t}T00:00:00Z`) / 1e3, a = [];
	for (const i of Array.from(e)) i >= n && i < n + 86400 && a.push(i);
	return Float64Array.from(a);
}
async function Gr(e, t, n, a) {
	K(a, "standardizing mapped CSV");
	const i = se(await e.text());
	K(a, "standardizing mapped CSV");
	const r = ne(i);
	if (r.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
	const s = r.records, o = s[t]?.text;
	if (!o) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
	const c = te(o), l = L(o, c), u = sr(n, l);
	if (u.length > 0) throw new Error(Oi(u));
	const d = Pr(l, n.datetime_column), p = Pr(l, n.date_column), f = Pr(l, n.time_column), m = Pr(l, n.activity_column), h = Pr(l, n.axis_x_column), g = Pr(l, n.axis_z_column), y = Pr(l, n.vector_magnitude_column), w = [
		{
			header: "ENMO",
			idx: Pr(l, n.enmo_column)
		},
		{
			header: "AngleZ",
			idx: Pr(l, n.anglez_column)
		},
		{
			header: "GGIR_SIB",
			idx: Pr(l, n.ggir_sib_column)
		},
		{
			header: "GGIR_NONWEAR",
			idx: Pr(l, n.ggir_nonwear_column)
		},
		{
			header: "MIMS_UNIT",
			idx: Pr(l, n.mims_unit_column)
		},
		{
			header: "MIMS_UNIT_X",
			idx: Pr(l, n.mims_unit_x_column)
		},
		{
			header: "MIMS_UNIT_Y",
			idx: Pr(l, n.mims_unit_y_column)
		},
		{
			header: "MIMS_UNIT_Z",
			idx: Pr(l, n.mims_unit_z_column)
		}
	].filter((e) => null !== e.idx), _ = Pr(l, n.event_marker_column), v = null === _ ? null : [];
	if (null === m) throw new Error("Column-mapped CSV mapping requires an activity/counts column before import.");
	if (null === d && (null === p || null === f)) throw new Error("Column-mapped CSV mapping requires Date/time, or both Date and Time, before import.");
	const b = null !== d ? ["Datetime", "Axis1"] : [
		"Date",
		"Time",
		"Axis1"
	];
	null !== h && b.push("Axis2"), null !== g && b.push("Axis3"), null !== y && b.push("Vector Magnitude"), b.push(...w.map((e) => e.header));
	const S = [b.join(",")];
	for (let I = t + 1; I < s.length; I += 1) {
		(I - t - 1) % 1e3 == 0 && (await ee(), K(a, "standardizing mapped CSV"));
		const e = s[I];
		if (!e.text.trim()) continue;
		const n = L(e.text, c), i = null !== d ? [n[d] ?? "", n[m] ?? ""] : [
			null === p ? "" : n[p] ?? "",
			null === f ? "" : n[f] ?? "",
			n[m] ?? ""
		];
		null !== h && i.push(n[h] ?? ""), null !== g && i.push(n[g] ?? ""), null !== y && i.push(n[y] ?? "");
		for (const t of w) i.push(n[t.idx] ?? "");
		v && null !== _ && v.push(Fr(n[_])), S.push(i.map(Or).join(","));
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
function Ur(e, t, n, a) {
	if (null !== t) return e[t] ?? "";
	const i = null === n ? "" : e[n] ?? "", r = null === a ? "" : e[a] ?? "";
	return `${i.trim()} ${r.trim()}`;
}
function Zr(e, t) {
	if (null === t) return NaN;
	const n = e[t]?.trim() ?? "";
	if (!n) return NaN;
	const a = Number(n);
	return Number.isFinite(a) ? a : NaN;
}
function Hr(e, t) {
	return e.length === t && e.some((e) => Number.isFinite(e)) ? e : void 0;
}
const qr = {
	ggirHasptVariant: R.ggir_haspt_variant,
	ggirHasibVariantsEnabled: R.ggir_hasib_variants_enabled,
	ggirHasibVariants: [...R.ggir_hasib_variants],
	ggirHasibCountSource: R.ggir_hasib_count_source,
	ggirHasibCountEpochSeconds: R.ggir_hasib_count_epoch_seconds
}, Vr = new Set(a), Wr = new Set(oe), Jr = new Set(I);
function Kr(e) {
	const t = e ?? {}, n = t.ggir_haspt_variant, a = t.ggir_hasib_variants_enabled, i = t.ggir_hasib_variants, r = t.ggir_hasib_count_source, s = t.ggir_hasib_count_epoch_seconds, o = Array.isArray(i) ? Array.from(new Set(i.filter((e) => "string" == typeof e && Wr.has(e)))) : [...qr.ggirHasibVariants];
	return {
		ggirHasptVariant: "string" == typeof n && Vr.has(n) ? n : qr.ggirHasptVariant,
		ggirHasibVariantsEnabled: "boolean" == typeof a ? a : qr.ggirHasibVariantsEnabled,
		ggirHasibVariants: o,
		ggirHasibCountSource: "string" == typeof r && Jr.has(r) ? r : qr.ggirHasibCountSource,
		ggirHasibCountEpochSeconds: "number" == typeof s && Number.isInteger(s) && s >= 1 ? s : qr.ggirHasibCountEpochSeconds
	};
}
function Yr(e) {
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
function Xr(e) {
	return !Qt(e);
}
const Qr = /* @__PURE__ */ new WeakMap();
async function es(e, t) {
	const n = await Mi(e, t);
	return {
		data: n,
		nights: await Va(n?.actiwareIntervals, J())
	};
}
function ts(e, t, n) {
	if (!n) return es(e, t);
	let a = Qr.get(n);
	return a || Qr.set(n, a = es(e, t)), a;
}
const ns = {
	windowForNight: async (e) => Xr(e.file) ? async function({ fileId: e, date: t, db: n, batch: a }) {
		return ii((await ts(e, n, a)).nights, t);
	}(e) : null,
	tables: (e) => [e.actiwareFileData],
	stampInput: async (e, t) => ({ rest: (await t.actiwareFileData.get(e))?.actiwareIntervals }),
	fingerprint: (e) => ({ actiwareRestWindow: e })
}, as = "actiware";
function is(e) {
	return [...an(e)].filter(([, e]) => e.isInvalidNight).map(([e]) => e).sort();
}
async function rs(e, t, n) {
	try {
		const a = await t.actiwareFileData.get(e);
		if (!a?.actiwareSleepWake) return;
		const i = (await t.actiwareStatisticsInputs.get(e))?.input, r = (await t.files.get(e))?.seriesRevision ?? 0, s = is(await t.markers.where("fileId").equals(e).toArray());
		let o = null;
		try {
			o = await yi(await Va(a.actiwareIntervals, J(n)), i, s, (e) => J(n).actiwareIntervalStatistics(e));
		} catch (bd) {
			n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), In("error", "Actiware statistics recalculation failed", {
				...Jt(bd),
				file_id: e
			});
		}
		await B(t, [
			t.actiwareFileData,
			t.actiwareStatisticsInputs,
			t.files,
			t.markers
		], async () => {
			const n = await t.actiwareFileData.get(e), c = (await t.actiwareStatisticsInputs.get(e))?.input;
			if (!n || ((await t.files.get(e))?.seriesRevision ?? 0) !== r) return;
			if (JSON.stringify(c) !== JSON.stringify(i) || JSON.stringify(n.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
			const l = is(await t.markers.where("fileId").equals(e).toArray());
			JSON.stringify(l) === JSON.stringify(s) && (await (null === o ? Ai(t, e) : $i(t, e, o, !1)), await nn(t, [e]));
		}, n);
	} catch (bd) {
		n?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), In("error", "Actiware statistics recalculation failed", {
			...Jt(bd),
			file_id: e
		});
		try {
			await B(t, [t.actiwareFileData, t.files], async () => {
				await Ai(t, e), await nn(t, [e]);
			}, n);
		} catch {
			throw bd instanceof Error ? bd : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
		}
	}
}
async function ss(e, t, n, { analysisParadigm: a, signal: i, read: r }) {
	const s = r ? r.file : await Ve(e, n);
	if (Xr(s)) {
		if (Ze(s, a) === un.rest_intervals) return rs(e, n, i);
		try {
			const a = await n.actiwareFileData.get(e);
			if (!a?.actiwareSleepWake) return;
			const r = (await n.actiwareStatisticsInputs.get(e))?.input, s = (await n.files.get(e))?.seriesRevision ?? 0, o = await n.markers.where("fileId").equals(e).toArray(), c = !0 === a.actiwareStatisticsNeedsRecompute, l = (e, t) => JSON.stringify(e.filter((e) => e.date === t).map((e) => [
				e.id,
				e.contentHash,
				e.lastModifiedAt,
				e.sleepMarkers
			])), u = (e) => JSON.stringify(e.map((e) => [
				e.markerType,
				e.onsetTimestamp,
				e.offsetTimestamp
			])), d = an(o.filter((e) => c || t.has(e.date))), p = c ? new Map([...[...d].map(([e, t]) => [e, t.sleepMarkers]), ...t]) : t, f = new Map([...p].flatMap(([e, t]) => {
				const n = d.get(e);
				return n && u(n.sleepMarkers) !== u(t) ? [] : [[e, {
					sleepMarkers: [...t],
					isInvalidNight: n?.isInvalidNight ?? !1
				}]];
			}));
			if (0 === f.size) return;
			const m = new Map([...f.keys()].map((e) => [e, l(o, e)]));
			let h = null;
			try {
				h = await fi({
					file: a,
					statisticsInput: r
				}, f, (e) => J(i).actiwareIntervalStatistics(e), J(i));
			} catch (bd) {
				i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), In("error", "Actiware statistics recalculation failed", {
					...Jt(bd),
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
				if (!t || ((await n.files.get(e))?.seriesRevision ?? 0) !== s) return;
				if (JSON.stringify(o) !== JSON.stringify(r) || JSON.stringify(t.actiwareIntervals) !== JSON.stringify(a.actiwareIntervals)) return;
				const u = await n.markers.where("fileId").equals(e).toArray(), d = new Map([...f].filter(([e]) => l(u, e) === m.get(e)));
				if (0 === d.size) return;
				if (null === h) return await Ai(n, e), void await nn(n, [e]);
				const g = di(t, h), y = g.length > 0 ? await z.waitFor(si(g, J(i))) : void 0, w = _i(t, h), _ = w.length > 0 ? await z.waitFor(Va(w, J(i))) : void 0, v = mi(t, h, d.keys(), {
					rowDateOf: y,
					rowNights: _
				});
				await $i(n, e, v, !0 === t.actiwareStatisticsNeedsRecompute && !(c && d.size === p.size)), await nn(n, [e]);
			}, i);
		} catch (bd) {
			i?.throwIfAborted(), console.error("[actiware-statistics] marker-change recalculation failed; the file is flagged for the export."), In("error", "Actiware statistics recalculation failed", {
				...Jt(bd),
				file_id: e
			});
			try {
				await B(n, [n.actiwareFileData, n.files], async () => {
					await Ai(n, e), await nn(n, [e]);
				}, i);
			} catch {
				throw bd instanceof Error ? bd : /* @__PURE__ */ new Error("Actiware statistics could not be recomputed.");
			}
		}
	}
}
const os = "An earlier audit record is still being written. The rest interval was not changed; try again.";
async function cs(e, t, n, a) {
	return (await ls(e, n, a, (n, { core: a }) => ai(n, e.date, t, a))).sleepMarkers;
}
async function ls({ fileId: e, date: t, actor: n }, a, i, r) {
	const s = await a.actiwareFileData.get(e), o = (await a.actiwareStatisticsInputs.get(e))?.input, c = s?.actiwareSleepWake;
	if (!c || !o) throw new vi("This recording has no Actiware analysis settings, so its rest intervals cannot be edited.");
	const l = J(i), u = s?.actiwareIntervals ?? [], d = await Va(u, l), p = await r(d, {
		epochs: o.epochs,
		params: c.params,
		grid: {
			startTimestamp: c.startTimestamp,
			epochSeconds: c.epochSeconds
		},
		core: l
	}), f = [...p.intervals], m = is(await a.markers.where("fileId").equals(e).toArray()), h = ei(u, f), g = gi(h);
	if (0 === g.length) return {
		sleepMarkers: hi(d, t, m.includes(t)),
		removed: 0,
		history: null
	};
	const y = await yi(p, o, m, (e) => l.actiwareIntervalStatistics(e)).catch(Ii), w = $t.captureWorkspaceBinding(a, {
		username: n.username,
		studyId: n.studyId
	});
	if (!await $t.settleWritesForDb(a, w)) throw new vi(os);
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
		if (JSON.stringify(n?.actiwareIntervals ?? []) !== JSON.stringify(u)) throw new vi("That rest interval changed since it was shown; reload the night.");
		_ = null === y || JSON.stringify(is(await a.markers.where("fileId").equals(e).toArray())) !== JSON.stringify(m);
		const r = qa(n?.actiwareRemovedRests ?? [], h, f);
		await Ni(a, e, {
			intervals: f,
			removedRests: r
		}, _ ? null : y ?? []), await a.placementResults.delete(e), await Le([e], a, i), await nn(a, [e]), await g.reduce(async (n, a) => {
			if (await n, !await $t.recordFileEventDurably({
				fileId: e,
				analysisDate: t,
				action: v.ACTIWARE_REST_EDITED,
				payload: { ...a }
			}, w)) throw new vi(os);
		}, Promise.resolve());
	}, i), _ && await rs(e, a, i), {
		sleepMarkers: hi(p, t, m.includes(t)),
		removed: h.take.filter((e) => "rest" === e.kind).length,
		history: {
			undo: (e, t = a, n) => cs(e, ti(h), t, n),
			redo: (e, t = a, n) => cs(e, h, t, n)
		}
	};
}
const us = {
	nightRecord: {
		sleepPeriodsToSave: async ({ fileId: e, date: t, isInvalidNight: n }, a, i) => Xa(a, await Va((await Mi(e, i))?.actiwareIntervals, J()), t, n),
		writeEdit: function(e, t, n = X(), a) {
			return ls(e, n, a, (n, a) => Ha(n, e.date, t, a));
		}
	},
	sourceAnalysis: {
		id: as,
		stores: ["actiwareFileData", "actiwareStatisticsInputs"],
		persistIngest: Ti,
		afterRestore: async function({ notCarried: e, db: t }) {
			return (await Promise.all(e.map(async (e) => void 0 === e ? void 0 : t.actiwareFileData.get(e)))).flatMap((e) => e?.actiwareSleepWake ? [] : ["Actiware Sleep/Wake: not in this older backup and could not be rebuilt from it"]);
		},
		covers: Xr,
		followSavedNights: async function({ fileId: e, file: t, nights: n, sleepMarkersChanged: a, analysisParadigm: i, db: r, signal: s, openBatch: o }) {
			const c = a ? void 0 : await r.actiwareFileData.get(e);
			if (a || c?.actiwareStatisticsNeedsRecompute || c?.actiwareSleepWake && !c.actiwareStatistics?.length) {
				const a = o();
				if (a) {
					let e = a.savedNights.get(as);
					e || a.savedNights.set(as, e = /* @__PURE__ */ new Map());
					for (const [t, a] of n) e.set(t, a);
				} else await ss(e, n, r, {
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
				await ss(e, t, a, {
					analysisParadigm: n,
					signal: i
				});
			} catch (bd) {
				In("error", "Actiware statistics recalculation failed", {
					...Jt(bd),
					file_id: e
				});
			}
		},
		proposeNight: async function({ fileId: e, date: t, file: n, options: a, sleepPeriodDetectionConfig: i, db: r, batch: s }) {
			if (a.algorithm !== A.ACTIWARE_SLEEP_WAKE) return null;
			const o = Xr(n) ? await ts(e, r, s) : null, l = o?.data, u = o ? Qa(o.nights, t) : null, d = (e) => (/* @__PURE__ */ new Date(1e3 * e)).toISOString().slice(11, 19), p = l?.actiwareRestProposal?.notes?.[t], f = null !== o && Ua(o.nights, t).some((e) => "scorer" === e.origin), m = p && !f ? [`Rest proposal (SCREENS Autoscore): ${p}`] : [], { source_a: h, source_b: g, fusion_policy: y, apply_nonwear_gate: w } = Mn(ft({
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
				const e = l?.actiwareIntervalsRefusal, t = (l?.actiwareIntervals ?? []).filter((e) => "rest" === e.kind && "scorer" !== e.origin), n = null !== u && t.some((e) => e.startTimestamp === u.rest.startTimestamp && e.endTimestamp === u.rest.endTimestamp);
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
					marker_type: c.MAIN_SLEEP,
					marker_index: 1
				}],
				nap_markers: (u.additionalSleeps ?? []).map((e, t) => ({
					onset_timestamp: e.startTimestamp,
					offset_timestamp: e.endTimestamp,
					marker_type: c.NAP,
					marker_index: t + 2
				})),
				decisions: [],
				sleep_period_detection_config: _,
				notes: [`Actiware sleep interval ${d(u.sleep.startTimestamp)}–${d(u.sleep.endTimestamp)} inside rest interval ${d(u.rest.startTimestamp)}–${d(u.rest.endTimestamp)}, as Actiware sets it.`, ...m]
			};
		},
		hasScorerSettings: async (e, t) => null != (await Mi(e, t))?.actiwareSleepWake,
		afterDiaryChange: {
			label: "Propose rest intervals from the new diary",
			run: async function(e, t, n) {
				try {
					await async function(e, t, n) {
						const a = await t.studySettings.where("key").equals("study").first(), i = a?.extraSettings ?? {}, r = sn(i.actiware_rest_proposal);
						if (r.rest_autoscore !== rt.screens) return !1;
						const s = await t.files.get(e);
						if (null == s?.id || !kn(s)) return !1;
						const { reanalyzeActiwareFile: o } = await import("./reanalysis-Dlp7KpbA.js");
						return (await o({
							...s,
							id: s.id
						}, {
							paradigm: _t(i.analysis_paradigm),
							overrides: pn(i.actiware_analysis),
							proposal: r,
							hasib: Yr(Kr(i))?.hasibVariants,
							db: t,
							expectedStudyContentHash: a?.contentHash ?? null,
							services: n
						})).changed;
					}(e, t, n);
				} catch (bd) {
					throw In("error", "Rest proposal after the diary write failed", {
						...Jt(bd),
						file_id: e
					}), new Error("The rest intervals were not proposed again from the new diary; they still follow the previous diary. Save the study settings to propose them again.", { cause: bd });
				}
			}
		},
		reanalyze: async (e, t, { db: n, expectedStudyContentHash: a, signal: i, services: r }) => {
			if (!kn(e)) return { changed: !1 };
			const { reanalyzeActiwareFile: s, ACTIWARE_NOT_RECONCILED: o } = await z.waitFor(import("./reanalysis-Dlp7KpbA.js")), c = await s(e, {
				paradigm: _t(t.analysis_paradigm),
				overrides: pn(t.actiware_analysis),
				proposal: sn(t.actiware_rest_proposal),
				hasib: Yr(Kr(t))?.hasibVariants,
				db: n,
				...void 0 !== a ? { expectedStudyContentHash: a } : {},
				...i ? { signal: i } : {},
				services: r
			});
			return c.unavailable ? {
				...c,
				notReconciled: o
			} : c;
		}
	},
	restWindow: ns
}, ds = {
	id: "ggir_saved_folder",
	covers: () => !0,
	stores: [],
	persistIngest: () => Promise.resolve(),
	afterRestore: () => Promise.resolve([]),
	followSavedNights: ({ fileId: e, username: t, db: n, signal: a }) => (pi(e, t, n, a), Promise.resolve())
}, ps = {
	windowForNight: async (e) => function(e) {
		const t = e?.sleepMarkers.find((e) => e.markerType === c.MAIN_SLEEP) ?? e?.sleepMarkers[0];
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
}, fs = { sleepPeriodsToSave: (e, t) => Promise.resolve(t) }, ms = {
	[un.sleep_periods]: fs,
	[un.rest_intervals]: us.nightRecord
}, hs = [us.sourceAnalysis, ds], gs = {
	hdcza: ps,
	actiware_rest_interval: us.restWindow
}, ys = Object.assign({
	"../assets/models/lstm_sleep_wake.onnx": "/sleep-scoring-wasm/assets/lstm_sleep_wake-CMNVV_Rk.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba-DjoYpGzg.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa--Jn4_6Dd.onnx",
	"../assets/models/student_lstm_h64_g128_from_lstm_ba.onnx": "/sleep-scoring-wasm/assets/student_lstm_h64_g128_from_lstm_ba-BZ4I7SAE.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_ba.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_ba-CK3CNFjI.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_kappa.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_kappa-Cb_N5vbO.onnx",
	"../assets/models/teacher_lstm_h128_g256_ba.onnx": "/sleep-scoring-wasm/assets/teacher_lstm_h128_g256_ba-CbSChb-h.onnx"
}), ws = ys["../assets/models/lstm_sleep_wake.onnx"] ?? null, _s = "lstm_sleep_wake_regular_best_20260626", vs = "bcaf0f2b3f35638a324fd0058ce4cbab03d8f6574cec33a7a07e3e4e0139a908", bs = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_URL, Ss = "configured-url", ks = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_VERSION ?? _s, Is = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SHA256 ?? (!bs && ws ? vs : ""), As = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SIZE_LABEL ?? "7.4 MB model file", xs = [
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
		version: _s,
		sha256: vs,
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
var Ts = class extends Error {
	constructor(e) {
		super(e), this.name = "LstmModelUnavailableError";
	}
};
function Ns() {
	const e = xs.flatMap((e) => {
		const t = ys[e.assetKey];
		return t ? [{
			...e,
			url: t,
			source: "bundled"
		}] : [];
	}), t = bs ? {
		id: Ss,
		label: "Configured URL",
		description: "ONNX model configured by VITE_LSTM_SLEEP_WAKE_ONNX_URL.",
		url: bs,
		version: ks,
		sha256: Is || null,
		sizeLabel: As,
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
function Ms(e = Ns()) {
	return bs && bs.length > 0 ? Ss : e.find((e) => e.recommended)?.id ?? e[0]?.id ?? null;
}
function $s(e) {
	const t = Ns(), n = e ?? Ms(t);
	return (t.find((e) => e.id === n) ?? t.find((e) => e.id === Ms(t))) || {
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
function Rs(e) {
	if (!Number.isFinite(e)) throw new Ts("LSTM threshold must be a finite number between 0 and 1.");
	return Math.min(1, Math.max(0, e));
}
function Es(e) {
	const t = Number.parseFloat({
		BASE_URL: "/sleep-scoring-wasm/",
		DEV: !1,
		MODE: "production",
		PROD: !0,
		SSR: !1,
		VITE_BASE_PATH: "/sleep-scoring-wasm/",
		VITE_FORCE_LOCAL_MODE: "true"
	}.VITE_LSTM_SLEEP_WAKE_THRESHOLD ?? "NaN");
	return Number.isFinite(t) ? Rs(t) : e.defaultThreshold;
}
function zs(e) {
	return null != e ? $s(e) : bs && bs.length > 0 ? $s(Ss) : $s();
}
async function Ds(e) {
	(function() {
		if (!("caches" in globalThis)) throw new Ts("Browser Cache Storage is unavailable, so the LSTM ONNX model cannot be cached.");
	})();
	const t = zs(e), n = function(e) {
		const { url: t } = zs(e);
		if (!t) throw new Ts("LSTM ONNX model is not configured. Add frontend/src/assets/models/lstm_sleep_wake.onnx or set VITE_LSTM_SLEEP_WAKE_ONNX_URL.");
		return t;
	}(t.id), a = await (await caches.open(function(e) {
		return `sleep-scoring-lstm-onnx-${e.version}`;
	}(t))).match(n);
	if (!a) throw new Ts("LSTM ONNX model has not been downloaded yet.");
	return new Uint8Array(await a.arrayBuffer());
}
function Cs(e) {
	const t = Ns(), n = e && "object" == typeof e ? e : null, a = "string" == typeof n?.modelId ? n.modelId : null, i = a && t.some((e) => e.id === a) ? a : Ms(t);
	if (!i) return {
		modelId: null,
		threshold: null
	};
	const r = $s(i), s = n?.threshold;
	return {
		modelId: i,
		threshold: "number" == typeof s && Number.isFinite(s) ? Rs(s) : Es(r)
	};
}
function Os(e) {
	return Cs({
		modelId: e,
		threshold: null
	}).threshold ?? .5;
}
function Ps(e, t) {
	if (0 === e.length) return [];
	const n = [0];
	for (let a = 1; a < e.length; a++) Math.abs(e[a] - e[a - 1] - t) > .001 && n.push(a);
	return n.map((t, a) => ({
		start: t,
		end: n[a + 1] ?? e.length
	}));
}
async function Fs(e, t, n, a = ua, i = () => {
	y(e);
}) {
	const r = /* @__PURE__ */ new Map(), s = Math.min(t.x.length, t.y.length, t.z.length);
	if (0 === s || t.sampleRate <= 0) return r;
	const o = a.filter((e) => !ka(e)?.needsModel);
	if (0 === o.length) return r;
	const c = new Float64Array(3 * s);
	for (let u = 0; u < s; u++) c[3 * u] = t.x[u], c[3 * u + 1] = t.y[u], c[3 * u + 2] = t.z[u];
	K(n, `before detectNonwearUnifiedBatch(${o.join(",")})`);
	const l = await Y(e, (e) => e.detectNonwearUnifiedBatch(o, {
		raw: c,
		sampleRate: t.sampleRate,
		epochSeconds: t.epochSeconds
	}), {
		ms: j,
		label: `detectNonwearUnifiedBatch(${o.join(",")})`,
		signal: n,
		cancel: i
	}).catch((e) => (D(e, n, `detectNonwearUnifiedBatch(${o.join(",")})`), console.warn("[local-processing] A raw-signal nonwear batch failed."), null));
	if (l) for (const [u, d] of Object.entries(l)) r.set(u, d);
	return r;
}
async function js(e, t, n, a, i, r = wa, s = () => {
	y(e);
}) {
	const o = {}, c = r.filter((e) => !ka(e)?.needsModel);
	if (0 === c.length) return o;
	const l = n.map((e) => t[e]).filter((e) => void 0 !== e), u = wr(l.map((e) => e.timestamps)), d = wr(l.map((e) => e.axisY)), p = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
	for (const { start: h, end: g } of Ps(u, a)) {
		const t = d.slice(h, g);
		if (0 === t.length) continue;
		K(i, "before count nonwear continuous run");
		const n = await Y(e, (e) => e.detectNonwearUnifiedBatch(c, {
			counts: t,
			epochSeconds: a
		}), {
			ms: j,
			label: "count nonwear continuous run",
			signal: i,
			cancel: s
		}).catch((e) => (D(e, i, "count nonwear continuous run"), console.warn("[local-processing] A count-based nonwear batch failed for one contiguous run."), null));
		for (const [i, r] of Object.entries(n ?? {})) {
			if (!r.available || !r.nonwear?.length) {
				p.has(i) || p.set(i, r);
				continue;
			}
			const t = await Aa(r, {
				baseTsSec: u[h],
				epochTimestampsSec: u.slice(h, g),
				epochLenSec: a
			}, e), n = p.get(i)?.nonwear ?? new Uint8Array(u.length);
			n.set(t, h), p.set(i, {
				...r,
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
function Bs(e) {
	return null == e ? {} : { [A.OAKLEY_1997]: { oakleyThreshold: e } };
}
async function Ls(e, t, n, a, i, r, s, o = () => {
	y(e);
}, c = {}, l = ki) {
	if (0 === l.length) return;
	const u = a.flatMap((e) => n[e] ?? []), d = wr(u.map((e) => e.timestamps)), p = wr(u.map((e) => e.axisY)), f = {}, m = /* @__PURE__ */ new Map();
	for (const { start: y, end: w } of Ps(d, i)) {
		const t = p.slice(y, w);
		if (!t || 0 === t.length) continue;
		const n = /* @__PURE__ */ new Map();
		for (const u of l) {
			const a = Ri(u, i);
			if ("gate_needs_30s_epoch" === a.kind) {
				n.set(u, a.response);
				continue;
			}
			K(r, `before scoreEpochs(${u} continuous)`);
			const l = await Y(e, (e) => e.scoreEpochs(Si({
				algorithm: u,
				counts: t,
				epochSeconds: i,
				...s ? { postprocessing: s } : {},
				...c[u] ? { config: c[u] } : {}
			})), {
				ms: j,
				label: `scoreEpochs(${u} continuous)`,
				signal: r,
				cancel: o
			}).catch((e) => (D(e, r, `scoreEpochs(${u} continuous)`), console.warn("[local-processing] A descriptor-driven sleep/wake scorer failed for one contiguous run."), null));
			l && n.set(u, l);
		}
		const a = Ei(n, t.length);
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
function Gs(e, t) {
	return {
		vector_magnitude: e.vectorMagnitude,
		axis_y: e.axisY,
		axis_x: e.axisX,
		axis_z: e.axisZ
	}[t];
}
async function Us(e, t, n, a, i, r, s) {
	if (!e || !t || 0 === e.timestamps.byteLength) return;
	if ("counts_axis_y" !== ka(t)?.requiredSignal) return;
	if (sa(e, t, n)) return;
	const o = new Float64Array(e.timestamps), c = i ?? J(r), l = await pt(o, { day: e }, c), u = nt(Re(t) ?? [], l), d = u !== l, p = async (e, t) => {
		const n = {
			timestamps: new Float64Array(e.timestamps),
			axisY: new Float64Array(t),
			vectorMagnitude: new Float64Array(t)
		};
		return d ? pr(c, n, l) : n;
	}, f = (e, t) => d ? mr(c, e, t, o) : t;
	let m;
	try {
		const i = [...(await Et(e.fileId, a, s)).values()];
		if (Sa.includes(t)) {
			const t = i.filter((e) => e.timestamps.byteLength > 0 && Gs(e, n)).sort((e, t) => new Float64Array(e.timestamps)[0] - new Float64Array(t.timestamps)[0]), a = t.findIndex((t) => t.date === e.date);
			if (a < 0) return;
			const s = [];
			for (const e of t) s.push(await p(e, Gs(e, n)));
			let o = a, l = a;
			const h = (e, t) => e.length > 0 && t.length > 0 && Math.abs(t[0] - e[e.length - 1] - u) < .001;
			for (; o > 0 && h(s[o - 1].timestamps, s[o].timestamps);) o--;
			for (; l + 1 < s.length && h(s[l].timestamps, s[l + 1].timestamps);) l++;
			const g = s.slice(o, l + 1), y = g.slice(0, a - o).reduce((e, t) => e + t.timestamps.length, 0), w = s[a], _ = new Float64Array(g.reduce((e, t) => e + t.axisY.length, 0));
			let v = 0;
			for (const e of g) _.set(e.axisY, v), v += e.axisY.length;
			r?.throwIfAborted();
			const b = _.length > 0 ? await c.detectNonwear(_, u) : /* @__PURE__ */ new Uint8Array(0);
			r?.throwIfAborted();
			const S = _.length > 0 ? await c.detectNonwearChoi2011(_, u) : /* @__PURE__ */ new Uint8Array(0), k = (e) => f(w.timestamps, e.slice(y, y + w.timestamps.length));
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
			const s = (await js(c, a, n.map((e) => e.date), u, r, [t]))[e.date]?.get(t);
			if (!s?.available || !s.nonwear) return;
			const d = await ba(/* @__PURE__ */ new Map([[t, {
				...s,
				nonwear: await f(a[e.date].timestamps, s.nonwear),
				elementSeconds: l
			}]]), {
				baseTsSec: o[0] ?? 0,
				epochTimestampsSec: Array.from(o),
				epochLenSec: l
			}, c);
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
	r?.throwIfAborted(), await xe(e.fileId, e.date, m, a, r), r?.throwIfAborted(), Object.assign(e, m);
}
async function Zs(e, t, n, a, i, r = () => {
	y(e);
}) {
	const s = wr(n.map((e) => t[e].timestamps)), o = wr(n.map((e) => t[e].axisY)), c = wr(n.map((e) => t[e].choiAxis ?? t[e].vectorMagnitude)), l = Ps(s, a), u = await Y(e, (e) => e.scoreAllDays(l.map(({ start: e, end: t }) => ({
		activityF64: o.slice(e, t),
		vmF64: c.slice(e, t),
		epochSeconds: a
	}))), {
		ms: j,
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
	for (const [m, h] of l.entries()) {
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
		const n = await Y(e, (e) => e.detectNonwearChoi2011(c.slice(h.start, h.end), a), {
			ms: j,
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
function Hs(e, t) {
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
async function qs(e, t) {
	return await ke((t) => t.recordingFacts(e), new Ut(t)) ?? {};
}
async function Vs(e) {
	return De((await ve(e))?.extraSettings);
}
async function Ws(e, t, n, a) {
	n?.throwIfAborted();
	const i = await x(e, 65536, a);
	n?.throwIfAborted();
	const r = new TextDecoder("utf-8", { fatal: !1 }).decode(i);
	for (const s of [/measurement frequency\s*[,:\t]\s*(\d+)/i, /sample rate(?:\s*hz)?\s*[,:\t]\s*(\d+)/i]) {
		const e = s.exec(r);
		if (e && e[1]) {
			const t = Number.parseInt(e[1], 10);
			if (Number.isFinite(t) && t > 0) return t;
		}
	}
	return W[t];
}
async function Js(e, t, n, a) {
	t?.throwIfAborted();
	const i = xi(e) ? b(zi("aw5")) : g(e.name);
	if ("none" === i) return {};
	const r = Math.max(65536, 2048);
	let s;
	try {
		s = await x(e, r, a);
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
		return null === e ? {} : await qs(e, n);
	}
	return await qs(new TextDecoder("utf-8", { fatal: !1 }).decode(s), n);
}
function Ks(e) {
	return `stored_nonwear_mask:${e}`;
}
Object.freeze([]);
const Ys = {
	temperature_epoch_stream: (e) => null != e.temperature && ha(new Float64Array(e.temperature)),
	sleep_wake_epoch_stream: (e) => null != e.algorithmResults?.[A.ACTIWARE_SLEEP_WAKE],
	device_wear_state_evidence_stream: (e) => !0 === e.actiwareOffWristChannel
};
function Xs(e) {
	const t = [];
	for (const [n, a] of Object.entries(Ys)) for (const i of e) if (a(i)) {
		t.push(n);
		break;
	}
	for (const n of ua) e.some((e) => null != sa(e, n, "")) && t.push(Ks(n));
	return t;
}
async function Qs(e, t, n) {
	const a = [];
	for (const s of t) {
		const t = ni(e, s);
		t && a.push(t.wire);
	}
	if (0 === a.length) return [];
	const { request: i, transfer: r } = ui(a);
	return (await n.computeCircadian(d(i, r))).day_summaries.filter((e) => e.has_signal).map((e) => e.analysis_date);
}
function eo(e) {
	return e instanceof Error ? e : /* @__PURE__ */ new Error("Local ingest lease renewal failed.");
}
const to = Math.max(1e3, Math.floor(wn / 4));
async function no(e) {
	void 0 !== e.heartbeatId && (clearInterval(e.heartbeatId), delete e.heartbeatId), await e.heartbeatPending, delete e.heartbeatPending;
}
async function ao(e, t, n) {
	const a = E().scoring(), i = {
		...e.recording,
		...t.recording
	}, r = e.placement ?? {
		bodySite: a.sensorLocation,
		laterality: a.participantLaterality
	}, s = await wt({
		...t,
		...t.ggirPart2Config ? { ggirNonwearDetector: await Ht(t.ggirPart2Config.csvText, n ?? J(e.signal)) } : {},
		...e.ingestProvenance ? { ingestProvenance: e.ingestProvenance } : {},
		recording: Hs(i, r)
	}, e.attemptId, e.db);
	return "started" === s.kind && (e.guard = s.guard, function(e) {
		void 0 === e.heartbeatId && (e.heartbeatId = setInterval(() => function(e) {
			const t = e.guard;
			t && void 0 === e.heartbeatError && (e.heartbeatPending = (e.heartbeatPending ?? Promise.resolve()).then(() => tt(t, e.db)).catch((t) => {
				e.heartbeatError = t;
			}));
		}(e), to));
	}(e)), s;
}
async function io(e) {
	if (await e.heartbeatPending, void 0 !== e.heartbeatError) throw eo(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new dn();
	return await tt(t, e.db), t;
}
async function ro(e) {
	if (await no(e), void 0 !== e.heartbeatError) throw eo(e.heartbeatError);
	const t = e.guard;
	if (!t) throw new dn();
	await async function(e, t = X()) {
		try {
			return await async function(e, t = X(), n) {
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
					]), s = r(t, i), o = Xs([...(await Et(e, a)).values()]), c = t ? Ya(t.sourceType, t.sourceProfileId) : null;
					if (c && l[c].capabilityFromSensorRows && !o.includes("device_wear_state_evidence_stream") && i > 0 && o.push("device_wear_state_evidence_stream"), void 0 === t?.id) return o;
					if (await B(a, [
						a.files,
						a.sensorNonwear,
						a.projectMeta
					], async () => {
						const t = await a.files.get(e);
						return r(t, await a.sensorNonwear.where("fileId").equals(e).count()) === s && (t && (i = t.resolvedCapabilities, c = o, void 0 === i || i.length !== c.length || !c.every((e) => i.includes(e)) || 4 !== t.resolvedCapabilitiesRevision) && await P(a, [a.files], () => a.files.update(e, {
							resolvedCapabilities: o,
							resolvedCapabilitiesRevision: 4
						}), n), !0);
						var i, c;
					}, n)) return o;
				}
			}(e, t);
		} catch {
			return console.warn("Capability refresh failed. Stored data was kept; conditional capabilities remain unavailable until the next read."), [];
		}
	}(t.fileId, e.db), e.finalizedFileId = await kt(t, e.db, e.signal), delete e.guard;
}
async function so(e, t) {
	try {
		await no(e);
		const t = e.guard, n = !!t && await Ae(t, e.db);
		t && delete e.guard, n ? (console.warn("[local-processing] Rolled back an incomplete local ingest."), e.rollbackOutcome = "rolled_back") : e.rollbackOutcome ??= "nothing_to_roll_back";
	} catch {
		console.error("[local-processing] Incomplete local ingest rollback also failed."), e.rollbackOutcome = "failed";
	}
}
function oo(e, t) {
	return "object" == typeof e && null !== e && void 0 !== t.rollbackOutcome && (e.__localIngestRollbackOutcome = t.rollbackOutcome), e;
}
async function co(e, t, n, a, i) {
	try {
		const r = await Qs(e, t, a);
		await Oe(e, t.map((e) => e.date), r, n, i);
	} catch {
		i?.throwIfAborted(), console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
	}
}
function lo(e, t, n, a) {
	return a <= 0 ? 0 : .9 * (e - 1 + (t - e + 1) * n / 3) / a;
}
function uo({ scope: e, fileId: t, sourceContentHash: n, label: a, signalDates: i, onChunk: r }) {
	const s = [];
	let o = 0;
	const c = {
		saved: 0,
		activityFailed: !1,
		historyFailed: !1
	}, l = async () => {
		const l = s.splice(0);
		if (0 === l.length) return;
		const u = o - l.length + 1, d = o;
		r?.(u, d, 0), await io(e), r?.(u, d, 1);
		try {
			const t = l.map((e) => e.facts);
			await it(l.map((e) => e.day), e.db, t.every((e) => void 0 !== e) ? t : void 0, e.signal);
		} catch (m) {
			throw console.warn("[local-processing] Activity-day persistence failed."), tr(m, `saveActivityDay (${a})`), c.activityFailed = !0, m;
		}
		c.saved += l.length;
		const p = l.map((e) => e.day.date);
		try {
			await Oe(t, p, p.filter((e) => i.has(e)), e.db, e.signal);
		} catch {
			console.warn("[local-processing] Circadian coverage could not be stored for saved days.");
		}
		r?.(u, d, 2);
		const f = l.flatMap((e) => e.history.map((t) => ({
			...t,
			date: e.day.date
		})));
		await async function(e, t, n, a, i = X(), r) {
			const s = i, o = vn(), c = a.map((a) => {
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
				return await fe(c, s, r), !0;
			} catch {
				r?.throwIfAborted(), console.error("[local-processing] Algorithm history batch write failed; retrying records individually.");
			}
			let l = !1;
			for (const u of c) try {
				await Fn(u, s, r);
			} catch {
				r?.throwIfAborted(), l = !0, console.error("[local-processing] An algorithm history write failed; latest scoring remains available.");
				try {
					await fo({
						op: "algorithm_run_put",
						fileId: e,
						payload: {
							kind: "history_write_failed",
							...me(u),
							date: u.date,
							error: "history_write_failed"
						}
					}, s, r);
				} catch {}
			}
			return !l;
		}(t, l[0].day.date, n, f, e.db, e.signal) || (c.historyFailed = !0), r?.(u, d, 3), await ee();
	};
	return {
		state: c,
		flush: l,
		add: async (e, t, n) => {
			s.push({
				day: e,
				history: t,
				facts: n
			}), o += 1, s.length >= 8 && await l();
		}
	};
}
async function po(e, t = X(), n) {
	const a = t;
	try {
		const t = await e.identity(), s = await Te(e.fileId, a);
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
			profileProofStatus: (i = t.profileProofStatus, Li(i, r, "profileProofStatus")),
			temporalBasis: Gi(t.temporalBasis),
			calibration: e.calibration,
			diaryDisposition: s.length > 0 ? "present" : "absent",
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
async function fo(e, t = X(), n) {
	const a = t, { appendWal: i, withWalTx: r } = await import("./wal-CFJka1o3.js").then((e) => e.r);
	await r([], async () => {
		await i(e);
	}, a, n);
}
function mo(e, t) {
	return Gn(void 0 === t ? void 0 : { recording: t }, e?.sensorLocation ?? R.sensor_location);
}
function ho(e) {
	return function(e) {
		return lr.includes(e);
	}(e) ? e : 60;
}
function go(e) {
	const t = Cs(e?.lstmSelection);
	return {
		selection: t,
		descriptor: zs(t.modelId),
		scoreOptions: {
			modelId: t.modelId,
			...null != t.threshold ? { threshold: t.threshold } : {}
		}
	};
}
function yo(e) {
	const t = go(e);
	return { extras: {
		lstmFeatureContract: "spectral_30s_mean_centered_v3_probabilities",
		lstmModelId: t.descriptor.id,
		lstmModelVersion: t.descriptor.version,
		lstmThreshold: String(t.selection.threshold ?? t.descriptor.defaultThreshold),
		ggirCountScorerContract: "zcy_ws3_count_epoch_v4"
	} };
}
function wo(e, t) {
	return "number" == typeof e && "number" == typeof t && e !== t;
}
let _o = 0;
const vo = /* @__PURE__ */ new Set();
function bo(e, t, n) {
	if (n) {
		const e = ge(n);
		if (!zn(e)) return Je(e);
	}
	return t ?? _.SMART;
}
function So(e, t) {
	e.invalidateQueries({ queryKey: t }).catch((e) => {
		In("warn", "Query invalidation failed", {
			...Jt(e),
			query_key: t.map(String).join(":")
		});
	});
}
const ko = {
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
function Io(e) {
	const t = e.replace(/^rule_\d+_/, "").replace(/_/g, " ").trim();
	return 0 === t.length ? e : t.charAt(0).toUpperCase() + t.slice(1);
}
function Ao(e) {
	return We(e, h);
}
async function xo(e, t, n) {
	const a = n ? await n.wearSiteHasptRouting(e, t ?? void 0) : await Pe("wearSiteHasptRouting", `${e}:${t ?? ""}`, () => h().wearSiteHasptRouting(e, t ?? void 0));
	return {
		sensorLocation: a.sensorLocation,
		variant: a.variant,
		requiresLongitudinalAxis: a.requiresLongitudinalAxis,
		routedByWearSite: null == t
	};
}
function To(e) {
	const t = Object.values(e).filter((e) => "number" == typeof e);
	return Object.entries(e).filter(([e, n]) => -1 === t.indexOf(+e)).map(([e, t]) => t);
}
function No(e, t = "|") {
	return e.map((e) => Ko(e)).join(t);
}
function Mo(e, t) {
	return "bigint" == typeof t ? t.toString() : t;
}
Object.fromEntries(Object.values(q).map((e) => [e, ko[e] ?? Io(e)]));
var $o = class {
	constructor(e) {
		this._getter = e, this._value = void 0;
	}
	get value() {
		const e = this._getter;
		return void 0 !== e && (this._value = e(), this._getter = void 0), this._value;
	}
};
function Ro(e) {
	return new $o(e);
}
function Eo(e) {
	const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function zo(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function Do(e) {
	const t = Object.getOwnPropertyDescriptor(e, "shape");
	return t?.get ? t.get.raw : t?.value;
}
function Co(e) {
	return Do(e._zod.def) ?? e._zod.def.shape;
}
function Oo(e, t, n) {
	Object.defineProperty(e, t, {
		get() {
			const e = n();
			return zo(this, t, e), e;
		},
		enumerable: !0,
		configurable: !0
	});
}
function Po(e, t, n) {
	t in e ? zo(e, t, n) : e[t] = n;
}
function Fo(e, t, n, a) {
	const i = Co(t);
	for (const r of n) {
		const n = Object.getOwnPropertyDescriptor(i, r);
		n.enumerable && (n.get ? Oo(e, r, () => {
			const e = t._zod.def.shape[r];
			return a ? a(e, r) : e;
		}) : Po(e, r, a ? a(n.value, r) : n.value));
	}
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
const Lo = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Go(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
const Uo = Ro(() => {
	if (Nc.jitless) return !1;
	if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return new Function(""), !0;
	} catch (e) {
		return !1;
	}
});
function Zo(e) {
	if (!1 === Go(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	if ("function" != typeof t) return !0;
	const n = t.prototype;
	return !1 !== Go(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf");
}
function Ho(e) {
	return Zo(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
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
function Ko(e) {
	return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`;
}
const Yo = (() => ({
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}))(), Xo = {
	int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
	uint64: [BigInt(0), BigInt("18446744073709551615")]
};
function Qo(e, t) {
	const n = Co(e), a = [];
	for (const i of Reflect.ownKeys(t)) {
		if (!Object.getOwnPropertyDescriptor(n, i)?.enumerable) throw new Error(`Unrecognized key: "${String(i)}"`);
		t[i] && a.push(i);
	}
	return a;
}
function ec(e, t) {
	const n = {};
	return Fo(n, e, Reflect.ownKeys(Co(e))), function(e, t) {
		for (const n of Reflect.ownKeys(t)) {
			const a = Object.getOwnPropertyDescriptor(t, n);
			a.enumerable && (a.get ? Oo(e, n, () => t[n]) : Po(e, n, a.value));
		}
	}(n, t), n;
}
function tc(e, t, n, a = "partial") {
	const i = t._zod.def.checks;
	if (i && i.length > 0) throw new Error(`.${a}() cannot be used on object schemas containing refinements`);
	const r = n ? new Set(Qo(t, n)) : void 0, s = {};
	return Fo(s, t, Reflect.ownKeys(Co(t)), e && ((t, n) => r && !r.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), Wo(t, jo(t._zod.def, {
		shape: s,
		checks: []
	}));
}
function nc(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!0 !== e.issues[n]?.continue) return !0;
	return !1;
}
function ac(e, t = 0) {
	if (!0 === e.aborted) return !0;
	for (let n = t; n < e.issues.length; n++) if (!1 === e.issues[n]?.continue) return !0;
	return !1;
}
function ic(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function rc(e) {
	return "string" == typeof e ? e : e?.message;
}
function sc(e) {
	const t = [];
	for (const n of e ?? []) {
		const e = n._zod.def;
		if (!/_(length|size)$|_equals$/.test(e.check)) break;
		const a = e.maximum ?? e.length ?? e.size;
		a >= 0 && t.push([a, n]);
	}
	return t;
}
function oc(e, t, n) {
	var a;
	for (let i = t; i < e.length; i++) (a = e[i]).schema ?? (a.schema = n);
}
function cc(e, t, n) {
	var a;
	const i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (a = e).schema ?? (a.schema = e.inst) : e.schema = e.inst);
	const r = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0, s = e.message ? e.message : rc(e.inst?._zod.def?.error?.(e)) ?? rc(r?.(e)) ?? rc(t?.error?.(e)) ?? rc(n.customError?.(e)) ?? rc(n.localeError?.(e)) ?? "Invalid input", o = {};
	for (const c of Object.keys(e)) "inst" !== c && "schema" !== c && "continue" !== c && "input" !== c && "__proto__" !== c && (o[c] = e[c]);
	return o.path ?? (o.path = []), o.message = s, t?.reportInput && (o.input = e.input), o;
}
const lc = /[\uD800-\uDBFF]/;
function uc(e) {
	const t = e.length;
	if (!lc.test(e)) return t;
	let n = t;
	for (let a = 0; a < t - 1; a++) 55296 == (64512 & e.charCodeAt(a)) && 56320 == (64512 & e.charCodeAt(a + 1)) && (n--, a++);
	return n;
}
function dc(e) {
	return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown";
}
function pc(...e) {
	const [t, n, a] = e;
	return "string" == typeof t ? {
		message: t,
		code: "custom",
		input: n,
		inst: a
	} : { ...t };
}
function fc(e, t, n, a = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: a,
		value: n
	}), n;
}
function mc(e, t, n) {
	return fc(e, t, n, !1);
}
function hc(e, t) {
	for (const n in e) {
		const a = e[n];
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !0,
			get() {
				return fc(this, n, a(this));
			},
			set(e) {
				fc(this, n, e);
			}
		});
	}
	return t;
}
function gc(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return null == this ? n : fc(this, t, n.bind(this));
		},
		set(e) {
			fc(this, t, e);
		}
	});
}
let yc, wc = !1;
const _c = {
	configurable: !0,
	get() {
		wc = !0;
	}
};
function vc(e, t, n) {
	const a = Object.getPrototypeOf(e._zod);
	t in a && yc !== e._zod ? yc = void 0 : (yc = e._zod, Object.defineProperty(a, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, _c);
			const e = wc;
			wc = !1;
			try {
				const a = n(this);
				return wc ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: a
				}), wc = wc || e, a;
			} catch (a) {
				throw delete this[t], wc = wc || e, a;
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
function bc(e) {
	const t = () => e;
	return t["~constantCatch"] = !0, t;
}
var Sc;
const kc = {
	value: void 0,
	enumerable: !1
};
let Ic = "captureStackTrace" in Error ? Error : null;
function Ac(e, t, n, a) {
	function i(e) {
		this.def = e, this.constr = u, this.traits = /* @__PURE__ */ new Set();
	}
	i.prototype = {};
	const r = n, s = r && /* @__PURE__ */ new WeakSet();
	function o(n, a) {
		if (n._zod) {
			if (n._zod.traits.has(e)) return;
		} else {
			kc.value = new i(a);
			try {
				Object.defineProperty(n, "_zod", kc);
			} finally {
				kc.value = void 0;
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
					}) : gc(e, n, a.value);
				}
			}(i, r));
		}
		const o = u.prototype;
		for (const e in o) Object.prototype.hasOwnProperty.call(o, e) && (e in n || (n[e] = o[e].bind(n)));
	}
	const c = a?.Parent ?? Object;
	class l extends c {}
	function u(e) {
		const t = a?.Parent ? function(e) {
			const t = Ic;
			if (t) {
				const n = t.stackTraceLimit;
				if ("number" == typeof n) {
					try {
						t.stackTraceLimit = 0;
					} catch {
						return Ic = null, new e();
					}
					try {
						return new e();
					} finally {
						t.stackTraceLimit = n;
					}
				}
			}
			return new e();
		}(l) : this;
		o(t, e);
		const n = t._zod.deferred;
		if (n) {
			for (const e of n) e();
			t._zod.deferred = void 0;
		}
		const i = globalThis.__zod_globalConfig?.postProcessor;
		return i && i(t), t;
	}
	return Object.defineProperty(l, "name", { value: e }), Object.defineProperty(u, "init", { value: o }), Object.defineProperty(u, Symbol.hasInstance, { value: (t) => !!(a?.Parent && t instanceof a.Parent) || t?._zod?.traits?.has(e) }), Object.defineProperty(u, "name", { value: e }), u;
}
var xc = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, Tc = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(Sc = globalThis).__zod_globalConfig ?? (Sc.__zod_globalConfig = {});
const Nc = globalThis.__zod_globalConfig;
function Mc(e) {
	return e && Object.assign(Nc, e), Nc;
}
const $c = {
	get: function() {
		const e = this._zod;
		return e.message ?? (e.message = JSON.stringify(e.def, Mo, 2)), e.message;
	},
	set: function(e) {
		this._zod.message = e;
	},
	enumerable: !0,
	configurable: !0
}, Rc = {
	value: void 0,
	enumerable: !1
}, Ec = new WeakSet([Object.prototype, Error.prototype]), zc = (e, t) => {
	e.name = "$ZodError", Rc.value = t, Object.defineProperty(e, "issues", Rc), Rc.value = void 0, Object.defineProperty(e, "message", $c);
	const n = Object.getPrototypeOf(e);
	Ec.has(n) || (Ec.add(n), Object.defineProperty(n, "toString", {
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
}, Dc = Ac("$ZodError", zc);
function Cc(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || ("__proto__" === t ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function Oc(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
Ac("$ZodError", zc, void 0, { Parent: Error });
const Pc = (e) => {
	const t = (n, a, i, r) => {
		const s = i ? {
			...i,
			async: !1
		} : { async: !1 }, o = n._zod.run({
			value: a,
			issues: []
		}, s);
		if (o instanceof Promise) throw new xc();
		if (o.issues.length) {
			const n = new ((r?.Err) ?? e)(o.issues.map((e) => cc(e, s, Mc())));
			throw Lo(n, r?.callee ?? t), n;
		}
		return o.value;
	};
	return t;
}, Fc = (e) => {
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
			const n = new ((r?.Err) ?? e)(o.issues.map((e) => cc(e, s, Mc())));
			throw Lo(n, r?.callee ?? t), n;
		}
		return o.value;
	};
	return t;
}, jc = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		async: !1
	} : { async: !1 }, r = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (r instanceof Promise) throw new xc();
	return r.issues.length ? Bc(e, r.issues, i) : {
		success: !0,
		data: r.value
	};
};
function Bc(e, t, n) {
	let a;
	return {
		success: !1,
		get error() {
			return a || (a = new e(t.map((e) => cc(e, n, Mc()))), t = void 0, n = void 0), a;
		},
		set error(e) {
			a = e, t = void 0, n = void 0;
		}
	};
}
const Lc = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		async: !0
	} : { async: !0 };
	let r = t._zod.run({
		value: n,
		issues: []
	}, i);
	return r instanceof Promise && (r = await r), r.issues.length ? Bc(e, r.issues, i) : {
		success: !0,
		data: r.value
	};
}, Gc = Symbol.for("zod.compile.invalid"), Uc = Symbol.for("zod.compile.fallback"), Zc = (e) => {
	const t = Pc(e), n = (e, a, i, r) => {
		const s = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return t(e, a, s, Oc(n, r));
	};
	return n;
}, Hc = (e) => {
	const t = Pc(e), n = (e, a, i, r) => t(e, a, i, Oc(n, r));
	return n;
}, qc = (e) => {
	const t = Fc(e), n = async (e, a, i, r) => {
		const s = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return await t(e, a, s, Oc(n, r));
	};
	return n;
}, Vc = (e) => {
	const t = Fc(e), n = async (e, a, i, r) => await t(e, a, i, Oc(n, r));
	return n;
}, Wc = (e) => (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return jc(e)(t, n, i);
}, Jc = (e) => (t, n, a) => jc(e)(t, n, a), Kc = (e) => async (t, n, a) => {
	const i = a ? {
		...a,
		direction: "backward"
	} : { direction: "backward" };
	return Lc(e)(t, n, i);
}, Yc = (e) => async (t, n, a) => Lc(e)(t, n, a), Xc = /^[cC][0-9a-z]{6,}$/, Qc = /^[0-9a-z]+$/, el = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, tl = /^[0-9a-vA-V]{20}$/, nl = /^[A-Za-z0-9]{27}$/, al = /^[a-zA-Z0-9_-]{21}$/, il = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, rl = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, sl = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ol = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, cl = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ll = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, ul = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, dl = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, pl = /^https?$/, fl = /^\+[1-9]\d{6,14}$/, ml = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function hl(e) {
	return new RegExp(`^${e}$`);
}
const gl = hl(ml);
function yl(e) {
	const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return "number" == typeof e.precision ? -1 === e.precision ? `${t}` : 0 === e.precision ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
const wl = /^[\s\S]{0,}$/, _l = /^-?\d+$/, vl = /^-?\d+(?:\.\d+)?$/, bl = /^(?:true|false)$/i, Sl = /^[^A-Z]*$/, kl = /^[^a-z]*$/, Il = Ac("$ZodCheck", (e, t) => {
	var n;
	e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Al = (e) => {
	const t = e.value;
	return !(null == t || void 0 === t.length);
}, xl = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, Tl = Ac("$ZodCheckLessThan", (e, t) => {
	Il.init(e, t);
	const n = xl[typeof t.value];
	e._zod.check = (a) => {
		(t.inclusive ? a.value <= t.value : a.value < t.value) || a.issues.push({
			origin: xl[typeof a.value] ?? n,
			code: "too_big",
			maximum: "object" == typeof t.value ? t.value.getTime() : t.value,
			input: a.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Nl = Ac("$ZodCheckGreaterThan", (e, t) => {
	Il.init(e, t);
	const n = xl[typeof t.value];
	e._zod.check = (a) => {
		(t.inclusive ? a.value >= t.value : a.value > t.value) || a.issues.push({
			origin: xl[typeof a.value] ?? n,
			code: "too_small",
			minimum: "object" == typeof t.value ? t.value.getTime() : t.value,
			input: a.value,
			inclusive: t.inclusive,
			inst: e,
			continue: !t.abort
		});
	};
}), Ml = Ac("$ZodCheckMultipleOf", (e, t) => {
	Il.init(e, t), e._zod.check = (n) => {
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
}), $l = Ac("$ZodCheckNumberFormat", (e, t) => {
	Il.init(e, t), t.format = t.format || "float64";
	const n = t.format?.includes("int"), a = n ? "int" : "number", [i, r] = Yo[t.format];
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
}), Rl = Ac("$ZodCheckMaxLength", (e, t) => {
	var n;
	Il.init(e, t), (n = e._zod.def).when ?? (n.when = Al), e._zod.check = (n) => {
		const a = n.value, i = a.length;
		if (("string" == typeof a && i > t.maximum ? uc(a) : i) <= t.maximum) return;
		const r = dc(a);
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
}), El = Ac("$ZodCheckMinLength", (e, t) => {
	var n;
	Il.init(e, t), (n = e._zod.def).when ?? (n.when = Al), e._zod.check = (n) => {
		const a = n.value, i = a.length;
		if (("string" == typeof a && i >= t.minimum && i < 2 * t.minimum ? uc(a) : i) >= t.minimum) return;
		const r = dc(a);
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
}), zl = Ac("$ZodCheckLengthEquals", (e, t) => {
	var n;
	Il.init(e, t), (n = e._zod.def).when ?? (n.when = Al), e._zod.check = (n) => {
		const a = n.value, i = a.length, r = "string" == typeof a && i >= t.length && i <= 2 * t.length ? uc(a) : i;
		if (r === t.length) return;
		const s = dc(a), o = r > t.length;
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
}), Dl = Ac("$ZodCheckStringFormat", (e, t) => {
	var n, a;
	Il.init(e, t), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
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
}), Cl = Ac("$ZodCheckRegex", (e, t) => {
	Dl.init(e, t), e._zod.check = (n) => {
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
}), Ol = Ac("$ZodCheckLowerCase", (e, t) => {
	t.pattern ?? (t.pattern = Sl), Dl.init(e, t);
}), Pl = Ac("$ZodCheckUpperCase", (e, t) => {
	t.pattern ?? (t.pattern = kl), Dl.init(e, t);
}), Fl = Ac("$ZodCheckIncludes", (e, t) => {
	Il.init(e, t);
	const n = Vo(t.includes);
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
}), jl = Ac("$ZodCheckStartsWith", (e, t) => {
	Il.init(e, t);
	const n = new RegExp(`^${Vo(t.prefix)}.*`);
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
}), Bl = Ac("$ZodCheckEndsWith", (e, t) => {
	Il.init(e, t);
	const n = new RegExp(`.*${Vo(t.suffix)}$`);
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
}), Ll = Ac("$ZodCheckOverwrite", (e, t) => {
	Il.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
});
var Gl = class {
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
const Ul = {
	major: 4,
	minor: 6,
	patch: 7
}, Zl = Ac("$ZodType", (e, t) => {
	var n;
	e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Ul;
	const a = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...a ?? []] : a?.length ? [...a] : [];
	for (const r of i) for (const t of r._zod.onattach) t(e);
	if (0 === i.length) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		const t = (t, n, a) => {
			if (t.memo) return t;
			let i, r = nc(t);
			for (const s of n) {
				if (s._zod.def.when) {
					if (ac(t)) continue;
					if (!s._zod.def.when(t)) continue;
				} else if (r) continue;
				const n = t.issues.length, o = s._zod.check(t);
				if (o instanceof Promise && !1 === a?.async) throw new xc();
				if (i || o instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await o, t.issues.length !== n && (oc(t.issues, n, e), r || (r = nc(t, n)));
				});
				else {
					if (t.issues.length === n) continue;
					oc(t.issues, n, e), r || (r = nc(t, n));
				}
			}
			return i ? i.then(() => t) : t;
		}, n = (n, a, r) => {
			if (nc(n)) return n.aborted = !0, n;
			const s = t(a, i, r);
			if (s instanceof Promise) {
				if (!1 === r.async) throw new xc();
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
				if (!1 === r.async) throw new xc();
				return s.then((e) => t(e, i, r));
			}
			return t(s, i, r);
		};
	}
}, {
	get "~standard"() {
		return mc(this, "~standard", ql(this));
	},
	set "~standard"(e) {
		fc(this, "~standard", e);
	}
}), Hl = (e, t) => e.issues.length ? { issues: e.issues.map((e) => cc(e, t, Mc())) } : { value: e.value };
function ql(e) {
	return {
		validate: (t) => {
			const n = { async: !1 };
			try {
				const a = e._zod.run({
					value: t,
					issues: []
				}, n);
				if (!(a instanceof Promise)) return Hl(a, n);
			} catch (a) {}
			return async function(e, t) {
				const n = { async: !0 };
				return Hl(await e._zod.run({
					value: t,
					issues: []
				}, n), n);
			}(e, t);
		},
		vendor: "zod",
		version: 1
	};
}
const Vl = Ac("$ZodString", (e, t) => {
	Zl.init(e, t), e._zod.pattern = t.pattern ?? wl, e._zod.parse = (n, a) => {
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
}), Wl = Ac("$ZodStringFormat", (e, t) => {
	Dl.init(e, t), Vl.init(e, t);
}), Jl = Ac("$ZodGUID", (e, t) => {
	t.pattern ?? (t.pattern = rl), Wl.init(e, t);
}), Kl = Ac("$ZodUUID", (e, t) => {
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
		t.pattern ?? (t.pattern = sl(e));
	} else t.pattern ?? (t.pattern = sl());
	Wl.init(e, t);
}), Yl = Ac("$ZodEmail", (e, t) => {
	t.pattern ?? (t.pattern = ol), Wl.init(e, t);
});
function Xl(e) {
	try {
		return "undefined" != typeof URL && "function" == typeof URL.canParse ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
const Ql = /[\t\n\r]/g;
function eu(e) {
	return e.replace(Ql, "");
}
const tu = Ac("$ZodURL", (e, t) => {
	Wl.init(e, t), e._zod.check = (n) => {
		try {
			const a = n.value.trim(), i = function(e, t) {
				return "normalize" in t || "hostname" in t || "protocol" in t ? function(e, t) {
					if (!t.normalize && t.protocol?.source === pl.source && !/^https?:\/\//i.test(e)) return 1;
					try {
						if ("undefined" != typeof URL) {
							const t = URL;
							if ("function" == typeof t.parse) return t.parse(e) ?? 2;
						}
						return new URL(e);
					} catch {
						return 2;
					}
				}(e, t) : Xl(e) || 2;
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
			}) : !0 === i ? n.value = eu(a) : (t.hostname && !function(e, t) {
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
			}), n.value = t.normalize ? i.href : eu(a));
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
}), nu = Ac("$ZodEmoji", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp("^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", "u")), Wl.init(e, t);
}), au = Ac("$ZodNanoID", (e, t) => {
	if (void 0 !== t.length && (!Number.isInteger(t.length) || t.length < 1)) throw new Error(`Invalid nanoid length: ${t.length}`);
	var n;
	t.pattern ?? (t.pattern = void 0 === t.length ? al : (n = t.length, new RegExp(`^[a-zA-Z0-9_-]{${n}}$`))), Wl.init(e, t);
}), iu = Ac("$ZodCUID", (e, t) => {
	t.pattern ?? (t.pattern = Xc), Wl.init(e, t);
}), ru = Ac("$ZodCUID2", (e, t) => {
	t.pattern ?? (t.pattern = Qc), Wl.init(e, t);
}), su = Ac("$ZodULID", (e, t) => {
	t.pattern ?? (t.pattern = el), Wl.init(e, t);
}), ou = Ac("$ZodXID", (e, t) => {
	t.pattern ?? (t.pattern = tl), Wl.init(e, t);
}), cu = Ac("$ZodKSUID", (e, t) => {
	t.pattern ?? (t.pattern = nl), Wl.init(e, t);
}), lu = Ac("$ZodISODateTime", (e, t) => {
	t.pattern ?? (t.pattern = function(e) {
		const t = ["Z"];
		e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const n = `${yl({
			precision: e.precision,
			seconds: !0
		})}(?:${t.join("|")})`, a = e.local ? `${n}|${yl({ precision: e.precision })}` : n;
		return new RegExp(`^${ml}T(?:${a})$`);
	}(t)), Wl.init(e, t);
}), uu = Ac("$ZodISODate", (e, t) => {
	t.pattern ?? (t.pattern = gl), Wl.init(e, t);
}), du = Ac("$ZodISOTime", (e, t) => {
	t.pattern ?? (t.pattern = new RegExp(`^${yl(t)}$`)), Wl.init(e, t);
}), pu = Ac("$ZodISODuration", (e, t) => {
	t.pattern ?? (t.pattern = il), Wl.init(e, t);
}), fu = Ac("$ZodIPv4", (e, t) => {
	t.pattern ?? (t.pattern = cl), Wl.init(e, t);
}), mu = /^[0-9a-fA-F:.]+$/;
function hu(e) {
	return !!mu.test(e) && Xl(`http://[${e}]`);
}
const gu = Ac("$ZodIPv6", (e, t) => {
	t.pattern ?? (t.pattern = ll), Wl.init(e, t), e._zod.check = (n) => {
		hu(n.value) || n.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), yu = Ac("$ZodCIDRv4", (e, t) => {
	t.pattern ?? (t.pattern = ul), Wl.init(e, t);
}), wu = Ac("$ZodCIDRv6", (e, t) => {
	t.pattern ?? (t.pattern = dl), Wl.init(e, t), e._zod.check = (n) => {
		(function(e) {
			const t = e.split("/");
			if (2 !== t.length) return !1;
			const [n, a] = t;
			if (!a) return !1;
			const i = Number(a);
			return `${i}` === a && !(i < 0 || i > 128) && hu(n);
		})(n.value) || n.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function _u(e) {
	if ("" === e) return !0;
	if (/\s/.test(e)) return !1;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
const vu = /^[0-9a-zA-Z+/]*={0,2}$/, bu = Ac("$ZodBase64", (e, t) => {
	t.pattern ?? (t.pattern = vu), Wl.init(e, t), e._zod.check = (n) => {
		_u(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Su = /^[A-Za-z0-9_-]*$/, ku = Ac("$ZodBase64URL", (e, t) => {
	t.pattern ?? (t.pattern = Su), Wl.init(e, t), e._zod.check = (n) => {
		(function(e) {
			if (!Su.test(e)) return !1;
			const t = e.replace(/[-_]/g, (e) => "-" === e ? "+" : "/");
			return _u(t.padEnd(4 * Math.ceil(t.length / 4), "="));
		})(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Iu = Ac("$ZodE164", (e, t) => {
	t.pattern ?? (t.pattern = fl), Wl.init(e, t);
}), Au = Ac("$ZodJWT", (e, t) => {
	Wl.init(e, t), e._zod.check = (n) => {
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
}), xu = Ac("$ZodNumber", (e, t) => {
	Zl.init(e, t), e._zod.pattern = vl, e._zod.parse = (n, a) => {
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
}), Tu = Ac("$ZodNumberFormat", (e, t) => {
	$l.init(e, t), xu.init(e, t);
}), Nu = Ac("$ZodBoolean", (e, t) => {
	Zl.init(e, t), e._zod.pattern = bl, e._zod.parse = (n, a) => {
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
}), Mu = Ac("$ZodUnknown", (e, t) => {
	Zl.init(e, t), e._zod.parse = (e) => e;
}), $u = Ac("$ZodNever", (e, t) => {
	Zl.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
}), Ru = (e) => Array.isArray(e) ? e.length : -1;
function Eu(e, t, n) {
	e.issues.length && t.issues.push(...ic(n, e.issues)), t.value[n] = e.value;
}
const zu = Ac("$ZodArray", (e, t) => {
	Zl.init(e, t);
	const n = Nc.memoizer;
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
			const n = r[e], c = t.element._zod.run({
				value: n,
				issues: []
			}, i);
			if (c instanceof Promise) s.push(c.then((t) => Eu(t, a, e)));
			else if (Eu(c, a, e), o && 0 !== c.issues.length && nc(c)) break;
		}
		return s.length ? Promise.all(s).then(() => a) : a;
	}, function(e, t) {
		const n = sc(e._zod.def.checks);
		if (!n.length) return;
		const a = Math.min(...n.map((e) => e[0])), i = e._zod.parse;
		e._zod.parse = (n, r) => {
			const s = t(n.value);
			if (s > a && !r?.skipChecks && "backward" !== r?.direction) {
				for (const [t, a] of sc(e._zod.def.checks)) if (s > t && a._zod.def.when(n)) {
					const t = n.issues.length;
					return a._zod.check(n), n.issues[t].continue = !1, oc(n.issues, t, e), n;
				}
			}
			return i(n, r);
		};
	}(e, Ru);
});
function Du(e, t, n, a, i, r) {
	const s = n in a, o = "optional" === r;
	if (s || !o || "optional" !== i) {
		if (e.issues.length) {
			if (void 0 !== i && o && !s) return;
			t.issues.push(...ic(n, e.issues));
		}
		s || void 0 !== i ? void 0 === e.value ? (s || "defaulted" === i && !o) && (t.value[n] = void 0) : t.value[n] = e.value : e.issues.length || t.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [n]
		});
	}
}
const Cu = [];
function Ou(e) {
	const t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), a = n.length ? n : Cu, i = a.length ? [...t, ...a] : t;
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
function Pu(e, t, n, a, i, r, s) {
	const o = [], c = i.keySet, l = i.catchall._zod, u = l.def.type, d = l.optin, p = l.optout;
	let f = 0;
	for (const m in t) {
		if (s && n.issues.length !== f) {
			if (nc(n, f)) break;
			f = n.issues.length;
		}
		if (c.has(m)) continue;
		if ("__proto__" === m) {
			"never" === u && o.push(m);
			continue;
		}
		if ("never" === u) {
			o.push(m);
			continue;
		}
		const i = l.run({
			value: t[m],
			issues: []
		}, a);
		i instanceof Promise ? e.push(i.then((e) => Du(e, n, m, t, d, p))) : Du(i, n, m, t, d, p);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: r,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
const Fu = Ac("$ZodObject", (e, t) => {
	Zl.init(e, t);
	const n = Object.getOwnPropertyDescriptor(t, "shape"), a = n?.get ? n.get.raw : t.shape ?? {};
	if (a) {
		const e = () => {
			const n = { ...a };
			return Object.defineProperty(t, "shape", { value: n }), e.raw = n, n;
		};
		e.raw = a, Object.defineProperty(t, "shape", { get: e });
	}
	const i = Ro(() => Ou(t));
	vc(e, "propValues", (e) => {
		const t = e.def.shape, n = {};
		for (const a in t) {
			const e = t[a]._zod;
			if (e.values) {
				Object.prototype.hasOwnProperty.call(n, a) || zo(n, a, /* @__PURE__ */ new Set());
				for (const t of e.values) n[a].add(t);
				void 0 !== e.optin && n[a].add(void 0);
			}
		}
		return n;
	});
	const r = Go, s = t.catchall;
	let o;
	const c = Nc.memoizer;
	c?.attach(e), e._zod.parse = (t, n) => {
		o ?? (o = i.value);
		const a = t.value;
		if (!r(a)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: a,
			inst: e
		}), t;
		t.value = c ? c.alloc(e, t, {}, n) : {};
		const l = [], u = o.shape, d = n?.abortEarly;
		let p = t.issues.length;
		for (const e of o.allKeys) {
			if (d && t.issues.length !== p) {
				if (nc(t, p)) break;
				p = t.issues.length;
			}
			if ("__proto__" === e) continue;
			const i = u[e], r = i._zod.optin, s = i._zod.optout, o = i._zod.run({
				value: a[e],
				issues: []
			}, n);
			o instanceof Promise ? l.push(o.then((n) => Du(n, t, e, a, r, s))) : Du(o, t, e, a, r, s);
		}
		return s ? Pu(l, a, t, n, i.value, e, !0 === d) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), ju = Ac("$ZodObjectJIT", (e, t) => {
	Fu.init(e, t);
	const n = e._zod.parse, a = Ro(() => Ou(t)), i = Nc.memoizer;
	let r;
	const s = Go, o = !Nc.jitless, c = o && Uo.value, l = t.catchall;
	let u;
	e._zod.parse = (d, p) => {
		u ?? (u = a.value);
		const f = d.value;
		return s(f) ? o && c && !1 === p?.async && !0 !== p.jitless ? (r || (r = ((t) => {
			const n = a.value, r = n.symbolKeys, s = new Gl(["payload", "ctx"], {
				shape: t,
				inst: e,
				memo: i,
				syms: r
			}), o = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, c = (e, t) => `\n          let ${e}_ab = false;\n          for (let i = 0; i < ${e}.issues.length; i++) {\n            const iss = ${e}.issues[i];\n            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];\n            payload.issues.push(iss);\n            if (iss.continue !== true) ${e}_ab = true;\n          }\n          if (${e}_ab && ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }`;
			s.write("const input = payload.value;");
			const l = Object.create(null);
			let u = 0;
			for (const e of n.allKeys) l[e] = "key_" + u++;
			s.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
			for (const e of n.allKeys) {
				if ("__proto__" === e) continue;
				const n = l[e], a = "symbol" == typeof e ? `syms[${r.indexOf(e)}]` : Bo(e), i = `${a} in input`, u = t[e], d = u?._zod?.optin, p = void 0 !== d, f = "optional" === u?._zod?.optout;
				if (s.write(`const ${n} = ${o(a)};`), p && f) {
					const e = "optional" === d ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
					s.write(`\n        const ${n}_present = ${i};\n        if (!${n}.issues.length || ${n}_present) {\n          if (${n}.issues.length) {${c(n, a)}\n          }\n\n          if (${e}) {\n            newResult[${a}] = ${n}.value;\n          }\n        }\n\n      `);
				} else p ? (s.write(`\n        if (${n}.issues.length) {${c(n, a)}\n        }\n      `), "defaulted" === d ? s.write(`newResult[${a}] = ${n}.value;`) : s.write(`\n        if (${n}.value !== undefined || ${i}) {\n          newResult[${a}] = ${n}.value;\n        }\n      `)) : s.write(`\n        const ${n}_present = ${i};\n        if (${n}.issues.length) {${c(n, a)}\n        }\n        if (!${n}_present && !${n}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${a}]\n          });\n          if (ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }\n        }\n\n        if (${n}_present) {\n          newResult[${a}] = ${n}.value;\n        }\n\n      `);
			}
			return s.write("payload.value = newResult;"), s.write("return payload;"), s.compile();
		})(t.shape)), d = r(d, p), l ? Pu([], f, d, p, u, e, !0 === p?.abortEarly) : d) : n(d, p) : (d.issues.push({
			expected: "object",
			code: "invalid_type",
			input: f,
			inst: e
		}), d);
	};
});
function Bu(e, t, n, a) {
	for (const r of e) if (0 === r.issues.length) return t.value = r.value, t;
	const i = e.filter((e) => !nc(e));
	return 1 === i.length ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => cc(e, a, Mc())))
	}), t);
}
const Lu = Ac("$ZodUnion", (e, t) => {
	Zl.init(e, t), vc(e, "optin", (e) => e.def.options.some((e) => "defaulted" === e._zod.optin) ? "defaulted" : e.def.options.some((e) => void 0 !== e._zod.optin) ? "optional" : void 0), vc(e, "optout", (e) => e.def.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0), vc(e, "values", (e) => {
		if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
	}), vc(e, "pattern", (e) => {
		if (e.def.options.every((e) => e._zod.pattern)) {
			const t = e.def.options.map((e) => e._zod.pattern);
			return new RegExp(`^(${t.map((e) => Eo(e.source)).join("|")})$`);
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
		return r ? Promise.all(s).then((t) => Bu(t, a, e, i)) : Bu(s, a, e, i);
	};
}), Gu = Ac("$ZodIntersection", (e, t) => {
	Zl.init(e, t), e._zod.parse = (e, n) => {
		const a = e.value, i = t.left._zod.run({
			value: a,
			issues: []
		}, n), r = t.right._zod.run({
			value: a,
			issues: []
		}, n);
		return i instanceof Promise || r instanceof Promise ? Promise.all([i, r]).then(([t, n]) => Zu(e, t, n)) : Zu(e, i, r);
	};
});
function Uu(e, t) {
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (e instanceof Date && t instanceof Date && +e === +t) return {
		valid: !0,
		data: e
	};
	if (Zo(e) && Zo(t)) {
		const n = Object.keys(t), a = Object.keys(e).filter((e) => -1 !== n.indexOf(e)), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (const r of a) {
			if ("__proto__" === r) continue;
			const n = Uu(e[r], t[r]);
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
			const i = Uu(e[a], t[a]);
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
function Zu(e, t, n) {
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
	for (const l of t.issues) s(l, "l") || e.issues.push(l);
	for (const l of n.issues) s(l, "r") || e.issues.push(l);
	const o = [...a].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (o.length) {
		const t = i ? o.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (const n of o) !t.includes(n) && r.has(n) && e.issues.push(r.get(n));
	}
	const c = Uu(t.value, n.value);
	if (!c.valid) {
		if (nc(e)) return e;
		throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
const Hu = Ac("$ZodRecord", (e, t) => {
	Zl.init(e, t);
	const n = Nc.memoizer;
	n?.attach(e), e._zod.parse = (a, i) => {
		const r = a.value;
		if (!Zo(r)) return a.issues.push({
			expected: "record",
			code: "invalid_type",
			input: r,
			inst: e
		}), a;
		const s = [], o = t.keyType._zod.values;
		if (o && !t.partial) {
			a.value = n ? n.alloc(e, a, {}, i) : {};
			const c = /* @__PURE__ */ new Set();
			for (const n of o) if ("string" == typeof n || "number" == typeof n || "symbol" == typeof n) {
				if (c.add("number" == typeof n ? n.toString() : n), "__proto__" === n) continue;
				const o = t.keyType._zod.run({
					value: n,
					issues: []
				}, i);
				if (o instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (o.issues.length) {
					a.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: o.issues.map((e) => cc(e, i, Mc())),
						input: n,
						path: [n],
						inst: e
					});
					continue;
				}
				const l = o.value;
				if ("__proto__" === l) continue;
				const u = t.valueType._zod.run({
					value: r[n],
					issues: []
				}, i);
				u instanceof Promise ? s.push(u.then((e) => {
					e.issues.length && a.issues.push(...ic(n, e.issues)), a.value[l] = e.value;
				})) : (u.issues.length && a.issues.push(...ic(n, u.issues)), a.value[l] = u.value);
			}
			let l;
			for (const e in r) if (!c.has(e)) if ("loose" === t.mode) {
				if ("__proto__" === e) continue;
				a.value[e] = r[e];
			} else l = l ?? [], l.push(e);
			l && l.length > 0 && a.issues.push({
				code: "unrecognized_keys",
				input: r,
				inst: e,
				keys: l,
				continue: !0
			});
		} else {
			let c;
			a.value = n ? n.alloc(e, a, {}, i) : {};
			for (const n of Reflect.ownKeys(r)) {
				if ("__proto__" === n) continue;
				if (!Object.prototype.propertyIsEnumerable.call(r, n)) continue;
				let l = t.keyType._zod.run({
					value: n,
					issues: []
				}, i);
				if (l instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if ("string" == typeof n && vl.test(n) && l.issues.length) {
					const e = t.keyType._zod.run({
						value: Number(n),
						issues: []
					}, i);
					if (e instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
					0 === e.issues.length && (l = e);
				}
				if (l.issues.length) {
					"loose" === t.mode ? a.value[n] = r[n] : o ? (c = c ?? [], c.push(n)) : a.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: l.issues.map((e) => cc(e, i, Mc())),
						input: n,
						path: [n],
						inst: e
					});
					continue;
				}
				const u = l.value;
				if ("__proto__" === u) continue;
				const d = t.valueType._zod.run({
					value: r[n],
					issues: []
				}, i);
				d instanceof Promise ? s.push(d.then((e) => {
					e.issues.length && a.issues.push(...ic(n, e.issues)), a.value[u] = e.value;
				})) : (d.issues.length && a.issues.push(...ic(n, d.issues)), a.value[u] = d.value);
			}
			c && c.length > 0 && a.issues.push({
				code: "unrecognized_keys",
				input: r,
				inst: e,
				keys: c,
				continue: !0
			});
		}
		return s.length ? Promise.all(s).then(() => a) : a;
	};
}), qu = Ac("$ZodEnum", (e, t) => {
	Zl.init(e, t);
	const n = To(t.entries), a = new Set(n);
	e._zod.values = a, vc(e, "pattern", (e) => {
		const t = To(e.def.entries).filter((e) => qo.has(typeof e));
		return new RegExp(t.length ? `^(${t.map((e) => Vo(e.toString())).join("|")})$` : "^[^\\s\\S]$");
	}), e._zod.parse = (t, i) => {
		const r = t.value;
		return a.has(r) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: r,
			inst: e
		}), t;
	};
}), Vu = Ac("$ZodTransform", (e, t) => {
	Zl.init(e, t), e._zod.optin = "optional", Nc.memoizer?.guard(e), e._zod.parse = (n, a) => {
		if ("backward" === a.direction) throw new Tc(e.constructor.name);
		const i = t.transform(n.value, n);
		if (a.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new xc();
		return n.value = i, n;
	};
});
function Wu(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
const Ju = Ac("$ZodOptional", (e, t) => {
	Zl.init(e, t), vc(e, "optin", (e) => "defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional"), e._zod.optout = "optional", vc(e, "values", (e) => {
		const t = e.def.innerType._zod.values;
		return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
	}), vc(e, "pattern", (e) => {
		const t = e.def.innerType._zod.pattern;
		return t ? new RegExp(`^(${Eo(t.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (void 0 === e.value) {
			if ("defaulted" !== t.innerType._zod.optin) return e;
			const a = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return a instanceof Promise ? a.then((t) => Wu(e, t)) : Wu(e, a);
		}
		return t.innerType._zod.run(e, n);
	};
}), Ku = Ac("$ZodExactOptional", (e, t) => {
	Ju.init(e, t), vc(e, "values", (e) => e.def.innerType._zod.values), vc(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), Yu = Ac("$ZodNullable", (e, t) => {
	Zl.init(e, t), vc(e, "optin", (e) => e.def.innerType._zod.optin), vc(e, "optout", (e) => e.def.innerType._zod.optout), vc(e, "pattern", (e) => {
		const t = e.def.innerType._zod.pattern;
		return t ? new RegExp(`^(${Eo(t.source)}|null)$`) : void 0;
	}), vc(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => null === e.value ? e : t.innerType._zod.run(e, n);
}), Xu = Ac("$ZodDefault", (e, t) => {
	Zl.init(e, t), e._zod.optin = "defaulted", vc(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		if (void 0 === e.value) return e.value = t.defaultValue, e;
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then((e) => Qu(e, t)) : Qu(a, t);
	};
});
function Qu(e, t) {
	return void 0 === e.value && (e.value = t.defaultValue), e;
}
const ed = Ac("$ZodPrefault", (e, t) => {
	Zl.init(e, t), e._zod.optin = "defaulted", vc(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => ("backward" === n.direction || void 0 === e.value && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), td = Ac("$ZodNonOptional", (e, t) => {
	Zl.init(e, t), vc(e, "values", (e) => {
		const t = e.def.innerType._zod.values;
		return t ? new Set([...t].filter((e) => void 0 !== e)) : void 0;
	}), e._zod.parse = (n, a) => {
		const i = t.innerType._zod.run(n, a);
		return i instanceof Promise ? i.then((t) => nd(t, e)) : nd(i, e);
	};
});
function nd(e, t) {
	return e.issues.length || void 0 !== e.value || e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function ad(e, t, n, a) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => cc(e, a, Mc())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
const id = Ac("$ZodCatch", (e, t) => {
	Zl.init(e, t), vc(e, "optin", (e) => "defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional"), vc(e, "optout", (e) => e.def.innerType._zod.optout), vc(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const a = t.innerType._zod.run({
			value: e.value,
			issues: []
		}, n);
		return a instanceof Promise ? a.then((a) => ad(e, a, t, n)) : ad(e, a, t, n);
	};
}), rd = Ac("$ZodPipe", (e, t) => {
	Zl.init(e, t), vc(e, "values", (e) => e.def.in._zod.values), vc(e, "optin", (e) => e.def.in._zod.optin), vc(e, "optout", (e) => e.def.out._zod.optout), vc(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) {
			const a = t.out._zod.run(e, n);
			return a instanceof Promise ? a.then((e) => sd(e, t.in, n)) : sd(a, t.in, n);
		}
		const a = t.in._zod.run(e, n);
		return a instanceof Promise ? a.then((e) => sd(e, t.out, n)) : sd(a, t.out, n);
	};
});
function sd(e, t, n) {
	return e.issues.some((e) => "unrecognized_keys" !== e.code) ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
const od = Ac("$ZodReadonly", (e, t) => {
	Zl.init(e, t), vc(e, "propValues", (e) => e.def.innerType._zod.propValues), vc(e, "values", (e) => e.def.innerType._zod.values), vc(e, "optin", (e) => e.def.innerType?._zod?.optin), vc(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if ("backward" === n.direction) return t.innerType._zod.run(e, n);
		const a = t.innerType._zod.run(e, n);
		return a instanceof Promise ? a.then(cd) : cd(a);
	};
});
function cd(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
const ld = Ac("$ZodCustom", (e, t) => {
	Il.init(e, t), Zl.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		const a = n.value, i = t.fn(a);
		if (i instanceof Promise) return i.then((t) => ud(t, n, a, e));
		ud(i, n, a, e);
	};
});
function ud(e, t, n, a) {
	if (!e) {
		const e = {
			code: "custom",
			input: n,
			inst: a,
			path: [...a._zod.def.path ?? []],
			continue: !a._zod.def.abort
		};
		a._zod.def.params && (e.params = a._zod.def.params), t.issues.push(pc(e));
	}
}
var dd = class extends Error {
	constructor() {
		super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
	}
};
const pd = "~memo", fd = [];
function md(e) {
	return null !== e && "object" == typeof e;
}
function hd(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
const gd = /* @__PURE__ */ new WeakMap();
function yd(e, t, n) {
	const a = gd.get(e);
	if (void 0 !== a) return a ? 2 : 0;
	if (t.has(e)) return 2;
	t.add(e);
	let i = 0;
	const r = (e) => {
		if (2 !== i && e?._zod) {
			const a = yd(e, t, n);
			a > i && (i = a);
		}
	}, s = (e) => {
		e > i && (i = e);
	}, o = e._zod.def;
	switch (o.type) {
		case "object": {
			const e = Do(o);
			s(e ? ((e) => {
				let a = 0;
				for (const i of Reflect.ownKeys(e)) {
					const r = Object.getOwnPropertyDescriptor(e, i);
					if (!r.enumerable) continue;
					const s = r.get ? 1 : r.value?._zod ? yd(r.value, t, n) : 0;
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
			s(a ? yd(a, t, !1) : 1);
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
		return 1 !== t && gd.set(e, 2 === t), t;
	}(e, i);
}
let wd;
const _d = [], vd = {
	alloc(e, t, n) {
		const a = wd;
		if (!a) return n;
		wd = void 0;
		const i = {
			value: n,
			issues: null
		};
		return a.set(t.value, i), _d.push(i), n;
	},
	guard(e) {
		var t;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			const t = e._zod.parse, n = (e, n) => {
				if ("backward" !== n.direction && function(e, t) {
					const n = e[pd]?.backEdges;
					return void 0 !== n && md(t) && n.has(t);
				}(n, e.value)) throw new dd();
				return t(e, n);
			};
			e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
		});
	},
	attach(e) {
		var t;
		let n, a, i, r = !1;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			const t = e._zod.parse, s = (o, c) => {
				if (void 0 === n) {
					const a = yd(e, /* @__PURE__ */ new Set(), !1);
					if (0 === a) return e._zod.parse = t, e._zod.run === s && (e._zod.run = t), t(o, c);
					2 === a || r ? n = !0 : r = !0;
				}
				const l = o.value;
				if (!md(l)) return t(o, c);
				let u, d = c[pd];
				d || (d = {
					buckets: /* @__PURE__ */ new WeakMap(),
					backEdges: void 0
				}, c[pd] = d), a === c ? u = i : (u = function(e, t) {
					let n = e.buckets.get(t);
					return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
				}(d, e), a = c, i = u);
				const p = u.get(l);
				if (p) return o.value = p.value, p.issues ? p.issues.length && o.issues.push(...hd(p.issues)) : (o.memo = !0, d.backEdges ?? (d.backEdges = /* @__PURE__ */ new WeakSet()), d.backEdges.add(p.value)), o;
				wd = u;
				const f = _d.length, m = t(o, c);
				wd = void 0;
				const h = _d.length > f ? _d.pop() : void 0;
				return m instanceof Promise ? m.then((e) => (h && (h.issues = e.issues.length ? hd(e.issues) : fd), e)) : (h && (h.issues = m.issues.length ? hd(m.issues) : fd), m);
			};
			e._zod.parse = s, e._zod.run === t && (e._zod.run = s);
		});
	}
}, bd = () => {
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
			case "invalid_value": return 1 === e.values.length ? `Invalid input: expected ${Ko(e.values[0])}` : `Invalid option: expected one of ${No(e.values, "|")}`;
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
			case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${No(e.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${e.origin}`;
			case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : !1 === e.inclusive ? "Invalid input: more than one option matched" : "Invalid input";
			case "invalid_element": return `Invalid value in ${e.origin}`;
			default: return "Invalid input";
		}
	};
};
var Sd;
(Sd = globalThis).__zod_globalRegistry ?? (Sd.__zod_globalRegistry = new class {
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
const kd = globalThis.__zod_globalRegistry;
function Id(e) {
	return e.checks && (e.checks = [...e.checks]), e;
}
function Ad(e, t) {
	return new Tl({
		check: "less_than",
		...Jo(t),
		value: e,
		inclusive: !1
	});
}
function xd(e, t) {
	return new Tl({
		check: "less_than",
		...Jo(t),
		value: e,
		inclusive: !0
	});
}
function Td(e, t) {
	return new Nl({
		check: "greater_than",
		...Jo(t),
		value: e,
		inclusive: !1
	});
}
function Nd(e, t) {
	return new Nl({
		check: "greater_than",
		...Jo(t),
		value: e,
		inclusive: !0
	});
}
function Md(e, t) {
	return new Ml({
		check: "multiple_of",
		...Jo(t),
		value: e
	});
}
function $d(e, t) {
	return new Rl({
		check: "max_length",
		...Jo(t),
		maximum: e
	});
}
function Rd(e, t) {
	return new El({
		check: "min_length",
		...Jo(t),
		minimum: e
	});
}
function Ed(e, t) {
	return new zl({
		check: "length_equals",
		...Jo(t),
		length: e
	});
}
function zd(e) {
	return new Ll({
		check: "overwrite",
		tx: e
	});
}
function Dd(e, t) {
	const n = new Il({
		check: "custom",
		...Jo(t)
	});
	return n._zod.check = e, n;
}
function Cd(e, ...t) {
	for (const n of t) for (const t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && zo(e, t, n[t]);
	return e;
}
function Od(e) {
	let t = e?.target ?? "draft-2020-12";
	return "draft-4" === t && (t = "draft-04"), "draft-7" === t && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? kd,
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
function Pd(e, t, n, a, i) {
	const r = "function" == typeof t.unrepresentable ? t.unrepresentable({
		zodSchema: e,
		path: a.path,
		message: i
	}) : t.unrepresentable;
	if ("any" === r) return !1;
	if (void 0 === r || "throw" === r) throw new Error(i);
	return Object.assign(n, r), !0;
}
function Fd(e, t, n = {
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
		r && (s.ref || (s.ref = r), Fd(r, t, a), t.seen.get(r).isParent = !0);
	}
	const c = t.metadataRegistry.get(e);
	return c && Cd(s.schema, c), "input" === t.io && Wd(e) && (delete s.schema.examples, delete s.schema.default), "input" === t.io && "_prefault" in s.schema && ((a = s.schema).default ?? (a.default = s.schema._prefault)), delete s.schema._prefault, t.seen.get(e).schema;
}
function jd(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Bd(e, t) {
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
					ref: `${i("__shared")}#/${a}/${jd(r)}`
				};
			}
			const i = `#/${a}/`;
			if (t[1] === n && !t[1].schema.id) return { ref: "#" };
			const r = t[1].schema.id ?? "__schema" + e.counter++;
			return {
				defId: r,
				ref: i + jd(r)
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
function Ld(e) {
	const t = e.anyOf;
	if (!Array.isArray(t) || 0 === t.length || void 0 !== e.type) return;
	const n = [];
	for (const a of t) {
		if (!a || "object" != typeof a) return;
		Ld(a);
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
const Gd = /* @__PURE__ */ new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]), Ud = ["oneOf", "anyOf"];
function Zd(e) {
	const t = e.additionalProperties;
	return void 0 === t || !1 === t || "object" != typeof t || null === t ? null : Object.keys(t).length ? t : null;
}
function Hd(e) {
	const t = [];
	for (const r of e) {
		if ("object" != typeof r || "object" !== r.type) return null;
		for (const e in r) if (!Gd.has(e)) return null;
		t.push(r);
	}
	const n = {}, a = /* @__PURE__ */ new Set();
	for (const r of t) {
		for (const e in r.properties) {
			if (Object.prototype.hasOwnProperty.call(n, e)) continue;
			const a = [];
			for (const n of t) {
				const t = n.properties?.[e] ?? Zd(n);
				null != t && (a.some((e) => JSON.stringify(e) === JSON.stringify(t)) || a.push(t));
			}
			zo(n, e, 1 === a.length ? a[0] : Hd(a) ?? { allOf: a });
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
			const t = Zd(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		1 === e.length ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function qd(e) {
	const t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (const i of Gd) if (i in e) return;
	const n = t.filter((e) => Ud.some((t) => Array.isArray(e[t])));
	let a = null;
	if (n.length) {
		const e = n[0], i = Ud.find((t) => Array.isArray(e[t]));
		if (1 !== Object.keys(e).length) return;
		const r = t.filter((t) => t !== e), s = e[i].map((e) => Hd([...r, e]));
		if (s.some((e) => !e)) return;
		a = { [i]: s };
	} else a = Hd(t);
	a && (delete e.allOf, Cd(e, a));
}
function Vd(e, t) {
	const n = e.seen.get(t);
	if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const a = (t) => {
		const n = e.seen.get(t);
		if (null === n.ref) return;
		const i = n.def ?? n.schema, r = { ...i }, s = n.ref;
		if (n.ref = null, s) {
			a(s);
			const n = e.seen.get(s), o = n.schema;
			if (!o.$ref || "draft-07" !== e.target && "draft-04" !== e.target && "openapi-3.0" !== e.target ? Cd(i, o) : (i.allOf = i.allOf ?? [], i.allOf.push(o)), Cd(i, r), t._zod.parent === s) for (const e in i) "$ref" !== e && "allOf" !== e && (e in r || delete i[e]);
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
		if ("openapi-3.0" !== e.target) for (const t of e.seen.entries()) Ld(t[1].def ?? t[1].schema);
		for (const t of e.deferred) t();
		if (e.intersections.length) {
			const t = /* @__PURE__ */ new Map();
			for (const n of e.seen.values()) for (const e of [n.schema, n.def]) {
				const n = e?.allOf;
				if (!Array.isArray(n)) continue;
				const a = t.get(n);
				a ? a.push(e) : t.set(n, [e]);
			}
			for (const n of e.intersections) for (const e of t.get(n) ?? []) qd(e);
		}
	}
	const i = {};
	if ("draft-2020-12" === e.target ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === e.target ? i.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === e.target ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		const n = e.external.registry.get(t)?.id;
		if (!n) throw new Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Cd(i, n.defId ? n.schema : n.def ?? n.schema);
	const r = e.metadataRegistry.get(t)?.id;
	void 0 !== r && i.id === r && delete i.id;
	const s = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (const c of e.seen.entries()) {
		const e = c[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, zo(s, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(s).length > 0 && ("draft-2020-12" === e.target ? i.$defs = s : i.definitions = s);
	try {
		const n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Jd(t, "input", e.processors),
					output: Jd(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch (o) {
		throw new Error("Error converting schema to JSON.");
	}
}
function Wd(e, t) {
	const n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	const a = e._zod.def;
	if ("transform" === a.type) return !0;
	if ("array" === a.type) return Wd(a.element, n);
	if ("set" === a.type) return Wd(a.valueType, n);
	if ("lazy" === a.type) return Wd(a.getter(), n);
	if ("promise" === a.type || "optional" === a.type || "nonoptional" === a.type || "nullable" === a.type || "readonly" === a.type || "default" === a.type || "prefault" === a.type || "catch" === a.type) return Wd(a.innerType, n);
	if ("intersection" === a.type) return Wd(a.left, n) || Wd(a.right, n);
	if ("record" === a.type || "map" === a.type) return Wd(a.keyType, n) || Wd(a.valueType, n);
	if ("pipe" === a.type) return !!e._zod.traits.has("$ZodCodec") || Wd(a.in, n) || Wd(a.out, n);
	if ("object" === a.type) {
		for (const e in a.shape) if (Wd(a.shape[e], n)) return !0;
		return !1;
	}
	if ("union" === a.type) {
		for (const e of a.options) if (Wd(e, n)) return !0;
		return !1;
	}
	if ("tuple" === a.type) {
		for (const e of a.items) if (Wd(e, n)) return !0;
		return !(!a.rest || !Wd(a.rest, n));
	}
	return !1;
}
const Jd = (e, t, n = {}) => (a) => {
	const { libraryOptions: i, target: r } = a ?? {}, s = Od({
		...i ?? {},
		target: r,
		io: t,
		processors: n
	});
	return Fd(e, s), Bd(s, e), Vd(s, e);
}, Kd = (e, t, n) => {
	(void 0 === e[t] || n > e[t]) && (e[t] = n);
}, Yd = (e, t, n) => {
	(void 0 === e[t] || n < e[t]) && (e[t] = n);
}, Xd = (e, t) => {
	Kd(e, "minimum", t), Yd(e, "maximum", t);
}, Qd = (e, t) => {
	e.multipleOf ?? (e.multipleOf = []), e.multipleOf.includes(t) || e.multipleOf.push(t);
}, ep = (e, t) => {
	e.patterns ?? (e.patterns = /* @__PURE__ */ new Set()), e.patterns.add(t);
}, tp = (e, t) => {
	e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
}, np = (e, t) => {
	e.format = t, t.includes("int") && (e.isInt = !0);
}, ap = (e, t) => Kd(e, "minimum", t.minimum), ip = (e, t) => Yd(e, "maximum", t.maximum), rp = (e) => (t, n) => {
	np(t, n.format);
	const [a, i] = e[n.format];
	Kd(t, "minimum", a), Yd(t, "maximum", i);
}, sp = {
	greater_than: (e, t) => Kd(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
	less_than: (e, t) => Yd(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
	multiple_of: (e, t) => Qd(e, t.value),
	number_format: rp(Yo),
	bigint_format: rp(Xo),
	min_length: ap,
	max_length: ip,
	length_equals: (e, t) => Xd(e, t.length),
	min_size: ap,
	max_size: ip,
	size_equals: (e, t) => Xd(e, t.size),
	string_format: (e, t) => {
		np(e, t.format), t.pattern && ep(e, t.pattern), "base64" !== t.format && "base64url" !== t.format || (e.contentEncoding = t.format), (t.local || -1 === t.precision) && (e.laxFormat = !0);
	},
	mime_type: (e, t) => tp(e, t.mime)
};
function op(e) {
	const t = {}, n = e._zod.def, a = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
	for (const r of a) sp[r._zod.def.check]?.(t, r._zod.def);
	const i = e._zod.bag;
	void 0 !== i.minimum && Kd(t, "minimum", i.minimum), void 0 !== i.exclusiveMinimum && Kd(t, "exclusiveMinimum", i.exclusiveMinimum), void 0 !== i.maximum && Yd(t, "maximum", i.maximum), void 0 !== i.exclusiveMaximum && Yd(t, "exclusiveMaximum", i.exclusiveMaximum), void 0 !== i.multipleOf && Qd(t, i.multipleOf), void 0 !== i.format && (t.format ?? (t.format = i.format), i.format.includes("int") && (t.isInt = !0)), i.mime && tp(t, i.mime);
	for (const r of i.patterns ?? []) ep(t, r);
	return t;
}
const cp = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, lp = /* @__PURE__ */ new Map([[vu, /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/], [Su, /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/]]), up = (e) => lp.get(e) ?? e;
function dp(e) {
	const t = e._zod.def;
	return "pipe" === t.type && t.in._zod.traits.has("$ZodTransform") ? dp(t.out) : "catch" === t.type ? dp(t.innerType) : e._zod.optin;
}
function pp(e, t, n) {
	if (t.$ref) {
		if (n.has(t)) return t;
		n.add(t);
		const a = e.get(t)?.def;
		if (!a) return t;
		const i = pp(e, a, n);
		return i === a ? t : i;
	}
	for (const m of ["anyOf", "oneOf"]) {
		const a = t[m];
		if (!Array.isArray(a)) continue;
		const i = a.map((t) => pp(e, t, n));
		i.some((e, t) => e !== a[t]) && (t = {
			...t,
			[m]: i
		});
	}
	const a = Array.isArray(t.type) ? t.type : [t.type], i = !a.includes("string") && a.some((e) => "number" === e || "integer" === e), r = t.enum ?? (void 0 !== t.const ? [t.const] : void 0);
	if (!i && !r?.some((e) => "number" == typeof e)) return t;
	const { minimum: s, maximum: o, exclusiveMinimum: c, exclusiveMaximum: l, multipleOf: u, format: d, id: p, ...f } = t;
	return f.enum ? f.enum = f.enum.map((e) => "number" == typeof e ? String(e) : e) : "number" == typeof f.const && (f.const = String(f.const)), i ? (f.type = "string", r || (f.pattern = (a.includes("number") ? vl : _l).source), f) : f;
}
const fp = /* @__PURE__ */ new WeakMap(), mp = Symbol();
function hp(e, t, n, a, i) {
	let r = !1;
	const s = JSON.stringify(e, (e, t) => "bigint" != typeof t ? t : (r = !0, null));
	return r ? (Pd(t, n, a, i, "BigInt defaults cannot be represented in JSON Schema"), mp) : JSON.parse(s);
}
const gp = (e, t, n, a) => {
	const i = e._zod.def;
	Fd(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
}, yp = new WeakSet([Object.prototype, Error.prototype]);
function wp(e, t, n) {
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
const _p = (e, t) => {
	Dc.init(e, t), e.name = "ZodError";
	const n = Object.getPrototypeOf(e);
	yp.has(n) || (yp.add(n), wp(n, "format", (e) => (t) => function(e, t = (e) => e.message) {
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
	}(e, t)), wp(n, "flatten", (e) => (t) => function(e, t = (e) => e.message) {
		const n = {}, a = [];
		for (const i of e.issues) i.path.length > 0 ? Cc(n, i.path[0], () => []).push(t(i)) : a.push(t(i));
		return {
			formErrors: a,
			fieldErrors: n
		};
	}(e, t)), wp(n, "addIssue", (e) => (t) => {
		e.issues.push(t), e.message = JSON.stringify(e.issues, Mo, 2);
	}), wp(n, "addIssues", (e) => (t) => {
		e.issues.push(...t), e.message = JSON.stringify(e.issues, Mo, 2);
	}), Object.defineProperty(n, "isEmpty", {
		configurable: !0,
		enumerable: !1,
		get() {
			return 0 === this.issues.length;
		}
	}));
}, vp = Ac("ZodError", _p, void 0, { Parent: Error }), bp = Pc(vp), Sp = Fc(vp), kp = jc(vp), Ip = Lc(vp), Ap = Zc(vp), xp = Hc(vp), Tp = qc(vp), Np = Vc(vp), Mp = Wc(vp), $p = Jc(vp), Rp = Kc(vp), Ep = Yc(vp);
function zp() {
	Nc.memoizer || Mc({ memoizer: vd });
}
const Dp = Ac("ZodType", (e, t) => (Nc.localeError || Mc({ localeError: bd() }), Zl.init(e, t), e.def = t, e.type = t.type, e), {
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
				return new Gf({
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
				const n = Dd((t) => (t.addIssue = (e) => {
					if ("string" == typeof e) t.issues.push(pc(e, t.value, n._zod.def));
					else {
						const a = e;
						a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), "input" in a || (a.input = t.value), a.inst ?? (a.inst = n), a.continue ?? (a.continue = !n._zod.def.abort), t.issues.push(pc(a));
					}
				}, e(t.value, t)), t);
				return n;
			}(e, t);
		}(e, t));
	},
	overwrite(e) {
		return this.check(zd(e));
	},
	optional() {
		return Rf(this);
	},
	exactOptional() {
		return new Ef({
			type: "optional",
			innerType: this
		});
	},
	nullable() {
		return Df(this);
	},
	nullish() {
		return Rf(Df(this));
	},
	nonoptional(e) {
		return function(e, t) {
			return new Pf({
				type: "nonoptional",
				innerType: e,
				...Jo(t)
			});
		}(this, e);
	},
	array() {
		return _f(this);
	},
	or(e) {
		return kf([this, e]);
	},
	and(e) {
		return new If({
			type: "intersection",
			left: this,
			right: e
		});
	},
	transform(e) {
		return Bf(this, new Mf({
			type: "transform",
			transform: e
		}));
	},
	default(e) {
		return t = e, new Cf({
			type: "default",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Ho(t);
			}
		});
		var t;
	},
	prefault(e) {
		return t = e, new Of({
			type: "prefault",
			innerType: this,
			get defaultValue() {
				return "function" == typeof t ? t() : Ho(t);
			}
		});
		var t;
	},
	catch(e) {
		return new Ff({
			type: "catch",
			innerType: this,
			catchValue: "function" == typeof (t = e) ? t : bc(t)
		});
		var t;
	},
	pipe(e) {
		return Bf(this, e);
	},
	readonly() {
		return new Lf({
			type: "readonly",
			innerType: this
		});
	},
	describe(e) {
		const t = this.clone();
		return kd.add(t, { description: e }), t;
	},
	meta(...e) {
		if (0 === e.length) return kd.get(this);
		const t = this.clone();
		return kd.add(t, e[0]), t;
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
		return mc(this, "~standard", {
			...ql(this),
			jsonSchema: {
				input: Jd(this, "input"),
				output: Jd(this, "output")
			}
		});
	},
	set "~standard"(e) {
		fc(this, "~standard", e);
	},
	parse: function e(t, n) {
		return bp(this, t, n, { callee: e });
	},
	parseAsync: async function e(t, n) {
		return await Sp(this, t, n, { callee: e });
	},
	safeParse(e, t) {
		return kp(this, e, t);
	},
	async safeParseAsync(e, t) {
		return Ip(this, e, t);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(e) {
		fc(this, "spa", e);
	},
	validate(e, t) {
		return ((e, t, n) => {
			const a = e._zod.bag.validator;
			if (void 0 !== a) {
				if (a(t) !== Gc) return !0;
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
				if (i ? (a[Uc] = !0, r = i({
					value: t,
					issues: []
				}, a)) : r = e._zod.run({
					value: t,
					issues: []
				}, a), r instanceof Promise) throw new xc();
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
		return Ap(this, t, n, { callee: e });
	},
	decode: function e(t, n) {
		return xp(this, t, n, { callee: e });
	},
	encodeAsync: async function e(t, n) {
		return await Tp(this, t, n, { callee: e });
	},
	decodeAsync: async function e(t, n) {
		return await Np(this, t, n, { callee: e });
	},
	safeEncode(e, t) {
		return Mp(this, e, t);
	},
	safeDecode(e, t) {
		return $p(this, e, t);
	},
	async safeEncodeAsync(e, t) {
		return Rp(this, e, t);
	},
	async safeDecodeAsync(e, t) {
		return Ep(this, e, t);
	},
	toJSONSchema(e) {
		return ((e, t = {}) => (n) => {
			const a = Od({
				...n,
				processors: t
			});
			return Fd(e, a), Bd(a, e), Vd(a, e);
		})(this, {})(e);
	},
	get description() {
		return kd.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), Cp = Ac("_ZodString", (e, t) => {
	Vl.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = n;
		a.type = "string";
		const { minimum: i, maximum: r, format: s, patterns: o, contentEncoding: c, laxFormat: l } = op(e);
		if ("number" == typeof i && (a.minLength = i), "number" == typeof r && (a.maxLength = r), s && (a.format = cp[s] ?? s, "" === a.format && delete a.format, ("time" === s || l) && delete a.format), c && (a.contentEncoding = c), o && o.size > 0) {
			const e = [...o].map(up);
			1 === e.length ? a.pattern = e[0].source : e.length > 1 && (a.allOf = [...e.map((e) => ({
				..."draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	})(e, t, n);
}, hc({
	format: (e) => op(e).format ?? null,
	minLength: (e) => op(e).minimum ?? null,
	maxLength: (e) => op(e).maximum ?? null
}, {
	regex(...e) {
		return this.check(function(e, t) {
			return new Cl({
				check: "string_format",
				format: "regex",
				...Jo(t),
				pattern: e
			});
		}(...e));
	},
	includes(...e) {
		return this.check(function(e, t) {
			return new Fl({
				check: "string_format",
				format: "includes",
				...Jo(t),
				includes: e
			});
		}(...e));
	},
	startsWith(...e) {
		return this.check(function(e, t) {
			return new jl({
				check: "string_format",
				format: "starts_with",
				...Jo(t),
				prefix: e
			});
		}(...e));
	},
	endsWith(...e) {
		return this.check(function(e, t) {
			return new Bl({
				check: "string_format",
				format: "ends_with",
				...Jo(t),
				suffix: e
			});
		}(...e));
	},
	min(...e) {
		return this.check(Rd(...e));
	},
	max(...e) {
		return this.check($d(...e));
	},
	length(...e) {
		return this.check(Ed(...e));
	},
	nonempty(...e) {
		return this.check(Rd(1, ...e));
	},
	lowercase(e) {
		return this.check(function(e) {
			return new Ol({
				check: "string_format",
				format: "lowercase",
				...Jo(e)
			});
		}(e));
	},
	uppercase(e) {
		return this.check(function(e) {
			return new Pl({
				check: "string_format",
				format: "uppercase",
				...Jo(e)
			});
		}(e));
	},
	trim() {
		return this.check(zd((e) => e.trim()));
	},
	normalize(...e) {
		return this.check(function(e) {
			return zd((t) => t.normalize(e));
		}(...e));
	},
	toLowerCase() {
		return this.check(zd((e) => e.toLowerCase()));
	},
	toUpperCase() {
		return this.check(zd((e) => e.toUpperCase()));
	},
	slugify() {
		return this.check(zd((e) => function(e) {
			return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
		}(e)));
	}
})), Op = Ac("ZodString", (e, t) => {
	Vl.init(e, t), Cp.init(e, t);
}, {
	email(e) {
		return this.check(function(e, t) {
			return new Up({
				type: "string",
				format: "email",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	url(e) {
		return this.check(function(e, t) {
			return new qp({
				type: "string",
				format: "url",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	jwt(e) {
		return this.check(function(e, t) {
			return new cf({
				type: "string",
				format: "jwt",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	emoji(e) {
		return this.check(function(e, t) {
			return new Vp({
				type: "string",
				format: "emoji",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	guid(e) {
		return this.check(function(e, t) {
			return new Zp({
				type: "string",
				format: "guid",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	uuid(e) {
		return this.check(function(e, t) {
			return new Hp({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	uuidv4(e) {
		return this.check(function(e, t) {
			return new Hp({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: !1,
				version: "v4",
				...Jo(t)
			});
		}(0, e));
	},
	uuidv6(e) {
		return this.check(function(e, t) {
			return new Hp({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: !1,
				version: "v6",
				...Jo(t)
			});
		}(0, e));
	},
	uuidv7(e) {
		return this.check(function(e, t) {
			return new Hp({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: !1,
				version: "v7",
				...Jo(t)
			});
		}(0, e));
	},
	nanoid(e) {
		return this.check(function(e, t) {
			return new Wp({
				type: "string",
				format: "nanoid",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	cuid(e) {
		return this.check(function(e, t) {
			return new Jp({
				type: "string",
				format: "cuid",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	cuid2(e) {
		return this.check(function(e, t) {
			return new Kp({
				type: "string",
				format: "cuid2",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	ulid(e) {
		return this.check(function(e, t) {
			return new Yp({
				type: "string",
				format: "ulid",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	base64(e) {
		return this.check(function(e, t) {
			return new rf({
				type: "string",
				format: "base64",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	base64url(e) {
		return this.check(function(e, t) {
			return new sf({
				type: "string",
				format: "base64url",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	xid(e) {
		return this.check(function(e, t) {
			return new Xp({
				type: "string",
				format: "xid",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	ksuid(e) {
		return this.check(function(e, t) {
			return new Qp({
				type: "string",
				format: "ksuid",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	ipv4(e) {
		return this.check(function(e, t) {
			return new ef({
				type: "string",
				format: "ipv4",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	ipv6(e) {
		return this.check(function(e, t) {
			return new tf({
				type: "string",
				format: "ipv6",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	cidrv4(e) {
		return this.check(function(e, t) {
			return new nf({
				type: "string",
				format: "cidrv4",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	cidrv6(e) {
		return this.check(function(e, t) {
			return new af({
				type: "string",
				format: "cidrv6",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	e164(e) {
		return this.check(function(e, t) {
			return new of({
				type: "string",
				format: "e164",
				check: "string_format",
				abort: !1,
				...Jo(t)
			});
		}(0, e));
	},
	datetime(e) {
		return this.check(function(e, t) {
			return new jp({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: !1,
				local: !1,
				precision: null,
				...Jo(t)
			});
		}(0, e));
	},
	date(e) {
		return this.check(function(e, t) {
			return new Bp({
				type: "string",
				format: "date",
				check: "string_format",
				...Jo(t)
			});
		}(0, e));
	},
	time(e) {
		return this.check(function(e, t) {
			return new Lp({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...Jo(t)
			});
		}(0, e));
	},
	duration(e) {
		return this.check(function(e, t) {
			return new Gp({
				type: "string",
				format: "duration",
				check: "string_format",
				...Jo(t)
			});
		}(0, e));
	}
});
function Pp(e) {
	return function(e, t) {
		return new Op(Id({
			type: "string",
			...Jo(t)
		}));
	}(0, e);
}
const Fp = Ac("ZodStringFormat", (e, t) => {
	Wl.init(e, t), Cp.init(e, t);
}), jp = Ac("ZodISODateTime", (e, t) => {
	lu.init(e, t), Fp.init(e, t);
}), Bp = Ac("ZodISODate", (e, t) => {
	uu.init(e, t), Fp.init(e, t);
}), Lp = Ac("ZodISOTime", (e, t) => {
	du.init(e, t), Fp.init(e, t);
}), Gp = Ac("ZodISODuration", (e, t) => {
	pu.init(e, t), Fp.init(e, t);
}), Up = Ac("ZodEmail", (e, t) => {
	Yl.init(e, t), Fp.init(e, t);
}), Zp = Ac("ZodGUID", (e, t) => {
	Jl.init(e, t), Fp.init(e, t);
}), Hp = Ac("ZodUUID", (e, t) => {
	Kl.init(e, t), Fp.init(e, t);
}), qp = Ac("ZodURL", (e, t) => {
	tu.init(e, t), Fp.init(e, t);
}), Vp = Ac("ZodEmoji", (e, t) => {
	nu.init(e, t), Fp.init(e, t);
}), Wp = Ac("ZodNanoID", (e, t) => {
	au.init(e, t), Fp.init(e, t);
}), Jp = Ac("ZodCUID", (e, t) => {
	iu.init(e, t), Fp.init(e, t);
}), Kp = Ac("ZodCUID2", (e, t) => {
	ru.init(e, t), Fp.init(e, t);
}), Yp = Ac("ZodULID", (e, t) => {
	su.init(e, t), Fp.init(e, t);
}), Xp = Ac("ZodXID", (e, t) => {
	ou.init(e, t), Fp.init(e, t);
}), Qp = Ac("ZodKSUID", (e, t) => {
	cu.init(e, t), Fp.init(e, t);
}), ef = Ac("ZodIPv4", (e, t) => {
	fu.init(e, t), Fp.init(e, t);
}), tf = Ac("ZodIPv6", (e, t) => {
	gu.init(e, t), Fp.init(e, t);
}), nf = Ac("ZodCIDRv4", (e, t) => {
	yu.init(e, t), Fp.init(e, t);
}), af = Ac("ZodCIDRv6", (e, t) => {
	wu.init(e, t), Fp.init(e, t);
}), rf = Ac("ZodBase64", (e, t) => {
	bu.init(e, t), Fp.init(e, t);
}), sf = Ac("ZodBase64URL", (e, t) => {
	ku.init(e, t), Fp.init(e, t);
}), of = Ac("ZodE164", (e, t) => {
	Iu.init(e, t), Fp.init(e, t);
}), cf = Ac("ZodJWT", (e, t) => {
	Au.init(e, t), Fp.init(e, t);
}), lf = Ac("ZodNumber", (e, t) => {
	xu.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, { minimum: r, maximum: s, multipleOf: o, exclusiveMaximum: c, exclusiveMinimum: l, isInt: u } = op(e);
		i.type = u ? "integer" : "number";
		const d = "number" == typeof l && l >= (r ?? Number.NEGATIVE_INFINITY), p = "number" == typeof c && c <= (s ?? Number.POSITIVE_INFINITY), f = "draft-04" === t.target || "openapi-3.0" === t.target;
		if (d ? f ? (i.minimum = l, i.exclusiveMinimum = !0) : i.exclusiveMinimum = l : "number" == typeof r && (i.minimum = r), p ? f ? (i.maximum = c, i.exclusiveMaximum = !0) : i.exclusiveMaximum = c : "number" == typeof s && (i.maximum = s), o) {
			const n = /* @__PURE__ */ new Set();
			for (const c of o) Number.isFinite(c) && 0 !== c ? n.add(Math.abs(c)) : Pd(e, t, i, a, `A multipleOf divisor of ${c} cannot be represented in JSON Schema`);
			const [r, ...s] = n;
			void 0 !== r && (i.multipleOf = r), s.length && (i.allOf = [...i.allOf ?? [], ...s.map((e) => ({ multipleOf: e }))]);
		}
	})(e, t, n, a), e.isFinite = !0;
}, hc({
	minValue: (e) => {
		const { minimum: t, exclusiveMinimum: n } = op(e);
		return Math.max(t ?? Number.NEGATIVE_INFINITY, n ?? Number.NEGATIVE_INFINITY);
	},
	maxValue: (e) => {
		const { maximum: t, exclusiveMaximum: n } = op(e);
		return Math.min(t ?? Number.POSITIVE_INFINITY, n ?? Number.POSITIVE_INFINITY);
	},
	isInt: (e) => {
		const { isInt: t, multipleOf: n } = op(e);
		return !!t || !!n?.some(Number.isSafeInteger);
	},
	format: (e) => op(e).format ?? null
}, {
	gt(e, t) {
		return this.check(Td(e, t));
	},
	gte(e, t) {
		return this.check(Nd(e, t));
	},
	min(e, t) {
		return this.check(Nd(e, t));
	},
	lt(e, t) {
		return this.check(Ad(e, t));
	},
	lte(e, t) {
		return this.check(xd(e, t));
	},
	max(e, t) {
		return this.check(xd(e, t));
	},
	int(e) {
		return this.check(pf(e));
	},
	safe(e) {
		return this.check(pf(e));
	},
	positive(e) {
		return this.check(Td(0, e));
	},
	nonnegative(e) {
		return this.check(Nd(0, e));
	},
	negative(e) {
		return this.check(Ad(0, e));
	},
	nonpositive(e) {
		return this.check(xd(0, e));
	},
	multipleOf(e, t) {
		return this.check(Md(e, t));
	},
	step(e, t) {
		return this.check(Md(e, t));
	},
	finite() {
		return this;
	}
}));
function uf(e) {
	return function(e, t) {
		return new lf(Id({
			type: "number",
			checks: [],
			...Jo(t)
		}));
	}(0, e);
}
const df = Ac("ZodNumberFormat", (e, t) => {
	Tu.init(e, t), lf.init(e, t);
});
function pf(e) {
	return function(e, t) {
		return new df({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...Jo(t)
		});
	}(0, e);
}
const ff = Ac("ZodBoolean", (e, t) => {
	Nu.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.type = "boolean";
	})(0, 0, t);
});
function mf(e) {
	return function(e, t) {
		return new ff({
			type: "boolean",
			...Jo(t)
		});
	}(0, e);
}
const hf = Ac("ZodUnknown", (e, t) => {
	Mu.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (e, t, n) => {};
});
function gf() {
	return new hf({ type: "unknown" });
}
const yf = Ac("ZodNever", (e, t) => {
	$u.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (e, t, n) => ((e, t, n) => {
		n.not = {};
	})(0, 0, t);
});
const wf = Ac("ZodArray", (e, t) => {
	zp(), zu.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, r = e._zod.def, { minimum: s, maximum: o } = op(e);
		"number" == typeof s && (i.minItems = s), "number" == typeof o && (i.maxItems = o), i.type = "array", i.items = Fd(r.element, t, {
			...a,
			path: [...a.path, "items"]
		});
	})(e, t, n, a), e.element = t.element;
}, {
	min(e, t) {
		return this.check(Rd(e, t));
	},
	nonempty(e) {
		return this.check(Rd(1, e));
	},
	max(e, t) {
		return this.check($d(e, t));
	},
	length(e, t) {
		return this.check(Ed(e, t));
	},
	unwrap() {
		return this.element;
	}
});
function _f(e, t) {
	return function(e, t, n) {
		return new wf({
			type: "array",
			element: t,
			...Jo(n)
		});
	}(0, e, t);
}
const vf = Ac("ZodObject", (e, t) => {
	zp(), ju.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, r = e._zod.def, s = r.shape;
		if (Object.getOwnPropertySymbols(s).length && Pd(e, t, i, a, "Symbol keys cannot be represented in JSON Schema")) return;
		i.type = "object", i.properties = {};
		for (const c in s) zo(i.properties, c, Fd(s[c], t, {
			...a,
			path: [
				...a.path,
				"properties",
				c
			]
		}));
		const o = [];
		for (const c of Object.keys(s)) {
			const e = r.shape[c];
			("input" === t.io ? void 0 === dp(e) : void 0 === e._zod.optout) && o.push(c);
		}
		o.length > 0 && (i.required = o), "never" === r.catchall?._zod.def.type ? i.additionalProperties = !1 : r.catchall ? r.catchall && (i.additionalProperties = Fd(r.catchall, t, {
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
		return Nf(Object.keys(this._zod.def.shape));
	},
	catchall(e) {
		return this.clone(jo(this._zod.def, { catchall: e }));
	},
	passthrough() {
		return this.clone(jo(this._zod.def, { catchall: gf() }));
	},
	loose() {
		return this.clone(jo(this._zod.def, { catchall: gf() }));
	},
	strict() {
		return this.clone(jo(this._zod.def, { catchall: function(e, t) {
			return new yf({
				type: "never",
				...Jo(t)
			});
		}(0, e) }));
		var e;
	},
	strip() {
		return this.clone(jo(this._zod.def, { catchall: void 0 }));
	},
	extend(e) {
		return function(e, t) {
			if (!Zo(t)) throw new Error("Invalid input to extend: expected a plain object");
			const n = e._zod.def.checks;
			if (n && n.length > 0) {
				const n = Co(e);
				for (const e of Reflect.ownKeys(t)) if (void 0 !== Object.getOwnPropertyDescriptor(n, e)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
			}
			return Wo(e, jo(e._zod.def, { shape: ec(e, t) }));
		}(this, e);
	},
	safeExtend(e) {
		return function(e, t) {
			if (!Zo(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
			return Wo(e, jo(e._zod.def, { shape: ec(e, t) }));
		}(this, e);
	},
	merge(e) {
		return function(e, t) {
			if (!t?._zod?.def) throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
			if (e._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
			const n = {};
			return Fo(n, e, Reflect.ownKeys(Co(e))), Fo(n, t, Reflect.ownKeys(Co(t))), Wo(e, jo(e._zod.def, {
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
			return Fo(i, e, Qo(e, t)), Wo(e, jo(n, {
				shape: i,
				checks: []
			}));
		}(this, e);
	},
	omit(e) {
		return function(e, t) {
			const n = e._zod.def, a = n.checks;
			if (a && a.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
			const i = new Set(Qo(e, t)), r = {};
			return Fo(r, e, Reflect.ownKeys(Co(e)).filter((e) => !i.has(e))), Wo(e, jo(n, {
				shape: r,
				checks: []
			}));
		}(this, e);
	},
	partial(...e) {
		return tc($f, this, e[0]);
	},
	exactPartial(...e) {
		return tc(Ef, this, e[0], "exactPartial");
	},
	required(...e) {
		return function(e, t, n) {
			const a = n ? new Set(Qo(t, n)) : void 0, i = {};
			return Fo(i, t, Reflect.ownKeys(Co(t)), (t, n) => a && !a.has(n) ? t : new e({
				type: "nonoptional",
				innerType: t
			})), Wo(t, jo(t._zod.def, { shape: i }));
		}(Pf, this, e[0]);
	}
});
function bf(e, t) {
	const n = {
		type: "object",
		shape: e ?? {},
		...Jo(t)
	};
	return new vf(n);
}
const Sf = Ac("ZodUnion", (e, t) => {
	Lu.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, r = !1 === i.inclusive, s = i.options.map((e, n) => Fd(e, t, {
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
function kf(e, t) {
	return new Sf({
		type: "union",
		options: e,
		...Jo(t)
	});
}
const If = Ac("ZodIntersection", (e, t) => {
	Gu.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, r = Fd(i.left, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				0
			]
		}), s = Fd(i.right, t, {
			...a,
			path: [
				...a.path,
				"allOf",
				1
			]
		}), o = (e) => "allOf" in e && 1 === Object.keys(e).length, c = [...o(r) ? r.allOf : [r], ...o(s) ? s.allOf : [s]];
		n.allOf = c, t.intersections.push(c);
	})(e, t, n, a);
}), Af = Ac("ZodRecord", (e, t) => {
	zp(), Hu.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = n, r = e._zod.def;
		i.type = "object";
		const s = r.keyType, o = op(s).patterns;
		if ("loose" === r.mode && o && o.size > 0) {
			const e = Fd(r.valueType, t, {
				...a,
				path: [
					...a.path,
					"patternProperties",
					"*"
				]
			});
			i.patternProperties = {};
			for (const t of o) zo(i.patternProperties, up(t).source, e);
		} else {
			if ("draft-07" === t.target || "draft-2020-12" === t.target) {
				i.propertyNames = Fd(r.keyType, t, {
					...a,
					path: [...a.path, "propertyNames"]
				});
				let n = fp.get(t);
				n || (n = [], fp.set(t, n), t.deferred.push(() => function(e) {
					const t = /* @__PURE__ */ new Map();
					for (const a of e.seen.values()) a.def && !t.has(a.schema) && t.set(a.schema, a);
					const n = /* @__PURE__ */ new Map();
					for (const a of fp.get(e) ?? []) {
						const i = e.seen.get(a), r = (i?.def ?? i?.schema)?.propertyNames;
						if (!r || !0 === r || n.has(r)) continue;
						const s = pp(t, r, /* @__PURE__ */ new Set());
						s !== r && n.set(r, s);
					}
					if (n.size) for (const a of e.seen.values()) for (const e of [a.schema, a.def]) {
						const t = e && n.get(e.propertyNames);
						t && (e.propertyNames = t);
					}
				}(t))), n.push(e);
			}
			i.additionalProperties = Fd(r.valueType, t, {
				...a,
				path: [...a.path, "additionalProperties"]
			});
		}
		const c = s._zod.values, l = "input" === t.io && void 0 !== dp(r.valueType);
		if (c && !r.partial && !l) {
			const e = [...c].filter((e) => "string" == typeof e || "number" == typeof e);
			e.length > 0 && (i.required = e.map(String));
		}
	})(e, t, n, a), e.keyType = t.keyType, e.valueType = t.valueType;
});
function xf(e, t, n) {
	return t && t._zod ? new Af({
		type: "record",
		keyType: e,
		valueType: t,
		...Jo(n)
	}) : new Af({
		type: "record",
		keyType: Pp(),
		valueType: e,
		...Jo(t)
	});
}
const Tf = Ac("ZodEnum", (e, t) => {
	qu.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n) => {
		const a = To(e._zod.def.entries);
		0 !== a.length ? (a.every((e) => "number" == typeof e) && (n.type = "number"), a.every((e) => "string" == typeof e) && (n.type = "string"), n.enum = a) : n.not = {};
	})(e, 0, n), e.enum = t.entries, e.options = [...e._zod.values];
	const n = new Set(Object.keys(t.entries));
	e.extract = (e, a) => {
		const i = {};
		for (const r of e) {
			if (!n.has(r)) throw new Error(`Key ${r} not found in enum`);
			i[r] = t.entries[r];
		}
		return new Tf({
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
		return new Tf({
			...t,
			checks: [],
			...Jo(a),
			entries: i
		});
	};
});
function Nf(e, t) {
	const n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new Tf({
		type: "enum",
		entries: n,
		...Jo(t)
	});
}
const Mf = Ac("ZodTransform", (e, t) => {
	zp(), Vu.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		Pd(e, t, n, a, "Transforms cannot be represented in JSON Schema");
	})(e, t, n, a), e._zod.parse = (n, a) => {
		if ("backward" === a.direction) throw new Tc(e.constructor.name);
		n.addIssue = (a) => {
			if ("string" == typeof a) n.issues.push(pc(a, n.value, t));
			else {
				const t = a;
				t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), "input" in t || (t.input = n.value), t.inst ?? (t.inst = e), n.issues.push(pc(t));
			}
		};
		const i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
}), $f = Ac("ZodOptional", (e, t) => {
	Ju.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => gp(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
});
function Rf(e) {
	return new $f({
		type: "optional",
		innerType: e
	});
}
const Ef = Ac("ZodExactOptional", (e, t) => {
	Ku.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => gp(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), zf = Ac("ZodNullable", (e, t) => {
	Yu.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, r = Fd(i.innerType, t, a), s = t.seen.get(e);
		"openapi-3.0" === t.target ? (s.ref = i.innerType, n.nullable = !0) : n.anyOf = [r, { type: "null" }];
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
});
function Df(e) {
	return new zf({
		type: "nullable",
		innerType: e
	});
}
const Cf = Ac("ZodDefault", (e, t) => {
	Xu.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Fd(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
		const r = hp(i.defaultValue, e, t, n, a);
		r !== mp && (n.default = r);
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
}), Of = Ac("ZodPrefault", (e, t) => {
	ed.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		if (Fd(i.innerType, t, a), t.seen.get(e).ref = i.innerType, "input" !== t.io) return;
		const r = hp(i.defaultValue, e, t, n, a);
		r !== mp && (n._prefault = r);
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
}), Pf = Ac("ZodNonOptional", (e, t) => {
	td.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Fd(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
	})(e, t, 0, a), e.unwrap = () => e._zod.def.innerType;
}), Ff = Ac("ZodCatch", (e, t) => {
	id.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		let r;
		Fd(i.innerType, t, a), t.seen.get(e).ref = i.innerType;
		try {
			r = i.catchValue(void 0);
		} catch {
			Pd(e, t, n, a, "Dynamic catch values are not supported in JSON Schema");
			return;
		}
		n.default = r;
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
}), jf = Ac("ZodPipe", (e, t) => {
	rd.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def, r = i.in._zod.traits.has("$ZodTransform"), s = "input" === t.io ? r ? i.out : i.in : i.out;
		Fd(s, t, a), t.seen.get(e).ref = s;
	})(e, t, 0, a), e.in = t.in, e.out = t.out;
});
function Bf(e, t) {
	return new jf({
		type: "pipe",
		in: e,
		out: t
	});
}
const Lf = Ac("ZodReadonly", (e, t) => {
	od.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		const i = e._zod.def;
		Fd(i.innerType, t, a), t.seen.get(e).ref = i.innerType, n.readOnly = !0;
	})(e, t, n, a), e.unwrap = () => e._zod.def.innerType;
}), Gf = Ac("ZodCustom", (e, t) => {
	ld.init(e, t), Dp.init(e, t), e._zod.processJSONSchema = (t, n, a) => ((e, t, n, a) => {
		Pd(e, t, n, a, "Custom types cannot be represented in JSON Schema");
	})(e, t, n, a);
}), Uf = Nf((Zf = c, Object.values(Zf)));
var Zf;
bf({
	password: Pp(),
	username: Pp().max(100, "Username must be 100 characters or fewer")
});
const Hf = bf({
	onset_timestamp: uf().nullable().optional(),
	offset_timestamp: uf().nullable().optional(),
	marker_index: uf().int().default(1),
	marker_type: Uf.default(c.MAIN_SLEEP)
}), qf = bf({
	start_timestamp: uf().nullable().optional(),
	end_timestamp: uf().nullable().optional(),
	marker_index: uf().int().default(1)
}), Vf = (bf({
	sleep_markers: _f(Hf).optional().default([]),
	nonwear_markers: _f(qf).optional().default([]),
	explicit_no_nonwear: mf().optional().default(!1),
	is_invalid_night: mf().optional().default(!1),
	needs_consensus: mf().optional().default(!1),
	notes: Pp().nullable().optional(),
	sleep_period_detection_config: xf(Pp(), gf()).nullable().optional()
}), bf({
	timestamps: _f(uf()).optional().default([]),
	axis_x: _f(uf()).optional().default([]),
	axis_y: _f(uf()).optional().default([]),
	axis_z: _f(uf()).optional().default([]),
	vector_magnitude: _f(uf()).optional().default([]),
	temperature: _f(uf()).optional().default([]),
	lux: _f(uf()).optional().default([]),
	melanopic_lux: _f(uf()).optional().default([]),
	ggir_timestamps: _f(uf()).optional().default([]),
	ggir_enmo: _f(uf()).optional().default([]),
	ggir_anglez: _f(uf()).optional().default([]),
	ggir_sib: _f(uf()).optional().default([]),
	timestamps_30s: _f(uf()).optional().default([]),
	axis_x_30s: _f(uf()).optional().default([]),
	axis_y_30s: _f(uf()).optional().default([]),
	axis_z_30s: _f(uf()).optional().default([]),
	vector_magnitude_30s: _f(uf()).optional().default([])
})), Wf = bf({
	resolution_id: Pp(),
	epoch_length_seconds: uf().int().positive(),
	category: Pp(),
	source_type: Pp().nullable().optional(),
	derived_from_resolution_id: Pp().nullable().optional(),
	aggregation_method: Pp().nullable().optional(),
	data: Vf,
	algorithm_results: _f(uf()).nullable().optional(),
	nonwear_results: _f(uf()).nullable().optional()
}), Jf = (bf({
	data: Vf.optional(),
	epoch_resolutions: _f(Wf).optional().default([]),
	timestamps: _f(uf()).optional(),
	axis_x: _f(uf()).optional(),
	axis_y: _f(uf()).optional(),
	axis_z: _f(uf()).optional(),
	vector_magnitude: _f(uf()).optional(),
	temperature: _f(uf()).optional(),
	algorithm_results: _f(uf()).nullable().optional(),
	nonwear_results: _f(uf()).nullable().optional(),
	nonwear_results_choi_2011: _f(uf()).nullable().optional(),
	event_markers: _f(kf([uf(), mf()])).optional().default([]),
	event_marker_timestamps: _f(uf()).optional().default([]),
	view_start: uf().nullable().optional(),
	view_end: uf().nullable().optional(),
	sensor_nonwear_periods: _f(bf({
		start_timestamp: uf(),
		end_timestamp: uf()
	})).optional().default([]),
	device_nonwear_source: Nf(p).nullable().optional(),
	algorithmic_nonwear_masks: xf(Pp(), _f(uf())).optional()
}), i.diary_tolerance_minutes, i.nap_min_consecutive_epochs, i.epoch_length_seconds, () => z.waitFor(import("./cube-variants-By_lJpuP.js"))), Kf = {
	warmVariantsForDay: async (...e) => (await Jf()).scoreCountBasedHasibVariantsForDay(...e),
	withRecordingWakeThreshold: async (...e) => (await Jf()).withRecordingWakeThreshold(...e)
};
function Yf(e, t, n) {
	return null != e[n] && e.covers(t);
}
function Xf(e, t, n) {
	return e.find((e) => Yf(e, t, n));
}
const Qf = [
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
function em(e) {
	return null == e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function tm(e) {
	return JSON.stringify(e);
}
function nm(e) {
	const t = em(e.config), n = em(t?.signals) ?? t;
	return {
		...n ? { config: n } : {},
		days: e.days
	};
}
function am(e) {
	return JSON.stringify(nm(e));
}
function im(e) {
	return null === e || "object" != typeof e || Array.isArray(e) ? null : e;
}
function rm(e) {
	const t = im(e), n = t?.analysis_date, a = im(t?.intrinsic), i = a?.state;
	if (!t || "string" != typeof n || 0 === n.length || !a || "string" != typeof i || ![
		"scorable",
		"unscorable",
		"insufficient"
	].includes(i)) return null;
	const r = a.score, s = a.verdict, o = a.infinite_reason, c = {}, l = [], u = t.per_guider;
	if (Array.isArray(u)) for (const h of u) {
		const e = im(h);
		if (!e) continue;
		l.push(e);
		const t = e.guider;
		if ("string" != typeof t) continue;
		const n = e.confidence;
		Object.defineProperty(c, t, {
			value: "number" == typeof n && Number.isFinite(n) ? n : null,
			enumerable: !0,
			configurable: !0,
			writable: !0
		});
	}
	const d = im(a.features), p = d && Array.isArray(d.feature_values) ? d : null, f = im(a.legacy_complexity_features) ?? (null === p ? d : null) ?? {}, m = t.computed_at;
	return {
		difficulty: "number" == typeof r && Number.isFinite(r) ? r : null,
		state: i,
		verdict: "string" == typeof s ? s : null,
		infiniteReason: "string" == typeof o ? o : null,
		confidenceByGuider: c,
		features: f,
		featureVector: p,
		perGuider: l,
		computedAt: "string" == typeof m ? m : null,
		canonicalResult: t,
		canonicalIntrinsic: a
	};
}
const sm = /^[0-9a-f]{64}$/;
var om = class extends Error {
	constructor(e = !1) {
		super(e ? "Stored complexity evidence failed integrity verification." : "Complexity evidence failed integrity verification."), this.name = "ComplexityEvidenceIntegrityError";
	}
}, cm = class extends Error {
	constructor() {
		super("Complexity evidence diverged for an existing generation."), this.name = "ComplexityEvidenceDivergenceError";
	}
}, lm = class extends Error {
	constructor() {
		super("Complexity evidence is older than the retained generation window."), this.name = "ComplexityEvidenceRetentionError";
	}
};
function um(e = !1) {
	throw new om(e);
}
function dm(e) {
	"string" == typeof e && sm.test(e) || um();
}
function pm(e) {
	"string" == typeof e && 0 !== e.length && Number.isFinite(Date.parse(e)) || um();
}
function fm(e) {
	if (null === e) return "null";
	switch (typeof e) {
		case "string":
		case "boolean": return JSON.stringify(e);
		case "number": return Number.isFinite(e) || um(), JSON.stringify(Object.is(e, -0) ? 0 : e);
		case "object": {
			if (Array.isArray(e)) {
				const t = [];
				for (let n = 0; n < e.length; n += 1) n in e || um(), t.push(fm(e[n]));
				return `[${t.join(",")}]`;
			}
			const t = Object.getPrototypeOf(e);
			t !== Object.prototype && null !== t && um(), Object.getOwnPropertySymbols(e).length > 0 && um();
			const n = e, a = [];
			for (const e of Object.keys(n).sort()) {
				const t = Object.getOwnPropertyDescriptor(n, e);
				t && "value" in t && t.enumerable || um(), a.push(`${JSON.stringify(e)}:${fm(t.value)}`);
			}
			return `{${a.join(",")}}`;
		}
		default: return um();
	}
}
function mm(e) {
	const t = fm(e), n = JSON.parse(t);
	return (null == n || "object" != typeof n || Array.isArray(n)) && um(), n;
}
async function hm(e) {
	return ae(fm(e));
}
function gm(e) {
	const t = e;
	for (const a of [
		"contractVersion",
		"crateVersion",
		"target",
		"semanticProfile",
		"profileProofStatus",
		"temporalBasis"
	]) "string" == typeof t[a] && "" !== t[a] || um();
	null === t.sourceRevision || "string" == typeof t.sourceRevision && "" !== t.sourceRevision || um(), dm(t.artifactSha256);
	const n = t.compiledFeatures;
	Array.isArray(n) && n.every((e) => "string" == typeof e && e.length > 0) || um(), fm(e);
}
async function ym(e, t) {
	"string" != typeof e && um(), void 0 !== t && dm(t);
	let n = 0;
	for (; n < e.length && /\s/.test(e[n]);) n += 1;
	let a = e.length - 1;
	for (; a >= n && /\s/.test(e[a]);) a -= 1;
	"{" === e[n] && "}" === e[a] || um();
	const i = await ae(e);
	return void 0 !== t && t !== i && um(), i;
}
function wm(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != typeof t || null === e || null === t) return !1;
	if (Array.isArray(e) || Array.isArray(t)) return !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((e, n) => wm(e, t[n]));
	if ("object" != typeof e || "object" != typeof t) return !1;
	const n = Object.keys(e).sort(), a = Object.keys(t).sort();
	if (n.length !== a.length || n.some((e, t) => e !== a[t])) return !1;
	const i = e, r = t;
	return n.every((e) => wm(i[e], r[e]));
}
function _m(e) {
	try {
		const t = JSON.parse(e);
		return (null === t || "object" != typeof t || Array.isArray(t)) && um(), t;
	} catch {
		return um();
	}
}
function vm(e, t) {
	const n = Object.keys(e).sort(), a = [...t].sort();
	return n.length === a.length && n.every((e, t) => e === a[t]);
}
function bm(e) {
	return "number" == typeof e && Number.isFinite(e);
}
function Sm(e) {
	return null === e || "string" == typeof e && e.length > 0;
}
function km(e) {
	return Array.isArray(e) && e.every(bm);
}
function Im(e) {
	return Array.isArray(e) && e.every((e) => Number.isInteger(e) && (0 === e || 1 === e));
}
function Am(e, t) {
	return 0 === e.length || e.length === t;
}
function xm(e) {
	Array.isArray(e) || um();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && um();
		const e = t, n = e.start_ts, a = e.end_ts;
		vm(e, ["start_ts", "end_ts"]) && bm(n) && bm(a) && !(a < n) || um();
	}
}
function Tm(e, t) {
	Array.isArray(e) && e.length === t || um();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && um();
		const e = n;
		vm(e, ["onset_time", "offset_time"]) && "string" == typeof e.onset_time && 0 !== e.onset_time.length && Sm(e.offset_time) || um();
	}
}
function Nm(e) {
	Array.isArray(e) || um();
	for (const t of e) {
		(null === t || "object" != typeof t || Array.isArray(t)) && um();
		const e = t;
		vm(e, ["start_time", "end_time"]) && "string" == typeof e.start_time && 0 !== e.start_time.length && "string" == typeof e.end_time && 0 !== e.end_time.length || um();
	}
}
function Mm(e) {
	Array.isArray(e) || um();
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		(null === n || "object" != typeof n || Array.isArray(n)) && um();
		const e = n, a = e.guider, i = e.detector, r = e.onset_ts, s = e.offset_ts;
		(!vm(e, [
			"guider",
			"detector",
			"onset_ts",
			"offset_ts"
		]) || "string" != typeof a || 0 === a.length || t.has(a) || !Sm(i) || null !== r && !bm(r) || null !== s && !bm(s) || null === r && null === s) && um(), t.set(a, {
			detector: i,
			onset: r,
			offset: s
		});
	}
	return t;
}
function $m(e) {
	if (null === e) return null;
	Array.isArray(e) && 2 === e.length || um();
	const t = e[0], n = e[1];
	return (!bm(t) || !bm(n) || n <= t) && um(), [t, n];
}
function Rm(e, t) {
	const n = _m(e), a = void 0 === n.config ? ["days"] : ["config", "days"], i = n.days;
	vm(n, a) && Array.isArray(i) || um(), void 0 === n.config || null !== n.config && "object" == typeof n.config && !Array.isArray(n.config) || um();
	const r = /* @__PURE__ */ new Set();
	for (const o of i) {
		(null === o || "object" != typeof o || Array.isArray(o)) && um();
		const e = o;
		vm(e, Qf) || um();
		const t = e.analysis_date, n = e.epoch_length_seconds, a = e.timestamps, i = e.activity_counts, s = e.sleep_scores, c = e.choi_nonwear, l = e.diary_nap_count, u = e.anglez, d = e.light, p = e.temperature, f = e.heart_rate, m = e.detach_nonwear, h = e.is_weekend, g = e.calibration_error, y = e.imputed_fraction;
		!("string" != typeof t || 0 === t.length || r.has(t) || "number" != typeof n || !Number.isInteger(n) || n <= 0) && km(a) && 0 !== a.length && km(i) && i.length === a.length && Im(s) && s.length === a.length && Im(c) && Am(c, a.length) && Number.isInteger(l) && !(l < 0) && Sm(e.diary_onset_time) && Sm(e.diary_wake_time) && Sm(e.diary_in_bed_time) && Sm(e.diary_out_bed_time) && (null === h || "boolean" == typeof h) && km(u) && Am(u, a.length) && km(d) && Am(d, a.length) && km(p) && Am(p, a.length) && km(f) && Am(f, a.length) && Im(m) && Am(m, a.length) && (null === g || bm(g)) && (null === y || !(!bm(y) || y < 0 || y > 1)) || um(), xm(e.sensor_nonwear), Tm(e.diary_naps, l), Nm(e.diary_nonwear);
		const w = Mm(e.guider_targets), v = $m(e.hdcza_window), b = w.get(_.HDCZA);
		(null === v && void 0 !== b || null !== v && (void 0 === b || null !== b.detector || b.onset !== v[0] || b.offset !== v[1])) && um(), r.add(t);
	}
	const s = n;
	return wm(_m(t), nm(s)) || um(), {
		difficulty: s,
		dates: r
	};
}
function Em(e, t, n, a) {
	vm(t, ["config", "days"]) || um(), wm(t.config, e.difficulty.config ?? null) || um();
	const i = t.days;
	Array.isArray(i) && i.length === e.difficulty.days.length || um();
	for (let o = 0; o < i.length; o += 1) {
		const t = i[o], n = e.difficulty.days[o];
		(null === t || "object" != typeof t || Array.isArray(t) || null === n || "object" != typeof n || Array.isArray(n)) && um();
		const a = t, r = n;
		vm(a, [
			"analysis_date",
			"epoch_length_seconds",
			"timestamps"
		]) && a.analysis_date === r.analysis_date && a.epoch_length_seconds === r.epoch_length_seconds && wm(a.timestamps, r.timestamps) || um();
	}
	const r = Object.keys(n);
	(r.length !== e.dates.size || r.some((t) => !e.dates.has(t))) && um();
	const s = new Map(e.difficulty.days.map((e) => [e.analysis_date, e]));
	for (const [o, c] of Object.entries(n)) {
		(null === c || "object" != typeof c || Array.isArray(c)) && um();
		const e = c, t = rm(e.canonicalResult);
		null !== t && t.canonicalResult.analysis_date === o && wm(e, t) || um();
	}
	if (null !== a) {
		const t = Object.keys(a);
		(t.length !== e.dates.size || t.some((t) => !e.dates.has(t))) && um();
		for (const [e, n] of Object.entries(a)) {
			(null === n || "object" != typeof n || Array.isArray(n)) && um();
			const t = n, a = s.get(e);
			t.analysis_date === e && Number.isInteger(t.epoch_length_seconds) && t.epoch_length_seconds === a?.epoch_length_seconds || um();
		}
	}
}
async function zm(e) {
	return hm(function(e) {
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
async function Dm(e) {
	try {
		gm(e.runtimeIdentity), null !== e.sourceContentHash && dm(e.sourceContentHash);
		const t = mm(e.runtimeIdentity), n = await ym(e.difficultyRequestWireJson, e.difficultyRequestSha256), a = await ym(e.signalsRequestWireJson, e.signalsRequestSha256);
		Rm(e.difficultyRequestWireJson, e.signalsRequestWireJson);
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
			generationKey: await zm(i)
		};
	} catch (bd) {
		if (bd instanceof om) throw bd;
		return um();
	}
}
async function Cm(e) {
	return hm(function(e) {
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
function Om(e, t) {
	void 0 !== t && (null !== t && dm(t), e !== t && um());
}
async function Pm(e) {
	(!Number.isInteger(e.fileId) || e.fileId <= 0) && um(), void 0 !== e.id && (!Number.isInteger(e.id) || e.id <= 0) && um();
	for (const o of [
		e.generationKey,
		e.difficultyRequestSha256,
		e.signalsRequestSha256,
		e.projectionSha256,
		e.difficultyResultSha256,
		e.recordSha256
	]) dm(o);
	null !== e.signalsResultSha256 && dm(e.signalsResultSha256), null !== e.sourceContentHash && dm(e.sourceContentHash), "sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || um(), gm(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || um(), await ym(e.difficultyRequestWireJson, e.difficultyRequestSha256), await ym(e.signalsRequestWireJson, e.signalsRequestSha256);
	const t = Rm(e.difficultyRequestWireJson, e.signalsRequestWireJson);
	pm(e.createdAt), pm(e.updatedAt), Date.parse(e.updatedAt) < Date.parse(e.createdAt) && um(), null === e.signalsByDate != (null === e.signalsResultSha256) && um();
	const n = mm(e.projectionInput), a = mm(e.difficultyByDate), i = null === e.signalsByDate ? null : mm(e.signalsByDate);
	Em(t, n, a, i);
	const r = {
		evidenceContractId: e.evidenceContractId,
		difficultyMethodId: e.difficultyMethodId,
		signalsMethodId: e.signalsMethodId,
		requestContractId: e.requestContractId,
		sourceContentHash: e.sourceContentHash,
		runtimeIdentity: mm(e.runtimeIdentity),
		difficultyRequestWireJson: e.difficultyRequestWireJson,
		signalsRequestWireJson: e.signalsRequestWireJson,
		difficultyRequestSha256: e.difficultyRequestSha256,
		signalsRequestSha256: e.signalsRequestSha256
	};
	await zm(r) !== e.generationKey && um(), await hm(n) !== e.projectionSha256 && um(), await hm(a) !== e.difficultyResultSha256 && um(), null !== i && await hm(i) !== e.signalsResultSha256 && um();
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
	return await Cm(s) !== e.recordSha256 && um(), s;
}
async function Fm(e) {
	try {
		return await Pm(e);
	} catch {
		throw new om(!0);
	}
}
function jm(e, t, n = !1) {
	if (!t) throw new om(n);
	if (null !== e.sourceContentHash && t.sourceContentHash !== e.sourceContentHash) throw new om(n);
}
async function Bm(e, t, n) {
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
async function Lm(e, t, n = X()) {
	const [a, i] = await n.transaction("r", [n.files, n.complexityEvidence], async () => Promise.all([n.complexityEvidence.where("[fileId+generationKey]").equals([e, t]).first(), n.files.get(e)]));
	if (!a) return;
	const r = await Fm(a);
	return jm(r, i, !0), r;
}
function Gm(e, t, n, a) {
	return null === a ? null : {
		...a,
		binding: a?.binding ?? $t.captureWorkspaceBinding(e, t, n)
	};
}
async function Um(e, t = h()) {
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
function Zm(e) {
	const t = E().scoring(), n = [oi(_n(t, e).nonwearDetectorsCounts, t.showChoiNonwear), oi(Mt(t.nonwearDetectorsGgir, e), t.showChoiNonwear)];
	return n.filter((e, t) => n.findIndex((t) => Ka(t) === Ka(e)) === t);
}
function Hm(e, t) {
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
function qm(e, t) {
	return [.../* @__PURE__ */ new Set([...e.availableDates, ...t])].sort();
}
function Vm(e, t) {
	return e ? {
		detectors: [...e.detectors],
		any: Uint8Array.from(e.mask).buffer,
		weight: e.weight ? Float64Array.from(e.weight).buffer : null,
		grid: e.grid === t.timestamps ? "counts" : "ggir"
	} : null;
}
async function Wm(e, { file: t, sets: n, capsense: a, db: i, signal: r }) {
	const s = n.filter((t) => !(Ka(t) in (e.displayNonwear ?? {})));
	if (0 === s.length) return;
	const o = J(r), c = await Ra(e, at, "navigation facts", Ia(), o);
	if (!c) return;
	Rt(c.timestamps, bn(e, t));
	const l = Ya(t.sourceType, t.sourceProfileId), u = {};
	for (const [m, h] of Object.entries(c.nonwearMasksByDetector)) 0 === h.length || wi(m) || (u[m] = h);
	const d = {
		algorithmicNonwearMasks: u,
		timestamps: c.timestamps,
		ggirTimestamps: c.ggirTimestamps,
		sensorNonwearPeriods: "detach_mask" === Wa(l) && c.detachNonwear ? Hm(c.detachNonwear, c.timestamps) : a,
		deviceNonwearSource: l
	}, p = { ...e.displayNonwear }, f = await Promise.all(s.map((e) => (r?.throwIfAborted(), ci(d, e, o))));
	for (const [m, h] of s.entries()) p[Ka(h)] = Vm(f[m], d);
	await Ne(e.fileId, e.date, p, {
		seriesRevision: t.seriesRevision ?? 0,
		nonwearBandGeneration: t.nonwearBandGeneration ?? 0
	}, i, r);
}
const Jm = /* @__PURE__ */ new WeakMap();
function Km(e, t, n) {
	let a = Jm.get(t);
	a || Jm.set(t, a = /* @__PURE__ */ new Map());
	const i = a.get(e);
	if (i) return S(i, n);
	const r = async function(e, t, n) {
		n?.throwIfAborted();
		const a = await Ve(e, t);
		if (!a || "incomplete" === a.ingestState) return;
		const i = await mt(e, t);
		let r = a.navigationFacts;
		(function(e, t) {
			const n = e?.navigationFacts;
			if (!e || 1 !== n?.version) return !1;
			const a = qm(e, t);
			return n.dates.length === a.length && n.dates.every((e, t) => e === a[t]);
		})(a, i) || (r = await async function(e, t, n, a) {
			const i = J(a), r = {}, s = async (e) => {
				a?.throwIfAborted();
				const t = await i.nextDate(e);
				void 0 !== t && (r[e] = t);
			};
			await Promise.all(t.map(s)), await Promise.all(Object.values(r).filter((e) => !(e in r)).map(s));
			const o = {}, c = {};
			await Promise.all(e.availableDates.map(async (e) => {
				a?.throwIfAborted();
				const [t, n] = await Promise.all([i.analysisWindowBounds(e), i.analysisWindowBounds(e, 48)]);
				t && (o[e] = [t[0], t[1]]), n && (c[e] = [n[0], n[1]]);
			}));
			const l = await ri(n), u = await Ja(e, l, a), d = [...new Set([u.zone, u.reason ? l : null].filter((e) => Boolean(e)))], p = {};
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
				next: r,
				window: o,
				view48: c,
				dst: p,
				dstZone: {
					...u,
					studyZone: l
				}
			};
		}(a, qm(a, i), t, n), n?.throwIfAborted(), await t.files.update(e, { navigationFacts: r }));
		const s = Zm(a), o = s.map(Ka), c = a.seriesRevision ?? 0;
		if (r?.bands?.seriesRevision === c && o.every((e) => r.bands.keys.includes(e))) return;
		const l = "sensor_rows" === Wa(Ya(a.sourceType, a.sourceProfileId)) ? (await Fe(e, t)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : [];
		for (const u of i) {
			n?.throwIfAborted();
			const i = await xt(e, u, t);
			i && await Wm(i, {
				file: a,
				sets: s,
				capsense: l,
				db: t,
				signal: n
			});
		}
		await t.transaction("rw", t.files, async () => {
			const i = await t.files.get(e);
			i?.navigationFacts && (i.seriesRevision ?? 0) === c && (i.nonwearBandGeneration ?? 0) === (a.nonwearBandGeneration ?? 0) && (n?.throwIfAborted(), await t.files.update(e, { navigationFacts: {
				...i.navigationFacts,
				bands: {
					keys: o,
					seriesRevision: c
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
function Ym(e, t) {
	for (const n of e) {
		const e = n.epochResolutions?.find((e) => e.category === t && !e.derivedFromResolutionId);
		if (e) return e.epochLengthSeconds;
	}
	return null;
}
function Xm(e, t) {
	const n = "counts" === t ? e.timestamps : e.ggirTimestamps;
	return n ? Math.floor(n.byteLength / Float64Array.BYTES_PER_ELEMENT) : 0;
}
function Qm(e) {
	return "number" != typeof e ? String(e) : (/* @__PURE__ */ new Date(1e3 * e)).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: !1,
		timeZone: "UTC"
	});
}
function eh(e) {
	if ("object" != typeof e || null === e) return String(e).slice(0, 60);
	const t = e;
	return "onsetTimestamp" in t && "offsetTimestamp" in t ? `${Qm(t.onsetTimestamp)}–${Qm(t.offsetTimestamp)}` : "startTimestamp" in t && "endTimestamp" in t ? `${Qm(t.startTimestamp)}–${Qm(t.endTimestamp)}` : JSON.stringify(t).slice(0, 60);
}
function th(e, t = "(unset)") {
	if (void 0 === e) return t;
	if (null === e) return t;
	const n = "string" == typeof e ? e : JSON.stringify(e);
	return n.length > 48 ? `${n.slice(0, 45)}…` : n;
}
function nh(e) {
	const t = e.rowCount, n = e.dayCount, a = [`${th(e.subject, "export")} (${th(e.format, "?")})`, th(e.filename, "")].filter((e) => "" !== e), i = ["number" == typeof t ? `${t} rows` : null, "number" == typeof n ? `${n} day${1 === n ? "" : "s"}` : null].filter((e) => null !== e);
	return i.length > 0 ? `${a.join(" · ")} — ${i.join(", ")}` : a.join(" · ");
}
function ah(e, t, n, a) {
	const i = n?.exportId;
	return "export_started" === t && "string" == typeof i && a.has(i) ? "" === e ? "outcome unknown" : `${e} · outcome unknown` : e;
}
function ih(e, t) {
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
			return "onsetTimestamp" in a ? `${e} #${t}${n}: ${Qm(a.onsetTimestamp)}–${Qm(a.offsetTimestamp)}` : "startTimestamp" in a ? `${e} #${t}: ${Qm(a.startTimestamp)}–${Qm(a.endTimestamp)}` : `${e} #${t}${n}`;
		}
		case "sleep_period_split": return `sleep #${a.periodIndex ?? "?"} split at ${Qm(a.at)}`;
		case "sleep_period_merged": return `sleep #${a.periodIndex ?? "?"} merged ${a.direction ?? "?"}`;
		case "marker_adjusted": {
			const e = a.updates ?? {}, t = a.category ?? "?", n = a.periodIndex ?? "?", i = [];
			return void 0 !== e.onsetTimestamp && i.push(`onset → ${Qm(e.onsetTimestamp)}`), void 0 !== e.offsetTimestamp && i.push(`offset → ${Qm(e.offsetTimestamp)}`), void 0 !== e.startTimestamp && i.push(`start → ${Qm(e.startTimestamp)}`), void 0 !== e.endTimestamp && i.push(`end → ${Qm(e.endTimestamp)}`), void 0 !== e.markerType && i.push(`type → ${e.markerType}`), `${t} #${n}: ${i.join(", ")}`;
		}
		case "marker_moved": {
			const e = a.before, t = a.after;
			if (!e || !t) return "drag completed";
			const n = Array.isArray(e.sleepMarkers) ? e.sleepMarkers : [], i = Array.isArray(t.sleepMarkers) ? t.sleepMarkers : [];
			for (let a = 0; a < Math.max(n.length, i.length); a++) {
				const e = n[a], t = i[a];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `sleep #${a}: ${eh(e)} ⇒ ${eh(t)}`;
			}
			const r = Array.isArray(e.nonwearMarkers) ? e.nonwearMarkers : [], s = Array.isArray(t.nonwearMarkers) ? t.nonwearMarkers : [];
			for (let a = 0; a < Math.max(r.length, s.length); a++) {
				const e = r[a], t = s[a];
				if (e && t && JSON.stringify(e) !== JSON.stringify(t)) return `nonwear #${a}: ${eh(e)} ⇒ ${eh(t)}`;
			}
			return "drag completed (no visible change)";
		}
		case "marker_deleted": {
			const e = a.category ?? "?", t = a.periodIndex ?? "?", n = a.before;
			return n ? `${e} #${t}: was ${eh(n)}` : `${e} #${t}`;
		}
		case "actiware_rest_edited": {
			const e = "string" == typeof a.edit ? a.edit : "?";
			return "add" === e ? `rest added: ${eh(a.to)}` : "remove" === e ? `rest removed: was ${eh(a.from)}` : `rest ${"move" === e ? "moved" : e}: ${eh(a.from)} ⇒ ${eh(a.to)}`;
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
			const e = th(a.intent, "mutation"), t = th(a.guard, "?"), n = a.disposition, i = "refused_by_store" === n ? "refused" : "applied_with_violation" === n ? "applied anyway" : th(n, "");
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
				const e = th(a.before, ""), t = th(a.after, "");
				return "" === e ? `"${t}"` : `"${e}" → "${t}"`;
			}
			return a.text ? `"${String(a.text).slice(0, 60)}"` : a.notes ? `"${String(a.notes).slice(0, 60)}"` : `${a.length ?? "?"} chars`;
		case "settings_changed": return `${th(a.scope, "?")} · ${th(a.key, "?")}: ${th(a.before)} → ${th(a.after)}`;
		case "settings_reset": {
			const e = a.changed, t = th(a.scope, "settings");
			if (!Array.isArray(e)) return `${t} reset to defaults`;
			if (0 === e.length) return `${t}: already at defaults`;
			const n = e.slice(0, 4).map((e) => th(e, "?")).join(", "), i = e.length > 4 ? ", …" : "";
			return `${t}: ${String(e.length)} reset to default (${n}${i})`;
		}
		case "app_version_changed": return `${th(a.before, "(first run)")} → ${th(a.after, "?")}`;
		case "system_migration": return `${th(a.subject, "schema")}: ${th(a.before, "?")} → ${th(a.after, "?")}`;
		case "data_exported": return nh(a);
		case "export_started": return `Started: ${nh(a)}`;
		case "export_cancelled": return `${th(a.filename, "export")} — ${th(a.reason, "cancelled")}`;
		case "preset_changed": {
			const e = th(a.family, "preset"), t = th(a.change, "changed"), n = th(a.preset, "?"), i = a.before;
			return null == i ? `${e}: ${t} ${n}` : `${e}: ${t} ${n} (was ${th(i)})`;
		}
		case "markers_synced": {
			const e = a.conflicts, t = a.errorCount;
			let n = `Pushed ${a.pushed ?? 0}, pulled ${a.pulled ?? 0}`;
			return "number" == typeof e && e > 0 && (n += `, ${e} conflict${1 === e ? "" : "s"}`), "number" == typeof t && t > 0 && (n += `, ${t} error${1 === t ? "" : "s"}`), n;
		}
		case "system_recalculation": return `Recalculated ${th(a.subject, "derived data")}`;
		case "diary_staged": return `Staged ${a.staged ?? 0}, replaced ${a.replaced ?? 0}, skipped ${a.skipped ?? 0}`;
		case "diary_decision_recorded": return `Decided ${th(a.ruleKind, "a rule")} → ${th(a.outcome, "(no outcome)")} (${th(a.scope, "unscoped")}, ${a.nights ?? 0} nights)`;
		case "diary_decision_state_saved": return `Saved decision state "${th(a.restorePoint, "untitled")}" (${a.decisions ?? 0} decisions)`;
		case "diary_session_saved": {
			const e = th(a.status, "saved"), t = th(a.step, "an unknown step"), n = th(a.sourceSha256Prefix, "an unnamed source");
			return "removed" === e ? `Removed the saved diary session for ${n}` : `Diary session ${n} saved as ${e} on ${t}`;
		}
		case "diary_decision_state_restored": return `Restored decision state "${th(a.restorePoint, "untitled")}" (${a.reflagged ?? 0} reflagged, ${a.unflagged ?? 0} unflagged, ${a.nights ?? 0} nights)`;
		case "diary_decisions_reset": return `Reset ${a.decisions ?? 0} diary decisions across ${a.nights ?? 0} nights`;
		case "diary_attached": {
			const e = a.entryCount, t = a.matchBasis, n = ["number" == typeof e ? `${e} night${1 === e ? "" : "s"}` : null, "string" == typeof t && "" !== t ? `matched by ${t}` : null].filter((e) => null !== e).join(", ");
			return "" === n ? "Attached diary" : `Attached diary (${n})`;
		}
		case "diary_discarded": {
			const e = a.analysisDate;
			return null == e ? `Discarded ${th(a.sourceKey, "diary")}` : `Discarded ${th(a.sourceKey, "diary")} for ${th(e, "?")}`;
		}
		case "diary_workspace_cleared": {
			const e = (e, t) => {
				const n = Number(a[e] ?? 0);
				return `${String(n)} ${t}${1 === n ? "" : "s"}`;
			};
			return `Cleared workspace diary (${e("staged", "staged night")}, ${e("occurrences", "response")})`;
		}
		case "diary_repaired": {
			const e = a.fields, t = Array.isArray(e) ? e.map((e) => th(e, "?")).join(", ") : "";
			return "" === t ? `Repaired ${a.applied ?? 0} field${1 === a.applied ? "" : "s"}` : `Repaired ${a.applied ?? 0}: ${t}`;
		}
		case "diary_changed": {
			const e = a.fields, t = th(a.change, "changed"), n = Array.isArray(e) ? e.map((e) => th(e, "?")).join(", ") : "";
			return "" === n ? `Diary ${t}` : `Diary ${t}: ${n}`;
		}
		case "workspace_deleted": {
			const e = a.auditRowsDestroyed;
			return `${th(a.displayName, "workspace")} deleted — ${a.auditRowsTotal ?? 0} audit rows, ${a.auditRowsReplicated ?? 0} replicated, ${e ?? 0} destroyed`;
		}
		case "audit_chain_reanchored": return `Restored ${a.restoredRows ?? 0} rows (restore ${String(a.restoreId ?? "?").slice(0, 8)})`;
		case "workspace_recovered": return `Recovered from backup ${th(a.backupSha256, "?").slice(0, 8)} — ${th(a.applied, "0")} changes put back, ${th(a.skipped, "0")} skipped, ${th(a.recordingsToReimport, "0")} recordings to import again`;
		case "access_changed": return `${th(a.subject, "access")} · ${th(a.scope, "?")}: ${th(a.before)} → ${th(a.after)}`;
		case "assignment_changed": {
			const e = a.fileCount, t = a.fileIds, n = "number" == typeof e ? e : Array.isArray(t) ? t.length : 0;
			return `${th(a.change, "changed")} ${th(a.subject, "assignment")} · ${th(a.scope, "?")} (${n} file${1 === n ? "" : "s"})`;
		}
	}
	return Object.entries(a).slice(0, 5).map(([e, t]) => "number" == typeof t && e.toLowerCase().includes("timestamp") ? `${e}: ${Qm(t)}` : "string" == typeof t && t.length > 50 ? `${e}: "${t.slice(0, 47)}..."` : Array.isArray(t) ? `${e}: [${t.length} items]` : "object" == typeof t && null !== t ? `${e}: {…}` : `${e}: ${JSON.stringify(t)}`).join(", ");
}
function rh(e) {
	return JSON.stringify(e.map((e) => ({
		start_timestamp: e.startTimestamp,
		end_timestamp: e.endTimestamp,
		marker_index: e.markerIndex
	})));
}
function sh(e, t) {
	const n = (i = t, "mims_metrics" === (a = e ?? "generic") ? or(i, r) : "ggir_part5_daysummary" === a ? function(e, t) {
		const n = cr(e, t);
		return e.date_column || e.datetime_column || n.push({
			key: "date_column",
			message: "Map a date/day column for the daily summary table."
		}), n;
	}(i, r) : sr(i, r));
	var a, i, r;
	if (0 !== n.length) throw new Error(function(e) {
		return `Column-mapped CSV settings are incomplete: ${e.map((e) => e.message).join(" ")} ${Ci}`;
	}(n));
}
function oh(e) {
	const t = /* @__PURE__ */ new Map();
	for (const a of e) "auto_score" !== a.username || a.algorithm !== A.VAN_HEES_2015 || a.isInvalidNight || t.set(a.date, Kt(t.get(a.date), a));
	const n = /* @__PURE__ */ new Map();
	for (const [a, i] of t) {
		const e = i.sleepMarkers.filter((e) => e.markerType === c.MAIN_SLEEP);
		if (1 !== e.length) continue;
		const t = e[0], r = t?.onsetTimestamp, s = t?.offsetTimestamp;
		"number" == typeof r && Number.isFinite(r) && "number" == typeof s && Number.isFinite(s) && s > r && n.set(a, [r, s]);
	}
	return n;
}
async function ch(e, t) {
	const n = t.dailyGgirSummaries;
	if (!n) return /* @__PURE__ */ new Map();
	const a = await n.where("fileId").equals(e).toArray();
	return new Map(a.map((e) => [e.analysisDate, e]));
}
function lh(e) {
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
function uh(e, t, n, a) {
	const i = t?.days.find((e) => e.analysis_date === n), r = e?.[n];
	if (!i || !r || !a) return [];
	const s = i.timestamps, o = i.epoch_length_seconds;
	if (0 === s.length || !Number.isFinite(o) || o <= 0) return [];
	const c = [];
	for (const [l, u, d] of [[
		"onset_candidates",
		"onset_candidate",
		"Onset candidate"
	], [
		"offset_candidates",
		"offset_candidate",
		"Offset candidate"
	]]) {
		const e = r[l];
		Array.isArray(e) && e.forEach((e, t) => {
			if (null == e || "object" != typeof e || Array.isArray(e)) return;
			const n = e, i = n.run_start_epoch, r = n.run_end_epoch;
			if (!Number.isInteger(i) || !Number.isInteger(r) || i < 0 || r < i || r >= s.length) return;
			const l = s[i], p = s[r];
			if (null == l || null == p || !Number.isFinite(l) || !Number.isFinite(p)) return;
			const f = p + o;
			if (f <= l) return;
			const m = "string" == typeof n.generation_execution_id ? n.generation_execution_id : null, h = `${u}:${String(i)}:${String(r)}:${String(t)}`;
			c.push({
				id: h,
				kind: u,
				start_timestamp: l,
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
	return c;
}
const dh = "wasm-parallel";
function ph(e) {
	const t = e.compiledFeatures;
	return {
		...e,
		compiledFeatures: t.includes(dh) ? t.filter((e) => e !== dh) : [...t, dh]
	};
}
function fh(e, t) {
	const n = e.compiledFeatures.filter((e) => e !== dh), a = t.compiledFeatures.filter((e) => e !== dh);
	return e.contractVersion === t.contractVersion && e.crateVersion === t.crateVersion && e.sourceRevision === t.sourceRevision && e.target === t.target && e.semanticProfile === t.semanticProfile && e.profileProofStatus === t.profileProofStatus && e.temporalBasis === t.temporalBasis && e.artifactSha256 === t.artifactSha256 && n.length === a.length && n.every((e, t) => e === a[t]);
}
async function mh(e, t, n, a, i = /* @__PURE__ */ new Map()) {
	const r = [];
	for (const c of [t, await Na(t, void 0, a)]) {
		const s = e.get(c);
		if (!s) continue;
		let o = i.get(c);
		o || i.set(c, o = Ra(s, n, `listDatesStatus ${c}`, Ia(), a));
		const l = await o;
		if (!l) return null;
		r.push({
			unpacked: l,
			epochs: await Za(l.timestamps, t, a),
			ggir: await Za(l.ggirTimestamps, t, a)
		});
	}
	for (const c of i.keys()) c < t && i.delete(c);
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
function hh(e, t) {
	const n = new Set(t.map((e) => e.analysis_date)), a = Object.keys(e);
	return n.size === t.length && a.length === n.size && a.every((e) => n.has(e));
}
function gh(e) {
	const t = [...e.entries()].sort(([e], [t]) => e.localeCompare(t));
	let n = null, a = null;
	for (const [, s] of t) try {
		const e = jn(s).timestamps;
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
	const i = 1e3 * n, r = 1e3 * a;
	return Number.isFinite(i) && Number.isFinite(r) ? {
		start: i,
		end: r
	} : null;
}
async function yh(e, t, n, a, i, r, s) {
	const o = [], c = [];
	for (const l of new Set(t)) {
		let t = null;
		for (const o of e) if (o && 0 !== jn(o).timestamps.length && (await Us(o, l, n, i, void 0, r, s), t = ca(l, _a(o, n), a), null !== t)) break;
		null === t ? o.push(l) : c.push({
			detector: l,
			reason: t
		});
	}
	return {
		available: o,
		dropped: c
	};
}
function wh({ available: e, dropped: t }) {
	return 0 === e.length && t.length > 0 ? t.map((e) => e.reason).join("; ") : null;
}
function _h(e) {
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
function vh(e) {
	return 1 === e.length && ma(e[0]);
}
function bh(e, t, n) {
	const a = e?.byDate[t];
	return a ? "refused" === a.kind ? a.reason : null : function(e) {
		const t = e?.sleepPeriodDetectionConfig?.[Jh];
		return "string" == typeof t ? t : null;
	}(n);
}
async function Sh(e, t) {
	if (!("placementResults" in e)) return;
	const n = await e.placementResults.get(t);
	return 2 === n?.policy ? n : void 0;
}
function kh(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let a = 0; a < t; a += 1) {
		const t = e[a];
		if (null == t || !Number.isFinite(t)) return [];
		n[a] = t;
	}
	return n;
}
function Ih(e, t) {
	if (null == e || e.length !== t) return [];
	const n = new Array(t);
	for (let a = 0; a < t; a += 1) {
		const t = e[a];
		if (0 !== t && 1 !== t) return [];
		n[a] = t;
	}
	return n;
}
function Ah(e, t, n) {
	if (t.length !== e.length || n.length !== e.length) return [];
	const a = new Array(e.length);
	for (let i = 0; i < e.length; i += 1) {
		const r = t[i], s = e[i], o = n[i];
		if (null == r || null == s || r !== s || null == o || !Number.isFinite(o)) return [];
		a[i] = o;
	}
	return a;
}
function xh(e, t, n, a, i, r) {
	const s = [], o = null == t ? null : r.resolveInstant(t, e, Ue.evening_onset, i), c = null == n ? null : r.resolveInstant(n, e, Ue.morning_offset, i);
	return null == o && null == c || s.push({
		guider: _.DIARY,
		detector: null,
		onset_ts: o,
		offset_ts: c
	}), null != a && s.push({
		guider: _.HDCZA,
		detector: null,
		onset_ts: a[0],
		offset_ts: a[1]
	}), s;
}
function Th(e) {
	return `complexity-evidence:${e.generationKey}`;
}
function Nh(e) {
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
function Mh(e) {
	return e.projectionInput;
}
function $h(e) {
	return e.difficultyByDate;
}
function Rh(e) {
	return e.signalsByDate;
}
function Eh(e, t, n, a) {
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
async function zh(e, t, n, a) {
	const [i, r] = await Promise.all([a.markers.where("[fileId+date+username]").between([
		e,
		t,
		""
	], [
		e,
		t,
		"￿"
	], !0, !0).toArray(), Sh(a, e)]), s = /* @__PURE__ */ new Map();
	for (const l of i) s.set(l.username, Kt(s.get(l.username), l));
	const o = s.size >= 2 && (await Um([{
		usersForDate: s,
		kind: "sleep"
	}, {
		usersForDate: s,
		kind: "nonwear"
	}])).some((e) => e.disagree), c = s.get(et);
	return Eh(s.get(n), o, c, bh(r, t, c));
}
function Dh(e) {
	return JSON.stringify((e ?? []).map((e) => [e.startTimestamp ?? null, e.endTimestamp ?? null]));
}
function Ch(e) {
	const t = e ? null : E().scoring(), n = e?.nightStartHour ?? t?.nightStartHour ?? u.night_start_hour, a = e?.nightEndHour ?? t?.nightEndHour ?? u.night_end_hour, i = parseInt(n.split(":")[0] ?? "21", 10), r = parseInt(a.split(":")[0] ?? "9", 10);
	return {
		nightStartHour: Number.isNaN(i) ? 21 : i,
		nightEndHour: Number.isNaN(r) ? 9 : r
	};
}
const Oh = /* @__PURE__ */ new Set(), Ph = /* @__PURE__ */ new WeakMap();
function Fh(e, t, n, a) {
	const i = Ph.get(e) ?? /* @__PURE__ */ new Map();
	Ph.set(e, i);
	const r = i.get(t);
	if (r) {
		let s;
		return {
			run: r.run.catch((o) => {
				if (!r.signal?.aborted || n?.aborted) throw o;
				return i.get(t) === r && i.delete(t), s = Fh(e, t, n, a), s.run;
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
function jh(e, t, n, a) {
	return Q({
		kind: V.NIGHT_DIFFICULTY,
		key: `${V.NIGHT_DIFFICULTY}:${String(e)}`,
		label: "Update night difficulty",
		workspaceId: t.name,
		signal: a,
		rerun: !0,
		run: async (a) => {
			const i = new Hh();
			try {
				if (a.signal.throwIfAborted(), a.progress(0, 2), X() !== t) return;
				const r = await Ve(e, t);
				if (!r || "incomplete" === r.ingestState) return;
				await Km(e, t, a.signal), a.signal.throwIfAborted(), a.progress(1, 2);
				const s = r.nightDifficulty, o = n ?? (s ? {
					nightStartHour: `${String(s.nightStartHour).padStart(2, "0")}:00`,
					nightEndHour: `${String(s.nightEndHour).padStart(2, "0")}:00`
				} : void 0);
				await i.computeDatesStatus(e, r.availableDates, E().scoring().username || "anonymous", o, a.signal), a.progress(2, 2);
			} finally {
				i.dispose();
			}
		}
	}).catch((e) => {
		e instanceof DOMException && "AbortError" === e.name || console.warn("[local-data-source] Stored night difficulty could not be refreshed.", e);
	});
}
qe((e, t, n) => {
	jh(e, t, void 0, n);
});
const Bh = /* @__PURE__ */ new WeakMap();
function Lh(e, t, n, a, i) {
	i?.throwIfAborted();
	let r = Bh.get(e);
	return r || (r = /* @__PURE__ */ new Map(), Bh.set(e, r)), r.set(t, {
		inputs: n,
		byDate: a
	}), a;
}
const Gh = /* @__PURE__ */ new WeakMap();
function Uh(e, t) {
	let n = Gh.get(e);
	n || Gh.set(e, n = /* @__PURE__ */ new Map());
	const a = Me(t);
	let i = n.get(a);
	return i || n.set(a, i = st(e.values(), t)), i;
}
function Zh(e) {
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
var Hh = class a {
	sourceKey = "local";
	nightRecordData = ms;
	sourceAnalyses;
	services;
	disposed = !1;
	operationProcessingOptions;
	constructor(e, { sourceAnalyses: t = hs, services: n = Kf } = {}) {
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
		let r = !1;
		return { end: async () => {
			r || (r = !0, i.depth -= 1, i.depth > 0 || (this.fileBatches.get(e) === i && this.fileBatches.delete(e), 0 === i.savedNights.size || i.signal?.aborted || await this.sourceAnalyses.reduce(async (t, n) => {
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
		return Xf(this.sourceAnalyses, e, "reanalyze")?.reanalyze(e, t, {
			...n,
			services: this.services
		}) ?? null;
	}
	fileBatch(e, t) {
		const n = this.fileBatches.get(e);
		return n?.db === t ? n : null;
	}
	placementDiaries(e, t, n = this.fileBatch(e, t)) {
		return n?.days ? n.diaries ??= Te(e, t) : Te(e, t);
	}
	async placementDiary(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? (await this.placementDiaries(e, n, a)).find((e) => e.analysisDate === t) ?? null : lt(e, t, n);
	}
	async placementMarker(e, t, n, a, i = this.fileBatch(e, a)) {
		if (!i?.days) return Ie(e, t, et, n, void 0, a);
		const r = await (i.markers ??= a.markers.where("fileId").equals(e).toArray()), s = ln(r, {
			date: t,
			username: et
		}, n);
		return s ? ut(s) : void 0;
	}
	async placementDay(e, t, n, a = this.fileBatch(e, n)) {
		return a?.days ? a.days.get(t) : xt(e, t, n, a?.activityDayMemo);
	}
	async scorerVerdict(e, t, n, a, i = this.fileBatch(t, e)) {
		return i?.days ? Uh(i.days, n) : i?.activityDayMemo ? Uh(await Et(t, e, i.activityDayMemo), n) : (await Nn(t, e, a))(n);
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
		const n = X(), a = await Et(e, n, this.fileBatch(e, n)?.activityDayMemo), i = Uh(a, t), r = [];
		for (const [s, o] of [...a].sort(([e], [t]) => e.localeCompare(t))) {
			const e = await Ra(o, i, `loadFileDaySeries ${s}`, Ia());
			e && r.push(e);
		}
		return r;
	}
	async loadActivityData(e, t, n) {
		const a = X();
		let i, r = await Ve(e, a), s = null;
		if (qt(r)) {
			const { ensureSavedGgirNonwear: t } = await import("./ggir-import-DWwaCyXx.js");
			try {
				s = await t(e, a, void 0, !1);
			} catch {
				i = "Saved GGIR nonwear recovery failed; recovered nonwear is unavailable.";
			}
			r = await Ve(e, a);
		}
		const o = r?.navigationFacts;
		o?.window[t] || Km(e, a);
		const c = await Pa(e, t, a, void 0, o);
		if (!c) throw new Error(`No activity data found for fileId=${e} date=${t}. File may not be processed yet.`);
		const l = await this.scorerVerdict(a, e, n?.algorithm, { file: r }), u = await Ra(c, l, `loadActivityData ${t}`, Ia());
		if (!u) throw new Error(`Activity data for fileId=${e} date=${t} is corrupt; please reprocess.`);
		const d = await Na(t, o), p = 48 === n?.viewHours ? [d, await Na(d, o)] : [d], f = await Promise.all(p.map((t) => xt(e, t, a, this.fileBatch(e, a)?.activityDayMemo))), m = [c];
		for (const k of f) {
			if (!k) break;
			m.push(k);
			const e = await Ra(k, l, "loadActivityData next-day", Ia());
			if (!e) throw new Error("Next-day activity data is corrupt; please reprocess.");
			const t = u.timestamps.length, n = e.timestamps.length;
			La(u.timestamps, e.timestamps), La(u.axisY, e.axisY), La(u.vectorMagnitude, e.vectorMagnitude), (u.axisX.length > 0 || e.axisX.length > 0) && (u.axisX.length < t && (u.axisX = new Array(t).fill(0)), La(u.axisX, e.axisX.length > 0 ? e.axisX : new Array(n).fill(0))), (u.axisZ.length > 0 || e.axisZ.length > 0) && (u.axisZ.length < t && (u.axisZ = new Array(t).fill(0)), La(u.axisZ, e.axisZ.length > 0 ? e.axisZ : new Array(n).fill(0))), (u.temperature.length > 0 || e.temperature.length > 0) && (u.temperature.length < t && (u.temperature = new Array(t).fill(NaN)), La(u.temperature, e.temperature.length > 0 ? e.temperature : new Array(n).fill(NaN))), (u.eventMarkers.length > 0 || e.eventMarkers.length > 0) && (u.eventMarkers.length < t && (u.eventMarkers = new Array(t).fill(0)), La(u.eventMarkers, e.eventMarkers.length > 0 ? e.eventMarkers : new Array(n).fill(0))), La(u.eventMarkerTimestamps, e.eventMarkerTimestamps), (u.lux.length > 0 || e.lux.length > 0) && (u.lux.length < t && (u.lux = new Array(t).fill(NaN)), La(u.lux, e.lux.length > 0 ? e.lux : new Array(n).fill(NaN))), (u.sleepScores.length > 0 || e.sleepScores.length > 0) && (u.sleepScores.length < t && (u.sleepScores = new Array(t).fill(0)), La(u.sleepScores, e.sleepScores.length > 0 ? e.sleepScores : new Array(n).fill(0))), (u.sleepScoreGaps.length > 0 || e.sleepScoreGaps.length > 0) && (u.sleepScoreGaps.length < t && (u.sleepScoreGaps = new Array(t).fill(0)), La(u.sleepScoreGaps, e.sleepScoreGaps.length > 0 ? e.sleepScoreGaps : new Array(n).fill(0))), (u.lstmTimestamps30s.length > 0 || e.lstmTimestamps30s.length > 0) && (u.lstmTimestamps30s = Ea(u.lstmTimestamps30s, e.lstmTimestamps30s), u.lstmSleepWake30s = Ta(u.lstmSleepWake30s, e.lstmSleepWake30s)), ja(u, e, t, n), (u.ggirTimestamps.length > 0 || e.ggirTimestamps.length > 0) && (u.ggirSib = Da(u.ggirTimestamps, u.ggirSib, e.ggirTimestamps, e.ggirSib), u.ggirTimestamps = Ea(u.ggirTimestamps, e.ggirTimestamps), u.ggirEnmo = Ea(u.ggirEnmo, e.ggirEnmo), u.ggirAnglez = Ea(u.ggirAnglez, e.ggirAnglez));
		}
		u.ggirSib = $a(u.ggirTimestamps, u.ggirSib);
		const { start: h, end: g } = await bi(t, 48 === n?.viewHours ? 48 : void 0, o), y = Ya(r?.sourceType, r?.sourceProfileId);
		let w = [];
		ma(y) ? w = (await Zt(e, h, g, a)).map((e) => ({
			startTimestamp: e.startTimestamp,
			endTimestamp: e.endTimestamp
		})) : "detach_mask" === Wa(y) && u.detachNonwear && (w = Hm(u.detachNonwear, u.timestamps));
		const _ = {};
		for (const [k, I] of Object.entries(u.nonwearMasksByDetector)) 0 !== I.length && (wi(k) || (_[k] = I));
		const v = m.flatMap((e) => e.ggirTimestamps?.byteLength ? [e.ggirInvalid] : []);
		if (v.length > 0 && v.every((e) => void 0 !== e)) {
			const e = v.flatMap((e) => Array.from(new Uint8Array(e)));
			e.length === u.ggirTimestamps.length && (_[ct.ggir_part2_invalid] = e);
		}
		Rt(u.timestamps, Ym(m, "count_sleep_wake")), Rt(u.ggirTimestamps, Ym(m, "ggir_sleep_period"));
		const b = function(e, t, n, a) {
			const i = {}, r = e.filter((e) => Xm(e, "counts") > 0 || Xm(e, "ggir") > 0);
			for (const s of Zm(a)) {
				const e = Ka(s);
				if (!r.every((t) => t.displayNonwear && e in t.displayNonwear)) continue;
				const a = r.map((t) => t.displayNonwear[e] ?? null), o = a.filter((e) => null !== e), c = o[0]?.grid;
				if (!c) {
					i[e] = null;
					continue;
				}
				if (o.some((e) => e.grid !== c)) continue;
				const l = o.some((e) => null !== e.weight), u = [], d = [];
				if (r.forEach((e, t) => {
					const n = a[t], i = n ? new Uint8Array(n.any) : new Uint8Array(Xm(e, c));
					for (const a of i) u.push(a);
					if (l) for (const a of n?.weight ? new Float64Array(n.weight) : i) d.push(a);
				}), u.length !== ("counts" === c ? t : n)) continue;
				const p = new Set(o.flatMap((e) => e.detectors));
				i[e] = {
					detectors: s.filter((e) => p.has(e)),
					mask: u,
					weight: l ? d : null,
					grid: c
				};
			}
			return i;
		}(m, u.timestamps.length, u.ggirTimestamps.length, r ?? null);
		Object.keys(b).length < Zm(r ?? null).length && Km(e, a);
		const S = await Oa(u, m, l, r);
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
			...u.ggirTimestamps.length > 0 && 0 === u.ggirSib.length ? { ggirSibMissingReason: Ba(r, c) } : {},
			algorithmResults: u.sleepScores.length > 0 ? u.sleepScores : null,
			...u.sleepScoreGaps.length > 0 ? { algorithmResultGaps: u.sleepScoreGaps } : {},
			...n?.algorithm && !Ma(n.algorithm) && 0 === u.sleepScores.length && u.timestamps.length > 0 ? { scorerMissingReason: "stale" === l.status ? l.reason : Fa(n.algorithm, {
				sourceProfileId: r?.sourceProfileId,
				scorerSettingsStored: await Xf(this.sourceAnalyses, r, "hasScorerSettings")?.hasScorerSettings(e, a)
			}) } : {},
			lstmTimestamps30s: u.lstmTimestamps30s,
			lstmSleepWake30s: u.lstmSleepWake30s,
			nonwearResults: u.nonwearResults,
			nonwearResultsChoi2011: u.nonwearResultsChoi2011,
			vanHeesNonwear: u.vanHeesNonwear,
			algorithmicNonwearMasks: _,
			nonwearBands: b,
			...s ? { nonwearSourceLabels: { [ct.ggir_saved]: s } } : {},
			...i ? { savedNonwearMissingReason: i } : {},
			epochResolutions: S,
			viewStart: h,
			viewEnd: g,
			sensorNonwearPeriods: w,
			deviceNonwearSource: y
		};
	}
	async loadMarkers(e, t, n, a, i, r) {
		const s = r ?? X(), o = await Ie(e, t, n, a, i, s);
		return o ? Zh(o) : null;
	}
	async saveMarkers(e, t, n, a, i, r, s, o, c) {
		const l = o ?? X(), u = E().scoring(), d = Gm(l, {
			username: n,
			studyId: u.selectedStudyId
		}, {
			fileId: e,
			analysisDate: t
		}, c), p = s?.signal ?? this.fileBatch(e, l)?.signal;
		let f, m = null, h = null, g = !1, y = s?.sleepPeriodDetection ?? u.sleepPeriodDetection;
		const w = await Ln({
			fileId: e,
			date: t,
			username: n,
			algorithm: i ?? null,
			detectionRule: r ?? null,
			signal: p
		}, l, async (o) => {
			const c = "function" == typeof a ? await a(o ? Zh(o) : null) : {
				data: a,
				settings: s
			};
			if (!c) return null;
			m = c.data;
			const d = c.settings ?? s, w = f = await Ve(e, l);
			m = {
				...m,
				sleepMarkers: await this.nightRecordData[Ze(w, u.analysisParadigm)].sleepPeriodsToSave({
					fileId: e,
					date: t,
					isInvalidNight: m.isInvalidNight ?? o?.isInvalidNight ?? !1
				}, m.sleepMarkers, l)
			}, y = ft({
				algorithm: i ?? "",
				sleepPeriodDetection: d?.sleepPeriodDetection ?? u.sleepPeriodDetection
			});
			const _ = y ? Mn(y) : null, v = void 0 === d?.periodGuider ? _n(u, w) : null, b = d?.periodGuider ?? v?.periodGuider, S = d?.periodGuider ?? (_ && !0 !== v?.placementFromSource ? Je(ge(_)) : v?.periodGuider), k = i ? ue(i) : null, I = k ? Nt(k) : null, A = await Ie(e, t, n, i ?? null, r ?? null, l);
			g = !A || A.algorithm !== (i ?? null) || A.detectionRule !== (r ?? null) || JSON.stringify(A.sleepMarkers) !== JSON.stringify(m.sleepMarkers) || void 0 !== m.isInvalidNight && m.isInvalidNight !== A.isInvalidNight, h = void 0 !== m.nonwearMarkers && "auto_score" !== n ? Dh(A?.nonwearMarkers) : null;
			let x = m.sleepPeriodDetectionConfig ?? null;
			if (null === x) {
				const n = await lt(e, t, l);
				x = bt({
					algorithm: i ?? null,
					periodGuider: bo(0, b, y),
					sleepPeriodDetection: y,
					diaryOnsetTime: on(n),
					diaryWakeTime: Pt(n)
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
					detectionRule: r ?? null,
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
		const _ = m, v = Zh(w.record), b = {
			fileId: e,
			file: f,
			nights: /* @__PURE__ */ new Map([[t, _.sleepMarkers]]),
			sleepMarkersChanged: g,
			username: n,
			analysisParadigm: E().scoring().analysisParadigm,
			db: l,
			signal: p,
			openBatch: () => this.fileBatch(e, l)
		};
		if (await this.sourceAnalyses.reduce(async (e, t, n) => !!(await e || n > 0 && p?.aborted) || (Yf(t, f, "followSavedNights") && await t.followSavedNights(b), !1), Promise.resolve(!1))) return v;
		null !== h && h !== Dh(_.nonwearMarkers) && jh(e, l, void 0, p), g && Ie(e, t, n, i ?? null, r ?? null, l).then(async (t) => {
			if (!t) return;
			const { storeNightPeriodMetrics: n } = await import("./local-export-shard-worker-SpuZhuag.js").then((e) => e.R);
			return n(t, await this.scorerVerdict(l, e, t.algorithm), l, p);
		}).catch(() => {
			console.warn("[local-analysis] period metrics could not be stored with the saved night");
		});
		try {
			if (X() !== l) return v;
		} catch {
			return v;
		}
		const S = jt();
		if (!S.capabilities.tauri) return v;
		try {
			const [a, s] = await Promise.all([Ve(e, l), Ie(e, t, n, i ?? null, r ?? null, l)]);
			if (!a?.fileHash || !s?.contentHash) return v;
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
				nonwearMarkers: rh(s.nonwearMarkers),
				isInvalidNight: s.isInvalidNight,
				notes: _.notes,
				contentHash: s.contentHash
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
			const t = e.id ?? 0, n = Z(e);
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
		const n = X(), a = await lt(e, t, n);
		return a ? Ke(a, await St(e, n)) : null;
	}
	async listDiaryEntries(e) {
		const t = X(), n = await Te(e, t);
		if (0 === n.length) return n;
		const a = await St(e, t);
		return null === a ? n : ye(n, a);
	}
	async loadPlacementFileContext(e, t, n, a, i, r, s, o, c, l, u, d = this.fileBatch(e, r)) {
		if (!d) return this.readPlacementFileContext(e, t, a, i, r, s, o, c, l, u, null);
		const p = JSON.stringify([
			n ?? null,
			s,
			o,
			c,
			i,
			l
		]);
		let f = d.placementContexts.get(p);
		f || (f = this.readPlacementFileContext(e, null, a, i, r, s, o, c, l, u, d), d.placementContexts.set(p, f), f.catch(() => {
			d.placementContexts.delete(p);
		}));
		const { contextDays: m, deviceOffNonwear: h } = await f;
		return {
			contextDays: m.filter((e) => e.analysisDate !== t),
			deviceOffNonwear: h
		};
	}
	async readPlacementFileContext(e, t, n, a, i, r, s, o, c, l, u) {
		const d = J(l), [p, f, m, h] = await Promise.all([
			u?.days ? [...u.days.keys()].sort() : mt(e, i),
			this.placementDiaries(e, i, u),
			vh(r) ? vt(e, i) : An(e, i),
			i.files.get(e)
		]), g = await ye(f, a, d), y = new Map(g.map((e) => [e.analysisDate, e])), w = [], _ = p.filter((e) => e !== t), v = await Promise.all(_.map((t) => this.placementDay(e, t, i, u)));
		for (const [b, S] of _.entries()) {
			const e = v[b];
			if (!e) continue;
			for (const n of r) await Us(e, n, c, i, d, l, u?.activityDayMemo);
			const t = await Ra(e, n, `autoScore context ${S}`, c, d);
			if (!t || 0 === t.timestamps.length || 0 === t.sleepScores.length) continue;
			const a = y.get(S), p = t.timestamps[0] ?? 0, f = t.timestamps[t.timestamps.length - 1] ?? p, g = await ce(t.timestamps, tn({
				day: e,
				file: h
			}), d), _ = _h(va(await fa(r, t.nonwearMasksByDetector, {
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
				diaryBedTime: zt(a),
				diaryOnsetTime: on(a),
				diaryWakeTime: Pt(a),
				diaryNaps: a ? yt(a) : null,
				diaryNonwear: a ? Tn(a) : null
			});
		}
		return {
			contextDays: w,
			deviceOffNonwear: m
		};
	}
	async autoScore(e, t, n, a) {
		const i = a ?? X();
		if (this.fileBatch(e, i)) return this.autoScoreNight(e, t, n, Ao, i);
		const r = {}, s = await Et(e, i, r), o = {
			db: i,
			signal: n.signal,
			depth: 0,
			savedNights: /* @__PURE__ */ new Map(),
			placementContexts: /* @__PURE__ */ new Map(),
			activityDayMemo: r,
			span: Promise.resolve(gh(s))
		};
		return this.autoScoreNight(e, t, n, Ao, i, void 0, void 0, void 0, o);
	}
	async autoScoreFile(e, t, n = !0, a = X(), i) {
		if (U(a.name)) return /* @__PURE__ */ new Map();
		const r = await this.filePlacementState(e, t, a);
		if (!r) return /* @__PURE__ */ new Map();
		const { file: s, inputs: o, cached: c } = r, l = je(s);
		return l ? new Map(s.availableDates.map((e) => [e, {
			kind: "refused",
			reason: l
		}])) : c ? Lh(a, e, o, c, t.signal) : n ? Q({
			kind: V.AUTO_SCORE,
			key: `${V.AUTO_SCORE}:${String(e)}:${o}`,
			label: "Compute marker placement",
			workspaceId: a.name,
			signal: t.signal,
			run: async (n) => {
				const c = i?.inputs === o ? i.byDate : await this.computeFilePlacement(r, t, a, n);
				return await this.storeFilePlacement(e, o, c, a, {
					...t,
					signal: n.signal
				}) ? (n.progress(s.availableDates.length, s.availableDates.length), Lh(a, e, o, c, n.signal)) : /* @__PURE__ */ new Map();
			}
		}) : /* @__PURE__ */ new Map();
	}
	async filePlacementState(e, n, a) {
		const i = await Ve(e, a), r = Bh.get(a)?.get(e), [s, o, c] = await Promise.all([
			Te(e, a),
			a.markerProvenance.get(e),
			r ? void 0 : Sh(a, e)
		]);
		if (!i) return null;
		const l = await z.waitFor(async function(e, n, a, i) {
			const r = E().scoring(), s = n.ruleset ?? r.placementRuleset, o = /* @__PURE__ */ new Set([A.VAN_HEES_2015, ...n.algorithm && Ma(n.algorithm) ? [n.algorithm] : []]), c = (e) => "auto_score" === e.username && o.has(e.algorithm ?? ""), l = (i?.rows ?? []).filter((e) => c(e) || s !== t.LEGACY && e.nonwearDecided).map((e) => [e.id, c(e) ? e.lastModifiedAt : e.nonwearSpans ?? e.lastModifiedAt]), { signal: u, choiAxis: d, hasptVariant: p, studySettingsRevision: f, ...m } = n;
			return ae(JSON.stringify({
				v: 2,
				options: m,
				ruleset: s,
				nonwearDetectors: n.nonwearDetectors ?? la(xa(n.algorithm)),
				choiAxis: n.choiAxis ?? r.choiAxis,
				hasptVariant: n.hasptVariant ?? r.ggirHasptVariant,
				seriesRevision: e.seriesRevision ?? 0,
				dates: e.availableDates,
				diaries: a,
				rows: l
			}));
		}(i, n, s, o));
		if (r?.inputs === l) return {
			fileId: e,
			file: i,
			diaries: s,
			inputs: l,
			cached: r.byDate
		};
		const u = r ? await Sh(a, e) : c;
		return {
			fileId: e,
			file: i,
			diaries: s,
			inputs: l,
			cached: u?.inputs === l ? new Map(Object.entries(u.byDate)) : null
		};
	}
	async storeFilePlacement(e, t, n, a, i) {
		if (i.signal?.throwIfAborted(), U(a.name)) return !1;
		const r = await B(a, [
			a.files,
			a.diaryEntries,
			a.markerProvenance,
			a.placementResults,
			a.studySettings
		], async () => {
			if (void 0 !== i.studySettingsRevision && ((await ve(a))?.contentHash ?? null) !== i.studySettingsRevision) return !1;
			const r = await this.filePlacementState(e, i, a);
			return !U(a.name) && r?.inputs === t && (await a.placementResults.put({
				fileId: e,
				policy: 2,
				inputs: t,
				byDate: Object.fromEntries(n)
			}), !0);
		}, i.signal);
		return r && X() === a && $e(e, a), r;
	}
	async storeFilesPlacement(e, t, n, i, r) {
		const s = [], o = await Promise.allSettled(e.map(({ fileId: e, options: n }) => this.filePlacementState(e, n, t))), c = {
			cores: navigator.hardwareConcurrency,
			deviceMemoryGib: O()
		}, l = o.flatMap((e) => "fulfilled" === e.status && e.value ? [e.value.file] : []), u = l.flatMap((e) => "ggir_part1" === f(e.sourceType)?.importWorkerBudget ? [{ size: e.sourceSizeBytes ?? 0 }] : []), d = u.length > 0 && u.length === l.length ? function(e, t) {
			return {
				...t,
				maxExtraWorkers: Number.POSITIVE_INFINITY,
				workerMemoryGib: (n = e.reduce((e, t) => Math.max(e, t.size), 0), .25 * Math.max(1, n / 968617))
			};
			var n;
		}(u, c) : {
			...c,
			maxExtraWorkers: Number.POSITIVE_INFINITY
		}, p = await Bi(e.map(({ fileId: e, options: i }, c) => ({
			name: `placement:${String(e)}`,
			cost: 1,
			run: async (l, u) => {
				try {
					const s = new a(), u = o[c];
					if ("rejected" === u.status) throw u.reason;
					const d = u.value;
					if (!d || d.cached) return null;
					const p = await s.computeFilePlacement(d, i, t, n, l, r);
					return {
						fileId: e,
						inputs: d.inputs,
						byDate: p
					};
				} catch {
					return n.signal.throwIfAborted(), u.primary || u.cancel(), s.push(e), null;
				}
			}
		})), {
			createWorker: H,
			extraWorkers: Pi(d),
			cancelOperation: () => {},
			...i,
			signal: n.signal
		});
		for (const [a, f] of p.entries()) {
			try {
				f && await this.storeFilePlacement(f.fileId, f.inputs, f.byDate, t, e[a].options) && Lh(t, f.fileId, f.inputs, f.byDate, n.signal);
			} catch {
				n.signal.throwIfAborted(), s.push(e[a].fileId);
			}
			n.progress(a + 1, p.length);
		}
		if (s.length > 0) {
			const e = `Marker placement failed for recording ID(s) ${s.sort((e, t) => e - t).map(String).join(", ")}.`;
			throw n.progress(p.length, p.length, e), new Error(e);
		}
	}
	async storedAutoScore(e, t, n) {
		return (await this.autoScoreFile(e, n, !1)).get(t) ?? {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
	}
	async computeFilePlacement(e, t, n, a, i, r) {
		const s = e.fileId, o = e.file.availableDates, c = {
			...t,
			signal: a.signal
		};
		return cn(async (l) => {
			const u = await Et(s, n, l), d = r ?? (await Vs(n)).csvText, p = void 0 !== i && Ma(t.algorithm), f = [];
			let m, g = o.length;
			const y = new Promise((e) => {
				m = e;
			}).then(async () => {
				if (0 !== f.length) try {
					a.signal.throwIfAborted();
					const e = f.map((e) => e.opts), n = p && i ? await i.placeStoredGgirNights([...u.values()], st([...u.values()], t.algorithm), f.map((e) => ({
						options: e.opts,
						...e.anchor
					}))) : await function(e, t = h()) {
						return En(e, t);
					}(e, i ?? J(a.signal));
					a.signal.throwIfAborted();
					for (const [t, a] of f.entries()) a.resolve(n[t]);
				} catch (bd) {
					for (const t of f) t.reject(bd);
				}
			}), w = this.beginFileBatch(s, n, a.signal), _ = this.fileBatch(s, n), v = {
				activityDayMemo: _.activityDayMemo,
				days: _.days,
				span: _.span,
				file: _.file,
				diaries: _.diaries,
				markers: _.markers
			};
			_.activityDayMemo = l, _.days = u, _.span = Promise.resolve(gh(u)), _.file = Promise.resolve(e.file), _.diaries = Promise.resolve(e.diaries);
			try {
				0 === o.length && m();
				const e = await Promise.all(o.map(async (e) => {
					let t = !1;
					const a = () => {
						t || (t = !0, g -= 1, 0 === g && m());
					};
					try {
						return [e, await this.autoScoreNight(s, e, c, (e) => new Promise((t, n) => {
							f.push({
								opts: e,
								resolve: t,
								reject: n
							}), a();
						}), n, d, i, p ? (e, t, n) => new Promise((i, r) => {
							f.push({
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
	async autoScoreNight(e, n, a, i, r = X(), s, o, l, u) {
		const d = o ?? J(a.signal);
		a.signal?.throwIfAborted();
		const p = u ?? this.fileBatch(e, r), f = await (p ? p.file ??= Ve(e, r) : Ve(e, r)), m = je(f);
		if (m) return {
			kind: "refused",
			reason: m
		};
		const h = a.ruleset ?? E().scoring().placementRuleset, g = xa(a.algorithm), y = a.nonwearDetectors ?? la(g), w = a.choiAxis ?? E().scoring().choiAxis, _ = a.sleepPeriodDetection ? Mn(a.sleepPeriodDetection) : void 0;
		let v = oa(_, {
			path: g,
			selected: y
		}) ?? null;
		const b = await Pa(e, n, r, (t) => this.placementDay(e, t, r, p), void 0, d);
		if (!b) return {
			kind: "refused",
			reason: "No activity data in IndexedDB"
		};
		if ("vendor_analysis" === $.find((e) => e.id === a.algorithm)?.execution) {
			const t = {
				fileId: e,
				date: n,
				file: f,
				options: a,
				sleepPeriodDetectionConfig: v,
				db: r,
				batch: p
			}, i = await this.sourceAnalyses.reduce(async (e, n) => await e ?? n.proposeNight?.(t) ?? null, Promise.resolve(null));
			if (i) return i;
		}
		const S = await this.placementDay(e, await Na(n, void 0, d), r, p), k = Ya(f?.sourceType, f?.sourceProfileId), I = await yh([b, S], y, w, k, r, a.signal, p?.activityDayMemo), x = await this.scorerVerdict(r, e, a.algorithm, { file: f }, p), T = Ma(a.algorithm), N = T && l ? { kind: "angle-deferred" } : await Ca({
			day: b,
			nextDay: S,
			verdict: x,
			angle: T,
			requireScores: !0,
			missingScoresReason: a.algorithm === A.LSTM_SLEEP_WAKE ? "No LSTM sleep/wake results are stored for this file. Re-import or reprocess the raw file so the app can compute spectral features and run the ONNX model." : "No algorithm results available",
			choiAxis: w,
			laterDays: async () => [...(p?.days ?? await Et(e, r, p?.activityDayMemo)).values()].filter((e) => e.date > n).sort((e, t) => e.date.localeCompare(t.date)),
			core: d
		});
		if ("refused" === N.kind) return N;
		const M = T ? null : wh(I);
		if (null !== M) return {
			kind: "refused",
			reason: M
		};
		v = oa(_, {
			path: g,
			selected: y,
			available: I.available,
			dropped: I.dropped
		}) ?? null;
		const R = pa(I.dropped, g), z = (e) => "refused" === e.kind || null === v && 0 === R.length ? e : {
			...e,
			notes: [...R, ...e.notes],
			sleep_period_detection_config: {
				...e.sleep_period_detection_config ?? {},
				...v ?? {}
			}
		};
		if ("angle" === N.kind || "angle-legacy" === N.kind || "angle-deferred" === N.kind) {
			const o = await this.placementMarker(e, n, a.algorithm ?? null, r, p) ?? await this.placementMarker(e, n, A.VAN_HEES_2015, r, p), u = o?.sleepMarkers[0], m = null != u?.onsetTimestamp && null != u.offsetTimestamp ? {
				startTimestamp: u.onsetTimestamp,
				endTimestamp: u.offsetTimestamp
			} : null, g = () => u && null != u.onsetTimestamp && null != u.offsetTimestamp ? {
				kind: "placed",
				sleep_markers: [{
					onset_timestamp: u.onsetTimestamp,
					offset_timestamp: u.offsetTimestamp,
					marker_type: c.MAIN_SLEEP,
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
			if ("angle" === N.kind || "angle-deferred" === N.kind) {
				let c = {
					timestamps: /* @__PURE__ */ new Float64Array(),
					activityCounts: /* @__PURE__ */ new Float64Array(),
					sleepScores: /* @__PURE__ */ new Uint8Array()
				};
				if ("angle" === N.kind) {
					const e = await Ga(N, n, d);
					if ("refused" === e.kind) return e;
					c = e.series;
				}
				const [u, y] = await Promise.all([this.placementDiary(e, n, r, p), p ? p.span ??= St(e, r, f?.seriesRevision ?? 0) : St(e, r, f?.seriesRevision ?? 0)]), w = u ? await Ke(u, y, d) : null, _ = (await xo(a.sensorLocation ?? "wrist", a.hasptVariant ?? E().scoring().ggirHasptVariant, d)).variant, v = function(e) {
					const t = e?.sleepPeriodDetectionConfig?.haspt_variant;
					return Object.values(dt).includes(t) ? t : null;
				}(o), k = null == o ? null : null == v ? `HASPT variant not recorded at import; assumed ${_} from the study setting. Reprocess the file to record it.` : v !== _ ? `HASPT variant at import was ${v}; the study setting now gives ${_}. Placed with ${v}; reprocess the file to apply ${_}.` : null, I = h === t.GGIR_PART4, A = I ? await Pn(await this.placementDiaries(e, r, p), void 0, d) : null, x = A?.wakeIsOutBed ? null : Ot(w, A?.outBedIsWake ? "diary_out_of_bed_time" : "diary_wake_time"), T = A?.outBedIsWake ? null : Ot(w, A?.wakeIsOutBed ? "diary_wake_time" : "diary_out_of_bed_time"), M = {
					...c,
					choiNonwear: null,
					ggirHasptAlgo: v ?? _,
					ggirConfigCsv: s ?? (await Vs(r)).csvText,
					...A?.hasBedlog ? { ggirDiaryHasBedlog: !0 } : {},
					...A?.hasSleeplog ? { ggirDiaryHasSleeplog: !0 } : {},
					diaryBedTime: I ? Ot(w, "diary_in_bed_time") : zt(w),
					diaryOutBedTime: I ? T : Yt(w),
					diaryOnsetTime: I ? Ot(w, "diary_onset_time") : on(w),
					diaryWakeTime: I ? x : Pt(w),
					diaryNaps: w ? yt(w) : null,
					analysisDate: n,
					onsetMinConsecutiveSleep: 1,
					offsetMinConsecutiveMinutes: 1,
					algorithm: a.algorithm,
					periodGuider: bo(a.algorithm, a.periodGuider, a.sleepPeriodDetection),
					...void 0 !== a.sleepPeriodDetection ? { sleepPeriodDetection: a.sleepPeriodDetection } : {},
					...a.scorerPostprocessing ? { scorerPostprocessing: a.scorerPostprocessing } : {},
					ruleset: h,
					epochLengthSeconds: 5,
					guiderWindows: m ? { hdcza: m } : {}
				}, $ = "angle-deferred" === N.kind ? await l(M, b, S) : await i(M);
				return "angle-legacy" === $ ? g() : z(k && "refused" !== $.kind ? {
					...$,
					notes: [k, ...$.notes]
				} : $);
			}
			return g();
		}
		const [D, C] = await Promise.all([this.placementDiary(e, n, r, p), p ? p.span ??= St(e, r, f?.seriesRevision ?? 0) : St(e, r, f?.seriesRevision ?? 0)]), O = D ? await Ke(D, C, d) : null, { unpacked: P } = N, { timestamps: F, axisY: j, sleepScores: B, eventMarkerTimestamps: L } = P, G = Ce(a.detectionRule), U = bo(a.algorithm, a.periodGuider, a.sleepPeriodDetection), Z = await be(gs, {
			fileId: e,
			file: f,
			date: n,
			db: r,
			batch: p,
			autoScoreMarker: (t) => this.placementMarker(e, n, t, r, p)
		}), H = await ce(F, tn({
			day: b,
			file: f
		}), d), q = I.available.some(ma) ? await (p ? p.sensor ??= Fe(e, r) : Fe(e, r)) : [], V = _h(va(await fa(I.available, P.nonwearMasksByDetector, {
			offPeriods: q,
			source: k
		}, {
			timestampsSec: F,
			epochLenSec: H
		}, d))), W = h !== t.LEGACY ? await this.loadPlacementFileContext(e, n, a.algorithm, x, C, r, I.available, q, k, w, a.signal, p) : null, { startIndex: K, endIndex: Y } = await Za(F, n, d);
		if (K === Y) return {
			kind: "refused",
			reason: "No activity data found for this date"
		};
		const Q = F.slice(K, Y), ee = j.slice(K, Y), te = B.slice(K, Y), ne = V.choiNonwear ? V.choiNonwear.slice(K, Y) : null, ae = V.nonwearWeight ? V.nonwearWeight.slice(K, Y) : null, ie = V.nonwearMemberFlags ? V.nonwearMemberFlags.slice(K, Y) : null, re = Q[0] ?? 0, se = Q[Q.length - 1] ?? re;
		return z(await i({
			timestamps: Q,
			activityCounts: ee,
			sleepScores: te,
			choiNonwear: ne,
			...ae ? { nonwearWeight: ae } : {},
			...ie ? { nonwearMemberFlags: ie } : {},
			diaryBedTime: zt(O),
			diaryOnsetTime: on(O),
			diaryWakeTime: Pt(O),
			diaryNaps: O ? yt(O) : null,
			diaryNonwear: O ? Tn(O) : null,
			analysisDate: n,
			onsetMinConsecutiveSleep: G.onsetN,
			offsetMinConsecutiveMinutes: G.offsetN,
			algorithm: a.algorithm,
			periodGuider: U,
			...void 0 !== a.sleepPeriodDetection ? { sleepPeriodDetection: a.sleepPeriodDetection } : {},
			...a.scorerPostprocessing ? { scorerPostprocessing: a.scorerPostprocessing } : {},
			ruleset: h,
			nonwearDetectors: V.nonwearDetectors,
			epochLengthSeconds: H,
			guiderWindows: Z,
			eventMarkerTimestamps: L.filter((e) => e >= re && e <= se + 60),
			nightStartHour: ht(a.nightStartHour),
			nightEndHour: ht(a.nightEndHour),
			...W ? {
				sensorNonwear: W.deviceOffNonwear.filter((e) => e.startTimestamp <= se && e.endTimestamp >= re),
				contextDays: W.contextDays
			} : {}
		}));
	}
	async autoNonwear(e, t, a) {
		if (void 0 === a.threshold) throw new Error("Local auto-nonwear requires a resolved nonwear threshold.");
		const i = X(), r = await Pa(e, t, i, (t) => xt(e, t, i, this.fileBatch(e, i)?.activityDayMemo));
		if (!r) return {
			kind: "refused",
			reason: "No activity data"
		};
		const [s, o, c, l] = await Promise.all([
			xt(e, await Na(t), i, this.fileBatch(e, i)?.activityDayMemo),
			lt(e, t, i),
			Fe(e, i),
			Ve(e, i)
		]), u = E().scoring(), p = _n(u, l), f = a.nonwearDetectors ?? ("ggir" === xa(p.algorithm) ? u.nonwearDetectorsGgir : p.nonwearDetectorsCounts), m = Ya(l?.sourceType, l?.sourceProfileId), g = await yh([r, s], f, Ia(), m, i, void 0, this.fileBatch(e, i)?.activityDayMemo), y = wh(g);
		if (null !== y) return {
			kind: "refused",
			reason: y
		};
		const w = await Ca({
			day: r,
			nextDay: s,
			verdict: at,
			angle: !1,
			requireScores: !1,
			missingScoresReason: "",
			choiAxis: Ia(),
			laterDays: () => Promise.resolve([])
		});
		if ("counts" !== w.kind) return {
			kind: "refused",
			reason: "refused" === w.kind ? w.reason : za
		};
		const _ = w.unpacked, { timestamps: v, axisY: b } = _, S = v[0] ?? 0, k = v[v.length - 1] ?? S, I = va(await fa(g.available, _.nonwearMasksByDetector, {
			offPeriods: c.filter((e) => e.startTimestamp <= k && e.endTimestamp >= S),
			source: m
		}, {
			timestampsSec: v,
			epochLenSec: await pt(v, {
				day: r,
				file: l
			})
		})), A = _h(I), x = vh(g.available), T = o ? Tn(o) : [], N = a.existingSleepMarkers, M = await async function(e) {
			if (0 === e.timestamps.length || 0 === e.activityCounts.length) return On("No activity data");
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
			], i = a.slice(1).filter((t) => ArrayBuffer.isView(t) && t !== e.timestamps && t !== e.activityCounts && t !== e.choiNonwear), r = await h().placeNonwearMarkers(d(a, i.map((e) => e.buffer)));
			return r ? {
				kind: "placed",
				nonwear_markers: r.nonwear_markers,
				notes: r.notes
			} : On("Nonwear placement is unavailable in this build — reload while online to update the local engine.");
		}({
			timestamps: v,
			activityCounts: b,
			diaryNonwear: T,
			choiNonwear: x ? null : A.choiNonwear,
			nonwearDetectors: A.nonwearDetectors,
			...A.nonwearWeight ? { nonwearWeight: A.nonwearWeight } : {},
			...A.nonwearMemberFlags ? { nonwearMemberFlags: A.nonwearMemberFlags } : {},
			sensorNonwearPeriods: x ? c.filter((e) => e.startTimestamp <= k && e.endTimestamp >= S).sort((e, t) => e.startTimestamp - t.startTimestamp).map((e) => [e.startTimestamp, e.endTimestamp]) : [],
			existingSleepMarkers: N,
			analysisDate: t,
			threshold: a.threshold
		});
		return "refused" === M.kind ? M : {
			kind: "placed",
			nonwear_markers: M.nonwear_markers.map((e) => da(e, I?.available.length ?? 0)),
			notes: [...pa(g.dropped, xa(p.algorithm)), ...M.notes]
		};
	}
	async listFileScoringCounts(e, t, n) {
		return this.fileScoringCountsIn(X(), e, t, n);
	}
	async fileScoringCountsIn(e, t, n, a) {
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const { nightStartHour: i, nightEndHour: r } = Ch(a), [s, o] = await Promise.all([e.files.bulkGet([...t]), we(t, e)]);
		return Promise.all(t.map(async (t, a) => {
			const c = s[a], l = c?.availableDates ?? await mt(t, e), u = /* @__PURE__ */ new Map();
			for (const e of o[a]?.rows ?? []) e.username === n && u.set(e.date, Kt(u.get(e.date), e));
			const d = c?.nightDifficulty, p = d?.nightStartHour === i && d.nightEndHour === r;
			return {
				file_id: t,
				scored_dates: l.filter((e) => u.get(e)?.scored ?? !1).length,
				nonwear_scored_dates: l.filter((e) => u.get(e)?.nonwearDecided ?? !1).length,
				total_dates: l.length,
				no_diary_dates: p ? l.filter((e) => -1 === d.byDate[e]).length : 0,
				no_diary_current: p
			};
		}));
	}
	async listDatesStatus(e, t, n, a) {
		return await this.storedDatesStatus(e, t, n, a) ?? await this.computeDatesStatus(e, t, n, a);
	}
	async storedDatesStatus(e, t, n, a) {
		const i = X(), r = (await Ve(e, i))?.nightDifficulty, { nightStartHour: s, nightEndHour: o } = Ch(a);
		if (r?.nightStartHour !== s || r.nightEndHour !== o || !t.every((e) => e in r.byDate)) return null;
		void 0 === r.notRankableReason && h().getComputeIdentity().then(({ sourceRevision: t }) => {
			r.sourceRevision !== String(t) && jh(e, i, a);
		}, () => {});
		const [c, l] = await Promise.all([he(e, i), Sh(i, e)]), u = yn(c, n), d = yn(c, et), p = At(c), f = t.filter((e) => (p.get(e)?.size ?? 0) >= 2), m = await Um(f.flatMap((e) => [{
			usersForDate: p.get(e),
			kind: "sleep"
		}, {
			usersForDate: p.get(e),
			kind: "nonwear"
		}])), g = new Set(f.filter((e, t) => m[2 * t].disagree || m[2 * t + 1].disagree));
		return t.map((e) => ({
			date: e,
			...Eh(u.get(e), g.has(e), d.get(e), bh(l, e, d.get(e))),
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
	async datesStatusGeneration(e, t, n, a, i, r) {
		r?.throwIfAborted();
		const s = J(r);
		if (this.disposed) throw new Error("This local data source is no longer active.");
		const o = X(), c = ++this.nextComplexityGenerationToken;
		let l, u;
		const d = new Promise((e, t) => {
			l = e, u = t;
		});
		d.catch(() => {}), this.latestComplexityTokenByFile.set(e, c), this.complexitySnapshotByFile.delete(e), this.complexitySignalGenerationByFile.delete(e), this.complexityFailureByFile.delete(e), this.complexityGenerationByFile.set(e, {
			token: c,
			promise: d
		});
		try {
			const u = async () => {
				const t = await he(e, o), [a, i, r, s, c] = await Promise.all([
					Et(e),
					Te(e),
					vt(e, o, t),
					ch(e, o),
					Ve(e)
				]);
				return [
					yn(t, n),
					yn(t, et),
					a,
					i,
					r,
					At(t),
					oh(t),
					s,
					c
				];
			}, [d, p, f, m, h, g, y, w, _] = "function" == typeof o.transaction ? await o.transaction("r", [
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
			}) : await u(), b = gh(f), S = new Map((await ye(m, b, s)).map((e) => [e.analysisDate, e])), { nightStartHour: k, nightEndHour: I } = Ch(a), A = t.filter((e) => (g.get(e)?.size ?? 0) >= 2), x = await Um(A.flatMap((e) => [{
				usersForDate: g.get(e),
				kind: "sleep"
			}, {
				usersForDate: g.get(e),
				kind: "nonwear"
			}]), s), T = new Set(A.filter((e, t) => x[2 * t].disagree || x[2 * t + 1].disagree)), N = await Sh(o, e), M = (e) => t.map((t) => ({
				date: t,
				...Eh(d.get(t), T.has(t), p.get(t), bh(N, t, p.get(t))),
				complexity_pre: e(t),
				complexity_post: null
			})), $ = _?.nightDifficulty;
			$?.nightStartHour === k && $.nightEndHour === I && t.every((e) => e in $.byDate) && (r?.throwIfAborted(), i(M((e) => $.byDate[e] ?? null)));
			const R = [], E = [...t], D = await Yi(E, s), C = new Map(E.map((e, t) => [e, D[t] ?? !1])), O = st(f.values()), P = /* @__PURE__ */ new Map();
			for (const n of t) {
				r?.throwIfAborted();
				const t = await mh(f, n, O, s, P);
				if (!t) continue;
				const { timestamps: a, axisY: i, sleepScores: o, nonwearResults: c, temperature: l, detachNonwear: u, ggirTimestamps: d, ggirAnglez: p } = t, m = kh(a, a.length), g = kh(i, m.length), v = Ih(o, m.length);
				if (0 === m.length || 0 === g.length || 0 === v.length) continue;
				const b = S.get(n), k = y.get(n) ?? null, I = await ke((t) => {
					const a = Dn(on(b), t), i = Dn(Pt(b), t);
					return {
						naps: b ? yt(b).map(([e, n]) => ({
							onset_time: Dn(e, t),
							offset_time: Dn(n, t)
						})).filter((e) => null != e.onset_time) : [],
						nonwear: b ? Tn(b).map(([e, n]) => [Dn(e, t), Dn(n, t)]).filter((e) => null != e[0] && null != e[1]).map(([e, t]) => ({
							start_time: e,
							end_time: t
						})) : [],
						onset: a,
						wake: i,
						inBed: Dn(zt(b), t),
						outBed: Dn(Yt(b), t),
						guiderTargets: xh(n, a, i, k, $n(e), t)
					};
				}, new Ut(s)), A = I.naps, x = I.nonwear, T = m[0] ?? 0, N = m[m.length - 1] ?? T, M = I.onset, $ = I.wake, E = w.get(n)?.calibration?.errorEnd;
				R.push({
					analysis_date: n,
					epoch_length_seconds: await ce(m, tn({
						day: f.get(n),
						file: _
					}), s),
					timestamps: m,
					activity_counts: g,
					sleep_scores: v,
					choi_nonwear: Ih(c, m.length),
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
					anglez: Ah(m, d, p),
					light: [],
					temperature: kh(l, m.length),
					heart_rate: [],
					detach_nonwear: Ih(u, m.length),
					calibration_error: "number" == typeof E && Number.isFinite(E) ? E : null,
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
					}, i = s, l = await i.getComputeIdentity(), u = await Dm({
						runtimeIdentity: l,
						difficultyRequestWireJson: tm(n),
						signalsRequestWireJson: am(n),
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
						for (const [i, r] of n.days.entries()) t[i + 1] = t[i] + r[e].length;
						const a = new ("sleep_scores" === e || "choi_nonwear" === e || "detach_nonwear" === e ? Uint8Array : Float64Array)(t[n.days.length]);
						for (const [i, r] of n.days.entries()) a.set(r[e], t[i]);
						return [a, t];
					}), f = [JSON.stringify({
						config: n.config,
						days: n.days.map((e) => Object.fromEntries(Object.entries(e).filter(([e]) => !d.includes(e))))
					}), ...p], m = await Lm(e, u.generationKey, o) ?? await Lm(e, (await Dm({
						runtimeIdentity: ph(l),
						difficultyRequestWireJson: u.difficultyRequestWireJson,
						difficultyRequestSha256: u.difficultyRequestSha256,
						signalsRequestWireJson: u.signalsRequestWireJson,
						signalsRequestSha256: u.signalsRequestSha256,
						sourceContentHash: u.sourceContentHash
					})).generationKey, o);
					if (m) F = {
						token: c,
						evidenceDb: o,
						coveredDates: [...new Set(t)].sort(),
						signalRequest: null == m.signalsByDate ? f : null,
						projectionInput: Mh(m),
						difficultyByDate: $h(m),
						signalsByDate: Rh(m),
						computeIdentity: m.runtimeIdentity,
						projectionRevision: Th(m),
						evidence: Nh(m)
					};
					else {
						r?.throwIfAborted();
						const d = Fh(o, u.generationKey, r, () => s.computeFileDifficulty(f));
						j = d.release;
						const p = await d.run;
						if (r?.throwIfAborted(), !fh(l, await i.getComputeIdentity())) throw new Error("The local scoring runtime changed while difficulty was being computed. Re-run the calculation.");
						if (hh(p.byDate, n.days)) {
							const n = await async function(e) {
								try {
									(!Number.isInteger(e.fileId) || e.fileId <= 0) && um();
									const t = await async function(e) {
										"sleep-scoring.complexity-evidence.v1" === e.evidenceContractId && "actours.computeNightDifficulty" === e.difficultyMethodId && "actours.computeNightSignals" === e.signalsMethodId && "FileDifficultyRequest" === e.requestContractId || um(), null !== e.sourceContentHash && dm(e.sourceContentHash), gm(e.runtimeIdentity), "string" == typeof e.difficultyRequestWireJson && "string" == typeof e.signalsRequestWireJson || um(), dm(e.difficultyRequestSha256), dm(e.signalsRequestSha256), await ym(e.difficultyRequestWireJson, e.difficultyRequestSha256), await ym(e.signalsRequestWireJson, e.signalsRequestSha256);
										const t = Rm(e.difficultyRequestWireJson, e.signalsRequestWireJson);
										dm(e.generationKey);
										const { generationKey: n, ...a } = e;
										return await zm(a) !== e.generationKey && um(), t;
									}(e.identity), n = mm(e.projectionInput), a = mm(e.difficultyByDate), i = null == e.signalsByDate ? null : mm(e.signalsByDate);
									Em(t, n, a, i);
									const r = await hm(n), s = await hm(a), o = null === i ? null : await hm(i);
									Om(r, e.expectedHashes?.projectionSha256), Om(s, e.expectedHashes?.difficultyResultSha256), Om(o, e.expectedHashes?.signalsResultSha256);
									const c = (/* @__PURE__ */ new Date()).toISOString(), l = e.createdAt ?? c, u = e.updatedAt ?? l;
									pm(l), pm(u), Date.parse(u) < Date.parse(l) && um();
									const d = {
										fileId: e.fileId,
										generationKey: e.identity.generationKey,
										evidenceContractId: e.identity.evidenceContractId,
										difficultyMethodId: e.identity.difficultyMethodId,
										signalsMethodId: e.identity.signalsMethodId,
										requestContractId: e.identity.requestContractId,
										sourceContentHash: e.identity.sourceContentHash,
										runtimeIdentity: mm(e.identity.runtimeIdentity),
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
										createdAt: l,
										updatedAt: u
									}, p = await Cm(d);
									return Om(p, e.expectedHashes?.recordSha256), {
										...d,
										recordSha256: p
									};
								} catch (bd) {
									if (bd instanceof om) throw bd;
									return um();
								}
							}({
								fileId: e,
								identity: u,
								projectionInput: a,
								difficultyByDate: p.byDate,
								signalsByDate: null
							});
							if (this.disposed || null == this.latestComplexityTokenByFile.get(e)) throw new Error("The local workspace changed before difficulty evidence could be saved.");
							if (this.latestComplexityTokenByFile.get(e) !== c) throw new Error("A newer local difficulty generation superseded this computation.");
							r?.throwIfAborted();
							const i = await async function(e, t = X(), n = "fresh", a) {
								"fresh" !== n && "restore" !== n && um();
								const i = await z.waitFor(Fm(e));
								return ia([t.files, t.complexityEvidence], async () => {
									const e = await t.files.get(i.fileId);
									jm(i, e);
									const a = await t.complexityEvidence.where("[fileId+generationKey]").equals([i.fileId, i.generationKey]).first();
									if (a) {
										const e = await z.waitFor(Fm(a));
										if (s = i, (r = e).generationKey !== s.generationKey || r.projectionSha256 !== s.projectionSha256 || r.difficultyResultSha256 !== s.difficultyResultSha256 || r.difficultyRequestSha256 !== s.difficultyRequestSha256 || r.signalsRequestSha256 !== s.signalsRequestSha256 || r.sourceContentHash !== s.sourceContentHash) throw new cm();
										if (null !== e.signalsResultSha256 && null !== i.signalsResultSha256 && e.signalsResultSha256 !== i.signalsResultSha256) throw new cm();
										if (null === e.signalsByDate && null !== i.signalsByDate) {
											const n = new Date(Math.max(Date.now(), Date.parse(e.createdAt))).toISOString(), a = {
												...e,
												signalsByDate: i.signalsByDate,
												signalsResultSha256: i.signalsResultSha256,
												updatedAt: n
											}, r = await z.waitFor(Cm(a)), s = {
												...a,
												recordSha256: r
											};
											return await t.complexityEvidence.put(s), await Bm(s, "signals_enriched", 0), {
												record: s,
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
									var r, s;
									await async function(e, t, n) {
										const a = await e.complexityEvidence.where("fileId").equals(t.fileId).toArray();
										if (a.length > 5) throw new om(!0);
										if (a.length < 5) return;
										if ("fresh" === n) return;
										a.sort((e, t) => {
											const n = Date.parse(t.createdAt) - Date.parse(e.createdAt);
											return 0 !== n ? n : (t.id ?? 0) - (e.id ?? 0);
										});
										const i = a[a.length - 1];
										if (i && Date.parse(t.createdAt) < Date.parse(i.createdAt)) throw new lm();
									}(t, i, n);
									const o = { ...i };
									delete o.id;
									const c = await t.complexityEvidence.add(o), l = {
										...o,
										id: c
									}, u = await async function(e, t, n) {
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
									}(t, l.fileId, n);
									return await Bm(l, "inserted", u), {
										record: l,
										disposition: "inserted",
										evicted: u
									};
								}, t, a);
							}(n, o, "fresh", r);
							"inserted" === i.disposition && await async function(e, t, n) {
								try {
									await $t.recordWorkspaceDurably(v.SYSTEM_RECALCULATION, {
										subject: "night_complexity_generation",
										generationKey: e.generationKey,
										difficultyResultSha256: e.difficultyResultSha256,
										dateCount: Object.keys(e.difficultyByDate).length
									}, t, n) || console.warn("[local-data-source] Complexity evidence was saved, but its audit event is still pending.");
								} catch {
									console.warn("[local-data-source] Complexity evidence was saved, but its audit event could not be recorded.");
								}
							}(i.record, o, r), F = {
								token: c,
								evidenceDb: o,
								coveredDates: [...new Set(t)].sort(),
								signalRequest: null == i.record.signalsByDate ? f : null,
								projectionInput: Mh(i.record),
								difficultyByDate: $h(i.record),
								signalsByDate: Rh(i.record),
								computeIdentity: i.record.runtimeIdentity,
								projectionRevision: Th(i.record),
								evidence: Nh(i.record)
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
			} catch (bd) {
				r?.throwIfAborted();
				const n = this.latestComplexityTokenByFile.get(e);
				if (this.disposed || null == n || n === c) throw bd;
				F = await this.awaitNewerComplexitySnapshot(e, c);
			} finally {
				j?.();
			}
			r?.throwIfAborted(), l(F), this.latestComplexityTokenByFile.get(e) === c && (r?.throwIfAborted(), this.publishComplexitySnapshot(e, F, r), this.complexityFailureByFile.delete(e));
			let L = F;
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
			if (L === F && (0 === R.length || null !== F.computeIdentity)) {
				const n = [...f.values()].map(jn), a = 0 === R.length && n.some((e) => e.ggir) && n.every((e) => e.ggir || 0 === e.timestamps.length), i = {
					nightStartHour: k,
					nightEndHour: I,
					byDate: Object.fromEntries(t.map((e) => [e, G[e]?.difficulty ?? null])),
					sourceRevision: String((F.computeIdentity ?? await s.getComputeIdentity()).sourceRevision),
					...a ? { notRankableReason: "GGIR nights are not ranked by difficulty: the difficulty core reads 60 s activity counts and sleep scores, and a GGIR folder holds 5 s ENMO, anglez and SIB only." } : {}
				};
				if (JSON.stringify(_?.nightDifficulty) !== JSON.stringify(i)) try {
					r?.throwIfAborted(), await B(o, [o.files], () => o.files.update(e, { nightDifficulty: i }), r);
					for (const t of Oh) t(e, o);
					r?.throwIfAborted();
				} catch {
					r?.throwIfAborted(), console.warn("[local-data-source] Stored night difficulty could not be written.");
				}
			}
			return M((e) => G[e]?.difficulty ?? null);
		} catch (bd) {
			throw this.latestComplexityTokenByFile.get(e) === c && this.complexityFailureByFile.set(e, {
				token: c,
				error: /* @__PURE__ */ new Error("The newest local difficulty generation failed.")
			}), u(bd), bd;
		} finally {
			this.complexityGenerationByFile.get(e)?.token === c && this.complexityGenerationByFile.delete(e);
		}
	}
	async loadAdjacentMarkers(e, t, n) {
		const a = (await Ve(e))?.availableDates?.slice().sort() ?? [], i = a.indexOf(t);
		if (i < 0) return null;
		const r = i > 0 ? a[i - 1] ?? null : null, s = i < a.length - 1 ? a[i + 1] ?? null : null, [o, c] = await Promise.all([r ? Ie(e, r, n) : null, s ? Ie(e, s, n) : null]), l = (e) => (e?.sleepMarkers ?? []).map((e) => ({
			onset_timestamp: e.onsetTimestamp,
			offset_timestamp: e.offsetTimestamp,
			marker_index: e.markerIndex
		}));
		return {
			previous_day_markers: l(o),
			next_day_markers: l(c),
			previous_date: r,
			next_date: s
		};
	}
	async auditRecordsForView(e, t) {
		const n = X(), a = await Dt(e, t, void 0, n);
		if (0 === e) return a;
		const i = await de(e, t, n);
		return [...a, ...i].sort((e, t) => (e.id ?? 0) - (t.id ?? 0));
	}
	static isRecordInView(e, t, n) {
		return e.fileId === t && e.analysisDate === n || 0 !== t && Lt(e, t, n);
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
		let o = null, c = null;
		for (const l of a) {
			const e = l.clientTimestamp;
			(null === o || e < o) && (o = e), (null === c || e > c) && (c = e);
		}
		return {
			summary: {
				total_events: a.length,
				users: r,
				sessions: s,
				first_event: o,
				last_event: c
			},
			entries: i
		};
	}
	async exportAuditLogCsv(t, n, a) {
		const i = await this.auditRecordsForView(t, n), r = (a ? i.filter((e) => e.username === a) : i).filter((e) => "number" == typeof e.id), s = e("audit_log_csv", "local"), o = await ot(r), c = function(e) {
			const t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
			for (const a of e) {
				const e = a.payload?.exportId;
				"string" == typeof e && ("export_started" === a.action ? t.add(e) : "data_exported" !== a.action && "export_cancelled" !== a.action || n.add(e));
			}
			for (const a of n) t.delete(a);
			return t;
		}(r), l = [s.join(",")];
		for (const [e, u] of r.entries()) {
			const t = u.payload ?? null, n = o[e];
			l.push([
				F(String(u.id)),
				F((/* @__PURE__ */ new Date(1e3 * u.clientTimestamp)).toISOString()),
				F(u.action),
				F(ah(null === t ? "" : ih(t, u.action), u.action, t, c)),
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
				F(void 0 === n ? "" : le(n.state)),
				F(void 0 === n || "unanchored" === n.basis ? "" : JSON.stringify(n.state))
			].join(","));
		}
		return new Blob([`${l.join("\n")}\n`], { type: "text/csv;charset=utf-8" });
	}
	async verifyAuditChain(e, t) {
		const n = await rn();
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
		const a = t.signalRequest, i = t.computeIdentity, r = t.evidence, s = t.evidenceDb, o = this.complexitySignalGenerationByFile.get(e);
		if (o?.token === t.token) return await o.promise;
		const c = (async () => {
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
				const c = h(), l = await c.getComputeIdentity();
				if (!fh(i, l)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), o();
				const u = await c.computeFileSignals(a), d = await c.getComputeIdentity();
				if (!fh(i, d)) return console.warn("[local-data-source] Full night-signal detail is unavailable because the local scoring runtime changed."), o();
				if (!hh(u.byDate, JSON.parse(a[0]).days)) throw new Error("The local scoring runtime returned incomplete night-signal evidence.");
				if (this.disposed) throw new Error("The local workspace changed before night-signal evidence could be saved.");
				const p = n();
				if (!p) return null;
				if (p.token !== t.token) return p;
				if (p.signalsByDate) return p;
				const f = await async function(e, t = X(), n) {
					(!Number.isInteger(e.fileId) || e.fileId <= 0) && um(), dm(e.generationKey);
					const a = mm(e.signalsByDate), i = await hm(a);
					return Om(i, e.signalsResultSha256), ia([t.files, t.complexityEvidence], async () => {
						const n = await t.complexityEvidence.where("[fileId+generationKey]").equals([e.fileId, e.generationKey]).first();
						if (!n) throw new om();
						const r = await z.waitFor(Fm(n));
						if (jm(r, await t.files.get(r.fileId)), null !== r.signalsResultSha256) {
							if (r.signalsResultSha256 !== i) throw new cm();
							return {
								record: r,
								disposition: "deduplicated",
								evicted: 0
							};
						}
						const s = new Date(Math.max(Date.now(), Date.parse(r.createdAt))).toISOString(), o = {
							...r,
							signalsByDate: a,
							signalsResultSha256: i,
							updatedAt: s
						}, c = await z.waitFor(Cm(o)), l = await z.waitFor(Pm({
							...o,
							recordSha256: c
						}));
						return await t.complexityEvidence.put(l), await Bm(l, "signals_enriched", 0), {
							record: l,
							disposition: "signals_enriched",
							evicted: 0
						};
					}, t, n);
				}({
					fileId: e,
					generationKey: r.generationKey,
					signalsByDate: u.byDate
				}, s), m = n();
				if (!m) return null;
				if (m.token !== t.token) return m;
				if (m.signalsByDate) return m;
				const g = {
					...m,
					signalRequest: null,
					projectionInput: Mh(f.record),
					difficultyByDate: $h(f.record),
					signalsByDate: Rh(f.record),
					computeIdentity: f.record.runtimeIdentity,
					projectionRevision: Th(f.record),
					evidence: Nh(f.record)
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
		for (let c = 0; c < 8; c++) {
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
			plot_intervals: uh(s ?? void 0, r ?? void 0, t, a?.projectionRevision ?? void 0)
		};
	}
	onMarkersChanged(e, t, n, a, i, r, s, o = null, c = null, l) {
		const u = [
			"markers",
			e,
			t,
			n || "anonymous",
			this.sourceKey,
			o,
			c,
			r,
			s
		], d = a.getQueryData(u);
		a.setQueryData(u, () => i);
		const p = void 0 !== d && "auto_score" !== n && JSON.stringify(d?.nonwearMarkers ?? []) === JSON.stringify(i?.nonwearMarkers ?? []);
		(function(e, t, n, a = {}) {
			!1 !== a.datesStatus && So(e, ["dates-status", t]), So(e, ["local-dates-status", t]), !1 !== a.fileQuality && So(e, ["file-quality"]), So(e, ["analysis-summary"]), So(e, ["adjacent-markers"]), So(e, [
				"audit-log",
				t,
				n
			]), So(e, ["actogram-markers", t]), So(e, [
				"night-stored-variant",
				t,
				n
			]), So(e, ["local-export-file-stats"]), So(e, ["local-export-circadian-coverage"]), function() {
				_o += 1;
				for (const e of vo) e();
			}();
		})(a, e, t, {
			datesStatus: !p,
			fileQuality: !1
		});
		const f = l ?? X();
		this.refreshFileScoringCounts(a, {
			fileId: e,
			username: n,
			workspaceScope: o,
			studyId: c
		}, f), p && this.patchDateStatus(a, {
			fileId: e,
			date: t,
			username: n,
			workspaceScope: o
		}, f);
	}
	async unscoreNight(e, t, n, a, i, r, s, o) {
		const c = s ?? X(), l = Gm(c, {
			username: n || "anonymous",
			studyId: E().scoring().selectedStudyId
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
			signal: this.fileBatch(e, c)?.signal
		}, c, l), null;
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
			So(e, o);
		});
	}
	async patchDateStatus(e, t, n) {
		const { fileId: a, date: i, username: r, workspaceScope: s } = t;
		for (const o of e.getQueryCache().findAll({ queryKey: ["dates-status", a] })) {
			const t = o.queryKey, c = o.state.data;
			if (t[2] === this.sourceKey && (t[3] !== s || t[4] !== (r || "anonymous"))) continue;
			if (o.state.isInvalidated) continue;
			if (!o.isActive()) {
				So(e, t);
				continue;
			}
			const l = t[4], u = o.state.dataUpdatedAt;
			try {
				if (!c || t[2] !== this.sourceKey || "string" != typeof l) throw new Error("not a local status list");
				const r = await zh(a, i, l, n);
				if (o.state.dataUpdatedAt !== u) continue;
				e.setQueryData(t, (e) => e?.map((e) => e.date === i ? {
					...e,
					...r
				} : e));
			} catch {
				So(e, t);
			}
		}
	}
	async ingestFile(e, t, n) {
		const { processLocalFile: a } = await import("./local-processing-JAa6_hAS.js"), i = E().scoring(), r = this.operationProcessingOptions, s = r?.devicePreset ?? i.devicePreset, o = r?.skipRows ?? i.skipRows, c = r?.choiAxis ?? i.choiAxis, l = r?.columnMapping ?? i.columnMapping, u = r?.countEpochSeconds ?? (30 === i.epochLengthSeconds ? 30 : 60);
		e.name.toLowerCase().endsWith(".csv") && s && "actigraph" !== s && "geneactiv" !== s && sh(s, l);
		const d = X(), p = await a(e, s ?? "actigraph", o ?? 10, t, c ?? "vector_magnitude", l, n, {
			...r ? {} : Yr(i),
			countEpochSeconds: u,
			sleepPeriodDetectionConfig: Mn(i.sleepPeriodDetection),
			...this.operationProcessingOptions
		});
		return p.alreadyImported || (jh(p.fileId, d, void 0, n), function(e, t, n) {
			Q({
				kind: V.PHYSICAL_ACTIVITY,
				key: `${V.PHYSICAL_ACTIVITY}:${String(e)}`,
				label: "Store activity answers",
				workspaceId: t.name,
				signal: n,
				rerun: !0,
				run: (n) => cn(async (a) => {
					const [{ computeLocalPhysicalActivityAnalysis: i, physicalActivityStoreAnalysisOptions: r }, { createPhysicalActivityWorkspaceRepository: s, loadPhysicalActivityWorkspaceDays: o }] = await Promise.all([import("./local-physical-activity-analysis-DxaNtbt1.js"), import("./physical-activity-workspace-days-PrPA51iX.js")]);
					if (n.signal.throwIfAborted(), n.progress(0, 2), X() !== t) return;
					const c = r(E().scoring());
					await i({
						...c,
						dbOverride: t,
						activityDayMemo: a,
						onlyFileIds: [e],
						signal: n.signal
					}), n.signal.throwIfAborted(), n.progress(1, 2), await o({
						username: c.username,
						maskPolicy: c.maskPolicy,
						repository: s(t, a),
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
		return (t ? await Cn(e, t) : await ze(e)).map(lh);
	}
};
function qh(e, t, n, a) {
	const i = (/* @__PURE__ */ new Date()).toISOString(), r = Hn(n, t), s = (e, t = 0) => "number" == typeof e && Number.isFinite(e) ? e : t;
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
			return wo(e.onsetTimestamp, n?.onset_timestamp) || wo(e.offsetTimestamp, n?.offset_timestamp);
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
		return r ? e.nonwearContributors([...i], Ct(a.detectors), r[0], r[1]) : [];
	});
	return Ct([...new Set((await Promise.all(i)).flat())]);
}
async function eg(e, t, n, a, i, r, s) {
	const o = _a(t, n), c = Object.fromEntries(Object.entries(o).map(([e, t]) => [e, new Uint8Array(t)])), l = await pt(e, { day: t }, s), u = await fa(i, c, {
		offPeriods: a,
		source: r
	}, {
		timestampsSec: e,
		epochLenSec: l
	}, s);
	return null === u || 0 === e.length ? [] : "unavailable" in u ? [[
		e[0],
		e[e.length - 1] + l,
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
	}(u, e, l, s);
}
async function tg(e, t, n = [], a = [], i = {}, r = null, s = h()) {
	const o = [], c = n.map(([e, t]) => ({
		startTimestamp: e,
		endTimestamp: t
	}));
	for (const [l, u] of Object.entries(e)) {
		const e = t[l]?.timestamps;
		e && 0 !== e.length && o.push(...await eg(e, {
			nonwearResults: u.nonwear.buffer,
			nonwearResultsChoi2011: u.nonwearChoi2011?.buffer ?? null,
			detachNonwear: u.detachNonwear?.buffer ?? null,
			...i[l]
		}, "", c, a, r, s));
	}
	return o;
}
async function ng(e, t, n, a = pe, i) {
	return ke((i) => {
		if (!e) return [];
		const r = [];
		for (const { start: s, end: o } of Ee(e)) {
			if (!s || !o) continue;
			const e = i.resolveSpan(s, o, t, Ue.daytime, a);
			e && r.push({
				markerType: c.NAP,
				markerIndex: n + r.length + 1,
				onsetTimestamp: e[0],
				offsetTimestamp: e[1]
			});
		}
		return r;
	}, new Ut(i));
}
function ag(e) {
	const t = e instanceof Error ? e.message : "";
	return t.startsWith("runGgirPart3:") ? t : t.includes("timed out") ? `it timed out after ${String(j / 6e4)} minutes` : t.includes("is not a function") ? "this build's actours WASM has no runGgirPart3 export" : "the actours WASM runtime failed (out of memory or a Rust panic)";
}
async function ig(e, t, n, a = [], i = /* @__PURE__ */ new Map(), r, s, o, l = "wrist", u = X(), d, p, f, m, g, w) {
	const _ = u, v = s?.ggirConfig ?? await Vs(_), b = t.length;
	if (0 === b) return null;
	const S = i.values().next().value;
	S && Xe(e, S.importMappingProvenance);
	const k = p ?? h(), I = f ?? (() => y(k)), x = await xo(l, r?.variant, k), T = x.variant, N = x.sensorLocation, M = {
		...o ?? {},
		haspt_variant: T,
		hdcza_proposal_revision: 6,
		ggir_config_sha256: v.sha256
	}, $ = s?.angley5s, R = s?.anglex5s, z = $ && $.length === b ? $ : void 0, C = R && R.length === b ? R : void 0, O = s?.invalid5s?.length === b ? s.invalid5s : void 0, P = void 0 !== g && void 0 !== O;
	if (void 0 === O) return Vh;
	const F = "hip" === N && !z && !C;
	if (F && (console.warn("[local-processing] Hip HDCZA was skipped because no aligned longitudinal axis was available."), !P)) return Wh;
	let B = !1;
	const L = s?.dstRuns ?? [], G = O, U = s?.activity5s?.length === b ? s.activity5s : void 0;
	K(d, "before local HASPT placement");
	const Z = await Y(k, (e) => e.runGgirPart3({
		anglez: t,
		ggirConfigCsv: v.csvText,
		hasibCounts: Gt(v.csvText, s?.zeroCrossings5s),
		...C ? { anglex: C } : {},
		...z ? { angley: z } : {},
		...U ? { enmo: U } : {},
		invalid: G,
		startTsEpochSec: n,
		hasptAlgo: T,
		...void 0 !== r?.config ? { hasptConfig: r.config } : {},
		..."hip" !== N || C && z ? {} : { longitudinalAxis: z ? 2 : 1 },
		...s?.timezone ? { timezone: s.timezone } : {}
	}), {
		ms: j,
		label: `local ${T} placement`,
		signal: d,
		cancel: I
	}).then((e) => ({
		result: e,
		failure: null
	}), (e) => (D(e, d, `local ${T} placement`), console.warn("[local-processing] GGIR Part 3 failed for this recording."), {
		result: null,
		failure: ag(e)
	}));
	if (Z.result && P && g(Z.result.part3Sib5s), F) return Wh;
	if (!Z.result) return `GGIR Part 3 (${T}) failed: ${Z.failure}`;
	const H = Z.result.part3SptNights, q = await k.ggirIndicesToWallClockMs(Uint32Array.from(H.flatMap((e) => [e.onsetIdx, e.wakeIdx])), 1e3 * n, [...L], s?.wallClockMs ? Float64Array.from(s.wallClockMs) : void 0), V = H.map((e, t) => ({
		onsetTimestamp: q[2 * t] / 1e3,
		offsetTimestamp: q[2 * t + 1] / 1e3,
		analysisDate: e.analysisDate
	}));
	for (const { onsetTimestamp: h, offsetTimestamp: y, analysisDate: j } of V) {
		K(d, "before local HASPT marker placement");
		const t = await Ie(e, j, et, A.VAN_HEES_2015, null, _);
		if (t && Kh(t)) continue;
		const n = await Yh(k, h, y, a), r = Xh(n.seconds, a), s = 0 === r.available.length && 0 === r.dropped.length ? M : {
			...M,
			nonwear_detectors_available: r.available,
			nonwear_detectors_dropped: r.dropped.map(({ detector: e, reason: t }) => ({
				detector: e,
				reason: t
			}))
		}, u = pa(r.dropped, "ggir"), p = (e) => [e, ...u].join("; "), f = n.weightedFraction, g = f > 0 && r.available.length > 1 ? await Qh(k, h, y, a) : null, v = await ng(i.get(j) ?? null, j, 1, $n(e), k), b = na(null, l), S = [{
			markerType: c.MAIN_SLEEP,
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
			expected: ta(t),
			username: "auto_score",
			sleepMarkers: S,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p(`${T} SPT: ${Bt(h)} → ${Bt(y)}` + (v.length > 0 ? `; ${v.length} diary nap(s)` : "") + (f > 0 ? `; selected-detector nonwear overlap ${Math.round(100 * f)}%` : "") + (g ? ` from ${ya(g, r.available.length)}` : "")),
			algorithm: A.VAN_HEES_2015,
			sleepPeriodDetectionConfig: s
		}, _, {
			...m ? { binding: m } : {},
			events: () => m ? [{
				action: "auto_score_applied",
				payload: Bn({
					algorithm: A.VAN_HEES_2015,
					sleepPeriodDetection: o ?? null,
					sleepCount: 1,
					napCount: v.length,
					markers: S
				})
			}] : []
		}).then(() => !0, (e) => (D(e, d, "local HASPT marker persistence"), console.warn("[local-processing] HDCZA marker persistence failed."), B = !0, !1)) && w?.(j);
	}
	return B ? "one or more auto-marker writes failed" : null;
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
async function cg(e, t, n, a, i) {
	const r = a.anglez.length;
	return (await e.ggirDstPlaceholderCuts(t, [...n], i)).map(({ start: e, count: t, beforeTimestampSec: n }) => {
		const i = (n) => n && n.length === r ? Array.from(n.subarray(e, e + t)) : void 0, s = i(a.anglex), o = i(a.angley), c = i(a.enmo), l = i(a.zcx), u = i(a.zcy), d = i(a.zcz);
		return {
			beforeTimestampSec: n,
			anglez: i(a.anglez) ?? [],
			...s ? { anglex: s } : {},
			...o ? { angley: o } : {},
			...c ? { enmo: c } : {},
			...l ? { zcx: l } : {},
			...u ? { zcy: u } : {},
			...d ? { zcz: d } : {}
		};
	});
}
var lg = class extends Error {
	name = "GgirImportRefusal";
	category;
	constructor(e) {
		super(gt(e)), this.category = e;
	}
};
function ug(e, t) {
	const n = gn(e);
	if (n && (n.notRead && n.notRead.length > 0 && t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR output",
		warning: n.notRead.map((e) => `not read: ${e.path}: ${e.reason}.`).join(" ")
	}), n.refusedNotRead)) throw new lg("ggir-not-read");
}
function dg(e, t) {
	const { username: n, selectedStudyId: a } = E().scoring();
	return $t.captureWorkspaceBinding(e, {
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
		...a ? It(await n.ggirConfigValues(a)) : {}
	}, { runs: s, storedMs: o, steps: c } = await n.wallClockDstPlaceholders(e.timestampsMs, 1e3 * e.epochSeconds, sg(r)), l = o.filter((e) => !Number.isNaN(e)), u = (e.timestampsMs[0] ?? 0) / 1e3, d = t?.sources.ms2 ? t.nonwear : e.nonwearShort, p = {
		...d.length === i ? { nonwear: d } : {},
		...e.invalidShort.length === e.timestampsMs.length ? { invalid: e.invalidShort } : {}
	}, f = t ? t.sources.ms3 ? t.sib : void 0 : e.part3Sib5s?.length === i ? e.part3Sib5s : void 0, m = await Sr(n, o, e.enmo5s, e.anglez5s, {
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
		clockSteps: c,
		wallClockMs: l,
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
		const a = await Ve(e, t);
		if (!qt(a)) return null;
		if (0 === (await mt(e, t)).length) return null;
		const i = await t.ggirResultsBundles.get(e);
		if (!i) return null;
		const r = J(n);
		if (a?.ggirSavedNonwearSettled) return li(i.configCsv, r);
		const s = [...(await Et(e, t)).values()].filter((e) => e.ggirTimestamps?.byteLength && e.unifiedNonwearMasks?.[ct.ggir_saved]?.byteLength !== e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), o = s.filter((e) => e.vanHeesNonwear?.byteLength === e.ggirTimestamps.byteLength / Float64Array.BYTES_PER_ELEMENT), c = s.filter((e) => !o.includes(e)), l = c.length ? await re(t, e) : null, u = l?.ms2 ? await r.reviewGgirResults({
			part1: new Uint8Array(l.part1),
			configCsv: l.configCsv,
			ms2: new Uint8Array(l.ms2),
			edits: [],
			crossCheck: !1
		}) : null, d = l && u?.nonwear.length ? (await fg(await r.readGgirMeta(new Uint8Array(l.part1), null, !0), u, r, l.configCsv)).ggirByDate : null, p = [...o.map((e) => ({
			date: e.date,
			unifiedNonwearMasks: {
				...e.unifiedNonwearMasks,
				[ct.ggir_saved]: e.vanHeesNonwear
			},
			vanHeesNonwear: null
		})), ...d ? c.map((e) => {
			const t = d.get(e.date), n = new Float64Array(e.ggirTimestamps);
			if (!t?.nonwear || t.timestamps.length !== n.length || !n.every((e, n) => e === t.timestamps[n])) throw new hg("Saved GGIR nonwear does not match the stored epoch grid.");
			return {
				date: e.date,
				unifiedNonwearMasks: {
					...e.unifiedNonwearMasks,
					[ct.ggir_saved]: new Uint8Array(t.nonwear).buffer
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
		}, n), p.length, li(i.configCsv, r);
	})().then((t) => (i.set(e, t), t)).catch((t) => {
		throw !n?.aborted && t instanceof hg && i.set(e, t), console.warn("[local-processing] Could not fill saved GGIR nonwear from retained ms2."), t;
	}).finally(() => {
		r.delete(e);
	});
	return r.set(e, o), o;
}
async function wg(e, t, n, a) {
	const i = a ?? await G(e, void 0, n), r = await Wt(i.fullHash, t) ?? await Sn(i.prefixHash, t, i.fullHash);
	return r?.id ? r : void 0;
}
const _g = [
	["ms2", "stockMs2"],
	["ms3", "stockMs3"],
	["ms4", "stockMs4"],
	["ms5", "stockMs5"]
];
async function vg(e, t, n) {
	const a = gn(t);
	if (!a) return null;
	const [i, ...r] = await Promise.all([a.configCsv.text(), ..._g.map(([e]) => a[e]?.arrayBuffer())]), s = await a.qwindowCsv?.text();
	return n.transaction("rw", [
		n.files,
		n.ggirResultsBundles,
		n.ggirResultsBlobs,
		n.ggirCorrectedValues
	], async () => {
		const [t, o] = await Promise.all([n.ggirResultsBlobs.get(e), n.ggirResultsBundles.get(e)]);
		return t && o ? o.configCsv === i && _g.every(([e, n], a) => ((e, t) => {
			if (void 0 === e || void 0 === t) return e === t;
			const n = new Uint8Array(e), a = new Uint8Array(t);
			return n.length === a.length && n.every((e, t) => e === a[t]);
		})(t[n] ?? t[e], r[a])) ? !a.resultsCsv || t.resultsCsv ? null : (await n.ggirResultsBundles.update(e, {
			resultsCsv: a.resultsCsv,
			...void 0 !== s && void 0 === t.qwindowCsv ? { qwindowCsv: s } : {}
		}), await n.ggirCorrectedValues.delete(e), await nn(n, [e]), "added") : "different_run" : null;
	});
}
const bg = {
	none: "File already imported",
	added: "File already imported; GGIR's results files added",
	different_run: "File already imported; this folder holds a different GGIR run of it, so the stored one was kept"
};
async function Sg(e, t, n, a, i, r, s) {
	const o = pg.get(e);
	pg.delete(e);
	const c = i?.db ?? X(), l = a?.ggirConfig ?? await Vs(c), u = r ?? h(), p = i ?? {
		db: c,
		attemptId: T(),
		auditBinding: dg(c, n),
		signal: n,
		recording: await Js(e, n, u)
	};
	K(n, "processGgirMetaRDataFile"), ug(e, t);
	const f = s ?? (() => {
		y(u);
	});
	t?.({
		phase: "reading",
		percent: 0,
		message: "Reading GGIR meta RData..."
	});
	const { prefixHash: m, fullHash: g } = o?.value?.hashes ?? await G(e, (e) => {
		t?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, n), w = await wg(e, c, n, {
		prefixHash: m,
		fullHash: g
	});
	if (w?.id) {
		const n = await vg(w.id, e, c);
		t?.({
			phase: "complete",
			percent: 100,
			message: bg[n ?? "none"]
		});
		const a = w.availableDates;
		return await hn(e.name, c), {
			alreadyImported: !0,
			...n ? { ggirResultsFiles: n } : {},
			fileId: w.id,
			availableDates: a,
			sourceType: w.sourceType ?? N.GGIR_5S_UPLOAD
		};
	}
	const _ = await Rn(e.name, c);
	if (_ && "incomplete" !== _.ingestState) throw new lg(Tt);
	if (t?.({
		phase: "parsing",
		percent: 25,
		message: "Parsing GGIR metashort and metalong..."
	}), K(n, "before reading GGIR RData"), o && "error" in o) throw o.error;
	const v = gn(e), b = o?.value?.input ?? (v ? await Wn(v) : null), S = o?.value || !b ? void 0 : await Y(u, (e) => e.prepareGgirRecording(b), {
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
	const M = o?.value?.meta ?? S?.meta ?? await Y(u, (e) => e.readGgirMeta(d(new Uint8Array(x), [x]), l.csvText, !1), {
		ms: 3e5,
		label: "readGgirMeta",
		signal: n,
		cancel: f
	}), $ = function(e, t) {
		return t && !t.sources.ms4 && e?.notRead?.some((e) => /(?:^|\/)meta\/ms4\.out\//u.test(e.path)) ? {
			...t,
			importNotices: [...t.importNotices, ea]
		} : t;
	}(v, o?.value?.review ?? S?.review ?? null), R = o?.value?.computed ?? await async function(e, t, n, a, i) {
		const r = gn(e)?.configCsv, { n: s, startSec: o, dstRuns: c, storedMs: l, clockSteps: u, wallClockMs: d, timegaps: p, ggirSib: f, ggirByDate: m } = await fg(t, n, a, await r?.text()), h = [...m.keys()].sort(), g = await Cr(m, a), y = (e) => a.nextDate(e), w = n ? await async function(e, t, n, a) {
			const [i] = e, r = n && void 0 !== i ? await Array.from({ length: n.night - 1 }).reduce((e) => e.then((e) => void 0 === e ? void 0 : a(e)), Promise.resolve(i)) : void 0, s = void 0 !== n && void 0 !== r && r < n.nightDate;
			return [.../* @__PURE__ */ new Set([...e.slice(s ? 1 : 0), ...t])].sort();
		}(g, await async function(e, t, n) {
			const a = await Promise.all(e.map(async (e) => t.has(e) || t.has(await n(e) ?? "")));
			return e.filter((e, t) => a[t]);
		}(Qn(n), m, y), Jn(n), y) : g;
		if (0 === h.length) throw new Error("GGIR meta RData did not contain any dated 5 s epochs.");
		const _ = h.flatMap((e) => {
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
				...t.nonwear ? n ? { unifiedNonwearMasks: { [ct.ggir_saved]: new Uint8Array(t.nonwear).buffer } } : { vanHeesNonwear: new Uint8Array(t.nonwear).buffer } : {},
				...t.invalid ? { ggirInvalid: new Uint8Array(t.invalid).buffer } : {},
				algorithmResults: {},
				nonwearResults: null
			}];
		});
		return {
			n: s,
			startSec: o,
			dstRuns: c,
			storedMs: l,
			clockSteps: u,
			wallClockMs: d,
			timegaps: p,
			rdataConfig: r,
			availableDates: h,
			nightDates: w,
			ggirSib: f,
			dayRecords: _,
			facts: await Promise.all(_.map((e) => Ft(e, a))),
			signalDates: await Qs(0, _, a).catch((e) => (i?.throwIfAborted(), In("warn", "GGIR circadian coverage store failed", Jt(e)), null)),
			placeholders: c.length > 0 ? await cg(a, 1e3 * o, c, {
				anglez: t.anglez5s,
				enmo: t.enmo5s
			}, d) : void 0,
			summaries: n ? await aa(n, 0, i, a) : [],
			markers: n ? await Kn(n, u, a) : void 0
		};
	}(e, M, $, u, n), { n: E, startSec: z, dstRuns: C, storedMs: O, clockSteps: P, wallClockMs: F, timegaps: L, rdataConfig: U, availableDates: Z, nightDates: H, ggirSib: q } = R;
	t?.({
		phase: "storing",
		percent: 55,
		message: "Saving GGIR 5 s epochs..."
	});
	const V = await ao(p, {
		filename: e.name,
		devicePreset: "ggir_5s_meta",
		epochLengthSeconds: M.epochSeconds,
		availableDates: H,
		fileHash: m,
		sourceContentHash: g,
		sourceSizeBytes: e.size,
		source: "local",
		eventMarkerInstants: [],
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		sourceType: N.GGIR_5S_UPLOAD,
		...z > 0 ? { recording: { effectiveTime: (/* @__PURE__ */ new Date(1e3 * z)).toISOString() } } : {},
		sourceProfileId: "actoglance.source.ggir_rdata.v1",
		...M.desiredtz ? { ggirTimezone: M.desiredtz } : {},
		...C.length + P.length > 0 ? { ggirClockBasis: (W = L, J = null != U, sg(W) ? `GGIR's imputed fall-back hour left out (${J ? "config.csv: imputeTimegaps TRUE, configtz = desiredtz" : "no config.csv, so GGIR's defaults are assumed"})` : `GGIR's repeated fall-back hour kept as recorded data (${!1 === W.imputeTimegaps ? "imputeTimegaps = FALSE" : null == W.dataFormat || rg.has(W.dataFormat) ? `configtz ${W.configtz ?? ""} differs from desiredtz ${W.desiredtz ?? ""}` : `GGIR does not gap-impute data format ${String(W.dataFormat)}`})`) } : {},
		...P.length > 0 ? { ggirClockSteps: P } : {},
		...C.length > 0 ? { ggirDstPlaceholders: R.placeholders } : {}
	}, u);
	var W, J;
	if ("already_complete" === V.kind) {
		const t = V.record.id;
		if (null == t) throw new Error("Completed local import identity is invalid.");
		const n = await vg(t, e, c);
		return await hn(e.name, c), {
			alreadyImported: !0,
			...n ? { ggirResultsFiles: n } : {},
			fileId: t,
			availableDates: V.record.availableDates,
			sourceType: V.record.sourceType ?? N.GGIR_5S_UPLOAD
		};
	}
	const Q = V.guard.fileId;
	let ee = null, te = !1;
	const ne = !$ && !q, ae = await v?.qwindowCsv?.text();
	if ($ && k) try {
		const t = k.configCsv ? await Ht(k.configCsv, u) : void 0;
		if (await io(p), await He(R.summaries.map((e) => ({
			...e,
			fileId: Q
		})), c, n), await B(c, [c.files, c.ggirResultsBundles], async () => {
			await c.ggirResultsBundles.put(qn(Q, v?.recordingFile ?? e.name, k, $, {
				part2Reports: v?.part2Reports,
				personReports: v?.personReports,
				qwindowCsv: ae,
				resultsCsv: v?.resultsCsv
			})), await c.files.update(Q, {
				ggirBundleRevision: crypto.randomUUID(),
				ggirSavedNonwearSettled: !0,
				...t ? { ggirNonwearDetector: t } : {}
			});
		}, n), !await Zn(Q, $, mo(a, p.recording), c, !0, P, n, R.markers)) throw new Error("GGIR results markers could not be saved.");
	} catch (me) {
		throw await so(p), me;
	}
	const ie = M.invalidShort.length === E ? M.invalidShort : null, re = $ ? null : await Y(u, (e) => e.runGgirFromEpoch({
		source: "ggir_part1_rdata",
		invalidMask: ie ? "ggir_part2" : "none"
	}, M.anglez5s, M.enmo5s, z, ie ?? new Uint8Array(E), M.desiredtz ?? void 0, l.csvText).catch((e) => (D(e, n, "runGgirFromEpoch (GGIR RData)"), In("warn", "GGIR epoch analysis failed", Jt(e)), te = !0, null)), {
		ms: j,
		label: "runGgirFromEpoch (GGIR RData)",
		signal: n,
		cancel: f
	});
	if (re?.days?.length) {
		const e = qh(re.days, Q, void 0, l);
		await io(p), await He(e, c, n).catch((e) => {
			In("warn", "GGIR daily summary store failed", Jt(e)), te = !0;
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
	}(P.length > 0 ? O : M.timestampsMs, M.nonwearShort), oe = new Map(($ ? [] : await Te(Q, c)).map((e) => [e.analysisDate, e])), ce = M.anglez5sImputed?.length === E ? M.anglez5sImputed : M.anglez5s, le = M.enmo5sImputed?.length === E ? M.enmo5sImputed : M.enmo5s;
	ee = $ ? ee : await ig(Q, ce, z, se, oe, a?.hasptVariant, {
		activity5s: le,
		...ie ? { invalid5s: ie } : {},
		dstRuns: C,
		wallClockMs: F,
		...M.desiredtz ? { timezone: M.desiredtz } : {}
	}, oa(a?.sleepPeriodDetectionConfig, ga), mo(a, p.recording), c, n, u, f, p.auditBinding);
	const ue = R.dayRecords.map((e) => ({
		...e,
		fileId: Q
	}));
	let de = !1;
	await io(p);
	const pe = (await it(ue, c, R.facts, n).catch((e) => (In("warn", "GGIR activity day store failed", Jt(e)), tr(e, "saveActivityDay (GGIR RData)"), de = !0, []))).length;
	if (!de && R.signalDates && await Oe(Q, Z, R.signalDates, c, n).catch((e) => {
		n?.throwIfAborted(), In("warn", "GGIR circadian coverage store failed", Jt(e));
	}), de || pe !== Z.length || 0 === pe) throw await so(p), /* @__PURE__ */ new Error("Could not save any GGIR RData epochs — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	K(n, "before completing GGIR RData ingest"), await ro(p);
	const fe = [
		...$?.configWarnings ?? [],
		...$?.importNotices ?? [],
		$?.sources.ms4 && Xn($),
		v && !v.resultsCsv && "GGIR’s results/ tables were not in the folder; its Part 2 and person reports were not imported.",
		de && "One or more days of GGIR RData epochs could not be saved.",
		ee && ($ ? "GGIR results markers could not be saved." : "Sleep window detection (HDCZA) could not place auto-markers."),
		te && ($ ? "GGIR source summaries could not be saved." : "GGIR daily summaries could not be computed or saved for this GGIR RData file."),
		ne && "GGIR HASIB sleep/wake flags could not be computed."
	].filter(Boolean).join(" ");
	return t?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete",
		...fe ? { warning: fe } : {}
	}), {
		fileId: Q,
		availableDates: H,
		sourceType: N.GGIR_5S_UPLOAD,
		...$ ? { ggir: {
			...(await import("./ggir-results-import-D4hCs8mr.js").then((e) => e.d)).ggirImportCounts($, Vn(v?.part2Reports, $, v?.recordingFile ?? e.name)),
			bodySite: (await Ve(Q, c))?.recording?.bodySite
		} } : {}
	};
}
async function kg(e, t, n, a, i, r, s) {
	const o = r?.db ?? X(), c = s ?? J(i), l = r ?? {
		db: o,
		attemptId: T(),
		auditBinding: dg(o, i),
		signal: i,
		recording: await Js(e, i, c)
	};
	K(i, "processMappedMimsCsvFile"), a?.({
		phase: "reading",
		percent: 0,
		message: "Reading mapped MIMS CSV..."
	});
	const { prefixHash: u, fullHash: d } = await G(e, (e) => {
		a?.({
			phase: "reading",
			percent: 15 * e,
			message: `Computing file hash... ${Math.round(100 * e)}%`
		});
	}, i), p = await wg(e, o, i, {
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
			sourceType: p.sourceType ?? N.EPOCHS_60S
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
		const i = se(await e.text()), r = ne(i);
		if (r.unterminatedQuotedField) throw new Error("The mapped CSV contains an unterminated quoted field.");
		const s = r.records, o = s[t]?.text;
		if (!o) throw new Error("Column-mapped CSV mapping could not be applied because the header row was not found.");
		const c = te(o), l = L(o, c), u = or(n, l);
		if (u.length > 0) throw new Error(Oi(u));
		const d = Pr(l, n.datetime_column), p = Pr(l, n.date_column), f = Pr(l, n.time_column), m = Pr(l, n.mims_unit_column), g = Pr(l, n.mims_unit_x_column), y = Pr(l, n.mims_unit_y_column), w = Pr(l, n.mims_unit_z_column), _ = [], v = [], b = [], S = [], k = [], I = [];
		for (let h = t + 2; h <= s.length; h++) {
			const e = s[h - 1];
			if (!e?.text.trim()) continue;
			const t = L(e.text, c);
			I.push({
				sourceRow: e.sourceRow,
				row: t,
				label: Ur(t, d, p, f)
			});
		}
		const A = await (a ?? h()).sourceLabelsWallClockMs(I.map(({ label: e }) => e)), x = I.findIndex((e, t) => !Number.isFinite(A[t] ?? NaN));
		if (x >= 0) throw new Error(`Could not parse timestamp on row ${String(I[x].sourceRow)} of the mapped MIMS CSV.`);
		for (const [h, { row: T }] of I.entries()) _.push(A[h]), v.push(Zr(T, m)), b.push(Zr(T, g)), S.push(Zr(T, y)), k.push(Zr(T, w));
		if (0 === _.length) throw new Error("The mapped MIMS CSV did not contain any data rows.");
		return {
			timestampsMs: new Float64Array(_),
			mimsUnit: null === m ? /* @__PURE__ */ new Float64Array() : new Float64Array(v),
			mimsUnitX: null === g ? /* @__PURE__ */ new Float64Array() : new Float64Array(b),
			mimsUnitY: null === y ? /* @__PURE__ */ new Float64Array() : new Float64Array(S),
			mimsUnitZ: null === w ? /* @__PURE__ */ new Float64Array() : new Float64Array(k)
		};
	}(e, t, n, c);
	K(i, "after reading mapped MIMS CSV");
	const g = N.EPOCHS_60S, y = await async function(e, t) {
		const n = /* @__PURE__ */ new Map(), a = t.timestampsMs.length, i = Hr(t.mimsUnit, a), r = Hr(t.mimsUnitX, a), s = Hr(t.mimsUnitY, a), o = Hr(t.mimsUnitZ, a), c = Float64Array.from(t.timestampsMs, (e) => e / 1e3);
		for (const [l, u] of await gr(e, c)) n.set(l, {
			timestamps: yr(c, u, 0),
			...i ? { mimsUnit: yr(i, u, NaN) } : {},
			...r ? { mimsUnitX: yr(r, u, NaN) } : {},
			...s ? { mimsUnitY: yr(s, u, NaN) } : {},
			...o ? { mimsUnitZ: yr(o, u, NaN) } : {}
		});
		return n;
	}(c, m), w = [...y.keys()].sort(), _ = await Cr(y, c);
	a?.({
		phase: "storing",
		percent: 55,
		message: "Saving mapped MIMS epochs..."
	});
	const v = await ao(l, {
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
	}, c);
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
		await io(l);
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
		await Qe(n, o, i).then(() => !0).catch((e) => (In("warn", "MIMS activity day store failed", Jt(e)), tr(e, "saveActivityDay (mapped MIMS CSV)"), S = !0, !1)) && (k += 1, await co(b, [n], o, c, i));
	}
	if (S || k !== w.length || 0 === k) throw await so(l), /* @__PURE__ */ new Error("Could not save any mapped MIMS data — browser storage may be full. Open Data Settings, delete files you don't need, then re-import this one.");
	return K(i, "before completing mapped MIMS ingest"), await ro(l), a?.({
		phase: "complete",
		percent: 100,
		message: "Processing complete"
	}), {
		fileId: b,
		availableDates: _,
		sourceType: g
	};
}
function Ig(e) {
	const t = e.trim();
	if (!/^\d{4}-\d{2}-\d{2}/.test(t)) return null;
	const n = t.includes("	") ? "	" : ",";
	return t.split(n).length;
}
async function Ag(e, t, n) {
	const a = Math.min(e.size, 16777216);
	let i = Math.min(16384, a);
	for (;;) {
		K(t, "before reading GeneActiv CSV header");
		const r = await s(e, i, n);
		K(t, "after reading GeneActiv CSV header");
		const o = i >= a, c = r.split("\n"), l = o && i >= e.size ? c : c.slice(0, -1);
		for (const e of l) {
			const t = Ig(e);
			if (null !== t) return t >= 12;
		}
		if (o) return !1;
		i = Math.min(2 * i, a);
	}
}
export { br as $, zs as A, Ir as B, Hs as C, Fs as D, Bs as E, Lr as F, Nr as G, Rr as H, jr as I, Mr as J, wr as K, Br as L, Cs as M, gs as N, Zs as O, hs as P, xr as Q, Gr as R, Vs as S, Ls as T, $r as U, Ar as V, Tr as W, hr as X, Cr as Y, Sr as Z, so as _, qh as a, tr as at, Js as b, ho as c, er as ct, io as d, Yi as dt, yg as ensureSavedGgirNonwear, Dr as et, po as f, Fi as ft, ro as g, lo as h, tg as i, Ag as isGeneactivEpochCsv, nr as it, Ds as j, Os as k, go as l, Qi as lt, uo as m, Bi as mt, og as n, fr as nt, ig as o, rr as ot, ao as p, Sg as processGgirMetaRDataFile, kg as processMappedMimsCsvFile, Pi as pt, zr as q, Vh as r, ug as refuseUnimportableGgirRecording, mr as rt, yo as s, ar as st, cg as t, pr as tt, mo as u, Xi as ut, oo as v, js as w, Ws as x, Qs as y, Er as z };
