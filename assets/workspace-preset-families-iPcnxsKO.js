import { $t as e, Wt as t, en as r, hn as a, pn as n, xn as s } from "./schema-pjCtvTl3.js";
import { j as o, t as i } from "./workspace-db-BGLMk_xQ.js";
import { a as c } from "./content-hash-DLHDa8U_.js";
import { s as l, t as p } from "./sleep-period-detection-fRVpitfd.js";
import { n as u, r as d, t as f } from "./preset-families-HO9ZDvRK.js";
import { t as m } from "./audit-hash-DC-tONR6.js";
import { i as w, t as y } from "./wal-DRjkccUe.js";
import { _ as h, b as g, d as P, l as A, v as I, y as S } from "./valid-day-criteria-DA1LBKOr.js";
import { r as j } from "./diary-source-adapter-ClEejpfv.js";
import { validateDiaryInstrumentMapping as D } from "./diary-instrument-mapping-DguyNGR3.js";
import { i as C, n as _, t as E } from "./column-mapping-presets-DRFlci3l.js";
import { n as v, t as O } from "./pa-mask-nonwear-reset-kKygKJZU.js";
const b = {
	schemaVersion: 1,
	algorithm: t.SADEH_1994_ACTILIFE,
	nonwearDetectorsCounts: [...n.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...n.nonwear_detectors_ggir],
	sleepPeriodDetection: p,
	placementRuleset: e.LEGACY,
	scorerPostprocessingPreset: r.NONE,
	analysisParadigm: P(a.analysis_paradigm),
	actiwareAnalysis: {},
	actiwareRestProposal: { ...h }
}, k = new Set(Object.values(t)), H = new Set(Object.values(o)), N = new Set(Object.values(e)), R = new Set(Object.values(r));
function V(e) {
	return "string" == typeof e && k.has(e) ? e : b.algorithm;
}
function G(e, t) {
	return Array.isArray(e) ? [...new Set(e.filter((e) => "string" == typeof e && H.has(e)))] : [...t];
}
function z(e) {
	return "string" == typeof e && N.has(e) ? e : b.placementRuleset;
}
function M(e) {
	return "string" == typeof e && R.has(e) ? e : b.scorerPostprocessingPreset;
}
function x(e) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		schemaVersion: 1,
		algorithm: V(t.algorithm),
		nonwearDetectorsCounts: G(t.nonwearDetectorsCounts, b.nonwearDetectorsCounts),
		nonwearDetectorsGgir: G(t.nonwearDetectorsGgir, b.nonwearDetectorsGgir),
		sleepPeriodDetection: l(t.sleepPeriodDetection),
		placementRuleset: z(t.placementRuleset),
		scorerPostprocessingPreset: M(t.scorerPostprocessingPreset),
		analysisParadigm: P(t.analysisParadigm),
		actiwareAnalysis: A(t.actiwareAnalysis),
		actiwareRestProposal: I(t.actiwareRestProposal)
	};
}
const L = d(u.SCORING_RECIPE).storageKey;
const F = "sleep-scoring:workspace-preset-legacy-migration:v1";
new class extends s {
	claims;
	constructor(e = "SleepScoringLegacyPresetMigrationClaims") {
		super(e), this.version(1).stores({ claims: "key" });
	}
	async tryAcquire() {
		try {
			return await this.claims.add({
				key: F,
				state: "consumed"
			}), !0;
		} catch (e) {
			if (e instanceof Error && "ConstraintError" === e.name) return !1;
			throw e;
		}
	}
	async releaseOwnedClaim() {
		await this.claims.delete(F);
	}
}();
var T = class extends Error {
	constructor() {
		super("Preset family payload is invalid."), this.name = "WorkspacePresetPayloadError";
	}
}, Y = class extends Error {
	constructor() {
		super("Stored preset family record failed integrity validation."), this.name = "WorkspacePresetIntegrityError";
	}
}, W = class extends Error {
	constructor() {
		super("Preset family changed since it was loaded."), this.name = "WorkspacePresetConflictError";
	}
}, J = class extends Error {
	result;
	constructor(e) {
		super("Workspace preset mutation was unnecessary."), this.name = "NoWorkspacePresetMutation", this.result = e;
	}
};
function U(e) {
	return "string" == typeof e && f.includes(e);
}
function $(e) {
	if (!U(e)) throw new T();
}
function K(e) {
	try {
		const t = JSON.parse(e);
		if (!Array.isArray(t)) throw new T();
		return t;
	} catch (t) {
		if (t instanceof T) throw t;
		throw new T();
	}
}
const q = new Set(j.map((e) => e.key));
function B(e) {
	return null !== e && "object" == typeof e && !Array.isArray(e);
}
function Q(e, t) {
	if ($(e), "string" != typeof t) throw new T();
	const r = K(t);
	e === u.DIARY_MAPPING && function(e) {
		for (const t of e) {
			if (!B(t) || !B(t.mapping)) throw new T();
			if ("epochLengthSeconds" in t || "devicePreset" in t) throw new T();
			for (const r of Object.keys(t.mapping)) if (!q.has(r) && !(r in E)) throw new T();
			const e = "instrumentVersionDefinitionId" in t;
			if (e !== "instrumentMapping" in t) throw new T();
			if (e) {
				if ("string" != typeof t.instrumentVersionDefinitionId || !B(t.instrumentMapping)) throw new T();
				const e = {};
				for (const [r, a] of Object.entries(t.instrumentMapping)) {
					if ("string" != typeof a) throw new T();
					e[r] = a;
				}
				if (D(t.instrumentVersionDefinitionId, e).length > 0) throw new T();
			}
		}
	}(r);
	const a = d(e).storageKey, n = function(e, t) {
		let r = t;
		return {
			storage: {
				getItem: (t) => t === e ? r : null,
				setItem(t, a) {
					if (t !== e) throw new T();
					r = a;
				}
			},
			read: () => r
		};
	}(a, t);
	try {
		let t;
		switch (e) {
			case u.CSV_MAPPING:
			case u.DIARY_MAPPING: {
				const e = _(a, n.storage);
				t = e.length, C(a, e, n.storage);
				break;
			}
			case u.PHYSICAL_ACTIVITY_CUTPOINTS: {
				const e = S(n.storage);
				t = e.length, g(e, n.storage);
				break;
			}
			case u.PHYSICAL_ACTIVITY_INCLUSION_RULES: {
				const e = O(n.storage);
				t = e.length, v(e, n.storage);
				break;
			}
			case u.SCORING_RECIPE: {
				const e = function(e = localStorage) {
					try {
						const t = e.getItem(L), r = t ? JSON.parse(t) : [];
						return Array.isArray(r) ? r.flatMap((e) => {
							const t = function(e) {
								return "object" == typeof e && null !== e && !Array.isArray(e);
							}(r = e) && "string" == typeof r.name && 0 !== r.name.trim().length ? {
								name: r.name,
								recipe: x(r.recipe)
							} : null;
							var r;
							return t ? [t] : [];
						}) : [];
					} catch {
						return [];
					}
				}(n.storage);
				t = e.length, function(e, t = localStorage) {
					const r = e.slice(0, 20);
					t.setItem(L, JSON.stringify(r.map((e) => ({
						name: e.name,
						recipe: x(e.recipe)
					})))), r.length, e.length, r.length;
				}(e, n.storage);
				break;
			}
		}
		if (t !== r.length) throw new T();
		return m(K(n.read()));
	} catch (s) {
		if (s instanceof T) throw s;
		throw new T();
	}
}
function X(e) {
	if ("string" != typeof e) return !1;
	try {
		return new Date(e).toISOString() === e;
	} catch {
		return !1;
	}
}
function Z(e, t) {
	if (void 0 !== t && (null !== t && !/^[0-9a-f]{64}$/.test(t) || (e?.contentHash ?? null) !== t)) throw new W();
}
async function ee(e) {
	try {
		if ("object" != typeof e || null === e || Array.isArray(e)) throw new Y();
		const t = e, r = t.family, a = t.payloadVersion, n = t.serializedPayload, s = t.contentHash, o = t.createdAt, i = t.updatedAt;
		if (!U(r) || 1 !== a || "string" != typeof n || "string" != typeof s || !/^[0-9a-f]{64}$/.test(s) || !X(o) || !X(i) || Date.parse(i) < Date.parse(o)) throw new Y();
		const l = Q(r, n);
		if (l === n) {
			if (await c(l) !== s) throw new Y();
			return {
				family: r,
				payloadVersion: a,
				serializedPayload: n,
				contentHash: s,
				createdAt: o,
				updatedAt: i
			};
		}
		if (await c(n) !== s) throw new Y();
		return {
			family: r,
			payloadVersion: a,
			serializedPayload: l,
			contentHash: await c(l),
			createdAt: o,
			updatedAt: i
		};
	} catch {
		throw new Y();
	}
}
async function te(e, t = i()) {
	$(e);
	const r = await t.presetFamilies.get(e);
	return r ? ee(r) : void 0;
}
async function re(e, t, r = i(), a) {
	const n = await async function(e, t) {
		const r = Q(e, t);
		return {
			family: e,
			serializedPayload: r,
			contentHash: await c(r),
			presetCount: K(r).length
		};
	}(e, t), o = await r.presetFamilies.get(e), l = o ? await ee(o) : void 0;
	if (Z(l, a), l && l.contentHash === n.contentHash && l.serializedPayload === n.serializedPayload) return {
		record: l,
		disposition: "deduplicated"
	};
	try {
		return await w([r.presetFamilies], async () => {
			const t = await r.presetFamilies.get(e), o = t ? await s.waitFor(ee(t)) : void 0;
			if (Z(o, a), o?.contentHash === n.contentHash && o.serializedPayload === n.serializedPayload) throw new J({
				record: o,
				disposition: "deduplicated"
			});
			const i = function(e) {
				const t = e ? Date.parse(e.updatedAt) + 1 : 0;
				return new Date(Math.max(Date.now(), t)).toISOString();
			}(o), c = {
				family: e,
				payloadVersion: 1,
				serializedPayload: n.serializedPayload,
				contentHash: n.contentHash,
				createdAt: o?.createdAt ?? i,
				updatedAt: i
			}, l = o ? "updated" : "inserted";
			return await r.presetFamilies.put(c), await y({
				op: "preset_family_put",
				payload: {
					disposition: l,
					record: c
				}
			}), {
				record: c,
				disposition: l
			};
		}, r);
	} catch (p) {
		if (p instanceof J) return p.result;
		throw p;
	}
}
export { te as loadWorkspacePresetFamily, re as upsertWorkspacePresetFamily };
