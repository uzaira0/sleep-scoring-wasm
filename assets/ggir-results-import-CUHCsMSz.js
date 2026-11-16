import { a as e, l as t, n, r, v as s } from "./ggir-results-types-kmrkPkJO.js";
import { Er as i, Fr as a, Nr as o, Or as l, R as d, ar as u, ct as c, dr as g, n as p, ot as m, sr as f, z as h } from "./background-jobs-BCPfjgGQ.js";
import { $n as w, Bn as v, Dr as I, Gn as y, Hn as k, Jn as C, Nn as M, Tr as N, Un as _, Vn as S, Wn as R, Wr as b, Xn as D, Zn as G, br as A, cn as P, dr as x, gn as H, jn as E, ln as O, mn as $, qn as j, un as T, ur as F, xr as L, yr as V } from "./db-D_ccV0o1.js";
import { i as z, t as W } from "./wal-DJUQnA2u.js";
import { i as B, t as q } from "./local-ggir-hasib-variants-2ONU_Y-p.js";
import { D as J, i as K, y as U } from "./local-nonwear-unified-DAJBkB8R.js";
import { a as X } from "./epoch-utils-pkRaHlkm.js";
function Y(e, t) {
	return {
		sleepPeriodDetectionConfig: N(e),
		sleepPeriodDetectionSummary: t ?? L(e)
	};
}
function Z(e) {
	return {
		algorithm: e.algorithm,
		...Y(e.sleepPeriodDetection, e.sleepPeriodDetectionSummary),
		sleepCount: e.sleepCount,
		napCount: e.napCount,
		markers: e.markers
	};
}
var Q = class extends Error {
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
const re = (e, t) => JSON.stringify([e, t]), se = /* @__PURE__ */ new Map();
function ie(e, t) {
	return e?.name ?? `${t?.sourceKey ?? "server"}:${t?.workspaceId ?? ""}`;
}
function ae(e) {
	return e && (0 !== (e.sleepMarkers?.length ?? 0) || 0 !== (e.nonwearMarkers?.length ?? 0) || e.isInvalidNight || e.explicitNoNonwear || e.needsConsensus || e.notes) ? function(e) {
		const t = (e) => Number(e.onsetTimestamp ?? e.startTimestamp ?? 0), n = (e, n) => Number(e.markerIndex ?? 0) - Number(n.markerIndex ?? 0) || t(e) - t(n), r = (e) => Array.isArray(e) ? (e.every((e) => null !== e && "object" == typeof e && !Array.isArray(e)) ? [...e].sort(n) : e).map(r) : null === e || "object" != typeof e ? e : Object.fromEntries(Object.keys(e).sort().map((t) => [t, r(e[t])]));
		return JSON.stringify(r(e));
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
	if (null === t) return o.Promise.resolve();
	const n = t.binding;
	if (!n) throw new Error("A local night write requires the audit binding captured at its act.");
	const r = (t) => ({
		fileId: e.fileId,
		analysisDate: e.date,
		action: t.action,
		...void 0 === t.payload ? {} : { payload: t.payload }
	}), s = ((e, t) => {
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
			payload: (r = {
				sleepCount: n.sleepMarkers.length,
				nonwearCount: n.nonwearMarkers?.length ?? 0,
				notes: n.notes || null,
				isInvalidNight: n.isInvalidNight,
				explicitNoNonwear: n.explicitNoNonwear ?? !1,
				sleepPeriodDetection: t?.sleepPeriodDetection ?? n.sleepPeriodDetectionConfig ?? null
			}, {
				sleepCount: r.sleepCount,
				nonwearCount: r.nonwearCount,
				notes: r.notes,
				isInvalidNight: r.isInvalidNight,
				explicitNoNonwear: r.explicitNoNonwear,
				...Y(r.sleepPeriodDetection, r.sleepPeriodDetectionSummary)
			})
		};
		var r;
	})(e, t);
	return w.appendNightEditsInTransaction([
		...(t?.carried ?? []).map((e) => ({
			binding: e.binding ?? n,
			input: r(e)
		})),
		...(t?.events?.(e.committed) ?? []).map((e) => ({
			binding: n,
			input: r(e)
		})),
		...s ? [{
			binding: n,
			input: r(s)
		}] : []
	]).then(() => {});
}
function le(e, t, n) {
	return z([
		e.markers,
		e.scoringSessions,
		e.markerProvenance,
		...A.map(({ table: t }) => e.table(t)),
		e.auditLog,
		e.files
	], t, e, n);
}
function de(e) {
	if (Array.isArray(e)) return e.map(de);
	if (e && "object" == typeof e) {
		const t = {};
		for (const [n, r] of Object.entries(e)) null != r && (t[n] = de(r));
		return t;
	}
	return e;
}
function ue(e, t, n, r) {
	return function(e, t) {
		const n = ((e) => re(e.store, e.fileId) + JSON.stringify([
			e.actor,
			e.date,
			k(e.algorithm),
			_(e.detectionRule)
		]))(e);
		return function(e, t, n) {
			const r = e.length > 0 ? Promise.all(e).then(n) : n(), s = r.then(() => {}, () => {});
			for (const i of t) se.set(i, s), s.then(() => {
				se.get(i) === s && se.delete(i);
			});
			return r;
		}([se.get(n), se.get((r = e.store, s = e.fileId, `${re(r, s)}*`))].filter((e) => void 0 !== e), [n], t);
		var r, s;
	}(((e, t) => ({
		store: ie(e),
		actor: t.username,
		fileId: t.fileId,
		date: t.date,
		algorithm: t.algorithm,
		detectionRule: t.detectionRule
	}))(t, e), async () => {
		const s = await R(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), i = await n(s ? C(s) : null);
		if (!i) return null;
		null !== r && await w.settleWrites();
		const a = "save" === i.kind ? await async function(e, t, n) {
			const { fileId: r, date: s, username: i, sleepMarkers: a, nonwearMarkers: l, isInvalidNight: u, isInvalidNightImplicit: p, notes: f, explicitNoNonwear: w, needsConsensus: N, algorithm: S = null, scoringContext: R, detectionRule: b = null, periodGuider: P = null, sleepPeriodDetectionConfig: x = null, algorithmVersion: H = null } = e, E = null !== S ? await o.waitFor(async function(e) {
				let t;
				if (e.extraParams) try {
					t = JSON.parse(e.extraParams);
				} catch {
					t = e.extraParams;
				}
				const n = de({
					algorithm: e.algorithm,
					detector: e.detector,
					guider: e.guider,
					sleep_period_detection_config: e.sleepPeriodDetectionConfig,
					scorer_version: e.scorerVersion,
					extra_params: t
				});
				return h(j(n));
			}({
				algorithm: S,
				detector: b,
				guider: P,
				sleepPeriodDetectionConfig: x,
				scorerVersion: H
			})) : null, O = R ?? (null !== S && null !== E ? {
				appVersion: "local",
				algorithmVersions: { [S]: H ?? "1" },
				paramsHash: E,
				stampedAt: (/* @__PURE__ */ new Date()).toISOString()
			} : void 0), $ = null !== S && null !== E ? await o.waitFor(h(j(de({
				fileId: r,
				date: s,
				username: i,
				algorithm: S,
				scorerVersion: H,
				detector: b,
				guider: P,
				sleepPeriodDetection: x,
				params: null,
				parameterSetHash: E
			})))) : null, T = k(S), F = _(b), L = e.restoredFromBackup;
			let z = !1;
			const B = await le(t, async (h) => {
				const k = await t.files.get(r);
				if (void 0 === k) throw new Q();
				const _ = await y({
					fileId: r,
					date: s,
					username: i
				}, S, b, t), R = _?.algorithm === T && _.detectionRule === F ? _ : void 0, j = _ ? C(_) : void 0;
				if (L && R && R.lastModifiedAt >= L.lastModifiedAt) return {
					fileId: r,
					date: s,
					username: i,
					previous: j ?? null,
					committed: C(R),
					changed: !1
				};
				if (void 0 !== e.expected) {
					if (!ne(j, e.expected)) return _?.id && await v(_.id, t, _), z = !0, {
						fileId: r,
						date: s,
						username: i,
						previous: j ?? null,
						committed: j ?? null,
						changed: !1
					};
					if (!0 !== e.guardHashOnly && j?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
				}
				const B = L ? R : j, q = l ?? B?.nonwearMarkers ?? [], J = u ?? B?.isInvalidNight ?? !1, K = void 0 === L && I(k, j ?? { sleepMarkers: [] }, { sleepMarkers: a }), U = J || K, X = w ?? B?.explicitNoNonwear ?? !1, Y = N ?? B?.needsConsensus ?? !1, Z = 0 === a.length || 0 === q.length ? null : (await o.waitFor(D([{
					sleepMarkers: a,
					nonwearMarkers: q,
					isInvalidNight: U
				}])))[0] ?? null, ee = Z ? G(a, Z) : a, te = U || (Z?.invalidates ?? !1), re = te && !Z?.invalidates && (J ? void 0 === u ? !0 === B?.isInvalidNightImplicit : !0 === p : K);
				if (te && ee.some((e) => e.markerType === g.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
				const se = await o.waitFor(d({
					sleepMarkers: ee,
					nonwearMarkers: q,
					isInvalidNight: te,
					explicitNoNonwear: X,
					notes: f
				})), ie = null !== S ? await async function(e, t, n) {
					const { fileId: r, date: s, username: i, algorithm: a } = t, o = e.table("scoringSessions"), l = await o.where("[fileId+date+username+algorithm]").equals([
						r,
						s,
						i,
						a
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
					const d = m(), u = (/* @__PURE__ */ new Date()).toISOString();
					return await o.add({
						sessionId: d,
						fileId: r,
						date: s,
						username: i,
						algorithm: a,
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
					}), d;
				}(h, {
					fileId: r,
					date: s,
					username: i,
					algorithm: S
				}, {
					scorerVersion: H,
					detector: b,
					guider: P,
					sleepPeriodDetectionConfig: x,
					params: null,
					parameterSetHash: E,
					contentHash: $
				}) : null, le = {
					fileId: r,
					date: s,
					username: i,
					algorithm: T,
					detectionRule: F,
					periodGuider: P,
					sleepPeriodDetectionConfig: x,
					algorithmVersion: H,
					scoringSessionId: ie,
					manualNonwearInSleep: !1,
					sleepMarkers: ee,
					nonwearMarkers: q,
					isInvalidNight: te,
					...re ? { isInvalidNightImplicit: !0 } : {},
					explicitNoNonwear: X,
					needsConsensus: Y,
					notes: f,
					contentHash: se,
					syncStatus: "pending",
					lastModifiedAt: L?.lastModifiedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
					...void 0 !== O ? { scoringContext: O } : {},
					...void 0 !== L ? { restoredFromBackup: L.restoreId } : {}
				}, de = {
					fileId: r,
					date: s,
					username: i,
					previous: j ?? null,
					committed: le,
					changed: ae(j) !== ae(le)
				};
				await oe(de, n);
				const ue = L ? R : _, ce = ue && ue !== R ? {
					algorithm: ue.algorithm,
					detectionRule: ue.detectionRule
				} : void 0;
				return await W({
					op: "markers_put",
					fileId: r,
					username: i,
					...void 0 !== L ? { restoredFromBackup: L.restoreId } : {},
					payload: {
						...le,
						prevContentHash: R?.contentHash,
						...ce ? { replacedKey: ce } : {}
					}
				}), await async function(e, t, { existing: n, replacement: r }, s) {
					const { fileId: i } = t;
					let a;
					n && JSON.stringify(n.sleepMarkers) === JSON.stringify(t.sleepMarkers) || await Promise.all(A.map(({ table: t, field: n }) => V(e, t).where("fileId").equals(i).modify({ [n]: !0 }))), r?.id ? (a = r.id, await e.markers.update(a, (e) => {
						Object.assign(e, t), void 0 === t.isInvalidNightImplicit && delete e.isInvalidNightImplicit, void 0 === t.restoredFromBackup && delete e.restoredFromBackup;
					})) : a = await e.markers.add(t);
					const o = await e.markerProvenance.get(i), l = c({
						...t,
						id: a
					}), d = o?.rows.find((e) => e.id === a);
					return ("auto_score" === l.username || l.nonwearDecided !== (d?.nonwearDecided ?? !1) || l.nonwearDecided && l.nonwearSpans !== d?.nonwearSpans) && await M([i], e, s), await e.markerProvenance.put({
						fileId: i,
						rows: [...(o?.rows ?? []).filter((e) => e.id !== a), l]
					}), a;
				}(t, le, {
					existing: R,
					replacement: ue
				}, e.signal), de;
			}, e.signal);
			if (z) throw new ee();
			return B;
		}(i.input, t, r) : await async function(e, t, n, r) {
			const { fileId: s, date: i, username: a, algorithm: o, detectionRule: l, expected: d } = e;
			let u = !1;
			const g = await le(t, async () => {
				if (void 0 === await t.files.get(s)) throw new Q();
				const g = await y(e, o, l, t);
				if (void 0 !== d && !ne(g, d)) return g?.id && await v(g.id, t, g), u = !0, {
					fileId: s,
					date: i,
					username: a,
					previous: null,
					committed: null,
					changed: !1
				};
				if (!g) {
					const e = {
						fileId: s,
						date: i,
						username: a,
						previous: null,
						committed: null,
						changed: !1
					};
					return await oe(e, n), e;
				}
				const p = C(g);
				await W({
					op: "markers_delete",
					fileId: s,
					username: a,
					payload: {
						kind: "night_unscored",
						date: i,
						algorithm: g.algorithm,
						detectionRule: g.detectionRule,
						prevContentHash: g.contentHash
					}
				}), await async function(e, t, n, r) {
					const s = new Set(n.flatMap((e) => void 0 === e.id ? [] : [e.id]));
					await e.markers.bulkDelete([...s]);
					const i = await e.markerProvenance.get(t);
					i && await e.markerProvenance.put({
						fileId: t,
						rows: i.rows.filter((e) => !s.has(e.id))
					}), n.some((e) => "auto_score" === e.username || c({
						...e,
						id: e.id
					}).nonwearDecided) && await M([t], e, r);
				}(t, s, [g], r);
				const m = {
					fileId: s,
					date: i,
					username: a,
					previous: p,
					committed: null,
					changed: null !== ae(p)
				};
				return await oe(m, n), m;
			}, r);
			if (u) throw new ee();
			if (null !== g.previous && "auto_score" !== a) {
				const { scheduleGgirRecompute: e } = await import("./local-export-worker-DRuJMI8r.js").then((e) => e.y);
				e(s, a, t, r);
			}
			return g;
		}({
			...e,
			expected: i.expected
		}, t, r, i.signal ?? e.signal);
		return {
			record: a.committed,
			changed: a.changed
		};
	});
}
async function ce(e, t, n) {
	return { changed: (await ue(e, t, () => Promise.resolve({
		kind: "unscore",
		expected: e.expected
	}), n)).changed };
}
function ge(e, t, n) {
	return S(e, { periodMetrics: t }, n);
}
function pe(e) {
	return Object.keys(l).filter((t) => l[t].propagation.includes(e)).sort();
}
function me(e) {
	return null == e ? " " : "object" != typeof e ? String(e) : Array.isArray(e) ? `[${e.map(me).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0).map(([e, t]) => `${e}:${me(t)}`).join(",")}}`;
}
function fe(e, t) {
	return function(e, t) {
		const n = e?.recording, r = n?.bodySite;
		return "wrist" === r || "hip" === r ? {
			sensorLocation: r,
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
const he = "analysis_paradigm", we = Object.values(i).flat();
function ve(e, t, n) {
	return r = function(e, t) {
		const n = P(t, O(e[he])), r = new Set(we.filter((t) => l[t].appliesUnderParadigm !== n?.paradigm || function(e, t) {
			const n = H[l[e].range];
			return void 0 !== n && n(t);
		}(t, e[t])));
		$(t) || r.add(he);
		const s = {
			...Object.fromEntries(Object.entries(e).filter(([e]) => !r.has(e))),
			ggir_config: { sha256: E(e).sha256 }
		};
		return n && (delete s.ggir_config, s.default_algorithm = n.sleepAlgorithm, n.periodGuider && (s.period_guider = n.periodGuider), s.nonwear_detectors_counts = T({
			algorithm: n.sleepAlgorithm,
			periodGuider: n.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, n.paradigm, t).nonwearDetectorsCounts), $(t) ? (delete s.ggir_config, s.extraction_path = null, "ggir" !== U(s.default_algorithm) && (s.nonwear_detectors_ggir = null), s) : s;
	}(function(e, t, n = a().scoring()) {
		const r = n, s = {};
		for (const i of pe("materialized")) {
			const e = l[i].storeKeys.zustand;
			if (void 0 === e || !(e in r)) throw new Error(`materialized setting ${i} has no live value to hash (zustand projection: ${e ?? "none"}); give it a store projection or drop \`materialized\` from its propagation`);
			s[i] = r[e];
		}
		return s.sleep_period_detection = {
			value: s.sleep_period_detection,
			resolvedSensorLocation: fe(e, t)
		}, s;
	}(e, t, n), e), function(e, t) {
		const n = e.filter((e) => e in t).map((e) => `${e}=${me(t[e])}`);
		let r = 2166136261;
		for (const s of n.join("")) r ^= s.charCodeAt(0), r = Math.imul(r, 16777619) >>> 0;
		return r.toString(16).padStart(8, "0");
	}(pe("materialized"), r);
	var r;
}
var Ie = s({
	GGIR_NO_PART4: () => je,
	GGIR_NO_PART4_NOTE: () => Te,
	GGIR_PART4_NOT_READ: () => Fe,
	assertUniqueGgirNightDates: () => ze,
	editProvenance: () => qe,
	editProvenanceFromLabels: () => Je,
	ggirImportCounts: () => Ve,
	ggirMarkerAlgorithm: () => Pe,
	ggirNightCoverage: () => He,
	ggirNoPart4Note: () => Le,
	ggirProposalDescription: () => xe,
	ggirReportedNightDates: () => Ge,
	ggirResultsBundleRecord: () => Se,
	ggirUnmarkedNightReason: () => Oe,
	ggirValueSets: () => Re,
	labelEntries: () => We,
	markerWindows: () => Ae,
	nightWindows: () => De,
	prepareGgirReviewMarkers: () => Xe,
	proposalNote: () => Ue,
	readGgirResultsInput: () => ke,
	recordingReports: () => _e,
	saveGgirReviewMarkers: () => Ye,
	stripMasks: () => Ce,
	summariesFromReview: () => Ke
});
const ye = async (e) => e ? new Uint8Array(await e.arrayBuffer()) : void 0;
async function ke(e, t = []) {
	const [n, r, s, i, a, o] = await Promise.all([
		ye(e.part1),
		ye(e.ms2),
		ye(e.ms3),
		ye(e.ms4),
		ye(e.ms5),
		ye(e.sleeplogRData)
	]);
	return {
		part1: n,
		configCsv: await e.configCsv.text(),
		...r ? { ms2: r } : {},
		...s ? { ms3: s } : {},
		...i ? { ms4: i } : {},
		...a ? { ms5: a } : {},
		...o ? { sleeplogRData: o } : {},
		...e.sleeplogCsv ? { sleeplogCsv: await e.sleeplogCsv.text() } : {},
		recordingId: u(e.recordingFile),
		...e.cleanedNightsCsv ? { cleanedNightsCsv: await e.cleanedNightsCsv.text() } : {},
		...e.dataCleaningCsv ? { dataCleaningCsv: await e.dataCleaningCsv.text() } : {},
		edits: t,
		crossCheck: !1
	};
}
function Ce(e) {
	const { sib: t, invalid: n, nonwear: r, ...s } = e;
	return s;
}
const Me = (e) => e ? e.slice().buffer : void 0;
function Ne(n, s, i) {
	const a = new Set((s.nights.values[s.nights.columns.indexOf(t.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), o = new Set(Array.from({ length: s.nights.rows }, (t, n) => e(s.nights, n)).filter((e) => null !== e)), l = (e) => n.values[n.columns.indexOf(t.ggir_id.header)]?.[e], d = void 0 === i ? null : r(i), u = Array.from({ length: n.rows }, (e, t) => t).filter(0 === a.size && null !== d ? (t) => e(n, t) === d : (r) => null != l(r) && a.has(String(l(r))) && (!n.columns.includes(t.ggir_filename.header) || 0 === o.size || o.has(e(n, r) ?? "")));
	return {
		columns: n.columns,
		rows: u.length,
		values: n.values.map((e) => u.map((t) => e[t]))
	};
}
const _e = (e, t, n) => Object.fromEntries(Object.entries(e ?? {}).map(([e, r]) => [e, Ne(r, t, n)]));
function Se(e, t, n, r, s = {}) {
	const i = Me(n.ms2), a = Me(n.ms3), o = Me(n.ms4), l = Me(n.ms5), d = Me(n.sleeplogRData);
	return {
		fileId: e,
		recordingFile: t,
		part1: Me(n.part1),
		configCsv: n.configCsv,
		part2Reports: _e(s.part2Reports, r, t),
		...s.personReports ? { personReports: _e(s.personReports, r, t) } : {},
		...n.cleanedNightsCsv ? { cleanedNightsCsv: n.cleanedNightsCsv } : {},
		...n.dataCleaningCsv ? { dataCleaningCsv: n.dataCleaningCsv } : {},
		...i ? { ms2: i } : {},
		...a ? { ms3: a } : {},
		...o ? { ms4: o } : {},
		...l ? { ms5: l } : {},
		...d ? { sleeplogRData: d } : {},
		...n.sleeplogCsv ? { sleeplogCsv: n.sleeplogCsv } : {},
		...void 0 !== s.qwindowCsv ? { qwindowCsv: s.qwindowCsv } : {},
		...s.resultsCsv ? { resultsCsv: s.resultsCsv } : {},
		imported: Ce(r),
		edits: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function Re(e, t, n = !0) {
	if (!e.ggirCorrections) {
		if (!n || !t?.values || !t.ggirCorrections) return [{
			set: "default",
			bundle: e
		}];
		const { current: r, ms2: s, ms3: i, ms4: a, ms5: o, cleanedNightsCsv: l, part2Reports: d, personReports: u, ...c } = e;
		return [{
			set: "default",
			bundle: e
		}, {
			set: "corrected",
			bundle: {
				...c,
				...t.values,
				ggirCorrections: t.ggirCorrections
			}
		}];
	}
	const { stock: r, stockMs2: s, stockMs3: i, stockMs4: a, stockMs5: o, ggirCorrections: l, ms2: d, ms3: u, ms4: c, ms5: g, cleanedNightsCsv: p, part2Reports: m, personReports: f, current: h, ...w } = e, v = r ? [{
		set: "default",
		bundle: {
			...w,
			...r,
			...s ? { ms2: s } : {},
			...i ? { ms3: i } : {},
			...a ? { ms4: a } : {},
			...o ? { ms5: o } : {}
		}
	}] : [];
	return v.length > 0 && !n ? v : [...v, {
		set: "corrected",
		bundle: e
	}];
}
const be = (e) => {
	const t = /* @__PURE__ */ new Set();
	return e.filter((e) => !t.has(e.night) && (t.add(e.night), !0));
};
function De(e) {
	return be(e.sleepWindows);
}
function Ge(e) {
	return [...new Set(De(e).map((e) => e.nightDate))].sort();
}
function Ae(e) {
	const t = new Set(e.markerNights ?? []), n = e.endMs ?? e.startMs + (e.nEpochs - 1) * e.epochSeconds * 1e3;
	return De(e).filter((r) => t.has(r.night) && r.onsetMs >= e.startMs && r.wakeMs <= n && r.wakeMs > r.onsetMs);
}
function Pe(e) {
	if (null == e.appliedHasibAlgo) return null;
	switch (e.appliedHasibAlgo) {
		case q: return f.VAN_HEES_2015;
		case B("cole_kripke_1992"): return f.COLE_KRIPKE_1992_GGIR;
		case B("sadeh_1994"): return f.SADEH_1994_GGIR;
		case B("galland_2012"): return f.GALLAND_2012;
		case B("oakley_1997"): return f.OAKLEY_1997;
		default: return null;
	}
}
function xe(e) {
	return null == Pe(e) ? "No GGIR results markers placed: the applied HASIB algorithm has no marker mapping." : `Markers use GGIR’s own cleaned Part 4 windows (${e.appliedHasibAlgo}). ${He(e)}`;
}
function He(e) {
	const t = De(e).length;
	return `${String(Ae(e).length)} of ${String(t)} ${1 === t ? "night" : "nights"} GGIR reported got a GGIR marker.`;
}
const Ee = {
	excluded_by_ggir_cleaning: "excluded by GGIR cleaning",
	window_is_other_nights_average: "window is other nights' average",
	sleep_times_are_guider_fill: "sleep times filled from a guide",
	window_outside_recording: "window falls outside the recording",
	missing_ggir_window: "GGIR did not supply a sleep window"
};
function Oe(e, t) {
	const n = (e.bugAwareness ?? []).find((e) => e.night === t && Ee[e.name]);
	return n ? Ee[n.name] : null == Pe(e) ? "GGIR sleep algorithm has no marker mapping" : "GGIR supplied no usable window";
}
const $e = ["N valid WEdays", "N valid WKdays"], je = "GGIR made no Part 4 for this recording", Te = `imported without GGIR sleep windows: ${je}`, Fe = "GGIR’s Part 4 milestone (meta/ms4.out) could not be read.";
function Le(e, t) {
	if (e.sources.ms4) return null;
	if (e.importNotices.includes("GGIR’s Part 4 milestone (meta/ms4.out) could not be read.")) return "imported without GGIR sleep windows: its GGIR Part 4 milestone could not be read";
	const r = t?.["part2_summary.csv"], s = 1 === r?.rows ? $e.map((e) => n(r, e, 0)) : [];
	return s.length > 0 && s.every((e) => 0 === e) ? `${Te} (it found no valid days)` : Te;
}
function Ve(e, t) {
	const n = /* @__PURE__ */ new Set([...De(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), r = new Set(null == Pe(e) ? [] : Ae(e).map((e) => e.night)), s = /* @__PURE__ */ new Map();
	for (const a of n) {
		if (r.has(a)) continue;
		const t = Oe(e, a);
		s.set(t, (s.get(t) ?? 0) + 1);
	}
	const i = Le(e, t);
	return {
		reportedNights: n.size,
		markedNights: r.size,
		exclusions: [...s].map(([e, t]) => ({
			reason: e,
			count: t
		})),
		...i ? { note: i } : {}
	};
}
function ze(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e) {
		const e = t.get(n.nightDate);
		if (null != e && e !== n.night) throw new Error("GGIR results contain multiple nights on one date; import refused.");
		t.set(n.nightDate, n.night);
	}
}
const We = (e, t) => e.flatMap((e, n) => void 0 === t[n] ? [] : [[e, t[n]]]), Be = (e, t) => p(t).wallClockLabels(Float64Array.from(e));
async function qe(e, t, n, r, s = !1) {
	const i = De(e).find((e) => e.night === n);
	if (!i || !t.some((e) => e.night === n)) return null;
	const a = [i.onsetMs, i.wakeMs];
	return Je(e, t, n, new Map(We(a, await Be(a, r))), s);
}
function Je(e, t, n, r, s = !1) {
	const i = t.find((e) => e.night === n), a = De(e).find((e) => e.night === n), o = a && r.get(a.onsetMs), l = a && r.get(a.wakeMs);
	if (!i || void 0 === o || void 0 === l) return null;
	const d = [i.onset !== o ? `onset moved ${s ? `${o} → ` : ""}${i.onset}` : null, i.wake !== l ? `wake moved ${s ? `${l} → ` : ""}${i.wake}` : null].filter((e) => null != e);
	return d.length > 0 ? `edited: ${d.join(", ")}` : null;
}
async function Ke(e, t, n, r = p(n)) {
	if (ze(e.sleepWindows), !e.sources.ms5) return [];
	const s = (/* @__PURE__ */ new Date()).toISOString(), i = e.nightSummaries ?? [], a = new Map(De(e).map((e) => [e.night, e.nightDate])), o = (e) => e.nightDate ?? (null == e.night ? void 0 : a.get(e.night)), l = new Map(await Promise.all([...new Set(i.map(o).filter((e) => null != e))].map(async (e) => [e, await X(e, void 0, r)]))), d = Float64Array.from(i, (e) => e.validHours ?? NaN), u = e.includeDayCriterionHours ?? await r.ggirIncludeDayCriterionHours(null), c = Float64Array.from(i, () => u), g = await r.ggirDaysIncluded(d, c, null);
	return i.flatMap((e, n) => {
		const r = o(e);
		return null == r ? [] : [{
			fileId: t,
			analysisDate: l.get(r),
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
			createdAt: s,
			updatedAt: s
		}];
	});
}
async function Ue(e, t, n, r = p(n)) {
	const [s, i] = await r.wallClockLabels(Float64Array.of(t.onsetMs, t.wakeMs));
	return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(t.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${s} → ${i}`;
}
async function Xe(e, t, n) {
	return Promise.all(Ae(e).map(async (r) => {
		const [s, i] = await n.ggirLabelsToStoredMs(Float64Array.of(r.onsetMs, r.wakeMs), t), a = await Ue(e, r, void 0, n);
		return {
			date: r.nightDate,
			onsetTimestamp: s / 1e3,
			offsetTimestamp: i / 1e3,
			notes: a
		};
	}));
}
async function Ye(e, t, n, r, s, i = [], o, l) {
	ze(t.sleepWindows);
	const d = Pe(t);
	if (null == d) return !0;
	const u = ve(null, n), c = p(o);
	let m = !0;
	for (const p of l ?? await Xe(t, i, c)) {
		const t = [{
			markerType: g.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: p.onsetTimestamp,
			offsetTimestamp: p.offsetTimestamp,
			source: "auto",
			settingsHash: u
		}];
		await a().nights.writeHeadless({
			signal: o,
			fileId: e,
			...s ? { expected: te(null) } : {},
			date: p.date,
			username: b,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: p.notes,
			algorithm: d,
			sleepPeriodDetectionConfig: J(void 0, K) ?? null
		}, r, null).catch((e) => {
			o?.throwIfAborted(), x("warn", "GGIR results marker store failed", F(e)), m = !1;
		});
	}
	return m;
}
export { ge as C, Z as D, ue as E, fe as S, ce as T, _e as _, Pe as a, Ke as b, Ge as c, Re as d, Ie as f, ke as g, Xe as h, qe as i, Se as l, De as m, Fe as n, Le as o, Ae as p, ze as r, xe as s, je as t, Oe as u, Ye as v, te as w, ve as x, Ce as y };
