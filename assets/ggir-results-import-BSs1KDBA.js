import { a as e, c as t, g as n, n as r, r as s } from "./ggir-results-types-e7JA7N7O.js";
import { D as i, En as a, Sn as o, T as l, Un as d, Vn as u, Yn as c, Zn as g, _r as p, bn as m, n as f, vr as h } from "./background-jobs-DfX4HEEW.js";
import { Er as w, Gn as v, Hn as I, Jn as y, Kn as k, Mn as C, Pn as M, Qn as N, Un as _, Ur as S, Vn as b, Wn as R, Yn as D, Zn as G, an as A, br as P, er as x, fn as H, in as E, lr as O, on as $, un as j, ur as T, vr as F, wr as V, yr as L } from "./db-89zTZpB7.js";
import { i as z, t as W } from "./wal-D_Sx3Exe.js";
import { i as B, t as K } from "./local-ggir-hasib-variants-iPyq8BpV.js";
import { D as q, i as J, y as U } from "./local-nonwear-unified-D2LSPpG8.js";
import { a as Y } from "./epoch-utils-ChGMQfjw.js";
function Z(e, t) {
	return {
		sleepPeriodDetectionConfig: V(e),
		sleepPeriodDetectionSummary: t ?? P(e)
	};
}
function Q(e) {
	return {
		algorithm: e.algorithm,
		...Z(e.sleepPeriodDetection, e.sleepPeriodDetectionSummary),
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
	if (null === t) return g.Promise.resolve();
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
				...Z(r.sleepPeriodDetection, r.sleepPeriodDetectionSummary)
			})
		};
		var r;
	})(e, t);
	return x.appendNightEditsInTransaction([
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
		...L.map(({ table: t }) => e.table(t)),
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
			_(e.algorithm),
			R(e.detectionRule)
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
		const s = await v(e.fileId, e.date, e.username, e.algorithm, e.detectionRule, t), o = await n(s ? D(s) : null);
		if (!o) return null;
		null !== r && await x.settleWrites();
		const d = "save" === o.kind ? await async function(e, t, n) {
			const { fileId: r, date: s, username: o, sleepMarkers: d, nonwearMarkers: u, isInvalidNight: c, isInvalidNightImplicit: m, notes: f, explicitNoNonwear: v, needsConsensus: I, algorithm: C = null, scoringContext: S, detectionRule: A = null, periodGuider: P = null, sleepPeriodDetectionConfig: x = null, algorithmVersion: H = null } = e, E = null !== C ? await g.waitFor(async function(e) {
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
				return h(y(n));
			}({
				algorithm: C,
				detector: A,
				guider: P,
				sleepPeriodDetectionConfig: x,
				scorerVersion: H
			})) : null, O = S ?? (null !== C && null !== E ? {
				appVersion: "local",
				algorithmVersions: { [C]: H ?? "1" },
				paramsHash: E,
				stampedAt: (/* @__PURE__ */ new Date()).toISOString()
			} : void 0), $ = null !== C && null !== E ? await g.waitFor(h(y(de({
				fileId: r,
				date: s,
				username: o,
				algorithm: C,
				scorerVersion: H,
				detector: A,
				guider: P,
				sleepPeriodDetection: x,
				params: null,
				parameterSetHash: E
			})))) : null, j = _(C), T = R(A), V = e.restoredFromBackup;
			let z = !1;
			const B = await le(t, async (h) => {
				const y = await t.files.get(r);
				if (void 0 === y) throw new X();
				const _ = await k({
					fileId: r,
					date: s,
					username: o
				}, C, A, t), S = _?.algorithm === j && _.detectionRule === T ? _ : void 0, R = _ ? D(_) : void 0;
				if (V && S && S.lastModifiedAt >= V.lastModifiedAt) return {
					fileId: r,
					date: s,
					username: o,
					previous: R ?? null,
					committed: D(S),
					changed: !1
				};
				if (void 0 !== e.expected) {
					if (!ne(R, e.expected)) return _?.id && await b(_.id, t, _), z = !0, {
						fileId: r,
						date: s,
						username: o,
						previous: R ?? null,
						committed: R ?? null,
						changed: !1
					};
					if (!0 !== e.guardHashOnly && R?.sleepMarkers.some((e) => "auto" !== e.source || e.edited)) throw new Error("Markers changed during rescore");
				}
				const B = V ? S : R, K = u ?? B?.nonwearMarkers ?? [], q = c ?? B?.isInvalidNight ?? !1, J = void 0 === V && w(y, R ?? { sleepMarkers: [] }, { sleepMarkers: d }), U = q || J, Y = v ?? B?.explicitNoNonwear ?? !1, Z = I ?? B?.needsConsensus ?? !1, Q = 0 === d.length || 0 === K.length ? null : (await g.waitFor(G([{
					sleepMarkers: d,
					nonwearMarkers: K,
					isInvalidNight: U
				}])))[0] ?? null, ee = Q ? N(d, Q) : d, te = U || (Q?.invalidates ?? !1), re = te && !Q?.invalidates && (q ? void 0 === c ? !0 === B?.isInvalidNightImplicit : !0 === m : J);
				if (te && ee.some((e) => e.markerType === a.MAIN_SLEEP)) throw new Error("is_invalid_night cannot be true when MAIN_SLEEP markers are present");
				const se = await g.waitFor(p({
					sleepMarkers: ee,
					nonwearMarkers: K,
					isInvalidNight: te,
					explicitNoNonwear: Y,
					notes: f
				})), ie = null !== C ? await async function(e, t, n) {
					const { fileId: r, date: s, username: i, algorithm: a } = t, o = e.table("scoringSessions"), d = await o.where("[fileId+date+username+algorithm]").equals([
						r,
						s,
						i,
						a
					]).first();
					if (d) return await o.update(d.sessionId, {
						scorerVersion: n.scorerVersion ?? null,
						detector: n.detector ?? null,
						guider: n.guider ?? null,
						sleepPeriodDetection: n.sleepPeriodDetectionConfig ?? null,
						params: n.params ?? null,
						parameterSetHash: n.parameterSetHash,
						contentHash: n.contentHash,
						lastModifiedAt: (/* @__PURE__ */ new Date()).toISOString()
					}), d.sessionId;
					const u = l(), c = (/* @__PURE__ */ new Date()).toISOString();
					return await o.add({
						sessionId: u,
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
						startedAt: c,
						syncStatus: "pending",
						contentHash: n.contentHash,
						lastModifiedAt: c
					}), u;
				}(h, {
					fileId: r,
					date: s,
					username: o,
					algorithm: C
				}, {
					scorerVersion: H,
					detector: A,
					guider: P,
					sleepPeriodDetectionConfig: x,
					params: null,
					parameterSetHash: E,
					contentHash: $
				}) : null, le = {
					fileId: r,
					date: s,
					username: o,
					algorithm: j,
					detectionRule: T,
					periodGuider: P,
					sleepPeriodDetectionConfig: x,
					algorithmVersion: H,
					scoringSessionId: ie,
					manualNonwearInSleep: !1,
					sleepMarkers: ee,
					nonwearMarkers: K,
					isInvalidNight: te,
					...re ? { isInvalidNightImplicit: !0 } : {},
					explicitNoNonwear: Y,
					needsConsensus: Z,
					notes: f,
					contentHash: se,
					syncStatus: "pending",
					lastModifiedAt: V?.lastModifiedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
					...void 0 !== O ? { scoringContext: O } : {},
					...void 0 !== V ? { restoredFromBackup: V.restoreId } : {}
				}, de = {
					fileId: r,
					date: s,
					username: o,
					previous: R ?? null,
					committed: le,
					changed: ae(R) !== ae(le)
				};
				await oe(de, n);
				const ue = V ? S : _, ce = ue && ue !== S ? {
					algorithm: ue.algorithm,
					detectionRule: ue.detectionRule
				} : void 0;
				return await W({
					op: "markers_put",
					fileId: r,
					username: o,
					...void 0 !== V ? { restoredFromBackup: V.restoreId } : {},
					payload: {
						...le,
						prevContentHash: S?.contentHash,
						...ce ? { replacedKey: ce } : {}
					}
				}), await async function(e, t, { existing: n, replacement: r }, s) {
					const { fileId: a } = t;
					let o;
					n && JSON.stringify(n.sleepMarkers) === JSON.stringify(t.sleepMarkers) || await Promise.all(L.map(({ table: t, field: n }) => F(e, t).where("fileId").equals(a).modify({ [n]: !0 }))), r?.id ? (o = r.id, await e.markers.update(o, (e) => {
						Object.assign(e, t), void 0 === t.isInvalidNightImplicit && delete e.isInvalidNightImplicit, void 0 === t.restoredFromBackup && delete e.restoredFromBackup;
					})) : o = await e.markers.add(t);
					const l = await e.markerProvenance.get(a), d = i({
						...t,
						id: o
					}), u = l?.rows.find((e) => e.id === o);
					return ("auto_score" === d.username || d.nonwearDecided !== (u?.nonwearDecided ?? !1) || d.nonwearDecided && d.nonwearSpans !== u?.nonwearSpans) && await M([a], e, s), await e.markerProvenance.put({
						fileId: a,
						rows: [...(l?.rows ?? []).filter((e) => e.id !== o), d]
					}), o;
				}(t, le, {
					existing: S,
					replacement: ue
				}, e.signal), de;
			}, e.signal);
			if (z) throw new ee();
			return B;
		}(o.input, t, r) : await async function(e, t, n, r) {
			const { fileId: s, date: a, username: o, algorithm: l, detectionRule: d, expected: u } = e;
			let c = !1;
			const g = await le(t, async () => {
				if (void 0 === await t.files.get(s)) throw new X();
				const g = await k(e, l, d, t);
				if (void 0 !== u && !ne(g, u)) return g?.id && await b(g.id, t, g), c = !0, {
					fileId: s,
					date: a,
					username: o,
					previous: null,
					committed: null,
					changed: !1
				};
				if (!g) {
					const e = {
						fileId: s,
						date: a,
						username: o,
						previous: null,
						committed: null,
						changed: !1
					};
					return await oe(e, n), e;
				}
				const p = D(g);
				await W({
					op: "markers_delete",
					fileId: s,
					username: o,
					payload: {
						kind: "night_unscored",
						date: a,
						algorithm: g.algorithm,
						detectionRule: g.detectionRule,
						prevContentHash: g.contentHash
					}
				}), await async function(e, t, n, r) {
					const s = new Set(n.flatMap((e) => void 0 === e.id ? [] : [e.id]));
					await e.markers.bulkDelete([...s]);
					const a = await e.markerProvenance.get(t);
					a && await e.markerProvenance.put({
						fileId: t,
						rows: a.rows.filter((e) => !s.has(e.id))
					}), n.some((e) => "auto_score" === e.username || i({
						...e,
						id: e.id
					}).nonwearDecided) && await M([t], e, r);
				}(t, s, [g], r);
				const m = {
					fileId: s,
					date: a,
					username: o,
					previous: p,
					committed: null,
					changed: null !== ae(p)
				};
				return await oe(m, n), m;
			}, r);
			if (c) throw new ee();
			if (null !== g.previous && "auto_score" !== o) {
				const { scheduleGgirRecompute: e } = await import("./local-export-shard-worker-Bc5pptxZ.js").then((e) => e.y);
				e(s, o, t, r);
			}
			return g;
		}({
			...e,
			expected: o.expected
		}, t, r, o.signal ?? e.signal);
		return {
			record: d.committed,
			changed: d.changed
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
	return I(e, { periodMetrics: t }, n);
}
function pe(e) {
	return Object.keys(d).filter((t) => d[t].propagation.includes(e)).sort();
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
const he = "analysis_paradigm", we = Object.values(u).flat();
function ve(e, t, n) {
	return r = function(e, t) {
		const n = E(t, A(e[he])), r = new Set(we.filter((t) => d[t].appliesUnderParadigm !== n?.paradigm || function(e, t) {
			const n = H[d[e].range];
			return void 0 !== n && n(t);
		}(t, e[t])));
		j(t) || r.add(he);
		const s = {
			...Object.fromEntries(Object.entries(e).filter(([e]) => !r.has(e))),
			ggir_config: { sha256: C(e).sha256 }
		};
		return n && (delete s.ggir_config, s.default_algorithm = n.sleepAlgorithm, n.periodGuider && (s.period_guider = n.periodGuider), s.nonwear_detectors_counts = $({
			algorithm: n.sleepAlgorithm,
			periodGuider: n.periodGuider ?? "smart",
			nonwearDetectorsCounts: Array.isArray(e.nonwear_detectors_counts) ? e.nonwear_detectors_counts : []
		}, n.paradigm, t).nonwearDetectorsCounts), j(t) ? (delete s.ggir_config, s.extraction_path = null, "ggir" !== U(s.default_algorithm) && (s.nonwear_detectors_ggir = null), s) : s;
	}(function(e, t, n = c().scoring()) {
		const r = n, s = {};
		for (const i of pe("materialized")) {
			const e = d[i].storeKeys.zustand;
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
var Ie = n({
	GGIR_NO_PART4: () => je,
	GGIR_NO_PART4_NOTE: () => Te,
	GGIR_PART4_NOT_READ: () => Fe,
	assertUniqueGgirNightDates: () => ze,
	editProvenance: () => Ke,
	editProvenanceFromLabels: () => qe,
	ggirImportCounts: () => Le,
	ggirMarkerAlgorithm: () => Pe,
	ggirNightCoverage: () => He,
	ggirNoPart4Note: () => Ve,
	ggirProposalDescription: () => xe,
	ggirReportedNightDates: () => Ge,
	ggirResultsBundleRecord: () => Se,
	ggirUnmarkedNightReason: () => Oe,
	ggirValueSets: () => be,
	labelEntries: () => We,
	markerWindows: () => Ae,
	nightWindows: () => De,
	prepareGgirReviewMarkers: () => Ye,
	proposalNote: () => Ue,
	readGgirResultsInput: () => ke,
	recordingReports: () => _e,
	saveGgirReviewMarkers: () => Ze,
	stripMasks: () => Ce,
	summariesFromReview: () => Je
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
		recordingId: m(e.recordingFile),
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
function Ne(n, r, i) {
	const a = new Set((r.nights.values[r.nights.columns.indexOf(t.ggir_id.header)] ?? []).filter((e) => null != e).map(String)), o = new Set(Array.from({ length: r.nights.rows }, (t, n) => e(r.nights, n)).filter((e) => null !== e)), l = (e) => n.values[n.columns.indexOf(t.ggir_id.header)]?.[e], d = void 0 === i ? null : s(i), u = Array.from({ length: n.rows }, (e, t) => t).filter(0 === a.size && null !== d ? (t) => e(n, t) === d : (r) => null != l(r) && a.has(String(l(r))) && (!n.columns.includes(t.ggir_filename.header) || 0 === o.size || o.has(e(n, r) ?? "")));
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
function be(e, t, n = !0) {
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
const Re = (e) => {
	const t = /* @__PURE__ */ new Set();
	return e.filter((e) => !t.has(e.night) && (t.add(e.night), !0));
};
function De(e) {
	return Re(e.sleepWindows);
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
		case K: return o.VAN_HEES_2015;
		case B("cole_kripke_1992"): return o.COLE_KRIPKE_1992_GGIR;
		case B("sadeh_1994"): return o.SADEH_1994_GGIR;
		case B("galland_2012"): return o.GALLAND_2012;
		case B("oakley_1997"): return o.OAKLEY_1997;
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
function Ve(e, t) {
	if (e.sources.ms4) return null;
	if (e.importNotices.includes("GGIR’s Part 4 milestone (meta/ms4.out) could not be read.")) return "imported without GGIR sleep windows: its GGIR Part 4 milestone could not be read";
	const n = t?.["part2_summary.csv"], s = 1 === n?.rows ? $e.map((e) => r(n, e, 0)) : [];
	return s.length > 0 && s.every((e) => 0 === e) ? `${Te} (it found no valid days)` : Te;
}
function Le(e, t) {
	const n = /* @__PURE__ */ new Set([...De(e).map((e) => e.night), ...(e.nightSummaries ?? []).flatMap((e) => null == e.night ? [] : [e.night])]), r = new Set(null == Pe(e) ? [] : Ae(e).map((e) => e.night)), s = /* @__PURE__ */ new Map();
	for (const a of n) {
		if (r.has(a)) continue;
		const t = Oe(e, a);
		s.set(t, (s.get(t) ?? 0) + 1);
	}
	const i = Ve(e, t);
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
const We = (e, t) => e.flatMap((e, n) => void 0 === t[n] ? [] : [[e, t[n]]]), Be = (e, t) => f(t).wallClockLabels(Float64Array.from(e));
async function Ke(e, t, n, r, s = !1) {
	const i = De(e).find((e) => e.night === n);
	if (!i || !t.some((e) => e.night === n)) return null;
	const a = [i.onsetMs, i.wakeMs];
	return qe(e, t, n, new Map(We(a, await Be(a, r))), s);
}
function qe(e, t, n, r, s = !1) {
	const i = t.find((e) => e.night === n), a = De(e).find((e) => e.night === n), o = a && r.get(a.onsetMs), l = a && r.get(a.wakeMs);
	if (!i || void 0 === o || void 0 === l) return null;
	const d = [i.onset !== o ? `onset moved ${s ? `${o} → ` : ""}${i.onset}` : null, i.wake !== l ? `wake moved ${s ? `${l} → ` : ""}${i.wake}` : null].filter((e) => null != e);
	return d.length > 0 ? `edited: ${d.join(", ")}` : null;
}
async function Je(e, t, n, r = f(n)) {
	if (ze(e.sleepWindows), !e.sources.ms5) return [];
	const s = (/* @__PURE__ */ new Date()).toISOString(), i = e.nightSummaries ?? [], a = new Map(De(e).map((e) => [e.night, e.nightDate])), o = (e) => e.nightDate ?? (null == e.night ? void 0 : a.get(e.night)), l = new Map(await Promise.all([...new Set(i.map(o).filter((e) => null != e))].map(async (e) => [e, await Y(e, void 0, r)]))), d = Float64Array.from(i, (e) => e.validHours ?? NaN), u = e.includeDayCriterionHours ?? await r.ggirIncludeDayCriterionHours(null), c = Float64Array.from(i, () => u), g = await r.ggirDaysIncluded(d, c, null);
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
async function Ue(e, t, n, r = f(n)) {
	const [s, i] = await r.wallClockLabels(Float64Array.of(t.onsetMs, t.wakeMs));
	return `GGIR${e.ggirVersion ? ` ${e.ggirVersion}` : ""} Part 4 night ${String(t.night)} (${e.appliedHasibAlgo ?? "algorithm unavailable"}): ${s} → ${i}`;
}
async function Ye(e, t, n) {
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
async function Ze(e, t, n, r, s, i = [], o, l) {
	ze(t.sleepWindows);
	const d = Pe(t);
	if (null == d) return !0;
	const u = ve(null, n), g = f(o);
	let p = !0;
	for (const m of l ?? await Ye(t, i, g)) {
		const t = [{
			markerType: a.MAIN_SLEEP,
			markerIndex: 1,
			onsetTimestamp: m.onsetTimestamp,
			offsetTimestamp: m.offsetTimestamp,
			source: "auto",
			settingsHash: u
		}];
		await c().nights.writeHeadless({
			signal: o,
			fileId: e,
			...s ? { expected: te(null) } : {},
			date: m.date,
			username: S,
			sleepMarkers: t,
			nonwearMarkers: [],
			isInvalidNight: !1,
			notes: m.notes,
			algorithm: d,
			sleepPeriodDetectionConfig: q(void 0, J) ?? null
		}, r, null).catch((e) => {
			o?.throwIfAborted(), T("warn", "GGIR results marker store failed", O(e)), p = !1;
		});
	}
	return p;
}
export { ce as C, te as S, Q as T, Ce as _, xe as a, fe as b, Oe as c, Ae as d, De as f, Ze as g, _e as h, Pe as i, be as l, ke as m, ze as n, Ge as o, Ye as p, Ke as r, Se as s, Fe as t, Ie as u, Je as v, ue as w, ge as x, ve as y };
