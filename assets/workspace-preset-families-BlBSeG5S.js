import { $t as e, Wt as t, en as r, hn as n, pn as a, xn as s } from "./schema-DUFD0nf7.js";
import { A as o, t as i } from "./workspace-db-BDUVrp73.js";
import { a as c } from "./content-hash-B-at0sOp.js";
import { s as l, t as p } from "./sleep-period-detection-BTmTkghg.js";
import { n as u, r as d, t as f } from "./preset-families-NxctAb-q.js";
import { t as m } from "./audit-hash-BdWutkgc.js";
import { i as w, t as y } from "./wal-Cym84-0W.js";
import { a as h, m as g, p as P, s as A } from "./valid-day-criteria-CIpW3fKK.js";
import { r as I } from "./diary-source-adapter-COVJlRmg.js";
import { validateDiaryInstrumentMapping as S } from "./diary-instrument-mapping-DegQIuRJ.js";
import { i as j, n as D, t as C } from "./column-mapping-presets-j6OFfPD0.js";
import { n as _, t as E } from "./pa-mask-nonwear-reset-DtknXVkT.js";
const O = {
	schemaVersion: 1,
	algorithm: t.SADEH_1994_ACTILIFE,
	nonwearDetectorsCounts: [...a.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...a.nonwear_detectors_ggir],
	sleepPeriodDetection: p,
	placementRuleset: e.LEGACY,
	scorerPostprocessingPreset: r.NONE,
	analysisParadigm: A(n.analysis_paradigm),
	actiwareAnalysis: {}
}, k = new Set(Object.values(t)), v = new Set(Object.values(o)), b = new Set(Object.values(e)), H = new Set(Object.values(r));
function N(e) {
	return "string" == typeof e && k.has(e) ? e : O.algorithm;
}
function V(e, t) {
	return Array.isArray(e) ? [...new Set(e.filter((e) => "string" == typeof e && v.has(e)))] : [...t];
}
function G(e) {
	return "string" == typeof e && b.has(e) ? e : O.placementRuleset;
}
function M(e) {
	return "string" == typeof e && H.has(e) ? e : O.scorerPostprocessingPreset;
}
function R(e) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		schemaVersion: 1,
		algorithm: N(t.algorithm),
		nonwearDetectorsCounts: V(t.nonwearDetectorsCounts, O.nonwearDetectorsCounts),
		nonwearDetectorsGgir: V(t.nonwearDetectorsGgir, O.nonwearDetectorsGgir),
		sleepPeriodDetection: l(t.sleepPeriodDetection),
		placementRuleset: G(t.placementRuleset),
		scorerPostprocessingPreset: M(t.scorerPostprocessingPreset),
		analysisParadigm: A(t.analysisParadigm),
		actiwareAnalysis: h(t.actiwareAnalysis)
	};
}
const z = d(u.SCORING_RECIPE).storageKey;
const x = "sleep-scoring:workspace-preset-legacy-migration:v1";
new class extends s {
	claims;
	constructor(e = "SleepScoringLegacyPresetMigrationClaims") {
		super(e), this.version(1).stores({ claims: "key" });
	}
	async tryAcquire() {
		try {
			return await this.claims.add({
				key: x,
				state: "consumed"
			}), !0;
		} catch (e) {
			if (e instanceof Error && "ConstraintError" === e.name) return !1;
			throw e;
		}
	}
	async releaseOwnedClaim() {
		await this.claims.delete(x);
	}
}();
var F = class extends Error {
	constructor() {
		super("Preset family payload is invalid."), this.name = "WorkspacePresetPayloadError";
	}
}, L = class extends Error {
	constructor() {
		super("Stored preset family record failed integrity validation."), this.name = "WorkspacePresetIntegrityError";
	}
}, T = class extends Error {
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
	if (!W(e)) throw new F();
}
function U(e) {
	try {
		const t = JSON.parse(e);
		if (!Array.isArray(t)) throw new F();
		return t;
	} catch (t) {
		if (t instanceof F) throw t;
		throw new F();
	}
}
const $ = new Set(I.map((e) => e.key));
function K(e) {
	return null !== e && "object" == typeof e && !Array.isArray(e);
}
function q(e, t) {
	if (J(e), "string" != typeof t) throw new F();
	const r = U(t);
	e === u.DIARY_MAPPING && function(e) {
		for (const t of e) {
			if (!K(t) || !K(t.mapping)) throw new F();
			if ("epochLengthSeconds" in t || "devicePreset" in t) throw new F();
			for (const r of Object.keys(t.mapping)) if (!$.has(r) && !(r in C)) throw new F();
			const e = "instrumentVersionDefinitionId" in t;
			if (e !== "instrumentMapping" in t) throw new F();
			if (e) {
				if ("string" != typeof t.instrumentVersionDefinitionId || !K(t.instrumentMapping)) throw new F();
				const e = {};
				for (const [r, n] of Object.entries(t.instrumentMapping)) {
					if ("string" != typeof n) throw new F();
					e[r] = n;
				}
				if (S(t.instrumentVersionDefinitionId, e).length > 0) throw new F();
			}
		}
	}(r);
	const n = d(e).storageKey, a = function(e, t) {
		let r = t;
		return {
			storage: {
				getItem: (t) => t === e ? r : null,
				setItem(t, n) {
					if (t !== e) throw new F();
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
				const e = D(n, a.storage);
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
						const t = e.getItem(z), r = t ? JSON.parse(t) : [];
						return Array.isArray(r) ? r.flatMap((e) => {
							const t = function(e) {
								return "object" == typeof e && null !== e && !Array.isArray(e);
							}(r = e) && "string" == typeof r.name && 0 !== r.name.trim().length ? {
								name: r.name,
								recipe: R(r.recipe)
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
					t.setItem(z, JSON.stringify(r.map((e) => ({
						name: e.name,
						recipe: R(e.recipe)
					})))), r.length, e.length, r.length;
				}(e, a.storage);
				break;
			}
		}
		if (t !== r.length) throw new F();
		return m(U(a.read()));
	} catch (s) {
		if (s instanceof F) throw s;
		throw new F();
	}
}
function B(e) {
	if ("string" != typeof e) return !1;
	try {
		return new Date(e).toISOString() === e;
	} catch {
		return !1;
	}
}
function Q(e, t) {
	if (void 0 !== t && (null !== t && !/^[0-9a-f]{64}$/.test(t) || (e?.contentHash ?? null) !== t)) throw new T();
}
async function X(e) {
	try {
		if ("object" != typeof e || null === e || Array.isArray(e)) throw new L();
		const t = e, r = t.family, n = t.payloadVersion, a = t.serializedPayload, s = t.contentHash, o = t.createdAt, i = t.updatedAt;
		if (!W(r) || 1 !== n || "string" != typeof a || "string" != typeof s || !/^[0-9a-f]{64}$/.test(s) || !B(o) || !B(i) || Date.parse(i) < Date.parse(o)) throw new L();
		const l = q(r, a);
		if (l === a) {
			if (await c(l) !== s) throw new L();
			return {
				family: r,
				payloadVersion: n,
				serializedPayload: a,
				contentHash: s,
				createdAt: o,
				updatedAt: i
			};
		}
		if (await c(a) !== s) throw new L();
		return {
			family: r,
			payloadVersion: n,
			serializedPayload: l,
			contentHash: await c(l),
			createdAt: o,
			updatedAt: i
		};
	} catch {
		throw new L();
	}
}
async function Z(e, t = i()) {
	J(e);
	const r = await t.presetFamilies.get(e);
	return r ? X(r) : void 0;
}
async function ee(e, t, r = i(), n) {
	const a = await async function(e, t) {
		const r = q(e, t);
		return {
			family: e,
			serializedPayload: r,
			contentHash: await c(r),
			presetCount: U(r).length
		};
	}(e, t), o = await r.presetFamilies.get(e), l = o ? await X(o) : void 0;
	if (Q(l, n), l && l.contentHash === a.contentHash && l.serializedPayload === a.serializedPayload) return {
		record: l,
		disposition: "deduplicated"
	};
	try {
		return await w([r.presetFamilies], async () => {
			const t = await r.presetFamilies.get(e), o = t ? await s.waitFor(X(t)) : void 0;
			if (Q(o, n), o?.contentHash === a.contentHash && o.serializedPayload === a.serializedPayload) throw new Y({
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
export { Z as loadWorkspacePresetFamily, ee as upsertWorkspacePresetFamily };
