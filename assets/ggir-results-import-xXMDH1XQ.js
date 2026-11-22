import { a as e, c as t, g as n, n as a, r as i } from "./ggir-results-types-e7JA7N7O.js";
import { A as r, Cn as s, Kn as o, Qn as l, T as c, Tn as u, Wn as d, br as p, er as g, kn as m, n as f, xr as h } from "./background-jobs-BjgJXCOZ.js";
import { Bn as _, Br as v, Cr as w, Gn as b, Hn as y, Jn as k, Kn as I, Rn as C, Un as M, Vn as N, Yn as S, Zn as R, _r as A, gr as D, hr as G, jn as x, kn as P, ln as H, nn as $, or as E, rn as O, sn as j, sr as T, tn as q, xr as F, zn as L } from "./db-CcD6mVwF.js";
import { i as V, t as z } from "./wal-Bx6STrBs.js";
import { i as B, t as K } from "./local-ggir-hasib-variants-BQ5pThCB.js";
import { D as W, i as J, y as U } from "./local-nonwear-unified-SYNZybtW.js";
import { a as Y } from "./epoch-utils-BvFrVfpr.js";
function Q(e, t) {
	return {
		sleepPeriodDetectionConfig: F(e),
		sleepPeriodDetectionSummary: t ?? A(e)
	};
}
function Z(e) {
	return {
		algorithm: e.algorithm,
		...Q(e.sleepPeriodDetection, e.sleepPeriodDetectionSummary),
		sleepCount: e.sleepCount,
		napCount: e.napCount,
		markers: e.markers
	};
}
var X = class extends Error {
	constructor() {
		super("The recording was deleted; this night was not saved."), this.name = "RecordingDeletedError";
	}
}, ee = class extends Error {
	constructor() {
		super("Markers changed during rescore or in another tab. Retry keeps the night on screen; reopening the night shows the stored one."), this.name = "NightConflictError";
	}
};
function te(e) {
	return {
		contentHash: e?.contentHash ?? null,
		needsConsensus: e?.needsConsensus ?? !1
	};
}
function ne(e, t) {
	const n = te(e);
	return n.contentHash === t.contentHash && n.needsConsensus === t.needsConsensus;
}
const ae = (e, t) => JSON.stringify([e, t]), ie = /* @__PURE__ */ new Map();
function re(e, t) {
	return e?.name ?? `${t?.sourceKey ?? "server"}:${t?.workspaceId ?? ""}`;
}
function se(e) {
	return e && (0 !== (e.sleepMarkers?.length ?? 0) || 0 !== (e.nonwearMarkers?.length ?? 0) || e.isInvalidNight || e.explicitNoNonwear || e.needsConsensus || e.notes) ? function(e) {
		const t = (e) => Number(e.onsetTimestamp ?? e.startTimestamp ?? 0), n = (e, n) => Number(e.markerIndex ?? 0) - Number(n.markerIndex ?? 0) || t(e) - t(n), a = (e) => Array.isArray(e) ? (e.every((e) => null !== e && "object" == typeof e && !Array.isArray(e)) ? [...e].sort(n) : e).map(a) : null === e || "object" != typeof e ? e : Object.fromEntries(Object.keys(e).sort().map((t) => [t, a(e[t])]));
		return JSON.stringify(a(e));
	}([
		e.sleepMarkers ?? [],
		e.nonwearMarkers ?? [],
		e.isInvalidNight ?? !1,
		e.explicitNoNonwear ?? !1,
		e.notes ?? "",
		e.needsConsensus ?? !1
	]) : null;
}
function oe(e, t) {
	if (null === t) return g.Promise.resolve();
	const n = t.binding;
	if (!n) throw new Error("A local night write requires the audit binding captured at its act.");
	const a = (t) => ({
		fileId: e.fileId,
		analysisDate: e.date,
		action: t.action,
		...void 0 === t.payload ? {} : { payload: t.payload }
	}), i = ((e, t) => {
		if (!e.changed) return null;
		if (null === e.committed) return {
			action: "markers_cleared",
			payload: {
				sleepCount: e.previous?.sleepMarkers?.length ?? 0,
				nonwearCount: e.previous?.nonwearMarkers?.length ?? 0
			}
		};
		const n = e.committed;
		return {
			action: "markers_saved",
			payload: (a = {
				sleepCount: n.sleepMarkers.length,
				nonwearCount: n.nonwearMarkers?.length ?? 0,
				notes: n.notes || null,
				isInvalidNight: n.isInvalidNight,
				explicitNoNonwear: n.explicitNoNonwear ?? !1,
				sleepPeriodDetection: t?.sleepPeriodDetection ?? n.sleepPeriodDetectionConfig ?? null
			}, {
				sleepCount: a.sleepCount,
				nonwearCount: a.nonwearCount,
				notes: a.notes,
				isInvalidNight: a.isInvalidNight,
				explicitNoNonwear: a.explicitNoNonwear,
				...Q(a.sleepPeriodDetection, a.sleepPeriodDetectionSummary)
			})
		};
		var a;
	})(e, t);
	return R.appendNightEditsInTransaction([
		...(t?.carried ?? []).map((e) => ({
			binding: e.binding ?? n,
			input: a(e)
		})),
		...(t?.events?.(e.committed) ?? []).map((e) => ({
			binding: n,
			input: a(e)
		})),
		...i ? [{
			binding: n,
			input: a(i)
		}] : []
	]).then(() => {});
}
function le(e, t, n) {
	return V([
		e.markers,
		e.scoringSessions,
		e.markerProvenance,
		...D.map(({ table: t }) => e.table(t)),
		e.auditLog,
		e.files
	], t, e, n);
}
function ce(e) {
	if (Array.isArray(e)) return e.map(ce);
	if (e && "object" == typeof e) {
		const t = {};
		for (const [n, a] of Object.entries(e)) null != a && (t[n] = ce(a));
		return t;
	}
	return e;
}
function ue(e, t, n, a) {
	return function(e, t) {
		const n = ((e) => ae(e.store, e.fileId) + JSON.stringify([
			e.actor,
			e.date,
			_(e.algorithm),
			N(e.detectionRule)
		]))(e);
		return function(e, t, n) {
			const a = e.length > 0 ? Promise.all(e).then(n) : n(), i = a.then(() => {}, () => {});
			for (const r of t) ie.set(r, i), i.then(() => {
				ie.get(r) === i && ie.delete(r);
			});
			return a;
		}([ie.get(n), ie.get((a = e.store, i = e.fileId, `${ae(a, i)}*`))].filter((e) => void 0 !== e), [n], t);
		var a, i;
	}(((e, t) => ({
		store: re(e),
		actor: t.username,
		fileId: t.fileId,
		date: t.date,
		algorithm: t.algorithm,
		detectionRule: t.detectionRule
	}))(t, e), async () => {
		const i = await y(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), s = await n(i ? I(i) : null);
		if (!s) return null;
		null !== a && await R.settleWrites();
		const o = "save" === s.kind ? await async function(e, t, n) {
			const { fileId: a, date: i, username: s, sleepMarkers: o, nonwearMarkers: l, isInvalidNight: u, isInvalidNightImplicit: d, notes: f, explicitNoNonwear: v, needsConsensus: y, algorithm: R = null, scoringContext: A, detectionRule: P = null, periodGuider: H = null, sleepPeriodDetectionConfig: $ = null, algorithmVersion: E = null } = e, O = null !== R ? await g.waitFor(async function(e) {
				let t;
				if (e.extraParams) try {
					t = JSON.parse(e.extraParams);
				} catch {
					t = e.extraParams;
				}
				const n = ce({
					algorithm: e.algorithm,
					detector: e.detector,
					guider: e.guider,
					sleep_period_detection_config: e.sleepPeriodDetectionConfig,
					scorer_version: e.scorerVersion,
					extra_params: t
				});
				return h(b(n));
			}({
				algorithm: R,
				detector: P,
				guider: H,
				sleepPeriodDetectionConfig: $,
				scorerVersion: E
			})) : null, j = A ?? (null !== R && null !== O ? {
				appVersion: "local",
				algorithmVersions: { [R]: E ?? "1" },
				paramsHash: O,
				stampedAt: (/* @__PURE__ */ new Date()).toISOString()
			} : void 0), T = null !== R && null !== O ? await g.waitFor(h(b(ce({
				fileId: a,
				date: i,
				username: s,
				algorithm: R,
				scorerVersion: E,
				detector: P,
				guider: H,
				sleepPeriodDetection: $,
				params: null,
				parameterSetHash: O
			})))) : null, q = _(R), F = N(P), L = e.restoredFromBackup;
			let V = !1;
			const B = await le(t, async (h) => {
				const _ = await t.files.get(a);
				if (void 0 === _) throw new X();
				const b = await M({
					fileId: a,
					date: i,
					username: s
				}, R, P, t), N = b?.algorithm === q && b.detectionRule === F ? b : void 0, A = b ? I(b) : void 0;
				if (L && N && N.lastModifiedAt >= L.lastModifiedAt) return {
					fileId: a,
					date: i,
					username: s,
					previous: A ?? null,
					committed: I(N),
					changed: !1
				};
				if (void 0 !== e.expected) {
					if (!ne(A, e.expected)) return b?.id && await C(b.id, t, b), V = !0, {
						fileId: a,
						date: i,
						username: s,
						previous: A ?? null,
						committed: A ?? null,
						changed: !1
					};
					if (!0 !== e.guardHashOnly && A?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
				}
				const B = L ? N : A, K = l ?? B?.nonwearMarkers ?? [], W = u ?? B?.isInvalidNight ?? !1, J = void 0 === L && w(_, A ?? { sleepMarkers: [] }, { sleepMarkers: o }), U = W || J, Y = v ?? B?.explicitNoNonwear ?? !1, Q = y ?? B?.needsConsensus ?? !1, Z = 0 === o.length || 0 === K.length ? null : (await g.waitFor(k([{
					sleepMarkers: o,
					nonwearMarkers: K,
					isInvalidNight: U
				}])))[0] ?? null, ee = Z ? S(o, Z) : o, te = U || (Z?.invalidates ?? !1), ae = te && !Z?.invalidates && (W ? void 0 === u ? !0 === B?.isInvalidNightImplicit : !0 === d : J);
				if (te && ee.some((e) => e.markerType === m.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
				const ie = await g.waitFor(p({
					sleepMarkers: ee,
					nonwearMarkers: K,
					isInvalidNight: te,
					explicitNoNonwear: Y,
					notes: f
				})), re = null !== R ? await async function(e, t, n) {
					const { fileId: a, date: i, username: r, algorithm: s } = t, o = e.table("scoringSessions"), l = await o.where("[fileId+date+username+algorithm]").equals([
						a,
						i,
						r,
						s
					]).first();
					if (l) return await o.update(l.sessionId, {
						scorerVersion: n.scorerVersion ?? null,
						detector: n.detector ?? null,
						guider: n.guider ?? null,
						sleepPeriodDetection: n.sleepPeriodDetectionConfig ?? null,
						params: n.params ?? null,
						parameterSetHash: n.parameterSetHash,
						contentHash: n.contentHash,
						lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
					}), l.sessionId;
					const u = c(), d = (/* @__PURE__ */ new Date()).toISOString();
					return await o.add({
						sessionId: u,
						fileId: a,
						date: i,
						username: r,
						algorithm: s,
						scorerVersion: n.scorerVersion ?? null,
						detector: n.detector ?? null,
						guider: n.guider ?? null,
						sleepPeriodDetection: n.sleepPeriodDetectionConfig ?? null,
						params: n.params ?? null,
						parameterSetHash: n.parameterSetHash,
						startedAt: d,
						syncStatus: "pending",
						contentHash: n.contentHash,
						lastModifiedAt: d
					}), u;
				}(h, {
					fileId: a,
					date: i,
					username: s,
					algorithm: R
				}, {
					scorerVersion: E,
					detector: P,
					guider: H,
					sleepPeriodDetectionConfig: $,
					params: null,
					parameterSetHash: O,
					contentHash: T
				}) : null, le = {
					fileId: a,
					date: i,
					username: s,
					algorithm: q,
					detectionRule: F,
					periodGuider: H,
					sleepPeriodDetectionConfig: $,
					algorithmVersion: E,
					scoringSessionId: re,
					manualNonwearInSleep: !1,
					sleepMarkers: ee,
					nonwearMarkers: K,
					isInvalidNight: te,
					...ae ? { isInvalidNightImplicit: !0 } : {},
					explicitNoNonwear: Y,
					needsConsensus: Q,
					notes: f,
					contentHash: ie,
					syncStatus: "pending",
					lastModifiedAt: L?.lastModifiedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
					...void 0 !== j ? { scoringContext: j } : {},
					...void 0 !== L ? { restoredFromBackup: L.restoreId } : {}
				}, ce = {
					fileId: a,
					date: i,
					username: s,
					previous: A ?? null,
					committed: le,
					changed: se(A) !== se(le)
				};
				await oe(ce, n);
				const ue = L ? N : b, de = ue && ue !== N ? {
					algorithm: ue.algorithm,
					detectionRule: ue.detectionRule
				} : void 0;
				return await z({
					op: "markers_put",
					fileId: a,
					username: s,
					...void 0 !== L ? { restoredFromBackup: L.restoreId } : {},
					payload: {
						...le,
						prevContentHash: N?.contentHash,
						...de ? { replacedKey: de } : {}
					}
				}), await async function(e, t, { existing: n, replacement: a }, i) {
					const { fileId: s } = t;
					let o;
					n && JSON.stringify(n.sleepMarkers) === JSON.stringify(t.sleepMarkers) || await Promise.all(D.map(({ table: t, field: n }) => G(e, t).where("fileId").equals(s).modify({ [n]: !0 }))), a?.id ? (o = a.id, await e.markers.update(o, (e) => {
						Object.assign(e, t), void 0 === t.isInvalidNightImplicit && delete e.isInvalidNightImplicit, void 0 === t.restoredFromBackup && delete e.restoredFromBackup;
					})) : o = await e.markers.add(t);
					const l = await e.markerProvenance.get(s), c = r({
						...t,
						id: o
					}), u = l?.rows.find((e) => e.id === o);
					return ("auto_score" === c.username || c.nonwearDecided !== (u?.nonwearDecided ?? !1) || c.nonwearDecided && c.nonwearSpans !== u?.nonwearSpans) && await x([s], e, i), await e.markerProvenance.put({
						fileId: s,
						rows: [...(l?.rows ?? []).filter((e) => e.id !== o), c]
					}), o;
				}(t, le, {
					existing: N,
					replacement: ue
				}, e.signal), ce;
			}, e.signal);
			if (V) throw new ee();
			return B;
		}(s.input, t, a) : await async function(e, t, n, a) {
			const { fileId: i, date: s, username: o, algorithm: l, detectionRule: c, expected: u } = e;
			let d = !1;
			const p = await le(t, async () => {
				if (void 0 === await t.files.get(i)) throw new X();
				const p = await M(e, l, c, t);
				if (void 0 !== u && !ne(p, u)) return p?.id && await C(p.id, t, p), d = !0, {
					fileId: i,
					date: s,
					username: o,
					previous: null,
					committed: null,
					changed: !1
				};
				if (!p) {
					const e = {
						fileId: i,
						date: s,
						username: o,
						previous: null,
						committed: null,
						changed: !1
					};
					return await oe(e, n), e;
				}
				const g = I(p);
				await z({
					op: "markers_delete",
					fileId: i,
					username: o,
					payload: {
						kind: "night_unscored",
						date: s,
						algorithm: p.algorithm,
						detectionRule: p.detectionRule,
						prevContentHash: p.contentHash
					}
				}), await async function(e, t, n, a) {
					const i = new Set(n.flatMap((e) => void 0 === e.id ? [] : [e.id]));
					await e.markers.bulkDelete([...i]);
					const s = await e.markerProvenance.get(t);
					s && await e.markerProvenance.put({
						fileId: t,
						rows: s.rows.filter((e) => !i.has(e.id))
					}), n.some((e) => "auto_score" === e.username || r({
						...e,
						id: e.id
					}).nonwearDecided) && await x([t], e, a);
				}(t, i, [p], a);
				const m = {
					fileId: i,
					date: s,
					username: o,
					previous: g,
					committed: null,
					changed: null !== se(g)
				};
				return await oe(m, n), m;
			}, a);
			if (d) throw new ee();
			if (null !== p.previous && "auto_score" !== o) {
				const { scheduleGgirRecompute: e } = await import("./local-export-shard-worker-DQjHAcnv.js").then((e) => e.y);
				e(i, o, t, a);
			}
			return p;
		}({
			...e,
			expected: s.expected
		}, t, a, s.signal ?? e.signal);
		return {
			record: o.committed,
			changed: o.changed
		};
	});
}
async function de(e, t, n) {
	return { changed: (await ue(e, t, () => Promise.resolve({
		kind: "unscore",
		expected: e.expected
	}), n)).changed };
}
function pe(e, t, n) {
	return L(e, { periodMetrics: t }, n);
}
function ge(e) {
	return Object.keys(o).filter((t) => o[t].propagation.includes(e)).sort();
}
function me(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(me).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${me(t)}`).join(",")}}`;
}
function fe(e, t) {
	return function(e, t) {
		const n = e?.recording, a = n?.bodySite;
		return "wrist" === a || "hip" === a ? {
			sensorLocation: a,
			source: n?.placementSourceReference ?? "declared"
		} : null != t ? {
			sensorLocation: t,
			source: "study_default"
		} : {
			sensorLocation: null,
			source: "unresolved"
		};
	}(e, t).sensorLocation;
}
const he = "analysis_paradigm", _e = Object.values(d).flat();
function ve(e, t, n) {
	return a = function(e, t) {
		const n = q(t, $(e[he])), a = new Set(_e.filter((t) => o[t].appliesUnderParadigm !== n?.paradigm || function(e, t) {
			const n = H[o[e].range];
			return void 0 !== n && n(t);
		}(t, e[t])));
		j(t) || a.add(he);
		const i = {
			...Object.fromEntries(Object.entries(e).filter(([e]) => !a.has(e))),
			ggir_config: { sha256: P(e).sha256 }
		};
		return n && (delete i.ggir_config, i.default_algorithm = n.sleepAlgorithm, n.periodGuider && (i.period_guider = n.periodGuider), i.nonwear_detectors_counts = O({
			algorithm: n.sleepAlgorithm,
			periodGuider: n.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, n.paradigm, t).nonwearDetectorsCounts), j(t) ? (delete i.ggir_config, i.extraction_path = null, "ggir" !== U(i.default_algorithm) && (i.nonwear_detectors_ggir = null), i) : i;
	}(function(e, t, n = l().scoring()) {
		const a = n, i = {};
		for (const r of ge("materialized")) {
			const e = o[r].storeKeys.zustand;
			if (void 0 === e || !(e in a)) throw new Error(`materialized setting ${r} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			i[r] = a[e];
		}
		return i.sleep_period_detection = {
			value: i.sleep_period_detection,
			resolvedSensorLocation: fe(e, t)
		}, i;
	}(e, t, n), e), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${me(t[e])}`);
		let a = 2166136261;
		for (const i of n.join("")) a ^= i.charCodeAt(0), a = Math.imul(a, 16777619) >>> 0;
		return a.toString(16).padStart(8, "0");
	}(ge("materialized"), a);
	var a;
}
const we = [
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
], be = we.filter((e) => "observed" !== e && "technically_unusable" !== e && "corrupt" !== e), ye = [
	"insufficient_still_windows",
	"required_calibration_evidence_unavailable",
	"calibration_evidence_unusable"
];
function ke(e, t) {
	if (!e) return null;
	const n = function(e) {
		const t = [], { resolution_id: n, factory_parameters_availability: a, factory_parameters_artifact: i, auto_calibration_availability: r, auto_calibration_execution: s, selected_source: o, fallback_source: l, fallback_reason: c, fallback_policy_execution: u, refusal: d } = e;
		/\S/.test(n) || t.push("resolution_id must be non-blank"), we.includes(a) || t.push(`factory_parameters_availability '${a}' is not an ObservationAvailability`), we.includes(r) || t.push(`auto_calibration_availability '${r}' is not an ObservationAvailability`);
		const p = [
			o,
			l,
			d
		].filter((e) => void 0 !== e).length;
		if (1 !== p && t.push(`exactly one of selected_source/fallback_source/refusal is required, found ${String(p)}`), "observed" === a && void 0 === i && t.push("observed factory_parameters requires factory_parameters_artifact"), "observed" !== a && void 0 !== i && t.push("non-observed factory_parameters must not carry factory_parameters_artifact"), "observed" === r && void 0 === s && t.push("observed auto_calibration requires auto_calibration_execution"), "observed" !== r && void 0 !== s && t.push("non-observed auto_calibration must not carry auto_calibration_execution"), "factory_parameters" === o && "observed" !== a && t.push("selected_source=factory_parameters requires observed factory evidence"), "auto_calibration" === o && "observed" !== r && t.push("selected_source=auto_calibration requires observed auto-calibration evidence"), void 0 === l || void 0 !== c && void 0 !== u || t.push("fallback_source requires fallback_reason and fallback_policy_execution"), void 0 !== l || void 0 === c && void 0 === u || t.push("fallback provenance is only allowed alongside fallback_source"), d) {
			ye.includes(d.code) || t.push(`refusal.code '${d.code}' is not a CalibrationRefusalCode`), "insufficient_still_windows" === d.code && ("auto_calibration" !== d.blocked_source && t.push("insufficient_still_windows must block auto_calibration"), "technically_unusable" !== d.availability && t.push("insufficient_still_windows must use availability technically_unusable")), "required_calibration_evidence_unavailable" !== d.code || be.includes(d.availability) || t.push(`required_calibration_evidence_unavailable cannot use availability '${d.availability}'`), "calibration_evidence_unusable" === d.code && "technically_unusable" !== d.availability && "corrupt" !== d.availability && t.push(`calibration_evidence_unusable cannot use availability '${d.availability}'`);
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
}
var Ie = n({
	GGIR_NO_PART4: () => Ve,
	GGIR_NO_PART4_NOTE: () => ze,
	GGIR_PART4_NOT_READ: () => Be,
	assertUniqueGgirNightDates: () => Je,
	editProvenance: () => Qe,
	editProvenanceFromLabels: () => Ze,
	ggirFirstDatedNight: () => $e,
	ggirImportCounts: () => We,
	ggirMarkerAlgorithm: () => Oe,
	ggirNightCoverage: () => Te,
	ggirNoPart4Note: () => Ke,
	ggirProposalDescription: () => je,
	ggirReportedNightDates: () => He,
	ggirResultsBundleRecord: () => De,
	ggirUnmarkedNightReason: () => Fe,
	ggirValueSets: () => Ge,
	labelEntries: () => Ue,
	markerWindows: () => Ee,
	nightWindows: () => Pe,
	prepareGgirReviewMarkers: () => tt,
	proposalNote: () => et,
	readGgirResultsInput: () => Me,
	recordingReports: () => Ae,
	saveGgirReviewMarkers: () => nt,
	stripMasks: () => Ne,
	summariesFromReview: () => Xe
});
const Ce = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function Me(e, t = []) {
	const [n, a, i, r, o, l] = await Promise.all([
		Ce(e.part1),
		Ce(e.ms2),
		Ce(e.ms3),
		Ce(e.ms4),
		Ce(e.ms5),
		Ce(e.sleeplogRData)
	]);
	return {
		part1: n,
		configCsv: await e.configCsv.text(),
		...a ? { ms2: a } : {},
		...i ? { ms3: i } : {},
		...r ? { ms4: r } : {},
		...o ? { ms5: o } : {},
		...l ? { sleeplogRData: l } : {},
		...e.sleeplogCsv ? { sleeplogCsv: await e.sleeplogCsv.text() } : {},
		recordingId: s(e.recordingFile),
		...e.cleanedNightsCsv ? { cleanedNightsCsv: await e.cleanedNightsCsv.text() } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: await e.dataCleaningCsv.text() } : {},
		edits: t,
		crossCheck: !1
	};
}
function Ne(e) {
	const { sib: t, invalid: n, nonwear: a, ...i } = e;
	return i;
}
const Se = (e) => e ? e.slice().buffer : void 0;
function Re(n, a, r) {
	const s = new Set((a.nights.values[a.nights.columns.indexOf(t.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), o = new Set(Array.from({ length: a.nights.rows }, (t, n) => e(a.nights, n)).filter((e) => null !== e)), l = (e) => n.values[n.columns.indexOf(t.ggir_id.header)]?.[e], c = void 0 === r ? null : i(r), u = Array.from({ length: n.rows }, (e, t) => t).filter(0 === s.size && null !== c ? (t) => e(n, t) === c : (a) => null != l(a) && s.has(String(l(a))) && (!n.columns.includes(t.ggir_filename.header) || 0 === o.size || o.has(e(n, a) ?? "")));
	return {
		columns: n.columns,
		rows: u.length,
		values: n.values.map((e) => u.map((t) => e[t]))
	};
}
const Ae = (e, t, n) => Object.fromEntries(Object.entries(e ?? {}).map(([e, a]) => [e, Re(a, t, n)]));
function De(e, t, n, a, i = {}) {
	const r = Se(n.ms2), s = Se(n.ms3), o = Se(n.ms4), l = Se(n.ms5), c = Se(n.sleeplogRData);
	return {
		fileId: e,
		recordingFile: t,
		part1: Se(n.part1),
		configCsv: n.configCsv,
		part2Reports: Ae(i.part2Reports, a, t),
		...i.personReports ? { personReports: Ae(i.personReports, a, t) } : {},
		...n.cleanedNightsCsv ? { cleanedNightsCsv: n.cleanedNightsCsv } : {},
		...n.dataCleaningCsv ? { dataCleaningCsv: n.dataCleaningCsv } : {},
		...r ? { ms2: r } : {},
		...s ? { ms3: s } : {},
		...o ? { ms4: o } : {},
		...l ? { ms5: l } : {},
		...c ? { sleeplogRData: c } : {},
		...n.sleeplogCsv ? { sleeplogCsv: n.sleeplogCsv } : {},
		...void 0 !== i.qwindowCsv ? { qwindowCsv: i.qwindowCsv } : {},
		...i.resultsCsv ? { resultsCsv: i.resultsCsv } : {},
		imported: Ne(a),
		edits: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function Ge(e, t, n = !0) {
	if (!e.ggirCorrections) {
		if (!n || !t?.values || !t.ggirCorrections) return [{
			set: "default",
			bundle: e
		}];
		const { current: a, ms2: i, ms3: r, ms4: s, ms5: o, cleanedNightsCsv: l, part2Reports: c, personReports: u, ...d } = e;
		return [{
			set: "default",
			bundle: e
		}, {
			set: "corrected",
			bundle: {
				...d,
				...t.values,
				ggirCorrections: t.ggirCorrections
			}
		}];
	}
	const { stock: a, stockMs2: i, stockMs3: r, stockMs4: s, stockMs5: o, ggirCorrections: l, ms2: c, ms3: u, ms4: d, ms5: p, cleanedNightsCsv: g, part2Reports: m, personReports: f, current: h, ..._ } = e, v = a ? [{
		set: "default",
		bundle: {
			..._,
			...a,
			...i ? { ms2: i } : {},
			...r ? { ms3: r } : {},
			...s ? { ms4: s } : {},
			...o ? { ms5: o } : {}
		}
	}] : [];
	return v.length > 0 && !n ? v : [...v, {
		set: "corrected",
		bundle: e
	}];
}
const xe = (e) => {
	const t = /* @__PURE__ */ new Set();
	return e.filter((e) => !t.has(e.night) && (t.add(e.night), !0));
};
function Pe(e) {
	return xe(e.sleepWindows);
}
function He(e) {
	return [...new Set(Pe(e).map((e) => e.nightDate))].sort();
}
function $e(e) {
	return function(e) {
		return [...Pe(e), ...e.bugAwareness ?? []].flatMap((e) => null == e.night || null == e.nightDate ? [] : [{
			night: e.night,
			nightDate: e.nightDate
		}]);
	}(e).reduce((e, t) => e && e.night <= t.night ? e : t, void 0);
}
function Ee(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return Pe(e).filter((a) => t.has(a.night) && a.onsetMs >= e.startMs && a.wakeMs <= n && a.wakeMs > a.onsetMs);
}
function Oe(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case K: return u.VAN_HEES_2015;
		case B("cole_kripke_1992"): return u.COLE_KRIPKE_1992_GGIR;
		case B("sadeh_1994"): return u.SADEH_1994_GGIR;
		case B("galland_2012"): return u.GALLAND_2012;
		case B("oakley_1997"): return u.OAKLEY_1997;
		default: return null;
	}
}
function je(e) {
	return null == Oe(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${Te(e)}`;
}
function Te(e) {
	const t = Pe(e).length;
	return `${String(Ee(e).length)} of ${String(t)} ${1 === t ? "night" : "nights"} GGIR reported got a GGIR marker.`;
}
const qe = {
	excluded_by_ggir_cleaning: "excluded by GGIR cleaning",
	window_is_other_nights_average: "window is other nights' average",
	sleep_times_are_guider_fill: "sleep times filled from a guide",
	window_outside_recording: "window falls outside the recording",
	missing_ggir_window: "GGIR did not supply a sleep window"
};
function Fe(e, t) {
	const n = (e.bugAwareness ?? []).find((e) => e.night === t && qe[e.name]);
	return n ? qe[n.name] : null == Oe(e) ? "GGIR sleep algorithm has no marker mapping" : "GGIR supplied no usable window";
}
const Le = ["N valid WEdays", "N valid WKdays"], Ve = "GGIR made no Part 4 for this recording", ze = `imported without GGIR sleep windows: ${Ve}`, Be = "GGIR’s Part 4 milestone (meta/ms4.out) could not be read.";
function Ke(e, t) {
	if (e.sources.ms4) return null;
	if (e.importNotices.includes("GGIR’s Part 4 milestone (meta/ms4.out) could not be read.")) return "imported without GGIR sleep windows: its GGIR Part 4 milestone could not be read";
	const n = t?.["part2_summary.csv"], i = 1 === n?.rows ? Le.map((e) => a(n, e, 0)) : [];
	return i.length > 0 && i.every((e) => 0 === e) ? `${ze} (it found no valid days)` : ze;
}
function We(e, t) {
	const n = /* @__PURE__ */ new Set([...Pe(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), a = new Set(null == Oe(e) ? [] : Ee(e).map((e) => e.night)), i = /* @__PURE__ */ new Map();
	for (const s of n) {
		if (a.has(s)) continue;
		const t = Fe(e, s);
		i.set(t, (i.get(t) ?? 0) + 1);
	}
	const r = Ke(e, t);
	return {
		reportedNights: n.size,
		markedNights: a.size,
		exclusions: [...i].map(([e, t]) => ({
			reason: e,
			count: t
		})),
		...r ? { note: r } : {}
	};
}
function Je(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.nightDate);
		if (null != e && e !== n.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		t.set(n.nightDate, n.night);
	}
}
const Ue = (e, t) => e.flatMap((e, n) => void 0 === t[n] ? [] : [[e, t[n]]]), Ye = (e, t) => f(t).wallClockLabels(Float64Array.from(e));
async function Qe(e, t, n, a, i = !1) {
	const r = Pe(e).find((e) => e.night === n);
	if (!r || !t.some((e) => e.night === n)) return null;
	const s = [r.onsetMs, r.wakeMs];
	return Ze(e, t, n, new Map(Ue(s, await Ye(s, a))), i);
}
function Ze(e, t, n, a, i = !1) {
	const r = t.find((e) => e.night === n), s = Pe(e).find((e) => e.night === n), o = s && a.get(s.onsetMs), l = s && a.get(s.wakeMs);
	if (!r || void 0 === o || void 0 === l) return null;
	const c = [r.onset !== o ? `onset moved ${i ? `${o} → ` : ""}${r.onset}` : null, r.wake !== l ? `wake moved ${i ? `${l} → ` : ""}${r.wake}` : null].filter((e) => null != e);
	return c.length > 0 ? `edited: ${c.join(", ")}` : null;
}
async function Xe(e, t, n, a = f(n)) {
	if (Je(e.sleepWindows), !e.sources.ms5) return [];
	const i = (/* @__PURE__ */ new Date()).toISOString(), r = e.nightSummaries ?? [], s = new Map(Pe(e).map((e) => [e.night, e.nightDate])), o = (e) => e.nightDate ?? (null == e.night ? void 0 : s.get(e.night)), l = new Map(await Promise.all([...new Set(r.map(o).filter((e) => null != e))].map(async (e) => [e, await Y(e, void 0, a)]))), c = Float64Array.from(r, (e) => e.validHours ?? NaN), u = e.includeDayCriterionHours ?? await a.ggirIncludeDayCriterionHours(null), d = Float64Array.from(r, () => u), p = await a.ggirDaysIncluded(c, d, null);
	return r.flatMap((e, n) => {
		const a = o(e);
		return null == a ? [] : [{
			fileId: t,
			analysisDate: l.get(a),
			totalSleepTimeMinutes: e.totalSleepMinutes ?? null,
			wasoMinutes: e.wasoMinutes ?? null,
			sleepEfficiency: e.sleepEfficiencyPct ?? null,
			mvpaMinutes: e.mvpaMinutes ?? null,
			moderateMinutes: e.moderateMinutes ?? null,
			vigorousMinutes: e.vigorousMinutes ?? null,
			lpaMinutes: e.lpaMinutes ?? null,
			sedentaryMinutes: e.sedentaryMinutes ?? null,
			l5MidpointHour: e.l5MidpointHour ?? null,
			m5MidpointHour: e.m5MidpointHour ?? null,
			intensityGradient: e.intensityGradient,
			nonwearMinutes: e.nonwearMinutes ?? null,
			validHours: e.validHours ?? null,
			cleaningCode: e.cleaningCode ?? null,
			fragmentationTpIn2Ac: null,
			fragmentationTpAc2In: null,
			fragmentCount: null,
			includeDayCriterionHours: u,
			...null == e.validHours ? {} : { meetsIncludeDayCriterion: 1 === p[n] },
			calibration: null,
			createdAt: i,
			updatedAt: i
		}];
	});
}
async function et(e, t, n, a = f(n)) {
	const [i, r] = await a.wallClockLabels(Float64Array.of(t.onsetMs, t.wakeMs));
	return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(t.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${i} → ${r}`;
}
async function tt(e, t, n) {
	return Promise.all(Ee(e).map(async (a) => {
		const [i, r] = await n.ggirLabelsToStoredMs(Float64Array.of(a.onsetMs, a.wakeMs), t), s = await et(e, a, void 0, n);
		return {
			date: a.nightDate,
			onsetTimestamp: i / 1e3,
			offsetTimestamp: r / 1e3,
			notes: s
		};
	}));
}
async function nt(e, t, n, a, i, r = [], s, o) {
	Je(t.sleepWindows);
	const c = Oe(t);
	if (null == c) return !0;
	const u = ve(null, n), d = f(s);
	let p = !0;
	for (const g of o ?? await tt(t, r, d)) {
		const t = [{
			markerType: m.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: g.onsetTimestamp,
			offsetTimestamp: g.offsetTimestamp,
			source: "auto",
			settingsHash: u
		}];
		await l().nights.writeHeadless({
			signal: s,
			fileId: e,
			...i ? { expected: te(null) } : {},
			date: g.date,
			username: v,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: g.notes,
			algorithm: c,
			sleepPeriodDetectionConfig: W(void 0, J) ?? null
		}, a, null).catch((e) => {
			s?.throwIfAborted(), T("warn", "GGIR results marker store failed", E(e)), p = !1;
		});
	}
	return p;
}
export { pe as C, Z as D, ue as E, fe as S, de as T, nt as _, Oe as a, ke as b, De as c, Ie as d, Ee as f, Ae as g, Me as h, $e as i, Fe as l, tt as m, Je as n, je as o, Pe as p, Qe as r, He as s, Be as t, Ge as u, Ne as v, te as w, ve as x, Xe as y };
