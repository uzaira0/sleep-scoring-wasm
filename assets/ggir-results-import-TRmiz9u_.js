import { a as e, l as t, n, r as a, v as i } from "./ggir-results-types-kmrkPkJO.js";
import { Ir as r, Pr as s, R as o, Ur as l, Vr as c, hr as u, mt as d, n as p, pr as g, st as m, yr as f, z as h } from "./background-jobs-CXps6j4v.js";
import { An as _, Bn as v, Er as w, Hn as b, Kn as y, Mn as k, Qn as I, Un as C, Ur as M, Vn as N, Wn as S, Xn as R, Yn as A, br as D, cn as G, in as P, lr as x, nn as H, qn as $, rn as E, un as O, ur as j, vr as q, wr as T, yr as F, zn as V } from "./db-ylhhNiJn.js";
import { i as L, t as z } from "./wal-Dfu9rgTj.js";
import { i as B, t as U } from "./local-ggir-hasib-variants-2K3APKLs.js";
import { D as W, i as K, y as J } from "./local-nonwear-unified-CM_IZkiP.js";
import { a as Y } from "./epoch-utils-CsrYKmmm.js";
function Q(e, t) {
	return {
		sleepPeriodDetectionConfig: T(e),
		sleepPeriodDetectionSummary: t ?? D(e)
	};
}
function X(e) {
	return {
		algorithm: e.algorithm,
		...Q(e.sleepPeriodDetection, e.sleepPeriodDetectionSummary),
		sleepCount: e.sleepCount,
		napCount: e.napCount,
		markers: e.markers
	};
}
var Z = class extends Error {
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
	if (null === t) return c.Promise.resolve();
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
	return I.appendNightEditsInTransaction([
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
	return L([
		e.markers,
		e.scoringSessions,
		e.markerProvenance,
		...F.map(({ table: t }) => e.table(t)),
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
			N(e.algorithm),
			b(e.detectionRule)
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
		const i = await C(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), r = await n(i ? $(i) : null);
		if (!r) return null;
		null !== a && await I.settleWrites();
		const s = "save" === r.kind ? await async function(e, t, n) {
			const { fileId: a, date: i, username: r, sleepMarkers: s, nonwearMarkers: l, isInvalidNight: u, isInvalidNightImplicit: p, notes: g, explicitNoNonwear: _, needsConsensus: v, algorithm: I = null, scoringContext: C, detectionRule: M = null, periodGuider: D = null, sleepPeriodDetectionConfig: G = null, algorithmVersion: P = null } = e, x = null !== I ? await c.waitFor(async function(e) {
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
				return h(y(n));
			}({
				algorithm: I,
				detector: M,
				guider: D,
				sleepPeriodDetectionConfig: G,
				scorerVersion: P
			})) : null, H = C ?? (null !== I && null !== x ? {
				appVersion: "local",
				algorithmVersions: { [I]: P ?? "1" },
				paramsHash: x,
				stampedAt: (/* @__PURE__ */ new Date()).toISOString()
			} : void 0), E = null !== I && null !== x ? await c.waitFor(h(y(ce({
				fileId: a,
				date: i,
				username: r,
				algorithm: I,
				scorerVersion: P,
				detector: M,
				guider: D,
				sleepPeriodDetection: G,
				params: null,
				parameterSetHash: x
			})))) : null, O = N(I), j = b(M), T = e.restoredFromBackup;
			let L = !1;
			const B = await le(t, async (h) => {
				const b = await t.files.get(a);
				if (void 0 === b) throw new Z();
				const y = await S({
					fileId: a,
					date: i,
					username: r
				}, I, M, t), C = y?.algorithm === O && y.detectionRule === j ? y : void 0, N = y ? $(y) : void 0;
				if (T && C && C.lastModifiedAt >= T.lastModifiedAt) return {
					fileId: a,
					date: i,
					username: r,
					previous: N ?? null,
					committed: $(C),
					changed: !1
				};
				if (void 0 !== e.expected) {
					if (!ne(N, e.expected)) return y?.id && await V(y.id, t, y), L = !0, {
						fileId: a,
						date: i,
						username: r,
						previous: N ?? null,
						committed: N ?? null,
						changed: !1
					};
					if (!0 !== e.guardHashOnly && N?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
				}
				const B = T ? C : N, U = l ?? B?.nonwearMarkers ?? [], W = u ?? B?.isInvalidNight ?? !1, K = void 0 === T && w(b, N ?? { sleepMarkers: [] }, { sleepMarkers: s }), J = W || K, Y = _ ?? B?.explicitNoNonwear ?? !1, Q = v ?? B?.needsConsensus ?? !1, X = 0 === s.length || 0 === U.length ? null : (await c.waitFor(A([{
					sleepMarkers: s,
					nonwearMarkers: U,
					isInvalidNight: J
				}])))[0] ?? null, ee = X ? R(s, X) : s, te = J || (X?.invalidates ?? !1), ae = te && !X?.invalidates && (W ? void 0 === u ? !0 === B?.isInvalidNightImplicit : !0 === p : K);
				if (te && ee.some((e) => e.markerType === f.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
				const ie = await c.waitFor(o({
					sleepMarkers: ee,
					nonwearMarkers: U,
					isInvalidNight: te,
					explicitNoNonwear: Y,
					notes: g
				})), re = null !== I ? await async function(e, t, n) {
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
					const c = m(), u = (/* @__PURE__ */ new Date()).toISOString();
					return await o.add({
						sessionId: c,
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
						startedAt: u,
						syncStatus: "pending",
						contentHash: n.contentHash,
						lastModifiedAt: u
					}), c;
				}(h, {
					fileId: a,
					date: i,
					username: r,
					algorithm: I
				}, {
					scorerVersion: P,
					detector: M,
					guider: D,
					sleepPeriodDetectionConfig: G,
					params: null,
					parameterSetHash: x,
					contentHash: E
				}) : null, le = {
					fileId: a,
					date: i,
					username: r,
					algorithm: O,
					detectionRule: j,
					periodGuider: D,
					sleepPeriodDetectionConfig: G,
					algorithmVersion: P,
					scoringSessionId: re,
					manualNonwearInSleep: !1,
					sleepMarkers: ee,
					nonwearMarkers: U,
					isInvalidNight: te,
					...ae ? { isInvalidNightImplicit: !0 } : {},
					explicitNoNonwear: Y,
					needsConsensus: Q,
					notes: g,
					contentHash: ie,
					syncStatus: "pending",
					lastModifiedAt: T?.lastModifiedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
					...void 0 !== H ? { scoringContext: H } : {},
					...void 0 !== T ? { restoredFromBackup: T.restoreId } : {}
				}, ce = {
					fileId: a,
					date: i,
					username: r,
					previous: N ?? null,
					committed: le,
					changed: se(N) !== se(le)
				};
				await oe(ce, n);
				const ue = T ? C : y, de = ue && ue !== C ? {
					algorithm: ue.algorithm,
					detectionRule: ue.detectionRule
				} : void 0;
				return await z({
					op: "markers_put",
					fileId: a,
					username: r,
					...void 0 !== T ? { restoredFromBackup: T.restoreId } : {},
					payload: {
						...le,
						prevContentHash: C?.contentHash,
						...de ? { replacedKey: de } : {}
					}
				}), await async function(e, t, { existing: n, replacement: a }, i) {
					const { fileId: r } = t;
					let s;
					n && JSON.stringify(n.sleepMarkers) === JSON.stringify(t.sleepMarkers) || await Promise.all(F.map(({ table: t, field: n }) => q(e, t).where("fileId").equals(r).modify({ [n]: !0 }))), a?.id ? (s = a.id, await e.markers.update(s, (e) => {
						Object.assign(e, t), void 0 === t.isInvalidNightImplicit && delete e.isInvalidNightImplicit, void 0 === t.restoredFromBackup && delete e.restoredFromBackup;
					})) : s = await e.markers.add(t);
					const o = await e.markerProvenance.get(r), l = d({
						...t,
						id: s
					}), c = o?.rows.find((e) => e.id === s);
					return ("auto_score" === l.username || l.nonwearDecided !== (c?.nonwearDecided ?? !1) || l.nonwearDecided && l.nonwearSpans !== c?.nonwearSpans) && await k([r], e, i), await e.markerProvenance.put({
						fileId: r,
						rows: [...(o?.rows ?? []).filter((e) => e.id !== s), l]
					}), s;
				}(t, le, {
					existing: C,
					replacement: ue
				}, e.signal), ce;
			}, e.signal);
			if (L) throw new ee();
			return B;
		}(r.input, t, a) : await async function(e, t, n, a) {
			const { fileId: i, date: r, username: s, algorithm: o, detectionRule: l, expected: c } = e;
			let u = !1;
			const p = await le(t, async () => {
				if (void 0 === await t.files.get(i)) throw new Z();
				const p = await S(e, o, l, t);
				if (void 0 !== c && !ne(p, c)) return p?.id && await V(p.id, t, p), u = !0, {
					fileId: i,
					date: r,
					username: s,
					previous: null,
					committed: null,
					changed: !1
				};
				if (!p) {
					const e = {
						fileId: i,
						date: r,
						username: s,
						previous: null,
						committed: null,
						changed: !1
					};
					return await oe(e, n), e;
				}
				const g = $(p);
				await z({
					op: "markers_delete",
					fileId: i,
					username: s,
					payload: {
						kind: "night_unscored",
						date: r,
						algorithm: p.algorithm,
						detectionRule: p.detectionRule,
						prevContentHash: p.contentHash
					}
				}), await async function(e, t, n, a) {
					const i = new Set(n.flatMap((e) => void 0 === e.id ? [] : [e.id]));
					await e.markers.bulkDelete([...i]);
					const r = await e.markerProvenance.get(t);
					r && await e.markerProvenance.put({
						fileId: t,
						rows: r.rows.filter((e) => !i.has(e.id))
					}), n.some((e) => "auto_score" === e.username || d({
						...e,
						id: e.id
					}).nonwearDecided) && await k([t], e, a);
				}(t, i, [p], a);
				const m = {
					fileId: i,
					date: r,
					username: s,
					previous: g,
					committed: null,
					changed: null !== se(g)
				};
				return await oe(m, n), m;
			}, a);
			if (u) throw new ee();
			if (null !== p.previous && "auto_score" !== s) {
				const { scheduleGgirRecompute: e } = await import("./local-export-worker-CjBDcX0Y.js").then((e) => e.y);
				e(i, s, t, a);
			}
			return p;
		}({
			...e,
			expected: r.expected
		}, t, a, r.signal ?? e.signal);
		return {
			record: s.committed,
			changed: s.changed
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
	return v(e, { periodMetrics: t }, n);
}
function ge(e) {
	return Object.keys(r).filter((t) => r[t].propagation.includes(e)).sort();
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
const he = "analysis_paradigm", _e = Object.values(s).flat();
function ve(e, t, n) {
	return a = function(e, t) {
		const n = H(t, E(e[he])), a = new Set(_e.filter((t) => r[t].appliesUnderParadigm !== n?.paradigm || function(e, t) {
			const n = O[r[e].range];
			return void 0 !== n && n(t);
		}(t, e[t])));
		G(t) || a.add(he);
		const i = {
			...Object.fromEntries(Object.entries(e).filter(([e]) => !a.has(e))),
			ggir_config: { sha256: _(e).sha256 }
		};
		return n && (delete i.ggir_config, i.default_algorithm = n.sleepAlgorithm, n.periodGuider && (i.period_guider = n.periodGuider), i.nonwear_detectors_counts = P({
			algorithm: n.sleepAlgorithm,
			periodGuider: n.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, n.paradigm, t).nonwearDetectorsCounts), G(t) ? (delete i.ggir_config, i.extraction_path = null, "ggir" !== J(i.default_algorithm) && (i.nonwear_detectors_ggir = null), i) : i;
	}(function(e, t, n = l().scoring()) {
		const a = n, i = {};
		for (const s of ge("materialized")) {
			const e = r[s].storeKeys.zustand;
			if (void 0 === e || !(e in a)) throw new Error(`materialized setting ${s} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			i[s] = a[e];
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
var Ie = i({
	GGIR_NO_PART4: () => Le,
	GGIR_NO_PART4_NOTE: () => ze,
	GGIR_PART4_NOT_READ: () => Be,
	assertUniqueGgirNightDates: () => Ke,
	editProvenance: () => Qe,
	editProvenanceFromLabels: () => Xe,
	ggirFirstDatedNight: () => $e,
	ggirImportCounts: () => We,
	ggirMarkerAlgorithm: () => Oe,
	ggirNightCoverage: () => qe,
	ggirNoPart4Note: () => Ue,
	ggirProposalDescription: () => je,
	ggirReportedNightDates: () => He,
	ggirResultsBundleRecord: () => De,
	ggirUnmarkedNightReason: () => Fe,
	ggirValueSets: () => Ge,
	labelEntries: () => Je,
	markerWindows: () => Ee,
	nightWindows: () => xe,
	prepareGgirReviewMarkers: () => tt,
	proposalNote: () => et,
	readGgirResultsInput: () => Me,
	recordingReports: () => Ae,
	saveGgirReviewMarkers: () => nt,
	stripMasks: () => Ne,
	summariesFromReview: () => Ze
});
const Ce = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function Me(e, t = []) {
	const [n, a, i, r, s, o] = await Promise.all([
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
		...s ? { ms5: s } : {},
		...o ? { sleeplogRData: o } : {},
		...e.sleeplogCsv ? { sleeplogCsv: await e.sleeplogCsv.text() } : {},
		recordingId: g(e.recordingFile),
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
function Re(n, i, r) {
	const s = new Set((i.nights.values[i.nights.columns.indexOf(t.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), o = new Set(Array.from({ length: i.nights.rows }, (t, n) => e(i.nights, n)).filter((e) => null !== e)), l = (e) => n.values[n.columns.indexOf(t.ggir_id.header)]?.[e], c = void 0 === r ? null : a(r), u = Array.from({ length: n.rows }, (e, t) => t).filter(0 === s.size && null !== c ? (t) => e(n, t) === c : (a) => null != l(a) && s.has(String(l(a))) && (!n.columns.includes(t.ggir_filename.header) || 0 === o.size || o.has(e(n, a) ?? "")));
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
const Pe = (e) => {
	const t = /* @__PURE__ */ new Set();
	return e.filter((e) => !t.has(e.night) && (t.add(e.night), !0));
};
function xe(e) {
	return Pe(e.sleepWindows);
}
function He(e) {
	return [...new Set(xe(e).map((e) => e.nightDate))].sort();
}
function $e(e) {
	return function(e) {
		return [...xe(e), ...e.bugAwareness ?? []].flatMap((e) => null == e.night || null == e.nightDate ? [] : [{
			night: e.night,
			nightDate: e.nightDate
		}]);
	}(e).reduce((e, t) => e && e.night <= t.night ? e : t, void 0);
}
function Ee(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return xe(e).filter((a) => t.has(a.night) && a.onsetMs >= e.startMs && a.wakeMs <= n && a.wakeMs > a.onsetMs);
}
function Oe(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case U: return u.VAN_HEES_2015;
		case B("cole_kripke_1992"): return u.COLE_KRIPKE_1992_GGIR;
		case B("sadeh_1994"): return u.SADEH_1994_GGIR;
		case B("galland_2012"): return u.GALLAND_2012;
		case B("oakley_1997"): return u.OAKLEY_1997;
		default: return null;
	}
}
function je(e) {
	return null == Oe(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${qe(e)}`;
}
function qe(e) {
	const t = xe(e).length;
	return `${String(Ee(e).length)} of ${String(t)} ${1 === t ? "night" : "nights"} GGIR reported got a GGIR marker.`;
}
const Te = {
	excluded_by_ggir_cleaning: "excluded by GGIR cleaning",
	window_is_other_nights_average: "window is other nights' average",
	sleep_times_are_guider_fill: "sleep times filled from a guide",
	window_outside_recording: "window falls outside the recording",
	missing_ggir_window: "GGIR did not supply a sleep window"
};
function Fe(e, t) {
	const n = (e.bugAwareness ?? []).find((e) => e.night === t && Te[e.name]);
	return n ? Te[n.name] : null == Oe(e) ? "GGIR sleep algorithm has no marker mapping" : "GGIR supplied no usable window";
}
const Ve = ["N valid WEdays", "N valid WKdays"], Le = "GGIR made no Part 4 for this recording", ze = `imported without GGIR sleep windows: ${Le}`, Be = "GGIR’s Part 4 milestone (meta/ms4.out) could not be read.";
function Ue(e, t) {
	if (e.sources.ms4) return null;
	if (e.importNotices.includes("GGIR’s Part 4 milestone (meta/ms4.out) could not be read.")) return "imported without GGIR sleep windows: its GGIR Part 4 milestone could not be read";
	const a = t?.["part2_summary.csv"], i = 1 === a?.rows ? Ve.map((e) => n(a, e, 0)) : [];
	return i.length > 0 && i.every((e) => 0 === e) ? `${ze} (it found no valid days)` : ze;
}
function We(e, t) {
	const n = /* @__PURE__ */ new Set([...xe(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), a = new Set(null == Oe(e) ? [] : Ee(e).map((e) => e.night)), i = /* @__PURE__ */ new Map();
	for (const s of n) {
		if (a.has(s)) continue;
		const t = Fe(e, s);
		i.set(t, (i.get(t) ?? 0) + 1);
	}
	const r = Ue(e, t);
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
function Ke(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.nightDate);
		if (null != e && e !== n.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		t.set(n.nightDate, n.night);
	}
}
const Je = (e, t) => e.flatMap((e, n) => void 0 === t[n] ? [] : [[e, t[n]]]), Ye = (e, t) => p(t).wallClockLabels(Float64Array.from(e));
async function Qe(e, t, n, a, i = !1) {
	const r = xe(e).find((e) => e.night === n);
	if (!r || !t.some((e) => e.night === n)) return null;
	const s = [r.onsetMs, r.wakeMs];
	return Xe(e, t, n, new Map(Je(s, await Ye(s, a))), i);
}
function Xe(e, t, n, a, i = !1) {
	const r = t.find((e) => e.night === n), s = xe(e).find((e) => e.night === n), o = s && a.get(s.onsetMs), l = s && a.get(s.wakeMs);
	if (!r || void 0 === o || void 0 === l) return null;
	const c = [r.onset !== o ? `onset moved ${i ? `${o} → ` : ""}${r.onset}` : null, r.wake !== l ? `wake moved ${i ? `${l} → ` : ""}${r.wake}` : null].filter((e) => null != e);
	return c.length > 0 ? `edited: ${c.join(", ")}` : null;
}
async function Ze(e, t, n, a = p(n)) {
	if (Ke(e.sleepWindows), !e.sources.ms5) return [];
	const i = (/* @__PURE__ */ new Date()).toISOString(), r = e.nightSummaries ?? [], s = new Map(xe(e).map((e) => [e.night, e.nightDate])), o = (e) => e.nightDate ?? (null == e.night ? void 0 : s.get(e.night)), l = new Map(await Promise.all([...new Set(r.map(o).filter((e) => null != e))].map(async (e) => [e, await Y(e, void 0, a)]))), c = Float64Array.from(r, (e) => e.validHours ?? NaN), u = e.includeDayCriterionHours ?? await a.ggirIncludeDayCriterionHours(null), d = Float64Array.from(r, () => u), g = await a.ggirDaysIncluded(c, d, null);
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
			...null == e.validHours ? {} : { meetsIncludeDayCriterion: 1 === g[n] },
			calibration: null,
			createdAt: i,
			updatedAt: i
		}];
	});
}
async function et(e, t, n, a = p(n)) {
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
	Ke(t.sleepWindows);
	const c = Oe(t);
	if (null == c) return !0;
	const u = ve(null, n), d = p(s);
	let g = !0;
	for (const p of o ?? await tt(t, r, d)) {
		const t = [{
			markerType: f.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: p.onsetTimestamp,
			offsetTimestamp: p.offsetTimestamp,
			source: "auto",
			settingsHash: u
		}];
		await l().nights.writeHeadless({
			signal: s,
			fileId: e,
			...i ? { expected: te(null) } : {},
			date: p.date,
			username: M,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p.notes,
			algorithm: c,
			sleepPeriodDetectionConfig: W(void 0, K) ?? null
		}, a, null).catch((e) => {
			s?.throwIfAborted(), j("warn", "GGIR results marker store failed", x(e)), g = !1;
		});
	}
	return g;
}
export { ve as C, de as D, te as E, ue as O, ke as S, pe as T, Me as _, $e as a, Ne as b, je as c, Fe as d, Ge as f, tt as g, xe as h, Qe as i, X as k, He as l, Ee as m, Be as n, Oe as o, Ie as p, Ke as r, Ue as s, Le as t, De as u, Ae as v, fe as w, Ze as x, nt as y };
