import { Tn as e, gn as t, nn as r, qt as a, rn as n, vn as s } from "./schema-B0CR2EpS.js";
import { A as o, t as i } from "./workspace-db-CwhwLMaR.js";
import { a as c } from "./content-hash-SuSXU120.js";
import { s as l, t as p } from "./sleep-period-detection-BnH8xZoy.js";
import { n as u, r as d, t as f } from "./preset-families-BruVyHGf.js";
import { t as w } from "./audit-hash-BmEZRNJA.js";
import { i as m, t as y } from "./wal-BtQRMETY.js";
import { _ as h, b as g, d as P, l as A, v as I, y as S } from "./valid-day-criteria-CIJnTk0q.js";
import { validateDiaryInstrumentMapping as C } from "./diary-instrument-mapping-CRapKcLt.js";
import { r as D } from "./diary-source-adapter-CAL7xcH3.js";
import { i as j, n as _, t as v } from "./column-mapping-presets-Mqc3s06Z.js";
import { n as E, t as O } from "./pa-mask-nonwear-reset-DXQJ_SD-.js";
const b = {
	schemaVersion: 1,
	algorithm: a.SADEH_1994_ACTILIFE,
	nonwearDetectorsCounts: [...t.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...t.nonwear_detectors_ggir],
	sleepPeriodDetection: p,
	placementRuleset: r.LEGACY,
	scorerPostprocessingPreset: n.NONE,
	analysisParadigm: P(s.analysis_paradigm),
	actiwareAnalysis: {},
	actiwareRestProposal: { ...h }
}, k = new Set(Object.values(a)), H = new Set(Object.values(o)), N = new Set(Object.values(r)), R = new Set(Object.values(n));
function V(e) {
	return "string" == typeof e && k.has(e) ? e : b.algorithm;
}
function z(e, t) {
	return Array.isArray(e) ? [...new Set(e.filter((e) => "string" == typeof e && H.has(e)))] : [...t];
}
function G(e) {
	return "string" == typeof e && N.has(e) ? e : b.placementRuleset;
}
function M(e) {
	return "string" == typeof e && R.has(e) ? e : b.scorerPostprocessingPreset;
}
function F(e) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		schemaVersion: 1,
		algorithm: V(t.algorithm),
		nonwearDetectorsCounts: z(t.nonwearDetectorsCounts, b.nonwearDetectorsCounts),
		nonwearDetectorsGgir: z(t.nonwearDetectorsGgir, b.nonwearDetectorsGgir),
		sleepPeriodDetection: l(t.sleepPeriodDetection),
		placementRuleset: G(t.placementRuleset),
		scorerPostprocessingPreset: M(t.scorerPostprocessingPreset),
		analysisParadigm: P(t.analysisParadigm),
		actiwareAnalysis: A(t.actiwareAnalysis),
		actiwareRestProposal: I(t.actiwareRestProposal)
	};
}
const L = d(u.SCORING_RECIPE).storageKey;
const T = "sleep-scoring:workspace-preset-legacy-migration:v1";
new class extends e {
	claims;
	constructor(e = "SleepScoringLegacyPresetMigrationClaims") {
		super(e), this.version(1).stores({ claims: "key" });
	}
	async tryAcquire() {
		try {
			return await this.claims.add({
				key: T,
				state: "consumed"
			}), !0;
		} catch (e) {
			if (e instanceof Error && "ConstraintError" === e.name) return !1;
			throw e;
		}
	}
	async releaseOwnedClaim() {
		await this.claims.delete(T);
	}
}();
var x = class extends Error {
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
function q(e) {
	if (!U(e)) throw new x();
}
function K(e) {
	try {
		const t = JSON.parse(e);
		if (!Array.isArray(t)) throw new x();
		return t;
	} catch (t) {
		if (t instanceof x) throw t;
		throw new x();
	}
}
const $ = new Set(D.map((e) => e.key));
function B(e) {
	return null !== e && "object" == typeof e && !Array.isArray(e);
}
function Q(e, t) {
	if (q(e), "string" != typeof t) throw new x();
	const r = K(t);
	e === u.DIARY_MAPPING && function(e) {
		for (const t of e) {
			if (!B(t) || !B(t.mapping)) throw new x();
			if ("epochLengthSeconds" in t || "devicePreset" in t) throw new x();
			for (const r of Object.keys(t.mapping)) if (!$.has(r) && !(r in v)) throw new x();
			const e = "instrumentVersionDefinitionId" in t;
			if (e !== "instrumentMapping" in t) throw new x();
			if (e) {
				if ("string" != typeof t.instrumentVersionDefinitionId || !B(t.instrumentMapping)) throw new x();
				const e = {};
				for (const [r, a] of Object.entries(t.instrumentMapping)) {
					if ("string" != typeof a) throw new x();
					e[r] = a;
				}
				if (C(t.instrumentVersionDefinitionId, e).length > 0) throw new x();
			}
		}
	}(r);
	const a = d(e).storageKey, n = function(e, t) {
		let r = t;
		return {
			storage: {
				getItem: (t) => t === e ? r : null,
				setItem(t, a) {
					if (t !== e) throw new x();
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
				t = e.length, j(a, e, n.storage);
				break;
			}
			case u.PHYSICAL_ACTIVITY_CUTPOINTS: {
				const e = S(n.storage);
				t = e.length, g(e, n.storage);
				break;
			}
			case u.PHYSICAL_ACTIVITY_INCLUSION_RULES: {
				const e = O(n.storage);
				t = e.length, E(e, n.storage);
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
								recipe: F(r.recipe)
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
						recipe: F(e.recipe)
					})))), r.length, e.length, r.length;
				}(e, n.storage);
				break;
			}
		}
		if (t !== r.length) throw new x();
		return w(K(n.read()));
	} catch (s) {
		if (s instanceof x) throw s;
		throw new x();
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
	q(e);
	const r = await t.presetFamilies.get(e);
	return r ? ee(r) : void 0;
}
async function re(t, r, a = i(), n) {
	const s = await async function(e, t) {
		const r = Q(e, t);
		return {
			family: e,
			serializedPayload: r,
			contentHash: await c(r),
			presetCount: K(r).length
		};
	}(t, r), o = await a.presetFamilies.get(t), l = o ? await ee(o) : void 0;
	if (Z(l, n), l && l.contentHash === s.contentHash && l.serializedPayload === s.serializedPayload) return {
		record: l,
		disposition: "deduplicated"
	};
	try {
		return await m([a.presetFamilies], async () => {
			const r = await a.presetFamilies.get(t), o = r ? await e.waitFor(ee(r)) : void 0;
			if (Z(o, n), o?.contentHash === s.contentHash && o.serializedPayload === s.serializedPayload) throw new J({
				record: o,
				disposition: "deduplicated"
			});
			const i = function(e) {
				const t = e ? Date.parse(e.updatedAt) + 1 : 0;
				return new Date(Math.max(Date.now(), t)).toISOString();
			}(o), c = {
				family: t,
				payloadVersion: 1,
				serializedPayload: s.serializedPayload,
				contentHash: s.contentHash,
				createdAt: o?.createdAt ?? i,
				updatedAt: i
			}, l = o ? "updated" : "inserted";
			return await a.presetFamilies.put(c), await y({
				op: "preset_family_put",
				payload: {
					disposition: l,
					record: c
				}
			}), {
				record: c,
				disposition: l
			};
		}, a);
	} catch (p) {
		if (p instanceof J) return p.result;
		throw p;
	}
}
export { te as loadWorkspacePresetFamily, re as upsertWorkspacePresetFamily };
