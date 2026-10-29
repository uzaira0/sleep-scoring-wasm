import { Ht as e, Qt as t, Zt as r, dn as n, pn as a, yn as s } from "./schema-CkFrPVov.js";
import { T as o } from "./platform-C0_UL027.js";
import { o as i } from "./content-hash-BtD8CeUH.js";
import { t as c } from "./workspace-db-CpdwgNuG.js";
import { s as l, t as p } from "./sleep-period-detection-BqDC4F60.js";
import { n as u, r as d, t as f } from "./preset-families-CtwQL5Vj.js";
import { t as m } from "./audit-hash-rfcCP1yx.js";
import { i as w, t as y } from "./wal-Di-1TDar.js";
import { c as h, h as g, m as P, o as A } from "./valid-day-criteria-Dy9x-0Xp.js";
import { r as I } from "./diary-source-adapter-wGq46bEJ.js";
import { validateDiaryInstrumentMapping as S } from "./diary-instrument-mapping-D5PGvhNO.js";
import { i as j, n as C, t as D } from "./column-mapping-presets-Qi3ceeWL.js";
import { n as _, t as E } from "./pa-mask-nonwear-reset-C2GfPnvg.js";
const O = {
	schemaVersion: 1,
	algorithm: e.SADEH_1994_ACTILIFE,
	nonwearDetectorsCounts: [...n.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...n.nonwear_detectors_ggir],
	sleepPeriodDetection: p,
	placementRuleset: r.LEGACY,
	scorerPostprocessingPreset: t.NONE,
	analysisParadigm: h(a.analysis_paradigm),
	actiwareAnalysis: {}
}, k = new Set(Object.values(e)), b = new Set(Object.values(o)), v = new Set(Object.values(r)), H = new Set(Object.values(t));
function N(e) {
	return "string" == typeof e && k.has(e) ? e : O.algorithm;
}
function V(e, t) {
	return Array.isArray(e) ? [...new Set(e.filter((e) => "string" == typeof e && b.has(e)))] : [...t];
}
function R(e) {
	return "string" == typeof e && v.has(e) ? e : O.placementRuleset;
}
function z(e) {
	return "string" == typeof e && H.has(e) ? e : O.scorerPostprocessingPreset;
}
function G(e) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		schemaVersion: 1,
		algorithm: N(t.algorithm),
		nonwearDetectorsCounts: V(t.nonwearDetectorsCounts, O.nonwearDetectorsCounts),
		nonwearDetectorsGgir: V(t.nonwearDetectorsGgir, O.nonwearDetectorsGgir),
		sleepPeriodDetection: l(t.sleepPeriodDetection),
		placementRuleset: R(t.placementRuleset),
		scorerPostprocessingPreset: z(t.scorerPostprocessingPreset),
		analysisParadigm: h(t.analysisParadigm),
		actiwareAnalysis: A(t.actiwareAnalysis)
	};
}
const M = d(u.SCORING_RECIPE).storageKey;
const L = "sleep-scoring:workspace-preset-legacy-migration:v1";
new class extends s {
	claims;
	constructor(e = "SleepScoringLegacyPresetMigrationClaims") {
		super(e), this.version(1).stores({ claims: "key" });
	}
	async tryAcquire() {
		try {
			return await this.claims.add({
				key: L,
				state: "consumed"
			}), !0;
		} catch (e) {
			if (e instanceof Error && "ConstraintError" === e.name) return !1;
			throw e;
		}
	}
	async releaseOwnedClaim() {
		await this.claims.delete(L);
	}
}();
var T = class extends Error {
	constructor() {
		super("Preset family payload is invalid."), this.name = "WorkspacePresetPayloadError";
	}
}, x = class extends Error {
	constructor() {
		super("Stored preset family record failed integrity validation."), this.name = "WorkspacePresetIntegrityError";
	}
}, F = class extends Error {
	constructor() {
		super("Preset family changed since it was loaded."), this.name = "WorkspacePresetConflictError";
	}
}, Y = class extends Error {
	result;
	constructor(e) {
		super("Workspace preset mutation was unnecessary."), this.name = "NoWorkspacePresetMutation", this.result = e;
	}
};
function W(e) {
	return "string" == typeof e && f.includes(e);
}
function J(e) {
	if (!W(e)) throw new T();
}
function U(e) {
	try {
		const t = JSON.parse(e);
		if (!Array.isArray(t)) throw new T();
		return t;
	} catch (t) {
		if (t instanceof T) throw t;
		throw new T();
	}
}
const K = new Set(I.map((e) => e.key));
function $(e) {
	return null !== e && "object" == typeof e && !Array.isArray(e);
}
function q(e, t) {
	if (J(e), "string" != typeof t) throw new T();
	const r = U(t);
	e === u.DIARY_MAPPING && function(e) {
		for (const t of e) {
			if (!$(t) || !$(t.mapping)) throw new T();
			if ("epochLengthSeconds" in t || "devicePreset" in t) throw new T();
			for (const r of Object.keys(t.mapping)) if (!K.has(r) && !(r in D)) throw new T();
			const e = "instrumentVersionDefinitionId" in t;
			if (e !== "instrumentMapping" in t) throw new T();
			if (e) {
				if ("string" != typeof t.instrumentVersionDefinitionId || !$(t.instrumentMapping)) throw new T();
				const e = {};
				for (const [r, n] of Object.entries(t.instrumentMapping)) {
					if ("string" != typeof n) throw new T();
					e[r] = n;
				}
				if (S(t.instrumentVersionDefinitionId, e).length > 0) throw new T();
			}
		}
	}(r);
	const n = d(e).storageKey, a = function(e, t) {
		let r = t;
		return {
			storage: {
				getItem: (t) => t === e ? r : null,
				setItem(t, n) {
					if (t !== e) throw new T();
					r = n;
				}
			},
			read: () => r
		};
	}(n, t);
	try {
		let t;
		switch (e) {
			case u.CSV_MAPPING:
			case u.DIARY_MAPPING: {
				const e = C(n, a.storage);
				t = e.length, j(n, e, a.storage);
				break;
			}
			case u.PHYSICAL_ACTIVITY_CUTPOINTS: {
				const e = P(a.storage);
				t = e.length, g(e, a.storage);
				break;
			}
			case u.PHYSICAL_ACTIVITY_INCLUSION_RULES: {
				const e = E(a.storage);
				t = e.length, _(e, a.storage);
				break;
			}
			case u.SCORING_RECIPE: {
				const e = function(e = localStorage) {
					try {
						const t = e.getItem(M), r = t ? JSON.parse(t) : [];
						return Array.isArray(r) ? r.flatMap((e) => {
							const t = function(e) {
								return "object" == typeof e && null !== e && !Array.isArray(e);
							}(r = e) && "string" == typeof r.name && 0 !== r.name.trim().length ? {
								name: r.name,
								recipe: G(r.recipe)
							} : null;
							var r;
							return t ? [t] : [];
						}) : [];
					} catch {
						return [];
					}
				}(a.storage);
				t = e.length, function(e, t = localStorage) {
					const r = e.slice(0, 20);
					t.setItem(M, JSON.stringify(r.map((e) => ({
						name: e.name,
						recipe: G(e.recipe)
					})))), r.length, e.length, r.length;
				}(e, a.storage);
				break;
			}
		}
		if (t !== r.length) throw new T();
		return m(U(a.read()));
	} catch (s) {
		if (s instanceof T) throw s;
		throw new T();
	}
}
function Q(e) {
	if ("string" != typeof e) return !1;
	try {
		return new Date(e).toISOString() === e;
	} catch {
		return !1;
	}
}
function Z(e, t) {
	if (void 0 !== t && (null !== t && !/^[0-9a-f]{64}$/.test(t) || (e?.contentHash ?? null) !== t)) throw new F();
}
async function B(e) {
	try {
		if ("object" != typeof e || null === e || Array.isArray(e)) throw new x();
		const t = e, r = t.family, n = t.payloadVersion, a = t.serializedPayload, s = t.contentHash, o = t.createdAt, c = t.updatedAt;
		if (!W(r) || 1 !== n || "string" != typeof a || "string" != typeof s || !/^[0-9a-f]{64}$/.test(s) || !Q(o) || !Q(c) || Date.parse(c) < Date.parse(o)) throw new x();
		const l = q(r, a);
		if (l === a) {
			if (await i(l) !== s) throw new x();
			return {
				family: r,
				payloadVersion: n,
				serializedPayload: a,
				contentHash: s,
				createdAt: o,
				updatedAt: c
			};
		}
		if (await i(a) !== s) throw new x();
		return {
			family: r,
			payloadVersion: n,
			serializedPayload: l,
			contentHash: await i(l),
			createdAt: o,
			updatedAt: c
		};
	} catch {
		throw new x();
	}
}
async function X(e, t = c()) {
	J(e);
	const r = await t.presetFamilies.get(e);
	return r ? B(r) : void 0;
}
async function ee(e, t, r = c(), n) {
	const a = await async function(e, t) {
		const r = q(e, t);
		return {
			family: e,
			serializedPayload: r,
			contentHash: await i(r),
			presetCount: U(r).length
		};
	}(e, t), o = await r.presetFamilies.get(e), l = o ? await B(o) : void 0;
	if (Z(l, n), l && l.contentHash === a.contentHash && l.serializedPayload === a.serializedPayload) return {
		record: l,
		disposition: "deduplicated"
	};
	try {
		return await w([r.presetFamilies], async () => {
			const t = await r.presetFamilies.get(e), o = t ? await s.waitFor(B(t)) : void 0;
			if (Z(o, n), o?.contentHash === a.contentHash && o.serializedPayload === a.serializedPayload) throw new Y({
				record: o,
				disposition: "deduplicated"
			});
			const i = function(e) {
				const t = e ? Date.parse(e.updatedAt) + 1 : 0;
				return new Date(Math.max(Date.now(), t)).toISOString();
			}(o), c = {
				family: e,
				payloadVersion: 1,
				serializedPayload: a.serializedPayload,
				contentHash: a.contentHash,
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
		if (p instanceof Y) return p.result;
		throw p;
	}
}
export { X as loadWorkspacePresetFamily, ee as upsertWorkspacePresetFamily };
